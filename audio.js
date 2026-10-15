/**
 * AIR SUPERIORITY — JET AGE STUDIO SOUND ENGINE (DYNAMIC ESCALATION EDITION)
 * ----------------------------------------------------------------------------
 * 100% self-contained Web Audio API synthesis crafted by Idlewild Sound Works.
 * No external audio files, CDNs, or network assets are required. Every voice
 * is synthesized live from custom oscillators, acoustic noise buffers,
 * bandpass-filtered electric keys/brass voices, and stereo room convolution.
 *
 * Exposes a single global: window.AirAudio
 *
 *   SOUNDTRACK  A modular mid-century bossa-nova / Jet Age jazz phrase
 *               sequencer that dynamically escalates across 4 distinct
 *               intensity phases based on current turn progress:
 *                 - Phase 1 (0%–25%):  Chill, sparse lounge (122 BPM)
 *                 - Phase 2 (25%–50%): Walking bass & fuller voicings (126 BPM)
 *                 - Phase 3 (50%–75%): Tempo bump (+12 BPM -> 138 BPM), staccato
 *                                      synth brass chimes & layered rhythms
 *                 - Phase 4 (75%–100%): High-stakes Jet Age swing (148 BPM),
 *                                      syncopated ride cymbal & sharp accent hits
 *   SFX         Mechanical split-flap clicks, cabin seatbelt chimes, gate-claim
 *               stamps, teletype chirps, radar sweeps and bulletin stings.
 */
(function () {
  'use strict';

  // ==========================================================================
  // 1. CORE GRAPH & ESCALATION STATE
  // ==========================================================================

  const AirAudio = {
    ctx: null,
    ready: false,
    sfxEnabled: true,
    musicEnabled: true,
    masterVolume: 0.85,
    musicVolume: 0.5,
    sfxVolume: 0.8,
    _musicPlaying: false,

    // Turn-based escalation telemetry
    currentTurn: 1,
    maxTurns: 20,
    turnProgress: 0.0, // Normalized [0..1]
    currentPhase: 1,   // 1 | 2 | 3 | 4
    currentBpm: 122
  };

  let masterGain = null;
  let musicBus = null;
  let sfxBus = null;
  let reverb = null;
  let reverbSend = null;
  let noiseBuffer = null;

  /**
   * Generates a mono white-noise buffer for brushed percussion, rim clicks,
   * mechanical split-flaps, and ride cymbal synthesis.
   */
  function makeNoiseBuffer(ctx, seconds) {
    const len = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    return buf;
  }

  /**
   * Custom stereo impulse response: exponentially decaying acoustic tail
   * gives the mix a warm "terminal rotunda" room ambience.
   */
  function makeImpulseResponse(ctx, duration, decay) {
    const rate = ctx.sampleRate;
    const len = Math.floor(rate * duration);
    const ir = ctx.createBuffer(2, len, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = ir.getChannelData(ch);
      for (let i = 0; i < len; i++) {
        const t = i / len;
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay);
      }
    }
    return ir;
  }

  AirAudio.init = function init() {
    if (AirAudio.ctx) return AirAudio.ctx;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;

    const ctx = new Ctx();
    AirAudio.ctx = ctx;

    masterGain = ctx.createGain();
    masterGain.gain.value = AirAudio.masterVolume;
    masterGain.connect(ctx.destination);

    // Gentle bus compression keeps the multi-layered arrangement glued and warm
    if (ctx.createDynamicsCompressor) {
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -16;
      comp.knee.value = 22;
      comp.ratio.value = 3.2;
      comp.attack.value = 0.008;
      comp.release.value = 0.22;
      comp.connect(masterGain);
      musicBus = ctx.createGain();
      sfxBus = ctx.createGain();
      musicBus.connect(comp);
      sfxBus.connect(comp);
    } else {
      musicBus = ctx.createGain();
      sfxBus = ctx.createGain();
      musicBus.connect(masterGain);
      sfxBus.connect(masterGain);
    }

    musicBus.gain.value = AirAudio.musicEnabled ? AirAudio.musicVolume : 0;
    sfxBus.gain.value = AirAudio.sfxEnabled ? AirAudio.sfxVolume : 0;

    try {
      reverb = ctx.createConvolver();
      reverb.buffer = makeImpulseResponse(ctx, 2.1, 2.6);
      reverbSend = ctx.createGain();
      reverbSend.gain.value = 0.26;
      reverbSend.connect(reverb);
      reverb.connect(masterGain);
    } catch (_) {
      reverb = null;
      reverbSend = null;
    }

    noiseBuffer = makeNoiseBuffer(ctx, 2);
    AirAudio.ready = true;
    return ctx;
  };

  // Must be called from inside a user gesture before anything will be audible.
  AirAudio.unlock = function unlock() {
    const ctx = AirAudio.init();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
  };

  AirAudio.setMasterVolume = function (v) {
    AirAudio.masterVolume = Math.max(0, Math.min(1, v));
    if (masterGain) rampTo(masterGain.gain, AirAudio.masterVolume, 0.08);
  };

  AirAudio.setMusicVolume = function (v) {
    AirAudio.musicVolume = Math.max(0, Math.min(1, v));
    if (musicBus) rampTo(musicBus.gain, AirAudio.musicEnabled ? AirAudio.musicVolume : 0, 0.12);
  };

  AirAudio.setSfxVolume = function (v) {
    AirAudio.sfxVolume = Math.max(0, Math.min(1, v));
    if (sfxBus) rampTo(sfxBus.gain, AirAudio.sfxEnabled ? AirAudio.sfxVolume : 0, 0.08);
  };

  AirAudio.setMusicEnabled = function (on) {
    AirAudio.musicEnabled = !!on;
    if (musicBus) rampTo(musicBus.gain, on ? AirAudio.musicVolume : 0, 0.25);
    if (on) AirAudio.startMusic();
  };

  AirAudio.setSfxEnabled = function (on) {
    AirAudio.sfxEnabled = !!on;
    if (sfxBus) rampTo(sfxBus.gain, on ? AirAudio.sfxVolume : 0, 0.08);
  };

  function rampTo(param, value, time) {
    const ctx = AirAudio.ctx;
    if (!ctx) return;
    const now = ctx.currentTime;
    param.cancelScheduledValues(now);
    param.setValueAtTime(param.value, now);
    param.linearRampToValueAtTime(value, now + time);
  }

  // ==========================================================================
  // 2. TURN-BASED INTENSITY ESCALATION ENGINE
  // ==========================================================================

  /**
   * Phase Configuration Table:
   *  - Phase 1 (0% to <25%):  122 BPM — Chill, sparse, mellow lounge
   *  - Phase 2 (25% to <50%): 126 BPM — Walking bass activates, steady shaker, fuller extensions
   *  - Phase 3 (50% to <75%): 138 BPM — Noticeable tempo bump (+12 BPM), staccato synth brass chimes
   *  - Phase 4 (75% to 100%): 148 BPM — High-stakes Jet Age swing, driving rhythm, ride cymbal & hits
   */
  const PHASE_CONFIGS = {
    1: {
      phase: 1,
      label: 'PHASE 1: MELLOW LOUNGE',
      bpm: 122,
      swingRatio: 0.52,
      melodyChance: 0.48,
      brassChance: 0.0,
      accentHitChance: 0.0
    },
    2: {
      phase: 2,
      label: 'PHASE 2: WALKING CONCOURSE',
      bpm: 126,
      swingRatio: 0.55,
      melodyChance: 0.65,
      brassChance: 0.18,
      accentHitChance: 0.0
    },
    3: {
      phase: 3,
      label: 'PHASE 3: TURBO-PROP URGENCY',
      bpm: 138,
      swingRatio: 0.58,
      melodyChance: 0.78,
      brassChance: 0.65,
      accentHitChance: 0.28
    },
    4: {
      phase: 4,
      label: 'FINAL PHASE: JET AGE SWING',
      bpm: 148,
      swingRatio: 0.63,
      melodyChance: 0.88,
      brassChance: 0.85,
      accentHitChance: 0.65
    }
  };

  /**
   * Updates the soundtrack intensity phase based on the current turn relative
   * to the scheduled turn limit (e.g., 20 or 30 rounds).
   *
   * @param {number} currentTurn - 1-indexed current round/turn
   * @param {number} maxTurns    - Total scheduled rounds (e.g., 20 or 30)
   */
  AirAudio.setTurnProgress = function setTurnProgress(currentTurn, maxTurns) {
    const total = Math.max(1, Number(maxTurns) || 20);
    const turn = Math.max(1, Math.min(total, Number(currentTurn) || 1));
    // Progress fraction [0..1]: e.g. on a 20-turn game:
    // Turns 1-5 -> 0.00..0.20 (Phase 1: 0%-25%)
    // Turns 6-10 -> 0.25..0.45 (Phase 2: 25%-50%)
    // Turns 11-15 -> 0.50..0.70 (Phase 3: 50%-75%)
    // Turns 16-20 -> 0.75..0.95+ (Phase 4: 75%-Final Turn)
    const ratio = (turn - 1) / total;

    let phase = 1;
    if (ratio >= 0.75) {
      phase = 4;
    } else if (ratio >= 0.50) {
      phase = 3;
    } else if (ratio >= 0.25) {
      phase = 2;
    } else {
      phase = 1;
    }

    AirAudio.currentTurn = turn;
    AirAudio.maxTurns = total;
    AirAudio.turnProgress = ratio;
    AirAudio.currentPhase = phase;
    AirAudio.currentBpm = PHASE_CONFIGS[phase].bpm;
    return PHASE_CONFIGS[phase];
  };

  AirAudio.getPhaseInfo = function getPhaseInfo() {
    return PHASE_CONFIGS[AirAudio.currentPhase] || PHASE_CONFIGS[1];
  };

  // ==========================================================================
  // 3. SYNTH VOICE PRIMITIVES (ELECTRIC KEYS, VIBRAPHONE, BASS, BRASS, DRUMS)
  // ==========================================================================

  function voice(opts) {
    const ctx = AirAudio.ctx;
    if (!ctx) return;
    const {
      freq,
      start = ctx.currentTime,
      dur = 0.2,
      type = 'sine',
      gain = 0.1,
      attack = 0.005,
      bus = sfxBus,
      detune = 0,
      filter = null,
      send = 0,
      glideTo = null,
      vibrato = 0
    } = opts;

    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, start + dur);
    if (detune) osc.detune.setValueAtTime(detune, start);

    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), start + attack);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + dur);

    let node = osc;
    if (filter) {
      const biq = ctx.createBiquadFilter();
      biq.type = filter.type || 'lowpass';
      biq.frequency.setValueAtTime(filter.freq || 1200, start);
      if (filter.sweepTo) {
        biq.frequency.exponentialRampToValueAtTime(filter.sweepTo, start + dur);
      }
      biq.Q.value = filter.q || 0.8;
      node.connect(biq);
      node = biq;
    }
    node.connect(amp);
    amp.connect(bus || sfxBus);
    if (send > 0 && reverbSend) {
      const sendGain = ctx.createGain();
      sendGain.gain.value = send;
      amp.connect(sendGain);
      sendGain.connect(reverbSend);
    }

    if (vibrato > 0) {
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 5.4;
      lfoGain.gain.value = vibrato;
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start(start);
      lfo.stop(start + dur);
    }

    osc.start(start);
    osc.stop(start + dur + 0.02);
  }

  function noise(opts) {
    const ctx = AirAudio.ctx;
    if (!ctx || !noiseBuffer) return;
    const {
      start = ctx.currentTime,
      dur = 0.08,
      gain = 0.08,
      bus = sfxBus,
      type = 'bandpass',
      freq = 2400,
      q = 1.2,
      send = 0,
      sweepTo = null
    } = opts;

    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer;
    src.loop = true;

    const biq = ctx.createBiquadFilter();
    biq.type = type;
    biq.frequency.setValueAtTime(freq, start);
    if (sweepTo) biq.frequency.exponentialRampToValueAtTime(sweepTo, start + dur);
    biq.Q.value = q;

    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), start + 0.004);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + dur);

    src.connect(biq);
    biq.connect(amp);
    amp.connect(bus || sfxBus);
    if (send > 0 && reverbSend) {
      const sendGain = ctx.createGain();
      sendGain.gain.value = send;
      amp.connect(sendGain);
      sendGain.connect(reverbSend);
    }

    src.start(start, Math.random() * 1.2);
    src.stop(start + dur + 0.02);
  }

  /**
   * Vibraphone + Mellow Electric Keys voice:
   * Uses bandpass-filtered sine and triangle waves with metallic overtone shimmer.
   */
  function vibeElectricKey(freq, start, dur, gain, bus, richVoicing = false) {
    // Warm bandpass-filtered triangle body (Wurlitzer / Rhodes character)
    voice({
      freq,
      start,
      dur: dur * 0.92,
      type: 'triangle',
      gain: gain * 0.65,
      attack: 0.006,
      bus,
      filter: { type: 'bandpass', freq: freq * 1.6, q: 1.35 },
      send: 0.38
    });
    // Pure fundamental sine bell
    voice({
      freq,
      start,
      dur,
      type: 'sine',
      gain: gain * 0.72,
      attack: 0.004,
      bus,
      filter: { type: 'bandpass', freq: freq * 1.2, q: 0.9 },
      send: 0.48
    });
    // Harmonic shimmer (octave + 12th)
    voice({
      freq: freq * 2,
      start,
      dur: dur * 0.55,
      type: 'sine',
      gain: gain * (richVoicing ? 0.34 : 0.24),
      attack: 0.004,
      bus,
      send: 0.35
    });
    if (richVoicing) {
      voice({
        freq: freq * 3.0,
        start,
        dur: dur * 0.28,
        type: 'triangle',
        gain: gain * 0.12,
        attack: 0.003,
        bus,
        filter: { type: 'bandpass', freq: freq * 3.0, q: 2.0 },
        send: 0.3
      });
    }
  }

  // Keep classic vibe() helper for SFX chimes
  function vibe(freq, start, dur, gain, bus) {
    voice({ freq, start, dur, type: 'sine', gain, attack: 0.004, bus, send: 0.5 });
    voice({ freq: freq * 2, start, dur: dur * 0.6, type: 'sine', gain: gain * 0.3, attack: 0.004, bus, send: 0.4 });
    voice({ freq: freq * 4.02, start, dur: dur * 0.25, type: 'sine', gain: gain * 0.1, attack: 0.003, bus, send: 0.3 });
  }

  /**
   * Warm upright acoustic bass tone: lowpass-filtered triangle wave with a
   * woody fingerboard pluck transient.
   */
  function bassNote(freq, start, dur, gain, bus, accent = false) {
    voice({
      freq,
      start,
      dur,
      type: 'triangle',
      gain: accent ? gain * 1.18 : gain,
      attack: 0.01,
      bus,
      filter: { type: 'lowpass', freq: accent ? 540 : 420, q: 1.05 },
      send: 0.12
    });
    voice({
      freq: freq * 2,
      start,
      dur: 0.065,
      type: 'sine',
      gain: gain * (accent ? 0.32 : 0.22),
      attack: 0.004,
      bus
    });
  }

  /**
   * Urgent staccato synth brass / muted trumpet chime (Phase 3 & 4):
   * Layered detuned sawtooth + triangle through an envelope-swept bandpass filter.
   */
  function staccatoBrass(freq, start, dur, gain, bus) {
    voice({
      freq,
      start,
      dur,
      type: 'sawtooth',
      gain: gain * 0.72,
      attack: 0.012,
      bus,
      filter: {
        type: 'bandpass',
        freq: Math.min(3600, freq * 3.4),
        sweepTo: Math.max(600, freq * 1.5),
        q: 1.8
      },
      vibrato: 2.6,
      send: 0.42
    });
    voice({
      freq: freq * 1.003,
      start,
      dur: dur * 0.88,
      type: 'triangle',
      gain: gain * 0.45,
      attack: 0.008,
      bus,
      filter: { type: 'bandpass', freq: freq * 2.2, q: 1.4 },
      send: 0.32
    });
  }

  /**
   * High-stakes Jet Age Swing Ride Cymbal & Sharp Big-Band Accent Hit (Phase 4).
   */
  function rideCymbal(start, dur, gain, bus, bellAccent = false) {
    noise({
      start,
      dur,
      gain,
      type: 'highpass',
      freq: 6400,
      q: 0.85,
      bus,
      send: 0.24
    });
    // Metallic cymbal shimmer ring
    voice({
      freq: bellAccent ? 1080 : 890,
      start,
      dur: dur * 0.65,
      type: 'triangle',
      gain: gain * (bellAccent ? 0.35 : 0.18),
      attack: 0.003,
      bus,
      filter: { type: 'bandpass', freq: 3400, q: 4.5 },
      send: 0.2
    });
  }

  function sharpAccentHit(rootFreq, chordFreqs, start, bus) {
    // Low punchy kick/timpani thump + crisp snare snap + brass stab
    voice({
      freq: 130,
      start,
      dur: 0.14,
      type: 'sine',
      gain: 0.12,
      attack: 0.003,
      glideTo: 48,
      bus
    });
    noise({
      start,
      dur: 0.09,
      gain: 0.065,
      type: 'bandpass',
      freq: 2200,
      q: 2.2,
      bus,
      send: 0.35
    });
    chordFreqs.slice(0, 3).forEach((f, idx) => {
      staccatoBrass(f, start + idx * 0.008, 0.22, 0.048, bus);
    });
    bassNote(rootFreq, start, 0.28, 0.28, bus, true);
  }

  // ==========================================================================
  // 4. MODULAR JAZZ PHRASE SEQUENCER
  // ==========================================================================

  /**
   * Rather than repeating a single static 4-bar loop, the sequencer cycles and
   * branches across three distinct 4-bar harmonic phrase banks:
   *   - Bank A: Classic Idlewild Lounge (Fmaj9 -> Gm9 -> C13 -> F6/9)
   *   - Bank B: Twilight Concourse Bridge (Dm9 -> G13 -> Bbmaj7 -> A7alt)
   *   - Bank C: Transatlantic Turnaround (Gm7 -> Am7 -> Bbmaj7 -> C9sus4)
   *
   * Each chord entry includes:
   *   - root: fundamental bass frequency
   *   - walkTargets: candidate walking-bass quarter-note degrees (3rd, 5th, 6th, chromatic approach)
   *   - chordBasic: sparse 3-4 note voicing (Phase 1)
   *   - chordFull: extended 9th/13th jazz voicing (Phase 2-4)
   *   - scale: melodic & brass motif pitch collection
   */
  const PHRASE_BANKS = [
    // BANK A: Classic F-Major Lounge
    [
      {
        root: 87.31, // F2
        walkTargets: [110.0, 130.81, 146.83, 92.5, 103.83],
        chordBasic: [349.23, 440.0, 523.25],
        chordFull: [349.23, 440.0, 523.25, 659.25, 783.99],
        scale: [349.23, 392.0, 440.0, 523.25, 587.33, 659.25]
      },
      {
        root: 98.0, // G2
        walkTargets: [116.54, 146.83, 164.81, 123.47, 138.59],
        chordBasic: [349.23, 466.16, 587.33],
        chordFull: [392.0, 466.16, 587.33, 698.46, 880.0],
        scale: [392.0, 440.0, 466.16, 523.25, 587.33, 698.46]
      },
      {
        root: 130.81, // C3
        walkTargets: [164.81, 98.0, 116.54, 82.41, 92.5],
        chordBasic: [329.63, 466.16, 523.25],
        chordFull: [329.63, 440.0, 466.16, 587.33, 659.25],
        scale: [329.63, 392.0, 440.0, 466.16, 523.25, 659.25]
      },
      {
        root: 87.31, // F2 turnaround
        walkTargets: [110.0, 130.81, 146.83, 138.59, 123.47],
        chordBasic: [329.63, 440.0, 523.25],
        chordFull: [329.63, 392.0, 440.0, 587.33, 698.46],
        scale: [349.23, 440.0, 523.25, 587.33, 659.25, 783.99]
      }
    ],
    // BANK B: Warm Minor / Subdominant Bridge
    [
      {
        root: 73.42, // D2
        walkTargets: [87.31, 110.0, 130.81, 92.5, 103.83],
        chordBasic: [293.66, 349.23, 440.0],
        chordFull: [349.23, 440.0, 523.25, 659.25, 783.99],
        scale: [293.66, 349.23, 392.0, 440.0, 523.25, 659.25]
      },
      {
        root: 98.0, // G2 (G13)
        walkTargets: [123.47, 146.83, 174.61, 110.0, 116.54],
        chordBasic: [349.23, 493.88, 587.33],
        chordFull: [349.23, 440.0, 493.88, 659.25, 783.99],
        scale: [349.23, 392.0, 440.0, 493.88, 587.33, 659.25]
      },
      {
        root: 116.54, // Bb2 (Bbmaj9)
        walkTargets: [146.83, 174.61, 130.81, 110.0, 103.83],
        chordBasic: [349.23, 440.0, 587.33],
        chordFull: [349.23, 440.0, 523.25, 587.33, 698.46],
        scale: [349.23, 392.0, 440.0, 466.16, 587.33, 698.46]
      },
      {
        root: 110.0, // A2 (A7b13 turnaround)
        walkTargets: [138.59, 164.81, 98.0, 92.5, 82.41],
        chordBasic: [329.63, 415.3, 493.88],
        chordFull: [329.63, 415.3, 493.88, 587.33, 659.25],
        scale: [329.63, 349.23, 415.3, 440.0, 523.25, 659.25]
      }
    ],
    // BANK C: Jet-Stream Chromatic Ascent
    [
      {
        root: 98.0, // Gm7
        walkTargets: [116.54, 146.83, 103.83, 110.0],
        chordBasic: [349.23, 466.16, 587.33],
        chordFull: [349.23, 466.16, 523.25, 587.33, 698.46],
        scale: [392.0, 466.16, 523.25, 587.33, 698.46]
      },
      {
        root: 110.0, // Am7
        walkTargets: [130.81, 164.81, 116.54, 123.47],
        chordBasic: [329.63, 392.0, 523.25],
        chordFull: [329.63, 392.0, 493.88, 523.25, 659.25],
        scale: [329.63, 392.0, 440.0, 523.25, 659.25]
      },
      {
        root: 116.54, // Bbmaj7
        walkTargets: [146.83, 174.61, 130.81, 123.47],
        chordBasic: [349.23, 440.0, 587.33],
        chordFull: [349.23, 440.0, 523.25, 587.33, 698.46],
        scale: [349.23, 440.0, 466.16, 523.25, 587.33, 698.46]
      },
      {
        root: 130.81, // C9sus4 -> C7
        walkTargets: [98.0, 110.0, 116.54, 92.5],
        chordBasic: [349.23, 466.16, 587.33],
        chordFull: [329.63, 440.0, 466.16, 587.33, 698.46],
        scale: [349.23, 392.0, 466.16, 523.25, 587.33, 659.25]
      }
    ]
  ];

  // Modular comping rhythmic cells (eighth-note slots 0..7)
  const COMP_CELLS_SPARSE = [
    [1, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0]
  ];
  const COMP_CELLS_ACTIVE = [
    [1, 0, 0, 1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 0, 1, 0]
  ];
  const RIM_CELLS = [
    [1, 0, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 1]
  ];

  let schedulerId = null;
  let nextNoteTime = 0;
  let barIndex = 0;
  let activeBankIndex = 0;

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /**
   * Schedules a single bar of music dynamically adapted to the active
   * escalation phase (Phase 1 through Phase 4).
   */
  function scheduleBar(barStart, prog, nextProg, barInPhrase) {
    const bus = musicBus;
    const phaseCfg = AirAudio.getPhaseInfo();
    const phase = phaseCfg.phase;
    const beat = 60 / phaseCfg.bpm;
    const swingOffset = (phaseCfg.swingRatio - 0.5) * beat;

    // Helper for swung eighth-note timing (even 8ths on grid, odd 8ths delayed by swing)
    const eighthTime = (idx) => {
      const base = barStart + idx * (beat * 0.5);
      return idx % 2 === 1 ? base + swingOffset : base;
    };

    // ------------------------------------------------------------------------
    // LAYER 1: BASSLINE (Sparse pulse in Phase 1 -> Walking + Walk-ups in 2-4)
    // ------------------------------------------------------------------------
    if (phase === 1) {
      // Phase 1: Chill, sparse lounge — gentle bass pulse on beat 1 and beat 3
      bassNote(prog.root, barStart, beat * 1.45, 0.27, bus, false);
      bassNote(prog.root * 1.4983, barStart + beat * 2, beat * 1.2, 0.22, bus, false);
      if (barInPhrase === 3 && Math.random() < 0.45) {
        // Occasional soft chromatic walk-up into next bar
        bassNote(nextProg.root * 0.9438, barStart + beat * 3.5, beat * 0.45, 0.16, bus, false);
      }
    } else {
      // Phases 2, 3, 4: Walking quarter-note bassline with pseudo-randomized walk-ups
      const w1 = prog.root;
      const w2 = pickRandom(prog.walkTargets);
      const w3 = prog.root * 1.4983; // Fifth
      // Beat 4 approaches the next chord's root by semitone or whole tone
      const approachMult = Math.random() < 0.5 ? 0.94387 : 1.05946;
      const w4 = nextProg ? nextProg.root * approachMult : pickRandom(prog.walkTargets);

      const walkNotes = [w1, w2, w3, w4];
      const baseGain = phase >= 4 ? 0.31 : 0.27;

      walkNotes.forEach((freq, beatIdx) => {
        const t = barStart + beatIdx * beat;
        bassNote(freq, t, beat * 0.92, baseGain, bus, beatIdx === 0 || (phase === 4 && beatIdx === 2));
      });

      // Syncopated 8th-note bass walk-up pickup on beat 3-and or 4-and
      if (Math.random() < (phase >= 3 ? 0.78 : 0.48)) {
        const pickupBeat = Math.random() < 0.5 ? 5 : 7;
        const pickupFreq = pickupBeat === 7 ? nextProg.root * 1.12246 : pickRandom(prog.walkTargets);
        bassNote(pickupFreq, eighthTime(pickupBeat), beat * 0.42, baseGain * 0.72, bus, false);
      }
    }

    // ------------------------------------------------------------------------
    // LAYER 2: VIBRAPHONE & BANDPASS ELECTRIC KEYS COMPING
    // ------------------------------------------------------------------------
    const compPattern = phase === 1 ? pickRandom(COMP_CELLS_SPARSE) : pickRandom(COMP_CELLS_ACTIVE);
    const chordVoicing = phase === 1 ? prog.chordBasic : prog.chordFull;

    compPattern.forEach((hit, i) => {
      if (!hit) return;
      const t = eighthTime(i);
      // Pseudo-randomize chord inversion / voice dropping for organic comping
      const subset =
        phase === 1
          ? chordVoicing
          : chordVoicing.filter((_, idx) => idx === 0 || Math.random() < 0.82);

      subset.forEach((f, idx) => {
        const octaveShift = phase >= 3 && idx === subset.length - 1 && Math.random() < 0.35 ? 2 : 1;
        vibeElectricKey(
          f * octaveShift,
          t + idx * 0.011,
          (phase >= 3 ? 0.68 : 0.92) + Math.random() * 0.22,
          phase === 1 ? 0.044 : 0.052,
          bus,
          phase >= 2
        );
      });
    });

    // ------------------------------------------------------------------------
    // LAYER 3: PERCUSSION, SHAKER, RIM CLICKS & PHASE 4 SWING RIDE CYMBAL
    // ------------------------------------------------------------------------
    if (phase === 1) {
      // Minimal snare/rim tick on beats 2 and 4-and
      [2, 5].forEach((slot) => {
        if (Math.random() < 0.8) {
          const t = eighthTime(slot);
          noise({
            start: t,
            dur: 0.032,
            gain: 0.032,
            type: 'bandpass',
            freq: 1850,
            q: 4.5,
            bus,
            send: 0.22
          });
        }
      });
      // Very light quarter-note brush whisper
      for (let q = 0; q < 4; q++) {
        noise({
          start: barStart + q * beat,
          dur: 0.045,
          gain: 0.014,
          type: 'highpass',
          freq: 5600,
          q: 0.7,
          bus
        });
      }
    } else {
      // Phase 2+: Steady eighth-note brushed shaker/cymbal groove
      for (let i = 0; i < 8; i++) {
        const t = eighthTime(i);
        noise({
          start: t,
          dur: 0.052,
          gain: i % 2 === 0 ? 0.022 : 0.036,
          type: 'highpass',
          freq: 5400,
          q: 0.75,
          bus,
          send: 0.16
        });
      }

      // Syncopated bossa/jazz rim clicks
      const rimCell = pickRandom(RIM_CELLS);
      rimCell.forEach((hit, i) => {
        if (!hit) return;
        const t = eighthTime(i);
        noise({ start: t, dur: 0.035, gain: 0.048, type: 'bandpass', freq: 1750, q: 5.0, bus, send: 0.28 });
        voice({ freq: 330, start: t, dur: 0.045, type: 'triangle', gain: 0.04, bus });
      });
    }

    // Phase 3+: Layered syncopated hi-hat / snare ghost ticks
    if (phase >= 3) {
      [1, 3, 6, 7].forEach((slot) => {
        if (Math.random() < 0.55) {
          const t = eighthTime(slot);
          noise({
            start: t,
            dur: 0.028,
            gain: 0.038,
            type: 'bandpass',
            freq: 3200,
            q: 3.2,
            bus,
            send: 0.2
          });
        }
      });
    }

    // Final Phase (Phase 4): Driving Jet Age Swing Ride Cymbal ("ding-ding-da-ding")
    if (phase === 4) {
      // Quarter notes on 1, 2, 3, 4 + swung skip notes on 2-and and 4-and
      const rideSlots = [0, 2, 3, 4, 6, 7];
      rideSlots.forEach((slot) => {
        const isSkip = slot % 2 === 1;
        const t = eighthTime(slot);
        rideCymbal(
          t,
          isSkip ? 0.08 : 0.16,
          isSkip ? 0.034 : 0.046,
          bus,
          slot === 2 || slot === 6
        );
      });
    }

    // ------------------------------------------------------------------------
    // LAYER 4: IMPROVISED MELODIC PHRASES & STACCATO SYNTH BRASS CHIMES
    // ------------------------------------------------------------------------
    if (Math.random() < phaseCfg.melodyChance) {
      const notes = prog.scale;
      const noteCount = phase === 1 ? (Math.random() < 0.35 ? 2 : 1) : phase === 2 ? 2 : 3;
      const candidateSlots = [0, 1, 2, 3, 4, 5, 6, 7];

      let lastPitchIdx = Math.floor(Math.random() * notes.length);
      for (let n = 0; n < noteCount; n++) {
        const slot = candidateSlots[Math.min(7, n * 2 + (Math.random() < 0.5 ? 1 : 0))];
        const t = eighthTime(slot);
        // Stepwise or small-interval motion for coherent jazz phrasing
        const step = Math.random() < 0.65 ? (Math.random() < 0.5 ? 1 : -1) : (Math.random() < 0.5 ? 2 : -2);
        lastPitchIdx = (lastPitchIdx + step + notes.length) % notes.length;
        const f = notes[lastPitchIdx];

        if (phase >= 3 && Math.random() < phaseCfg.brassChance) {
          // Urgent staccato synth brass / muted trumpet chime
          staccatoBrass(f, t, beat * (0.38 + Math.random() * 0.28), 0.056, bus);
        } else {
          // Mellow flute / lounge vibraphone lead
          voice({
            freq: f,
            start: t,
            dur: 0.42 + Math.random() * 0.35,
            type: 'sine',
            gain: 0.052,
            attack: 0.045,
            bus,
            vibrato: 3.1,
            send: 0.52,
            filter: { type: 'bandpass', freq: f * 2.0, q: 0.85 }
          });
          voice({
            freq: f * 1.004,
            start: t,
            dur: 0.36,
            type: 'triangle',
            gain: 0.022,
            attack: 0.05,
            bus,
            send: 0.38
          });
        }
      }
    }

    // ------------------------------------------------------------------------
    // LAYER 5: DRAMATIC BIG-BAND ACCENT HITS (Phase 3 turnaround & Phase 4)
    // ------------------------------------------------------------------------
    if (phase >= 3 && Math.random() < phaseCfg.accentHitChance) {
      const hitSlot = barInPhrase === 3 ? 6 : pickRandom([0, 3, 6]);
      sharpAccentHit(prog.root * 2, prog.chordFull, eighthTime(hitSlot), bus);
    }
  }

  function scheduler() {
    const ctx = AirAudio.ctx;
    if (!ctx || !AirAudio._musicPlaying) return;

    while (nextNoteTime < ctx.currentTime + 0.55) {
      const bank = PHRASE_BANKS[activeBankIndex % PHRASE_BANKS.length];
      const barInPhrase = barIndex % 4;
      const prog = bank[barInPhrase];

      // At the end of each 4-bar phrase, pseudo-randomly select the next phrase bank
      let nextBankIndex = activeBankIndex;
      if (barInPhrase === 3) {
        const r = Math.random();
        if (r < 0.5) nextBankIndex = 0; // Return to Home Bank A
        else if (r < 0.78) nextBankIndex = 1; // Bridge Bank B
        else nextBankIndex = 2; // Chromatic Ascent Bank C
      }
      const nextBank = PHRASE_BANKS[nextBankIndex % PHRASE_BANKS.length];
      const nextProg = nextBank[(barInPhrase + 1) % 4];

      scheduleBar(nextNoteTime, prog, nextProg, barInPhrase);

      const currentBpm = AirAudio.getPhaseInfo().bpm;
      const barDuration = (60 / currentBpm) * 4;
      nextNoteTime += barDuration;
      barIndex++;
      if (barInPhrase === 3) {
        activeBankIndex = nextBankIndex;
      }
    }
  }

  AirAudio.startMusic = function startMusic() {
    const ctx = AirAudio.init();
    if (!ctx || AirAudio._musicPlaying) return;
    if (ctx.state === 'suspended') ctx.resume();
    AirAudio._musicPlaying = true;
    nextNoteTime = ctx.currentTime + 0.12;
    scheduler();
    schedulerId = window.setInterval(scheduler, 120);
  };

  AirAudio.stopMusic = function stopMusic() {
    AirAudio._musicPlaying = false;
    if (schedulerId) {
      window.clearInterval(schedulerId);
      schedulerId = null;
    }
  };

  // ==========================================================================
  // 5. SOUND EFFECTS — MECHANICAL, VINTAGE, TACTILE
  // ==========================================================================

  function gate() {
    if (!AirAudio.sfxEnabled) return false;
    const ctx = AirAudio.init();
    if (!ctx) return false;
    if (ctx.state === 'suspended') ctx.resume();
    return true;
  }

  // Single mechanical split-flap flip — used on UI hover.
  AirAudio.flapClick = function () {
    if (!gate()) return;
    const t = AirAudio.ctx.currentTime;
    noise({ start: t, dur: 0.028, gain: 0.07, type: 'bandpass', freq: 2600, q: 3.4 });
    voice({ freq: 1750, start: t, dur: 0.018, type: 'square', gain: 0.022 });
  };

  // A short cascade of flaps — menu transitions, board reveals.
  AirAudio.flapCascade = function (count = 7) {
    if (!gate()) return;
    const t0 = AirAudio.ctx.currentTime;
    for (let i = 0; i < count; i++) {
      const t = t0 + i * 0.045;
      noise({ start: t, dur: 0.03, gain: 0.055, type: 'bandpass', freq: 2200 + Math.random() * 1400, q: 3.2 });
      voice({ freq: 1500 + Math.random() * 700, start: t, dur: 0.02, type: 'square', gain: 0.018 });
    }
  };

  // Cabin seatbelt sign chime — turn changes.
  AirAudio.cabinChime = function () {
    if (!gate()) return;
    const t = AirAudio.ctx.currentTime;
    vibe(1046.5, t, 1.1, 0.085, sfxBus);
    vibe(783.99, t + 0.17, 1.5, 0.075, sfxBus);
  };

  // Full PA announcement chime (two-tone, longer tail).
  AirAudio.paChime = function () {
    if (!gate()) return;
    const t = AirAudio.ctx.currentTime;
    vibe(783.99, t, 1.4, 0.09, sfxBus);
    vibe(587.33, t + 0.28, 1.8, 0.085, sfxBus);
  };

  // Rubber stamp / ticket punch — gate claims.
  AirAudio.stamp = function () {
    if (!gate()) return;
    const t = AirAudio.ctx.currentTime;
    noise({ start: t, dur: 0.07, gain: 0.14, type: 'lowpass', freq: 900, q: 0.8, sweepTo: 260 });
    voice({ freq: 160, start: t, dur: 0.09, type: 'square', gain: 0.09, glideTo: 62 });
    voice({ freq: 2400, start: t, dur: 0.02, type: 'square', gain: 0.03 });
    noise({ start: t + 0.05, dur: 0.05, gain: 0.04, type: 'highpass', freq: 3800, q: 0.7, send: 0.2 });
  };

  // Paper shred / toss — hand overflow discard.
  AirAudio.shred = function () {
    if (!gate()) return;
    const t = AirAudio.ctx.currentTime;
    noise({ start: t, dur: 0.3, gain: 0.07, type: 'bandpass', freq: 3600, q: 0.9, sweepTo: 900 });
    noise({ start: t + 0.06, dur: 0.2, gain: 0.04, type: 'highpass', freq: 5200, q: 0.6 });
  };

  // Teletype chirp — news bulletins and ticker headlines.
  AirAudio.teletype = function (count = 9) {
    if (!gate()) return;
    const t0 = AirAudio.ctx.currentTime;
    for (let i = 0; i < count; i++) {
      const t = t0 + i * 0.038 + Math.random() * 0.008;
      voice({ freq: 2100 + Math.random() * 900, start: t, dur: 0.016, type: 'square', gain: 0.03 });
      noise({ start: t, dur: 0.02, gain: 0.03, type: 'bandpass', freq: 3200, q: 4 });
    }
    voice({ freq: 980, start: t0 + count * 0.038, dur: 0.1, type: 'triangle', gain: 0.05 });
  };

  // Radar sweep whoosh — title sequence transitions.
  AirAudio.radarSweep = function () {
    if (!gate()) return;
    const t = AirAudio.ctx.currentTime;
    noise({ start: t, dur: 0.85, gain: 0.07, type: 'bandpass', freq: 380, q: 1.1, sweepTo: 4200, send: 0.5 });
    voice({ freq: 110, start: t, dur: 0.8, type: 'sine', gain: 0.05, glideTo: 520, send: 0.4 });
  };

  // Breaking-bulletin sting — the news anchor takeover.
  AirAudio.bulletinSting = function () {
    if (!gate()) return;
    const t = AirAudio.ctx.currentTime;
    [523.25, 698.46, 880.0].forEach((f, i) => {
      voice({
        freq: f,
        start: t + i * 0.085,
        dur: 0.42,
        type: 'sawtooth',
        gain: 0.055,
        attack: 0.01,
        filter: { type: 'lowpass', freq: 2400, q: 1.1 },
        send: 0.5
      });
    });
    noise({ start: t, dur: 0.5, gain: 0.05, type: 'bandpass', freq: 1200, q: 0.8, sweepTo: 240, send: 0.4 });
  };

  AirAudio.cardDeploy = function () {
    if (!gate()) return;
    const t = AirAudio.ctx.currentTime;
    noise({ start: t, dur: 0.12, gain: 0.05, type: 'bandpass', freq: 3000, q: 0.9, sweepTo: 1200 });
    vibe(659.25, t + 0.03, 0.5, 0.06, sfxBus);
    vibe(987.77, t + 0.1, 0.55, 0.05, sfxBus);
  };

  AirAudio.error = function () {
    if (!gate()) return;
    const t = AirAudio.ctx.currentTime;
    voice({ freq: 196, start: t, dur: 0.16, type: 'sawtooth', gain: 0.05, filter: { type: 'lowpass', freq: 900 } });
    voice({ freq: 165, start: t + 0.1, dur: 0.2, type: 'sawtooth', gain: 0.05, filter: { type: 'lowpass', freq: 800 } });
  };

  AirAudio.victory = function () {
    if (!gate()) return;
    const t = AirAudio.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => {
      vibe(f, t + i * 0.12, 1.4, 0.08, sfxBus);
    });
    noise({ start: t, dur: 0.6, gain: 0.03, type: 'highpass', freq: 6000, q: 0.6, send: 0.5 });
  };

  window.AirAudio = AirAudio;
})();
