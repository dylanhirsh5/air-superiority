/**
 * AIR SUPERIORITY — Idlewild Interactive Studio
 * Boutique Mid-Century Modern Airline Strategy Game
 * Custom Terminal Architecture, Touch & Mouse Pan/Zoom Camera, 3D Gate Pins,
 * 1950s UPA Animated Commuters, 33 SVG Insignias, i18n (EN/JA/HU/ES) & News Wire
 */

(() => {
  'use strict';

  // ============================================================================
  // 0. INTERNATIONALIZATION (i18n) ENGINE — EN / JA / HU / ES
  // ============================================================================

  const LANG_STORAGE_KEY = 'air_superiority_lang';
  const SUPPORTED_LANGS = ['en', 'ja', 'hu', 'es'];

  const LOCALES = {
    en: {
      'title.eyebrow': 'AN INDEPENDENT JET AGE STRATEGY PICTURE',
      'title.wordAir': 'AIR',
      'title.wordSup': 'SUPERIORITY',
      'title.tagline': 'GATE MONOPOLY • ROUTE SYNERGY • TERMINAL WARFARE',
      'title.startGame': 'START GAME',
      'title.settings': 'SETTINGS',
      'title.howToPlay': 'HOW TO PLAY',
      'title.credit': 'IDLEWILD INTERACTIVE STUDIO • INTERNATIONAL HUB COMMISSION • NO. 084-9921-JFK',
      'menu.eyebrow': 'IDLEWILD INTERACTIVE • INTERNATIONAL HUB COMMISSION',
      'menu.title': 'AIR SUPERIORITY',
      'menu.subtitle': 'TERMINAL BLUEPRINT & GATE MONOPOLY STRATEGY',
      'menu.stamp': 'FIRST CLASS CHARTER',
      'setup.dispatchMode': 'FLIGHT DISPATCH MODE',
      'setup.modeSoloTitle': 'SOLO FLIGHT (VS AI)',
      'setup.modeSoloDesc': 'Command your flagship airline against rival charter syndicates',
      'setup.modeCoopTitle': 'PASS & PLAY (LOCAL)',
      'setup.modeCoopDesc': '2 to 4 captains share the terminal with privacy handoffs',
      'setup.modeOnlineTitle': 'ONLINE FLIGHT (P2P MULTIPLAYER)',
      'setup.modeOnlineDesc': 'Host or join a private Departure Lounge via Room Code & Gate Pass',
      'online.towerControl': 'TOWER DISPATCH',
      'online.hostOptionTitle': 'HOST DEPARTURE LOUNGE',
      'online.inboundCharter': 'INBOUND CHARTER',
      'online.joinOptionTitle': 'JOIN VIA ROOM CODE',
      'online.roomCodeLabel': 'ROOM CODE (SHARE WITH CAPTAINS)',
      'online.copyBtn': 'COPY',
      'online.copiedBtn': 'COPIED!',
      'online.newCodeBtn': 'NEW',
      'online.gatePassOptional': 'GATE PASS (OPTIONAL PASSWORD)',
      'online.hostPassPlaceholder': 'Open Gate (No Pass)',
      'online.hostListening': 'Control Tower broadcasting — awaiting captains at the gate...',
      'online.hostReady': 'Boarding Approved — {n} captains ready for departure!',
      'online.hostOffline': 'PeerJS signaling unavailable — Solo & Local modes remain ready.',
      // --- Link diagnostics & connection detail (EN only; other locales fall back) ---
      'online.detailOpening': 'Opening signalling socket via {server}…',
      'online.detailLive': 'Tower LIVE on {server} — room {code} is accepting captains.',
      'online.detailTimeout': 'Signalling tower did not answer in time.',
      'online.detailFallback': 'Falling back to {server}…',
      'online.detailAllDown': 'All signalling towers unreachable — check your network or add a custom tower in Settings → Network.',
      'online.detailReconnecting': 'Signalling socket parked — reconnecting…',
      'online.detailDropped': 'Signalling socket kept dropping.',
      'online.detailIdBusy': 'Room code still held by a previous session — retry {n}/3…',
      'online.detailNewCode': 'Previous session still holding the old code. New room code issued: {code}',
      'online.detailNoLib': 'PeerJS library failed to load (blocked by an extension, firewall or offline).',
      'online.detailGuestJoined': '{name} boarded the departure lounge.',
      'online.detailDialing': 'Signalling OK — dialling room {code}…',
      'online.detailRetryHost': 'No answer from that room yet — retry {n}/3…',
      'online.detailRetryChannel': 'Data channel stalled — re-dialling {n}/2…',
      'online.detailRelayNeeded': 'Signalling worked but no peer-to-peer tunnel could be opened. You are very likely behind a strict (symmetric) NAT — add a TURN relay in Settings → Network.',
      'online.detailChannelOpen': 'Data channel open — requesting boarding clearance…',
      'online.detailChannelError': 'Data channel error — attempting to recover…',
      'online.detailApproved': 'Boarding approved by the Host Captain.',
      'online.detailHostClosed': 'The Host Captain closed the departure lounge.',
      'online.detailRoomFull': 'That departure lounge already has 4 captains.',
      'online.detailInProgress': 'That match has already departed — ask the host for a rematch invite.',
      'online.detailBadPass': 'Gate Pass rejected by the Control Tower.',
      'online.detailBadCode': 'Enter a full room code, for example TWA-404.',
      'online.detailFetchRelay': 'Fetching TURN relay credentials…',
      'online.detailSilence': 'No heartbeat from the Control Tower for 20s — link may be dead.',
      'online.inviteLinkLabel': 'ONE-CLICK INVITE LINK',
      'online.copyLinkBtn': 'COPY LINK',
      'online.testLinkBtn': 'TEST MY CONNECTION',
      'online.testRunning': 'Testing link…',
      'online.diagPeerScript': 'PeerJS library',
      'online.diagWebrtc': 'WebRTC support',
      'online.diagHost': 'Local candidates',
      'online.diagSrflx': 'Public address (STUN)',
      'online.diagRelay': 'Relay available (TURN)',
      'online.diagRelayHint': 'No TURN relay. Direct play usually still works; if a friend cannot connect, add a relay in Settings → Network.',
      'online.diagAllGood': 'All green — this device can host or join online matches.',
      'online.diagNoStun': 'Could not discover a public address. A restrictive firewall or VPN is blocking WebRTC.',
      'online.connectedRosterLabel': 'DEPARTURE LOUNGE ROSTER (2–4 CAPTAINS)',
      'online.boardedCount': '{n} / 4 BOARDED',
      'online.enterRoomCode': 'ENTER ROOM CODE',
      'online.joinCodePlaceholder': 'e.g. TWA-404',
      'online.enterGatePass': 'GATE PASS (PASSWORD)',
      'online.joinPassPlaceholder': 'Leave blank if open',
      'online.connectTowerBtn': 'REQUEST BOARDING CLEARANCE',
      'online.joinIdleStatus': 'Enter a Room Code from your Host Captain and request clearance.',
      'online.connectingStatus': 'Connecting to Control Tower...',
      'online.boardingApprovedStatus': 'Boarding Approved',
      'online.authErrorStatus': 'Incorrect Gate Pass / Room Not Found',
      'online.roomFullStatus': 'Departure Lounge Full (4/4 Captains)',
      'online.departBtn': 'DEPART (START GAME)',
      'online.departNeedMoreBtn': 'DEPART (START GAME) — NEED 2+ PLAYERS',
      'online.guestWaitBtn': 'BOARDING APPROVED — AWAITING HOST DEPARTURE',
      'online.hostBadge': 'HOST CAPTAIN',
      'online.guestBadge': 'BOARDED',
      'online.youBadge': 'YOU',
      'online.inactiveHoldingChip': 'IN HOLDING PATTERN (INACTIVE)',
      'online.waitingPeerPrompt': 'ONLINE FLIGHT: {name} is at the controls...',
      'online.syncingPrompt': 'TRANSMITTING ORDERS TO CONTROL TOWER...',
      'setup.carrierReg': 'CARRIER REGISTRATION & INSIGNIA',
      'setup.captainReg': 'CAPTAIN 0{n} REGISTRATION & INSIGNIA',
      'setup.selectCaptain': 'SELECT CAPTAIN TO CONFIGURE (NAME, COLOR & EMBLEM)',
      'setup.editingCaptain': 'Editing: <strong>Captain 0{n} ({name})</strong>',
      'setup.airlineCallsign': 'AIRLINE CALLSIGN / CARRIER NAME',
      'setup.captainCallsign': 'CAPTAIN 0{n} CALLSIGN / CARRIER NAME',
      'setup.airlinePlaceholder': 'Enter Airline Name...',
      'setup.pinLivery': 'PIN LIVERY ACCENT',
      'setup.pinAccentCaption': 'Pin Accent: <strong>{name}</strong>',
      'setup.corporateEmblem': 'CORPORATE EMBLEM (33 AUTHORIZED INSIGNIAS)',
      'setup.selectedEmblemCaption': 'Selected: <strong>{name}</strong>',
      'setup.flightOps': 'OPERATING PARAMETERS & RIVALS',
      'setup.rivalAirlines': 'COMPETING RIVAL CARRIERS',
      'setup.rivals1': '1 RIVAL (2P)',
      'setup.rivals2': '2 RIVALS (3P)',
      'setup.rivals3': '3 RIVALS (4P)',
      'setup.syndicateAggression': 'RIVAL SYNDICATE AGGRESSION',
      'setup.diffEasy': 'EASY',
      'setup.diffNormal': 'NORMAL',
      'setup.diffHard': 'HARD',
      'setup.diffDescEasy': '<strong>Easy (Casual Charter):</strong> Rivals select opportunistic gates across the terminal and rarely deploy offensive Action Coupons.',
      'setup.diffDescNormal': '<strong>Normal (Regional Carrier):</strong> Rivals prioritize high-yield empty gates and play tactical cards opportunistically.',
      'setup.diffDescHard': '<strong>Hard (Global Syndicate):</strong> Rivals calculate network synergies and aggressively target the leading carrier with <em>Gate Change</em> cards!',
      'setup.coopCaptainsLabel': 'REGISTERED CAPTAINS (PASS & PLAY)',
      'setup.coop2P': '2 PLAYERS',
      'setup.coop3P': '3 PLAYERS',
      'setup.coop4P': '4 PLAYERS',
      'setup.coopManifestLabel': 'PASS & PLAY FLIGHT MANIFEST',
      'setup.coopClickToEdit': 'Tap or click any card to edit',
      'setup.editingTag': 'EDITING',
      'setup.customizeTag': 'CUSTOMIZE',
      'setup.turnLimitLabel': 'SCHEDULED TURN LIMIT',
      'setup.turns20': '20 ROUNDS (STANDARD)',
      'setup.turns30': '30 ROUNDS (MARATHON)',
      'setup.directivesTitle': 'ARCHITECTURAL & FLIGHT DIRECTIVES',
      'setup.directive1': '<strong>Dynamic Hub Blueprint:</strong> Every match drafts a fresh terminal layout, gate topology, and passenger commuter flow.',
      'setup.directive2': '<strong>One Action Per Turn:</strong> Each turn you may claim <strong>one gate</strong> <em>or</em> play <strong>one Action Card</strong> — never both. Pass if neither suits.',
      'setup.directive3': '<strong>Auto-Draw & 3-Card Limit:</strong> Draw 1 coupon automatically each turn; the oldest coupon is voided if your hand exceeds 3.',
      'setup.directive4': '<strong>Route Synergy:</strong> Each directly connected gate held by the same airline compounds that gate’s output by <strong>+25%</strong>.',
      'setup.directive5': '<strong>Sudden Death Majority:</strong> Immediately win by controlling a strict majority of all gates.',
      'setup.directive6': '<strong>Passenger Supremacy:</strong> Otherwise, highest total passengers moved at the turn limit wins.',
      'setup.directive7': '<strong>Touch & Mouse Controls:</strong> Drag with 1 finger or mouse to pan; pinch with 2 fingers or scroll wheel to zoom.',
      'setup.manualBtn': 'FLIGHT MANUAL & RULES',
      'setup.launchBtn': 'ISSUE BOARDING PASS & LAUNCH',
      'hud.title': 'AIR SUPERIORITY',
      'hud.subtitle': 'TERMINAL ARCHITECTURAL BLUEPRINT • IDLEWILD SECTOR',
      'hud.roundLabel': 'ROUND',
      'hud.majorityLabel': 'MAJORITY GOAL',
      'hud.gatesUnit': 'GATES',
      'hud.topologyLabel': 'TOPOLOGY',
      'hud.directiveLabel': 'GLOBAL DIRECTIVE',
      'hud.newMapBtn': 'NEW MAP',
      'hud.musicOn': 'MUSIC: ON',
      'hud.musicOff': 'MUSIC: OFF',
      'hud.sfxOn': 'SFX: ON',
      'hud.sfxOff': 'SFX: OFF',
      'hud.settingsBtn': 'SETTINGS',
      'hud.manualBtn': 'MANUAL',
      'hud.setupBtn': 'SETUP',
      'hud.you': 'YOU',
      'hud.worldWire': 'WORLD WIRE',
      'sidebar.standingsTitle': 'CARRIER STANDINGS',
      'sidebar.telemetryTag': 'LIVE TELEMETRY',
      'sidebar.bulletinTitle': 'WORLD AVIATION BULLETIN',
      'sidebar.nextBulletinIn': 'NEXT IN {n} RD',
      'sidebar.dispatchLogTitle': 'DISPATCH LOG',
      'sidebar.towerTag': 'TOWER',
      'sidebar.roleCaptain': 'CAPTAIN',
      'sidebar.roleRival': 'SYNDICATE • {n} CPNS',
      'sidebar.roleCoop': 'CAPTAIN 0{id} • {n} CPNS',
      'sidebar.chipHold': 'HOLDING',
      'sidebar.chipSst': 'SST x2',
      'sidebar.chipSmear': 'SMEARED',
      'sidebar.gatesMetric': 'GATES',
      'sidebar.passengersMetric': 'PASSENGERS',
      'sidebar.outputMetric': 'OUTPUT',
      'sidebar.targetPlayer': '▶ TARGET {name}',
      'board.defaultPrompt': 'YOUR TURN — ONE ACTION: claim an unclaimed gate pin, OR deploy one Flight Coupon below. Not both.',
      'board.cancelTargetBtn': 'CANCEL TARGETING',
      'board.handoverPrompt': 'COCKPIT HANDOVER: Awaiting {name} at Gate A1...',
      'board.privacyHint': 'Privacy screen active.',
      'board.rivalOperating': 'RIVAL CARRIER IN OPERATION: {name} is issuing orders...',
      'board.resolvingBulletin': 'RESOLVING WORLD AVIATION BULLETIN...',
      'board.standByHint': 'Stand by for rival traffic...',
      'board.targetingPrefix': '{name} — TARGETING [{card}]: {prompt}',
      'board.selectTargetHint': 'Select a highlighted target.',
      'board.yourTurnPrompt': '{name} TURN — ONE ACTION: claim an unclaimed gate pin, OR deploy one Flight Coupon below. Not both.',
      'board.oneActionAvail': '1 action available for {name}.',
      'board.gateClaimedPrompt': 'GATE CLAIMED: your single action is spent — coupons are locked. Tap or click "END TURN".',
      'board.gateSpentHint': 'Action spent on a gate claim.',
      'board.couponDeployedPrompt': 'COUPON DEPLOYED: your single action is spent — gate claims are locked. Tap or click "END TURN".',
      'board.couponSpentHint': 'Action spent on a coupon.',
      'legend.hub': 'ROTUNDA HUB (+180 PAX)',
      'legend.main': 'MAIN GATE (+120 PAX)',
      'legend.regional': 'PIER GATE (+80 PAX)',
      'legend.synergy': 'PULSING ROUTE = +25% / LINK',
      'legend.controls': 'DRAG TO PAN • PINCH / SCROLL TO ZOOM',
      'tooltip.owner': 'OWNER: {name}',
      'tooltip.unclaimed': 'UNCLAIMED TERMINAL GATE',
      'tooltip.sector': 'SECTOR: {sector}',
      'tooltip.output': 'OUTPUT: <strong>+{yield} PAX / TURN</strong>',
      'tooltip.synergy': '⇄ ROUTE SYNERGY: {links} LINK(S) • ×{mult}',
      'tooltip.lounge': '★ LOUNGE UPGRADE ×{mult} BASE OUTPUT',
      'tooltip.closed': '⚠ RUNWAY CLOSED UNTIL ROUND {round}',
      'deck.mobileHideTray': 'HIDE BOARDING PASS TRAY ▼',
      'deck.mobileShowTray': 'SHOW BOARDING PASS TRAY ▲',
      'deck.turnActionLabel': 'TURN ACTION (CHOOSE ONE)',
      'deck.claimGateOpt': 'Claim 1 Gate',
      'deck.orLabel': '— OR —',
      'deck.playCouponOpt': 'Play 1 Coupon',
      'deck.awaitingOrders': 'Awaiting your orders, Captain.',
      'deck.couponsHeader': 'FLIGHT COUPONS / ACTION CARDS',
      'deck.couponsSub': 'Auto-draw 1 per turn • swipe or hover for briefing • oldest coupon voided above 3',
      'deck.drawPile': 'DRAW PILE',
      'deck.discardPile': 'DISCARD',
      'deck.passTurn': 'PASS TURN',
      'deck.takeNoAction': 'Take no action ➔',
      'deck.endTurn': 'END TURN',
      'deck.actionSpentSub': 'Action spent • Next carrier ➔',
      'deck.standBy': 'STAND BY',
      'deck.awaitingHandoverSub': 'Awaiting captain handover',
      'deck.rivalOperatingSub': 'Rival carriers operating',
      'deck.sealedManifest': 'CLASSIFIED FLIGHT MANIFEST — SEALED DURING PASS-AND-PLAY COCKPIT HANDOVER',
      'deck.emptyHand': 'NO BOARDING PASSES IN THE TRAY — YOU AUTO-DRAW 1 AT THE START OF EVERY TURN',
      'deck.oldestFlag': 'OLDEST',
      'deck.selectTarget': '▶ SELECT TARGET',
      'deck.armedStamp': 'ARMED',
      'deck.issuedStamp': 'ISSUED',
      'deck.costsTurnAction': 'COSTS YOUR ENTIRE TURN ACTION',
      'ticker.worldWire': 'WORLD WIRE',
      'broadcast.breakingBanner': 'BREAKING BULLETIN',
      'broadcast.category': 'GLOBAL AVIATION EVENT',
      'broadcast.stationId': 'WAIR-TV • JET AGE NEWS DESK • BULLETINS EVERY 3 ROUNDS',
      'broadcast.dismissBtn': 'DISMISS & RESUME FLIGHT OPS',
      'settings.title': 'CABIN SETTINGS & AUDIO CONSOLE',
      'settings.note': 'Every sound in Air Superiority is synthesized live via custom Web Audio instruments — featuring a bossa-nova & Jet Age jazz score with 4-phase turn escalation and mechanical split-flap effects.',
      'settings.musicTitle': 'DYNAMIC LOUNGE SOUNDTRACK',
      'settings.musicDesc': 'Custom phrase arranger with 4-phase turn intensity escalation',
      'settings.musicVolTitle': 'MUSIC VOLUME',
      'settings.musicVolDesc': 'Cabin background level',
      'settings.sfxTitle': 'SOUND EFFECTS',
      'settings.sfxDesc': 'Split-flap clicks, seatbelt chimes, gate stamps, teletype',
      'settings.sfxVolTitle': 'SFX VOLUME',
      'settings.sfxVolDesc': 'Mechanical console level',
      'settings.returnBtn': 'RETURN',
      'howto.eyebrow': 'PASSENGER SAFETY & OPERATIONS CARD',
      'howto.title': 'HOW TO PLAY — IN THE EVENT OF A GATE WAR',
      'howto.step1Title': 'CLAIM A GATE',
      'howto.step1Desc': 'Tap or click any unclaimed gate pin on the blueprint to plant your airline pin and collect inaugural passengers.',
      'howto.step2Title': 'OR PLAY ONE PASS',
      'howto.step2Desc': 'Deploy a single boarding pass instead. <strong>One action per turn</strong> — a gate claim locks your passes, and a pass locks the board.',
      'howto.step3Title': 'CHAIN YOUR ROUTES',
      'howto.step3Desc': 'Each connected neighbour you also own compounds that gate’s output by <strong>+25%</strong>. Contiguous chains glow in your livery.',
      'howto.step4Title': 'WATCH THE BULLETINS',
      'howto.step4Desc': 'Every 3 rounds the newsroom breaks in with a global directive that swings every carrier’s output.',
      'howto.step5Title': 'WIN THE TERMINAL',
      'howto.step5Desc': 'Take a strict majority of the terminal’s gates for sudden-death victory, or lead on total passengers when the schedule runs out.',
      'howto.step6Title': 'MIND THE TRAY',
      'howto.step6Desc': 'You draw 1 pass per turn and may hold only <strong>3</strong>. A 4th pass shreds the oldest one automatically.',
      'howto.returnBtn': 'RETURN TO TITLE',
      'rules.title': 'ARCHITECTURAL & FLIGHT MANUAL — AIR SUPERIORITY',
      'rules.sec1Title': '1. TERMINAL TOPOLOGY & ROUTE SYNERGY',
      'rules.sec2Title': '2. DUAL WIN CONDITIONS',
      'rules.sec3Title': '3. TURN STAGING & ONE ACTION PER TURN',
      'rules.sec4Title': '4. THE EIGHTEEN FLIGHT COUPONS & APRON "Z" GATES',
      'rules.card18': '<strong>Nationalize the Industry (1x Singleton):</strong> Immediately collect the passenger output of <em>every single gate on the map</em> (yours, rival, and neutral) for a one-time lump sum — then permanently purge this card from the match!',
      'rules.sec5Title': '5. WORLD WIRE & RIVAL SYNDICATES',
      'rules.returnBtn': 'RETURN TO TERMINAL',
      'interstitial.classification': 'CONFIDENTIAL FLIGHT MANIFEST • COCKPIT HANDOVER',
      'interstitial.gatePill': 'BOARDING CALL • GATE A1',
      'interstitial.boardingTitle': 'Flight {name} is now boarding at Gate A1.',
      'interstitial.privacyNote': 'Flight coupons and tactical hand telemetry are sealed during cockpit handover. Ensure rival captains have stepped back from the terminal console before unsealing your dispatch tray.',
      'interstitial.readyBtn': 'Click when {name} has the controls',
      'gameover.suddenDeathBadge': 'SUDDEN DEATH — STRICT GATE MAJORITY',
      'gameover.finalRoundBadge': 'FINAL ROUND {round} — PASSENGER SUPREMACY',
      'gameover.triumphsTitle': '{name} TRIUMPHS!',
      'gameover.suddenDeathSub': '{name} captured {gates} of {total} gates, securing an immediate Sudden Death hub monopoly in Round {round}!',
      'gameover.finalRoundSub': 'At the conclusion of Round {round}, {name} commands the terminal with {pax} passengers transported!',
      'gameover.rematchBtn': 'NEW TERMINAL HUB (REMATCH)',
      'gameover.customizeBtn': 'CARRIER CUSTOMIZATION',
      'gameover.roleCoop': '(CAPTAIN 0{n})',
      'gameover.roleYou': '(YOU)',
      'gameover.roleRival': '(SYNDICATE)',
      cards: {
        gate_change: {
          name: 'Gate Change',
          badge: 'OFFENSE',
          desc: 'Permanently convert one opponent-controlled gate to your airline.',
          tooltip: 'Reassigns a rival carrier’s gate lease to your airline for good. Tap or click any rival 3D pin on the blueprint; the pin repaints in your livery and its passenger output transfers to you.',
          footer: 'TARGET: RIVAL PIN',
          prompt: 'Tap or click any pulsing RIVAL 3D Gate Pin to convert it permanently to your livery.'
        },
        runway_maint: {
          name: 'Runway Maintenance',
          badge: 'SABOTAGE',
          desc: 'Close any gate for repaving: no passengers for 2 full rounds.',
          tooltip: 'Files an emergency resurfacing order on ANY gate on the blueprint — rival, neutral or your own. The gate generates zero passengers for the next 2 full rounds and is marked with a hazard badge.',
          footer: 'TARGET: ANY GATE',
          prompt: 'Tap or click ANY pulsing Gate Pin — rival, neutral or your own — to close it for 2 rounds.'
        },
        lounge_upgrade: {
          name: 'Lounge Upgrade',
          badge: 'UPGRADE',
          desc: 'Permanently DOUBLE one of your gates’ base passenger output.',
          tooltip: 'Installs a Starlight Club lounge above one of your gates. Base output is permanently doubled and a cocktail-glass starburst marker is planted beside the pin.',
          footer: 'TARGET: YOUR PIN',
          prompt: 'Tap or click one of YOUR 3D Gate Pins to double its base passenger output forever.'
        },
        charter_buyout: {
          name: 'Charter Buyout',
          badge: 'CORPORATE',
          desc: 'Buy out a rival’s dispatch office: steal 1 random coupon from their hand.',
          tooltip: 'Acquires a rival carrier’s charter paperwork outright. Pick a rival in the standings panel (or tap one of their pins) and one coupon is taken at random from their hand straight into yours.',
          footer: 'TARGET: RIVAL CARRIER',
          prompt: 'Tap or click a RIVAL CARRIER button or standings row to steal a coupon from their hand.'
        },
        baggage_strike: {
          name: 'Baggage Strike',
          badge: 'SABOTAGE',
          desc: 'Siphon 25% of one rival carrier’s accumulated passengers.',
          tooltip: 'Calls out the handlers at a rival’s concourse. Pick a rival in the standings panel: they lose 25% of their banked passengers (up to 400) and you board every siphoned traveller.',
          footer: 'TARGET: RIVAL CARRIER',
          prompt: 'Tap or click a RIVAL CARRIER button or standings row to siphon 25% of their passengers.'
        },
        direct_flight: {
          name: 'Direct Flight Charter',
          badge: 'INSTANT',
          desc: 'Fly a nonstop charter for a lump sum of +150 passengers.',
          tooltip: 'Dispatches an unscheduled nonstop Super-Constellation. Boards a flat +150 passengers immediately, with no target required.',
          footer: 'INSTANT DEPLOY'
        },
        terminal_expansion: {
          name: 'Terminal Expansion',
          badge: 'CONSTRUCTION',
          desc: 'Spawn a new gate connected to your largest owned cluster (or a claimed Z-Gate if full).',
          tooltip: 'Playable at any time! Spawns a new gate directly connected to your largest owned gate cluster — or dynamically commissions a claimed Apron "Z" Bus Gate if all concourse slots are occupied.',
          footer: 'INSTANT DEPLOY'
        },
        faa_audit: {
          name: 'FAA Audit',
          badge: 'CONTROL',
          desc: 'Every opposing carrier must discard their oldest coupon.',
          tooltip: 'Summons federal inspectors to every rival dispatch office. Each opposing carrier discards the oldest coupon in their hand; your own hand is untouched.',
          footer: 'INSTANT DEPLOY'
        },
        hostile_takeover: {
          name: 'Hostile Takeover',
          badge: 'OFFENSE',
          desc: 'Seize a rival gate for ONE turn — it reverts at the end of the round.',
          tooltip: 'Mounts a boardroom raid on a rival gate. You board its passengers for one turn, then the lease reverts to its original carrier at the end of the round.',
          footer: 'TARGET: RIVAL PIN',
          prompt: 'Tap or click any pulsing RIVAL 3D Gate Pin to seize it for one turn only.'
        },
        holding_pattern: {
          name: 'Holding Pattern',
          badge: 'CONTROL',
          desc: 'Stack a rival over the field: they skip their entire next turn.',
          tooltip: 'Routes a rival carrier’s inbound fleet into an endless holding stack. The targeted carrier forfeits their next turn completely — no boarding, no draw, no action.',
          footer: 'TARGET: RIVAL CARRIER',
          prompt: 'Tap or click a RIVAL CARRIER button or standings row to stack them in a holding pattern.'
        },
        sst_route: {
          name: 'Supersonic Jet',
          badge: 'BOOM',
          desc: 'Mach 2 service DOUBLES your entire network output for 1 round.',
          tooltip: 'Certifies your whole route network for supersonic service. Every gate you control doubles its passenger output for one full round.',
          footer: 'INSTANT DEPLOY'
        },
        smear_campaign: {
          name: 'Smear Campaign',
          badge: 'SABOTAGE',
          desc: 'Rival loses 50% of the payout from their largest connected gate chain.',
          tooltip: 'Plants unflattering stories about a rival’s safety record. On their next boarding, their LARGEST contiguous chain of connected gates pays out only half.',
          footer: 'TARGET: RIVAL CARRIER',
          prompt: 'Tap or click a RIVAL CARRIER button or standings row to halve their largest chain payout.'
        },
        emergency_landing: {
          name: 'Emergency Landing',
          badge: 'DISRUPTION',
          desc: 'Force a rival gate to relocate to a vacant corridor node (or banish it to a new Z-Gate).',
          tooltip: 'Declares an emergency diversion on an opponent’s gate, forcing their lease to relocate to an unoccupied corridor node — or banishing it to a freshly spawned Apron "Z" Bus Gate if the terminal is full.',
          footer: 'TARGET: RIVAL PIN',
          prompt: 'Tap or click any pulsing RIVAL 3D Gate Pin to force an Emergency Landing relocation.'
        },
        code_share: {
          name: 'Code-Share Agreement',
          badge: 'ALLIANCE',
          desc: 'For 2 full rounds, you and a targeted rival each receive 25% of each other’s gate revenue.',
          tooltip: 'Signs a bilateral interline treaty with a rival airline. For the next 2 full rounds, both carriers receive a 25% bonus dividend of all passenger revenue generated by each other’s gates.',
          footer: 'TARGET: RIVAL CARRIER',
          prompt: 'Tap or click a RIVAL CARRIER button or standings row to sign a 2-round Code-Share Agreement.'
        },
        severe_weather: {
          name: 'Severe Weather',
          badge: 'WEATHER',
          desc: 'Target a concourse branch: halves (-50%) passenger output across that entire branch for 1 round.',
          tooltip: 'Drops a localized squall line over a specific concourse corridor branch. Every gate attached to that concourse branch generates 50% fewer passengers for 1 full round.',
          footer: 'TARGET: CONCOURSE PIN',
          prompt: 'Tap or click ANY Gate Pin on the concourse branch you wish to hit with Severe Weather (-50% PAX).'
        },
        loyalty_program: {
          name: 'Loyalty Program',
          badge: 'MARKETING',
          desc: 'Target one of your gates: grants a flat +50 passenger bonus every scoring phase for 3 rounds.',
          tooltip: 'Launches a frequent-flyer mileage club at one of your owned gates. For the next 3 rounds, that gate awards an extra flat +50 passengers every time scoring resolves.',
          footer: 'TARGET: YOUR PIN',
          prompt: 'Tap or click one of YOUR 3D Gate Pins to enroll it in a 3-round Loyalty Program (+50 PAX/turn).'
        },
        fortress_hub: {
          name: 'Fortress Hub',
          badge: 'DEFENSE',
          desc: 'Place a retro radar shield over one of your gates, making it immune to rival cards until your next turn.',
          tooltip: 'Projects a mid-century air-defense radar dome over one of your owned gates. That gate cannot be targeted by Hostile Takeover, Gate Change, Runway Maintenance, or Emergency Landing until your next turn begins.',
          footer: 'TARGET: YOUR PIN',
          prompt: 'Tap or click one of YOUR 3D Gate Pins to fortify it with a Radar Shield until your next turn.'
        },
        nationalize_industry: {
          name: 'Nationalize the Industry',
          badge: '1x DECREE',
          desc: 'ONCE PER GAME: Immediately collect the passenger output of EVERY gate on the map — then purge forever.',
          tooltip: 'Executive federal requisition! Only 1 copy exists in the entire master deck. Immediately boards the current passenger output value from EVERY single gate on the blueprint (yours, rival, and neutral) as a one-time lump sum, then permanently purges this card from the match.',
          footer: '1x GLOBAL • PURGED ON PLAY'
        }
      },
      'deck.confirmAction': 'CONFIRM ACTION',
      'deck.confirmGateSub': 'Claim Gate {id}',
      'deck.confirmCardSub': 'Deploy {card}',
      'deck.cancelSelection': 'CANCEL SELECTION',
      'deck.stagedHintGate': 'STAGED: Claim Gate {id} ({name}) — Click CONFIRM ACTION to commit or CANCEL to reselect.',
      'deck.stagedHintCard': 'STAGED: {card} {target} — Click CONFIRM ACTION to commit or CANCEL to reselect.',
      'legend.zGate': 'Apron "Z" Bus Gate (No Majority)',
      'tooltip.zGate': 'APRON "Z" BUS GATE (Excludes Majority Win • Disgruntled Bus Transfer)',
      'tooltip.shielded': 'FORTRESS HUB SHIELD ACTIVE (Immune to Rival Cards)',
      'tooltip.loyalty': 'LOYALTY PROGRAM: +50 PAX ({rounds} Rd left)',
      'tooltip.weather': 'SEVERE WEATHER: -50% Branch Output ({rounds} Rd left)',
      worldEvents: {
        clear_skies: {
          title: 'INAUGURAL CLEAR SKIES',
          shortLabel: 'CLEAR SKIES (1.0x)',
          desc: 'Standard flight operations across all concourses.'
        },
        pilot_shortage: {
          title: 'PILOT SHORTAGE',
          category: 'LABOR & CREW BULLETIN',
          shortLabel: 'PILOT SHORTAGE (0.5x)',
          desc: 'Crew scheduling bottlenecks ground half of scheduled departures. Passenger carrying capacity is halved (0.5x) for all carriers next round.',
          impactText: 'NEXT ROUND: All Gate Passenger Output = 50%'
        },
        holiday_rush: {
          title: 'HOLIDAY RUSH',
          category: 'PEAK SEASON BOOM',
          shortLabel: 'HOLIDAY RUSH (2.0x)',
          desc: 'Concourses overflow with jet-set vacationers! Passenger output is DOUBLED (2.0x) across every gate on the blueprint for the next round.',
          impactText: 'NEXT ROUND: All Gate Passenger Output = 200%'
        },
        jet_stream: {
          title: 'JET STREAM TAILWINDS',
          category: 'METEOROLOGICAL DISPATCH',
          shortLabel: 'TAILWINDS (1.5x)',
          desc: 'High-altitude tailwinds accelerate turnaround times across all concourses. All gates generate 1.5x passengers next round.',
          impactText: 'NEXT ROUND: All Gate Passenger Output = 150%'
        },
        worlds_fair: {
          title: "WORLD'S FAIR EXPO",
          category: 'INTERNATIONAL TOURISM',
          shortLabel: "WORLD'S FAIR (1.25x)",
          desc: 'Global dignitaries arrive at the Central Rotunda! Every airline controlling a Rotunda Hub (H1–H4) immediately boards +120 bonus passengers, and global output rises to 1.25x.',
          impactText: 'INSTANT: +120 PAX per Hub Gate owned + 1.25x Next Round'
        },
        transatlantic_fog: {
          title: 'ATLANTIC FOG BANK',
          category: 'WEATHER ADVISORY',
          shortLabel: 'FOG DELAY (0.75x)',
          desc: 'Low visibility slows runway approaches to 75% capacity next round, but Control Tower issues +1 tactical Action Card to every carrier.',
          impactText: 'NEXT ROUND: 75% PAX Capacity • ALL PLAYERS DRAW +1 CARD'
        },
        cab_subsidy: {
          title: 'JET AGE POSTAL SUBSIDY',
          category: 'FEDERAL AVIATION GRANT',
          shortLabel: 'AIRMAIL BOOM (1.2x)',
          desc: 'The Civil Aeronautics Board awards airmail expansion grants! Every airline immediately boards +140 passengers and enjoys 1.2x output next round.',
          impactText: 'INSTANT: +140 PAX to All Airlines • NEXT ROUND: 120% Output'
        }
      },
      anchors: {
        classic_50s: {
          nameplate: 'BIFF CONROY • CHIEF AVIATION CORRESPONDENT',
          quirkLines: [
            '“GOOD EVENING, JET-SETTERS — FLASH WIRE FROM THE ROTUNDA:”',
            '“THIS JUST IN ON THE TELETYPE, FOLKS — HOLD ONTO YOUR FEDORAS:”',
            '“LIVE FROM IDLEWILD CONTROL TOWER, A SPECIAL NETWORK BULLETIN:”'
          ]
        },
        retro_robot: {
          nameplate: 'UNIT UNIVAC-9 • MAGNETIC-TAPE NEWS AUTOMATON',
          quirkLines: [
            '“BZZT-CLICK // PUNCH-CARD TELEMETRY ALERT DETECTED:”',
            '“VACUUM TUBES AT MAXIMUM GLOW — CALCULATING TERMINAL IMPACT:”',
            '“TAPE REEL #409 SPOOLED — TRANSMITTING AUTOMATED DIRECTIVE:”'
          ]
        },
        green_alien: {
          nameplate: 'ZORBLAX OF SECTOR 7G • INTERGALACTIC TRAFFIC OBSERVER',
          quirkLines: [
            '“GREETINGS, EARTH BIPEDS — YOUR PRIMITIVE RUNWAYS FASCINATE US:”',
            '“FLYING SAUCER RADAR INTERCEPTS STRANGE ATMOSPHERIC PHENOMENON:”',
            '“MESSAGE BEAMED DIRECTLY FROM THE ORBITAL MOTHER-LOUNGE:”'
          ]
        },
        aviator_ace: {
          nameplate: 'CAPT. “ACE” MONTGOMERY • SENIOR TEST PILOT & COMMENTATOR',
          quirkLines: [
            '“FASTEN YOUR SEATBELTS, CAPTAINS — TURBULENCE AHEAD ON THE WIRE:”',
            '“STRAIGHT FROM THE COCKPIT AT MACH 2 — HERE’S THE WEATHER BRIEF:”',
            '“TOWER JUST FLASHED THE ALDIS LAMP — READ THIS DISPATCH CLOSELY:”'
          ]
        },
        nora_cat: {
          nameplate: 'NORA THE TABBY • LATE-NIGHT TELETYPE DESK ANCHOR',
          quirkLines: [
            '“*SIGH*... YOU WOKE ME FROM MY CONCOURSE NAP FOR THIS BULLETIN:”',
            '“PURR-FECT. ANOTHERDELAY ON THE TARMAC. READ IT YOURSELF, CAPTAINS:”',
            '“TAP-TAP... IS THIS MICROPHONE ON? FINE. HERE IS YOUR GLOBAL WIRE:”'
          ]
        }
      },
      headlines: [
        'President Gore signs decree allowing nuclear-powered bird drones to seed-bomb South American nations.',
        'Soviet Union claims to have launched the first dog into hyperspace; dog returns asking for treats in fluent Russian.',
        'Local housewife discovers zero-gravity Jell-O mold recipe.',
        'Pan Am introduces mandatory jetpack training for all flight attendants.',
        'TWA unveils atomic-heated footstools in First Class; passengers advised to wear lead-lined Argyle socks.',
        'Civil Aeronautics Board approves three-martini minimum for all transatlantic turbo-prop crossings.',
        'Scientists at MIT warn that supersonic booms may accidentally awaken dormant disco beats from the year 1977.',
        'Howard Hughes purchases the Moon to use as a private VIP seaplane parking lagoon.',
        'Paris fashion designers debut pressurized fiberglass beehives for convertible stratocruiser cabins.',
        'Suburban dad completes backyard fallout shelter with fully functioning tiki bar and miniature baggage carousel.',
        'Geneva Convention updated to ban double-booking middle seats next to accordion players.',
        'Chrysler announces turbine-powered luggage cart capable of breaking the sound barrier in Concourse B.'
      ]
    },

    ja: {
      'title.eyebrow': 'インディペンデント・ジェットエイジ戦略ゲーム',
      'title.wordAir': 'AIR',
      'title.wordSup': 'SUPERIORITY',
      'title.tagline': 'ゲート独占 • 路線シナジー • ターミナル覇権争奪戦',
      'title.startGame': 'ゲーム開始',
      'title.settings': '環境設定',
      'title.howToPlay': '遊び方ガイド',
      'title.credit': 'IDLEWILD INTERACTIVE STUDIO • 国際ハブ空港委員会 • NO. 084-9921-JFK',
      'menu.eyebrow': 'IDLEWILD INTERACTIVE • 国際ハブ空港委員会',
      'menu.title': 'AIR SUPERIORITY',
      'menu.subtitle': 'ターミナル青写真＆ゲート独占シミュレーション',
      'menu.stamp': 'ファーストクラス公認',
      'setup.dispatchMode': 'フライト運行モード',
      'setup.modeSoloTitle': 'ソロフライト（vs AI）',
      'setup.modeSoloDesc': 'フラッグシップ航空を指揮し、ライバル航空シンジケートと対決',
      'setup.modeCoopTitle': 'パス＆プレイ（ローカル）',
      'setup.modeCoopDesc': '2〜4人の機長が1台の端末を共有（手札秘匿インタースティシャル付き）',
      'setup.modeOnlineTitle': 'オンラインフライト（P2P対戦）',
      'setup.modeOnlineDesc': 'ルームコードとゲートパスでプライベートルームをホスト／参加',
      'online.towerControl': '管制塔ディスパッチ',
      'online.hostOptionTitle': '出発ラウンジをホスト',
      'online.inboundCharter': '到着チャーター便',
      'online.joinOptionTitle': 'ルームコードで参加',
      'online.roomCodeLabel': 'ルームコード（参加機長に共有）',
      'online.copyBtn': 'コピー',
      'online.copiedBtn': '完了!',
      'online.newCodeBtn': '変更',
      'online.gatePassOptional': 'ゲートパス（任意パスワード）',
      'online.hostPassPlaceholder': 'パスワードなし（開放）',
      'online.hostListening': '管制塔オンライン — 参加機長の搭乗を待機中...',
      'online.hostReady': '搭乗承認完了 — {n}名の機長が出発準備完了！',
      'online.hostOffline': 'PeerJS未接続 — ソロおよびローカルモードはそのまま遊べます。',
      'online.connectedRosterLabel': '出発ラウンジ搭乗名簿（2〜4名）',
      'online.boardedCount': '{n} / 4 搭乗済',
      'online.enterRoomCode': 'ルームコードを入力',
      'online.joinCodePlaceholder': '例: TWA-404',
      'online.enterGatePass': 'ゲートパス（パスワード）',
      'online.joinPassPlaceholder': '未設定なら空欄',
      'online.connectTowerBtn': '管制塔へ搭乗許可を申請',
      'online.joinIdleStatus': 'ホスト機長のルームコードを入力して搭乗許可を申請してください。',
      'online.connectingStatus': '管制塔へ接続中... (Connecting to Control Tower...)',
      'online.boardingApprovedStatus': '搭乗承認完了 (Boarding Approved)',
      'online.authErrorStatus': 'ゲートパス不一致 ／ ルームが見つかりません',
      'online.roomFullStatus': '出発ラウンジ満席 (4/4)',
      'online.departBtn': '出発する（ゲーム開始）',
      'online.departNeedMoreBtn': '出発する（2名以上で開始可能）',
      'online.guestWaitBtn': '搭乗承認済 — ホスト機長の出発を待機中',
      'online.hostBadge': 'ホスト機長',
      'online.guestBadge': '搭乗済',
      'online.youBadge': 'あなた',
      'online.inactiveHoldingChip': '上空待機中（切断）',
      'online.waitingPeerPrompt': 'オンラインフライト：{name} が操縦桿を握っています...',
      'online.syncingPrompt': '管制塔へ指令パケットを送信中...',
      'setup.carrierReg': '航空会社登録＆インシグニア',
      'setup.captainReg': '機長 0{n} 登録＆インシグニア',
      'setup.selectCaptain': '設定する機長を選択（社名・カラー・エンブレム）',
      'setup.editingCaptain': '編集中: <strong>機長 0{n} ({name})</strong>',
      'setup.airlineCallsign': 'コールサイン ／ 航空会社名',
      'setup.captainCallsign': '機長 0{n} コールサイン ／ 航空会社名',
      'setup.airlinePlaceholder': '航空会社名を入力...',
      'setup.pinLivery': '機体塗装アクセントカラー',
      'setup.pinAccentCaption': '選択カラー: <strong>{name}</strong>',
      'setup.corporateEmblem': 'コーポレート・エンブレム（公認33種）',
      'setup.selectedEmblemCaption': '選択中: <strong>{name}</strong>',
      'setup.flightOps': '運行パラメータ＆ライバル設定',
      'setup.rivalAirlines': '競合ライバル航空会社数',
      'setup.rivals1': 'ライバル1社 (2P)',
      'setup.rivals2': 'ライバル2社 (3P)',
      'setup.rivals3': 'ライバル3社 (4P)',
      'setup.syndicateAggression': 'ライバルシンジケート攻勢度',
      'setup.diffEasy': 'イージー',
      'setup.diffNormal': 'ノーマル',
      'setup.diffHard': 'ハード',
      'setup.diffDescEasy': '<strong>イージー（地方チャーター）：</strong> ライバルは空きゲートを穏やかに確保し、妨害カードの使用を控えます。',
      'setup.diffDescNormal': '<strong>ノーマル（主要キャリア）：</strong> ライバルは高収益ゲートを優先し、戦術カードを的確に使用します。',
      'setup.diffDescHard': '<strong>ハード（国際シンジケート）：</strong> ライバルは路線シナジーを計算し、首位キャリアを徹底的に妨害します！',
      'setup.coopCaptainsLabel': '参加機長数（パス＆プレイ）',
      'setup.coop2P': '2人プレイ',
      'setup.coop3P': '3人プレイ',
      'setup.coop4P': '4人プレイ',
      'setup.coopManifestLabel': 'パス＆プレイ搭乗マニフェスト',
      'setup.coopClickToEdit': 'カードをタップして編集',
      'setup.editingTag': '編集中',
      'setup.customizeTag': '変更',
      'setup.turnLimitLabel': '規定ラウンド数',
      'setup.turns20': '20ラウンド（標準）',
      'setup.turns30': '30ラウンド（マラソン）',
      'setup.directivesTitle': 'ターミナル運用指令書',
      'setup.directive1': '<strong>ダイナミック空港設計図：</strong> 毎試合ごとに新しいターミナル構造、ゲート配置、乗客動線が描かれます。',
      'setup.directive2': '<strong>1ターン1アクション厳守：</strong> 各ターンに<strong>ゲート1つを確保</strong>するか、<strong>アクションカード1枚を使用</strong>できます（両方同時は不可）。',
      'setup.directive3': '<strong>自動ドロー＆手札上限3枚：</strong> 毎ターン開始時に1枚自動補充。4枚目を引くと最古のカードが自動破棄されます。',
      'setup.directive4': '<strong>路線シナジー：</strong> 自社の隣接接続ゲート1つにつき出力が<strong>+25%</strong>複利増加します。',
      'setup.directive5': '<strong>サドンデス過半数勝利：</strong> 全ゲートの過半数を制圧した時点で即座に勝利となります。',
      'setup.directive6': '<strong>総旅客数勝利：</strong> 最終ラウンド終了時に累計輸送旅客数が最多の航空会社が勝利します。',
      'setup.directive7': '<strong>タッチ＆マウス操作：</strong> 1本指ドラッグ／マウスで移動、2本指ピンチ／ホイールでズーム。',
      'setup.manualBtn': 'フライトマニュアル＆規約',
      'setup.launchBtn': '搭乗券を発行して離陸開始',
      'hud.title': 'AIR SUPERIORITY',
      'hud.subtitle': 'ターミナル建築青写真 • アイドルワイルド管区',
      'hud.roundLabel': 'ラウンド',
      'hud.majorityLabel': '過半数目標',
      'hud.gatesUnit': 'ゲート',
      'hud.topologyLabel': 'ターミナル構造',
      'hud.directiveLabel': '世界航空指令',
      'hud.newMapBtn': '新規マップ',
      'hud.musicOn': 'BGM: ON',
      'hud.musicOff': 'BGM: OFF',
      'hud.sfxOn': '効果音: ON',
      'hud.sfxOff': '効果音: OFF',
      'hud.settingsBtn': '設定',
      'hud.manualBtn': '規約',
      'hud.setupBtn': 'メニュー',
      'hud.you': 'あなた',
      'hud.worldWire': '世界通信',
      'sidebar.standingsTitle': '航空会社順位表',
      'sidebar.telemetryTag': 'リアルタイム集計',
      'sidebar.bulletinTitle': '世界航空ニュース速報',
      'sidebar.nextBulletinIn': '次回速報まで {n}R',
      'sidebar.dispatchLogTitle': '管制塔ディスパッチ記録',
      'sidebar.towerTag': '管制塔',
      'sidebar.roleCaptain': '機長',
      'sidebar.roleRival': 'ライバル • 手札{n}',
      'sidebar.roleCoop': '機長 0{id} • 手札{n}',
      'sidebar.chipHold': '旋回待機',
      'sidebar.chipSst': '超音速x2',
      'sidebar.chipSmear': '風評被害',
      'sidebar.gatesMetric': '制圧ゲート',
      'sidebar.passengersMetric': '累計旅客',
      'sidebar.outputMetric': '毎ターン出力',
      'sidebar.targetPlayer': '▶ {name} を標的に選択',
      'board.defaultPrompt': 'あなたのターン — 1アクション選択：未制圧ゲートを1つ確保するか、下のフライトクーポンを1枚使用してください。',
      'board.cancelTargetBtn': 'ターゲット解除',
      'board.handoverPrompt': 'コックピット交代待機中：ゲートA1にて {name} の着席を待っています...',
      'board.privacyHint': 'プライバシー保護スクリーン作動中',
      'board.rivalOperating': 'ライバル航空運行中：{name} が指令を発令しています...',
      'board.resolvingBulletin': '世界航空ニュース速報を受信中...',
      'board.standByHint': 'ライバル機の運行完了をお待ちください...',
      'board.targetingPrefix': '{name} — ターゲット選択 [{card}]：{prompt}',
      'board.selectTargetHint': 'ハイライトされた対象をタップ／クリックしてください。',
      'board.yourTurnPrompt': '{name} のターン — 1アクション選択：空きゲートを確保するか、下のクーポンを1枚使用してください。',
      'board.oneActionAvail': '{name}：残り1アクション実行可能',
      'board.gateClaimedPrompt': 'ゲート確保完了：今ターンのアクションは消費されました。「ターン終了」を押してください。',
      'board.gateSpentHint': 'ゲート確保にアクションを使用しました。',
      'board.couponDeployedPrompt': 'クーポン使用完了：今ターンのアクションは消費されました。「ターン終了」を押してください。',
      'board.couponSpentHint': 'クーポン展開にアクションを使用しました。',
      'legend.hub': '中央ロタンダ (+180名)',
      'legend.main': '主要ゲート (+120名)',
      'legend.regional': 'ピアゲート (+80名)',
      'legend.synergy': '接続シナジー = +25% / 路線',
      'legend.controls': 'ドラッグで移動 • ピンチ／ホイールで拡大縮小',
      'tooltip.owner': '所有キャリア: {name}',
      'tooltip.unclaimed': '未制圧ターミナルゲート',
      'tooltip.sector': 'セクター: {sector}',
      'tooltip.output': '旅客出力: <strong>+{yield} 名 / ターン</strong>',
      'tooltip.synergy': '⇄ 路線シナジー: {links} 接続 • ×{mult}',
      'tooltip.lounge': '★ ラウンジ改装 ×{mult} 基本出力',
      'tooltip.closed': '⚠ 滑走路閉鎖（第{round}ラウンドまで）',
      'deck.mobileHideTray': '搭乗券トレイを折りたたむ ▼',
      'deck.mobileShowTray': '搭乗券トレイを開く ▲',
      'deck.turnActionLabel': 'ターンアクション（1つ選択）',
      'deck.claimGateOpt': 'ゲート1つ確保',
      'deck.orLabel': '— または —',
      'deck.playCouponOpt': 'クーポン1枚使用',
      'deck.awaitingOrders': '機長、運行指令をお待ちしております。',
      'deck.couponsHeader': 'フライトクーポン ／ アクションカード',
      'deck.couponsSub': '毎ターン1枚自動補充 • スワイプ／ホバーで詳細 • 上限3枚（超過時は最古を破棄）',
      'deck.drawPile': '山札',
      'deck.discardPile': '捨札',
      'deck.passTurn': 'パス / 終了',
      'deck.takeNoAction': '行動せずに次へ ➔',
      'deck.endTurn': 'ターン終了',
      'deck.actionSpentSub': '行動完了 • 次のキャリアへ ➔',
      'deck.standBy': '待機中',
      'deck.awaitingHandoverSub': '機長交代を待機中',
      'deck.rivalOperatingSub': 'ライバル機が運行中',
      'deck.sealedManifest': '機密搭乗マニフェスト — コックピット交代中は手札が封印されています',
      'deck.emptyHand': '手札の搭乗券はありません — 毎ターン開始時に1枚自動補充されます',
      'deck.oldestFlag': '最古',
      'deck.selectTarget': '▶ 対象を選択',
      'deck.armedStamp': '発令準備',
      'deck.issuedStamp': '発券済',
      'deck.costsTurnAction': '今ターンの全アクションを消費します',
      'ticker.worldWire': '世界通信',
      'broadcast.breakingBanner': '緊急ニュース速報',
      'broadcast.category': '世界航空イベント',
      'broadcast.stationId': 'WAIR-TV • ジェットエイジ報道局 • 3ラウンド毎の定時速報',
      'broadcast.dismissBtn': '速報を閉じて運行再開',
      'settings.title': 'キャビン設定＆オーディオコンソール',
      'settings.note': 'Air Superiority の全サウンドは Web Audio シンセサイザーによりリアルタイム演奏されます（4段階ターン進行ボサノヴァ＆ジャズBGM・反転フラップ効果音）。',
      'settings.musicTitle': 'ダイナミック・ラウンジサウンドトラック',
      'settings.musicDesc': '試合進行に応じて4段階に盛り上がるジャズ・アレンジ',
      'settings.musicVolTitle': 'BGM音量',
      'settings.musicVolDesc': 'キャビンBGMレベル',
      'settings.sfxTitle': 'サウンドエフェクト（効果音）',
      'settings.sfxDesc': 'パタパタ表示器、シートベルトチャイム、スタンプ音、テレタイプ',
      'settings.sfxVolTitle': '効果音音量',
      'settings.sfxVolDesc': 'メカニカルコンソール音量',
      'settings.returnBtn': '戻る',
      'howto.eyebrow': '安全運航＆ターミナル作戦しおり',
      'howto.title': '遊び方ガイド — ゲート争奪戦の手引き',
      'howto.step1Title': 'ゲートを確保する',
      'howto.step1Desc': '青写真上の空きゲートをタップ／クリックして自社ピンを立て、初便の搭乗客を獲得します。',
      'howto.step2Title': 'または搭乗券を1枚使う',
      'howto.step2Desc': '代わりに戦術搭乗券を1枚使用できます。<strong>1ターン1アクション厳守</strong>です。',
      'howto.step3Title': '路線をチェーン接続する',
      'howto.step3Desc': '隣接する自社ゲート1つにつき出力が<strong>+25%</strong>増加。接続路線は自社カラーで輝きます。',
      'howto.step4Title': 'ニュース速報に備える',
      'howto.step4Desc': '3ラウンドごとに臨時ニュース速報が入り、全キャリアの旅客出力が大きく変動します。',
      'howto.step5Title': 'ターミナルの覇者となる',
      'howto.step5Desc': '全ゲートの過半数を制圧してサドンデス勝利するか、最終ラウンド終了時の総旅客数でトップに立ちましょう。',
      'howto.step6Title': '手札上限3枚に注意',
      'howto.step6Desc': '毎ターン1枚ドローし、持てるのは<strong>最大3枚</strong>。4枚目を引くと一番古い券がシュレッダー破棄されます。',
      'howto.returnBtn': 'タイトルへ戻る',
      'rules.title': '建築＆フライトマニュアル — AIR SUPERIORITY',
      'rules.sec1Title': '1. ターミナル構造＆路線シナジー',
      'rules.sec2Title': '2. 2つの勝利条件',
      'rules.sec3Title': '3. アクション仮選択（ステージング）＆1ターン1行動',
      'rules.sec4Title': '4. 全18種のフライトクーポン＆エプロン「Z」バスゲート',
      'rules.card18': '<strong>航空産業の国有化（1枚限定）：</strong>マップ上の<em>すべてのゲート</em>（自社・ライバル・中立）の旅客出力を一括で即時獲得し、このカードをゲームから永久に消滅させます！',
      'rules.sec5Title': '5. 世界通信＆ライバルシンジケート',
      'rules.returnBtn': 'ターミナルへ戻る',
      'interstitial.classification': '機密フライトマニフェスト • コックピット引き継ぎ',
      'interstitial.gatePill': '搭乗案内 • ゲート A1',
      'interstitial.boardingTitle': '{name} 便は現在ゲートA1にて搭乗案内中です。',
      'interstitial.privacyNote': 'コックピット交代中、手札のフライトクーポンは秘匿されています。他の機長が画面から離れたことを確認してからロックを解除してください。',
      'interstitial.readyBtn': '{name} に端末を渡したらタップ',
      'gameover.suddenDeathBadge': 'サドンデス勝利 — ターミナル過半数ゲート制圧',
      'gameover.finalRoundBadge': '最終第{round}ラウンド終了 — 旅客輸送数トップ勝利',
      'gameover.triumphsTitle': '{name} が制覇！',
      'gameover.suddenDeathSub': '{name} が全{total}ゲート中{gates}ゲートを制圧し、第{round}ラウンドでサドンデス独占勝利を達成しました！',
      'gameover.finalRoundSub': '第{round}ラウンド終了時点で、{name} が累計 {pax} 名の旅客を輸送しターミナルの頂点に立ちました！',
      'gameover.rematchBtn': '新規ターミナルで再戦',
      'gameover.customizeBtn': 'キャリア設定へ戻る',
      'gameover.roleCoop': '(機長 0{n})',
      'gameover.roleYou': '(あなた)',
      'gameover.roleRival': '(ライバル)',
      cards: {
        gate_change: {
          name: 'ゲート変更指令',
          badge: '攻勢',
          desc: 'ライバルが所有するゲート1つを自社の永久所有に切り替える。',
          tooltip: 'ライバル航空会社のゲートリース権を永久に自社へ書き換えます。青写真上のライバル3Dピンをタップすると自社塗装に塗り替わります。',
          footer: '対象: ライバルのピン',
          prompt: '点滅しているライバルの3Dゲートピンをタップして自社所有に変更してください。'
        },
        runway_maint: {
          name: '滑走路保守工事',
          badge: '妨害',
          desc: '任意のゲート1つを舗装工事で閉鎖し、2ラウンドの間旅客出力を0にする。',
          tooltip: '青写真上の任意のゲート1つに緊急舗装工事を発令します。対象ゲートは次の2ラウンドの間、旅客出力がゼロになります。',
          footer: '対象: 任意のゲート',
          prompt: '閉鎖したいゲートピン（ライバル・中立・自社いずれも可）をタップしてください。'
        },
        lounge_upgrade: {
          name: 'VIPラウンジ増設',
          badge: '強化',
          desc: '自社ゲート1つの基本旅客出力を永久に2倍にする。',
          tooltip: '自社ゲートにスターライト・クラブラウンジを併設し、基本出力を永久に2倍にします。ピン横にカクテルグラスの勲章が輝きます。',
          footer: '対象: 自社のピン',
          prompt: '基本出力を永久に2倍にする自社ゲートピンをタップしてください。'
        },
        charter_buyout: {
          name: 'チャーター買収',
          badge: '買収',
          desc: 'ライバルの運行部門を買収し、相手の手札からランダムに1枚奪う。',
          tooltip: 'ライバルキャリアのチャーター権を買収します。順位表またはライバルボタンを選択すると、相手の手札からランダムに1枚を自社手札に加えます。',
          footer: '対象: ライバル航空会社',
          prompt: '手札を奪うライバル航空会社をボタンまたは順位表から選択してください。'
        },
        baggage_strike: {
          name: '手荷物ストライキ',
          badge: '妨害',
          desc: 'ライバル1社の累計旅客の25%（最大400名）を自社へ引き抜く。',
          tooltip: 'ライバルのコンコースでストライキを決行。指定したライバルの累計旅客から25%（最大400名）を奪い、そのまま自社の旅客に加算します。',
          footer: '対象: ライバル航空会社',
          prompt: '旅客を25%引き抜くライバル航空会社をボタンまたは順位表から選択してください。'
        },
        direct_flight: {
          name: '直行チャーター便',
          badge: '即時',
          desc: 'ノンストップ特別便を運航し、即座に+150名の旅客を獲得する。',
          tooltip: '特別塗装のスーパー・コンステレーション直行便を即時運航し、ターゲット指定なしで+150名の旅客を獲得します。',
          footer: '即時発動'
        },
        terminal_expansion: {
          name: 'ターミナル拡張工事',
          badge: '建設',
          desc: '自社の最大ゲート網に直結する新ゲートを建設（満杯時は自社Zゲートを増設）。',
          tooltip: 'いつでも発動可能！自社の最大クラスターに直結する新ゲートを建設し即時所有します。通常枠が満杯の場合はエプロンに自社「Z」バスゲートを増設します。',
          footer: '即時発動'
        },
        faa_audit: {
          name: '航空局特別監査',
          badge: '統制',
          desc: 'すべてのライバル航空会社は最も古い手札クーポンを1枚破棄する。',
          tooltip: '連邦航空検査官を全ライバルのオフィスへ派遣します。全ライバルは手札の最古のクーポンを1枚失います（自社の手札は無傷）。',
          footer: '即時発動'
        },
        hostile_takeover: {
          name: '敵対的買収',
          badge: '攻勢',
          desc: 'ライバルのゲートを1ターンだけ強奪する（ラウンド終了時に返還）。',
          tooltip: 'ライバルのゲートを1ターンの間だけ乗っ取り、旅客収益を回収します。ラウンド終了時に元の所有者へ戻ります。',
          footer: '対象: ライバルのピン',
          prompt: '1ターン強奪するライバルの3Dゲートピンをタップしてください。'
        },
        holding_pattern: {
          name: '上空旋回待機',
          badge: '統制',
          desc: 'ライバル機を上空待機させ、次の1ターンを完全にスキップさせる。',
          tooltip: 'ライバル航空会社の到着便を旋回待機させます。対象キャリアは次のターン、搭乗・ドロー・行動のすべてが封じられます。',
          footer: '対象: ライバル航空会社',
          prompt: '次ターンをスキップさせるライバル航空会社を選択してください。'
        },
        sst_route: {
          name: '超音速ジェット就航',
          badge: 'ブーム',
          desc: 'マッハ2の超音速運航により、1ラウンドの間自社全ゲートの出力が2倍になる。',
          tooltip: '自社路線網に超音速機を投入。1ラウンドの間、自社が所有する全ゲートの旅客出力が2倍になります。',
          footer: '即時発動'
        },
        smear_campaign: {
          name: 'ネガティブキャンペーン',
          badge: '妨害',
          desc: 'ライバル1社の最大接続ゲート網からの次ターン旅客出力を半減（50%）させる。',
          tooltip: 'ライバルの評判を揺るがす記事を流し、次の搭乗フェーズで相手の最大接続路線チェーンの出力を半分に落とします。',
          footer: '対象: ライバル航空会社',
          prompt: '最大路線チェーンの出力を半減させるライバル航空会社を選択してください。'
        },
        emergency_landing: {
          name: '緊急着陸指令',
          badge: '撹乱',
          desc: 'ライバルのゲートを空きノードへ強制移転させる（満杯時は新Zゲートへ追放）。',
          tooltip: 'ライバル所有ゲートに緊急ダイバートを発令し、空いている回廊ノードへ強制移転させます。空きがない場合はエプロンに新「Z」ゲートを生成してそこへ追放します。',
          footer: '対象: ライバルのピン',
          prompt: '強制移転させるライバルの3Dゲートピンをタップしてください。'
        },
        code_share: {
          name: 'コードシェア協定',
          badge: '提携',
          desc: '2ラウンドの間、自社と対象ライバルはお互いのゲート収益の25%を受け取る。',
          tooltip: 'ライバル1社と相互運航協定を締結します。次の2ラウンドの間、双方のキャリアはお互いのゲートが生み出す旅客数の25%をボーナスとして獲得します。',
          footer: '対象: ライバル航空会社',
          prompt: 'コードシェア協定を結ぶライバル航空会社を選択してください。'
        },
        severe_weather: {
          name: '悪天候警報',
          badge: '気象',
          desc: '指定したコンコース支線の全ゲート旅客出力を1ラウンドの間半減（-50%）させる。',
          tooltip: '特定のコンコース支線に局地的な暴風雨を発生させ、その支線に属する全ゲートの旅客出力を1ラウンドの間50%減少させます。',
          footer: '対象: コンコース支線',
          prompt: '悪天候（出力-50%）を発生させたいコンコース支線のゲートピンをタップしてください。'
        },
        loyalty_program: {
          name: 'マイレージプログラム',
          badge: '優待',
          desc: '自社ゲート1つに3ラウンドの間、毎搭乗フェーズ+50名の固定ボーナスを付与する。',
          tooltip: '自社所有ゲート1つにマイレージ会員制度を導入します。次の3ラウンドの間、そのゲートはスコア計算ごとに固定で+50名の追加旅客を生み出します。',
          footer: '対象: 自社のピン',
          prompt: '3ラウンドの間+50名ボーナスを付与する自社ゲートピンをタップしてください。'
        },
        fortress_hub: {
          name: 'フォートレス・ハブ',
          badge: '防衛',
          desc: '自社ゲート1つにレーダーシールドを展開し、次ターンまで相手カードから完全に守る。',
          tooltip: '自社所有ゲート1つに防空レーダードームを展開し、次の自社ターン開始時まで敵対的買収・ゲート変更・滑走路保守・緊急着陸の対象にならなくなります。',
          footer: '対象: 自社のピン',
          prompt: '次ターンまでレーダーシールドで保護する自社ゲートピンをタップしてください。'
        },
        nationalize_industry: {
          name: '航空産業の国有化',
          badge: '1回限定',
          desc: '1試合1回限定：マップ上の全ゲートの旅客出力を一括で即時獲得し、このカードを永久消滅させる。',
          tooltip: 'デッキに1枚しか存在しない特別大統領令！所有者を問わずマップ上のすべてのゲート（自社・ライバル・中立）から旅客出力を一括徴収し、発動後はゲームから永久に除外されます。',
          footer: '全体1回限定 • 使用後消滅'
        }
      },
      'deck.confirmAction': 'アクション確定',
      'deck.confirmGateSub': 'ゲート {id} を確保',
      'deck.confirmCardSub': '{card} を発動',
      'deck.cancelSelection': '選択解除',
      'deck.stagedHintGate': '仮選択中: ゲート {id} ({name}) — 「アクション確定」で決定、「選択解除」でやり直せます。',
      'deck.stagedHintCard': '仮選択中: {card} {target} — 「アクション確定」で決定、「選択解除」でやり直せます。',
      'legend.zGate': 'エプロン「Z」バスゲート（過半数対象外）',
      'tooltip.zGate': 'エプロン「Z」バスゲート（過半数勝利カウント対象外 • バス連絡）',
      'tooltip.shielded': 'フォートレス・ハブ防衛中（ライバルのカード無効）',
      'tooltip.loyalty': 'マイレージ特典: +50 PAX（残り {rounds} ラウンド）',
      'tooltip.weather': '悪天候警報: 支線出力 -50%（残り {rounds} ラウンド）',
      worldEvents: {
        clear_skies: {
          title: '快晴の開港日和',
          shortLabel: '快晴 (1.0x)',
          desc: '全コンコースで通常通りのフライトオペレーションが行われています。'
        },
        pilot_shortage: {
          title: 'パイロット不足',
          category: '乗務員・労務速報',
          shortLabel: '乗務員不足 (0.5x)',
          desc: '乗務員スケジュールの逼迫により半数の便が欠航。次ラウンドは全キャリアの旅客出力が半減（0.5x）します。',
          impactText: '次ラウンド：全ゲートの旅客出力 = 50%'
        },
        holiday_rush: {
          title: 'ホリデー・ラッシュ',
          category: 'バカンス最盛期ブーム',
          shortLabel: 'バカンス需要 (2.0x)',
          desc: 'ターミナルにバカンス客が殺到！次ラウンドは全ゲートの旅客出力が2倍（2.0x）になります。',
          impactText: '次ラウンド：全ゲートの旅客出力 = 200%'
        },
        jet_stream: {
          title: 'ジェット気流の追い風',
          category: '気象管制ディスパッチ',
          shortLabel: '追い風 (1.5x)',
          desc: '高高度の強い追い風により全路線の折り返し効率が向上。次ラウンドは全ゲート出力が1.5倍になります。',
          impactText: '次ラウンド：全ゲートの旅客出力 = 150%'
        },
        worlds_fair: {
          title: '万国博覧会開幕',
          category: '国際観光イベント',
          shortLabel: '万博特需 (1.25x)',
          desc: '各国要人が中央ロタンダに到着！ロタンダハブ（H1〜H4）を所有するキャリアは即座に+120名を獲得し、全体出力も1.25倍に上昇します。',
          impactText: '即時：所有ハブ毎に+120名 ＋ 次ラウンド出力1.25倍'
        },
        transatlantic_fog: {
          title: '大西洋濃霧警報',
          category: '気象警戒アドバイザリー',
          shortLabel: '濃霧遅延 (0.75x)',
          desc: '視界不良により次ラウンドの旅客出力は75%に低下しますが、管制塔から全キャリアに戦術カード+1枚が支給されます。',
          impactText: '次ラウンド：出力75% • 全プレイヤーがカード+1枚ドロー'
        },
        cab_subsidy: {
          title: 'ジェット航空郵便補助金',
          category: '連邦航空助成金',
          shortLabel: '航空郵便ブーム (1.2x)',
          desc: '民間航空委員会が航空郵便拡大助成金を交付！全キャリアが即座に+140名を獲得し、次ラウンド出力が1.2倍になります。',
          impactText: '即時：全社に+140名 • 次ラウンド：出力120%'
        }
      },
      anchors: {
        classic_50s: {
          nameplate: 'ビフ・コンロイ • 首席航空特派員',
          quirkLines: [
            '「こんばんは、ジェットセッターの皆さん — 中央ロタンダから緊急電です：」',
            '「テレタイプに速報が入りました — 帽子をしっかり押さえてお聞きください：」',
            '「アイドルワイルド管制塔より生中継、特別ニュース速報をお伝えします：」'
          ]
        },
        retro_robot: {
          nameplate: 'UNIVAC-9号機 • 磁気テープ自動報道ユニット',
          quirkLines: [
            '「ピピッ・カチッ // パンチカード航空テレメトリ警報ヲ検知シマシタ：」',
            '「真空管出力最大 — ターミナル旅客変動値ヲ演算中デス：」',
            '「テープリール409番再生 — 自動運行指令ヲ送信シマス：」'
          ]
        },
        green_alien: {
          nameplate: '第7G宙域のゾルブラックス • 銀河間交通オブザーバー',
          quirkLines: [
            '「地球の二足歩行生物諸君、ごきげんよう — 興味深い滑走路データだ：」',
            '「空飛ぶ円盤のレーダーが奇妙な大気圏内イベントを傍受したぞ：」',
            '「軌道上のマザーラウンジから直接テレパシー通信をお届けしよう：」'
          ]
        },
        aviator_ace: {
          nameplate: '“エース”・モンゴメリー機長 • 主任テストパイロット兼解説員',
          quirkLines: [
            '「機長諸君、シートベルトを締めろ — 通信網に乱気流が発生中だ：」',
            '「マッハ2のコックピットから直通 — 最新の気象・運行ブリーフィングだ：」',
            '「管制塔から信号灯が点滅したぞ — この指令書を熟読してくれ：」'
          ]
        },
        nora_cat: {
          nameplate: 'トラ猫ノラ • 深夜テレタイプ報道デスク',
          quirkLines: [
            '「ふぁぁ…昼寝の邪魔をしないでちょうだい。緊急ニュースよ：」',
            '「また滑走路で大騒ぎね…肉球が疲れるわ。最新の通信を読み上げるわよ：」',
            '「トントン…マイク入ってる？まったく、機長たちは手がかかるわね：」'
          ]
        }
      },
      headlines: [
        'ゴア大統領、南米緑化のため原子力駆動バード・ドローンによる種子散布令に署名。',
        'ソ連が宇宙犬の亜空間ジャンプ実験に成功と発表。帰還した犬は流暢なロシア語でおやつを要求。',
        '郊外の主婦がキッチンで無重力ゼリー型のレシピを偶然発明。',
        'パンナム航空、全客室乗務員にジェットパック飛行訓練を義務化。',
        'TWAがファーストクラスに原子力保温フットスツールを導入、乗客には鉛裏地アーガイル靴下を推奨。',
        '民間航空委員会、大西洋横断ターボプロップ便での「マティーニ最低3杯規則」を正式承認。',
        'MITの科学者らが警告：「超音速ソニックブームが1977年産の休眠ディスコビートを目覚めさせる恐れ」。',
        'ハワード・ヒューズが月面を購入、VIP専用水上飛行艇のプライベートラグーンに改装へ。',
        'パリのファッション界、オープンカー型ストラトクルーザー客室向けの耐圧ファイバーグラス髪型を発表。',
        '郊外の父親、ティキバーとミニチュア手荷物ターンテーブル完備の裏庭シェルターを完成させる。',
        'ジュネーブ条約改定により、アコーディオン奏者の隣の中央席へのダブルブッキングが全面禁止に。',
        'クライスラー社、コンコースBで音速を突破可能なタービンエンジン搭載カートを発表。'
      ]
    },

    hu: {
      'title.eyebrow': 'FÜGGETLEN JET-KORSZAKI STRATÉGIAI JÁTÉK',
      'title.wordAir': 'AIR',
      'title.wordSup': 'SUPERIORITY',
      'title.tagline': 'KAPUMONOPÓLIUM • ÚTVONAL-SZINERGIA • TERMINÁLHÁBORÚ',
      'title.startGame': 'JÁTÉK INDÍTÁSA',
      'title.settings': 'BEÁLLÍTÁSOK',
      'title.howToPlay': 'JÁTÉKSZABÁLYOK',
      'title.credit': 'IDLEWILD INTERACTIVE STUDIO • NEMZETKÖZI LÉGIKÖZPONT BIZOTTSÁG • NO. 084-9921-JFK',
      'menu.eyebrow': 'IDLEWILD INTERACTIVE • NEMZETKÖZI LÉGIKÖZPONT BIZOTTSÁG',
      'menu.title': 'AIR SUPERIORITY',
      'menu.subtitle': 'TERMINÁL TERVRAJZ ÉS KAPUMONOPÓLIUM STRATÉGIA',
      'menu.stamp': 'ELSŐ OSZTÁLYÚ CHARTER',
      'setup.dispatchMode': 'JÁRATINDÍTÁSI MÓD',
      'setup.modeSoloTitle': 'EGYÉNI REPÜLÉS (VS AI)',
      'setup.modeSoloDesc': 'Irányítsd zászlóshajó légitársaságodat a rivális szindikátusok ellen',
      'setup.modeCoopTitle': 'ADD TOVÁBB (HELYI)',
      'setup.modeCoopDesc': '2–4 kapitány osztozik a terminálon titkosított kártyaátadással',
      'setup.modeOnlineTitle': 'ONLINE REPÜLÉS (P2P MULTIPLAYER)',
      'setup.modeOnlineDesc': 'Hozz létre vagy csatlakozz privát váróhoz Szobakóddal és Belépővel',
      'online.towerControl': 'TORONY IRÁNYÍTÁS',
      'online.hostOptionTitle': 'INDULÁSI VÁRÓ NYITÁSA (HOSZT)',
      'online.inboundCharter': 'ÉRKEZŐ CHARTER',
      'online.joinOptionTitle': 'CSATLAKOZÁS SZOBAKÓDDAL',
      'online.roomCodeLabel': 'SZOBAKÓD (OSZD MEG A KAPITÁNYOKKAL)',
      'online.copyBtn': 'MÁSOL',
      'online.copiedBtn': 'MÁSOLVA!',
      'online.newCodeBtn': 'ÚJ',
      'online.gatePassOptional': 'KAPUBELÉPŐ (OPCIONÁLIS JELSZÓ)',
      'online.hostPassPlaceholder': 'Nyitott kapu (nincs jelszó)',
      'online.hostListening': 'Az irányítótorony sugároz — várakozás a kapitányokra...',
      'online.hostReady': 'Beszállás engedélyezve — {n} kapitány indulásra kész!',
      'online.hostOffline': 'PeerJS nem elérhető — az Egyéni és Helyi mód továbbra is működik.',
      'online.connectedRosterLabel': 'INDULÁSI VÁRÓ UTASLISTA (2–4 KAPITÁNY)',
      'online.boardedCount': '{n} / 4 FEDÉLZETEN',
      'online.enterRoomCode': 'ADD MEG A SZOBAKÓDOT',
      'online.joinCodePlaceholder': 'pl. TWA-404',
      'online.enterGatePass': 'KAPUBELÉPŐ (JELSZÓ)',
      'online.joinPassPlaceholder': 'Hagyd üresen, ha nyitott',
      'online.connectTowerBtn': 'BESZÁLLÁSI ENGEDÉLY KÉRÉSE',
      'online.joinIdleStatus': 'Add meg a hoszt Szobakódját és kérj beszállási engedélyt.',
      'online.connectingStatus': 'Csatlakozás az irányítótoronyhoz...',
      'online.boardingApprovedStatus': 'Beszállás engedélyezve (Boarding Approved)',
      'online.authErrorStatus': 'Hibás kapubelépő / A szoba nem található',
      'online.roomFullStatus': 'Az indulási váró megtelt (4/4)',
      'online.departBtn': 'INDULÁS (JÁTÉK INDÍTÁSA)',
      'online.departNeedMoreBtn': 'INDULÁS (LEGALÁBB 2 JÁTÉKOS KELL)',
      'online.guestWaitBtn': 'BESZÁLLÁS ENGEDÉLYEZVE — VÁRAKOZÁS A HOSZTRA',
      'online.hostBadge': 'HOSZT KAPITÁNY',
      'online.guestBadge': 'FEDÉLZETEN',
      'online.youBadge': 'TE',
      'online.inactiveHoldingChip': 'VÁRAKOZÓ LÉGTÉRBEN (INAKTÍV)',
      'online.waitingPeerPrompt': 'ONLINE REPÜLÉS: {name} irányítja a gépet...',
      'online.syncingPrompt': 'PARANCSOK TOVÁBBÍTÁSA AZ IRÁNYÍTÓTORONYNAK...',
      'setup.carrierReg': 'LÉGITÁRSASÁG BEJEGYZÉSE ÉS JELVÉNYE',
      'setup.captainReg': '0{n}. KAPITÁNY BEJEGYZÉSE ÉS JELVÉNYE',
      'setup.selectCaptain': 'VÁLASZD KI A SZERKESZTENDŐ KAPITÁNYT (NÉV, SZÍN, JELVÉNY)',
      'setup.editingCaptain': 'Szerkesztés: <strong>0{n}. Kapitány ({name})</strong>',
      'setup.airlineCallsign': 'HÍVÓJEL / LÉGITÁRSASÁG NEVE',
      'setup.captainCallsign': '0{n}. KAPITÁNY HÍVÓJELE / LÉGITÁRSASÁG NEVE',
      'setup.airlinePlaceholder': 'Add meg a légitársaság nevét...',
      'setup.pinLivery': 'FLOTTA SZÍNVILÁGA',
      'setup.pinAccentCaption': 'Jelölőszín: <strong>{name}</strong>',
      'setup.corporateEmblem': 'VÁLLALATI JELVÉNY (33 ENGEDÉLYEZETT EMBLÉMA)',
      'setup.selectedEmblemCaption': 'Kiválasztva: <strong>{name}</strong>',
      'setup.flightOps': 'MŰKÖDÉSI PARAMÉTEREK ÉS RIVÁLISOK',
      'setup.rivalAirlines': 'RIVÁLIS LÉGITÁRSASÁGOK SZÁMA',
      'setup.rivals1': '1 RIVÁLIS (2FŐ)',
      'setup.rivals2': '2 RIVÁLIS (3FŐ)',
      'setup.rivals3': '3 RIVÁLIS (4FŐ)',
      'setup.syndicateAggression': 'RIVÁLIS SZINDIKÁTUS AGRESSZIVITÁSA',
      'setup.diffEasy': 'KÖNNYŰ',
      'setup.diffNormal': 'NORMÁL',
      'setup.diffHard': 'NEHÉZ',
      'setup.diffDescEasy': '<strong>Könnyű (Alkalmi Charter):</strong> A riválisok véletlenszerű kapukat foglalnak, és ritkán vetnek be támadó kuponokat.',
      'setup.diffDescNormal': '<strong>Normál (Regionális Vállalat):</strong> A riválisok a magas hozamú üres kapukat keresik, és taktikusan használják a kártyákat.',
      'setup.diffDescHard': '<strong>Nehéz (Globális Szindikátus):</strong> A riválisok kiszámítják a hálózati szinergiát, és keményen támadják az éllovast!',
      'setup.coopCaptainsLabel': 'REGISZTRÁLT KAPITÁNYOK (ADD TOVÁBB)',
      'setup.coop2P': '2 JÁTÉKOS',
      'setup.coop3P': '3 JÁTÉKOS',
      'setup.coop4P': '4 JÁTÉKOS',
      'setup.coopManifestLabel': 'UTASLISTA ÉS KAPITÁNYOK',
      'setup.coopClickToEdit': 'Koppints vagy kattints a kártyára a szerkesztéshez',
      'setup.editingTag': 'SZERKESZTÉS',
      'setup.customizeTag': 'MÓDOSÍTÁS',
      'setup.turnLimitLabel': 'MENETREND SZERINTI FORDULÓKORLÁT',
      'setup.turns20': '20 FORDULÓ (NORMÁL)',
      'setup.turns30': '30 FORDULÓ (MARATON)',
      'setup.directivesTitle': 'ÉPÍTÉSZETI ÉS REPÜLÉSI IRÁNYELVEK',
      'setup.directive1': '<strong>Dinamikus Terminál:</strong> Minden mérkőzés új terminál-alaprajzot, kapuhálózatot és utasáramlást hoz létre.',
      'setup.directive2': '<strong>Körönként Egy Akció:</strong> Minden körben <strong>egy kaput foglalhatsz el</strong> <em>vagy</em> <strong>egy akciókártyát játszhatsz ki</strong> — a kettőt együtt soha.',
      'setup.directive3': '<strong>Automatikus Húzás és 3 Kártyás Korlát:</strong> Körönként 1 kupont húzol; 3 felett a legrégebbi kupon megsemmisül.',
      'setup.directive4': '<strong>Útvonal-szinergia:</strong> Minden közvetlenül összekötött saját kapu <strong>+25%-kal</strong> növeli az adott kapu utasforgalmát.',
      'setup.directive5': '<strong>Azonnali Többségi Győzelem:</strong> Azonnal nyersz, ha megszerezed az összes kapu szigorú többségét.',
      'setup.directive6': '<strong>Utasszám-fölény:</strong> Ha nincs többség, az utolsó forduló végén a legtöbb utast szállító légitársaság győz.',
      'setup.directive7': '<strong>Érintés és Egérvezérlés:</strong> Húzd 1 ujjal vagy egérrel a térképet; csippents 2 ujjal vagy görgess a nagyításhoz.',
      'setup.manualBtn': 'REPÜLÉSI KÉZIKÖNYV',
      'setup.launchBtn': 'BESZÁLLÓKÁRTYA KIÁLLÍTÁSA ÉS INDÍTÁS',
      'hud.title': 'AIR SUPERIORITY',
      'hud.subtitle': 'TERMINÁL ÉPÍTÉSZETI TERVRAJZ • IDLEWILD SZEKTOR',
      'hud.roundLabel': 'FORDULÓ',
      'hud.majorityLabel': 'TÖBBSÉGI CÉL',
      'hud.gatesUnit': 'KAPU',
      'hud.topologyLabel': 'TOPOLÓGIA',
      'hud.directiveLabel': 'GLOBÁLIS IRÁNYELV',
      'hud.newMapBtn': 'ÚJ TÉRKÉP',
      'hud.musicOn': 'ZENE: BE',
      'hud.musicOff': 'ZENE: KI',
      'hud.sfxOn': 'EFFEKTEK: BE',
      'hud.sfxOff': 'EFFEKTEK: KI',
      'hud.settingsBtn': 'BEÁLLÍTÁSOK',
      'hud.manualBtn': 'SZABÁLYOK',
      'hud.setupBtn': 'MENÜ',
      'hud.you': 'TE',
      'hud.worldWire': 'VILÁGHÍRADÓ',
      'sidebar.standingsTitle': 'LÉGITÁRSASÁGOK ÁLLÁSA',
      'sidebar.telemetryTag': 'ÉLŐ TELEMETRIA',
      'sidebar.bulletinTitle': 'LÉGIÜGYI VILÁGHÍRADÓ',
      'sidebar.nextBulletinIn': 'KÖV. HÍR {n} KÖR MÚLVA',
      'sidebar.dispatchLogTitle': 'IRÁNYÍTÓTORONY NAPLÓ',
      'sidebar.towerTag': 'TORONY',
      'sidebar.roleCaptain': 'KAPITÁNY',
      'sidebar.roleRival': 'SZINDIKÁTUS • {n} KUPON',
      'sidebar.roleCoop': '0{id}. KAPITÁNY • {n} KUPON',
      'sidebar.chipHold': 'VÁRAKOZÁS',
      'sidebar.chipSst': 'SZUPERSZONIKUS x2',
      'sidebar.chipSmear': 'LEJÁRATVA',
      'sidebar.gatesMetric': 'KAPUK',
      'sidebar.passengersMetric': 'UTASOK',
      'sidebar.outputMetric': 'HOZAM',
      'sidebar.targetPlayer': '▶ CÉLPONT: {name}',
      'board.defaultPrompt': 'TE JÖSSZ — EGY AKCIÓ: foglalj el egy szabad kaput, VAGY játssz ki egy repülési kupont alul.',
      'board.cancelTargetBtn': 'CÉLZÁS MÉGSE',
      'board.handoverPrompt': 'PILÓTAFÜLKE ÁTADÁSA: {name} kapitányra várunk az A1-es kapunál...',
      'board.privacyHint': 'Titkosító képernyő aktív.',
      'board.rivalOperating': 'RIVÁLIS LÉGITÁRSASÁG LÉP: {name} utasításokat ad ki...',
      'board.resolvingBulletin': 'LÉGIÜGYI VILÁGHÍRADÓ FELDOLGOZÁSA...',
      'board.standByHint': 'Várakozás a rivális forgalomra...',
      'board.targetingPrefix': '{name} — CÉLZÁS [{card}]: {prompt}',
      'board.selectTargetHint': 'Válassz egy kijelölt célpontot.',
      'board.yourTurnPrompt': '{name} KÖRE — EGY AKCIÓ: foglalj el egy szabad kaput, VAGY játssz ki egy kupont alul.',
      'board.oneActionAvail': '1 elérhető akció {name} számára.',
      'board.gateClaimedPrompt': 'KAPU ELFOGLALVA: az akciód elfogyott — a kuponok zárolva. Kattints a „KÖR VÉGE” gombra.',
      'board.gateSpentHint': 'Akció felhasználva kapufoglalásra.',
      'board.couponDeployedPrompt': 'KUPON KIJÁTSZVA: az akciód elfogyott — a kapufoglalás zárolva. Kattints a „KÖR VÉGE” gombra.',
      'board.couponSpentHint': 'Akció felhasználva kuponra.',
      'legend.hub': 'ROTUNDA KÖZPONT (+180 UTAS)',
      'legend.main': 'FŐKAPU (+120 UTAS)',
      'legend.regional': 'MÓLÓKAPU (+80 UTAS)',
      'legend.synergy': 'PULZÁLÓ ÚTVONAL = +25% / KAPCSOLAT',
      'legend.controls': 'HÚZÁS: MOZGATÁS • CSIPPENTÉS / GÖRGŐ: NAGYÍTÁS',
      'tooltip.owner': 'TULAJDONOS: {name}',
      'tooltip.unclaimed': 'SZABAD TERMINÁLKAPU',
      'tooltip.sector': 'SZEKTOR: {sector}',
      'tooltip.output': 'HOZAM: <strong>+{yield} UTAS / KÖR</strong>',
      'tooltip.synergy': '⇄ ÚTVONAL-SZINERGIA: {links} KAPCSOLAT • ×{mult}',
      'tooltip.lounge': '★ VIP VÁRÓ FEJLESZTÉS ×{mult} ALAPHOZAM',
      'tooltip.closed': '⚠ KIFUTÓPÁLYA LEZÁRVA A(Z) {round}. FORDULÓIG',
      'deck.mobileHideTray': 'BESZÁLLÓKÁRTYÁK ELREJTÉSE ▼',
      'deck.mobileShowTray': 'BESZÁLLÓKÁRTYÁK MEGJELENÍTÉSE ▲',
      'deck.turnActionLabel': 'KÖRAKCIÓ (VÁLASSZ EGYET)',
      'deck.claimGateOpt': '1 Kapu Foglalása',
      'deck.orLabel': '— VAGY —',
      'deck.playCouponOpt': '1 Kupon Kijátszása',
      'deck.awaitingOrders': 'Parancsára várunk, Kapitány.',
      'deck.couponsHeader': 'REPÜLÉSI KUPONOK / AKCIÓKÁRTYÁK',
      'deck.couponsSub': 'Körönként +1 kártya • húzd oldalra a részletekért • 3 felett a legrégebbi megsemmisül',
      'deck.drawPile': 'HÚZÓPAKLI',
      'deck.discardPile': 'DOBÓPAKLI',
      'deck.passTurn': 'PASSZ / TOVÁBB',
      'deck.takeNoAction': 'Lépés kihagyása ➔',
      'deck.endTurn': 'KÖR VÉGE',
      'deck.actionSpentSub': 'Akció kész • Következő ➔',
      'deck.standBy': 'VÁRAKOZÁS',
      'deck.awaitingHandoverSub': 'Kapitányváltás folyamatban',
      'deck.rivalOperatingSub': 'Rivális légitársaság lép',
      'deck.sealedManifest': 'TITKOSÍTOTT UTASLISTA — PILÓTAFÜLKE-ÁTADÁS ALATT LEZÁRVA',
      'deck.emptyHand': 'NINCS BESZÁLLÓKÁRTYA A TÁLCÁN — MINDEN KÖR ELEJÉN AUTOMATIKUSAN HÚZOL EGYET',
      'deck.oldestFlag': 'LEGRÉGEBBI',
      'deck.selectTarget': '▶ VÁLASSZ CÉLPONTOT',
      'deck.armedStamp': 'ÉLESÍTVE',
      'deck.issuedStamp': 'KIADVA',
      'deck.costsTurnAction': 'FELHASZNÁLJA A TELJES KÖRAKCIÓDAT',
      'ticker.worldWire': 'VILÁGHÍRADÓ',
      'broadcast.breakingBanner': 'RENDKÍVÜLI HÍREK',
      'broadcast.category': 'GLOBÁLIS LÉGIÜGYI ESEMÉNY',
      'broadcast.stationId': 'WAIR-TV • JET-KORSZAKI HÍRSZERKESZTŐSÉG • HÍREK MINDEN 3. FORDULÓBAN',
      'broadcast.dismissBtn': 'BEZÁRÁS ÉS REPÜLÉS FOLYTATÁSA',
      'settings.title': 'KABINBEÁLLÍTÁSOK ÉS HANGPULT',
      'settings.note': 'Az Air Superiority minden hangját élőben szintetizálja a Web Audio API — 4 fázisban fokozódó bossa-nova és jazz hangszereléssel.',
      'settings.musicTitle': 'DINAMIKUS LOUNGE HANGSZőNYEG',
      'settings.musicDesc': '4 fázisú tempó- és intenzitás-fokozódás a fordulók során',
      'settings.musicVolTitle': 'ZENE HANGEREJE',
      'settings.musicVolDesc': 'Háttérzene szintje a kabinban',
      'settings.sfxTitle': 'HANGEFFEKTEK',
      'settings.sfxDesc': 'Táblakattogás, biztonsági öv gong, kapubecsapolás, távíró',
      'settings.sfxVolTitle': 'EFFEKTEK HANGEREJE',
      'settings.sfxVolDesc': 'Mechanikus vezérlőpult hangereje',
      'settings.returnBtn': 'VISSZA',
      'howto.eyebrow': 'UTASBIZTONSÁGI ÉS MŰVELETI KÁRTYA',
      'howto.title': 'JÁTÉKSZABÁLYOK — KAPUHÁBORÚ ESETÉRE',
      'howto.step1Title': 'FOGLALJ EL EGY KAPUT',
      'howto.step1Desc': 'Koppints vagy kattints bármely szabad kapura a tervrajzon saját légitársaságod kitűzőjének elhelyezéséhez.',
      'howto.step2Title': 'VAGY JÁTSSZ KI EGY KÁRTYÁT',
      'howto.step2Desc': 'Vess be egyetlen beszállókártyát helyette. <strong>Körönként egy akció</strong> engedélyezett.',
      'howto.step3Title': 'LÁNCOLD ÖSSZE AZ ÚTVONALAKAT',
      'howto.step3Desc': 'Minden szomszédos saját kapu <strong>+25%-kal</strong> növeli a kapu hozamát. A láncok a színedben ragyognak.',
      'howto.step4Title': 'FIGYELD A HÍRADÓT',
      'howto.step4Desc': 'Minden 3. fordulóban rendkívüli híradó szakítja meg az adást, amely minden légitársaság forgalmára hatással van.',
      'howto.step5Title': 'URALD A TERMINÁLT',
      'howto.step5Desc': 'Szerezd meg a kapuk szigorú többségét az azonnali győzelemhez, vagy szállítsd a legtöbb utast az utolsó fordulóig.',
      'howto.step6Title': 'FIGYELJ A KÁRTYATÁLCÁRA',
      'howto.step6Desc': 'Körönként 1 kártyát húzol, és legfeljebb <strong>3-at</strong> tarthatsz. A 4. kártya automatikusan megsemmisíti a legrégebbiet.',
      'howto.returnBtn': 'VISSZA A CÍMKÉPERNYŐRE',
      'rules.title': 'ÉPÍTÉSZETI ÉS REPÜLÉSI KÉZIKÖNYV — AIR SUPERIORITY',
      'rules.sec1Title': '1. TERMINÁL TOPOLÓGIA ÉS ÚTVONAL-SZINERGIA',
      'rules.sec2Title': '2. KETTŐS GYŐZELMI FELTÉTEL',
      'rules.sec3Title': '3. AKCIÓ ELŐKÉSZÍTÉS ÉS KÖRÖNKÉNT EGY LÉPÉS',
      'rules.sec4Title': '4. A TIZENNYOLC REPÜLÉSI KUPON ÉS „Z” BUSZKAPUK',
      'rules.card18': '<strong>Az Iparág Államosítása (1x Egyedi):</strong> Azonnal begyűjti a térképen lévő <em>összes kapu</em> (saját, rivális és semleges) utashozamát egyetlen összegben — majd végleg eltávolítja a kártyát a játékból!',
      'rules.sec5Title': '5. VILÁGHÍRADÓ ÉS RIVÁLIS SZINDIKÁTUSOK',
      'rules.returnBtn': 'VISSZA A TERMINÁLHOZ',
      'interstitial.classification': 'BIZALMAS UTASLISTA • PILÓTAFÜLKE ÁTADÁSA',
      'interstitial.gatePill': 'BESZÁLLÁSI FELHÍVÁS • A1-ES KAPU',
      'interstitial.boardingTitle': 'A(z) {name} járata most száll be az A1-es kapunál.',
      'interstitial.privacyNote': 'A repülési kuponok és a kézben tartott kártyák átadás közben zárolva vannak. Győződj meg róla, hogy a rivális kapitányok elfordultak a képernyőtől.',
      'interstitial.readyBtn': 'Kattints, ha {name} átvette az irányítást',
      'gameover.suddenDeathBadge': 'AZONNALI GYŐZELEM — SZIGORÚ KAPUTÖBBSÉG',
      'gameover.finalRoundBadge': 'UTOLSÓ ({round}.) FORDULÓ — UTASSZÁM-FÖLÉNY',
      'gameover.triumphsTitle': '{name} GYŐZEDELMESKEDETT!',
      'gameover.suddenDeathSub': '{name} megszerezte a(z) {total} kapuból a(z) {gates} irányítását, így a(z) {round}. fordulóban azonnali monopóliumot szerzett!',
      'gameover.finalRoundSub': 'A(z) {round}. forduló végén {name} uralja a terminált {pax} elszállított utassal!',
      'gameover.rematchBtn': 'ÚJ TERMINÁL (VISSZAVÁGÓ)',
      'gameover.customizeBtn': 'LÉGITÁRSASÁG TESTRESZABÁSA',
      'gameover.roleCoop': '(0{n}. KAPITÁNY)',
      'gameover.roleYou': '(TE)',
      'gameover.roleRival': '(SZINDIKÁTUS)',
      cards: {
        gate_change: {
          name: 'Kapucsere',
          badge: 'TÁMADÁS',
          desc: 'Véglegesen saját légitársaságodhoz csatol egy rivális által birtokolt kaput.',
          tooltip: 'Átírja egy rivális kapujának bérleti jogát a te nevedre. Koppints bármely rivális 3D kitűzőre a tervrajzon.',
          footer: 'CÉLPONT: RIVÁLIS KAPU',
          prompt: 'Koppints bármely pulzáló RIVÁLIS 3D kapukitűzőre a végleges elfoglaláshoz.'
        },
        runway_maint: {
          name: 'Pályakarbantartás',
          badge: 'SZABOTÁZS',
          desc: 'Lezár bármely kaput újraaszfaltozás miatt: 2 teljes fordulóig nincs utasforgalom.',
          tooltip: 'Sürgősségi burkolatjavítást rendel el BÁRMELY kapun. A kapu a következő 2 fordulóban nulla utast termel.',
          footer: 'CÉLPONT: BÁRMELY KAPU',
          prompt: 'Koppints BÁRMELY kapura — rivális, semleges vagy saját — a 2 fordulós lezáráshoz.'
        },
        lounge_upgrade: {
          name: 'VIP Váró Fejlesztés',
          badge: 'FEJLESZTÉS',
          desc: 'Véglegesen MEGDUPLÁZZA az egyik saját kapud alap utashozamát.',
          tooltip: 'Starlight Club luxusvárót épít az egyik saját kapud fölé, amely véglegesen megduplázza az alaphozamot.',
          footer: 'CÉLPONT: SAJÁT KAPU',
          prompt: 'Koppints az egyik SAJÁT 3D kapukitűződre az alaphozam végleges duplázásához.'
        },
        charter_buyout: {
          name: 'Charter Felvásárlás',
          badge: 'VÁLLALATI',
          desc: 'Felvásárolja a rivális irodáját: 1 véletlenszerű kupont ellop a kezéből.',
          tooltip: 'Válassz egy riválist az álláslistán, és egy véletlenszerű kupon átkerül a kezéből a tiédbe.',
          footer: 'CÉLPONT: RIVÁLIS VÁLLALAT',
          prompt: 'Koppints egy RIVÁLIS LÉGITÁRSASÁG gombra vagy sorra egy kupon megszerzéséhez.'
        },
        baggage_strike: {
          name: 'Poggyászsztrájk',
          badge: 'SZABOTÁZS',
          desc: 'Elszippantja egy rivális légitársaság összegyűjtött utasainak 25%-át.',
          tooltip: 'Sztrájkot robbant ki egy rivális terminálján: elveszítik az utasaik 25%-át (maximum 400 főt), akiket te szállítasz el.',
          footer: 'CÉLPONT: RIVÁLIS VÁLLALAT',
          prompt: 'Koppints egy RIVÁLIS LÉGITÁRSASÁG gombra vagy sorra az utasok 25%-ának elszippantásához.'
        },
        direct_flight: {
          name: 'Közvetlen Charterjárat',
          badge: 'AZONNALI',
          desc: 'Közvetlen különjáratot indít, amely azonnal +150 utast hoz.',
          tooltip: 'Soron kívüli Super-Constellation járatot indít, amely célpont nélkül azonnal +150 utast szállít.',
          footer: 'AZONNALI BEVETÉS'
        },
        terminal_expansion: {
          name: 'Terminálbővítés',
          badge: 'ÉPÍTKEZÉS',
          desc: 'Új kaput épít a legnagyobb saját kapuhálózatodhoz (vagy új Z-kaput a betonon).',
          tooltip: 'Bármikor kijátszható! Új kaput csatol közvetlenül a legnagyobb saját kapucsoportodhoz — ha a csarnok megtelt, új saját „Z” buszkaput nyit az előtéren.',
          footer: 'AZONNALI BEVETÉS'
        },
        faa_audit: {
          name: 'Légügyi Hatósági Ellenőrzés',
          badge: 'ELLENŐRZÉS',
          desc: 'Minden rivális légitársaság köteles eldobni a legrégebbi kuponját.',
          tooltip: 'Szövetségi ellenőröket küld minden rivális irodába; minden ellenfél eldobja a legrégebbi kártyáját.',
          footer: 'AZONNALI BEVETÉS'
        },
        hostile_takeover: {
          name: 'Ellenséges Felvásárlás',
          badge: 'TÁMADÁS',
          desc: 'Elfoglal egy rivális kaput EGY körre — a forduló végén visszaszáll rájuk.',
          tooltip: 'Ideiglenes hatalomátvétel egy rivális kapun: egy körön át te kapod az utasait, majd a forduló végén visszatér az eredeti tulajdonoshoz.',
          footer: 'CÉLPONT: RIVÁLIS KAPU',
          prompt: 'Koppints bármely RIVÁLIS 3D kapukitűzőre az egykörös elfoglaláshoz.'
        },
        holding_pattern: {
          name: 'Várakozó Légtér',
          badge: 'ELLENŐRZÉS',
          desc: 'Várakozó légtérbe kényszerít egy riválist: a következő teljes köréből kimarad.',
          tooltip: 'A megcélzott légitársaság teljesen elveszíti a következő körét — nincs beszállás, nincs kártyahúzás és nincs akció.',
          footer: 'CÉLPONT: RIVÁLIS VÁLLALAT',
          prompt: 'Koppints egy RIVÁLIS LÉGITÁRSASÁG gombra vagy sorra a következő körük blokkolásához.'
        },
        sst_route: {
          name: 'Szuperszonikus Járat',
          badge: 'FELLENDÜLÉS',
          desc: 'A Mach 2-es szolgáltatás 1 fordulóra MEGDUPLÁZZA a teljes hálózatod hozamát.',
          tooltip: 'Minden általad birtokolt kapu utasforgalma megduplázódik egy teljes fordulóra.',
          footer: 'AZONNALI BEVETÉS'
        },
        smear_campaign: {
          name: 'Lejárató Kampány',
          badge: 'SZABOTÁZS',
          desc: 'A rivális elveszíti a legnagyobb összefüggő kapulánca hozamának 50%-át.',
          tooltip: 'Kellemetlen sajtóhíreket terjeszt a riválisról: a következő beszálláskor a legnagyobb összefüggő kapuláncuk csak féláron fizet.',
          footer: 'CÉLPONT: RIVÁLIS VÁLLALAT',
          prompt: 'Koppints egy RIVÁLIS LÉGITÁRSASÁG gombra vagy sorra a fő láncuk hozamának felezéséhez.'
        },
        emergency_landing: {
          name: 'Kényszerleszállás',
          badge: 'ZAVARKELTÉS',
          desc: 'Egy rivális kaput szabad folyosóra költöztet (vagy új Z-kapura száműz).',
          tooltip: 'Sürgősségi átirányítást rendel el egy rivális kapura, amely átkerül egy üres folyosói csomópontra — vagy egy újonnan nyitott külső „Z” buszkapura.',
          footer: 'CÉLPONT: RIVÁLIS KAPU',
          prompt: 'Koppints bármely RIVÁLIS 3D kapukitűzőre a kényszerített átköltöztetéshez.'
        },
        code_share: {
          name: 'Kódmegosztási Egyezmény',
          badge: 'SZÖVETSÉG',
          desc: '2 teljes fordulón át te és a célzott rivális is megkapjátok egymás kapubevételének 25%-át.',
          tooltip: 'Kétoldalú szerződés egy rivális légitársasággal: a következő 2 fordulóban mindkét fél megkapja a másik kapui által termelt utasok 25%-át bónuszként.',
          footer: 'CÉLPONT: RIVÁLIS VÁLLALAT',
          prompt: 'Koppints egy RIVÁLIS LÉGITÁRSASÁG gombra vagy sorra a 2 fordulós kódmegosztáshoz.'
        },
        severe_weather: {
          name: 'Heves Viharzóna',
          badge: 'IDŐJÁRÁS',
          desc: 'Megcéloz egy csarnokágat: 1 fordulóra megfelezi (-50%) az ág összes kapujának hozamát.',
          tooltip: 'Ítéletidőt zúdít egy kiválasztott csarnokfolyosóra: az adott ághoz tartozó minden kapu 50%-kal kevesebb utast termel 1 teljes fordulóig.',
          footer: 'CÉLPONT: CSARNOKÁG',
          prompt: 'Koppints BÁRMELY kapukitűzőre azon a csarnokágon, amelyet viharral (-50% utas) sújtanál.'
        },
        loyalty_program: {
          name: 'Törzsutas Program',
          badge: 'MARKETING',
          desc: 'Megcéloz egy saját kaput: 3 fordulón át minden értékeléskor +50 bónusz utast ad.',
          tooltip: 'Törzsutas klubot indít az egyik saját kapudnál: a következő 3 fordulóban minden pontozáskor fix +50 extra utast termel.',
          footer: 'CÉLPONT: SAJÁT KAPU',
          prompt: 'Koppints az egyik SAJÁT 3D kapukitűződre a 3 fordulós Törzsutas Program (+50 utas) indításához.'
        },
        fortress_hub: {
          name: 'Erődítmény Központ',
          badge: 'VÉDELEM',
          desc: 'Radarpajzsot von egy saját kapud fölé, amely a következő körödig védett a rivális kártyáktól.',
          tooltip: 'Légvédelmi radarkupolát aktivál egy saját kapud felett, így a következő köröd kezdetéig immunis a rivális támadó kártyákra.',
          footer: 'CÉLPONT: SAJÁT KAPU',
          prompt: 'Koppints az egyik SAJÁT 3D kapukitűződre a radarpajzs aktiválásához.'
        },
        nationalize_industry: {
          name: 'Az Iparág Államosítása',
          badge: '1x RENDELET',
          desc: 'MECCSENKÉNT EGYSZER: Azonnal begyűjti a térkép ÖSSZES kapujának utashozamát, majd végleg megsemmisül.',
          tooltip: 'Egyetlen példány létezik belőle a pakliban! Azonnal jóváírja a tervrajzon található összes kapu (saját, rivális és semleges) utashozamát egy összegben, majd véglegesen törlődik a játékból.',
          footer: '1x GLOBÁLIS • VÉGLEG TÖRLŐDIK'
        }
      },
      'deck.confirmAction': 'AKCIÓ MEGERŐSÍTÉSE',
      'deck.confirmGateSub': '{id} kapu lefoglalása',
      'deck.confirmCardSub': '{card} kijátszása',
      'deck.cancelSelection': 'KIJELÖLÉS TÖRLÉSE',
      'deck.stagedHintGate': 'ELŐKÉSZÍTVE: {id} kapu ({name}) — Kattints az AKCIÓ MEGERŐSÍTÉSE gombra vagy töröld.',
      'deck.stagedHintCard': 'ELŐKÉSZÍTVE: {card} {target} — Kattints az AKCIÓ MEGERŐSÍTÉSE gombra vagy töröld.',
      'legend.zGate': 'Előtéri „Z” buszkapu (többségen kívüli)',
      'tooltip.zGate': 'ELŐTÉRI „Z” BUSZKAPU (Nem számít a többségi győzelembe • Buszos transzfer)',
      'tooltip.shielded': 'ERŐDÍTMÉNY PAJZS AKTÍV (Védett a rivális kártyáktól)',
      'tooltip.loyalty': 'TÖRZSUTAS PROGRAM: +50 UTAS ({rounds} forduló van hátra)',
      'tooltip.weather': 'HEVES VIHARZÓNA: -50% ághozam ({rounds} forduló van hátra)',
      worldEvents: {
        clear_skies: {
          title: 'ZAVARTALAN REPÜLÉSI IDŐ',
          shortLabel: 'TISZTA ÉGBOLT (1.0x)',
          desc: 'Szabványos légi forgalom minden csarnokban.'
        },
        pilot_shortage: {
          title: 'PILÓTAHIÁNY',
          category: 'SZEMÉLYZETI ÉS MUNKAÜGYI HÍR',
          shortLabel: 'PILÓTAHIÁNY (0.5x)',
          desc: 'Személyzeti fennakadások miatt a járatok fele a földön marad. A következő fordulóban minden légitársaság kapacitása a felére (0.5x) csökken.',
          impactText: 'KÖVETKEZŐ FORDULÓ: Minden kapu utashozama = 50%'
        },
        holiday_rush: {
          title: 'ÜNNEPI CSÚCSFORGALOM',
          category: 'FŐSZEZONI FELLENDÜLÉS',
          shortLabel: 'ÜNNEPI CSÚCS (2.0x)',
          desc: 'Nyüzsögnek a nyaralók a terminálon! A következő fordulóban minden kapu utashozama MEGDUPLÁZÓDIK (2.0x).',
          impactText: 'KÖVETKEZŐ FORDULÓ: Minden kapu utashozama = 200%'
        },
        jet_stream: {
          title: 'FUTÓÁRAMLÁS HÁTSZÉL',
          category: 'METEOROLÓGIAI JELENTÉS',
          shortLabel: 'HÁTSZÉL (1.5x)',
          desc: 'A magaslégköri hátszél felgyorsítja a fordulóidőket. Minden kapu 1.5x utast termel a következő fordulóban.',
          impactText: 'KÖVETKEZŐ FORDULÓ: Minden kapu utashozama = 150%'
        },
        worlds_fair: {
          title: 'VILÁGKIÁLLÍTÁS EXPÓ',
          category: 'NEMZETKÖZI TURIZMUS',
          shortLabel: 'VILÁGKIÁLLÍTÁS (1.25x)',
          desc: 'Nemzetközi küldöttségek érkeznek a Központi Rotundába! Minden Rotunda központot (H1–H4) birtokló társaság azonnal +120 utast kap, a globális hozam pedig 1.25x-re nő.',
          impactText: 'AZONNALI: +120 utas minden Rotunda kapu után + 1.25x hozam'
        },
        transatlantic_fog: {
          title: 'ATLANTI KÖDFAL',
          category: 'IDŐJÁRÁSI RIASZTÁS',
          shortLabel: 'KÖD MIATTI KÉSÉS (0.75x)',
          desc: 'Az alacsony látótávolság 75%-ra lassítja a forgalmat a következő körben, de az irányítótorony +1 akciókártyát oszt ki minden társaságnak.',
          impactText: 'KÖVETKEZŐ FORDULÓ: 75% kapacitás • MINDEN JÁTÉKOS +1 KÁRTYÁT HÚZ'
        },
        cab_subsidy: {
          title: 'LÉGIPOSTAI ÁLLAMI TÁMOGATÁS',
          category: 'SZÖVETSÉGI LÉGIÜGYI ÖSZTÖNDÍJ',
          shortLabel: 'LÉGIPOSTA FELLENDÜLÉS (1.2x)',
          desc: 'A Légügyi Tanács légipostai bővítési támogatást ítél meg! Minden légitársaság azonnal +140 utast kap és 1.2x hozamot élvez a következő fordulóban.',
          impactText: 'AZONNALI: +140 utas minden társaságnak • KÖVETKEZŐ FORDULÓ: 120% hozam'
        }
      },
      anchors: {
        classic_50s: {
          nameplate: 'BIFF CONROY • VEZETŐ LÉGIÜGYI TUDÓSÍTÓ',
          quirkLines: [
            '„JÓ ESTÉT, VILÁGUTAZÓK — GYORSHÍR A KÖZPONTI ROTUNDÁBÓL:”',
            '„MOST ÉRKEZETT A TÁVÍRÓN, HÖLGYEIM ÉS URAIM — KAPASZKODJANAK MEG:”',
            '„ÉLŐBEN AZ IDLEWILD IRÁNYÍTÓTORONYBÓL, KÜLÖNKIADÁSUNK KÖVETKEZIK:”'
          ]
        },
        retro_robot: {
          nameplate: 'UNIVAC-9 EGYSÉG • MÁGNESES SZALAGOS HÍRAUTOMATA',
          quirkLines: [
            '„BZZT-KLIKK // LYUKKÁRTYÁS TELEMETRIAI RIASZTÁS ÉSZLELVE:”',
            '„VÁKUUMCSÖVEK MAXIMÁLIS FÉNYERŐN — TERMINÁLHATÁS SZÁMÍTÁSA:”',
            '„409-ES SZALAGORSÓ BETÖLTVE — AUTOMATIZÁLT IRÁNYELV ADÁSA:”'
          ]
        },
        green_alien: {
          nameplate: 'ZORBLAX A 7G SZEKTORBÓL • INTERGALAKTIKUS FORGALMI MEGFIGYELŐ',
          quirkLines: [
            '„ÜDVÖZLET, FÖLDI KÉTLÁBÚAK — LENYŰGÖZnek A PRIMITÍV KIFUTÓPÁLYÁITOK:”',
            '„A REPÜLŐ CSÉSZEALJ RADARJA KÜLÖNÖS LÉGKÖRI JELENSÉGET FOGOTT:”',
            '„KÖZVETLEN ÜZENET A FÖLD KÖRÜLI ANYAHAJÓ VIP VÁRÓJÁBÓL:”'
          ]
        },
        aviator_ace: {
          nameplate: '„ÁSZ” MONTGOMERY KAPITÁNY • BEREPLŐPILÓTA ÉS SZAKKOMMENTÁTOR',
          quirkLines: [
            '„CSATOLJÁK BE AZ ÖVEKET, KAPITÁNYOK — TURBULENCIA VAN A VONALON:”',
            '„EGYENESEN A PILÓTAFÜLKÉBŐL MACH 2-VEL — ÍME A FRISS JELENTÉS:”',
            '„A TORONY MOST VILLANTOTTA FEL A JELZŐLÁMPÁT — FIGYELMESEN OLVASSÁK:”'
          ]
        },
        nora_cat: {
          nameplate: 'NORA A CIRMOS • ÉJSZAKAI TÁVÍRÓ HÍROLvasó',
          quirkLines: [
            '„*SZÓHAJ*… EZÉRT A HÍRÉRT ÉBRESZTETTEK FEL A SZUNDIMBÓL:”',
            '„REspEKTÍVE MÁR MEGINT KÁOSZ A KIFUTÓN. ÍME A FRISS TÁVIRAT:”',
            '„KOPP-KOPP… SZÓL EZ A MIKROFON? JÓL VAN, FIGYELJENEK KAPITÁNYOK:”'
          ]
        }
      },
      headlines: [
        'Gore elnök rendeletet írt alá, amely engedélyezi az atommeghajtású madárdrónok dél-amerikai magvető bevetését.',
        'A Szovjetunió állítja, hogy elsőként juttatott kutyát a hipertérbe; az eb folyékony orosz nyelven kért jutalomfalatot.',
        'Egy helyi háziasszony felfedezte a súlytalansági zselatinforma titkos receptjét.',
        'A Pan Am kötelező rakétahátizsák-kiképzést vezet be minden légiutas-kísérő számára.',
        'A TWA atomfűtéses lábtartókat mutatott be az első osztályon; az utasoknak ólombéléses zoknit javasolnak.',
        'A Polgári Légügyi Tanács jóváhagyta a három-martinis minimumot minden transzatlanti légcsavaros járaton.',
        'Az MIT tudósai figyelmeztetnek: a szuperszonikus hangrobbanások felébreszthetik az 1977-es szunnyadó diszkóritmusokat.',
        'Howard Hughes megvásárolta a Holdat, hogy privát VIP hidroplán-lagúnaként használja.',
        'Párizsi divattervezők túlnyomásos üvegszálas kontyokat mutattak be a nyitott tetejű sztratoszféra-kabinokhoz.',
        'Egy kertvárosi apa elkészült a hátsó udvari óvóhelyével, amelyben működő tiki-bár és mini poggyászszalag is található.',
        'A Genfi Egyezményt módosították: tilos a középső ülésre dupla jegyet eladni harmonikások mellett.',
        'A Chrysler bejelentette a gázturbinás csomagszállító kocsit, amely képes átlépni a hangsebességet a B csarnokban.'
      ]
    },

    es: {
      'title.eyebrow': 'UNA PRODUCCIÓN INDEPENDIENTE DE ESTRATEGIA EN LA ERA DEL JET',
      'title.wordAir': 'AIR',
      'title.wordSup': 'SUPERIORITY',
      'title.tagline': 'MONOPOLIO DE PUERTAS • SINERGIA DE RUTAS • GUERRA DE TERMINALES',
      'title.startGame': 'INICIAR PARTIDA',
      'title.settings': 'AJUSTES',
      'title.howToPlay': 'CÓMO JUGAR',
      'title.credit': 'IDLEWILD INTERACTIVE STUDIO • COMISIÓN INTERNACIONAL DE HUBS • N.º 084-9921-JFK',
      'menu.eyebrow': 'IDLEWILD INTERACTIVE • COMISIÓN INTERNACIONAL DE HUBS',
      'menu.title': 'AIR SUPERIORITY',
      'menu.subtitle': 'PLANO DE TERMINAL Y ESTRATEGIA DE MONOPOLIO DE PUERTAS',
      'menu.stamp': 'CHÁRTER PRIMERA CLASE',
      'setup.dispatchMode': 'MODO DE DESPACHO DE VUELO',
      'setup.modeSoloTitle': 'VUELO EN SOLITARIO (VS IA)',
      'setup.modeSoloDesc': 'Comanda tu aerolínea insignia contra sindicatos chárter rivales',
      'setup.modeCoopTitle': 'PASA Y JUEGA (LOCAL)',
      'setup.modeCoopDesc': 'De 2 a 4 capitanes comparten la terminal con relevos privados',
      'setup.modeOnlineTitle': 'VUELO EN LÍNEA (MULTIJUGADOR P2P)',
      'setup.modeOnlineDesc': 'Crea o únete a una Sala de Embarque privada con Código y Pase de Puerta',
      'online.towerControl': 'DESPACHO DE TORRE',
      'online.hostOptionTitle': 'CREAR SALA DE EMBARQUE (ANFITRIÓN)',
      'online.inboundCharter': 'CHÁRTER ENTRANTE',
      'online.joinOptionTitle': 'UNIRSE CON CÓDIGO DE SALA',
      'online.roomCodeLabel': 'CÓDIGO DE SALA (COMPARTE CON CAPITANES)',
      'online.copyBtn': 'COPIAR',
      'online.copiedBtn': '¡COPIADO!',
      'online.newCodeBtn': 'NUEVO',
      'online.gatePassOptional': 'PASE DE PUERTA (CONTRASEÑA OPCIONAL)',
      'online.hostPassPlaceholder': 'Puerta Abierta (Sin Pase)',
      'online.hostListening': 'Torre de Control transmitiendo — esperando capitanes en la puerta...',
      'online.hostReady': '¡Embarque Aprobado — {n} capitanes listos para despegar!',
      'online.hostOffline': 'PeerJS sin conexión — Los modos Solitario y Local siguen listos.',
      'online.connectedRosterLabel': 'LISTA DE SALA DE EMBARQUE (2–4 CAPITANES)',
      'online.boardedCount': '{n} / 4 A BORDO',
      'online.enterRoomCode': 'INGRESA CÓDIGO DE SALA',
      'online.joinCodePlaceholder': 'ej. TWA-404',
      'online.enterGatePass': 'PASE DE PUERTA (CONTRASEÑA)',
      'online.joinPassPlaceholder': 'Dejar vacío si está abierta',
      'online.connectTowerBtn': 'SOLICITAR AUTORIZACIÓN DE EMBARQUE',
      'online.joinIdleStatus': 'Ingresa el Código de Sala del Capitán Anfitrión y solicita autorización.',
      'online.connectingStatus': 'Conectando con la Torre de Control...',
      'online.boardingApprovedStatus': 'Embarque Aprobado (Boarding Approved)',
      'online.authErrorStatus': 'Pase de Puerta Incorrecto / Sala No Encontrada',
      'online.roomFullStatus': 'Sala de Embarque Llena (4/4 Capitanes)',
      'online.departBtn': 'DESPEGAR (INICIAR PARTIDA)',
      'online.departNeedMoreBtn': 'DESPEGAR (MÍN. 2 JUGADORES)',
      'online.guestWaitBtn': 'EMBARQUE APROBADO — ESPERANDO SALIDA DEL ANFITRIÓN',
      'online.hostBadge': 'ANFITRIÓN',
      'online.guestBadge': 'A BORDO',
      'online.youBadge': 'TÚ',
      'online.inactiveHoldingChip': 'EN PATRÓN DE ESPERA (INACTIVO)',
      'online.waitingPeerPrompt': 'VUELO EN LÍNEA: {name} tiene los controles...',
      'online.syncingPrompt': 'TRANSMITIENDO ÓRDENES A LA TORRE DE CONTROL...',
      'setup.carrierReg': 'REGISTRO DE AEROLÍNEA E INSIGNIA',
      'setup.captainReg': 'REGISTRO E INSIGNIA DEL CAPITÁN 0{n}',
      'setup.selectCaptain': 'SELECCIONA EL CAPITÁN A CONFIGURAR (NOMBRE, COLOR Y EMBLEMA)',
      'setup.editingCaptain': 'Editando: <strong>Capitán 0{n} ({name})</strong>',
      'setup.airlineCallsign': 'INDICATIVO / NOMBRE DE LA AEROLÍNEA',
      'setup.captainCallsign': 'INDICATIVO DEL CAPITÁN 0{n} / NOMBRE DE LA AEROLÍNEA',
      'setup.airlinePlaceholder': 'Ingresa nombre de aerolínea...',
      'setup.pinLivery': 'COLOR DE LIBREA DE FLOTA',
      'setup.pinAccentCaption': 'Color de Pin: <strong>{name}</strong>',
      'setup.corporateEmblem': 'EMBLEMA CORPORATIVO (33 INSIGNIAS AUTORIZADAS)',
      'setup.selectedEmblemCaption': 'Seleccionado: <strong>{name}</strong>',
      'setup.flightOps': 'PARÁMETROS OPERATIVOS Y RIVALES',
      'setup.rivalAirlines': 'AEROLÍNEAS RIVALES EN COMPETENCIA',
      'setup.rivals1': '1 RIVAL (2J)',
      'setup.rivals2': '2 RIVALES (3J)',
      'setup.rivals3': '3 RIVALES (4J)',
      'setup.syndicateAggression': 'AGRESIVIDAD DEL SINDICATO RIVAL',
      'setup.diffEasy': 'FÁCIL',
      'setup.diffNormal': 'NORMAL',
      'setup.diffHard': 'DIFÍCIL',
      'setup.diffDescEasy': '<strong>Fácil (Chárter Regional):</strong> Los rivales eligen puertas oportunistas y rara vez despliegan cupones ofensivos.',
      'setup.diffDescNormal': '<strong>Normal (Aerolínea Nacional):</strong> Los rivales priorizan puertas vacías de alto rendimiento y usan cartas tácticamente.',
      'setup.diffDescHard': '<strong>Difícil (Sindicato Global):</strong> ¡Los rivales calculan sinergias de red y sabotean agresivamente al líder!',
      'setup.coopCaptainsLabel': 'CAPITANES REGISTRADOS (PASA Y JUEGA)',
      'setup.coop2P': '2 JUGADORES',
      'setup.coop3P': '3 JUGADORES',
      'setup.coop4P': '4 JUGADORES',
      'setup.coopManifestLabel': 'MANIFIESTO DE VUELO PASA Y JUEGA',
      'setup.coopClickToEdit': 'Toca o haz clic en cualquier tarjeta para editar',
      'setup.editingTag': 'EDITANDO',
      'setup.customizeTag': 'PERSONALIZAR',
      'setup.turnLimitLabel': 'LÍMITE DE RONDAS PROGRAMADAS',
      'setup.turns20': '20 RONDAS (ESTÁNDAR)',
      'setup.turns30': '30 RONDAS (MARATÓN)',
      'setup.directivesTitle': 'DIRECTIVAS ARQUITECTÓNICAS Y DE VUELO',
      'setup.directive1': '<strong>Plano Dinámico:</strong> Cada partida traza un nuevo diseño de terminal, topología de puertas y flujo de pasajeros.',
      'setup.directive2': '<strong>Una Acción por Turno:</strong> En cada turno puedes reclamar <strong>una puerta</strong> <em>o</em> jugar <strong>una Carta de Acción</strong> — nunca ambas.',
      'setup.directive3': '<strong>Robo Automático y Límite de 3 Cartas:</strong> Robas 1 cupón cada turno; el más antiguo se anula si superas las 3 cartas.',
      'setup.directive4': '<strong>Sinergia de Rutas:</strong> Cada puerta conectada directamente de la misma aerolínea multiplica su rendimiento un <strong>+25%</strong>.',
      'setup.directive5': '<strong>Mayoría de Muerte Súbita:</strong> Gana de inmediato al controlar la mayoría estricta de todas las puertas.',
      'setup.directive6': '<strong>Supremacía de Pasajeros:</strong> De lo contrario, gana quien transporte más pasajeros al terminar la ronda final.',
      'setup.directive7': '<strong>Controles Táctiles y Ratón:</strong> Arrastra con 1 dedo o ratón para mover; pellizca con 2 dedos o usa la rueda para zoom.',
      'setup.manualBtn': 'MANUAL DE VUELO Y REGLAS',
      'setup.launchBtn': 'EMITIR TARJETA DE EMBARQUE Y DESPEGAR',
      'hud.title': 'AIR SUPERIORITY',
      'hud.subtitle': 'PLANO ARQUITECTÓNICO DE LA TERMINAL • SECTOR IDLEWILD',
      'hud.roundLabel': 'RONDA',
      'hud.majorityLabel': 'META DE MAYORÍA',
      'hud.gatesUnit': 'PUERTAS',
      'hud.topologyLabel': 'TOPOLOGÍA',
      'hud.directiveLabel': 'DIRECTIVA GLOBAL',
      'hud.newMapBtn': 'NUEVO MAPA',
      'hud.musicOn': 'MÚSICA: SÍ',
      'hud.musicOff': 'MÚSICA: NO',
      'hud.sfxOn': 'EFECTOS: SÍ',
      'hud.sfxOff': 'EFECTOS: NO',
      'hud.settingsBtn': 'AJUSTES',
      'hud.manualBtn': 'MANUAL',
      'hud.setupBtn': 'MENÚ',
      'hud.you': 'TÚ',
      'hud.worldWire': 'CABLE MUNDIAL',
      'sidebar.standingsTitle': 'CLASIFICACIÓN DE AEROLÍNEAS',
      'sidebar.telemetryTag': 'TELEMETRÍA EN VIVO',
      'sidebar.bulletinTitle': 'BOLETÍN MUNDIAL DE AVIACIÓN',
      'sidebar.nextBulletinIn': 'PRÓX. EN {n} RD',
      'sidebar.dispatchLogTitle': 'REGISTRO DE DESPACHO',
      'sidebar.towerTag': 'TORRE',
      'sidebar.roleCaptain': 'CAPITÁN',
      'sidebar.roleRival': 'SINDICATO • {n} CUP.',
      'sidebar.roleCoop': 'CAPITÁN 0{id} • {n} CUP.',
      'sidebar.chipHold': 'EN ESPERA',
      'sidebar.chipSst': 'SST x2',
      'sidebar.chipSmear': 'DIFAMADO',
      'sidebar.gatesMetric': 'PUERTAS',
      'sidebar.passengersMetric': 'PASAJEROS',
      'sidebar.outputMetric': 'FLUJO',
      'sidebar.targetPlayer': '▶ OBJETIVO: {name}',
      'board.defaultPrompt': 'TU TURNO — UNA ACCIÓN: reclama una puerta libre, O despliega un Cupón de Vuelo abajo. No ambos.',
      'board.cancelTargetBtn': 'CANCELAR OBJETIVO',
      'board.handoverPrompt': 'RELEVO DE CABINA: Esperando a {name} en la Puerta A1...',
      'board.privacyHint': 'Pantalla de privacidad activa.',
      'board.rivalOperating': 'AEROLÍNEA RIVAL EN OPERACIÓN: {name} está emitiendo órdenes...',
      'board.resolvingBulletin': 'RESOLVIENDO BOLETÍN MUNDIAL DE AVIACIÓN...',
      'board.standByHint': 'En espera del tráfico rival...',
      'board.targetingPrefix': '{name} — APUNTANDO [{card}]: {prompt}',
      'board.selectTargetHint': 'Selecciona un objetivo resaltado.',
      'board.yourTurnPrompt': 'TURNO DE {name} — UNA ACCIÓN: reclama una puerta libre, O despliega un Cupón de Vuelo abajo.',
      'board.oneActionAvail': '1 acción disponible para {name}.',
      'board.gateClaimedPrompt': 'PUERTA RECLAMADA: tu única acción fue usada — cupones bloqueados. Toca o haz clic en "FIN DE TURNO".',
      'board.gateSpentHint': 'Acción usada en reclamo de puerta.',
      'board.couponDeployedPrompt': 'CUPÓN DESPLEGADO: tu única acción fue usada — puertas bloqueadas. Toca o haz clic en "FIN DE TURNO".',
      'board.couponSpentHint': 'Acción usada en un cupón.',
      'legend.hub': 'HUB DE ROTONDA (+180 PAX)',
      'legend.main': 'PUERTA PRINCIPAL (+120 PAX)',
      'legend.regional': 'PUERTA DE MUELLE (+80 PAX)',
      'legend.synergy': 'RUTA PULSANTE = +25% / ENLACE',
      'legend.controls': 'ARRASTRAR: MOVER • PELLIZCAR / RUEDA: ZOOM',
      'tooltip.owner': 'PROPIETARIO: {name}',
      'tooltip.unclaimed': 'PUERTA DE TERMINAL LIBRE',
      'tooltip.sector': 'SECTOR: {sector}',
      'tooltip.output': 'FLUJO: <strong>+{yield} PAX / TURNO</strong>',
      'tooltip.synergy': '⇄ SINERGIA DE RUTA: {links} ENLACE(S) • ×{mult}',
      'tooltip.lounge': '★ SALA VIP MEJORADA ×{mult} BASE',
      'tooltip.closed': '⚠ PISTA CERRADA HASTA LA RONDA {round}',
      'deck.mobileHideTray': 'OCULTAR BANDEJA DE TARJETAS ▼',
      'deck.mobileShowTray': 'MOSTRAR BANDEJA DE TARJETAS ▲',
      'deck.turnActionLabel': 'ACCIÓN DE TURNO (ELIGE UNA)',
      'deck.claimGateOpt': 'Reclamar 1 Puerta',
      'deck.orLabel': '— O —',
      'deck.playCouponOpt': 'Jugar 1 Cupón',
      'deck.awaitingOrders': 'Esperando sus órdenes, Capitán.',
      'deck.couponsHeader': 'CUPONES DE VUELO / CARTAS DE ACCIÓN',
      'deck.couponsSub': '+1 por turno • desliza o pasa el cursor para detalles • máximo 3 en mano',
      'deck.drawPile': 'MAZO',
      'deck.discardPile': 'DESCARTE',
      'deck.passTurn': 'PASAR TURNO',
      'deck.takeNoAction': 'Sin acción ➔',
      'deck.endTurn': 'FIN DE TURNO',
      'deck.actionSpentSub': 'Acción lista • Siguiente ➔',
      'deck.standBy': 'EN ESPERA',
      'deck.awaitingHandoverSub': 'Esperando relevo de capitán',
      'deck.rivalOperatingSub': 'Aerolíneas rivales operando',
      'deck.sealedManifest': 'MANIFIESTO CONFIDENCIAL — SELLADO DURANTE EL RELEVO DE CABINA',
      'deck.emptyHand': 'SIN TARJETAS DE EMBARQUE EN BANDEJA — ROBAS 1 AL INICIO DE CADA TURNO',
      'deck.oldestFlag': 'ANTIGUA',
      'deck.selectTarget': '▶ ELEGIR OBJETIVO',
      'deck.armedStamp': 'LISTO',
      'deck.issuedStamp': 'EMITIDO',
      'deck.costsTurnAction': 'CONSUME TODA TU ACCIÓN DEL TURNO',
      'ticker.worldWire': 'CABLE MUNDIAL',
      'broadcast.breakingBanner': 'BOLETÍN DE ÚLTIMA HORA',
      'broadcast.category': 'EVENTO MUNDIAL DE AVIACIÓN',
      'broadcast.stationId': 'WAIR-TV • REDACCIÓN ERA DEL JET • BOLETINES CADA 3 RONDAS',
      'broadcast.dismissBtn': 'CERRAR Y REANUDAR OPERACIONES',
      'settings.title': 'AJUSTES DE CABINA Y CONSOLA DE AUDIO',
      'settings.note': 'Todo el sonido en Air Superiority se sintetiza en vivo mediante Web Audio API — con una banda sonora de bossa-nova y jazz en 4 fases y efectos mecánicos.',
      'settings.musicTitle': 'BANDA SONORA DINÁMICA DE SALÓN',
      'settings.musicDesc': 'Arreglista musical con escalada de intensidad en 4 fases',
      'settings.musicVolTitle': 'VOLUMEN DE MÚSICA',
      'settings.musicVolDesc': 'Nivel ambiental de cabina',
      'settings.sfxTitle': 'EFECTOS DE SONIDO',
      'settings.sfxDesc': 'Clics de paneles, timbres de cinturón, sellos de puerta y teletipo',
      'settings.sfxVolTitle': 'VOLUMEN DE EFECTOS',
      'settings.sfxVolDesc': 'Nivel de consola mecánica',
      'settings.returnBtn': 'VOLVER',
      'howto.eyebrow': 'TARJETA DE SEGURIDAD Y OPERACIONES',
      'howto.title': 'CÓMO JUGAR — EN CASO DE GUERRA DE PUERTAS',
      'howto.step1Title': 'RECLAMA UNA PUERTA',
      'howto.step1Desc': 'Toca o haz clic en cualquier puerta libre del plano para colocar tu pin y recibir a tus primeros pasajeros.',
      'howto.step2Title': 'O JUEGA UN CUPÓN',
      'howto.step2Desc': 'Despliega una tarjeta de embarque en su lugar. <strong>Una acción por turno</strong> — reclamar puerta bloquea tus cupones y viceversa.',
      'howto.step3Title': 'ENCADENA TUS RUTAS',
      'howto.step3Desc': 'Cada puerta vecina conectada que también poseas aumenta su flujo un <strong>+25%</strong>. Las cadenas brillan con tu color.',
      'howto.step4Title': 'ATENTO A LOS BOLETINES',
      'howto.step4Desc': 'Cada 3 rondas el noticiero interrumpe con una directiva global que altera el tráfico de todas las aerolíneas.',
      'howto.step5Title': 'CONQUISTA LA TERMINAL',
      'howto.step5Desc': 'Controla la mayoría estricta de las puertas para ganar por muerte súbita, o lidera en pasajeros totales al final.',
      'howto.step6Title': 'CUIDA TU BANDEJA',
      'howto.step6Desc': 'Robas 1 tarjeta por turno y solo puedes guardar <strong>3</strong>. Una 4.ª tarjeta tritura automáticamente la más antigua.',
      'howto.returnBtn': 'VOLVER AL TÍTULO',
      'rules.title': 'MANUAL ARQUITECTÓNICO Y DE VUELO — AIR SUPERIORITY',
      'rules.sec1Title': '1. TOPOLOGÍA DE LA TERMINAL Y SINERGIA DE RUTAS',
      'rules.sec2Title': '2. CONDICIONES DOBLES DE VICTORIA',
      'rules.sec3Title': '3. PREPARACIÓN DE ACCIÓN Y UNA ACCIÓN POR TURNO',
      'rules.sec4Title': '4. LOS DIECIOCHO CUPONES Y PUERTAS «Z» DE PLATAFORMA',
      'rules.card18': '<strong>Nacionalizar la Industria (1x Único):</strong> Recibe al instante la producción de pasajeros de <em>todas las puertas del mapa</em> (propias, rivales y neutrales) en un pago único — ¡y luego purga la carta para siempre!',
      'rules.sec5Title': '5. CABLE MUNDIAL Y SINDICATOS RIVALES',
      'rules.returnBtn': 'VOLVER A LA TERMINAL',
      'interstitial.classification': 'MANIFIESTO CONFIDENCIAL • RELEVO DE CABINA',
      'interstitial.gatePill': 'LLAMADA DE EMBARQUE • PUERTA A1',
      'interstitial.boardingTitle': 'El vuelo {name} está embarcando ahora en la Puerta A1.',
      'interstitial.privacyNote': 'Los cupones de vuelo y las cartas en mano están sellados durante el relevo. Asegúrate de que los demás capitanes no miren la pantalla antes de continuar.',
      'interstitial.readyBtn': 'Toca cuando {name} tenga los controles',
      'gameover.suddenDeathBadge': 'MUERTE SÚBITA — MAYORÍA ESTRICTA DE PUERTAS',
      'gameover.finalRoundBadge': 'RONDA FINAL {round} — SUPREMACÍA DE PASAJEROS',
      'gameover.triumphsTitle': '¡{name} TRIUNFA!',
      'gameover.suddenDeathSub': '¡{name} capturó {gates} de {total} puertas, asegurando un monopolio inmediato por Muerte Súbita en la Ronda {round}!',
      'gameover.finalRoundSub': '¡Al concluir la Ronda {round}, {name} domina la terminal con {pax} pasajeros transportados!',
      'gameover.rematchBtn': 'NUEVA TERMINAL (REVANCHA)',
      'gameover.customizeBtn': 'PERSONALIZAR AEROLÍNEA',
      'gameover.roleCoop': '(CAPITÁN 0{n})',
      'gameover.roleYou': '(TÚ)',
      'gameover.roleRival': '(SINDICATO)',
      cards: {
        gate_change: {
          name: 'Cambio de Puerta',
          badge: 'OFENSIVA',
          desc: 'Convierte permanentemente una puerta controlada por un rival a tu aerolínea.',
          tooltip: 'Reasigna el contrato de una puerta rival a tu aerolínea para siempre. Toca cualquier pin 3D rival en el plano.',
          footer: 'OBJETIVO: PIN RIVAL',
          prompt: 'Toca o haz clic en cualquier Pin 3D RIVAL pulsante para convertirlo permanentemente a tu aerolínea.'
        },
        runway_maint: {
          name: 'Mantenimiento de Pista',
          badge: 'SABOTAJE',
          desc: 'Cierra cualquier puerta por repavimentación: sin pasajeros durante 2 rondas.',
          tooltip: 'Ordena repavimentación de emergencia en CUALQUIER puerta del plano. La puerta genera cero pasajeros durante las próximas 2 rondas.',
          footer: 'OBJETIVO: CUALQUIER PUERTA',
          prompt: 'Toca o haz clic en CUALQUIER Pin de Puerta — rival, neutral o propio — para cerrarlo por 2 rondas.'
        },
        lounge_upgrade: {
          name: 'Mejora de Sala VIP',
          badge: 'MEJORA',
          desc: 'DUPLICA permanentemente el flujo base de pasajeros de una de tus puertas.',
          tooltip: 'Instala un salón Starlight Club sobre una de tus puertas. Su producción base se duplica para siempre.',
          footer: 'OBJETIVO: TU PIN',
          prompt: 'Toca o haz clic en uno de TUS Pines 3D para duplicar su flujo base de pasajeros para siempre.'
        },
        charter_buyout: {
          name: 'Compra de Chárter',
          badge: 'CORPORATIVO',
          desc: 'Compra el despacho de un rival: roba 1 cupón aleatorio de su mano.',
          tooltip: 'Elige a un rival en el panel de clasificación y un cupón aleatorio pasará de su mano directamente a la tuya.',
          footer: 'OBJETIVO: AEROLÍNEA RIVAL',
          prompt: 'Toca o haz clic en un botón o fila de AEROLÍNEA RIVAL para robar un cupón de su mano.'
        },
        baggage_strike: {
          name: 'Huelga de Equipaje',
          badge: 'SABOTAJE',
          desc: 'Drena el 25% de los pasajeros acumulados de una aerolínea rival.',
          tooltip: 'Convoca una huelga en la terminal de un rival: pierden el 25% de sus pasajeros acumulados (hasta 400) y tú los embarcas.',
          footer: 'OBJETIVO: AEROLÍNEA RIVAL',
          prompt: 'Toca o haz clic en una AEROLÍNEA RIVAL para drenar el 25% de sus pasajeros.'
        },
        direct_flight: {
          name: 'Vuelo Chárter Directo',
          badge: 'INSTANTÁNEO',
          desc: 'Opera un vuelo directo sin escalas para sumar +150 pasajeros al instante.',
          tooltip: 'Despacha un Super-Constellation sin escalas que embarca +150 pasajeros inmediatamente sin requerir objetivo.',
          footer: 'DESPLIEGUE INMEDIATO'
        },
        terminal_expansion: {
          name: 'Expansión de Terminal',
          badge: 'CONSTRUCCIÓN',
          desc: 'Crea una puerta conectada a tu mayor red de puertas (o una Puerta Z si está llena).',
          tooltip: '¡Jugable en cualquier momento! Inaugura una nueva puerta conectada directamente a tu mayor grupo de puertas o abre una Puerta «Z» de autobús en la plataforma.',
          footer: 'DESPLIEGUE INMEDIATO'
        },
        faa_audit: {
          name: 'Auditoría de la FAA',
          badge: 'CONTROL',
          desc: 'Cada aerolínea rival debe descartar su cupón más antiguo.',
          tooltip: 'Envía inspectores federales a todas las oficinas rivales; cada oponente descarta el cupón más antiguo de su mano.',
          footer: 'DESPLIEGUE INMEDIATO'
        },
        hostile_takeover: {
          name: 'Adquisición Hostil',
          badge: 'OFENSIVA',
          desc: 'Toma una puerta rival por UN turno — vuelve a su dueño al final de la ronda.',
          tooltip: 'Asalta una puerta rival durante un turno para cobrar sus pasajeros; al final de la ronda el contrato vuelve a su aerolínea original.',
          footer: 'OBJETIVO: PIN RIVAL',
          prompt: 'Toca o haz clic en cualquier Pin 3D RIVAL pulsante para tomarlo durante un turno.'
        },
        holding_pattern: {
          name: 'Patrón de Espera',
          badge: 'CONTROL',
          desc: 'Deja en espera sobre la pista a un rival: pierde por completo su próximo turno.',
          tooltip: 'Envía la flota entrante de un rival a un patrón de espera; pierde su próximo turno completo sin embarcar ni robar.',
          footer: 'OBJETIVO: AEROLÍNEA RIVAL',
          prompt: 'Toca o haz clic en una AEROLÍNEA RIVAL para dejarla en patrón de espera.'
        },
        sst_route: {
          name: 'Jet Supersónico',
          badge: 'IMPULSO',
          desc: 'El servicio Mach 2 DUPLICA la producción de toda tu red durante 1 ronda.',
          tooltip: 'Certifica toda tu red de rutas para vuelos supersónicos. Cada puerta que controles duplica su flujo durante una ronda.',
          footer: 'DESPLIEGUE INMEDIATO'
        },
        smear_campaign: {
          name: 'Campaña de Difamación',
          badge: 'SABOTAJE',
          desc: 'El rival pierde el 50% del rendimiento de su mayor cadena de puertas conectadas.',
          tooltip: 'Publica titulares incómodos sobre el récord de un rival: en su próximo embarque, su mayor cadena conectada rinde solo la mitad.',
          footer: 'OBJETIVO: AEROLÍNEA RIVAL',
          prompt: 'Toca o haz clic en una AEROLÍNEA RIVAL para reducir a la mitad el pago de su mayor cadena.'
        },
        emergency_landing: {
          name: 'Aterrizaje de Emergencia',
          badge: 'DISRUPCIÓN',
          desc: 'Obliga a una puerta rival a reubicarse en un nodo vacío (o a una nueva Puerta Z).',
          tooltip: 'Declara un desvío de emergencia sobre una puerta rival, obligándola a trasladarse a un nodo libre del pasillo o desterrándola a una nueva Puerta «Z» en la plataforma.',
          footer: 'OBJETIVO: PIN RIVAL',
          prompt: 'Toca o haz clic en cualquier Pin 3D RIVAL pulsante para forzar su reubicación.'
        },
        code_share: {
          name: 'Acuerdo de Código Compartido',
          badge: 'ALIANZA',
          desc: 'Durante 2 rondas, tú y un rival recibís el 25% de los ingresos de pasajeros del otro.',
          tooltip: 'Firma un tratado bilateral con una aerolínea rival: durante las próximas 2 rondas completas, ambas aerolíneas reciben un dividendo extra del 25% de los pasajeros generados por las puertas de la otra.',
          footer: 'OBJETIVO: AEROLÍNEA RIVAL',
          prompt: 'Toca o haz clic en una AEROLÍNEA RIVAL para firmar un Acuerdo de Código Compartido por 2 rondas.'
        },
        severe_weather: {
          name: 'Clima Severo',
          badge: 'CLIMA',
          desc: 'Apunta a un ramal de pasillo: reduce a la mitad (-50%) sus pasajeros por 1 ronda.',
          tooltip: 'Descarga un frente de tormenta sobre un pasillo específico: todas las puertas de ese ramal generan un 50% menos de pasajeros durante 1 ronda completa.',
          footer: 'OBJETIVO: RAMAL DE PASILLO',
          prompt: 'Toca o haz clic en CUALQUIER Pin de Puerta del pasillo que quieras afectar con Clima Severo (-50% PAX).'
        },
        loyalty_program: {
          name: 'Programa de Lealtad',
          badge: 'MARKETING',
          desc: 'Apunta a una de tus puertas: otorga +50 pasajeros extra en cada puntuación por 3 rondas.',
          tooltip: 'Inaugura un club de viajeros frecuentes en una de tus puertas: durante las próximas 3 rondas, esa puerta otorga una bonificación fija de +50 pasajeros cada vez que se puntúa.',
          footer: 'OBJETIVO: TU PIN',
          prompt: 'Toca o haz clic en uno de TUS Pines 3D para activar el Programa de Lealtad (+50 PAX por 3 rondas).'
        },
        fortress_hub: {
          name: 'Hub Fortaleza',
          badge: 'DEFENSA',
          desc: 'Coloca un escudo de radar sobre una de tus puertas, haciéndola inmune hasta tu próximo turno.',
          tooltip: 'Despliega un domo de radar retro sobre una de tus puertas: queda completamente inmune a Adquisición Hostil, Cambio de Puerta, Mantenimiento y Aterrizaje de Emergencia hasta tu próximo turno.',
          footer: 'OBJETIVO: TU PIN',
          prompt: 'Toca o haz clic en uno de TUS Pines 3D para protegerlo con un Escudo de Radar hasta tu próximo turno.'
        },
        nationalize_industry: {
          name: 'Nacionalizar la Industria',
          badge: '1x DECRETO',
          desc: 'UNA VEZ POR PARTIDA: Cobra al instante el flujo de pasajeros de TODAS las puertas del mapa y purga la carta.',
          tooltip: '¡Decreto federal único! Solo existe 1 copia en todo el mazo. Recibes de inmediato la producción de pasajeros de TODAS las puertas del mapa (propias, rivales y neutrales) y la carta se elimina permanentemente de la partida.',
          footer: '1x GLOBAL • SE PURGA AL USAR'
        }
      },
      'deck.confirmAction': 'CONFIRMAR ACCIÓN',
      'deck.confirmGateSub': 'Reclamar Puerta {id}',
      'deck.confirmCardSub': 'Desplegar {card}',
      'deck.cancelSelection': 'CANCELAR SELECCIÓN',
      'deck.stagedHintGate': 'PREPARADO: Reclamar Puerta {id} ({name}) — Pulsa CONFIRMAR ACCIÓN o CANCELAR.',
      'deck.stagedHintCard': 'PREPARADO: {card} {target} — Pulsa CONFIRMAR ACCIÓN o CANCELAR.',
      'legend.zGate': 'Puerta «Z» de Autobús (Sin Mayoría)',
      'tooltip.zGate': 'PUERTA «Z» DE AUTOBÚS (No cuenta para Mayoría • Traslado en autobús)',
      'tooltip.shielded': 'ESCUDO HUB FORTALEZA ACTIVO (Inmune a cartas rivales)',
      'tooltip.loyalty': 'PROGRAMA DE LEALTAD: +50 PAX ({rounds} rondas rest.)',
      'tooltip.weather': 'CLIMA SEVERO: -50% en este pasillo ({rounds} rondas rest.)',
      worldEvents: {
        clear_skies: {
          title: 'CIELOS DESPEJADOS INAUGURALES',
          shortLabel: 'CIELO DESPEJADO (1.0x)',
          desc: 'Operaciones de vuelo estándar en todas las salas de la terminal.'
        },
        pilot_shortage: {
          title: 'ESCASEZ DE PILOTOS',
          category: 'BOLETÍN LABORAL Y DE TRIPULACIÓN',
          shortLabel: 'ESCASEZ PILOTOS (0.5x)',
          desc: 'Cuellos de botella en los turnos dejan en tierra la mitad de las salidas. La capacidad de pasajeros se reduce a la mitad (0.5x) en la próxima ronda.',
          impactText: 'PRÓXIMA RONDA: Producción de todas las puertas = 50%'
        },
        holiday_rush: {
          title: 'FIEBRE DE VACACIONES',
          category: 'AUGE DE TEMPORADA ALTA',
          shortLabel: 'FIEBRE VACACIONAL (2.0x)',
          desc: '¡Los pasillos rebosan de viajeros! El flujo de pasajeros se DUPLICA (2.0x) en todas las puertas del plano durante la próxima ronda.',
          impactText: 'PRÓXIMA RONDA: Producción de todas las puertas = 200%'
        },
        jet_stream: {
          title: 'VIENTOS DE COLA EN CORRIENTE',
          category: 'DESPACHO METEOROLÓGICO',
          shortLabel: 'VIENTO DE COLA (1.5x)',
          desc: 'Fuertes vientos de cola a gran altitud aceleran las escalas. Todas las puertas generan 1.5x pasajeros en la próxima ronda.',
          impactText: 'PRÓXIMA RONDA: Producción de todas las puertas = 150%'
        },
        worlds_fair: {
          title: 'EXPOSICIÓN FERIA MUNDIAL',
          category: 'TURISMO INTERNACIONAL',
          shortLabel: 'FERIA MUNDIAL (1.25x)',
          desc: '¡Dignatarios globales llegan a la Rotonda Central! Cada aerolínea con un Hub de Rotonda (H1–H4) embarca +120 pasajeros al instante y el flujo sube a 1.25x.',
          impactText: 'INSTANTÁNEO: +120 PAX por Hub propio + 1.25x Próxima Ronda'
        },
        transatlantic_fog: {
          title: 'BANCO DE NIEBLA DEL ATLÁNTICO',
          category: 'AVISO METEOROLÓGICO',
          shortLabel: 'DEMORA POR NIEBLA (0.75x)',
          desc: 'La baja visibilidad reduce las aproximaciones al 75% en la próxima ronda, pero la Torre de Control entrega +1 Carta de Acción a cada aerolínea.',
          impactText: 'PRÓXIMA RONDA: 75% Capacidad • TODOS ROBAN +1 CARTA'
        },
        cab_subsidy: {
          title: 'SUBSIDIO POSTAL DE LA ERA DEL JET',
          category: 'SUBVENCIÓN FEDERAL DE AVIACIÓN',
          shortLabel: 'AUGE CORREO AÉREO (1.2x)',
          desc: '¡La Junta de Aeronáutica Civil otorga subvenciones de correo aéreo! Cada aerolínea embarca +140 pasajeros al instante y disfruta de 1.2x en la próxima ronda.',
          impactText: 'INSTANTÁNEO: +140 PAX a todos • PRÓXIMA RONDA: 120% Flujo'
        }
      },
      anchors: {
        classic_50s: {
          nameplate: 'BIFF CONROY • CORRESPONSAL JEFE DE AVIACIÓN',
          quirkLines: [
            '“BUENAS NOCHES, VIAJEROS DEL JET — CABLE URGENTE DESDE LA ROTONDA:”',
            '“ÚLTIMA HORA EN EL TELETIPO, AMIGOS — SUJETEN BIEN SUS SOMBREROS:”',
            '“EN VIVO DESDE LA TORRE IDLEWILD, UN BOLETÍN ESPECIAL DE LA CADENA:”'
          ]
        },
        retro_robot: {
          nameplate: 'UNIDAD UNIVAC-9 • AUTÓMATA NOTICIOSO DE CINTA MAGNÉTICA',
          quirkLines: [
            '“BZZT-CLIC // ALERTA DE TELEMETRÍA EN TARJETA PERFORADA DETECTADA:”',
            '“TUBOS DE VACÍO AL MÁXIMO BRILLO — CALCULANDO IMPACTO EN LA TERMINAL:”',
            '“CARRETE DE CINTA #409 LISTO — TRANSMITIENDO DIRECTIVA AUTOMÁTICA:”'
          ]
        },
        green_alien: {
          nameplate: 'ZORBLAX DEL SECTOR 7G • OBSERVADOR DE TRÁFICO INTERGALÁCTICO',
          quirkLines: [
            '“SALUDOS, BÍPEDOS TERRESTRES — SUS PRIMITIVAS PISTAS NOS FASCINAN:”',
            '“EL RADAR DEL PLATILLO VOLADOR INTERCEPTA UN FENÓMENO ATMOSFÉRICO:”',
            '“MENSAJE TRANSMITIDO DIRECTAMENTE DESDE EL SALÓN NODRIZA ORBITAL:”'
          ]
        },
        aviator_ace: {
          nameplate: 'CAP. “ACE” MONTGOMERY • PILOTO DE PRUEBAS Y COMENTARISTA',
          quirkLines: [
            '“ABRÓCHENSE LOS CINTURONES, CAPITANES — HAY TURBULENCIA EN EL CABLE:”',
            '“DIRECTO DESDE LA CABINA A MACH 2 — AQUÍ TIENEN EL PARTE METEOROLÓGICO:”',
            '“LA TORRE ACABA DE ENCENDER LA LÁMPARA ALDIS — LEAN ESTE DESPACHO:”'
          ]
        },
        nora_cat: {
          nameplate: 'NORA LA GATA ATIGRADA • PRESENTADORA NOCTURNA DEL TELETIPO',
          quirkLines: [
            '“*SUSPIRO*… ME DESPERTARON DE MI SIESTA EN LA TERMINAL PARA ESTO:”',
            '“MIAU… OTRO RETRASO EN LA PISTA. ESCUCHEN BIEN ESTE BOLETÍN:”',
            '“TOC-TOC… ¿FUNCIONA ESTE MICRÓFONO? BIEN, AQUÍ VA EL CABLE MUNDIAL:”'
          ]
        }
      },
      headlines: [
        'El presidente Gore firma un decreto que permite a drones-pájaro nucleares sembrar bosques en Sudamérica.',
        'La Unión Soviética afirma haber lanzado al primer perro al hiperespacio; el can regresa pidiendo galletas en ruso fluido.',
        'Ama de casa local descubre receta de molde de gelatina en gravedad cero.',
        'Pan Am introduce entrenamiento obligatorio con mochila propulsora para todos los auxiliares de vuelo.',
        'TWA presenta reposapiés con calefacción atómica en Primera Clase; se recomienda usar calcetines con forro de plomo.',
        'La Junta de Aeronáutica Civil aprueba un mínimo de tres martinis para todos los vuelos transatlánticos de turbohélice.',
        'Científicos del MIT advierten que los estampidos supersónicos podrían despertar ritmos disco dormidos del año 1977.',
        'Howard Hughes compra la Luna para usarla como laguna privada de estacionamiento de hidroaviones VIP.',
        'Diseñadores de París estrenan peinados colmena de fibra de vidrio presurizada para cabinas descapotables.',
        'Padre suburbano completa refugio subterráneo en su jardín con bar tiki funcional y carrusel de equipaje en miniatura.',
        'Se actualiza la Convención de Ginebra para prohibir la sobreventa de asientos centrales junto a acordeonistas.',
        'Chrysler anuncia carrito de equipaje impulsado por turbina capaz de romper la barrera del sonido en la Sala B.'
      ]
    }
  };

  let currentLang = 'en';
  try {
    const savedLang = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (savedLang && SUPPORTED_LANGS.includes(savedLang)) {
      currentLang = savedLang;
    }
  } catch (_e) {
    currentLang = 'en';
  }

  function t(key, vars = {}) {
    const dict = LOCALES[currentLang] || LOCALES.en;
    let str = dict[key] !== undefined ? dict[key] : LOCALES.en[key] !== undefined ? LOCALES.en[key] : key;
    if (typeof str !== 'string') return String(key);
    Object.keys(vars).forEach((k) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(vars[k]));
    });
    return str;
  }

  function getCardLocale(typeId) {
    const dict = LOCALES[currentLang] || LOCALES.en;
    const fallback = LOCALES.en.cards[typeId] || {};
    return (dict.cards && dict.cards[typeId]) || fallback;
  }

  function getWorldEventLocale(eventId) {
    const dict = LOCALES[currentLang] || LOCALES.en;
    const fallback = (LOCALES.en.worldEvents && LOCALES.en.worldEvents[eventId]) || {};
    return (dict.worldEvents && dict.worldEvents[eventId]) || fallback;
  }

  function getAnchorLocale(anchorId) {
    const dict = LOCALES[currentLang] || LOCALES.en;
    const fallback = (LOCALES.en.anchors && LOCALES.en.anchors[anchorId]) || {};
    return (dict.anchors && dict.anchors[anchorId]) || fallback;
  }

  function getLocalizedHeadlines() {
    const dict = LOCALES[currentLang] || LOCALES.en;
    return dict.headlines && dict.headlines.length ? dict.headlines : LOCALES.en.headlines;
  }

  // ============================================================================
  // 1. EXPANDED 33-ICON LIBRARY (INLINE SVGs + CANVAS VECTOR DRAWERS)
  // ============================================================================

  const AIRLINE_LOGOS = [
    {
      id: 'wing',
      name: 'Swept Wing',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M4 26 L36 12 L25 32 L18 24 L4 26 Z" fill="currentColor"/></svg>`
    },
    {
      id: 'globe',
      name: 'Pan Globe',
      svg: `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" stroke="currentColor" stroke-width="2.8"/><ellipse cx="20" cy="20" rx="7" ry="14" stroke="currentColor" stroke-width="2"/><line x1="6" y1="20" x2="34" y2="20" stroke="currentColor" stroke-width="2"/></svg>`
    },
    {
      id: 'compass',
      name: 'Sky Compass',
      svg: `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="12" stroke="currentColor" stroke-width="2"/><polygon points="20,3 24,16 37,20 24,24 20,37 16,24 3,20 16,16" fill="currentColor"/></svg>`
    },
    {
      id: 'concorde',
      name: 'Supersonic',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 3 L24 22 L35 31 L23 29 L20 37 L17 29 L5 31 L16 22 Z" fill="currentColor"/></svg>`
    },
    {
      id: 'starburst',
      name: 'Atomic Star',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 2 L23 15 L36 10 L26 20 L36 30 L23 25 L20 38 L17 25 L4 30 L14 20 L4 10 L17 15 Z" fill="currentColor"/></svg>`
    },
    {
      id: 'bird',
      name: 'Falcon Crest',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 7 L25 17 L37 14 L27 23 L32 34 L20 27 L8 34 L13 23 L3 14 L15 17 Z" fill="currentColor"/></svg>`
    },
    {
      id: 'propeller',
      name: 'Twin Prop',
      svg: `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="4" fill="currentColor"/><path d="M20 16 C15 4 25 4 20 16 M20 24 C15 36 25 36 20 24 M16 20 C4 15 4 25 16 20 M24 20 C36 15 36 25 24 20" stroke="currentColor" stroke-width="3.2" fill="currentColor"/></svg>`
    },
    {
      id: 'tower',
      name: 'Control Tower',
      svg: `<svg viewBox="0 0 40 40" fill="none"><polygon points="15,35 25,35 23,18 17,18" fill="currentColor"/><polygon points="10,18 30,18 33,10 7,10" stroke="currentColor" stroke-width="2.5" fill="none"/><line x1="20" y1="3" x2="20" y2="10" stroke="currentColor" stroke-width="2.5"/></svg>`
    },
    {
      id: 'radar',
      name: 'Radar Dish',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M10 14 A14 14 0 0 0 28 32" stroke="currentColor" stroke-width="3" fill="none"/><line x1="19" y1="23" x2="31" y2="11" stroke="currentColor" stroke-width="2.5"/><circle cx="31" cy="11" r="3" fill="currentColor"/><path d="M12 35 L26 35 L20 25 Z" fill="currentColor"/></svg>`
    },
    {
      id: 'chute',
      name: 'Parachute',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M7 18 A13 13 0 0 1 33 18 Z" fill="currentColor"/><line x1="8" y1="18" x2="20" y2="33" stroke="currentColor" stroke-width="2"/><line x1="32" y1="18" x2="20" y2="33" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="34" r="3" fill="currentColor"/></svg>`
    },
    {
      id: 'badge',
      name: 'Pilot Wings',
      svg: `<svg viewBox="0 0 40 40" fill="none"><polygon points="20,12 27,20 20,28 13,20" fill="currentColor"/><path d="M3 16 L14 18 L11 24 L5 22 Z M37 16 L26 18 L29 24 L35 22 Z" fill="currentColor"/></svg>`
    },
    {
      id: 'crown',
      name: 'Imperial Crown',
      svg: `<svg viewBox="0 0 40 40" fill="none"><polygon points="6,29 34,29 36,13 27,21 20,10 13,21 4,13" fill="currentColor"/></svg>`
    },
    {
      id: 'hotdog',
      name: 'Sky Hot Dog',
      svg: `<svg viewBox="0 0 40 40" fill="none"><rect x="4" y="16" width="32" height="8" rx="4" fill="currentColor"/><path d="M8 14 C14 10 26 10 32 14 M8 26 C14 30 26 30 32 26" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M8 20 Q12 17 16 20 T24 20 T32 20" stroke="#FFFFFF" stroke-width="2" fill="none"/></svg>`
    },
    {
      id: 'atom',
      name: 'Nuclear Atom',
      svg: `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="3.5" fill="currentColor"/><ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(30 20 20)" stroke="currentColor" stroke-width="2.2"/><ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(-30 20 20)" stroke="currentColor" stroke-width="2.2"/><ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(90 20 20)" stroke="currentColor" stroke-width="2.2"/></svg>`
    },
    {
      id: 'saucer',
      name: 'Alien Saucer',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M12 19 A8 7 0 0 1 28 19" stroke="currentColor" stroke-width="2.5" fill="none"/><ellipse cx="20" cy="21" rx="16" ry="5" fill="currentColor"/><line x1="13" y1="26" x2="9" y2="33" stroke="currentColor" stroke-width="2.2"/><line x1="27" y1="26" x2="31" y2="33" stroke="currentColor" stroke-width="2.2"/><circle cx="20" cy="15" r="2.2" fill="currentColor"/></svg>`
    },
    {
      id: 'goofybird',
      name: 'Goofy Dodo',
      svg: `<svg viewBox="0 0 40 40" fill="none"><circle cx="16" cy="18" r="8" fill="currentColor"/><path d="M23 15 L36 18 L23 23 Z" fill="currentColor"/><circle cx="15" cy="16" r="2.5" fill="#FFFFFF"/><path d="M12 25 L10 34 M18 25 L20 34" stroke="currentColor" stroke-width="2.5"/></svg>`
    },
    {
      id: 'martini',
      name: 'Jet Martini',
      svg: `<svg viewBox="0 0 40 40" fill="none"><polygon points="7,9 33,9 20,23" fill="currentColor"/><line x1="20" y1="22" x2="20" y2="33" stroke="currentColor" stroke-width="3"/><line x1="12" y1="33" x2="28" y2="33" stroke="currentColor" stroke-width="3"/><line x1="25" y1="5" x2="18" y2="16" stroke="currentColor" stroke-width="2"/></svg>`
    },
    {
      id: 'rocket',
      name: 'Moon Rocket',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 4 C27 12 27 24 24 30 L16 30 C13 24 13 12 20 4 Z" fill="currentColor"/><polygon points="15,24 8,32 15,30" fill="currentColor"/><polygon points="25,24 32,32 25,30" fill="currentColor"/><circle cx="20" cy="16" r="3" fill="#FFFFFF"/></svg>`
    },
    {
      id: 'tv',
      name: 'Retro Tele',
      svg: `<svg viewBox="0 0 40 40" fill="none"><rect x="7" y="13" width="26" height="20" rx="3" stroke="currentColor" stroke-width="2.8" fill="none"/><rect x="11" y="17" width="14" height="12" rx="2" fill="currentColor"/><line x1="14" y1="5" x2="20" y2="13" stroke="currentColor" stroke-width="2.4"/><line x1="26" y1="5" x2="20" y2="13" stroke="currentColor" stroke-width="2.4"/></svg>`
    },
    {
      id: 'flamingo',
      name: 'Flamingo',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M24 8 C28 8 28 13 24 15 C20 17 22 23 22 23" stroke="currentColor" stroke-width="3.2" fill="none" stroke-linecap="round"/><ellipse cx="17" cy="24" rx="8" ry="5" fill="currentColor"/><line x1="17" y1="28" x2="17" y2="37" stroke="currentColor" stroke-width="2.4"/><path d="M17 31 L22 33 L15 35" stroke="currentColor" stroke-width="2" fill="none"/></svg>`
    },
    {
      id: 'coffee',
      name: 'Java Carafe',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M9 14 H27 L25 32 H11 Z" fill="currentColor"/><path d="M27 17 H32 V25 H26" stroke="currentColor" stroke-width="2.8" fill="none"/><path d="M15 7 Q17 10 15 12 M21 7 Q23 10 21 12" stroke="currentColor" stroke-width="2.2" fill="none"/></svg>`
    },
    {
      id: 'duck',
      name: 'Rubber Duck',
      svg: `<svg viewBox="0 0 40 40" fill="none"><circle cx="15" cy="14" r="6" fill="currentColor"/><path d="M9 14 L4 16 L9 18 Z" fill="currentColor"/><path d="M12 20 C10 29 28 32 32 22 C33 19 26 20 20 20 Z" fill="currentColor"/></svg>`
    },
    {
      id: 'shades',
      name: 'Cat-Eye Shades',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M3 15 L18 19 L15 26 C9 26 5 22 3 15 Z M37 15 L22 19 L25 26 C31 26 35 22 37 15 Z" fill="currentColor"/><line x1="17" y1="19" x2="23" y2="19" stroke="currentColor" stroke-width="2.5"/></svg>`
    },
    {
      id: 'cactus',
      name: 'Desert Cactus',
      svg: `<svg viewBox="0 0 40 40" fill="none"><line x1="20" y1="7" x2="20" y2="35" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M11 16 V22 H20 M29 13 V20 H20" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      id: 'zeppelin',
      name: 'Zeppelin',
      svg: `<svg viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="18" rx="15" ry="8" fill="currentColor"/><path d="M33 18h5l-4 4z" fill="currentColor"/><rect x="16" y="26" width="8" height="4" rx="1" fill="currentColor"/><path d="M19 24v2M21 24v2" stroke="currentColor" stroke-width="1.6"/></svg>`
    },
    {
      id: 'delta',
      name: 'Delta Wings',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 4 34 34H6z" fill="currentColor"/><path d="M20 14v20" stroke="#FFFFFF" stroke-width="2.6"/></svg>`
    },
    {
      id: 'orbital',
      name: 'Atomic Orbitals',
      svg: `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="4" fill="currentColor"/><ellipse cx="20" cy="20" rx="16" ry="6.5" stroke="currentColor" stroke-width="2.6"/><ellipse cx="20" cy="20" rx="16" ry="6.5" stroke="currentColor" stroke-width="2.6" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="16" ry="6.5" stroke="currentColor" stroke-width="2.6" transform="rotate(120 20 20)"/></svg>`
    },
    {
      id: 'blip',
      name: 'Radar Blip',
      svg: `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="15" stroke="currentColor" stroke-width="2.2"/><circle cx="20" cy="20" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M20 20 32 11" stroke="currentColor" stroke-width="2.6"/><circle cx="27" cy="14" r="3.4" fill="currentColor"/></svg>`
    },
    {
      id: 'olive',
      name: 'Olive On A Pick',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M8 32 32 8" stroke="currentColor" stroke-width="2.4"/><ellipse cx="17" cy="23" rx="6" ry="7" fill="currentColor" transform="rotate(-45 17 23)"/><circle cx="17" cy="23" r="2.4" fill="#FFFFFF"/></svg>`
    },
    {
      id: 'luggage',
      name: 'Luggage Cart',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M6 8h5l4 20h17" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="14" y="13" width="9" height="8" fill="currentColor"/><rect x="24" y="16" width="7" height="5" fill="currentColor"/><circle cx="18" cy="33" r="2.6" fill="currentColor"/><circle cx="30" cy="33" r="2.6" fill="currentColor"/></svg>`
    },
    {
      id: 'briefcase',
      name: 'Tax Haven Case',
      svg: `<svg viewBox="0 0 40 40" fill="none"><rect x="6" y="14" width="28" height="18" rx="2" fill="currentColor"/><path d="M15 14v-4h10v4" stroke="currentColor" stroke-width="2.8"/><path d="M6 22h28" stroke="#FFFFFF" stroke-width="2.2"/><circle cx="20" cy="22" r="2.4" fill="#FFFFFF"/></svg>`
    },
    {
      id: 'seagull',
      name: 'Captain Seagull',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M4 26c6-1 9-4 11-8 2 4 5 7 11 8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="26" cy="20" r="6" fill="currentColor"/><path d="M32 21l5 2-5 2z" fill="currentColor"/><path d="M19 15h14v3H19z" fill="currentColor"/><path d="M22 15c0-3 2-5 5-5s5 2 5 5" fill="currentColor"/></svg>`
    },
    {
      id: 'cat',
      name: 'Aviator Cat',
      svg: `<svg viewBox="0 0 40 40" fill="none"><path d="M9 19 L8 6 L16 13 Q20 12 24 13 L32 6 L31 19 C33 24 30 32 20 32 C10 32 7 24 9 19 Z" fill="currentColor"/><rect x="11" y="13" width="7.5" height="5" rx="2" fill="none" stroke="#FFFFFF" stroke-width="1.8"/><rect x="21.5" y="13" width="7.5" height="5" rx="2" fill="none" stroke="#FFFFFF" stroke-width="1.8"/><line x1="18.5" y1="15.5" x2="21.5" y2="15.5" stroke="#FFFFFF" stroke-width="1.8"/><ellipse cx="15" cy="22" rx="2.1" ry="1.4" fill="#FFFFFF"/><ellipse cx="25" cy="22" rx="2.1" ry="1.4" fill="#FFFFFF"/><polygon points="18.5,25 21.5,25 20,27" fill="#FFFFFF"/><path d="M4 23 L11 24.5 M4 27 L11 26.5 M36 23 L29 24.5 M36 27 L29 26.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
    }
  ];

  // ============================================================================
  // 1b. RIVAL SYNDICATE AIRLINE NAME & LIVERY ROSTER
  // ============================================================================

  /**
   * Curated pool of satirical mid-century / Jet Age airline names plus a
   * combinatorial fallback builder combining quirky locations, atomic-era
   * buzzwords, and retro carrier branding.
   */
  const AI_CURATED_NAMES = [
    { name: 'ATOMIC SKYWAYS', preferredLogo: 'atom' },
    { name: 'COPENHAGEN AIR-KLIPPER', preferredLogo: 'wing' },
    { name: 'SUBORBITAL PAN-POODLE', preferredLogo: 'saucer' },
    { name: 'SPRUCE-GOOSE EXPRESS', preferredLogo: 'goofybird' },
    { name: 'BAVARIAN HOVER-LANES', preferredLogo: 'propeller' },
    { name: 'QUANTUM AEROFLOT', preferredLogo: 'orbital' },
    { name: 'TRANS-ANTARCTIC ZEPPELIN CO.', preferredLogo: 'zeppelin' },
    { name: 'MONTE CARLO TURBO-CAT', preferredLogo: 'cat' },
    { name: 'STRATO-MARTINI CHARTERS', preferredLogo: 'martini' },
    { name: 'REYKJAVIK ROCKET-LINES', preferredLogo: 'rocket' },
    { name: 'ACAPULCO DIRIGIBLE SYNDICATE', preferredLogo: 'flamingo' },
    { name: 'ISOTOPE INTERCONTINENTAL', preferredLogo: 'starburst' }
  ];

  const AI_NAME_LOCATIONS = [
    'TRANS-POLAR',
    'SUB-ORBITAL',
    'HELSINKI',
    'PATAGONIAN',
    'SIBERIAN',
    'TIKI-ATOLL',
    'ALPINE',
    'COSMIC',
    'BERMUDA',
    'LUXEMBOURG'
  ];

  const AI_NAME_BUZZWORDS = [
    'GYRO',
    'COBALT',
    'MONORAIL',
    'STRATO',
    'TURBO-PROP',
    'VACUUM-TUBE',
    'SUPERSONIC',
    'RADIUM',
    'JET-STREAM',
    'AERO'
  ];

  const AI_NAME_BRANDS = [
    'CLIPPER',
    'SKY-BUS',
    'HOVER-LINE',
    'ZEPPELIN CO.',
    'AIR-FLOTILLA',
    'EXPRESS',
    'STAR-LINER',
    'SYNDICATE'
  ];

  // Livery names mirror the setup swatches so a reassigned colour still reads
  // correctly in the lobby roster and the standings panel.
  const LIVERY_NAMES = {
    '#D1192A': 'TWA Crimson',
    '#1E4DB7': 'Pan Am Azure',
    '#111111': 'Jet Black',
    '#0B6E6E': 'Seafoam Teal',
    '#C2410C': 'Burnt Tangerine',
    '#8A8B2C': 'Olive Gold',
    '#8C9196': 'Concorde Silver',
    '#6B2D5B': 'Plum Lounge',
    '#C08A2E': 'Desert Ochre',
    '#E3B505': 'Canary Yellow',
    '#2E7D32': 'Continental Green'
  };

  function liveryNameFor(hex, fallback) {
    return LIVERY_NAMES[String(hex || '').toUpperCase()] || fallback || hex;
  }

  const AI_COLOR_PALETTE = [
    '#0B6E6E',
    '#1E4DB7',
    '#111111',
    '#C2410C',
    '#6B2D5B',
    '#2E7D32',
    '#8A8B2C',
    '#C08A2E',
    '#8C9196',
    '#E3B505',
    '#D1192A'
  ];

  /**
   * Builds a varied roster of rival syndicate airlines with non-colliding
   * satirical names, fleet colors, and corporate emblems.
   */
  function generateAIAirlineRoster(botCount, humanColor, humanLogo, humanName) {
    const usedNames = new Set([String(humanName || '').trim().toUpperCase()]);
    const usedLogos = new Set([humanLogo]);
    const candidateColors = AI_COLOR_PALETTE.filter(
      (c) => c.toLowerCase() !== String(humanColor || '').toLowerCase()
    );

    // Mix curated satirical names with combinatorial titles
    const pool = [...AI_CURATED_NAMES];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const roster = [];
    for (let i = 0; i < botCount; i++) {
      let chosenName = '';
      let preferredLogo = null;

      // 78% chance to pull from the curated satirical list, 22% combinatorial title
      if (pool.length > 0 && Math.random() < 0.78) {
        const pick = pool.find((entry) => !usedNames.has(entry.name));
        if (pick) {
          chosenName = pick.name;
          preferredLogo = pick.preferredLogo;
        }
      }

      if (!chosenName) {
        for (let attempt = 0; attempt < 20; attempt++) {
          const loc = AI_NAME_LOCATIONS[Math.floor(Math.random() * AI_NAME_LOCATIONS.length)];
          const buzz = AI_NAME_BUZZWORDS[Math.floor(Math.random() * AI_NAME_BUZZWORDS.length)];
          const brand = AI_NAME_BRANDS[Math.floor(Math.random() * AI_NAME_BRANDS.length)];
          const candidate = `${loc} ${buzz} ${brand}`.slice(0, 28);
          if (!usedNames.has(candidate)) {
            chosenName = candidate;
            break;
          }
        }
      }
      if (!chosenName) chosenName = `ATOMIC SKYWAYS ${i + 1}`;
      usedNames.add(chosenName);

      const color = candidateColors[i % candidateColors.length] || '#0B6E6E';
      let logoId = preferredLogo;
      if (!logoId || usedLogos.has(logoId)) {
        const unusedLogos = AIRLINE_LOGOS.filter((l) => !usedLogos.has(l.id));
        logoId =
          unusedLogos.length > 0
            ? unusedLogos[Math.floor(Math.random() * unusedLogos.length)].id
            : AIRLINE_LOGOS[(i + 3) % AIRLINE_LOGOS.length].id;
      }
      usedLogos.add(logoId);

      roster.push({ name: chosenName, color, logo: logoId });
    }
    return roster;
  }

  // ============================================================================
  // 1c. DYNAMIC UI THEME ENGINE (PLAYER COLOR HARMONIZATION & LUMINANCE)
  // ============================================================================

  function hexToRgb(hex) {
    const clean = String(hex || '#D1192A').replace('#', '').trim();
    const full =
      clean.length === 3
        ? clean
            .split('')
            .map((ch) => ch + ch)
            .join('')
        : clean.padEnd(6, '0').slice(0, 6);
    const num = parseInt(full, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  function rgbToHex(r, g, b) {
    const clamp = (n) => Math.max(0, Math.min(255, Math.round(n)));
    return (
      '#' +
      [clamp(r), clamp(g), clamp(b)]
        .map((n) => n.toString(16).padStart(2, '0'))
        .join('')
        .toUpperCase()
    );
  }

  function mixHex(hexA, hexB, weightB) {
    const a = hexToRgb(hexA);
    const b = hexToRgb(hexB);
    const w = Math.max(0, Math.min(1, weightB));
    return rgbToHex(a.r + (b.r - a.r) * w, a.g + (b.g - a.g) * w, a.b + (b.b - a.b) * w);
  }

  /**
   * Computes WCAG relative luminance [0..1] for automatic contrast adjustments.
   * Light colors (e.g., Canary Yellow #E3B505, Concorde Silver #8C9196,
   * Desert Ochre #C08A2E) return higher luminance so UI text/icons flip to #1A1A1A.
   */
  function computeRelativeLuminance(hex) {
    const { r, g, b } = hexToRgb(hex);
    const toLinear = (c) => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
  }

  function isLightColor(hex) {
    const { r, g, b } = hexToRgb(hex);
    const perceived = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    const relLum = computeRelativeLuminance(hex);
    return relLum > 0.24 || perceived > 0.52;
  }

  function getContrastTextForColor(hex) {
    return isLightColor(hex) ? '#1A1A1A' : '#FFFFFF';
  }

  /**
   * Derives a complete harmonized UI palette from the player's chosen airline
   * hex color, ensuring clean contrast on both cream surfaces (#FDFBF7) and
   * filled primary buttons/badges.
   */
  function computeThemePalette(primaryHex) {
    const primary = String(primaryHex || '#D1192A').toUpperCase();
    const { r, g, b } = hexToRgb(primary);
    const light = isLightColor(primary);

    const primaryLight = mixHex(primary, '#FDFBF7', 0.86);
    const primaryDark = light ? mixHex(primary, '#1A1A1A', 0.38) : mixHex(primary, '#111111', 0.26);
    const accent = light ? '#1A1A1A' : mixHex(primary, '#E3B505', 0.35);
    const contrastText = light ? '#1A1A1A' : '#FFFFFF';
    const glow = `rgba(${r}, ${g}, ${b}, ${light ? 0.34 : 0.24})`;
    // Ensure text sitting on #FDFBF7 / #F4EFEA cream surfaces always has strong contrast
    const readableText = light ? mixHex(primary, '#1A1A1A', 0.45) : primary;

    return {
      primary,
      primaryLight,
      primaryDark,
      accent,
      contrastText,
      glow,
      readableText,
      isLight: light
    };
  }

  /**
   * Dynamically injects CSS custom properties into :root and updates body[data-theme]
   * to reflect the active human player's chosen airline color.
   */
  function applyPlayerTheme(primaryHex, colorName = '') {
    const palette = computeThemePalette(primaryHex);
    state.theme = palette;

    const root = document.documentElement;
    root.style.setProperty('--brand-primary', palette.primary);
    root.style.setProperty('--brand-primary-light', palette.primaryLight);
    root.style.setProperty('--brand-primary-dark', palette.primaryDark);
    root.style.setProperty('--brand-accent', palette.accent);
    root.style.setProperty('--brand-contrast-text', palette.contrastText);
    root.style.setProperty('--brand-glow', palette.glow);
    root.style.setProperty('--brand-readable-text', palette.readableText);

    if (document.body) {
      const slug =
        (colorName || palette.primary)
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '') || 'custom';
      document.body.setAttribute('data-theme', slug);
      document.body.setAttribute('data-theme-contrast', palette.isLight ? 'dark-ink' : 'light-ink');
    }
    return palette;
  }

  /**
   * Reverts the UI theme to a neutral vintage terminal palette (slate charcoal)
   * during rival syndicate turns in Solo mode.
   */
  function applyNeutralAITerminalTheme() {
    return applyPlayerTheme('#4A525A', 'neutral-terminal');
  }

  // ============================================================================
  // 2. RETRO-FUTURISTIC ALT-HISTORY NEWS TICKER HEADLINES
  // ============================================================================

  const BASE_NEWS_HEADLINES = LOCALES.en.headlines;

  // ============================================================================
  // 3. WEB AUDIO RETRO PA CHIME & SFX ENGINE
  // ============================================================================

  // Thin facade over the custom synthesizer engine in audio.js (window.AirAudio).
  // Every sound in the game is synthesized at runtime — no external audio assets.
  const AUDIO = window.AirAudio || null;

  const sfx = {
    get enabled() {
      return AUDIO ? AUDIO.sfxEnabled : false;
    },
    set enabled(v) {
      if (AUDIO) AUDIO.setSfxEnabled(v);
    },
    unlock() {
      if (AUDIO) AUDIO.unlock();
    },
    updateTurnProgress(round, maxRounds) {
      if (AUDIO && typeof AUDIO.setTurnProgress === 'function') {
        AUDIO.setTurnProgress(round, maxRounds);
      }
    },
    playPinClaim() {
      if (AUDIO) AUDIO.stamp();
    },
    playUiClick() {
      if (AUDIO) AUDIO.flapClick();
    },
    playCascade(n) {
      if (AUDIO) AUDIO.flapCascade(n);
    },
    playTurnChime() {
      if (AUDIO) AUDIO.cabinChime();
    },
    playCardDeploy() {
      if (AUDIO) AUDIO.cardDeploy();
    },
    playShred() {
      if (AUDIO) AUDIO.shred();
    },
    playTeletype() {
      if (AUDIO) AUDIO.teletype();
    },
    playRadarSweep() {
      if (AUDIO) AUDIO.radarSweep();
    },
    playBulletin() {
      if (AUDIO) AUDIO.bulletinSting();
    },
    playPAChime() {
      if (AUDIO) AUDIO.paChime();
    },
    playError() {
      if (AUDIO) AUDIO.error();
    },
    playVictory() {
      if (AUDIO) AUDIO.victory();
    }
  };

  // ============================================================================
  // 4. ACTION CARDS & WORLD DECK DEFINITIONS
  // ============================================================================

  // Custom inline-SVG coupon iconography (no external assets, 32x32 viewBox)
  const CARD_ICONS = {
    gate_change: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 11h17l-4-4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square"/><path d="M28 21H11l4 4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square"/><circle cx="26" cy="11" r="2.6" fill="currentColor"/><circle cx="6" cy="21" r="2.6" fill="currentColor"/></svg>`,
    runway_maint: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 29 13 3h6l4 26z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M16 8v4M16 15v4M16 22v4" stroke="currentColor" stroke-width="2.2"/><path d="M3 6l5 5M8 6l-5 5" stroke="currentColor" stroke-width="2.4"/><path d="M24 21l5 5M29 21l-5 5" stroke="currentColor" stroke-width="2.4"/></svg>`,
    lounge_upgrade: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 7h18L16 19z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M16 19v8M11 27h10" stroke="currentColor" stroke-width="2.2"/><circle cx="21" cy="11" r="2.4" fill="currentColor"/></svg>`,
    charter_buyout: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 9h12v18H5z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M19 15h9l-3-3M28 15l-3 3" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M8 13h6M8 17h6" stroke="currentColor" stroke-width="1.8"/></svg>`,
    baggage_strike: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 12h22v16H5z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 12V7h8v5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M5 19h22" stroke="currentColor" stroke-width="2.2"/><path d="M8 4 26 29" stroke="currentColor" stroke-width="2.6"/></svg>`,
    direct_flight: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2c3 4 4.5 8.5 4.5 13.5L26 21v3l-6.5-2.5L18 28l2 2v1h-8v-1l2-2-1.5-6.5L6 24v-3l5.5-5.5C11.5 10.5 13 6 16 2z" fill="currentColor"/></svg>`,
    terminal_expansion: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 27h26" stroke="currentColor" stroke-width="2.4"/><path d="M6 27V14h9v13" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M19 27v-8h7v8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-dasharray="3 2.5"/><path d="M22.5 4v9M18 8.5h9" stroke="currentColor" stroke-width="2.4"/></svg>`,
    faa_audit: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 3h13l6 6v20H7z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M19 3v7h7" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="15" cy="17" r="5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M19 21l5 5" stroke="currentColor" stroke-width="2.6"/></svg>`,
    hostile_takeover: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3l11 5v8c0 7-4.6 11.4-11 13-6.4-1.6-11-6-11-13V8z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M11 16l4 4 7-8" fill="none" stroke="currentColor" stroke-width="2.6"/></svg>`,
    holding_pattern: `<svg viewBox="0 0 32 32" aria-hidden="true"><ellipse cx="16" cy="16" rx="12" ry="7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-dasharray="4 3"/><path d="M22 9l5-3-1.5 5z" fill="currentColor"/><circle cx="16" cy="16" r="2.4" fill="currentColor"/></svg>`,
    sst_route: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M2 24 29 4l-6 23-6-6z" fill="currentColor"/><path d="M3 10h8M3 15h5" stroke="currentColor" stroke-width="2.2"/></svg>`,
    smear_campaign: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 12h6l10-6v20l-10-6H6z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M26 10c2.4 3.4 2.4 8.6 0 12" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M9 20v6h4v-6" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
    emergency_landing: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 26h26" stroke="currentColor" stroke-width="2.4"/><path d="M6 19 25 11l3 3-11 6-6 2-5-3z" fill="currentColor"/><path d="M14 5v6M10 8l4 3 4-3" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>`,
    code_share: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="11" cy="16" r="7" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="21" cy="16" r="7" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M16 11v10" stroke="currentColor" stroke-width="2"/></svg>`,
    severe_weather: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 19a5 5 0 0 1 1-9.9A6.5 6.5 0 0 1 22.5 11a4.5 4.5 0 0 1 .5 8.9z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M16 20l-3 5h4l-2 5" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>`,
    loyalty_program: `<svg viewBox="0 0 32 32" aria-hidden="true"><polygon points="16,3 19.8,11 28.5,12.2 22,18.4 23.6,27 16,22.8 8.4,27 10,18.4 3.5,12.2 12.2,11" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="16" cy="16" r="3" fill="currentColor"/></svg>`,
    fortress_hub: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3 27 8v8c0 7.4-4.7 11.8-11 13.5C9.7 27.8 5 23.4 5 16V8z" fill="none" stroke="currentColor" stroke-width="2.3"/><circle cx="16" cy="16" r="5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 2"/><path d="M16 16l4.5-3.5" stroke="currentColor" stroke-width="2.2"/></svg>`,
    nationalize_industry: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 27h24M6 23h20M8 23V13M13 23V13M19 23V13M24 23V13M5 13h22L16 5z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="16" cy="9.5" r="1.6" fill="currentColor"/></svg>`
  };

  // Unique two-tone geometric vector art printed on each boarding pass.
  // Uses var(--brand-primary) and var(--bg-offwhite) to harmonize with player livery.
  const CARD_ART = {
    gate_change: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M0 44h104v14H0z" fill="#111111"/><path d="M8 44 30 14h18L26 44z" fill="var(--brand-primary)"/><path d="M54 44 76 14h18L72 44z" fill="#111111"/><circle cx="34" cy="12" r="6" fill="#111111"/><circle cx="80" cy="12" r="6" fill="var(--brand-primary)"/><path d="M40 12h32" stroke="#111111" stroke-width="3" stroke-dasharray="5 4"/></svg>`,
    runway_maint: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M34 58 46 4h12l12 54z" fill="#111111"/><path d="M50 10h4v8h-4zM50 24h4v8h-4zM50 38h4v8h-4z" fill="var(--bg-offwhite)"/><path d="M0 48h26v10H0zM78 48h26v10H78z" fill="var(--brand-primary)"/><path d="M4 42h18M82 42h18" stroke="#111111" stroke-width="4"/></svg>`,
    lounge_upgrade: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M0 46h104v12H0z" fill="#111111"/><path d="M26 10h40L46 34z" fill="var(--brand-primary)"/><path d="M46 34v12M34 46h24" stroke="#111111" stroke-width="4"/><circle cx="74" cy="16" r="4" fill="#111111"/><path d="M86 6v16M78 14h16" stroke="var(--brand-primary)" stroke-width="3"/><circle cx="20" cy="20" r="3" fill="#111111"/></svg>`,
    charter_buyout: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M6 12h40v40H6z" fill="#111111"/><path d="M14 22h24v4H14zM14 32h24v4H14z" fill="var(--bg-offwhite)"/><path d="M58 20h32l-10-9M90 20l-10 9" fill="none" stroke="var(--brand-primary)" stroke-width="5"/><path d="M58 42h32" stroke="#111111" stroke-width="5"/><circle cx="96" cy="42" r="5" fill="var(--brand-primary)"/></svg>`,
    baggage_strike: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M18 18h32v34H18z" fill="#111111"/><path d="M26 18v-8h16v8" fill="none" stroke="#111111" stroke-width="4"/><path d="M18 34h32" stroke="var(--bg-offwhite)" stroke-width="4"/><path d="M60 10 94 50" stroke="var(--brand-primary)" stroke-width="7"/><path d="M62 46h30" stroke="#111111" stroke-width="4"/></svg>`,
    direct_flight: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M0 50h104v8H0z" fill="#111111"/><path d="M52 4c6 8 9 17 9 27l18 11v6l-21-7-4 11 6 5H46l6-5-4-11-21 7v-6l18-11c0-10 3-19 7-27z" fill="var(--brand-primary)"/><path d="M8 14h18M8 24h12" stroke="#111111" stroke-width="3"/></svg>`,
    terminal_expansion: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M0 50h104v8H0z" fill="#111111"/><path d="M10 50V24h26v26z" fill="#111111"/><path d="M46 50V32h22v18z" fill="var(--brand-primary)"/><path d="M76 50V36h18v14z" fill="none" stroke="#111111" stroke-width="3" stroke-dasharray="4 3"/><path d="M85 8v18M76 17h18" stroke="var(--brand-primary)" stroke-width="4"/></svg>`,
    faa_audit: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M14 4h40l14 14v40H14z" fill="#111111"/><path d="M54 4v14h14" fill="var(--bg-offwhite)"/><path d="M24 26h28v4H24zM24 36h28v4H24z" fill="var(--bg-offwhite)"/><circle cx="74" cy="30" r="14" fill="none" stroke="var(--brand-primary)" stroke-width="5"/><path d="M84 40l14 14" stroke="var(--brand-primary)" stroke-width="6"/></svg>`,
    hostile_takeover: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M52 2 84 12v16c0 14-13 24-32 28C33 52 20 42 20 28V12z" fill="#111111"/><path d="M38 28l10 10 18-20" fill="none" stroke="var(--brand-primary)" stroke-width="6"/><path d="M4 50h12M88 50h12" stroke="#111111" stroke-width="4"/></svg>`,
    holding_pattern: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><ellipse cx="52" cy="30" rx="40" ry="20" fill="none" stroke="#111111" stroke-width="4" stroke-dasharray="8 6"/><path d="M74 12 92 4l-5 17z" fill="var(--brand-primary)"/><circle cx="52" cy="30" r="7" fill="#111111"/><path d="M52 30 74 14" stroke="var(--brand-primary)" stroke-width="3"/></svg>`,
    sst_route: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M4 52 96 4 80 54 60 38z" fill="var(--brand-primary)"/><path d="M60 38 44 48l4-14z" fill="#111111"/><path d="M4 14h26M4 24h18M4 34h10" stroke="#111111" stroke-width="4"/></svg>`,
    smear_campaign: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M14 22h16L54 6v46L30 36H14z" fill="#111111"/><path d="M66 14c7 9 7 21 0 30" fill="none" stroke="var(--brand-primary)" stroke-width="5"/><path d="M80 6c12 14 12 32 0 46" fill="none" stroke="var(--brand-primary)" stroke-width="5"/><path d="M20 36v14h10V36" fill="none" stroke="#111111" stroke-width="4"/></svg>`,
    emergency_landing: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M0 48h104v10H0z" fill="#111111"/><path d="M18 34 78 14l8 8-34 16-22 6z" fill="var(--brand-primary)"/><path d="M32 6v14M24 13l8 7 8-7" fill="none" stroke="#111111" stroke-width="4"/></svg>`,
    code_share: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><circle cx="38" cy="29" r="18" fill="none" stroke="#111111" stroke-width="5"/><circle cx="66" cy="29" r="18" fill="none" stroke="var(--brand-primary)" stroke-width="5"/><path d="M52 14v30" stroke="#111111" stroke-width="3" stroke-dasharray="4 3"/></svg>`,
    severe_weather: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M24 34c-8 0-14-6-14-13 0-6 5-11 11-12 4-5 12-7 18-3 5-4 14-3 18 3 7 1 12 6 12 12 0 7-6 13-14 13z" fill="#111111"/><path d="M48 34 38 46h12l-6 10M68 34 60 44h10l-5 10" fill="none" stroke="var(--brand-primary)" stroke-width="5"/></svg>`,
    loyalty_program: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M0 48h104v10H0z" fill="#111111"/><polygon points="52,4 59,19 76,21 63,33 67,48 52,40 37,48 41,33 28,21 45,19" fill="var(--brand-primary)" stroke="#111111" stroke-width="3"/></svg>`,
    fortress_hub: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M52 4 82 14v14c0 14-13 23-30 27-17-4-30-13-30-27V14z" fill="#111111"/><circle cx="52" cy="28" r="13" fill="none" stroke="var(--brand-primary)" stroke-width="4" stroke-dasharray="5 3"/><path d="M52 28 63 19" stroke="var(--brand-primary)" stroke-width="4"/></svg>`,
    nationalize_industry: `<svg viewBox="0 0 104 58" aria-hidden="true"><rect width="104" height="58" fill="var(--bg-offwhite)"/><path d="M0 48h104v10H0z" fill="#111111"/><polygon points="52,4 88,20 16,20" fill="var(--brand-primary)" stroke="#111111" stroke-width="3"/><rect x="24" y="22" width="8" height="24" fill="#111111"/><rect x="40" y="22" width="8" height="24" fill="#111111"/><rect x="56" y="22" width="8" height="24" fill="#111111"/><rect x="72" y="22" width="8" height="24" fill="#111111"/><circle cx="52" cy="13" r="3.5" fill="var(--bg-offwhite)"/></svg>`
  };

  // 17 distinct Flight Coupons. `copies` seeds the physical draw pile.
  const ACTION_CARD_DEFS = [
    {
      typeId: 'gate_change',
      name: 'Gate Change',
      badge: 'OFFENSE',
      targetMode: 'opponent_gate',
      desc: 'Permanently convert one opponent-controlled gate to your airline.',
      tooltip:
        'Reassigns a rival carrier’s gate lease to your airline for good. Click any rival 3D pin on the blueprint; the pin repaints in your livery and its passenger output transfers to you.',
      footer: 'TARGET: RIVAL PIN',
      copies: 4
    },
    {
      typeId: 'runway_maint',
      name: 'Runway Maintenance',
      badge: 'SABOTAGE',
      targetMode: 'any_gate',
      desc: 'Close any gate for repaving: no passengers for 2 full rounds.',
      tooltip:
        'Files an emergency resurfacing order on ANY gate on the blueprint — rival, neutral or your own. The gate generates zero passengers for the next 2 full rounds and is marked with a hazard badge.',
      footer: 'TARGET: ANY GATE',
      copies: 3
    },
    {
      typeId: 'lounge_upgrade',
      name: 'Lounge Upgrade',
      badge: 'UPGRADE',
      targetMode: 'own_gate',
      desc: 'Permanently DOUBLE one of your gates’ base passenger output.',
      tooltip:
        'Installs a Starlight Club lounge above one of your gates. Base output is permanently doubled and a cocktail-glass starburst marker is planted beside the pin so the 2x gate is unmistakable on the map.',
      footer: 'TARGET: YOUR PIN',
      copies: 4
    },
    {
      typeId: 'charter_buyout',
      name: 'Charter Buyout',
      badge: 'CORPORATE',
      targetMode: 'opponent_player',
      desc: 'Buy out a rival’s dispatch office: steal 1 random coupon from their hand.',
      tooltip:
        'Acquires a rival carrier’s charter paperwork outright. Pick a rival in the standings panel (or click one of their pins) and one coupon is taken at random from their hand straight into yours — respecting your 3-card limit.',
      footer: 'TARGET: RIVAL CARRIER',
      copies: 3
    },
    {
      typeId: 'baggage_strike',
      name: 'Baggage Strike',
      badge: 'SABOTAGE',
      targetMode: 'opponent_player',
      desc: 'Siphon 25% of one rival carrier’s accumulated passengers.',
      tooltip:
        'Calls out the handlers at a rival’s concourse. Pick a rival in the standings panel (or click one of their pins): they lose 25% of their banked passengers, up to 400, and you board every siphoned traveller.',
      footer: 'TARGET: RIVAL CARRIER',
      copies: 3
    },
    {
      typeId: 'direct_flight',
      name: 'Direct Flight Charter',
      badge: 'INSTANT',
      targetMode: 'instant',
      desc: 'Fly a nonstop charter for a lump sum of +150 passengers.',
      tooltip:
        'Dispatches an unscheduled nonstop Super-Constellation. Boards a flat +150 passengers immediately, with no target required.',
      footer: 'INSTANT DEPLOY',
      copies: 3
    },
    {
      typeId: 'terminal_expansion',
      name: 'Terminal Expansion',
      badge: 'CONSTRUCTION',
      targetMode: 'instant',
      desc: 'Spawn a new gate connected to your largest owned cluster (or a claimed Z-Gate if full).',
      tooltip:
        'Playable at any time! Spawns a new gate directly connected to your largest owned gate cluster — or dynamically commissions a claimed Apron "Z" Bus Gate if all conventional concourse slots are occupied.',
      footer: 'INSTANT DEPLOY',
      copies: 3
    },
    {
      typeId: 'faa_audit',
      name: 'FAA Audit',
      badge: 'CONTROL',
      targetMode: 'instant',
      desc: 'Every opposing carrier must discard their oldest coupon.',
      tooltip:
        'Summons federal inspectors to every rival dispatch office. Each opposing carrier discards the oldest coupon in their hand; your own hand is untouched.',
      footer: 'INSTANT DEPLOY',
      copies: 2
    },
    {
      typeId: 'hostile_takeover',
      name: 'Hostile Takeover',
      badge: 'OFFENSE',
      targetMode: 'opponent_gate',
      desc: 'Seize a rival gate for ONE turn — it reverts at the end of the round.',
      tooltip:
        'Mounts a short-lived boardroom raid on a rival gate. You board its passengers for one turn, then the lease reverts to its original carrier at the end of the round. Cannot be deployed during the final round of the match.',
      footer: 'TARGET: RIVAL PIN',
      copies: 3
    },
    {
      typeId: 'holding_pattern',
      name: 'Holding Pattern',
      badge: 'CONTROL',
      targetMode: 'opponent_player',
      desc: 'Stack a rival over the field: they skip their entire next turn.',
      tooltip:
        'Routes a rival carrier’s inbound fleet into an endless holding stack. The targeted carrier forfeits their next turn completely — no boarding, no draw, no action.',
      footer: 'TARGET: RIVAL CARRIER',
      copies: 2
    },
    {
      typeId: 'sst_route',
      name: 'Supersonic Jet Route',
      badge: 'BOOM',
      targetMode: 'instant',
      desc: 'Mach 2 service DOUBLES your entire network output for 1 round.',
      tooltip:
        'Certifies your whole route network for supersonic service. Every gate you control doubles its passenger output for one full round — and it stacks multiplicatively with Route Synergy and lounges.',
      footer: 'INSTANT DEPLOY',
      copies: 3
    },
    {
      typeId: 'smear_campaign',
      name: 'Smear Campaign',
      badge: 'SABOTAGE',
      targetMode: 'opponent_player',
      desc: 'Rival loses 50% of the payout from their largest connected gate chain.',
      tooltip:
        'Plants unflattering stories about a rival’s safety record. On their next boarding, their LARGEST contiguous chain of connected gates pays out only half — the bigger their empire, the harder it bites.',
      footer: 'TARGET: RIVAL CARRIER',
      copies: 2
    },
    {
      typeId: 'emergency_landing',
      name: 'Emergency Landing',
      badge: 'DISRUPTION',
      targetMode: 'opponent_gate',
      desc: 'Force a rival gate to relocate to a vacant corridor node (or banish it to a new Z-Gate).',
      tooltip:
        'Declares an emergency diversion on an opponent’s gate, forcing their lease to relocate to an unoccupied corridor node — or banishing it to a freshly spawned Apron "Z" Bus Gate if no vacant corridor node exists.',
      footer: 'TARGET: RIVAL PIN',
      copies: 3
    },
    {
      typeId: 'code_share',
      name: 'Code-Share Agreement',
      badge: 'ALLIANCE',
      targetMode: 'opponent_player',
      desc: 'For 2 full rounds, you and a targeted rival each receive 25% of each other’s gate revenue.',
      tooltip:
        'Signs a bilateral interline treaty with a rival airline. For the next 2 full rounds, both your airline and the targeted airline receive 25% of all passenger revenue generated by each other’s gates.',
      footer: 'TARGET: RIVAL CARRIER',
      copies: 3
    },
    {
      typeId: 'severe_weather',
      name: 'Severe Weather',
      badge: 'WEATHER',
      targetMode: 'concourse_branch',
      desc: 'Target a concourse branch: halves (-50%) passenger output across that entire branch for 1 round.',
      tooltip:
        'Drops a localized squall line over a specific concourse corridor branch. Halves (-50%) passenger generation across all gates attached to that corridor branch for 1 full round.',
      footer: 'TARGET: CONCOURSE PIN',
      copies: 3
    },
    {
      typeId: 'loyalty_program',
      name: 'Loyalty Program',
      badge: 'MARKETING',
      targetMode: 'own_gate',
      desc: 'Target one of your gates: grants a flat +50 passenger bonus every scoring phase for 3 rounds.',
      tooltip:
        'Launches a frequent-flyer mileage club at one of your owned gates. For the next 3 rounds, that specific gate grants an additional flat bonus of +50 passengers every time scoring resolves.',
      footer: 'TARGET: YOUR PIN',
      copies: 3
    },
    {
      typeId: 'fortress_hub',
      name: 'Fortress Hub',
      badge: 'DEFENSE',
      targetMode: 'own_gate',
      desc: 'Place a retro radar shield over one of your gates, making it immune to rival cards until your next turn.',
      tooltip:
        'Places a retro radar shield over one of your owned gates, making it completely immune to opponent cards (Hostile Takeover, Gate Change, Runway Maintenance, Emergency Landing) until your next turn begins.',
      footer: 'TARGET: YOUR PIN',
      copies: 3
    },
    {
      typeId: 'nationalize_industry',
      name: 'Nationalize the Industry',
      badge: '1x DECREE',
      targetMode: 'instant',
      singleton: true,
      desc: 'ONCE PER GAME: Immediately collect the passenger output of EVERY gate on the map — then purge forever.',
      tooltip:
        'Executive federal requisition! Only 1 copy exists in the entire master deck. Immediately boards the current passenger output value from EVERY single gate on the blueprint (yours, rival, and neutral) as a one-time lump sum, then permanently purges this card from the match.',
      footer: '1x GLOBAL • PURGED ON PLAY',
      copies: 1
    }
  ];

  const WORLD_DECK_DEFS = [
    {
      id: 'pilot_shortage',
      title: 'PILOT SHORTAGE',
      category: 'LABOR & CREW BULLETIN',
      shortLabel: 'PILOT SHORTAGE (0.5x)',
      multiplier: 0.5,
      desc: 'Crew scheduling bottlenecks ground half of scheduled departures. Passenger carrying capacity is halved (0.5x) for all carriers next round.',
      impactText: 'NEXT ROUND: All Gate Passenger Output = 50%',
      iconSvg: `<svg viewBox="0 0 48 48" width="40" height="40"><path d="M8 28 L40 28 L34 16 L14 16 Z" fill="#D1192A"/><circle cx="24" cy="22" r="4" fill="#FFFFFF"/><path d="M6 32 L42 32" stroke="#111111" stroke-width="4"/></svg>`,
      onResolve: () => 'All carriers operate at 50% passenger capacity next round.'
    },
    {
      id: 'holiday_rush',
      title: 'HOLIDAY RUSH',
      category: 'PEAK SEASON BOOM',
      shortLabel: 'HOLIDAY RUSH (2.0x)',
      multiplier: 2.0,
      desc: 'Concourses overflow with jet-set vacationers! Passenger output is DOUBLED (2.0x) across every gate on the blueprint for the next round.',
      impactText: 'NEXT ROUND: All Gate Passenger Output = 200%',
      iconSvg: `<svg viewBox="0 0 48 48" width="40" height="40"><polygon points="24,4 29,17 43,17 32,26 36,40 24,31 12,40 16,26 5,17 19,17" fill="#D1192A" stroke="#111111" stroke-width="2"/></svg>`,
      onResolve: () => 'Passenger demand doubled (2.0x) across the terminal!'
    },
    {
      id: 'jet_stream',
      title: 'JET STREAM TAILWINDS',
      category: 'METEOROLOGICAL DISPATCH',
      shortLabel: 'TAILWINDS (1.5x)',
      multiplier: 1.5,
      desc: 'High-altitude tailwinds accelerate turnaround times across all concourses. All gates generate 1.5x passengers next round.',
      impactText: 'NEXT ROUND: All Gate Passenger Output = 150%',
      iconSvg: `<svg viewBox="0 0 48 48" width="40" height="40"><path d="M6 18 Q24 10 42 18 M10 26 Q26 18 40 26 M6 34 Q22 28 34 34" stroke="#D1192A" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
      onResolve: () => 'High-speed tailwinds grant 150% passenger throughput next round.'
    },
    {
      id: 'worlds_fair',
      title: "WORLD'S FAIR EXPO",
      category: 'INTERNATIONAL TOURISM',
      shortLabel: "WORLD'S FAIR (1.25x)",
      multiplier: 1.25,
      desc: 'Global dignitaries arrive at the Central Rotunda! Every airline controlling a Rotunda Hub (H1–H4) immediately boards +120 bonus passengers, and global output rises to 1.25x.',
      impactText: 'INSTANT: +120 PAX per Hub Gate owned + 1.25x Next Round',
      iconSvg: `<svg viewBox="0 0 48 48" width="40" height="40"><circle cx="24" cy="24" r="16" stroke="#111111" stroke-width="3" fill="none"/><ellipse cx="24" cy="24" rx="8" ry="16" stroke="#D1192A" stroke-width="2.5" fill="none"/><line x1="8" y1="24" x2="40" y2="24" stroke="#111111" stroke-width="2.5"/></svg>`,
      onResolve: (st) => {
        let count = 0;
        st.gates.forEach((g) => {
          if (g.tier === 'hub' && g.owner !== null) {
            const p = st.players[g.owner];
            p.passengers += 120;
            spawnCanvasFloatText(g.x, g.y - 34, '+120 EXPO', p.color);
            count++;
          }
        });
        return count > 0
          ? 'Rotunda Hub bonus (+120 PAX/hub) awarded!'
          : 'No Rotunda Hubs were claimed yet for the instant bonus.';
      }
    },
    {
      id: 'transatlantic_fog',
      title: 'ATLANTIC FOG BANK',
      category: 'WEATHER ADVISORY',
      shortLabel: 'FOG DELAY (0.75x)',
      multiplier: 0.75,
      desc: 'Low visibility slows runway approaches to 75% capacity next round, but Control Tower issues +1 tactical Action Card to every carrier.',
      impactText: 'NEXT ROUND: 75% PAX Capacity • ALL PLAYERS DRAW +1 CARD',
      iconSvg: `<svg viewBox="0 0 48 48" width="40" height="40"><path d="M10 20 H38 M6 27 H42 M12 34 H36" stroke="#111111" stroke-width="4" stroke-linecap="round"/></svg>`,
      onResolve: (st) => {
        st.players.forEach((p) => drawCardForPlayer(p));
        return 'All carriers drew +1 Action Coupon to navigate the fog.';
      }
    },
    {
      id: 'cab_subsidy',
      title: 'JET AGE POSTAL SUBSIDY',
      category: 'FEDERAL AVIATION GRANT',
      shortLabel: 'AIRMAIL BOOM (1.2x)',
      multiplier: 1.2,
      desc: 'The Civil Aeronautics Board awards airmail expansion grants! Every airline immediately boards +140 passengers and enjoys 1.2x output next round.',
      impactText: 'INSTANT: +140 PAX to All Airlines • NEXT ROUND: 120% Output',
      iconSvg: `<svg viewBox="0 0 48 48" width="40" height="40"><rect x="8" y="13" width="32" height="22" rx="2" fill="#D1192A" stroke="#111111" stroke-width="2.5"/><path d="M8 15 L24 26 L40 15" stroke="#FFFFFF" stroke-width="2.5" fill="none"/></svg>`,
      onResolve: (st) => {
        st.players.forEach((p) => {
          p.passengers += 140;
        });
        return 'Every competing carrier received +140 airmail passengers!';
      }
    }
  ];

  // ============================================================================
  // 5. GAME STATE, CAMERA & PASSENGER SIMULATION STATE
  // ============================================================================

  const VIRTUAL_W = 1100;
  const VIRTUAL_H = 620;

  const state = {
    status: 'MENU', // 'MENU' | 'PLAYING' | 'PASS_INTERSTITIAL' | 'WORLD_MODAL' | 'GAME_OVER'
    config: {
      mode: 'solo', // 'solo' | 'coop' | 'online'
      onlineRole: 'host', // 'host' | 'join'
      roomCode: 'TWA-404',
      gatePass: '',
      humanName: 'TRANS WORLD AIR',
      humanColor: '#D1192A',
      humanLogo: 'wing',
      botCount: 3,
      difficulty: 2,
      maxRounds: 20,
      coopCount: 2,
      editingSlotIndex: 0,
      coopPlayers: [
        { name: 'TRANS WORLD AIR', color: '#D1192A', colorName: 'TWA Crimson', logo: 'wing' },
        { name: 'PAN AM CLIPPER', color: '#1E4DB7', colorName: 'Pan Am Azure', logo: 'globe' },
        { name: 'ATOMIC SKYWAYS', color: '#0B6E6E', colorName: 'Seafoam Teal', logo: 'cat' },
        { name: 'SUNBURST EXPRESS', color: '#E3B505', colorName: 'Canary Yellow', logo: 'concorde' }
      ]
    },
    localPlayerIndex: 0,
    flightLogHistory: [],
    round: 1,
    currentPlayerIndex: 0,
    majorityThreshold: 9,
    players: [],
    gates: [],
    connections: [],
    wingPolygons: [], // Concourse architectural footprints
    rotundaCenter: { x: 550, y: 310, radius: 112 },
    mapArchetype: { id: 'hub_spokes', label: 'CENTRAL HUB & SPOKES' },
    gateSerial: 0, // Monotonic counter for expansion gates
    zGateSerial: 0, // Monotonic counter for remote Apron "Z" Bus Gates
    concourseWeather: {}, // { [concourseName]: expiresAfterRound }
    codeShareLinks: [], // [{ playerA, playerB, expiresAfterRound }]
    nationalizePlayed: false, // Global once-per-game singleton flag for "Nationalize the Industry"
    // Physical Flight Coupon deck: draw pile + discard pile (reshuffled when empty)
    actionDeck: [],
    actionDiscard: [],
    worldDeck: [],
    activeWorldEvent: {
      id: 'clear_skies',
      title: 'INAUGURAL CLEAR SKIES',
      shortLabel: 'CLEAR SKIES (1.0x)',
      multiplier: 1.0,
      desc: 'Standard flight operations across all concourses.'
    },
    // MUTUALLY EXCLUSIVE ACTION ECONOMY + UNCOMMITTED STAGING:
    // each turn resolves exactly one of 'gate' | 'card' | 'pass' once confirmed.
    turnState: {
      actionTaken: false,
      actionType: null, // 'gate' | 'card' | 'pass'
      selectedCardIndex: null,
      stagedAction: null, // { type: 'gate', gateId } | { type: 'card', handIndex, targetGateId, targetPlayerIndex }
      aiBusy: false,
      networkPending: false
    },
    // Interactive Camera (Pan & Zoom)
    camera: {
      x: 0,
      y: 0,
      zoom: 1.0,
      minZoom: 0.55,
      maxZoom: 2.4,
      isDragging: false,
      dragStartX: 0,
      dragStartY: 0,
      camStartX: 0,
      camStartY: 0,
      movedDistance: 0
    },
    hoveredGateId: null,
    floatingTexts: [],
    // 1950s UPA-style animated passenger agents & micro-interactions
    passengerAgents: [],
    // Apron shuttle buses driving along dashed service roads to Remote "Z" Gates
    apronBuses: [],
    // Liveried twin-engine departure aircraft animations
    departureFlights: [],
    headlines: [...BASE_NEWS_HEADLINES],
    // Dynamic player livery theme palette
    theme: computeThemePalette('#D1192A'),
    // News anchor rotation index & guaranteed debut flag for Nora the Tabby Cat
    anchorRotationIndex: 0,
    noraDebuted: false
  };

  // ============================================================================
  // 6. DOM CACHE
  // ============================================================================

  const dom = {
    gameContainer: document.getElementById('game-container'),

    // Title sequence & presentation
    titleSequence: document.getElementById('title-sequence'),
    titleStartBtn: document.getElementById('title-start-btn'),
    titleSettingsBtn: document.getElementById('title-settings-btn'),
    titleHowtoBtn: document.getElementById('title-howto-btn'),
    flapCurtain: document.getElementById('flap-curtain'),

    settingsModal: document.getElementById('settings-modal'),
    settingsBtn: document.getElementById('settings-btn'),
    closeSettingsBtn: document.getElementById('close-settings-btn'),
    closeSettingsBottomBtn: document.getElementById('close-settings-bottom-btn'),
    setMusicToggle: document.getElementById('set-music-toggle'),
    setSfxToggle: document.getElementById('set-sfx-toggle'),
    musicVolume: document.getElementById('music-volume'),
    sfxVolume: document.getElementById('sfx-volume'),
    musicToggleBtn: document.getElementById('music-toggle-btn'),

    howtoModal: document.getElementById('howto-modal'),
    closeHowtoBtn: document.getElementById('close-howto-btn'),
    closeHowtoBottomBtn: document.getElementById('close-howto-bottom-btn'),

    anchorStage: document.getElementById('anchor-stage'),
    anchorSvgSlot: document.getElementById('anchor-svg-slot'),
    anchorPlate: document.getElementById('anchor-plate'),
    broadcastSpeechBubble: document.getElementById('broadcast-speech-bubble'),
    anchorQuirkBanner: document.getElementById('anchor-quirk-banner'),
    anchorMouth: document.getElementById('anchor-mouth'),

    mainMenu: document.getElementById('main-menu'),
    setupForm: document.getElementById('setup-form'),
    gameModeControl: document.getElementById('game-mode-control'),
    registrationHeadingText: document.getElementById('registration-heading-text'),
    coopSlotTabsWrapper: document.getElementById('coop-slot-tabs-wrapper'),
    coopSlotTabs: document.getElementById('coop-slot-tabs'),
    editingSlotIndicator: document.getElementById('editing-slot-indicator'),
    airlineNameLabel: document.getElementById('airline-name-label'),
    airlineNameInput: document.getElementById('airline-name'),
    colorPalette: document.getElementById('color-palette'),
    selectedColorLabel: document.getElementById('selected-color-label'),
    selectedLogoLabel: document.getElementById('selected-logo-label'),
    logoGrid: document.getElementById('logo-grid'),
    soloSetupControls: document.getElementById('solo-setup-controls'),
    coopSetupControls: document.getElementById('coop-setup-controls'),
    coopCountControl: document.getElementById('coop-count-control'),
    coopRosterList: document.getElementById('coop-roster-list'),
    onlineSetupControls: document.getElementById('online-setup-controls'),
    onlineRoleHostBtn: document.getElementById('online-role-host-btn'),
    onlineRoleJoinBtn: document.getElementById('online-role-join-btn'),
    onlineHostPanel: document.getElementById('online-host-panel'),
    onlineJoinPanel: document.getElementById('online-join-panel'),
    onlineRoomCodeDisplay: document.getElementById('online-room-code-display'),
    onlineCopyCodeBtn: document.getElementById('online-copy-code-btn'),
    onlineRegenCodeBtn: document.getElementById('online-regen-code-btn'),
    onlineHostPassword: document.getElementById('online-host-password'),
    onlineHostStatusBar: document.getElementById('online-host-status-bar'),
    onlineHostStatusText: document.getElementById('online-host-status-text'),
    onlinePlayerCountBadge: document.getElementById('online-player-count-badge'),
    onlineLobbyRoster: document.getElementById('online-lobby-roster'),
    onlineJoinCode: document.getElementById('online-join-code'),
    onlineJoinPassword: document.getElementById('online-join-password'),
    onlineConnectBtn: document.getElementById('online-connect-btn'),
    onlineConnectBtnText: document.getElementById('online-connect-btn-text'),
    onlineJoinStatusBar: document.getElementById('online-join-status-bar'),
    onlineJoinStatusText: document.getElementById('online-join-status-text'),
    onlineGuestCountBadge: document.getElementById('online-guest-count-badge'),
    onlineGuestRoster: document.getElementById('online-guest-roster'),
    onlineHostDetail: document.getElementById('online-host-detail'),
    onlineJoinDetail: document.getElementById('online-join-detail'),
    onlineInviteLink: document.getElementById('online-invite-link'),
    onlineCopyLinkBtn: document.getElementById('online-copy-link-btn'),
    onlineTestLinkBtn: document.getElementById('online-test-link-btn'),
    onlineDiagList: document.getElementById('online-diag-list'),
    onlineDiagSummary: document.getElementById('online-diag-summary'),
    onlineCustomSignal: document.getElementById('online-custom-signal'),
    onlineCustomTurn: document.getElementById('online-custom-turn'),
    onlineTurnApi: document.getElementById('online-turn-api'),
    onlineSaveNetBtn: document.getElementById('online-save-net-btn'),
    turnLimitGroup: document.getElementById('turn-limit-group'),
    setupDirectivesBox: document.getElementById('setup-directives-box'),
    startGameBtn: document.getElementById('start-game-btn'),
    startGameBtnText: document.getElementById('start-game-btn-text'),
    botCountControl: document.getElementById('bot-count-control'),
    botDifficultyInput: document.getElementById('bot-difficulty'),
    difficultyBadge: document.getElementById('difficulty-badge'),
    difficultyDesc: document.getElementById('difficulty-desc'),
    turnLimitControl: document.getElementById('turn-limit-control'),
    openManualFromMenu: document.getElementById('open-manual-from-menu'),

    // HUD
    roundDisplay: document.getElementById('round-display'),
    majorityDisplay: document.getElementById('majority-display'),
    activeWorldName: document.getElementById('active-world-name'),
    turnOrderStrip: document.getElementById('turn-order-strip'),
    regenMapBtn: document.getElementById('regen-map-btn'),
    sfxToggleBtn: document.getElementById('sfx-toggle-btn'),
    rulesBtn: document.getElementById('rules-btn'),
    newGameBtn: document.getElementById('new-game-btn'),

    // Sidebar
    scoreboardList: document.getElementById('scoreboard-list'),
    worldDeckRemaining: document.getElementById('world-deck-remaining'),
    sidebarWorldTitle: document.getElementById('sidebar-world-title'),
    sidebarWorldDesc: document.getElementById('sidebar-world-desc'),
    flightLog: document.getElementById('flight-log'),

    // Canvas & Camera Controls
    canvasWrapper: document.getElementById('canvas-wrapper'),
    boardCanvas: document.getElementById('board-canvas'),
    boardBanner: document.getElementById('board-banner'),
    boardPromptText: document.getElementById('board-prompt-text'),
    opponentTargetBar: document.getElementById('opponent-target-bar'),
    cancelTargetBtn: document.getElementById('cancel-target-btn'),
    gateTooltip: document.getElementById('gate-tooltip'),
    zoomInBtn: document.getElementById('zoom-in-btn'),
    zoomOutBtn: document.getElementById('zoom-out-btn'),
    zoomResetBtn: document.getElementById('zoom-reset-btn'),

    mapArchetypeDisplay: document.getElementById('map-archetype-display'),

    // Bottom Deck
    econGate: document.getElementById('econ-gate'),
    econCard: document.getElementById('econ-card'),
    turnPhaseHint: document.getElementById('turn-phase-hint'),
    handCount: document.getElementById('hand-count'),
    playerHand: document.getElementById('player-hand'),
    deckRemaining: document.getElementById('deck-remaining'),
    discardCount: document.getElementById('discard-count'),
    confirmActionBtn: document.getElementById('confirm-action-btn'),
    confirmActionMain: document.getElementById('confirm-action-main'),
    confirmActionSub: document.getElementById('confirm-action-sub'),
    cancelStageBtn: document.getElementById('cancel-stage-btn'),
    mobileConfirmActionBtn: document.getElementById('mobile-confirm-action-btn'),
    endTurnBtn: document.getElementById('end-turn-btn'),
    endTurnMain: document.getElementById('end-turn-main'),
    endTurnSub: document.getElementById('end-turn-sub'),
    toastStack: document.getElementById('toast-stack'),

    // News Ticker
    tickerTrack: document.getElementById('ticker-track'),

    // Pass-and-Play Privacy Interstitial Modal
    passInterstitialModal: document.getElementById('pass-interstitial-modal'),
    interstitialRoundTag: document.getElementById('interstitial-round-tag'),
    interstitialEmblemSlot: document.getElementById('interstitial-emblem-slot'),
    interstitialBoardingTitle: document.getElementById('interstitial-boarding-title'),
    interstitialReadyBtn: document.getElementById('interstitial-ready-btn'),
    interstitialReadyBtnText: document.getElementById('interstitial-ready-btn-text'),

    // Modals
    worldCardModal: document.getElementById('world-card-modal'),
    worldModalRound: document.getElementById('world-modal-round'),
    worldModalIcon: document.getElementById('world-modal-icon'),
    worldModalCategory: document.getElementById('world-modal-category'),
    worldModalTitle: document.getElementById('world-modal-title'),
    worldModalDesc: document.getElementById('world-modal-desc'),
    worldModalImpact: document.getElementById('world-modal-impact'),
    ackWorldCardBtn: document.getElementById('ack-world-card-btn'),

    rulesModal: document.getElementById('rules-modal'),
    closeRulesBtn: document.getElementById('close-rules-btn'),
    closeRulesBottomBtn: document.getElementById('close-rules-bottom-btn'),

    gameOverModal: document.getElementById('game-over-modal'),
    gameoverLogoSlot: document.getElementById('gameover-logo-slot'),
    gameoverReasonBadge: document.getElementById('gameover-reason-badge'),
    gameoverTitle: document.getElementById('gameover-title'),
    gameoverSubtitle: document.getElementById('gameover-subtitle'),
    finalStandingsTable: document.getElementById('final-standings-table'),
    rematchBtn: document.getElementById('rematch-btn'),
    gameoverMenuBtn: document.getElementById('gameover-menu-btn')
  };

  const ctx = dom.boardCanvas.getContext('2d');

  // ============================================================================
  // 7. TERMINAL ARCHITECTURAL & PLANAR GRAPH ENGINE
  // ============================================================================

  const MAP_ARCHETYPES = [
    {
      id: 'hub_spokes',
      label: 'CENTRAL HUB & SPOKES',
      blurb: 'Four rotunda hubs feeding three radial concourse wings.'
    },
    {
      id: 'dual_concourse',
      label: 'DUAL CONCOURSE Y-SHAPE',
      blurb: 'A single stem forking into twin parallel concourses.'
    },
    {
      id: 'pier_ring',
      label: 'PIER RING / SATELLITE',
      blurb: 'A satellite ring of piers orbiting the central rotunda.'
    }
  ];

  const TIER_PAX = { hub: 180, main: 120, regional: 80 };

  function makeGate(id, name, concourse, tier, x, y) {
    return {
      id,
      name,
      concourse,
      tier,
      basePax: TIER_PAX[tier] || 95,
      x,
      y,
      owner: null,
      outputMult: 1, // Doubled permanently by each Lounge Upgrade
      loungeLevel: 0,
      closedUntilRound: 0, // Runway Maintenance closure (passenger output = 0)
      // Hostile Takeover bookkeeping (lease reverts at the end of the round)
      temporaryUntilRound: 0,
      temporaryPreviousOwner: null,
      // Loyalty Program (+50 flat passengers per scoring for 3 rounds)
      loyaltyUntilRound: 0,
      // Fortress Hub radar shield (immune to opponent cards until owner's next turn)
      shieldOwner: null,
      // Satellite annex & Remote "Z" Bus Gates board passengers but never count toward majority
      excludeFromMajority: false,
      isZGate: false,
      serviceRoadAnchorId: null,
      pulseAnim: 0,
      hoverScale: 1.0
    };
  }

  // Rotate / scale / center a locally-authored layout into the visible blueprint frame.
  function fitLayoutToBlueprint(gates, rotunda, rotation) {
    const cosR = Math.cos(rotation);
    const sinR = Math.sin(rotation);
    const pts = gates.map((g) => ({
      g,
      x: g.x * cosR - g.y * sinR,
      y: g.x * sinR + g.y * cosR
    }));

    const minX = Math.min(...pts.map((p) => p.x));
    const maxX = Math.max(...pts.map((p) => p.x));
    const minY = Math.min(...pts.map((p) => p.y));
    const maxY = Math.max(...pts.map((p) => p.y));

    // Reserve an outer apron perimeter around the main concourse so Remote "Z" Gates
    // and their dashed service roads always have generous, unobstructed tarmac clearance.
    const SAFE_X0 = 152;
    const SAFE_X1 = VIRTUAL_W - 152;
    const SAFE_Y0 = 136;
    const SAFE_Y1 = VIRTUAL_H - 108;

    let sx = (SAFE_X1 - SAFE_X0) / Math.max(1, maxX - minX);
    let sy = (SAFE_Y1 - SAFE_Y0) / Math.max(1, maxY - minY);
    // Clamp anisotropy so concourses never look smeared
    const ratioCap = 1.35;
    if (sx > sy * ratioCap) sx = sy * ratioCap;
    if (sy > sx * ratioCap) sy = sx * ratioCap;

    const offX = SAFE_X0 + ((SAFE_X1 - SAFE_X0) - (maxX - minX) * sx) / 2 - minX * sx;
    const offY = SAFE_Y0 + ((SAFE_Y1 - SAFE_Y0) - (maxY - minY) * sy) / 2 - minY * sy;

    pts.forEach((p) => {
      p.g.x = Math.round(p.x * sx + offX);
      p.g.y = Math.round(p.y * sy + offY);
    });

    const rx = rotunda.x * cosR - rotunda.y * sinR;
    const ry = rotunda.x * sinR + rotunda.y * cosR;
    return {
      x: Math.round(rx * sx + offX),
      y: Math.round(ry * sy + offY),
      radius: Math.round(rotunda.radius * Math.min(sx, sy))
    };
  }

  // ---- Archetype 1: Central Hub & Spokes -------------------------------------
  function buildHubSpokes() {
    const gates = [];
    const seedEdges = [];
    const hubAngle0 = Math.random() * Math.PI * 2;

    for (let i = 0; i < 4; i++) {
      const a = hubAngle0 + i * (Math.PI / 2) + (Math.random() - 0.5) * 0.3;
      gates.push(
        makeGate(
          `H${i + 1}`,
          `Rotunda Hub ${i + 1}`,
          'Central Rotunda',
          'hub',
          Math.cos(a) * 108,
          Math.sin(a) * 64
        )
      );
    }
    for (let i = 0; i < 4; i++) seedEdges.push([`H${i + 1}`, `H${((i + 1) % 4) + 1}`]);

    const wings = [
      { prefix: 'A', concourse: 'Concourse Alpha' },
      { prefix: 'B', concourse: 'Concourse Bravo' },
      { prefix: 'C', concourse: 'Concourse Charlie' }
    ];
    const wingStart = Math.random() * Math.PI * 2;
    const wingPolygons = [];

    wings.forEach((w, wIdx) => {
      const ang = wingStart + wIdx * ((Math.PI * 2) / 3) + (Math.random() - 0.5) * 0.34;
      const perp = ang + Math.PI / 2;
      const steps = [190, 268, 346, 432];
      const lateral = [-54, 54, Math.random() > 0.5 ? -38 : 38, 0];
      const wingGates = [];

      for (let j = 0; j < 4; j++) {
        const r = steps[j] + (Math.random() - 0.5) * 28;
        const lat = lateral[j] + (Math.random() - 0.5) * 30;
        const lx = (Math.cos(ang) * r + Math.cos(perp) * lat) * 1.28;
        const ly = (Math.sin(ang) * r + Math.sin(perp) * lat) * 0.74;
        const isPier = j === 3;
        const g = makeGate(
          `${w.prefix}${j + 1}`,
          isPier ? `Pier ${w.prefix}${j + 1}` : `Gate ${w.prefix}${j + 1}`,
          w.concourse,
          isPier ? 'regional' : 'main',
          lx,
          ly
        );
        gates.push(g);
        wingGates.push(g);
        if (j > 0) seedEdges.push([`${w.prefix}${j}`, `${w.prefix}${j + 1}`]);
      }
      seedEdges.push([`H${(wIdx % 4) + 1}`, `${w.prefix}1`]);
      wingPolygons.push({ label: w.concourse.toUpperCase(), angle: ang, gates: wingGates });
    });

    return {
      gates,
      seedEdges,
      wingPolygons,
      rotunda: { x: 0, y: 0, radius: 118 },
      rotation: (Math.random() - 0.5) * 0.5
    };
  }

  // ---- Archetype 2: Dual Concourse Y-Shape -----------------------------------
  function buildDualConcourse() {
    const gates = [];
    const seedEdges = [];
    const wingPolygons = [];

    gates.push(makeGate('H1', 'Junction Hub North', 'Y-Junction', 'hub', -18, -62));
    gates.push(makeGate('H2', 'Junction Hub South', 'Y-Junction', 'hub', 18, 62));
    seedEdges.push(['H1', 'H2']);

    // Stem (Main Terminal) running left out of the junction
    const stemGates = [];
    const stemSteps = [150, 272, 394, 506];
    for (let j = 0; j < 4; j++) {
      const isPier = j === 3;
      const g = makeGate(
        `T${j + 1}`,
        isPier ? 'Pier T4 (Main Head)' : `Gate T${j + 1}`,
        'Main Terminal',
        isPier ? 'regional' : 'main',
        -stemSteps[j] + (Math.random() - 0.5) * 26,
        (j % 2 === 0 ? -1 : 1) * (26 + Math.random() * 30)
      );
      gates.push(g);
      stemGates.push(g);
      if (j > 0) seedEdges.push([`T${j}`, `T${j + 1}`]);
    }
    seedEdges.push(['H1', 'T1']);
    seedEdges.push(['H2', 'T1']);
    wingPolygons.push({ label: 'MAIN TERMINAL', angle: Math.PI, gates: stemGates });

    // Twin forks peeling off to the right
    const forks = [
      { prefix: 'D', concourse: 'Concourse Delta', dirY: -1, hub: 'H1' },
      { prefix: 'E', concourse: 'Concourse Echo', dirY: 1, hub: 'H2' }
    ];
    const spread = 0.46 + Math.random() * 0.12;

    forks.forEach((f) => {
      const forkGates = [];
      const steps = [140, 240, 340, 440, 538];
      for (let j = 0; j < 5; j++) {
        const r = steps[j] + (Math.random() - 0.5) * 24;
        const isPier = j === 4;
        const g = makeGate(
          `${f.prefix}${j + 1}`,
          isPier ? `Pier ${f.prefix}${j + 1}` : `Gate ${f.prefix}${j + 1}`,
          f.concourse,
          isPier ? 'regional' : 'main',
          r,
          f.dirY * (72 + r * spread) + (Math.random() - 0.5) * 26
        );
        gates.push(g);
        forkGates.push(g);
        if (j > 0) seedEdges.push([`${f.prefix}${j}`, `${f.prefix}${j + 1}`]);
      }
      seedEdges.push([f.hub, `${f.prefix}1`]);
      wingPolygons.push({ label: f.concourse.toUpperCase(), angle: 0, gates: forkGates });
    });

    return {
      gates,
      seedEdges,
      wingPolygons,
      rotunda: { x: 0, y: 0, radius: 104 },
      rotation: (Math.random() - 0.5) * 0.26
    };
  }

  // ---- Archetype 3: Pier Ring / Satellite Terminal ---------------------------
  function buildPierRing() {
    const gates = [];
    const seedEdges = [];
    const hubAngle0 = Math.random() * Math.PI * 2;

    for (let i = 0; i < 4; i++) {
      const a = hubAngle0 + i * (Math.PI / 2);
      gates.push(
        makeGate(
          `H${i + 1}`,
          `Satellite Core ${i + 1}`,
          'Satellite Core',
          'hub',
          Math.cos(a) * 104,
          Math.sin(a) * 62
        )
      );
    }
    for (let i = 0; i < 4; i++) seedEdges.push([`H${i + 1}`, `H${((i + 1) % 4) + 1}`]);

    const ringCount = 12;
    const ringStart = Math.random() * Math.PI * 2;
    const ringGates = [];
    for (let i = 0; i < ringCount; i++) {
      const a = ringStart + (i / ringCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.1;
      const rx = 470 + (Math.random() - 0.5) * 36;
      const ry = 286 + (Math.random() - 0.5) * 26;
      const isPier = i % 3 === 0;
      const g = makeGate(
        `R${i + 1}`,
        isPier ? `Pier R${i + 1}` : `Gate R${i + 1}`,
        `Ring Sector ${String.fromCharCode(65 + Math.floor(i / 4))}`,
        isPier ? 'regional' : 'main',
        Math.cos(a) * rx,
        Math.sin(a) * ry
      );
      gates.push(g);
      ringGates.push(g);
    }
    for (let i = 0; i < ringCount; i++) {
      seedEdges.push([`R${i + 1}`, `R${((i + 1) % ringCount) + 1}`]);
    }
    // Four radial jetway spokes from the satellite core out to the ring
    for (let i = 0; i < 4; i++) {
      seedEdges.push([`H${i + 1}`, `R${i * 3 + 1}`]);
    }

    return {
      gates,
      seedEdges,
      wingPolygons: [{ label: 'SATELLITE RING', angle: 0, gates: ringGates }],
      rotunda: { x: 0, y: 0, radius: 116 },
      rotation: (Math.random() - 0.5) * 0.3
    };
  }

  const ARCHETYPE_BUILDERS = {
    hub_spokes: buildHubSpokes,
    dual_concourse: buildDualConcourse,
    pier_ring: buildPierRing
  };

  // Iterative repulsion relaxation so no two gates ever crowd each other
  function relaxGateSpacing(gates, minGateDist = 84, iterations = 34) {
    for (let iter = 0; iter < iterations; iter++) {
      for (let i = 0; i < gates.length; i++) {
        for (let j = i + 1; j < gates.length; j++) {
          const a = gates[i];
          const b = gates[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.hypot(dx, dy) || 1;
          if (d < minGateDist) {
            const push = (minGateDist - d) * 0.5;
            const nx = dx / d;
            const ny = dy / d;
            a.x = Math.max(96, Math.min(VIRTUAL_W - 96, a.x - nx * push));
            a.y = Math.max(104, Math.min(VIRTUAL_H - 74, a.y - ny * push));
            b.x = Math.max(96, Math.min(VIRTUAL_W - 96, b.x + nx * push));
            b.y = Math.max(104, Math.min(VIRTUAL_H - 74, b.y + ny * push));
          }
        }
      }
    }
  }

  // Shared planar-ish graph builder: seeded corridors -> MST -> local chords
  function buildTerminalGraph(gates, seedEdges) {
    const edges = [];
    const byId = (id) => gates.find((g) => g.id === id);
    const hasEdge = (id1, id2) =>
      edges.some(([u, v]) => (u === id1 && v === id2) || (u === id2 && v === id1));

    const addEdgeIfClean = (g1, g2, ignoreCross = false) => {
      if (!g1 || !g2 || g1.id === g2.id || hasEdge(g1.id, g2.id)) return false;
      if (!ignoreCross) {
        for (const [uId, vId] of edges) {
          if (uId === g1.id || uId === g2.id || vId === g1.id || vId === g2.id) continue;
          const u = byId(uId);
          const v = byId(vId);
          if (u && v && segmentsIntersect(g1.x, g1.y, g2.x, g2.y, u.x, u.y, v.x, v.y)) {
            return false;
          }
        }
      }
      edges.push([g1.id, g2.id]);
      return true;
    };

    // 1. Archetype-defined structural corridors
    seedEdges.forEach(([a, b]) => addEdgeIfClean(byId(a), byId(b), true));

    // 2. Prim's MST guarantees every gate is reachable
    const inTree = new Set();
    const linked = new Set(edges.flat());
    gates.forEach((g) => {
      if (linked.has(g.id)) inTree.add(g.id);
    });
    if (inTree.size === 0) inTree.add(gates[0].id);

    while (inTree.size < gates.length) {
      let bestPair = null;
      let bestDist = Infinity;
      for (const gIn of gates) {
        if (!inTree.has(gIn.id)) continue;
        for (const gOut of gates) {
          if (inTree.has(gOut.id)) continue;
          const d = Math.hypot(gIn.x - gOut.x, gIn.y - gOut.y);
          if (d < bestDist) {
            bestDist = d;
            bestPair = [gIn, gOut];
          }
        }
      }
      if (!bestPair) break;
      addEdgeIfClean(bestPair[0], bestPair[1], true);
      inTree.add(bestPair[1].id);
    }

    // 3. Local non-intersecting chords so gates have 2-4 tactical neighbours
    const candidatePairs = [];
    for (let i = 0; i < gates.length; i++) {
      for (let j = i + 1; j < gates.length; j++) {
        const d = Math.hypot(gates[i].x - gates[j].x, gates[i].y - gates[j].y);
        if (d < 215) candidatePairs.push({ g1: gates[i], g2: gates[j], d });
      }
    }
    candidatePairs.sort((a, b) => a.d - b.d);
    candidatePairs.forEach((pair) => {
      const deg1 = edges.filter(([a, b]) => a === pair.g1.id || b === pair.g1.id).length;
      const deg2 = edges.filter(([a, b]) => a === pair.g2.id || b === pair.g2.id).length;
      if (deg1 < 4 && deg2 < 4) addEdgeIfClean(pair.g1, pair.g2, false);
    });

    return edges;
  }

  function generateProceduralTerminal() {
    const archetype = MAP_ARCHETYPES[Math.floor(Math.random() * MAP_ARCHETYPES.length)];
    state.mapArchetype = archetype;

    const layout = ARCHETYPE_BUILDERS[archetype.id]();
    const rotunda = fitLayoutToBlueprint(layout.gates, layout.rotunda, layout.rotation);
    relaxGateSpacing(layout.gates);

    state.rotundaCenter = rotunda;
    state.gates = layout.gates;
    state.wingPolygons = layout.wingPolygons;
    state.connections = buildTerminalGraph(layout.gates, layout.seedEdges);
    state.gateSerial = 0;
    state.zGateSerial = 0;
    state.concourseWeather = {};
    state.codeShareLinks = [];
    state.apronBuses = [];
    state.departureFlights = [];
    refreshMajorityThreshold();

    resetCamera();
    initPassengerAgents();
  }

  // Satellite annex gates and Apron "Z" Bus Gates are excluded from BOTH sides of
  // the majority equation, so the victory bar never moves mid-match.
  function getMajorityGatePool() {
    return state.gates.filter((g) => !g.excludeFromMajority && !g.isZGate);
  }

  function countMajorityGates(playerIndex) {
    return state.gates.filter((g) => g.owner === playerIndex && !g.excludeFromMajority && !g.isZGate).length;
  }

  function refreshMajorityThreshold() {
    state.majorityThreshold = Math.floor(getMajorityGatePool().length / 2) + 1;
  }

  // Finds the largest connected cluster of gates owned by `playerIndex`,
  // returning its member gate IDs (or empty array if player owns no gates).
  function getLargestOwnedClusterGateIds(playerIndex) {
    const owned = new Set(
      state.gates.filter((g) => g.owner === playerIndex).map((g) => g.id)
    );
    if (owned.size === 0) return [];
    const visited = new Set();
    let bestCluster = [];
    for (const startId of owned) {
      if (visited.has(startId)) continue;
      const comp = [];
      const q = [startId];
      visited.add(startId);
      while (q.length > 0) {
        const cur = q.shift();
        comp.push(cur);
        for (const nb of getAdjacentGates(cur)) {
          if (owned.has(nb) && !visited.has(nb)) {
            visited.add(nb);
            q.push(nb);
          }
        }
      }
      if (comp.length > bestCluster.length) bestCluster = comp;
    }
    return bestCluster;
  }

  // Shortest distance from point (px, py) to line segment (x1, y1)-(x2, y2)
  function pointToSegmentDistance(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lenSq = dx * dx + dy * dy;
    if (lenSq <= 0.0001) return Math.hypot(px - x1, py - y1);
    const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lenSq));
    const projX = x1 + t * dx;
    const projY = y1 + t * dy;
    return Math.hypot(px - projX, py - projY);
  }

  /**
   * Validates a candidate Apron "Z" Gate coordinate `(nx, ny)` and its proposed
   * dashed asphalt service road to `anchorGate`:
   *  1. Enforces a large radial distance from the central rotunda / terminal core
   *     or placement strictly outside the concourse bounding box on the outer apron.
   *  2. Enforces minimum node spacing from every existing gate.
   *  3. Ensures `(nx, ny)` does not sit on top of any existing concourse corridor.
   *  4. Guarantees the service road from `anchorGate -> (nx, ny)` never intersects
   *     any existing corridor or passes too close to another gate pin.
   */
  function validateApronZCandidate(nx, ny, anchorGate, termBounds, rules) {
    if (!anchorGate) return { ok: false };

    // 1. Must sit within visible apron bounds
    if (nx < 54 || nx > VIRTUAL_W - 54 || ny < 66 || ny > VIRTUAL_H - 54) {
      return { ok: false };
    }

    // 2. Enforce generous radial distance & outer-apron bounding box separation
    const rc = state.rotundaCenter || { x: VIRTUAL_W / 2, y: VIRTUAL_H / 2 };
    const radialDist = Math.hypot(nx - rc.x, ny - rc.y);
    const outsideConcourseBox =
      nx <= termBounds.minX - rules.boxPad ||
      nx >= termBounds.maxX + rules.boxPad ||
      ny <= termBounds.minY - rules.boxPad ||
      ny >= termBounds.maxY + rules.boxPad;
    if (radialDist < rules.minRadial && !outsideConcourseBox) {
      return { ok: false };
    }

    // 3. Enforce minimum distance from all existing gates (both terminal & Z gates)
    let minGateDist = Infinity;
    for (const g of state.gates) {
      const d = Math.hypot(g.x - nx, g.y - ny);
      if (d < rules.minGateSpacing) return { ok: false };
      if (d < minGateDist) minGateDist = d;
    }

    // 4. Service road length check
    const roadLen = Math.hypot(nx - anchorGate.x, ny - anchorGate.y);
    if (roadLen < rules.minRoadLen || roadLen > rules.maxRoadLen) {
      return { ok: false };
    }

    // 5. Path-collision check: the dashed service road from `anchorGate` to `(nx, ny)`
    //    must NEVER cross any existing concourse corridor or service road, and the
    //    new Z-gate node must stay clear of all existing corridor segments.
    for (const [uId, vId] of state.connections) {
      const u = getGateById(uId);
      const v = getGateById(vId);
      if (!u || !v) continue;

      // Keep the Z-gate pin itself well away from existing corridor tubes
      const distNodeToEdge = pointToSegmentDistance(nx, ny, u.x, u.y, v.x, v.y);
      if (distNodeToEdge < rules.minCorridorClearance) {
        return { ok: false };
      }

      // Check segment intersection for edges not sharing `anchorGate`
      if (u.id !== anchorGate.id && v.id !== anchorGate.id) {
        if (segmentsIntersect(anchorGate.x, anchorGate.y, nx, ny, u.x, u.y, v.x, v.y)) {
          return { ok: false };
        }
        // Also ensure the service road doesn't graze the endpoint of another corridor
        const dU = pointToSegmentDistance(u.x, u.y, anchorGate.x, anchorGate.y, nx, ny);
        const dV = pointToSegmentDistance(v.x, v.y, anchorGate.x, anchorGate.y, nx, ny);
        if (dU < rules.minRoadPinClearance || dV < rules.minRoadPinClearance) {
          return { ok: false };
        }
      }
    }

    // 6. Ensure the service road doesn't pass across any other gate pin
    for (const g of state.gates) {
      if (g.id === anchorGate.id) continue;
      const dPin = pointToSegmentDistance(g.x, g.y, anchorGate.x, anchorGate.y, nx, ny);
      if (dPin < rules.minRoadPinClearance) {
        return { ok: false };
      }
    }

    // Score favors outer-apron placement, generous gate spacing, and a crisp direct service road
    const zLinksOnAnchor = getAdjacentGates(anchorGate.id).filter((id) => {
      const nb = getGateById(id);
      return nb && nb.isZGate;
    }).length;
    const score =
      minGateDist * 1.35 +
      radialDist * 0.45 -
      roadLen * 0.55 -
      zLinksOnAnchor * 140 +
      (outsideConcourseBox ? 65 : 0);

    return { ok: true, score };
  }

  /**
   * Spawns an isolated Remote "Z" Bus Gate out on the outer apron tarmac
   * with strict radial padding, bounding-box separation, and path-collision
   * verification so dashed asphalt service roads never overlap the terminal.
   */
  function spawnApronZGate(ownerIndex = null, preferredAnchorId = null) {
    if (state.gates.length === 0) return null;
    const rc = state.rotundaCenter || { x: VIRTUAL_W / 2, y: VIRTUAL_H / 2 };

    const nonZGates = state.gates.filter((g) => !g.isZGate);
    const concoursePool = nonZGates.length > 0 ? nonZGates : state.gates;

    // Compute main terminal concourse bounding box & radial footprint
    const termBounds = {
      minX: Math.min(...concoursePool.map((g) => g.x)),
      maxX: Math.max(...concoursePool.map((g) => g.x)),
      minY: Math.min(...concoursePool.map((g) => g.y)),
      maxY: Math.max(...concoursePool.map((g) => g.y)),
      maxR: Math.max(...concoursePool.map((g) => Math.hypot(g.x - rc.x, g.y - rc.y)))
    };

    // Outer perimeter concourse gates make the best service-road anchors
    const sortedOuterAnchors = [...concoursePool].sort((a, b) => {
      if (preferredAnchorId) {
        if (a.id === preferredAnchorId) return -1;
        if (b.id === preferredAnchorId) return 1;
      }
      const da = Math.hypot(a.x - rc.x, a.y - rc.y);
      const db = Math.hypot(b.x - rc.x, b.y - rc.y);
      return db - da;
    });

    // Build candidate coordinates along the outer apron perimeter + outward rays
    const candidatePoints = [];

    // A) Curated outer-apron tarmac stands around all four edges of the 1100x620 blueprint
    const apronRing = [
      { x: 68, y: 86 }, { x: 68, y: 185 }, { x: 68, y: 295 }, { x: 68, y: 405 }, { x: 68, y: 525 },
      { x: VIRTUAL_W - 68, y: 86 }, { x: VIRTUAL_W - 68, y: 185 }, { x: VIRTUAL_W - 68, y: 295 }, { x: VIRTUAL_W - 68, y: 405 }, { x: VIRTUAL_W - 68, y: 525 },
      { x: 185, y: 74 }, { x: 330, y: 74 }, { x: 550, y: 72 }, { x: 770, y: 74 }, { x: 915, y: 74 },
      { x: 185, y: VIRTUAL_H - 60 }, { x: 330, y: VIRTUAL_H - 60 }, { x: 550, y: VIRTUAL_H - 58 }, { x: 770, y: VIRTUAL_H - 60 }, { x: 915, y: VIRTUAL_H - 60 },
      { x: 108, y: 118 }, { x: VIRTUAL_W - 108, y: 118 }, { x: 108, y: VIRTUAL_H - 82 }, { x: VIRTUAL_W - 108, y: VIRTUAL_H - 82 }
    ];
    apronRing.forEach((pt) => candidatePoints.push(pt));

    // B) Outward radial rays projected from outer concourse nodes onto the apron
    sortedOuterAnchors.slice(0, 10).forEach((ag) => {
      const baseAng = Math.atan2(ag.y - rc.y, ag.x - rc.x);
      [136, 158, 182, 208].forEach((dist) => {
        [-0.48, -0.24, 0, 0.24, 0.48].forEach((delta) => {
          const ang = baseAng + delta;
          candidatePoints.push({
            x: Math.round(ag.x + Math.cos(ang) * dist),
            y: Math.round(ag.y + Math.sin(ang) * dist),
            hintAnchor: ag
          });
        });
      });
    });

    // Three progressive validation tiers (strict -> standard -> relaxed apron fallback)
    const tiers = [
      {
        minRadial: Math.max(255, termBounds.maxR + 58),
        boxPad: 68,
        minGateSpacing: 114,
        minRoadLen: 118,
        maxRoadLen: 265,
        minCorridorClearance: 68,
        minRoadPinClearance: 54
      },
      {
        minRadial: Math.max(225, termBounds.maxR + 34),
        boxPad: 48,
        minGateSpacing: 96,
        minRoadLen: 102,
        maxRoadLen: 310,
        minCorridorClearance: 54,
        minRoadPinClearance: 44
      },
      {
        minRadial: 195,
        boxPad: 28,
        minGateSpacing: 80,
        minRoadLen: 86,
        maxRoadLen: 380,
        minCorridorClearance: 40,
        minRoadPinClearance: 34
      }
    ];

    let bestMatch = null;
    for (const rules of tiers) {
      for (const pt of candidatePoints) {
        const anchorChoices = [...concoursePool]
          .map((g) => ({ g, d: Math.hypot(g.x - pt.x, g.y - pt.y) }))
          .sort((a, b) => a.d - b.d)
          .slice(0, 4)
          .map((x) => x.g);
        if (pt.hintAnchor && !anchorChoices.includes(pt.hintAnchor)) {
          anchorChoices.unshift(pt.hintAnchor);
        }
        for (const candAnchor of anchorChoices) {
          const res = validateApronZCandidate(pt.x, pt.y, candAnchor, termBounds, rules);
          if (res.ok && (!bestMatch || res.score > bestMatch.score)) {
            bestMatch = { x: pt.x, y: pt.y, anchor: candAnchor, score: res.score };
          }
        }
      }
      if (bestMatch) break;
    }

    // Ultimate outer-corner safety net if the board has dozens of gates
    if (!bestMatch) {
      const safestPt = apronRing
        .map((pt) => ({
          pt,
          minD: Math.min(...state.gates.map((g) => Math.hypot(g.x - pt.x, g.y - pt.y)))
        }))
        .sort((a, b) => b.minD - a.minD)[0].pt;
      const nearestAnchor = [...concoursePool]
        .map((g) => ({ g, d: Math.hypot(g.x - safestPt.x, g.y - safestPt.y) }))
        .sort((a, b) => a.d - b.d)[0].g;
      bestMatch = { x: safestPt.x, y: safestPt.y, anchor: nearestAnchor, score: 0 };
    }

    const anchor = bestMatch.anchor;
    state.zGateSerial = (state.zGateSerial || 0) + 1;
    const zId = `Z${state.zGateSerial}`;
    const gate = makeGate(
      zId,
      `Apron Bus Stand ${zId}`,
      anchor.concourse || 'Apron Tarmac',
      'regional',
      bestMatch.x,
      bestMatch.y
    );
    gate.basePax = 95;
    gate.excludeFromMajority = true;
    gate.isZGate = true;
    gate.serviceRoadAnchorId = anchor.id;
    gate.owner = ownerIndex;

    state.gates.push(gate);
    state.connections.push([anchor.id, gate.id]);

    state.apronBuses.push({
      id: `BUS-${zId}`,
      zGateId: gate.id,
      anchorGateId: anchor.id,
      t: Math.random(),
      dir: 1,
      speed: 0.0042 + Math.random() * 0.0014,
      pauseTimer: 0
    });

    refreshMajorityThreshold();
    gate.pulseAnim = 1.0;
    return gate;
  }

  // Terminal Expansion coupon (Overhauled): can be played at any time.
  // Spawns a new gate immediately connected directly to the player's largest
  // owned cluster/node. If all conventional concourse anchor slots are occupied,
  // dynamically spawns a new claimed "Z" gate on the apron.
  function spawnExpansionGate(ownerIndex = null) {
    if (state.gates.length === 0) return null;

    const clusterIds = ownerIndex !== null ? getLargestOwnedClusterGateIds(ownerIndex) : [];
    const clusterGates = clusterIds.map((id) => getGateById(id)).filter(Boolean);
    const anchorPool = clusterGates.length > 0 ? clusterGates : state.gates.filter((g) => !g.isZGate);

    const rc = state.rotundaCenter || { x: VIRTUAL_W / 2, y: VIRTUAL_H / 2 };
    let chosenAnchor = null;
    let placed = null;

    const sortedAnchors = [...anchorPool].sort((a, b) => {
      const degA = getAdjacentGates(a.id).length;
      const degB = getAdjacentGates(b.id).length;
      return degA - degB;
    });

    for (const candidate of sortedAnchors) {
      const baseAngle = Math.atan2(candidate.y - rc.y, candidate.x - rc.x);
      for (let attempt = 0; attempt < 22; attempt++) {
        const ang = baseAngle + (Math.random() - 0.5) * (0.55 + attempt * 0.14);
        const dist = 88 + attempt * 4 + Math.random() * 22;
        const nx = Math.max(122, Math.min(VIRTUAL_W - 122, candidate.x + Math.cos(ang) * dist));
        const ny = Math.max(132, Math.min(VIRTUAL_H - 92, candidate.y + Math.sin(ang) * dist));
        const crowded = state.gates.some((g) => Math.hypot(g.x - nx, g.y - ny) < 82);
        if (!crowded) {
          chosenAnchor = candidate;
          placed = { x: Math.round(nx), y: Math.round(ny) };
          break;
        }
      }
      if (placed) break;
    }

    if (!placed || !chosenAnchor) {
      const preferredId = sortedAnchors[0] ? sortedAnchors[0].id : null;
      return spawnApronZGate(ownerIndex, preferredId);
    }

    state.gateSerial++;
    const gate = makeGate(
      `X${state.gateSerial}`,
      `Satellite Annex Gate X${state.gateSerial}`,
      chosenAnchor.concourse || 'Expansion Annex',
      'main',
      placed.x,
      placed.y
    );
    gate.excludeFromMajority = true;
    gate.owner = ownerIndex;
    state.gates.push(gate);
    state.connections.push([chosenAnchor.id, gate.id]);

    const second = state.gates
      .filter((g) => g.id !== gate.id && g.id !== chosenAnchor.id && !g.isZGate)
      .map((g) => ({ g, d: Math.hypot(g.x - gate.x, g.y - gate.y) }))
      .sort((a, b) => a.d - b.d)[0];
    if (second && second.d < 175 && getAdjacentGates(second.g.id).length < 4) {
      state.connections.push([second.g.id, gate.id]);
    }

    refreshMajorityThreshold();
    gate.pulseAnim = 1.0;
    return gate;
  }

  function segmentsIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
    const ccw = (ax, ay, bx, by, cx, cy) => (cy - ay) * (bx - ax) > (by - ay) * (cx - ax);
    return (
      ccw(x1, y1, x3, y3, x4, y4) !== ccw(x2, y2, x3, y3, x4, y4) &&
      ccw(x1, y1, x2, y2, x3, y3) !== ccw(x1, y1, x2, y2, x4, y4)
    );
  }

  // ============================================================================
  // 8. 1950s UPA-STYLE ANIMATED PASSENGER AGENTS & PATHFINDING
  // ============================================================================

  /**
   * Passenger Ambient Animation Tuning Constants:
   * Speed reduced by ~56% from the original (0.0022..0.0040 -> 0.00095..0.00175)
   * so commuters stroll comfortably along concourse paths rather than sprinting.
   */
  const PASSENGER_BASE_SPEED = 0.00095;       // Was 0.0022 (~57% reduction)
  const PASSENGER_SPEED_VARIANCE = 0.0008;    // Was 0.0018 (~56% reduction)
  const PASSENGER_WALK_CYCLE_RATE = 0.10;     // Was 0.22 (relaxed scissor-leg cadence)
  const PASSENGER_REACTION_SLOWDOWN = 0.32;   // Brief pause/hesitation when colliding/chatting
  const PASSENGER_SEGMENT_PACE_SCALE = 130;   // Normalizes speed across varying corridor lengths

  const PASSENGER_QUIPS = [
    '!',
    'LATE!',
    'MY MARTINI!',
    'GATE?!',
    'EXCUSE ME!',
    'BUMP!',
    'WATCH IT!',
    '★#?!'
  ];

  function findShortestPathBFS(startGateId, endGateId) {
    if (startGateId === endGateId) return [startGateId];
    const queue = [[startGateId]];
    const visited = new Set([startGateId]);

    while (queue.length > 0) {
      const path = queue.shift();
      const curr = path[path.length - 1];
      const neighbors = getAdjacentGates(curr);

      for (const nextId of neighbors) {
        if (nextId === endGateId) {
          return [...path, nextId];
        }
        if (!visited.has(nextId)) {
          visited.add(nextId);
          queue.push([...path, nextId]);
        }
      }
    }
    return [startGateId];
  }

  function initPassengerAgents() {
    state.passengerAgents = [];
    if (state.gates.length < 2) return;

    const agentCount = 30;
    const primaryAccent = (state.theme && state.theme.primary) || '#D1192A';
    const coatColors = ['#1A1A1A', primaryAccent, '#333333', '#0B6E6E', '#1E4DB7', '#666666'];
    const hatStyles = ['fedora', 'pillbox', 'beehive', 'glasses', 'none'];

    for (let i = 0; i < agentCount; i++) {
      const startGate = state.gates[Math.floor(Math.random() * state.gates.length)];
      let destGate = state.gates[Math.floor(Math.random() * state.gates.length)];
      if (destGate.id === startGate.id) {
        destGate = state.gates[(state.gates.indexOf(startGate) + 3) % state.gates.length];
      }
      const route = findShortestPathBFS(startGate.id, destGate.id);
      const nextGateId = route[1] || startGate.id;

      state.passengerAgents.push({
        id: i,
        currGateId: startGate.id,
        nextGateId,
        routeQueue: route.slice(2),
        t: Math.random(), // Progress along current segment [0..1]
        speed: PASSENGER_BASE_SPEED + Math.random() * PASSENGER_SPEED_VARIANCE,
        laneOffset: (Math.random() - 0.5) * 10,
        coatColor: coatColors[i % coatColors.length],
        usesBrandCoat: i % coatColors.length === 1,
        hat: hatStyles[i % hatStyles.length],
        bodyShape: i % 3, // 0: triangle trench, 1: boxy suit, 2: hourglass mid-century dress
        hasBriefcase: i % 2 === 0,
        walkPhase: Math.random() * Math.PI * 2,
        x: startGate.x,
        y: startGate.y,
        dirX: 1,
        isDisgruntled: Boolean(startGate.isZGate || destGate.isZGate),
        grumbleType: ['steam', 'cloud', 'clock'][i % 3],
        grumbleTimer: Math.floor(Math.random() * 140),
        tupleReaction: null, // { text, timer, bounce }
        reactionCooldown: Math.random() * 120
      });
    }
  }

  function updatePassengerAgents() {
    const agents = state.passengerAgents;
    if (agents.length === 0 || state.gates.length === 0) return;

    for (const ag of agents) {
      const gFrom = state.gates.find((g) => g.id === ag.currGateId);
      const gTo = state.gates.find((g) => g.id === ag.nextGateId);
      if (!gFrom || !gTo) continue;

      // Passengers queuing at or walking along a Z-Gate service road become disgruntled
      ag.isDisgruntled = Boolean(gFrom.isZGate || gTo.isZGate);
      const disgruntledSlow = ag.isDisgruntled ? 0.72 : 1.0;
      const paceMult = (ag.tupleReaction ? PASSENGER_REACTION_SLOWDOWN : 1.0) * disgruntledSlow;

      ag.walkPhase += PASSENGER_WALK_CYCLE_RATE * paceMult;
      if (ag.reactionCooldown > 0) ag.reactionCooldown--;

      if (ag.isDisgruntled) {
        ag.grumbleTimer = (ag.grumbleTimer || 0) + 1;
        if (ag.grumbleTimer > 180) {
          ag.grumbleTimer = 0;
          const types = ['steam', 'cloud', 'clock'];
          ag.grumbleType = types[Math.floor(Math.random() * types.length)];
        }
      }

      if (ag.tupleReaction) {
        ag.tupleReaction.timer--;
        if (ag.tupleReaction.timer <= 0) {
          ag.tupleReaction = null;
        }
      }

      const segDist = Math.hypot(gTo.x - gFrom.x, gTo.y - gFrom.y) || 100;
      ag.t += (ag.speed * paceMult * PASSENGER_SEGMENT_PACE_SCALE) / segDist;

      if (ag.t >= 1.0) {
        ag.t = 0;
        ag.currGateId = ag.nextGateId;
        if (ag.routeQueue.length > 0) {
          ag.nextGateId = ag.routeQueue.shift();
        } else {
          const randomDest = state.gates[Math.floor(Math.random() * state.gates.length)];
          const newRoute = findShortestPathBFS(ag.currGateId, randomDest.id);
          if (newRoute.length > 1) {
            ag.nextGateId = newRoute[1];
            ag.routeQueue = newRoute.slice(2);
          } else {
            const adj = getAdjacentGates(ag.currGateId);
            ag.nextGateId = adj[Math.floor(Math.random() * adj.length)] || ag.currGateId;
          }
        }
      }

      const curFrom = state.gates.find((g) => g.id === ag.currGateId) || gFrom;
      const curTo = state.gates.find((g) => g.id === ag.nextGateId) || gTo;
      const dx = curTo.x - curFrom.x;
      const dy = curTo.y - curFrom.y;
      const len = Math.hypot(dx, dy) || 1;
      const perpX = -dy / len;
      const perpY = dx / len;

      ag.x = curFrom.x + dx * ag.t + perpX * ag.laneOffset;
      ag.y = curFrom.y + dy * ag.t + perpY * ag.laneOffset;
      ag.dirX = dx >= 0 ? 1 : -1;
    }

    // Check pairwise proximity for humorous micro-interactions when passengers pass each other
    for (let i = 0; i < agents.length; i++) {
      const a = agents[i];
      if (a.reactionCooldown > 0 || a.tupleReaction) continue;

      for (let j = i + 1; j < agents.length; j++) {
        const b = agents[j];
        if (b.reactionCooldown > 0 || b.tupleReaction) continue;

        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 14 && Math.random() < 0.035) {
          const quip = PASSENGER_QUIPS[Math.floor(Math.random() * PASSENGER_QUIPS.length)];
          a.tupleReaction = { text: quip, timer: 85 };
          b.tupleReaction = { text: '!', timer: 70 };
          a.reactionCooldown = 280;
          b.reactionCooldown = 280;
          break;
        }
      }
    }
  }

  function drawDisgruntledThoughtBubble(ctx, thoughtType, phase) {
    ctx.save();
    const floatY = Math.sin(phase * 1.4) * 1.6;
    const by = -26 + floatY;

    ctx.fillStyle = '#FDFBF7';
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(-2, by + 11, 1.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.roundRect(-10, by - 6, 20, 14, 5);
    ctx.fill();
    ctx.stroke();

    if (thoughtType === 'cloud') {
      ctx.fillStyle = '#3A434D';
      ctx.beginPath();
      ctx.arc(-2.5, by - 0.5, 3, 0, Math.PI * 2);
      ctx.arc(2, by - 1, 3.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#E3B505';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(0.5, by + 1.5);
      ctx.lineTo(-1.5, by + 4.5);
      ctx.lineTo(1.5, by + 4.5);
      ctx.lineTo(-0.5, by + 7);
      ctx.stroke();
    } else if (thoughtType === 'clock') {
      ctx.strokeStyle = '#D1192A';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(0, by + 1, 4.4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, by + 1);
      ctx.lineTo(0, by - 2);
      ctx.moveTo(0, by + 1);
      ctx.lineTo(2.6, by + 1.8);
      ctx.stroke();
    } else {
      ctx.strokeStyle = '#D1192A';
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(-4, by + 3);
      ctx.quadraticCurveTo(-5, by - 3, -1.5, by - 2.5);
      ctx.moveTo(1.5, by + 3.5);
      ctx.quadraticCurveTo(4.5, by - 2.5, 1, by - 3);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawUPAPassenger(ctx, ag) {
    ctx.save();
    const brandPrimary = (state.theme && state.theme.primary) || '#D1192A';
    const brandReadable = (state.theme && state.theme.readableText) || brandPrimary;
    const coatFill = ag.usesBrandCoat ? brandPrimary : ag.coatColor;

    const bounceY = ag.tupleReaction ? Math.abs(Math.sin(ag.walkPhase * 1.8)) * -3.5 : 0;
    ctx.translate(ag.x, ag.y + bounceY);

    // Subtle ground shadow
    ctx.fillStyle = 'rgba(17, 17, 17, 0.14)';
    ctx.beginPath();
    ctx.ellipse(0, 6, 4.5, 1.8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Disgruntled Z-Gate passengers drag heavy wheeled luggage behind them on a strap
    if (ag.isDisgruntled) {
      const dragSide = -ag.dirX;
      const bagX = dragSide * 7.8;
      const bagY = 2.2 + Math.abs(Math.sin(ag.walkPhase)) * 0.7;
      ctx.strokeStyle = '#111111';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(dragSide * 1.5, -2.5);
      ctx.lineTo(bagX, bagY + 1);
      ctx.stroke();
      ctx.fillStyle = '#8A5A2B';
      ctx.strokeStyle = '#111111';
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.roundRect(bagX - 3, bagY - 1.5, 6, 4.4, 1);
      ctx.fill();
      ctx.stroke();
    }

    // Animated Scissor Stick Legs (1950s UPA cartoon stride)
    const stride = Math.sin(ag.walkPhase) * (ag.isDisgruntled ? 2.1 : 2.9);
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(-1, 0);
    ctx.lineTo(-stride, 5.5);
    ctx.moveTo(1, 0);
    ctx.lineTo(stride, 5.5);
    ctx.stroke();

    // Slumping posture tilt if disgruntled at an Apron Z-Gate
    ctx.save();
    if (ag.isDisgruntled) {
      ctx.rotate(ag.dirX * 0.24);
      ctx.translate(ag.dirX * 1.1, 1.0);
    }

    // Geometric Torso (Triangle Trench, Boxy Suit, or Mid-Century Hourglass)
    ctx.fillStyle = coatFill;
    ctx.beginPath();
    if (ag.bodyShape === 0) {
      ctx.moveTo(0, -8);
      ctx.lineTo(4.5, 1);
      ctx.lineTo(-4.5, 1);
      ctx.closePath();
    } else if (ag.bodyShape === 1) {
      ctx.rect(-3.5, -7.5, 7, 8);
    } else {
      ctx.moveTo(-3, -7.5);
      ctx.lineTo(3, -7.5);
      ctx.lineTo(4.5, 1);
      ctx.lineTo(-4.5, 1);
      ctx.closePath();
    }
    ctx.fill();

    // Head (Minimalist Cream Circle with Stark Outline — drooping forward if disgruntled)
    const headOffsetX = ag.isDisgruntled ? ag.dirX * 1.2 : 0;
    const headOffsetY = ag.isDisgruntled ? -9.6 : -10.5;
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 1.3;
    ctx.beginPath();
    ctx.arc(headOffsetX, headOffsetY, 2.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // 1950s Hat / Hairdo Accent
    if (ag.hat === 'fedora') {
      ctx.fillStyle = '#111111';
      ctx.fillRect(headOffsetX - 4.2, headOffsetY - 3.0, 8.4, 1.4);
      ctx.fillRect(headOffsetX - 2.4, headOffsetY - 5.0, 4.8, 2.2);
    } else if (ag.hat === 'pillbox') {
      ctx.fillStyle = brandPrimary;
      ctx.fillRect(headOffsetX - 2.5, headOffsetY - 4.3, 5, 2.2);
    } else if (ag.hat === 'beehive') {
      ctx.fillStyle = '#111111';
      ctx.beginPath();
      ctx.arc(headOffsetX, headOffsetY - 3.3, 2.6, 0, Math.PI * 2);
      ctx.fill();
    }

    // Swinging Briefcase / Valise
    if (ag.hasBriefcase && !ag.isDisgruntled) {
      const swing = Math.cos(ag.walkPhase) * 1.4;
      ctx.fillStyle = coatFill === brandPrimary ? '#1A1A1A' : brandPrimary;
      ctx.fillRect(3.2 * ag.dirX + swing * 0.4, -2.5, 3.6, 2.8);
    }
    ctx.restore();

    // Micro-Interaction Comic Thought/Exclamation Bubble OR Disgruntled Z-Gate Grumble Bubble
    if (ag.tupleReaction) {
      const txt = ag.tupleReaction.text;
      ctx.font = '700 8.5px "Futura", "Oswald", sans-serif';
      const tw = Math.max(16, ctx.measureText(txt).width + 8);
      const bx = -tw / 2;
      const by = -28;

      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = '#111111';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(bx, by, tw, 11, 3);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-2, by + 11);
      ctx.lineTo(0, by + 14);
      ctx.lineTo(2, by + 11);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = brandReadable;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(txt, 0, by + 5.8);
    } else if (ag.isDisgruntled && (ag.grumbleTimer || 0) % 110 < 68) {
      drawDisgruntledThoughtBubble(ctx, ag.grumbleType || 'steam', ag.walkPhase);
    }

    ctx.restore();
  }

  /**
   * Updates and renders tiny procedural Apron Shuttle Buses in utility yellow/cream
   * driving back and forth along dashed asphalt service roads between Z-Gates and the terminal.
   */
  function updateApronBuses() {
    state.gates.forEach((g) => {
      if (!g.isZGate) return;
      const hasBus = state.apronBuses.some((b) => b.zGateId === g.id);
      if (!hasBus) {
        const anchorId = g.serviceRoadAnchorId || getAdjacentGates(g.id)[0];
        if (anchorId) {
          state.apronBuses.push({
            id: `BUS-${g.id}`,
            zGateId: g.id,
            anchorGateId: anchorId,
            t: Math.random(),
            dir: 1,
            speed: 0.0044,
            pauseTimer: 0
          });
        }
      }
    });

    state.apronBuses.forEach((bus) => {
      if (bus.pauseTimer > 0) {
        bus.pauseTimer--;
        return;
      }
      bus.t += bus.speed * bus.dir;
      if (bus.t >= 1) {
        bus.t = 1;
        bus.dir = -1;
        bus.pauseTimer = 38;
      } else if (bus.t <= 0) {
        bus.t = 0;
        bus.dir = 1;
        bus.pauseTimer = 38;
      }
    });
  }

  function drawApronShuttleBus(ctx, bus) {
    const zGate = getGateById(bus.zGateId);
    const anchor = getGateById(bus.anchorGateId);
    if (!zGate || !anchor) return;

    const dx = zGate.x - anchor.x;
    const dy = zGate.y - anchor.y;
    const angle = Math.atan2(dy, dx) + (bus.dir < 0 ? Math.PI : 0);
    const bx = anchor.x + dx * bus.t;
    const by = anchor.y + dy * bus.t;

    ctx.save();
    ctx.translate(bx, by);
    ctx.rotate(angle);

    ctx.fillStyle = 'rgba(17, 17, 17, 0.22)';
    ctx.beginPath();
    ctx.roundRect(-10, -4, 20, 10, 3);
    ctx.fill();

    ctx.fillStyle = '#E3B505';
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.roundRect(-10, -5.5, 20, 10, 2.5);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#FDFBF7';
    ctx.fillRect(-7.5, -4, 15, 3);
    ctx.fillStyle = '#1A1A1A';
    ctx.fillRect(-7, 0.5, 14, 1.8);

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(9.2, -4, 1.5, 2);
    ctx.fillRect(9.2, 1.2, 1.5, 2);

    ctx.restore();
  }

  /**
   * Liveried Plane Departure Animations:
   * Periodically triggers a procedural pushback, taxi, rotation, and takeoff
   * sequence from gates claimed by active airlines.
   */
  function updateDepartureFlights() {
    if (state.status !== 'PLAYING' && state.status !== 'WORLD_MODAL') return;
    const now = performance.now();

    state.players.forEach((player, pIdx) => {
      if (player.nextDepartureAt === undefined) {
        player.nextDepartureAt = now + 4500 + pIdx * 2400 + Math.random() * 5000;
      }
      if (now >= player.nextDepartureAt) {
        const ownedGates = state.gates.filter(
          (g) => g.owner === pIdx && !isGateClosed(g)
        );
        if (ownedGates.length > 0 && state.departureFlights.length < 6) {
          const gate = ownedGates[Math.floor(Math.random() * ownedGates.length)];
          const rc = state.rotundaCenter || { x: VIRTUAL_W / 2, y: VIRTUAL_H / 2 };
          const pushAngle = Math.atan2(gate.y - rc.y, gate.x - rc.x);
          const runwayHeading = pushAngle + (Math.random() < 0.5 ? 0.65 : -0.65);
          state.departureFlights.push({
            gateId: gate.id,
            ownerIndex: pIdx,
            color: player.color,
            logo: player.logo,
            x: gate.x,
            y: gate.y + 8,
            angle: pushAngle + Math.PI,
            pushAngle,
            runwayHeading,
            phase: 'pushback',
            timer: 0,
            scale: 0.92,
            shadowOffset: 3,
            alpha: 1.0
          });
        }
        player.nextDepartureAt = now + 10000 + Math.random() * 8000;
      }
    });

    for (let i = state.departureFlights.length - 1; i >= 0; i--) {
      const fl = state.departureFlights[i];
      fl.timer++;
      if (fl.phase === 'pushback') {
        fl.x += Math.cos(fl.pushAngle) * 0.48;
        fl.y += Math.sin(fl.pushAngle) * 0.48;
        if (fl.timer > 42) {
          fl.phase = 'taxi';
          fl.timer = 0;
        }
      } else if (fl.phase === 'taxi') {
        const diff = ((fl.runwayHeading - fl.angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        fl.angle += diff * 0.09;
        fl.x += Math.cos(fl.angle) * 1.35;
        fl.y += Math.sin(fl.angle) * 1.35;
        if (fl.timer > 44) {
          fl.phase = 'takeoff';
          fl.timer = 0;
        }
      } else {
        const accel = 2.1 + fl.timer * 0.085;
        fl.x += Math.cos(fl.angle) * accel;
        fl.y += Math.sin(fl.angle) * accel;
        fl.scale = Math.min(1.68, fl.scale + 0.0065);
        fl.shadowOffset = Math.min(34, fl.shadowOffset + 0.36);
        if (fl.timer > 110) {
          fl.alpha = Math.max(0, fl.alpha - 0.04);
        }
        if (
          fl.alpha <= 0 ||
          fl.x < -160 ||
          fl.x > VIRTUAL_W + 160 ||
          fl.y < -160 ||
          fl.y > VIRTUAL_H + 160
        ) {
          state.departureFlights.splice(i, 1);
        }
      }
    }
  }

  function drawLiveriedAirliner(ctx, fl) {
    ctx.save();
    ctx.globalAlpha = fl.alpha;

    // Displaced ground shadow during taxi & climb
    ctx.save();
    ctx.translate(fl.x + fl.shadowOffset, fl.y + fl.shadowOffset * 1.15);
    ctx.rotate(fl.angle);
    ctx.scale(fl.scale * 0.88, fl.scale * 0.88);
    ctx.fillStyle = 'rgba(17, 17, 17, 0.20)';
    ctx.beginPath();
    ctx.moveTo(18, 0);
    ctx.lineTo(3, -3);
    ctx.lineTo(-4, -18);
    ctx.lineTo(-9, -18);
    ctx.lineTo(-6, -3);
    ctx.lineTo(-15, -2.5);
    ctx.lineTo(-19, -8);
    ctx.lineTo(-22, -8);
    ctx.lineTo(-19, 0);
    ctx.lineTo(-22, 8);
    ctx.lineTo(-19, 8);
    ctx.lineTo(-15, 2.5);
    ctx.lineTo(-6, 3);
    ctx.lineTo(-9, 18);
    ctx.lineTo(-4, 18);
    ctx.lineTo(3, 3);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    ctx.translate(fl.x, fl.y);
    ctx.rotate(fl.angle);
    ctx.scale(fl.scale, fl.scale);

    // Swept mid-century wings in airline livery
    ctx.fillStyle = fl.color || '#D1192A';
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(4, -2.5);
    ctx.lineTo(-4, -19);
    ctx.lineTo(-9.5, -19);
    ctx.lineTo(-6.5, -2.5);
    ctx.lineTo(-6.5, 2.5);
    ctx.lineTo(-9.5, 19);
    ctx.lineTo(-4, 19);
    ctx.lineTo(4, 2.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Twin under-wing engine nacelles
    ctx.fillStyle = '#FDFBF7';
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.roundRect(-2.5, -11.5, 7.5, 3.2, 1.4);
    ctx.roundRect(-2.5, 8.3, 7.5, 3.2, 1.4);
    ctx.fill();
    ctx.stroke();

    // Tailplane stabilizer
    ctx.fillStyle = fl.color || '#D1192A';
    ctx.beginPath();
    ctx.moveTo(-14, -2);
    ctx.lineTo(-19, -8.5);
    ctx.lineTo(-22, -8.5);
    ctx.lineTo(-18.5, 0);
    ctx.lineTo(-22, 8.5);
    ctx.lineTo(-19, 8.5);
    ctx.lineTo(-14, 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Pressurized fuselage
    ctx.fillStyle = '#FDFBF7';
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(-2, 0, 19, 3.8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Livery cheatline
    ctx.strokeStyle = fl.color || '#D1192A';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(-16, 0);
    ctx.lineTo(14, 0);
    ctx.stroke();

    // Cockpit windshield
    ctx.fillStyle = '#111111';
    ctx.beginPath();
    ctx.arc(12.5, 0, 1.7, -Math.PI * 0.45, Math.PI * 0.45);
    ctx.fill();

    // Tiny airline logo decal badge
    ctx.fillStyle = fl.color || '#D1192A';
    ctx.beginPath();
    ctx.arc(-5, 0, 3.4, 0, Math.PI * 2);
    ctx.fill();
    drawEmblemOnCanvas(ctx, fl.logo || 'wing', -5, 0, 2.5, getContrastTextForColor(fl.color || '#D1192A'));

    ctx.restore();
  }

  // ============================================================================
  // 9. INTERACTIVE CAMERA PAN & ZOOM SYSTEM
  // ============================================================================

  // The blueprint is authored in a fixed 1100x620 "world". The canvas element,
  // however, is whatever shape the device gives us — a 16:9 desktop panel or a
  // tall, narrow phone board. `view` maps one onto the other:
  //
  //   screen_css = world * zoom * fit + offset
  //
  // Backing-store pixels are allocated at devicePixelRatio so text and pins stay
  // crisp on retina phones instead of being stretched out of a 1100x620 bitmap.
  const view = {
    cssW: VIRTUAL_W,
    cssH: VIRTUAL_H,
    dpr: 1,
    fit: 1,
    offsetX: 0,
    offsetY: 0,
    uiScale: 1,
    isCompact: false
  };

  function resizeBoardCanvas() {
    const canvas = dom.boardCanvas;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const cssW = Math.max(240, Math.round(rect.width));
    const cssH = Math.max(200, Math.round(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);

    view.cssW = cssW;
    view.cssH = cssH;
    view.dpr = dpr;

    const targetW = Math.round(cssW * dpr);
    const targetH = Math.round(cssH * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    // Uniform "contain" fit keeps the terminal's proportions intact on every
    // screen — no more horizontally squashed pins on portrait phones.
    view.fit = Math.min(cssW / VIRTUAL_W, cssH / VIRTUAL_H);
    view.offsetX = (cssW - VIRTUAL_W * view.fit) / 2;
    view.offsetY = (cssH - VIRTUAL_H * view.fit) / 2;

    // When the board is drawn small, pins and labels are scaled back up in world
    // units so they keep a usable on-screen size on a phone.
    view.isCompact = cssW < 700;
    view.uiScale = Math.max(1, Math.min(2.4, 0.62 / Math.max(0.0001, view.fit)));

    updateZoomButtonLabel();
  }

  // Effective on-screen scale of one world unit, used to drop fine detail that
  // would be unreadable anyway.
  function effectiveScale() {
    return view.fit * state.camera.zoom * view.uiScale;
  }

  function applyViewTransform(context) {
    const k = view.dpr;
    context.setTransform(k, 0, 0, k, 0, 0);
    context.translate(view.offsetX, view.offsetY);
    context.scale(view.fit, view.fit);
  }

  function resetCamera() {
    state.camera.x = 0;
    state.camera.y = 0;
    // On a tall phone board the contained world leaves big empty margins, so
    // open zoomed in far enough to fill the frame and let the player pan.
    state.camera.zoom = coverZoom();
    clampCameraToWorld();
    updateZoomButtonLabel();
  }

  function coverZoom() {
    if (!view.fit) return 1;
    const worldW = VIRTUAL_W * view.fit;
    const worldH = VIRTUAL_H * view.fit;
    const need = Math.max(view.cssW / worldW, view.cssH / worldH);
    return Math.max(1, Math.min(2.2, need));
  }

  // Keeps the terminal on screen: the player can pan, but never into the void.
  function clampCameraToWorld() {
    const z = state.camera.zoom;
    const margin = 120;
    const minX = view.cssW / view.fit - VIRTUAL_W * z - margin;
    const maxX = margin;
    const minY = view.cssH / view.fit - VIRTUAL_H * z - margin;
    const maxY = margin;
    state.camera.x = Math.min(maxX, Math.max(Math.min(minX, maxX), state.camera.x));
    state.camera.y = Math.min(maxY, Math.max(Math.min(minY, maxY), state.camera.y));
  }

  function updateZoomButtonLabel() {
    if (dom.zoomResetBtn) {
      dom.zoomResetBtn.textContent = `${Math.round(state.camera.zoom * 100)}%`;
    }
  }

  function screenToWorld(clientX, clientY) {
    const rect = dom.boardCanvas.getBoundingClientRect();
    const relX = clientX - rect.left;
    const relY = clientY - rect.top;
    // Undo the fit/offset to land back in the 1100x620 authoring space
    const canvasX = (relX - view.offsetX) / view.fit;
    const canvasY = (relY - view.offsetY) / view.fit;
    return {
      x: (canvasX - state.camera.x) / state.camera.zoom,
      y: (canvasY - state.camera.y) / state.camera.zoom,
      canvasX,
      canvasY,
      relX,
      relY
    };
  }

  function worldToScreen(wx, wy) {
    const canvasX = wx * state.camera.zoom + state.camera.x;
    const canvasY = wy * state.camera.zoom + state.camera.y;
    return {
      x: canvasX * view.fit + view.offsetX,
      y: canvasY * view.fit + view.offsetY
    };
  }

  function zoomCameraAtCanvasPoint(newZoom, focalCanvasX, focalCanvasY) {
    const clamped = Math.max(state.camera.minZoom, Math.min(state.camera.maxZoom, newZoom));
    const worldFocalX = (focalCanvasX - state.camera.x) / state.camera.zoom;
    const worldFocalY = (focalCanvasY - state.camera.y) / state.camera.zoom;

    state.camera.zoom = clamped;
    state.camera.x = focalCanvasX - worldFocalX * clamped;
    state.camera.y = focalCanvasY - worldFocalY * clamped;
    clampCameraToWorld();
    updateZoomButtonLabel();
  }

  function renderGateTooltip(gate) {
    if (!gate || !dom.gateTooltip) return;
    const ownerPlayer = gate.owner !== null ? state.players[gate.owner] : null;
    const currentYield = calculateGateYield(gate);
    const weatherExp = state.concourseWeather && state.concourseWeather[gate.concourse];
    const hasWeather = weatherExp && state.round <= weatherExp;
    const hasLoyalty = gate.loyaltyUntilRound && state.round <= gate.loyaltyUntilRound;
    const isShielded = isGateShielded(gate);

    dom.gateTooltip.classList.remove('hidden');
    dom.gateTooltip.style.borderTopColor = ownerPlayer ? ownerPlayer.color : '#D1192A';
    dom.gateTooltip.innerHTML = `
      <div class="tooltip-title">${gate.id} — ${gate.name}</div>
      <div class="tooltip-owner" style="color: ${ownerPlayer ? ownerPlayer.color : '#555555'}">
        ${ownerPlayer ? t('tooltip.owner', { name: ownerPlayer.name }) : t('tooltip.unclaimed')}
      </div>
      <div class="tooltip-stat">${t('tooltip.sector', { sector: gate.concourse })}</div>
      <div class="tooltip-stat">${t('tooltip.output', { yield: currentYield })}</div>
      ${
        gate.isZGate
          ? `<div class="tooltip-stat" style="color:#8A6A00">${t('tooltip.zGate')}</div>`
          : ''
      }
      ${
        ownerPlayer && countFriendlyLinks(gate) > 0
          ? `<div class="tooltip-stat" style="color:${ownerPlayer.color}">${t('tooltip.synergy', {
              links: countFriendlyLinks(gate),
              mult: routeSynergyMultiplier(gate).toFixed(2)
            })}</div>`
          : ''
      }
      ${
        gate.loungeLevel > 0
          ? `<div class="tooltip-stat" style="color:#D1192A">${t('tooltip.lounge', { mult: gate.outputMult })}</div>`
          : ''
      }
      ${
        hasLoyalty
          ? `<div class="tooltip-stat" style="color:#8A6A00">${t('tooltip.loyalty', { rounds: gate.loyaltyUntilRound - state.round + 1 })}</div>`
          : ''
      }
      ${
        isShielded
          ? `<div class="tooltip-stat" style="color:#0B6E6E">${t('tooltip.shielded')}</div>`
          : ''
      }
      ${
        hasWeather
          ? `<div class="tooltip-stat" style="color:#1E4DB7">${t('tooltip.weather', { rounds: weatherExp - state.round + 1 })}</div>`
          : ''
      }
      ${
        isGateClosed(gate)
          ? `<div class="tooltip-stat" style="color:#8A6A00">${t('tooltip.closed', { round: gate.closedUntilRound })}</div>`
          : ''
      }
    `;

    const screenPin = worldToScreen(gate.x, gate.y - 32);
    const wrapperRect = dom.canvasWrapper.getBoundingClientRect();
    const leftPx = Math.min(wrapperRect.width - 210, Math.max(10, screenPin.x + 18));
    const topPx = Math.min(wrapperRect.height - 105, Math.max(46, screenPin.y - 24));
    dom.gateTooltip.style.left = `${leftPx}px`;
    dom.gateTooltip.style.top = `${topPx}px`;
  }

  function initCameraInteractions() {
    // Mouse Down -> Start Pan
    dom.boardCanvas.addEventListener('mousedown', (evt) => {
      if (evt.button !== 0) return;
      const rect = dom.boardCanvas.getBoundingClientRect();
      const canvasX = ((evt.clientX - rect.left) / rect.width) * VIRTUAL_W;
      const canvasY = ((evt.clientY - rect.top) / rect.height) * VIRTUAL_H;

      state.camera.isDragging = true;
      state.camera.dragStartX = canvasX;
      state.camera.dragStartY = canvasY;
      state.camera.camStartX = state.camera.x;
      state.camera.camStartY = state.camera.y;
      state.camera.movedDistance = 0;
      dom.boardCanvas.classList.add('dragging');
    });

    // Mouse Move -> Pan Camera OR Hover Gate Pin
    window.addEventListener('mousemove', (evt) => {
      if (state.camera.isDragging) {
        const rect = dom.boardCanvas.getBoundingClientRect();
        const canvasX = ((evt.clientX - rect.left) / rect.width) * VIRTUAL_W;
        const canvasY = ((evt.clientY - rect.top) / rect.height) * VIRTUAL_H;
        const dx = canvasX - state.camera.dragStartX;
        const dy = canvasY - state.camera.dragStartY;
        state.camera.movedDistance = Math.hypot(dx, dy);

        if (state.camera.movedDistance > 3) {
          state.camera.x = state.camera.camStartX + dx;
          state.camera.y = state.camera.camStartY + dy;
          dom.gateTooltip.classList.add('hidden');
          return;
        }
      }
    });

    dom.boardCanvas.addEventListener('mousemove', (evt) => {
      if (state.camera.isDragging && state.camera.movedDistance > 4) return;
      if (state.gates.length === 0) return;

      const pos = screenToWorld(evt.clientX, evt.clientY);
      const gate = findGateAtWorldCoords(pos.x, pos.y, false);
      state.hoveredGateId = gate ? gate.id : null;

      if (gate) {
        renderGateTooltip(gate);
      } else {
        dom.gateTooltip.classList.add('hidden');
      }
    });

    window.addEventListener('mouseup', () => {
      if (state.camera.isDragging) {
        state.camera.isDragging = false;
        dom.boardCanvas.classList.remove('dragging');
      }
    });

    dom.boardCanvas.addEventListener('mouseleave', () => {
      state.hoveredGateId = null;
      dom.gateTooltip.classList.add('hidden');
    });

    // Click Gate Pin (only if mouse did not drag to pan)
    dom.boardCanvas.addEventListener('click', (evt) => {
      if (state.camera.movedDistance > 6) return;
      const pos = screenToWorld(evt.clientX, evt.clientY);
      const gate = findGateAtWorldCoords(pos.x, pos.y, false);
      if (gate) {
        handleCanvasGateClick(gate);
      }
    });

    // --- Mobile Touch Gestures: 1-Finger Drag Pan, 2-Finger Pinch Zoom, Tap Gate ---
    let touchMode = null; // 'pan' | 'pinch'
    let pinchStartDist = 0;
    let pinchStartZoom = 1;
    let lastTouchClientX = 0;
    let lastTouchClientY = 0;
    let touchMovedPx = 0;
    let lastTapHandledAt = 0;

    dom.boardCanvas.addEventListener(
      'touchstart',
      (evt) => {
        if (evt.touches.length === 1) {
          const t0 = evt.touches[0];
          const rect = dom.boardCanvas.getBoundingClientRect();
          const canvasX = ((t0.clientX - rect.left) / rect.width) * VIRTUAL_W;
          const canvasY = ((t0.clientY - rect.top) / rect.height) * VIRTUAL_H;

          touchMode = 'pan';
          lastTouchClientX = t0.clientX;
          lastTouchClientY = t0.clientY;
          touchMovedPx = 0;
          state.camera.isDragging = true;
          state.camera.dragStartX = canvasX;
          state.camera.dragStartY = canvasY;
          state.camera.camStartX = state.camera.x;
          state.camera.camStartY = state.camera.y;
          state.camera.movedDistance = 0;
        } else if (evt.touches.length >= 2) {
          evt.preventDefault();
          touchMode = 'pinch';
          state.camera.isDragging = false;
          const t0 = evt.touches[0];
          const t1 = evt.touches[1];
          pinchStartDist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
          pinchStartZoom = state.camera.zoom;
          touchMovedPx = 99;
        }
      },
      { passive: false }
    );

    dom.boardCanvas.addEventListener(
      'touchmove',
      (evt) => {
        if (touchMode === 'pan' && evt.touches.length === 1) {
          const t0 = evt.touches[0];
          const rect = dom.boardCanvas.getBoundingClientRect();
          const canvasX = ((t0.clientX - rect.left) / rect.width) * VIRTUAL_W;
          const canvasY = ((t0.clientY - rect.top) / rect.height) * VIRTUAL_H;
          const dx = canvasX - state.camera.dragStartX;
          const dy = canvasY - state.camera.dragStartY;
          touchMovedPx = Math.hypot(t0.clientX - lastTouchClientX, t0.clientY - lastTouchClientY);
          state.camera.movedDistance = Math.hypot(dx, dy);

          if (touchMovedPx > 5) {
            evt.preventDefault();
            state.camera.x = state.camera.camStartX + dx;
            state.camera.y = state.camera.camStartY + dy;
            dom.gateTooltip.classList.add('hidden');
          }
        } else if (touchMode === 'pinch' && evt.touches.length >= 2) {
          evt.preventDefault();
          const t0 = evt.touches[0];
          const t1 = evt.touches[1];
          const curDist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
          if (pinchStartDist > 8) {
            const scale = curDist / pinchStartDist;
            const midX = (t0.clientX + t1.clientX) / 2;
            const midY = (t0.clientY + t1.clientY) / 2;
            const focal = screenToWorld(midX, midY);
            zoomCameraAtCanvasPoint(pinchStartZoom * scale, focal.canvasX, focal.canvasY);
          }
        }
      },
      { passive: false }
    );

    const handleTouchEnd = (evt) => {
      if (touchMode === 'pan' && touchMovedPx < 10 && evt.changedTouches.length > 0) {
        const now = Date.now();
        if (now - lastTapHandledAt > 220) {
          lastTapHandledAt = now;
          const t0 = evt.changedTouches[0];
          const pos = screenToWorld(t0.clientX, t0.clientY);
          const gate = findGateAtWorldCoords(pos.x, pos.y, true);
          state.hoveredGateId = gate ? gate.id : null;
          if (gate) {
            renderGateTooltip(gate);
            handleCanvasGateClick(gate);
          } else {
            dom.gateTooltip.classList.add('hidden');
          }
        }
      }
      if (evt.touches.length === 0) {
        touchMode = null;
        state.camera.isDragging = false;
        dom.boardCanvas.classList.remove('dragging');
      }
    };

    dom.boardCanvas.addEventListener('touchend', handleTouchEnd);
    dom.boardCanvas.addEventListener('touchcancel', handleTouchEnd);

    // Wheel Zoom centered at cursor
    dom.boardCanvas.addEventListener(
      'wheel',
      (evt) => {
        evt.preventDefault();
        const pos = screenToWorld(evt.clientX, evt.clientY);
        const zoomFactor = evt.deltaY < 0 ? 1.12 : 0.89;
        zoomCameraAtCanvasPoint(state.camera.zoom * zoomFactor, pos.canvasX, pos.canvasY);
      },
      { passive: false }
    );

    // On-screen Camera Buttons
    dom.zoomInBtn.addEventListener('click', () => {
      zoomCameraAtCanvasPoint(state.camera.zoom * 1.2, VIRTUAL_W / 2, VIRTUAL_H / 2);
    });
    dom.zoomOutBtn.addEventListener('click', () => {
      zoomCameraAtCanvasPoint(state.camera.zoom / 1.2, VIRTUAL_W / 2, VIRTUAL_H / 2);
    });
    dom.zoomResetBtn.addEventListener('click', () => {
      resetCamera();
    });
  }

  function findGateAtWorldCoords(wx, wy, isTouch = false) {
    // Guarantee >= 44x44px touch target hitboxes on mobile / touch screens
    const isNarrowScreen = window.innerWidth <= 768;
    const touchExpand = isTouch || isNarrowScreen ? Math.max(32, 26 / state.camera.zoom) : 0;
    const headRadius = Math.max(24, touchExpand);
    const baseRadius = Math.max(22, touchExpand);

    let bestGate = null;
    let bestDist = Infinity;

    for (const g of state.gates) {
      const pinHeadY = g.y - 24;
      const distHead = Math.hypot(wx - g.x, wy - pinHeadY);
      const distBase = Math.hypot(wx - g.x, wy - g.y);
      const minDist = Math.min(distHead, distBase);
      if ((distHead <= headRadius || distBase <= baseRadius) && minDist < bestDist) {
        bestDist = minDist;
        bestGate = g;
      }
    }
    return bestGate;
  }

  // ============================================================================
  // 10. NEWS TICKER ENGINE
  // ============================================================================

  function renderNewsTicker() {
    if (!dom.tickerTrack) return;
    const activeList =
      state.headlines && state.headlines.length > 0 ? state.headlines : getLocalizedHeadlines();
    const itemsHtml = activeList
      .map((hl) => `<span class="ticker-item">${hl}</span>`)
      .join('');
    // Duplicate track content once for seamless infinite CSS scroll loop
    dom.tickerTrack.innerHTML = itemsHtml + itemsHtml;
  }

  function pushLiveHeadline(headlineText) {
    sfx.playTeletype();
    state.headlines.unshift(headlineText);
    if (state.headlines.length > 22) {
      state.headlines.pop();
    }
    renderNewsTicker();
  }

  // ============================================================================
  // 11. MENU INITIALIZATION & UI EVENT LISTENERS
  // ============================================================================

  function getCurrentlyEditingSlot() {
    const idx = state.config.mode === 'coop' ? state.config.editingSlotIndex : 0;
    return state.config.coopPlayers[idx] || state.config.coopPlayers[0];
  }

  /**
   * Synchronizes the Setup Form controls (Name input, Color Swatches, 33-Icon
   * Emblem Grid, Captain Slot Tabs, and Co-Op Flight Manifest preview) with
   * the active game mode ('solo' vs 'coop') and selected Captain slot.
   */
  // ============================================================================
  // 11a. ONLINE P2P MULTIPLAYER ENGINE (PEERJS WEBRTC — HOST AUTHORITATIVE)
  // ============================================================================

  const ROOM_PREFIXES = ['TWA', 'PAA', 'JFK', 'IDL', 'SST', 'CAB', 'JET', 'LAX', 'ORD', 'MIA'];

  // ---------------------------------------------------------------------------
  // NET: signalling ladder, ICE/TURN configuration and link diagnostics.
  //
  // WebRTC needs two separate things to work across the open internet:
  //   1. A SIGNALLING server (PeerJS cloud by default) to exchange handshakes.
  //   2. ICE servers — STUN to discover your public address, and a TURN relay
  //      for the ~10-20% of players behind symmetric NAT / strict firewalls
  //      where a direct peer-to-peer tunnel simply cannot be opened.
  //
  // Both are overridable at runtime so a player can point the game at their own
  // infrastructure without touching the source:
  //   ?signal=host:port/path     custom PeerJS signalling server
  //   ?turn=turn:host:3478|user|pass   custom TURN relay (repeatable, comma-sep)
  // Overrides persist in localStorage so they survive a reload.
  // ---------------------------------------------------------------------------
  const NET = {
    STORAGE_KEY: 'airSuperiorityNetConfig',

    // Signalling ladder — tried in order whenever a socket fails to open.
    servers: [
      { host: '0.peerjs.com', port: 443, path: '/', secure: true, label: 'PEERJS CLOUD' },
      { host: 'peerjs.92k.de', port: 443, path: '/', secure: true, label: 'MIRROR 92K' }
    ],

    // STUN only by default: it is free, reliable and resolves ~80-90% of pairs.
    // The old free public TURN relays (openrelay.metered.ca) are dead — that
    // host now resolves to the blackhole address 192.0.2.1 — so a relay is
    // opt-in via a custom TURN entry or a credentials API URL below.
    baseIce: [
      { urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] },
      { urls: 'stun:stun.cloudflare.com:3478' },
      { urls: 'stun:stun.relay.metered.ca:80' }
    ],

    customServer: null,
    customTurn: [],
    turnApiUrl: '',
    dynamicIce: [],
    activeServerIndex: 0,
    lastDiagnostics: null,

    loadOverrides() {
      let saved = {};
      try {
        saved = JSON.parse(window.localStorage.getItem(this.STORAGE_KEY) || '{}') || {};
      } catch (_e) {
        saved = {};
      }

      const params = new URLSearchParams(window.location.search);
      const signalParam = params.get('signal');
      const turnParam = params.get('turn');

      const turnApiParam = params.get('turnapi');
      if (signalParam) saved.signal = signalParam;
      if (turnParam) saved.turn = turnParam;
      if (turnApiParam) saved.turnApi = turnApiParam;
      if (params.get('resetnet') === '1') {
        saved = {};
      }

      if (saved.signal) this.customServer = this.parseSignalString(saved.signal);
      if (saved.turn) this.customTurn = this.parseTurnString(saved.turn);
      if (saved.turnApi) this.turnApiUrl = String(saved.turnApi);

      if (signalParam || turnParam || turnApiParam || params.get('resetnet') === '1') {
        try {
          window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(saved));
        } catch (_e) {}
      }
    },

    // "host:port/path" or "https://host/path"
    parseSignalString(raw) {
      try {
        const clean = String(raw).trim().replace(/^https?:\/\//i, '');
        const slash = clean.indexOf('/');
        const authority = slash >= 0 ? clean.slice(0, slash) : clean;
        const path = slash >= 0 ? clean.slice(slash) : '/';
        const [host, portStr] = authority.split(':');
        if (!host) return null;
        return {
          host,
          port: portStr ? parseInt(portStr, 10) : 443,
          path: path || '/',
          secure: !portStr || portStr === '443',
          label: 'CUSTOM TOWER'
        };
      } catch (_e) {
        return null;
      }
    },

    // "turn:host:3478|user|pass , turns:host:5349|user|pass"
    parseTurnString(raw) {
      return String(raw)
        .split(',')
        .map((chunk) => {
          const [urls, username, credential] = chunk.split('|').map((x) => (x || '').trim());
          if (!urls) return null;
          return username ? { urls, username, credential } : { urls };
        })
        .filter(Boolean);
    },

    saveCustom(signalStr, turnStr, turnApiStr) {
      const payload = {};
      if (signalStr) payload.signal = signalStr;
      if (turnStr) payload.turn = turnStr;
      if (turnApiStr) payload.turnApi = turnApiStr;
      try {
        window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(payload));
      } catch (_e) {}
      this.customServer = signalStr ? this.parseSignalString(signalStr) : null;
      this.customTurn = turnStr ? this.parseTurnString(turnStr) : [];
      this.turnApiUrl = turnApiStr || '';
      this.dynamicIce = [];
    },

    // Most TURN providers (Metered, Cloudflare, Twilio, self-hosted coturn with
    // a tiny endpoint) can hand back a ready-made iceServers array. Fetching it
    // at connect time keeps short-lived credentials valid.
    refreshDynamicIce() {
      if (!this.turnApiUrl) return Promise.resolve([]);
      return fetch(this.turnApiUrl, { cache: 'no-store' })
        .then((res) => (res.ok ? res.json() : []))
        .then((data) => {
          const list = Array.isArray(data) ? data : data && data.iceServers ? data.iceServers : [];
          this.dynamicIce = list.filter((e) => e && e.urls);
          return this.dynamicIce;
        })
        .catch(() => {
          this.dynamicIce = [];
          return [];
        });
    },

    serverList() {
      return this.customServer ? [this.customServer, ...this.servers] : this.servers;
    },

    iceServers() {
      return [...this.baseIce, ...this.customTurn, ...this.dynamicIce];
    },

    hasRelayConfigured() {
      return this.customTurn.length > 0 || this.dynamicIce.length > 0;
    },

    serverLabel(index) {
      const list = this.serverList();
      const srv = list[index % list.length];
      return srv ? srv.label : 'UNKNOWN';
    },

    // PeerJS options for a given rung of the signalling ladder. `secure: true`
    // with port 443 guarantees a wss:// handshake, so an HTTPS page (GitHub
    // Pages) never trips the browser's mixed-content blocker.
    peerOptions(index) {
      const list = this.serverList();
      const srv = list[index % list.length];
      return {
        host: srv.host,
        port: srv.port,
        path: srv.path,
        secure: srv.secure,
        debug: 0,
        config: {
          iceServers: this.iceServers(),
          iceCandidatePoolSize: 4,
          sdpSemantics: 'unified-plan'
        }
      };
    },

    // Gathers ICE candidates with the live configuration so a player can see
    // exactly which leg of the connection is failing before blaming the game.
    runDiagnostics(onUpdate) {
      const report = {
        peerScript: typeof window.Peer === 'function',
        secureContext: window.isSecureContext !== false,
        webrtc: typeof window.RTCPeerConnection === 'function',
        host: false,
        srflx: false,
        relay: false,
        signalling: null,
        done: false
      };
      const push = () => onUpdate && onUpdate({ ...report });
      push();

      if (!report.webrtc) {
        report.done = true;
        push();
        return Promise.resolve(report);
      }

      return new Promise((resolve) => {
        let pc = null;
        try {
          pc = new RTCPeerConnection({ iceServers: this.iceServers(), iceCandidatePoolSize: 2 });
        } catch (_e) {
          report.done = true;
          push();
          resolve(report);
          return;
        }

        const finish = () => {
          if (report.done) return;
          report.done = true;
          try {
            pc.close();
          } catch (_e) {}
          this.lastDiagnostics = report;
          push();
          resolve(report);
        };

        pc.onicecandidate = (evt) => {
          if (!evt.candidate) {
            finish();
            return;
          }
          const type = evt.candidate.type || '';
          if (type === 'host') report.host = true;
          if (type === 'srflx') report.srflx = true;
          if (type === 'relay') report.relay = true;
          push();
        };

        try {
          pc.createDataChannel('probe');
          pc.createOffer()
            .then((offer) => pc.setLocalDescription(offer))
            .catch(() => finish());
        } catch (_e) {
          finish();
        }

        // ICE gathering can hang behind aggressive firewalls — cap the probe.
        window.setTimeout(finish, 9000);
      });
    }
  };

  NET.loadOverrides();

  function generateMemorableRoomCode() {
    const prefix = ROOM_PREFIXES[Math.floor(Math.random() * ROOM_PREFIXES.length)];
    const num = Math.floor(100 + Math.random() * 900);
    return `${prefix}-${num}`;
  }

  function normalizeRoomCode(raw) {
    const clean = String(raw || '')
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '');
    if (clean.length >= 6) {
      return `${clean.slice(0, 3)}-${clean.slice(3, 6)}`;
    }
    return String(raw || '').toUpperCase().trim();
  }

  function roomCodeToPeerId(code) {
    const norm = normalizeRoomCode(code).replace(/[^A-Z0-9]/g, '');
    return `air-sup-p2p-${norm}`;
  }

  function buildInviteLink(code) {
    const url = new URL(window.location.href);
    url.searchParams.set('room', normalizeRoomCode(code));
    url.hash = '';
    return url.toString();
  }

  // Human-readable explanation for every PeerJS error type.
  function describePeerError(err) {
    const type = (err && err.type) || 'unknown';
    const map = {
      'browser-incompatible': 'This browser cannot run WebRTC. Try Chrome, Edge, Safari or Firefox.',
      'disconnected': 'Lost the signalling socket. Reconnecting…',
      'invalid-id': 'That room code contains characters the tower cannot route.',
      'invalid-key': 'The signalling server rejected this build’s API key.',
      'network': 'Could not reach the signalling tower (network blocked or offline).',
      'peer-unavailable': 'No Control Tower is broadcasting on that room code right now.',
      'ssl-unavailable': 'The signalling server refused a secure (wss://) handshake.',
      'server-error': 'The signalling tower returned an error. Trying a backup tower…',
      'socket-error': 'The signalling socket dropped. Trying a backup tower…',
      'socket-closed': 'The signalling socket closed unexpectedly. Reconnecting…',
      'unavailable-id': 'That room code is still held by a previous session.',
      'webrtc': 'WebRTC could not open a data channel — a TURN relay is likely required.'
    };
    return map[type] || `Unexpected link failure (${type}).`;
  }

  const p2p = {
    peer: null,
    role: null, // 'host' | 'guest'
    hostConn: null, // used by guest
    guestConns: new Map(), // peerId -> DataConnection (used by host)
    lobbyRoster: [], // [{ peerId, name, color, colorName, logo, isHost }]
    localPeerId: 'HOST',
    joinStatus: 'idle', // 'idle' | 'connecting' | 'approved' | 'error' | 'full'
    hostOnline: false,
    statusDetail: '',
    serverIndex: 0,
    openTimer: null,
    joinTimer: null,
    retryTimer: null,
    keepAliveTimer: null,
    reconnectAttempts: 0,
    idAttempts: 0,
    joinAttempts: 0,
    lastPongAt: 0,

    getLocalProfile() {
      const slot = state.config.coopPlayers[0];
      return {
        name: (slot.name || state.config.humanName || 'TRANS WORLD AIR').toUpperCase(),
        color: slot.color || state.config.humanColor || '#D1192A',
        colorName: slot.colorName || 'TWA Crimson',
        logo: slot.logo || state.config.humanLogo || 'wing'
      };
    },

    setDetail(text) {
      this.statusDetail = text || '';
      renderOnlineLobbyUI();
    },

    clearTimers() {
      [this.openTimer, this.joinTimer, this.retryTimer, this.keepAliveTimer].forEach((id) => {
        if (id) window.clearTimeout(id);
      });
      if (this.keepAliveTimer) window.clearInterval(this.keepAliveTimer);
      this.openTimer = null;
      this.joinTimer = null;
      this.retryTimer = null;
      this.keepAliveTimer = null;
    },

    shutdown() {
      this.clearTimers();
      this.guestConns.forEach((conn) => {
        try {
          conn.close();
        } catch (_e) {}
      });
      this.guestConns.clear();
      if (this.hostConn) {
        try {
          this.hostConn.close();
        } catch (_e) {}
        this.hostConn = null;
      }
      if (this.peer) {
        try {
          this.peer.destroy();
        } catch (_e) {}
        this.peer = null;
      }
      this.role = null;
      this.hostOnline = false;
      this.joinStatus = 'idle';
      this.reconnectAttempts = 0;
      this.idAttempts = 0;
      this.joinAttempts = 0;
    },

    // Data channels can look "open" long after the far end has gone away, so
    // both sides exchange a heartbeat and flag silence in the lobby UI.
    startKeepAlive() {
      if (this.keepAliveTimer) window.clearInterval(this.keepAliveTimer);
      this.lastPongAt = Date.now();
      this.keepAliveTimer = window.setInterval(() => {
        const now = Date.now();
        if (this.role === 'host') {
          this.guestConns.forEach((conn) => {
            if (conn.open) {
              try {
                conn.send({ type: 'PING', t: now });
              } catch (_e) {}
            }
          });
        } else if (this.role === 'guest' && this.hostConn && this.hostConn.open) {
          try {
            this.hostConn.send({ type: 'PING', t: now });
          } catch (_e) {}
          if (now - this.lastPongAt > 22000) {
            this.setDetail(t('online.detailSilence'));
          }
        }
      }, 5000);
    },

    // ---- HOST ---------------------------------------------------------------
    initHostRoom(forceNewCode = false) {
      if (forceNewCode || !state.config.roomCode) {
        state.config.roomCode = generateMemorableRoomCode();
      }
      this.shutdown();
      this.role = 'host';
      this.localPeerId = 'HOST';
      this.serverIndex = 0;
      this.idAttempts = 0;
      const prof = this.getLocalProfile();
      this.lobbyRoster = [
        {
          peerId: 'HOST',
          name: prof.name,
          color: prof.color,
          colorName: prof.colorName,
          logo: prof.logo,
          isHost: true
        }
      ];
      renderOnlineLobbyUI();

      if (typeof window.Peer !== 'function') {
        this.hostOnline = false;
        this.setDetail(t('online.detailNoLib'));
        return;
      }

      if (NET.turnApiUrl && NET.dynamicIce.length === 0) {
        this.setDetail(t('online.detailFetchRelay'));
        NET.refreshDynamicIce().then(() => this.openHostPeer());
      } else {
        this.openHostPeer();
      }
    },

    openHostPeer() {
      const targetPeerId = roomCodeToPeerId(state.config.roomCode);
      this.setDetail(
        t('online.detailOpening', { server: NET.serverLabel(this.serverIndex) })
      );

      let peer;
      try {
        peer = new window.Peer(targetPeerId, NET.peerOptions(this.serverIndex));
      } catch (_err) {
        this.hostOnline = false;
        this.setDetail(describePeerError({ type: 'network' }));
        return;
      }
      this.peer = peer;

      // If the socket never opens, drop down to the next tower automatically.
      if (this.openTimer) window.clearTimeout(this.openTimer);
      this.openTimer = window.setTimeout(() => {
        if (this.peer === peer && !this.hostOnline) {
          this.advanceHostServer(t('online.detailTimeout'));
        }
      }, 12000);

      peer.on('open', () => {
        if (this.peer !== peer) return;
        window.clearTimeout(this.openTimer);
        this.hostOnline = true;
        this.reconnectAttempts = 0;
        this.idAttempts = 0;
        this.setDetail(
          t('online.detailLive', {
            server: NET.serverLabel(this.serverIndex),
            code: state.config.roomCode
          })
        );
        this.startKeepAlive();
      });

      peer.on('connection', (conn) => {
        this.setupIncomingGuestConnection(conn);
      });

      // PeerJS parks the signalling socket when idle; without this nobody can
      // join a lobby that has been sitting open for a couple of minutes.
      peer.on('disconnected', () => {
        if (this.peer !== peer || peer.destroyed) return;
        this.hostOnline = false;
        this.setDetail(t('online.detailReconnecting'));
        if (this.reconnectAttempts < 6) {
          this.reconnectAttempts++;
          window.setTimeout(() => {
            try {
              if (!peer.destroyed) peer.reconnect();
            } catch (_e) {}
          }, 900 * this.reconnectAttempts);
        } else {
          this.advanceHostServer(t('online.detailDropped'));
        }
      });

      peer.on('close', () => {
        if (this.peer !== peer) return;
        this.hostOnline = false;
        renderOnlineLobbyUI();
      });

      peer.on('error', (err) => {
        if (this.peer !== peer) return;
        const type = (err && err.type) || 'unknown';

        if (type === 'unavailable-id') {
          // A stale registration from a previous session usually expires in a
          // few seconds, so retry the SAME code before changing it on the host.
          this.idAttempts++;
          if (this.idAttempts <= 3) {
            this.setDetail(t('online.detailIdBusy', { n: this.idAttempts }));
            try {
              peer.destroy();
            } catch (_e) {}
            this.retryTimer = window.setTimeout(() => this.openHostPeer(), 1800);
          } else {
            state.config.roomCode = generateMemorableRoomCode();
            this.idAttempts = 0;
            this.setDetail(t('online.detailNewCode', { code: state.config.roomCode }));
            try {
              peer.destroy();
            } catch (_e) {}
            this.retryTimer = window.setTimeout(() => this.openHostPeer(), 600);
          }
          return;
        }

        if (['network', 'server-error', 'socket-error', 'socket-closed', 'ssl-unavailable'].includes(type)) {
          this.advanceHostServer(describePeerError(err));
          return;
        }

        this.hostOnline = false;
        this.setDetail(describePeerError(err));
      });
    },

    advanceHostServer(reason) {
      const list = NET.serverList();
      try {
        if (this.peer) this.peer.destroy();
      } catch (_e) {}
      this.hostOnline = false;

      if (this.serverIndex + 1 < list.length) {
        this.serverIndex++;
        this.setDetail(`${reason} ${t('online.detailFallback', { server: NET.serverLabel(this.serverIndex) })}`);
        this.retryTimer = window.setTimeout(() => this.openHostPeer(), 700);
      } else {
        this.serverIndex = 0;
        this.setDetail(`${reason} ${t('online.detailAllDown')}`);
      }
    },

    setupIncomingGuestConnection(conn) {
      conn.on('data', (data) => {
        if (!data || typeof data !== 'object') return;

        if (data.type === 'PING') {
          try {
            conn.send({ type: 'PONG', t: data.t });
          } catch (_e) {}
          return;
        }
        if (data.type === 'PONG') {
          this.lastPongAt = Date.now();
          return;
        }

        if (data.type === 'JOIN_REQUEST') {
          const requiredPass = dom.onlineHostPassword ? dom.onlineHostPassword.value.trim() : '';
          const suppliedPass = String(data.password || '').trim();
          if (requiredPass && suppliedPass !== requiredPass) {
            conn.send({ type: 'JOIN_REJECTED', reason: 'BAD_PASSWORD' });
            window.setTimeout(() => {
              try {
                conn.close();
              } catch (_e) {}
            }, 250);
            return;
          }
          if (this.lobbyRoster.length >= 4 || state.status !== 'MENU') {
            conn.send({
              type: 'JOIN_REJECTED',
              reason: state.status !== 'MENU' ? 'IN_PROGRESS' : 'ROOM_FULL'
            });
            window.setTimeout(() => {
              try {
                conn.close();
              } catch (_e) {}
            }, 250);
            return;
          }

          this.guestConns.set(conn.peer, conn);
          const prof = data.profile || {};
          const others = this.lobbyRoster.filter((r) => r.peerId !== conn.peer);
          const usedColors = new Set(others.map((r) => String(r.color).toUpperCase()));
          let assignedColor = String(prof.color || '#1E4DB7');
          let assignedColorName = prof.colorName || liveryNameFor(assignedColor);
          if (usedColors.has(assignedColor.toUpperCase())) {
            const alt = AI_COLOR_PALETTE.find((c) => !usedColors.has(c.toUpperCase()));
            if (alt) {
              assignedColor = alt;
              assignedColorName = liveryNameFor(alt, alt);
            }
          }

          // Two captains flying under the same callsign makes the board and the
          // dispatch log unreadable, so duplicates get a numbered suffix.
          let assignedName = String(prof.name || `CAPTAIN 0${this.lobbyRoster.length + 1}`)
            .toUpperCase()
            .slice(0, 22);
          const usedNames = new Set(others.map((r) => r.name));
          if (usedNames.has(assignedName)) {
            const suffixes = ['II', 'III', 'IV'];
            for (const sfx of suffixes) {
              const candidate = `${assignedName.slice(0, 19)} ${sfx}`;
              if (!usedNames.has(candidate)) {
                assignedName = candidate;
                break;
              }
            }
          }

          const existingIdx = this.lobbyRoster.findIndex((r) => r.peerId === conn.peer);
          const entry = {
            peerId: conn.peer,
            name: assignedName,
            color: assignedColor,
            colorName: assignedColorName,
            logo: prof.logo || 'globe',
            isHost: false
          };
          if (existingIdx >= 0) {
            this.lobbyRoster[existingIdx] = entry;
          } else {
            this.lobbyRoster.push(entry);
          }

          sfx.playPAChime();
          conn.send({
            type: 'JOIN_ACCEPTED',
            assignedPeerId: conn.peer,
            roster: this.lobbyRoster,
            maxRounds: state.config.maxRounds
          });
          this.broadcastLobbyRoster();
          this.setDetail(t('online.detailGuestJoined', { name: entry.name }));
          renderOnlineLobbyUI();
          syncSetupFormUI();
          return;
        }

        if (data.type === 'PROFILE_UPDATE' && state.status === 'MENU') {
          const entry = this.lobbyRoster.find((r) => r.peerId === conn.peer);
          if (entry && data.profile) {
            entry.name = String(data.profile.name || entry.name)
              .toUpperCase()
              .slice(0, 22);
            entry.color = data.profile.color || entry.color;
            entry.colorName = data.profile.colorName || entry.colorName;
            entry.logo = data.profile.logo || entry.logo;
            this.broadcastLobbyRoster();
            renderOnlineLobbyUI();
          }
          return;
        }

        if (data.type === 'ACTION') {
          handleRemoteGuestAction(conn.peer, data.action, data.payload || {});
        }
      });

      const handleDisconnect = () => {
        this.guestConns.delete(conn.peer);
        if (state.status === 'MENU') {
          this.lobbyRoster = this.lobbyRoster.filter((r) => r.peerId !== conn.peer);
          this.broadcastLobbyRoster();
          renderOnlineLobbyUI();
          syncSetupFormUI();
        } else {
          const p = state.players.find((pl) => pl.peerId === conn.peer);
          if (p && !p.isDisconnected) {
            p.isDisconnected = true;
            addFlightLog(
              `<strong>${p.name}</strong> lost radio contact — flagged as <em>${t('online.inactiveHoldingChip')}</em>.`
            );
            pushLiveHeadline(
              `RADIO SILENCE: ${p.name} placed in Holding Pattern (Inactive) by Control Tower.`
            );
            updateAllUI();
            this.broadcastAuthoritativeState();
            if (state.status === 'PLAYING' && state.currentPlayerIndex === p.index) {
              window.setTimeout(() => advanceTurn(), 650);
            }
          }
        }
      };

      conn.on('close', handleDisconnect);
      conn.on('error', handleDisconnect);
    },

    broadcastLobbyRoster() {
      if (this.role !== 'host') return;
      const packet = {
        type: 'LOBBY_UPDATE',
        roster: this.lobbyRoster,
        maxRounds: state.config.maxRounds
      };
      this.guestConns.forEach((conn) => {
        if (conn.open) conn.send(packet);
      });
    },

    syncLocalProfileToLobby() {
      const prof = this.getLocalProfile();
      if (this.role === 'host') {
        if (this.lobbyRoster.length > 0) {
          this.lobbyRoster[0].name = prof.name;
          this.lobbyRoster[0].color = prof.color;
          this.lobbyRoster[0].colorName = prof.colorName;
          this.lobbyRoster[0].logo = prof.logo;
          this.broadcastLobbyRoster();
          renderOnlineLobbyUI();
        }
      } else if (this.role === 'guest' && this.hostConn && this.hostConn.open) {
        this.hostConn.send({
          type: 'PROFILE_UPDATE',
          profile: prof
        });
      }
    },

    // ---- GUEST --------------------------------------------------------------
    connectToHostRoom(rawCode, rawPass) {
      const cleanCode = normalizeRoomCode(rawCode);
      if (!cleanCode || cleanCode.length < 4) {
        this.joinStatus = 'error';
        this.setDetail(t('online.detailBadCode'));
        return;
      }
      if (typeof window.Peer !== 'function') {
        this.joinStatus = 'error';
        this.setDetail(t('online.detailNoLib'));
        return;
      }

      this.shutdown();
      this.role = 'guest';
      this.joinStatus = 'connecting';
      this.serverIndex = 0;
      this.joinAttempts = 0;
      this.pendingCode = cleanCode;
      this.pendingPass = String(rawPass || '').trim();
      renderOnlineLobbyUI();
      syncSetupFormUI();

      if (NET.turnApiUrl && NET.dynamicIce.length === 0) {
        this.setDetail(t('online.detailFetchRelay'));
        NET.refreshDynamicIce().then(() => this.openGuestPeer());
      } else {
        this.openGuestPeer();
      }
    },

    openGuestPeer() {
      const hostPeerId = roomCodeToPeerId(this.pendingCode);
      this.setDetail(t('online.detailOpening', { server: NET.serverLabel(this.serverIndex) }));

      let peer;
      try {
        peer = new window.Peer(undefined, NET.peerOptions(this.serverIndex));
      } catch (_e) {
        this.joinStatus = 'error';
        this.setDetail(describePeerError({ type: 'network' }));
        return;
      }
      this.peer = peer;

      if (this.openTimer) window.clearTimeout(this.openTimer);
      this.openTimer = window.setTimeout(() => {
        if (this.peer === peer && this.joinStatus === 'connecting' && !this.hostConn) {
          this.advanceGuestServer(t('online.detailTimeout'));
        }
      }, 12000);

      peer.on('open', (myId) => {
        if (this.peer !== peer) return;
        window.clearTimeout(this.openTimer);
        this.localPeerId = myId;
        this.setDetail(t('online.detailDialing', { code: this.pendingCode }));
        this.dialHost(peer, hostPeerId);
      });

      peer.on('disconnected', () => {
        if (this.peer !== peer || peer.destroyed) return;
        try {
          peer.reconnect();
        } catch (_e) {}
      });

      peer.on('error', (err) => {
        if (this.peer !== peer) return;
        const type = (err && err.type) || 'unknown';

        if (type === 'peer-unavailable') {
          // The host may be mid-reconnect — retry a few times before failing.
          this.joinAttempts++;
          if (this.joinAttempts <= 3) {
            this.setDetail(t('online.detailRetryHost', { n: this.joinAttempts }));
            this.retryTimer = window.setTimeout(() => this.dialHost(peer, roomCodeToPeerId(this.pendingCode)), 2500);
          } else {
            this.joinStatus = 'error';
            this.setDetail(describePeerError(err));
            sfx.playError();
          }
          renderOnlineLobbyUI();
          return;
        }

        if (['network', 'server-error', 'socket-error', 'socket-closed', 'ssl-unavailable'].includes(type)) {
          this.advanceGuestServer(describePeerError(err));
          return;
        }

        this.joinStatus = 'error';
        this.setDetail(describePeerError(err));
        renderOnlineLobbyUI();
        syncSetupFormUI();
        sfx.playError();
      });
    },

    advanceGuestServer(reason) {
      const list = NET.serverList();
      try {
        if (this.peer) this.peer.destroy();
      } catch (_e) {}
      this.hostConn = null;

      if (this.serverIndex + 1 < list.length) {
        this.serverIndex++;
        this.setDetail(`${reason} ${t('online.detailFallback', { server: NET.serverLabel(this.serverIndex) })}`);
        this.retryTimer = window.setTimeout(() => this.openGuestPeer(), 700);
      } else {
        this.serverIndex = 0;
        this.joinStatus = 'error';
        this.setDetail(`${reason} ${t('online.detailAllDown')}`);
        renderOnlineLobbyUI();
        syncSetupFormUI();
      }
    },

    dialHost(peer, hostPeerId) {
      if (!peer || peer.destroyed) return;
      let conn;
      try {
        conn = peer.connect(hostPeerId, { reliable: true, serialization: 'json' });
      } catch (_e) {
        this.joinStatus = 'error';
        this.setDetail(describePeerError({ type: 'webrtc' }));
        return;
      }
      this.hostConn = conn;

      // The data channel itself can stall even when signalling succeeded —
      // that is the classic symmetric-NAT case where TURN is required.
      if (this.joinTimer) window.clearTimeout(this.joinTimer);
      this.joinTimer = window.setTimeout(() => {
        if (this.joinStatus === 'connecting' && (!conn || !conn.open)) {
          this.joinAttempts++;
          if (this.joinAttempts <= 2) {
            this.setDetail(t('online.detailRetryChannel', { n: this.joinAttempts }));
            try {
              conn.close();
            } catch (_e) {}
            this.dialHost(peer, hostPeerId);
          } else {
            this.joinStatus = 'error';
            this.setDetail(t('online.detailRelayNeeded'));
            renderOnlineLobbyUI();
            syncSetupFormUI();
            sfx.playError();
          }
        }
      }, 15000);

      conn.on('open', () => {
        window.clearTimeout(this.joinTimer);
        this.startKeepAlive();
        this.setDetail(t('online.detailChannelOpen'));
        conn.send({
          type: 'JOIN_REQUEST',
          password: this.pendingPass,
          profile: this.getLocalProfile()
        });
      });

      conn.on('data', (data) => {
        if (!data || typeof data !== 'object') return;

        if (data.type === 'PING') {
          try {
            conn.send({ type: 'PONG', t: data.t });
          } catch (_e) {}
          this.lastPongAt = Date.now();
          return;
        }
        if (data.type === 'PONG') {
          this.lastPongAt = Date.now();
          return;
        }

        if (data.type === 'JOIN_REJECTED') {
          window.clearTimeout(this.joinTimer);
          if (data.reason === 'ROOM_FULL') {
            this.joinStatus = 'full';
            this.setDetail(t('online.detailRoomFull'));
          } else if (data.reason === 'IN_PROGRESS') {
            this.joinStatus = 'error';
            this.setDetail(t('online.detailInProgress'));
          } else {
            this.joinStatus = 'error';
            this.setDetail(t('online.detailBadPass'));
          }
          renderOnlineLobbyUI();
          syncSetupFormUI();
          sfx.playError();
          return;
        }

        if (data.type === 'JOIN_ACCEPTED') {
          window.clearTimeout(this.joinTimer);
          this.joinStatus = 'approved';
          this.localPeerId = data.assignedPeerId || this.localPeerId;
          this.lobbyRoster = data.roster || [];
          if (data.maxRounds) state.config.maxRounds = data.maxRounds;
          sfx.playPAChime();
          this.setDetail(t('online.detailApproved'));
          renderOnlineLobbyUI();
          syncSetupFormUI();
          return;
        }

        if (data.type === 'LOBBY_UPDATE') {
          this.lobbyRoster = data.roster || [];
          if (data.maxRounds) state.config.maxRounds = data.maxRounds;
          renderOnlineLobbyUI();
          syncSetupFormUI();
          return;
        }

        if (data.type === 'GAME_START' || data.type === 'STATE_SYNC') {
          applyAuthoritativeStateFromHost(data);
        }
      });

      conn.on('error', () => {
        if (this.joinStatus === 'connecting') {
          this.setDetail(t('online.detailChannelError'));
        }
      });

      conn.on('close', () => {
        if (state.status === 'MENU') {
          if (this.joinStatus === 'approved') {
            this.joinStatus = 'error';
            this.setDetail(t('online.detailHostClosed'));
          }
          renderOnlineLobbyUI();
          syncSetupFormUI();
        } else {
          showToast('CONTROL TOWER DISCONNECTED', 'Connection to the Host Captain was lost.');
        }
      });
    },

    serializeAuthoritativeState(extra = {}) {
      return {
        status: state.status,
        round: state.round,
        maxRounds: state.config.maxRounds,
        currentPlayerIndex: state.currentPlayerIndex,
        majorityThreshold: state.majorityThreshold,
        mapArchetype: state.mapArchetype,
        rotundaCenter: state.rotundaCenter,
        wingPolygons: state.wingPolygons,
        gates: state.gates,
        connections: state.connections,
        players: state.players,
        zGateSerial: state.zGateSerial || 0,
        concourseWeather: state.concourseWeather || {},
        codeShareLinks: state.codeShareLinks || [],
        nationalizePlayed: Boolean(state.nationalizePlayed),
        noraDebuted: Boolean(state.noraDebuted),
        actionDeckCount: state.actionDeck.length,
        actionDiscardCount: state.actionDiscard.length,
        activeWorldEvent: state.activeWorldEvent,
        turnState: {
          actionTaken: state.turnState.actionTaken,
          actionType: state.turnState.actionType,
          selectedCardIndex: null,
          stagedAction: null,
          aiBusy: false
        },
        headlines: state.headlines.slice(0, 16),
        flightLogHistory: state.flightLogHistory.slice(0, 28),
        activeBroadcastAnchorId: state.activeBroadcastAnchorId || 'nora_cat',
        activeBroadcastWorldCard: state.activeBroadcastWorldCard || null,
        lastGameOverWinnerIndex: state.lastGameOverWinner ? state.lastGameOverWinner.index : null,
        lastGameOverReason: state.lastGameOverReason || null,
        ...extra
      };
    },

    broadcastAuthoritativeState(type = 'STATE_SYNC', extra = {}) {
      if (state.config.mode !== 'online' || this.role !== 'host') return;
      const payload = {
        type,
        state: this.serializeAuthoritativeState(extra)
      };
      this.guestConns.forEach((conn) => {
        if (conn.open) conn.send(payload);
      });
    },

    sendGuestAction(action, payload = {}) {
      if (state.config.mode !== 'online' || this.role !== 'guest') return false;
      if (!this.hostConn || !this.hostConn.open) return false;
      state.turnState.networkPending = true;
      this.hostConn.send({
        type: 'ACTION',
        action,
        payload
      });
      updateAllUI();
      return true;
    }
  };

  function applyAuthoritativeStateFromHost(packet) {
    const st = packet.state;
    if (!st) return;

    const wasMenu = state.status === 'MENU';
    const prevStatus = state.status;

    state.status = st.status;
    state.round = st.round;
    state.config.maxRounds = st.maxRounds || state.config.maxRounds;
    state.currentPlayerIndex = st.currentPlayerIndex;
    state.majorityThreshold = st.majorityThreshold;
    state.mapArchetype = st.mapArchetype || state.mapArchetype;
    state.rotundaCenter = st.rotundaCenter || state.rotundaCenter;
    state.wingPolygons = st.wingPolygons || [];
    state.gates = st.gates || [];
    state.connections = st.connections || [];
    state.players = st.players || [];
    state.zGateSerial = st.zGateSerial || 0;
    state.concourseWeather = st.concourseWeather || {};
    state.codeShareLinks = st.codeShareLinks || [];
    state.nationalizePlayed = Boolean(st.nationalizePlayed);
    state.noraDebuted = Boolean(st.noraDebuted);
    state.activeWorldEvent = st.activeWorldEvent || state.activeWorldEvent;
    state.headlines = st.headlines || state.headlines;
    state.flightLogHistory = st.flightLogHistory || [];
    state.turnState = {
      actionTaken: Boolean(st.turnState && st.turnState.actionTaken),
      actionType: st.turnState ? st.turnState.actionType : null,
      selectedCardIndex: null,
      stagedAction: null,
      aiBusy: false,
      networkPending: false
    };

    const myPlayer = state.players.find((p) => p.peerId === p2p.localPeerId);
    if (myPlayer) {
      state.localPlayerIndex = myPlayer.index;
    }

    if (wasMenu || packet.type === 'GAME_START') {
      dom.mainMenu.classList.remove('active');
      resetCamera();
      initPassengerAgents();
      sfx.playPAChime();
    }

    // Rebuild flight log from authoritative history
    if (dom.flightLog && state.flightLogHistory.length > 0) {
      dom.flightLog.innerHTML = state.flightLogHistory.map((item) => `<li>${item}</li>`).join('');
    }

    // Dynamic UI theme matches active turn player
    const activePlayer = state.players[state.currentPlayerIndex];
    if (activePlayer) {
      applyPlayerTheme(activePlayer.color, activePlayer.name);
    }

    // Handle World Bulletin modal state
    if (state.status === 'WORLD_MODAL' && st.activeBroadcastWorldCard) {
      if (prevStatus !== 'WORLD_MODAL') {
        state.activeBroadcastAnchorId = st.activeBroadcastAnchorId || 'classic_50s';
        state.activeBroadcastWorldCard = st.activeBroadcastWorldCard;
        openBreakingNewsTakeover(st.activeBroadcastWorldCard, '');
      }
    } else {
      stopAnchorMouth();
      dom.worldCardModal.classList.remove('active');
    }

    // Handle Game Over modal state
    if (state.status === 'GAME_OVER' && st.lastGameOverWinnerIndex !== null) {
      const winner = state.players[st.lastGameOverWinnerIndex] || state.players[0];
      if (winner && prevStatus !== 'GAME_OVER') {
        triggerGameOver(winner, st.lastGameOverReason || 'FINAL_ROUND');
      }
    } else if (state.status !== 'GAME_OVER') {
      dom.gameOverModal.classList.remove('active');
    }

    sfx.updateTurnProgress(state.round, state.config.maxRounds);
    renderNewsTicker();
    updateAllUI();
  }

  function handleRemoteGuestAction(peerId, action, payload) {
    if (state.config.mode !== 'online' || p2p.role !== 'host') return;
    const player = state.players.find((p) => p.peerId === peerId);
    if (!player) return;

    if (action === 'ACK_WORLD_CARD' && state.status === 'WORLD_MODAL') {
      stopAnchorMouth();
      dom.worldCardModal.classList.remove('active');
      sfx.playUiClick();
      beginNextRoundAfterWorldCard();
      p2p.broadcastAuthoritativeState();
      return;
    }

    if (state.status !== 'PLAYING' || state.currentPlayerIndex !== player.index) return;

    if (action === 'CLAIM_GATE') {
      const gate = state.gates.find((g) => g.id === payload.gateId);
      if (gate && gate.owner === null && !state.turnState.actionTaken) {
        claimGateForPlayer(gate, player, 'planted a 3D Pin on');
        commitTurnAction('gate');
        sfx.playPinClaim();
        checkSuddenDeathWinner();
        updateAllUI();
        p2p.broadcastAuthoritativeState();
      }
      return;
    }

    if (action === 'PLAY_CARD') {
      const cardIndex = payload.cardIndex;
      const card = player.hand[cardIndex];
      if (!card || state.turnState.actionTaken) return;

      if (card.targetMode === 'instant') {
        resolveHumanInstantCard(card, cardIndex);
        p2p.broadcastAuthoritativeState();
        return;
      }

      if (payload.targetGateId) {
        const gate = state.gates.find((g) => g.id === payload.targetGateId);
        if (gate) {
          state.turnState.selectedCardIndex = cardIndex;
          resolveHumanCardOnGate(card, gate);
          p2p.broadcastAuthoritativeState();
        }
        return;
      }

      if (typeof payload.targetPlayerIndex === 'number') {
        const victim = state.players[payload.targetPlayerIndex];
        if (victim && victim.index !== player.index) {
          state.turnState.selectedCardIndex = cardIndex;
          resolveHumanPlayerTargetCard(card, victim);
          p2p.broadcastAuthoritativeState();
        }
      }
      return;
    }

    if (action === 'END_TURN') {
      handleHumanEndTurn(true);
      p2p.broadcastAuthoritativeState();
    }
  }

  // Paints the result of NET.runDiagnostics() into the lobby's diagnostics list.
  function renderDiagnostics(report) {
    if (!dom.onlineDiagList) return;
    const marks = {
      peerScript: report.peerScript,
      webrtc: report.webrtc,
      host: report.host,
      srflx: report.srflx,
      relay: report.relay
    };

    dom.onlineDiagList.querySelectorAll('li').forEach((li) => {
      const key = li.dataset.check;
      const ok = !!marks[key];
      const pending = !report.done && !ok;
      li.classList.toggle('ok', ok);
      li.classList.toggle('bad', report.done && !ok);
      li.classList.toggle('pending', pending);
      const val = li.querySelector('.diag-value');
      if (val) val.textContent = ok ? 'OK' : pending ? '…' : 'NO';
    });

    if (dom.onlineDiagSummary) {
      if (!report.done) {
        dom.onlineDiagSummary.textContent = t('online.testRunning');
      } else if (!report.peerScript) {
        dom.onlineDiagSummary.textContent = t('online.detailNoLib');
      } else if (!report.webrtc) {
        dom.onlineDiagSummary.textContent = describePeerError({ type: 'browser-incompatible' });
      } else if (!report.srflx) {
        dom.onlineDiagSummary.textContent = t('online.diagNoStun');
      } else if (!report.relay) {
        dom.onlineDiagSummary.textContent = t('online.diagRelayHint');
      } else {
        dom.onlineDiagSummary.textContent = t('online.diagAllGood');
      }
    }
  }

  function renderOnlineLobbyUI() {
    if (!dom.onlineSetupControls) return;
    const isHostRole = state.config.onlineRole !== 'join';

    if (dom.onlineRoleHostBtn && dom.onlineRoleJoinBtn) {
      dom.onlineRoleHostBtn.classList.toggle('active', isHostRole);
      dom.onlineRoleHostBtn.setAttribute('aria-selected', String(isHostRole));
      dom.onlineRoleJoinBtn.classList.toggle('active', !isHostRole);
      dom.onlineRoleJoinBtn.setAttribute('aria-selected', String(!isHostRole));
    }
    if (dom.onlineHostPanel) dom.onlineHostPanel.classList.toggle('hidden', !isHostRole);
    if (dom.onlineJoinPanel) dom.onlineJoinPanel.classList.toggle('hidden', isHostRole);

    if (dom.onlineRoomCodeDisplay) {
      dom.onlineRoomCodeDisplay.textContent = state.config.roomCode || 'TWA-404';
    }
    if (dom.onlineInviteLink) {
      dom.onlineInviteLink.value = buildInviteLink(state.config.roomCode || 'TWA-404');
    }
    if (dom.onlineHostDetail) {
      dom.onlineHostDetail.textContent = isHostRole ? p2p.statusDetail : '';
    }
    if (dom.onlineJoinDetail) {
      dom.onlineJoinDetail.textContent = isHostRole ? '' : p2p.statusDetail;
    }

    const buildRosterHtml = (roster) => {
      if (!roster || roster.length === 0) return '';
      return roster
        .map((p, idx) => {
          const lObj = AIRLINE_LOGOS.find((l) => l.id === p.logo) || AIRLINE_LOGOS[0];
          const contrast = getContrastTextForColor(p.color);
          const isMe = p.peerId === p2p.localPeerId;
          const badgeText = p.isHost
            ? t('online.hostBadge')
            : isMe
            ? t('online.youBadge')
            : t('online.guestBadge');
          return `
            <div class="online-roster-item" style="--slot-color: ${p.color}; --slot-contrast: ${contrast}">
              <div class="online-roster-left">
                <div class="online-roster-emblem">${lObj.svg}</div>
                <div class="online-roster-meta">
                  <strong>0${idx + 1} &bull; ${p.name}</strong>
                  <span>${p.colorName || p.color} &bull; ${lObj.name}</span>
                </div>
              </div>
              <span class="online-roster-badge ${p.isHost ? 'host-badge' : ''}">${badgeText}</span>
            </div>
          `;
        })
        .join('');
    };

    if (isHostRole) {
      const count = p2p.lobbyRoster.length || 1;
      if (dom.onlinePlayerCountBadge) {
        dom.onlinePlayerCountBadge.textContent = t('online.boardedCount', { n: count });
      }
      if (dom.onlineLobbyRoster) {
        dom.onlineLobbyRoster.innerHTML = buildRosterHtml(p2p.lobbyRoster);
      }
      if (dom.onlineHostStatusBar && dom.onlineHostStatusText) {
        dom.onlineHostStatusBar.className = 'online-status-banner';
        if (!p2p.hostOnline && typeof window.Peer !== 'function') {
          dom.onlineHostStatusBar.classList.add('status-error');
          dom.onlineHostStatusText.textContent = t('online.hostOffline');
        } else if (count >= 2) {
          dom.onlineHostStatusBar.classList.add('status-approved');
          dom.onlineHostStatusText.textContent = t('online.hostReady', { n: count });
        } else {
          dom.onlineHostStatusBar.classList.add('status-waiting');
          dom.onlineHostStatusText.textContent = t('online.hostListening');
        }
      }
    } else {
      if (dom.onlineJoinStatusBar && dom.onlineJoinStatusText) {
        dom.onlineJoinStatusBar.className = 'online-status-banner';
        if (p2p.joinStatus === 'connecting') {
          dom.onlineJoinStatusBar.classList.add('status-waiting');
          dom.onlineJoinStatusText.textContent = t('online.connectingStatus');
        } else if (p2p.joinStatus === 'approved') {
          dom.onlineJoinStatusBar.classList.add('status-approved');
          dom.onlineJoinStatusText.textContent = t('online.boardingApprovedStatus');
        } else if (p2p.joinStatus === 'full') {
          dom.onlineJoinStatusBar.classList.add('status-error');
          dom.onlineJoinStatusText.textContent = t('online.roomFullStatus');
        } else if (p2p.joinStatus === 'error') {
          dom.onlineJoinStatusBar.classList.add('status-error');
          dom.onlineJoinStatusText.textContent = t('online.authErrorStatus');
        } else {
          dom.onlineJoinStatusBar.classList.add('status-idle');
          dom.onlineJoinStatusText.textContent = t('online.joinIdleStatus');
        }
      }
      if (dom.onlineGuestCountBadge) {
        dom.onlineGuestCountBadge.textContent =
          p2p.joinStatus === 'approved'
            ? t('online.boardedCount', { n: p2p.lobbyRoster.length })
            : 'STANDBY';
      }
      if (dom.onlineGuestRoster) {
        dom.onlineGuestRoster.innerHTML =
          p2p.joinStatus === 'approved' ? buildRosterHtml(p2p.lobbyRoster) : '';
      }
    }
  }

  function syncSetupFormUI() {
    const mode = state.config.mode; // 'solo' | 'coop' | 'online'
    const isCoop = mode === 'coop';
    const isOnline = mode === 'online';
    const slotIdx = isCoop ? state.config.editingSlotIndex : 0;
    const activeSlot = state.config.coopPlayers[slotIdx] || state.config.coopPlayers[0];

    // Toggle Solo vs Co-Op vs Online sections
    if (dom.soloSetupControls) dom.soloSetupControls.classList.toggle('hidden', mode !== 'solo');
    if (dom.coopSetupControls) dom.coopSetupControls.classList.toggle('hidden', !isCoop);
    if (dom.coopSlotTabsWrapper) dom.coopSlotTabsWrapper.classList.toggle('hidden', !isCoop);
    if (dom.onlineSetupControls) dom.onlineSetupControls.classList.toggle('hidden', !isOnline);
    if (dom.turnLimitGroup) {
      dom.turnLimitGroup.classList.toggle(
        'hidden',
        isOnline && state.config.onlineRole === 'join'
      );
    }
    if (dom.setupDirectivesBox) {
      dom.setupDirectivesBox.classList.toggle('hidden', isOnline);
    }

    if (dom.registrationHeadingText) {
      dom.registrationHeadingText.textContent = isCoop
        ? t('setup.captainReg', { n: slotIdx + 1 })
        : t('setup.carrierReg');
    }
    if (dom.editingSlotIndicator) {
      dom.editingSlotIndicator.innerHTML = t('setup.editingCaptain', {
        n: slotIdx + 1,
        name: activeSlot.name
      });
    }
    if (dom.airlineNameLabel) {
      dom.airlineNameLabel.textContent = isCoop
        ? t('setup.captainCallsign', { n: slotIdx + 1 })
        : t('setup.airlineCallsign');
    }

    // Sync Name Input
    if (dom.airlineNameInput && document.activeElement !== dom.airlineNameInput) {
      dom.airlineNameInput.value = activeSlot.name;
    }

    // Sync Color Swatches & mark colors claimed by other Co-Op captains
    const otherColors = new Map();
    if (isCoop) {
      for (let i = 0; i < state.config.coopCount; i++) {
        if (i !== slotIdx) {
          otherColors.set(state.config.coopPlayers[i].color.toUpperCase(), `P${i + 1}`);
        }
      }
    }

    dom.colorPalette.querySelectorAll('.color-swatch').forEach((s) => {
      const c = String(s.dataset.color || '').toUpperCase();
      const isSelected = c === activeSlot.color.toUpperCase();
      const takenBy = otherColors.get(c);
      s.classList.toggle('selected', isSelected);
      s.classList.toggle('taken-by-other', Boolean(takenBy));
      if (takenBy) s.setAttribute('data-taken-tag', takenBy);
      else s.removeAttribute('data-taken-tag');
    });

    if (dom.selectedColorLabel) {
      dom.selectedColorLabel.innerHTML = t('setup.pinAccentCaption', {
        name: activeSlot.colorName || activeSlot.color
      });
    }

    // Sync Logo Grid
    const logoObj = AIRLINE_LOGOS.find((l) => l.id === activeSlot.logo) || AIRLINE_LOGOS[0];
    dom.logoGrid.querySelectorAll('.logo-option').forEach((b) => {
      b.classList.toggle('selected', b.dataset.logo === logoObj.id);
    });
    if (dom.selectedLogoLabel) {
      dom.selectedLogoLabel.innerHTML = t('setup.selectedEmblemCaption', { name: logoObj.name });
    }

    // Render Co-Op Captain Slot Tabs & Manifest Roster if in Co-Op mode
    if (isCoop) {
      if (dom.coopSlotTabs) {
        let tabsHtml = '';
        for (let i = 0; i < state.config.coopCount; i++) {
          const p = state.config.coopPlayers[i];
          tabsHtml += `
            <button type="button" class="coop-slot-tab ${i === slotIdx ? 'active' : ''}"
                    data-slot-index="${i}" style="--slot-color: ${p.color}" role="tab" aria-selected="${i === slotIdx}">
              <span class="slot-dot"></span>
              <span class="slot-label">P${i + 1}: ${p.name}</span>
            </button>
          `;
        }
        dom.coopSlotTabs.innerHTML = tabsHtml;
        dom.coopSlotTabs.querySelectorAll('.coop-slot-tab').forEach((tab) => {
          tab.addEventListener('click', () => {
            state.config.editingSlotIndex = parseInt(tab.dataset.slotIndex, 10);
            dom.airlineNameInput.value = getCurrentlyEditingSlot().name;
            syncSetupFormUI();
            sfx.playUiClick();
          });
        });
      }

      if (dom.coopRosterList) {
        let rosterHtml = '';
        for (let i = 0; i < state.config.coopCount; i++) {
          const p = state.config.coopPlayers[i];
          const lObj = AIRLINE_LOGOS.find((l) => l.id === p.logo) || AIRLINE_LOGOS[0];
          const contrast = getContrastTextForColor(p.color);
          rosterHtml += `
            <div class="coop-roster-card ${i === slotIdx ? 'editing' : ''}"
                 data-slot-index="${i}" style="--slot-color: ${p.color}; --slot-contrast: ${contrast}">
              <div class="coop-roster-left">
                <div class="coop-roster-emblem">${lObj.svg}</div>
                <div class="coop-roster-meta">
                  <strong>0${i + 1} &bull; ${p.name}</strong>
                  <span>${p.colorName || p.color} &bull; ${lObj.name}</span>
                </div>
              </div>
              <span class="coop-roster-edit-tag">${
                i === slotIdx ? t('setup.editingTag') : t('setup.customizeTag')
              }</span>
            </div>
          `;
        }
        dom.coopRosterList.innerHTML = rosterHtml;
        dom.coopRosterList.querySelectorAll('.coop-roster-card').forEach((card) => {
          card.addEventListener('click', () => {
            state.config.editingSlotIndex = parseInt(card.dataset.slotIndex, 10);
            dom.airlineNameInput.value = getCurrentlyEditingSlot().name;
            syncSetupFormUI();
            sfx.playUiClick();
          });
        });
      }
    }

    // Sync Online Lobby & Start Button State
    if (isOnline) {
      renderOnlineLobbyUI();
      if (dom.startGameBtn && dom.startGameBtnText) {
        if (state.config.onlineRole === 'join') {
          dom.startGameBtn.disabled = true;
          dom.startGameBtnText.textContent = t('online.guestWaitBtn');
        } else {
          const enoughPlayers = p2p.lobbyRoster.length >= 2;
          dom.startGameBtn.disabled = !enoughPlayers;
          dom.startGameBtnText.textContent = enoughPlayers
            ? t('online.departBtn')
            : t('online.departNeedMoreBtn');
        }
      }
    } else if (dom.startGameBtn && dom.startGameBtnText) {
      dom.startGameBtn.disabled = false;
      dom.startGameBtnText.textContent = t('setup.launchBtn');
    }

    // Keep the menu's live theme preview harmonized with the currently edited slot
    applyPlayerTheme(activeSlot.color, activeSlot.colorName);
  }

  function initSetupMenu() {
    // Populate 33 Inline SVG Icons in Setup Grid
    dom.logoGrid.innerHTML = '';
    AIRLINE_LOGOS.forEach((logo, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `logo-option ${idx === 0 ? 'selected' : ''}`;
      btn.dataset.logo = logo.id;
      btn.title = logo.name;
      btn.innerHTML = `${logo.svg}<span>${logo.name}</span>`;
      btn.addEventListener('click', () => {
        const slot = getCurrentlyEditingSlot();
        slot.logo = logo.id;
        if (state.config.mode !== 'coop' || state.config.editingSlotIndex === 0) {
          state.config.humanLogo = logo.id;
        }
        if (state.config.mode === 'online') {
          p2p.syncLocalProfileToLobby();
        }
        syncSetupFormUI();
        sfx.playPinClaim();
      });
      dom.logoGrid.appendChild(btn);
    });

    // 3-Way Game Mode Toggle (Solo vs Pass & Play vs Online P2P)
    if (dom.gameModeControl) {
      dom.gameModeControl.querySelectorAll('.mode-toggle-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const rawMode = btn.dataset.mode;
          const mode = rawMode === 'coop' ? 'coop' : rawMode === 'online' ? 'online' : 'solo';
          state.config.mode = mode;
          dom.gameModeControl.querySelectorAll('.mode-toggle-btn').forEach((b) => {
            const active = b === btn;
            b.classList.toggle('active', active);
            b.setAttribute('aria-checked', String(active));
          });
          if (mode !== 'coop') {
            state.config.editingSlotIndex = 0;
          }
          if (mode === 'online') {
            if (state.config.onlineRole !== 'join') {
              p2p.initHostRoom(false);
            }
          } else {
            p2p.shutdown();
          }
          dom.airlineNameInput.value = getCurrentlyEditingSlot().name;
          syncSetupFormUI();
          sfx.playPinClaim();
        });
      });
    }

    // Online Host vs Join Sub-Role Tabs
    if (dom.onlineRoleHostBtn && dom.onlineRoleJoinBtn) {
      dom.onlineRoleHostBtn.addEventListener('click', () => {
        state.config.onlineRole = 'host';
        p2p.initHostRoom(false);
        syncSetupFormUI();
        sfx.playUiClick();
      });
      dom.onlineRoleJoinBtn.addEventListener('click', () => {
        state.config.onlineRole = 'join';
        p2p.shutdown();
        syncSetupFormUI();
        sfx.playUiClick();
      });
    }

    // Online Room Code Copy & Regenerate Buttons
    if (dom.onlineCopyCodeBtn) {
      dom.onlineCopyCodeBtn.addEventListener('click', () => {
        const code = state.config.roomCode || 'TWA-404';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).catch(() => {});
        }
        dom.onlineCopyCodeBtn.textContent = t('online.copiedBtn');
        window.setTimeout(() => {
          if (dom.onlineCopyCodeBtn) dom.onlineCopyCodeBtn.textContent = t('online.copyBtn');
        }, 1400);
        sfx.playUiClick();
      });
    }
    if (dom.onlineRegenCodeBtn) {
      dom.onlineRegenCodeBtn.addEventListener('click', () => {
        p2p.initHostRoom(true);
        syncSetupFormUI();
        sfx.playPinClaim();
      });
    }

    // One-click invite link
    if (dom.onlineCopyLinkBtn) {
      dom.onlineCopyLinkBtn.addEventListener('click', () => {
        const link = buildInviteLink(state.config.roomCode || 'TWA-404');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(link).catch(() => {});
        } else if (dom.onlineInviteLink) {
          dom.onlineInviteLink.select();
          try {
            document.execCommand('copy');
          } catch (_e) {}
        }
        dom.onlineCopyLinkBtn.textContent = t('online.copiedBtn');
        window.setTimeout(() => {
          if (dom.onlineCopyLinkBtn) dom.onlineCopyLinkBtn.textContent = t('online.copyLinkBtn');
        }, 1400);
        sfx.playUiClick();
      });
    }

    // Link diagnostics
    if (dom.onlineTestLinkBtn) {
      dom.onlineTestLinkBtn.addEventListener('click', () => {
        sfx.playUiClick();
        dom.onlineTestLinkBtn.disabled = true;
        dom.onlineTestLinkBtn.textContent = t('online.testRunning');
        NET.runDiagnostics((report) => renderDiagnostics(report)).then((report) => {
          renderDiagnostics(report);
          dom.onlineTestLinkBtn.disabled = false;
          dom.onlineTestLinkBtn.textContent = t('online.testLinkBtn');
        });
      });
    }

    if (dom.onlineSaveNetBtn) {
      dom.onlineSaveNetBtn.addEventListener('click', () => {
        const signalStr = dom.onlineCustomSignal ? dom.onlineCustomSignal.value.trim() : '';
        const turnStr = dom.onlineCustomTurn ? dom.onlineCustomTurn.value.trim() : '';
        const turnApiStr = dom.onlineTurnApi ? dom.onlineTurnApi.value.trim() : '';
        NET.saveCustom(signalStr, turnStr, turnApiStr);
        sfx.playPinClaim();
        // Re-establish the link with the new configuration
        if (state.config.onlineRole === 'join') {
          p2p.shutdown();
          p2p.setDetail('Network settings saved. Request boarding clearance again.');
          renderOnlineLobbyUI();
        } else {
          p2p.initHostRoom(false);
        }
      });
    }

    // Online Guest Connect Button
    if (dom.onlineConnectBtn) {
      dom.onlineConnectBtn.addEventListener('click', () => {
        const rawCode = dom.onlineJoinCode ? dom.onlineJoinCode.value : '';
        const rawPass = dom.onlineJoinPassword ? dom.onlineJoinPassword.value : '';
        p2p.connectToHostRoom(rawCode, rawPass);
      });
    }
    if (dom.onlineJoinCode) {
      dom.onlineJoinCode.addEventListener('input', () => {
        dom.onlineJoinCode.value = dom.onlineJoinCode.value.toUpperCase();
      });
    }

    // Live Airline Name Input binding to active player slot
    dom.airlineNameInput.addEventListener('input', () => {
      const slot = getCurrentlyEditingSlot();
      const cleaned = dom.airlineNameInput.value.toUpperCase();
      slot.name = cleaned || `CAPTAIN 0${state.config.editingSlotIndex + 1}`;
      if (state.config.mode !== 'coop' || state.config.editingSlotIndex === 0) {
        state.config.humanName = slot.name;
      }
      if (state.config.mode === 'online') {
        p2p.syncLocalProfileToLobby();
      }
      syncSetupFormUI();
    });

    // Color swatch clicks — enforce distinct colors across Co-Op players & inject CSS variables
    dom.colorPalette.querySelectorAll('.color-swatch').forEach((swatch) => {
      swatch.addEventListener('click', () => {
        const chosenColor = swatch.dataset.color;
        const chosenName = swatch.dataset.name;
        const slotIdx = state.config.mode === 'coop' ? state.config.editingSlotIndex : 0;
        const slot = state.config.coopPlayers[slotIdx];

        // If another Co-Op player holds this color, swap colors cleanly so every player stays distinct
        if (state.config.mode === 'coop') {
          for (let i = 0; i < state.config.coopCount; i++) {
            if (
              i !== slotIdx &&
              state.config.coopPlayers[i].color.toUpperCase() === chosenColor.toUpperCase()
            ) {
              state.config.coopPlayers[i].color = slot.color;
              state.config.coopPlayers[i].colorName = slot.colorName;
            }
          }
        }

        slot.color = chosenColor;
        slot.colorName = chosenName;
        if (slotIdx === 0) {
          state.config.humanColor = chosenColor;
        }
        if (state.config.mode === 'online') {
          p2p.syncLocalProfileToLobby();
        }
        syncSetupFormUI();
        sfx.playPinClaim();
      });
    });

    // Co-Op Human Player Count (2 to 4 Players)
    if (dom.coopCountControl) {
      dom.coopCountControl.querySelectorAll('.seg-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          dom.coopCountControl.querySelectorAll('.seg-btn').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          state.config.coopCount = parseInt(btn.dataset.humans, 10) || 2;
          if (state.config.editingSlotIndex >= state.config.coopCount) {
            state.config.editingSlotIndex = 0;
            dom.airlineNameInput.value = getCurrentlyEditingSlot().name;
          }
          syncSetupFormUI();
          sfx.playPinClaim();
        });
      });
    }

    // Initialize default player theme & setup UI on boot
    syncSetupFormUI();

    // Rival count segmented buttons
    dom.botCountControl.querySelectorAll('.seg-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        dom.botCountControl.querySelectorAll('.seg-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.config.botCount = parseInt(btn.dataset.bots, 10);
        sfx.playPinClaim();
      });
    });

    // Turn limit segmented buttons
    dom.turnLimitControl.querySelectorAll('.seg-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        dom.turnLimitControl.querySelectorAll('.seg-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.config.maxRounds = parseInt(btn.dataset.turns, 10);
        if (state.config.mode === 'online' && p2p.role === 'host') {
          p2p.broadcastLobbyRoster();
        }
        sfx.playPinClaim();
      });
    });

    // Difficulty Slider
    const updateDifficultyUI = (val) => {
      const level = parseInt(val, 10);
      state.config.difficulty = level;
      dom.botDifficultyInput.value = String(level);
      document.querySelectorAll('.slider-ticks span').forEach((s) => {
        s.classList.toggle('active', parseInt(s.dataset.level, 10) === level);
      });
      if (level === 1) {
        dom.difficultyBadge.textContent = t('setup.diffEasy');
        dom.difficultyDesc.innerHTML = t('setup.diffDescEasy');
      } else if (level === 2) {
        dom.difficultyBadge.textContent = t('setup.diffNormal');
        dom.difficultyDesc.innerHTML = t('setup.diffDescNormal');
      } else {
        dom.difficultyBadge.textContent = t('setup.diffHard');
        dom.difficultyDesc.innerHTML = t('setup.diffDescHard');
      }
    };

    dom.botDifficultyInput.addEventListener('input', (e) => updateDifficultyUI(e.target.value));
    document.querySelectorAll('.slider-ticks span').forEach((tick) => {
      tick.addEventListener('click', () => updateDifficultyUI(tick.dataset.level));
    });

    // Form submit -> Start Game
    dom.setupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (state.config.mode === 'online') {
        if (state.config.onlineRole === 'join') return;
        if (p2p.lobbyRoster.length < 2) {
          sfx.playError();
          return;
        }
      }
      const slot = getCurrentlyEditingSlot();
      const rawName = dom.airlineNameInput.value.trim();
      if (rawName) slot.name = rawName.toUpperCase();
      state.config.humanName = state.config.coopPlayers[0].name;
      state.config.humanColor = state.config.coopPlayers[0].color;
      state.config.humanLogo = state.config.coopPlayers[0].logo;
      dom.mainMenu.classList.remove('active');
      sfx.playPAChime();
      startNewGame();
    });

    // Draft New Terminal Map Button
    dom.regenMapBtn.addEventListener('click', () => {
      sfx.playPAChime();
      startNewGame();
    });

    // Rules modal buttons
    dom.openManualFromMenu.addEventListener('click', () => dom.rulesModal.classList.add('active'));
    dom.rulesBtn.addEventListener('click', () => dom.rulesModal.classList.add('active'));
    dom.closeRulesBtn.addEventListener('click', () => dom.rulesModal.classList.remove('active'));
    dom.closeRulesBottomBtn.addEventListener('click', () => dom.rulesModal.classList.remove('active'));

    // Sound + music toggles (HUD)
    dom.sfxToggleBtn.addEventListener('click', () => {
      setSfxEnabled(!(AUDIO && AUDIO.sfxEnabled));
      if (AUDIO && AUDIO.sfxEnabled) sfx.playUiClick();
    });

    if (dom.musicToggleBtn) {
      dom.musicToggleBtn.addEventListener('click', () => {
        setMusicEnabled(!(AUDIO && AUDIO.musicEnabled));
        sfx.playUiClick();
      });
    }

    if (dom.settingsBtn) {
      dom.settingsBtn.addEventListener('click', () => {
        sfx.playUiClick();
        dom.settingsModal.classList.add('active');
      });
    }

    // Return to Setup button
    dom.newGameBtn.addEventListener('click', () => {
      state.status = 'MENU';
      if (dom.gameContainer) dom.gameContainer.classList.remove('privacy-blur-active');
      if (dom.passInterstitialModal) dom.passInterstitialModal.classList.remove('active');
      dom.gameOverModal.classList.remove('active');
      dom.worldCardModal.classList.remove('active');
      syncSetupFormUI();
      dom.mainMenu.classList.add('active');
    });

    // Pass-and-Play Privacy Interstitial Ready Button
    if (dom.interstitialReadyBtn) {
      dom.interstitialReadyBtn.addEventListener('click', () => {
        dismissPassAndPlayInterstitial();
      });
    }

    // Cancel targeting / staged selection buttons
    dom.cancelTargetBtn.addEventListener('click', () => cancelStagedAction());
    if (dom.cancelStageBtn) {
      dom.cancelStageBtn.addEventListener('click', () => cancelStagedAction());
    }

    // Confirm Staged Action buttons (desktop + mobile bar)
    if (dom.confirmActionBtn) {
      dom.confirmActionBtn.addEventListener('click', () => commitStagedAction());
    }
    if (dom.mobileConfirmActionBtn) {
      dom.mobileConfirmActionBtn.addEventListener('click', () => commitStagedAction());
    }

    // Pass / End Turn button (single mutually-exclusive action economy)
    dom.endTurnBtn.addEventListener('click', () => handleHumanEndTurn());

    // Keyboard shortcuts: ENTER confirms staged action, ESC cancels staging, SPACE passes turn
    window.addEventListener('keydown', (evt) => {
      if (state.status !== 'PLAYING' || document.activeElement !== document.body) return;
      if (evt.key === 'Enter' && state.turnState.stagedAction && !state.turnState.actionTaken) {
        evt.preventDefault();
        commitStagedAction();
        return;
      }
      if (evt.code === 'Space') {
        evt.preventDefault();
        handleHumanEndTurn();
      }
      if (
        evt.key === 'Escape' &&
        (state.turnState.selectedCardIndex !== null || state.turnState.stagedAction !== null)
      ) {
        cancelStagedAction();
      }
    });

    // Dismiss the Breaking Bulletin broadcast and resume flight ops
    dom.ackWorldCardBtn.addEventListener('click', () => {
      if (state.config.mode === 'online' && p2p.role === 'guest') {
        p2p.sendGuestAction('ACK_WORLD_CARD', {});
        return;
      }
      stopAnchorMouth();
      dom.worldCardModal.classList.remove('active');
      sfx.playUiClick();
      beginNextRoundAfterWorldCard();
      if (state.config.mode === 'online' && p2p.role === 'host') {
        p2p.broadcastAuthoritativeState();
      }
    });

    // Game Over Modal buttons
    dom.rematchBtn.addEventListener('click', () => {
      if (state.config.mode === 'online' && p2p.role === 'guest') return;
      dom.gameOverModal.classList.remove('active');
      sfx.playPAChime();
      startNewGame();
    });

    dom.gameoverMenuBtn.addEventListener('click', () => {
      dom.gameOverModal.classList.remove('active');
      if (dom.gameContainer) dom.gameContainer.classList.remove('privacy-blur-active');
      if (dom.passInterstitialModal) dom.passInterstitialModal.classList.remove('active');
      state.status = 'MENU';
      syncSetupFormUI();
      dom.mainMenu.classList.add('active');
    });

    renderNewsTicker();
  }

  // ============================================================================
  // 12. GAME INITIALIZATION & TURN LOOP
  // ============================================================================

  function startNewGame() {
    state.status = 'PLAYING';
    state.round = 1;
    state.currentPlayerIndex = 0;
    state.localPlayerIndex = 0;
    state.floatingTexts = [];
    state.flightLogHistory = [];
    state.noraDebuted = false;
    state.nationalizePlayed = false;
    state.anchorRotationIndex = 0;
    state.headlines = shuffleArray([...getLocalizedHeadlines()]);
    if (dom.gameContainer) dom.gameContainer.classList.remove('privacy-blur-active');
    if (dom.passInterstitialModal) dom.passInterstitialModal.classList.remove('active');
    renderNewsTicker();

    // Draft a fresh airport terminal blueprint and gate graph
    generateProceduralTerminal();
    buildActionDeck();

    state.players = [];

    if (state.config.mode === 'online') {
      // ONLINE P2P MULTIPLAYER (HOST AUTHORITATIVE): 2 to 4 connected captains
      p2p.lobbyRoster.forEach((entry, idx) => {
        state.players.push({
          index: idx,
          peerId: entry.peerId,
          name: (entry.name || `CAPTAIN 0${idx + 1}`).toUpperCase(),
          isHuman: true,
          isDisconnected: false,
          color: entry.color,
          logo: entry.logo,
          passengers: 0,
          hand: [],
          skipNextTurn: false,
          sstUntilRound: 0,
          smearUntilRound: 0
        });
      });
    } else if (state.config.mode === 'coop') {
      // LOCAL CO-OP (PASS & PLAY): 2 to 4 human captains
      for (let i = 0; i < state.config.coopCount; i++) {
        const cfg = state.config.coopPlayers[i];
        state.players.push({
          index: i,
          name: (cfg.name || `CAPTAIN 0${i + 1}`).toUpperCase(),
          isHuman: true,
          isDisconnected: false,
          color: cfg.color,
          logo: cfg.logo,
          passengers: 0,
          hand: [],
          skipNextTurn: false,
          sstUntilRound: 0,
          smearUntilRound: 0
        });
      }
    } else {
      // SOLO FLIGHT: 1 Captain vs 1–3 Rival Syndicates
      const p0 = state.config.coopPlayers[0];
      const humanName = (state.config.humanName || p0.name || 'TRANS WORLD AIR').toUpperCase();
      const humanColor = state.config.humanColor || p0.color || '#D1192A';
      const humanLogo = state.config.humanLogo || p0.logo || 'wing';

      state.players.push({
        index: 0,
        name: humanName,
        isHuman: true,
        isDisconnected: false,
        color: humanColor,
        logo: humanLogo,
        passengers: 0,
        hand: [],
        skipNextTurn: false,
        sstUntilRound: 0,
        smearUntilRound: 0
      });

      const aiRoster = generateAIAirlineRoster(
        state.config.botCount,
        humanColor,
        humanLogo,
        humanName
      );

      for (let i = 0; i < state.config.botCount; i++) {
        const rival = aiRoster[i];
        state.players.push({
          index: i + 1,
          name: rival.name,
          isHuman: false,
          isDisconnected: false,
          color: rival.color,
          logo: rival.logo,
          passengers: 0,
          hand: [],
          skipNextTurn: false,
          sstUntilRound: 0,
          smearUntilRound: 0
        });
      }
    }

    // Apply Player 1's theme and reset audio escalation to Phase 1
    applyPlayerTheme(state.players[0].color, state.players[0].name);
    sfx.updateTurnProgress(1, state.config.maxRounds);

    // Deal 2 opening coupons; the automatic turn draw tops each hand up to 3
    state.players.forEach((player) => {
      drawCardForPlayer(player, { silent: true });
      drawCardForPlayer(player, { silent: true });
    });

    state.worldDeck = shuffleArray([...WORLD_DECK_DEFS]);
    state.activeWorldEvent = {
      id: 'clear_skies',
      title: 'INAUGURAL CLEAR SKIES',
      shortLabel: 'CLEAR SKIES (1.0x)',
      multiplier: 1.0,
      desc: 'Standard flight operations across all concourses. World Events draw at the end of every round.'
    };

    dom.flightLog.innerHTML = '';
    const modeLabel =
      state.config.mode === 'online'
        ? `ONLINE P2P • ${state.players.length} CAPTAINS`
        : state.config.mode === 'coop'
        ? `LOCAL CO-OP • ${state.players.length} CAPTAINS`
        : 'SOLO FLIGHT';
    addFlightLog(
      `Blueprint topology rolled: <strong>${state.mapArchetype.label}</strong> (${modeLabel}). ${state.mapArchetype.blurb}`
    );
    addFlightLog(
      `Control <strong>${state.majorityThreshold} of ${state.gates.length} gates</strong> for Sudden Death victory, or lead in Passengers after <strong>${state.config.maxRounds} rounds</strong>. One action per turn: claim a gate <em>or</em> play a coupon.`
    );
    pushLiveHeadline(
      `NEW HUB COMMISSIONED: ${state.mapArchetype.label} blueprint approved by the International Hub Commission.`
    );

    startPlayerTurn(0, { isInitialLaunch: true, skipInterstitial: state.config.mode === 'online' });
    if (state.config.mode === 'online' && p2p.role === 'host') {
      p2p.broadcastAuthoritativeState('GAME_START');
    }
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const MAX_HAND_SIZE = 3;

  function mintCard(def) {
    return { ...def, uid: 'card_' + Math.random().toString(36).slice(2, 9) };
  }

  function buildActionDeck() {
    const pile = [];
    const singletonAlreadyInPlay = (typeId) => {
      if (typeId === 'nationalize_industry' && state.nationalizePlayed) return true;
      if (state.players && state.players.some((p) => p.hand && p.hand.some((c) => c.typeId === typeId))) {
        return true;
      }
      return false;
    };
    ACTION_CARD_DEFS.forEach((def) => {
      if (def.singleton && singletonAlreadyInPlay(def.typeId)) return;
      for (let i = 0; i < def.copies; i++) pile.push(mintCard(def));
    });
    state.actionDeck = shuffleArray(pile);
    state.actionDiscard = [];
  }

  function discardCard(card) {
    if (!card) return;
    // Once "Nationalize the Industry" has been played, it is permanently purged from the game
    if (card.typeId === 'nationalize_industry' && state.nationalizePlayed) return;
    state.actionDiscard.push(card);
  }

  // Draws exactly 1 coupon, then enforces the strict 3-card hand limit by
  // discarding the OLDEST card in hand (FIFO) and flagging it for a UI toast.
  function drawCardForPlayer(player, opts = {}) {
    if (state.actionDeck.length === 0) {
      if (state.actionDiscard.length === 0) buildActionDeck();
      else {
        state.actionDeck = shuffleArray(state.actionDiscard);
        state.actionDiscard = [];
        if (!opts.silent) {
          addFlightLog('Dispatch reshuffled the discarded Flight Coupons into a fresh draw pile.');
        }
      }
    }

    const card = state.actionDeck.pop();
    if (!card) return null;
    player.hand.push(card);

    while (player.hand.length > MAX_HAND_SIZE) {
      const dumped = player.hand.shift();
      discardCard(dumped);
      if (!opts.silent) {
        addFlightLog(
          `<strong>${player.name}</strong> exceeded the 3-coupon limit \u2014 oldest coupon <em>${dumped.name}</em> was voided.`
        );
        if (player.isHuman) {
          flagShredAnimation(dumped.name);
          showToast(
            'HAND LIMIT 3 \u2014 COUPON VOIDED',
            `Oldest coupon <strong>${dumped.name}</strong> was automatically shredded.`
          );
        }
      }
    }
    return card;
  }

  function getGateById(gateId) {
    return state.gates.find((g) => g.id === gateId) || null;
  }

  function getPlayerGates(playerIndex) {
    return state.gates.filter((g) => g.owner === playerIndex);
  }

  function getAdjacentGates(gateId) {
    const neighbors = [];
    for (const [a, b] of state.connections) {
      if (a === gateId) neighbors.push(b);
      else if (b === gateId) neighbors.push(a);
    }
    return neighbors;
  }

  function isGateClosed(gate) {
    return gate.closedUntilRound > state.round;
  }

  function isGateShielded(gate) {
    return Boolean(gate && gate.shieldOwner !== null && gate.shieldOwner !== undefined && gate.owner === gate.shieldOwner);
  }

  function isConcourseSeverelyWeathered(concourseName) {
    if (!concourseName || !state.concourseWeather) return false;
    const exp = state.concourseWeather[concourseName];
    return Boolean(exp && state.round <= exp);
  }

  function isGateLoyaltyActive(gate) {
    return Boolean(gate && gate.loyaltyUntilRound && state.round <= gate.loyaltyUntilRound);
  }

  // Count directly connected corridors held by the same airline.
  function countFriendlyLinks(gate) {
    if (gate.owner === null) return 0;
    let links = 0;
    getAdjacentGates(gate.id).forEach((nId) => {
      const nGate = state.gates.find((g) => g.id === nId);
      if (nGate && nGate.owner === gate.owner) links++;
    });
    return links;
  }

  // ROUTE SYNERGY: +25% compounding per directly connected friendly neighbour.
  function routeSynergyMultiplier(gate) {
    return Math.pow(1.25, countFriendlyLinks(gate));
  }

  function sstMultiplierFor(playerIndex) {
    const p = state.players[playerIndex];
    return p && p.sstUntilRound >= state.round ? 2 : 1;
  }

  function calculateGateYield(gate) {
    if (isGateClosed(gate)) return 0;
    const base = gate.basePax * gate.outputMult;
    const weatherMult = isConcourseSeverelyWeathered(gate.concourse) ? 0.5 : 1.0;
    if (gate.owner === null) return Math.round(base * weatherMult);
    const raw = base * routeSynergyMultiplier(gate) * sstMultiplierFor(gate.owner) * weatherMult;
    const loyaltyBonus = isGateLoyaltyActive(gate) ? 50 : 0;
    return Math.round(raw * state.activeWorldEvent.multiplier) + loyaltyBonus;
  }

  // Largest contiguous chain of connected gates held by one airline.
  // Used by Smear Campaign and shown in the standings panel.
  function largestChainForPlayer(playerIndex) {
    const owned = getPlayerGates(playerIndex);
    const ownedIds = new Set(owned.map((g) => g.id));
    const seen = new Set();
    let best = [];

    owned.forEach((start) => {
      if (seen.has(start.id)) return;
      const stack = [start.id];
      const group = [];
      seen.add(start.id);
      while (stack.length) {
        const id = stack.pop();
        group.push(id);
        getAdjacentGates(id).forEach((nId) => {
          if (ownedIds.has(nId) && !seen.has(nId)) {
            seen.add(nId);
            stack.push(nId);
          }
        });
      }
      if (group.length > best.length) best = group;
    });
    return best;
  }

  function calculatePlayerTurnPax(playerIndex) {
    return getPlayerGates(playerIndex).reduce((sum, g) => sum + calculateGateYield(g), 0);
  }

  function checkSuddenDeathWinner() {
    for (const player of state.players) {
      const count = countMajorityGates(player.index);
      if (count >= state.majorityThreshold) {
        triggerGameOver(player, 'SUDDEN_DEATH');
        return true;
      }
    }
    return false;
  }

  function triggerGameOver(winner, reasonBadge) {
    state.status = 'GAME_OVER';
    state.lastGameOverWinner = winner;
    state.lastGameOverReason = reasonBadge;
    if (dom.gameContainer) dom.gameContainer.classList.remove('privacy-blur-active');
    if (dom.passInterstitialModal) dom.passInterstitialModal.classList.remove('active');
    applyPlayerTheme(winner.color, winner.name);
    sfx.playVictory();

    const isSuddenDeath = String(reasonBadge).includes('SUDDEN');
    const logoObj = AIRLINE_LOGOS.find((l) => l.id === winner.logo) || AIRLINE_LOGOS[0];
    dom.gameoverLogoSlot.innerHTML = logoObj.svg;
    dom.gameoverLogoSlot.style.color = winner.color;
    dom.gameoverReasonBadge.textContent = isSuddenDeath
      ? t('gameover.suddenDeathBadge')
      : t('gameover.finalRoundBadge', { round: state.config.maxRounds });
    dom.gameoverTitle.textContent = t('gameover.triumphsTitle', { name: winner.name });

    const winnerGates = getPlayerGates(winner.index).length;
    if (isSuddenDeath) {
      dom.gameoverSubtitle.textContent = t('gameover.suddenDeathSub', {
        name: winner.name,
        gates: winnerGates,
        total: state.gates.length,
        round: state.round
      });
    } else {
      dom.gameoverSubtitle.textContent = t('gameover.finalRoundSub', {
        round: state.config.maxRounds,
        name: winner.name,
        pax: winner.passengers.toLocaleString()
      });
    }

    const ranked = [...state.players].sort((a, b) => {
      if (a.index === winner.index) return -1;
      if (b.index === winner.index) return 1;
      if (b.passengers !== a.passengers) return b.passengers - a.passengers;
      return getPlayerGates(b.index).length - getPlayerGates(a.index).length;
    });

    dom.finalStandingsTable.innerHTML = ranked
      .map((p, idx) => {
        const gCount = getPlayerGates(p.index).length;
        const roleTag =
          state.config.mode === 'coop'
            ? t('gameover.roleCoop', { n: p.index + 1 })
            : p.isHuman
            ? t('gameover.roleYou')
            : t('gameover.roleRival');
        return `
        <div class="standing-row ${idx === 0 ? 'winner-row' : ''}" style="--player-color: ${p.color}">
          <div>
            <span class="standing-rank">#${idx + 1}</span>
            <strong>${p.name}</strong> ${roleTag}
          </div>
          <div class="standing-stats">
            ${gCount} ${t('hud.gatesUnit')} • ${p.passengers.toLocaleString()} PAX
          </div>
        </div>
      `;
      })
      .join('');

    dom.gameOverModal.classList.add('active');
    updateAllUI();
  }

  /**
   * Opens the full-screen Pass-and-Play Privacy Interstitial overlay in Local
   * Co-Op mode, blurring the game board, hiding the card hand UI, and shifting
   * the global UI theme to the incoming player's airline color.
   */
  function openPassAndPlayInterstitial(playerIndex) {
    state.currentPlayerIndex = playerIndex;
    state.status = 'PASS_INTERSTITIAL';
    const nextPlayer = state.players[playerIndex];

    // Immediately shift UI theme to the incoming human player's color
    applyPlayerTheme(nextPlayer.color, nextPlayer.name);

    // Blur board and hide card hand so secret coupons are never exposed
    if (dom.gameContainer) dom.gameContainer.classList.add('privacy-blur-active');

    const logoObj = AIRLINE_LOGOS.find((l) => l.id === nextPlayer.logo) || AIRLINE_LOGOS[0];
    const padRound = String(state.round).padStart(2, '0');
    if (dom.interstitialRoundTag) {
      dom.interstitialRoundTag.textContent = `${t('hud.roundLabel')} ${padRound} / ${state.config.maxRounds}`;
    }
    if (dom.interstitialEmblemSlot) {
      dom.interstitialEmblemSlot.innerHTML = logoObj.svg;
    }
    if (dom.interstitialBoardingTitle) {
      dom.interstitialBoardingTitle.textContent = t('interstitial.boardingTitle', { name: nextPlayer.name });
    }
    if (dom.interstitialReadyBtnText) {
      dom.interstitialReadyBtnText.textContent = t('interstitial.readyBtn', { name: nextPlayer.name });
    }
    if (dom.passInterstitialModal) {
      dom.passInterstitialModal.classList.add('active');
    }

    sfx.playPAChime();
    updateAllUI();
  }

  function dismissPassAndPlayInterstitial() {
    if (state.status !== 'PASS_INTERSTITIAL') return;
    if (dom.passInterstitialModal) dom.passInterstitialModal.classList.remove('active');
    if (dom.gameContainer) dom.gameContainer.classList.remove('privacy-blur-active');
    state.status = 'PLAYING';
    sfx.playUiClick();
    executePlayerTurnStart(state.currentPlayerIndex);
  }

  /**
   * Routes turn transitions based on the active mode:
   *  - Solo Flight: Captain -> Rival 1 -> Rival 2 -> ... -> World Event -> Loop
   *  - Local Co-Op: Captain 1 -> Interstitial -> Captain 2 -> Interstitial -> ... -> World Event -> Loop
   */
  function startPlayerTurn(playerIndex, opts = {}) {
    if (state.status !== 'PLAYING' && state.status !== 'PASS_INTERSTITIAL') return;
    const player = state.players[playerIndex];
    if (!player) return;

    if (state.config.mode === 'coop' && player.isHuman && !opts.skipInterstitial) {
      openPassAndPlayInterstitial(playerIndex);
      return;
    }

    state.status = 'PLAYING';
    executePlayerTurnStart(playerIndex);
  }

  function executePlayerTurnStart(playerIndex) {
    if (state.status !== 'PLAYING') return;

    state.currentPlayerIndex = playerIndex;
    const player = state.players[playerIndex];

    // DYNAMIC TURN-BASED UI THEMING:
    // Shift the entire UI to the active human player's color, or revert to a
    // neutral vintage terminal theme (slate charcoal) when a rival syndicate is acting.
    if (player.isHuman) {
      applyPlayerTheme(player.color, player.name);
    } else {
      applyNeutralAITerminalTheme();
    }

    // Expire any Fortress Hub radar shields owned by this player when their new turn begins
    state.gates.forEach((g) => {
      if (g.shieldOwner === playerIndex) {
        g.shieldOwner = null;
      }
    });

    // ONE action per turn: a gate claim OR a coupon, never both (with uncommitted staging).
    state.turnState = {
      actionTaken: false,
      actionType: null,
      selectedCardIndex: null,
      stagedAction: null,
      aiBusy: !player.isHuman,
      networkPending: false
    };

    // DISCONNECTED ONLINE PEER: In Holding Pattern (Inactive)
    if (player.isDisconnected) {
      addFlightLog(
        `<strong>${player.name}</strong> remains <em>${t('online.inactiveHoldingChip')}</em> — skipping turn.`
      );
      updateAllUI();
      if (state.config.mode === 'online' && p2p.role === 'host') {
        p2p.broadcastAuthoritativeState();
      }
      window.setTimeout(() => advanceTurn(), 550);
      return;
    }

    // HOLDING PATTERN: the carrier is stacked over the field and forfeits
    // its entire turn — no boarding, no draw, no action.
    if (player.skipNextTurn) {
      player.skipNextTurn = false;
      sfx.playError();
      spawnCanvasFloatText(
        state.rotundaCenter.x,
        state.rotundaCenter.y - 40,
        `${player.name.split(' ')[0]} IN HOLDING PATTERN`,
        player.color
      );
      addFlightLog(
        `<strong>${player.name}</strong> is stuck in a <em>Holding Pattern</em> and forfeits this entire turn.`
      );
      updateAllUI();
      if (state.config.mode === 'online' && p2p.role === 'host') {
        p2p.broadcastAuthoritativeState();
      }
      window.setTimeout(() => advanceTurn(), 1100);
      return;
    }

    const ownedGates = getPlayerGates(playerIndex);
    const smeared = player.smearUntilRound >= state.round;
    const smearedIds = smeared ? new Set(largestChainForPlayer(playerIndex)) : null;
    let turnPax = 0;
    let closedCount = 0;
    let smearLoss = 0;

    ownedGates.forEach((g) => {
      if (isGateClosed(g)) {
        closedCount++;
        spawnCanvasFloatText(g.x, g.y - 36, 'CLOSED', '#8A8A8A');
        return;
      }
      let yieldPax = calculateGateYield(g);
      const hitBySmear = smearedIds && smearedIds.has(g.id);
      if (hitBySmear) {
        const lost = Math.round(yieldPax * 0.5);
        smearLoss += lost;
        yieldPax -= lost;
      }
      turnPax += yieldPax;
      const links = countFriendlyLinks(g);
      let label = `+${yieldPax}`;
      if (hitBySmear) label = `+${yieldPax} (SMEARED)`;
      else if (isGateLoyaltyActive(g)) label = `+${yieldPax} (+50 LOYALTY)`;
      else if (sstMultiplierFor(playerIndex) > 1) label = `+${yieldPax} (SST x2)`;
      else if (links > 0) label = `+${yieldPax} (x${links} ROUTE)`;
      spawnCanvasFloatText(g.x, g.y - 36, label, player.color);
    });

    if (smeared) player.smearUntilRound = 0;

    if (turnPax > 0) {
      player.passengers += turnPax;
      addFlightLog(
        `<strong>${player.name}</strong> boarded <strong>+${turnPax.toLocaleString()} PAX</strong> across ${ownedGates.length - closedCount} gate(s)${closedCount > 0 ? ` (${closedCount} closed for runway work)` : ''}${smearLoss > 0 ? ` — <em>Smear Campaign</em> cost them ${smearLoss.toLocaleString()} PAX` : ''}.`
      );

      // CODE-SHARE AGREEMENT DIVIDENDS: active partners receive 25% of this player's gate revenue
      if (Array.isArray(state.codeShareLinks) && state.codeShareLinks.length > 0) {
        state.codeShareLinks.forEach((treaty) => {
          if (state.round > treaty.expiresAfterRound) return;
          let partnerIdx = null;
          if (treaty.playerA === playerIndex) partnerIdx = treaty.playerB;
          else if (treaty.playerB === playerIndex) partnerIdx = treaty.playerA;
          if (partnerIdx !== null && state.players[partnerIdx]) {
            const partner = state.players[partnerIdx];
            const dividend = Math.round(turnPax * 0.25);
            if (dividend > 0) {
              partner.passengers += dividend;
              spawnCanvasFloatText(
                state.rotundaCenter.x,
                state.rotundaCenter.y - 18,
                `CODE-SHARE +${dividend} PAX (${partner.name.split(' ')[0]})`,
                partner.color
              );
              addFlightLog(
                `<em>Code-Share Agreement:</em> <strong>${partner.name}</strong> received <strong>+${dividend.toLocaleString()} PAX</strong> (25% interline dividend from ${player.name}).`
              );
            }
          }
        });
      }
    }

    // AUTOMATIC TURN DRAW: every carrier draws exactly 1 coupon each turn.
    const drawn = drawCardForPlayer(player);
    if (drawn && player.isHuman) {
      addFlightLog(`Issued Flight Coupon to <strong>${player.name}</strong>: <strong>${drawn.name}</strong>.`);
    }

    // Escalate Web Audio soundtrack tempo and arrangement layers by turn ratio
    sfx.updateTurnProgress(state.round, state.config.maxRounds);
    updateAllUI();
    if (state.config.mode === 'online' && p2p.role === 'host') {
      p2p.broadcastAuthoritativeState();
    }

    if (player.isHuman) {
      sfx.playTurnChime();
    } else {
      setTimeout(() => executeAITurn(player), 760);
    }
  }

  function advanceTurn() {
    if (state.status !== 'PLAYING') return;
    if (checkSuddenDeathWinner()) {
      if (state.config.mode === 'online' && p2p.role === 'host') {
        p2p.broadcastAuthoritativeState();
      }
      return;
    }

    const nextIndex = state.currentPlayerIndex + 1;
    if (nextIndex < state.players.length) {
      startPlayerTurn(nextIndex);
    } else {
      resolveEndOfRound();
      if (state.config.mode === 'online' && p2p.role === 'host') {
        p2p.broadcastAuthoritativeState();
      }
    }
  }

  const WORLD_EVENT_CADENCE = 3; // Global bulletins fire once every 3 full rounds

  function roundsUntilNextBulletin() {
    return WORLD_EVENT_CADENCE - (state.round % WORLD_EVENT_CADENCE);
  }

  // Hostile Takeover leases expire here: every temporarily seized gate snaps
  // back to its original carrier at the end of the round.
  function revertTemporaryTakeovers() {
    state.gates.forEach((g) => {
      if (g.temporaryUntilRound && g.temporaryUntilRound <= state.round) {
        const raider = g.owner !== null ? state.players[g.owner] : null;
        const restoredTo = g.temporaryPreviousOwner;
        g.owner = restoredTo;
        g.temporaryUntilRound = 0;
        g.temporaryPreviousOwner = null;
        g.pulseAnim = 1.0;
        const restoredPlayer = restoredTo !== null ? state.players[restoredTo] : null;
        spawnCanvasFloatText(
          g.x,
          g.y - 40,
          'LEASE REVERTED',
          restoredPlayer ? restoredPlayer.color : '#111111'
        );
        addFlightLog(
          `<em>Hostile Takeover</em> of <strong>${g.id}</strong> expired — the lease reverted from ${
            raider ? raider.name : 'the raider'
          } to <strong>${restoredPlayer ? restoredPlayer.name : 'the terminal authority'}</strong>.`
        );
      }
    });
  }

  function resolveEndOfRound() {
    if (checkSuddenDeathWinner()) return;

    // Expire temporary leases BEFORE scoring the final round
    revertTemporaryTakeovers();
    if (checkSuddenDeathWinner()) return;

    // Prune expired Severe Weather branch advisories and Code-Share treaties
    if (state.concourseWeather) {
      Object.keys(state.concourseWeather).forEach((branch) => {
        if (state.concourseWeather[branch] <= state.round) {
          delete state.concourseWeather[branch];
        }
      });
    }
    if (Array.isArray(state.codeShareLinks)) {
      state.codeShareLinks = state.codeShareLinks.filter((c) => c.expiresAfterRound > state.round);
    }

    if (state.round >= state.config.maxRounds) {
      const sorted = [...state.players].sort((a, b) => {
        if (b.passengers !== a.passengers) return b.passengers - a.passengers;
        return getPlayerGates(b.index).length - getPlayerGates(a.index).length;
      });
      triggerGameOver(sorted[0], `FINAL ROUND ${state.config.maxRounds} — PASSENGER SUPREMACY`);
      return;
    }

    // REMOTE "Z" GATE AUTO-SPAWN:
    // When all original terminal gates on the board are claimed and no player has met
    // the majority gate control win condition, automatically spawn one new "Z" Gate
    // at the end of each completed round.
    const originalPool = getMajorityGatePool();
    const allOriginalClaimed = originalPool.length > 0 && originalPool.every((g) => g.owner !== null);
    if (allOriginalClaimed) {
      const zGate = spawnApronZGate(null);
      if (zGate) {
        spawnCanvasFloatText(zGate.x, zGate.y - 42, `APRON GATE ${zGate.id} OPENED!`, '#E3B505');
        addFlightLog(
          `<strong>APRON EXPANSION:</strong> All main concourse gates are leased with no majority winner — Control Tower opened remote bus stand <strong>${zGate.id}</strong> on the tarmac!` 
        );
        pushLiveHeadline(
          `Terminal overcrowding forces authority to open remote Apron Bus Stand ${zGate.id}; passengers grumble at shuttle transfer.`
        );
        initPassengerAgents();
      }
    }

    // CADENCE: global bulletins only break every 3 full rounds.
    if (state.round % WORLD_EVENT_CADENCE !== 0) {
      addFlightLog(
        `Round ${state.round} closed. Next World Aviation Bulletin breaks in <strong>${roundsUntilNextBulletin()} round(s)</strong>.`
      );
      beginNextRoundAfterWorldCard();
      return;
    }

    if (state.worldDeck.length === 0) {
      state.worldDeck = shuffleArray([...WORLD_DECK_DEFS]);
    }
    const worldCard = state.worldDeck.pop();
    state.activeWorldEvent = worldCard;

    const effectSummary = worldCard.onResolve ? worldCard.onResolve(state) : '';
    addFlightLog(
      `<strong>WORLD BULLETIN [${worldCard.title}]:</strong> ${worldCard.desc} ${effectSummary}`
    );
    pushLiveHeadline(
      `BREAKING AVIATION BULLETIN: ${worldCard.title} — ${worldCard.impactText}.`
    );

    openBreakingNewsTakeover(worldCard, effectSummary);
    updateAllUI();
  }

  // --------------------------------------------------------------------------
  // BROADCAST NEWS ANCHOR ROSTER ("BREAKING NEWS" OVERLAY)
  // Rotates through 4 distinct custom inline-SVG characters every 3 rounds:
  //   1. Classic 50s Anchor (Biff Conroy)
  //   2. Vintage Sci-Fi Automaton (Unit UNIVAC-9)
  //   3. Little Green Observer (Zorblax of Sector 7G)
  //   4. Retro Aviator (Capt. "Ace" Montgomery)
  // --------------------------------------------------------------------------
  const NEWS_ANCHOR_ROSTER = [
    {
      id: 'classic_50s',
      nameplate: 'BIFF CONROY • CHIEF AVIATION CORRESPONDENT',
      entryClass: 'anchor-enter-slide-left',
      quirkLines: [
        '“GOOD EVENING, JET-SETTERS — FLASH WIRE FROM THE ROTUNDA:”',
        '“HOLD YOUR MARTINI GLASSES, FOLKS — THIS JUST CROSSED THE TELETYPE:”'
      ],
      svg: `<svg class="news-anchor" viewBox="0 0 200 210" role="img" aria-label="Classic 1950s News Anchor">
        <defs>
          <pattern id="houndstooth" width="10" height="10" patternUnits="userSpaceOnUse">
            <rect width="10" height="10" fill="#EDEAE2" />
            <path d="M0 0h5v5H0zM5 5h5v2L7 10H5zM0 5l3-2v2z" fill="#181818" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="200" height="210" fill="#1B1B1B" />
        <circle cx="100" cy="86" r="74" fill="#2A2A2A" />
        <path d="M18 150h164v60H18z" fill="#232323" />
        <!-- Houndstooth jacket + lapels + tie -->
        <path d="M30 210c0-34 28-52 70-52s70 18 70 52z" fill="url(#houndstooth)" stroke="#111111" stroke-width="2.5" />
        <path d="M72 160l28 34 28-34-12-2-16 22-16-22z" fill="#111111" />
        <path d="M84 160h32l-16 26z" fill="#F6F4F0" />
        <path d="M96 170h8l4 40H92z" fill="var(--brand-primary)" />
        <!-- Neck + head -->
        <path d="M90 128h20v22H90z" fill="#E8B98F" />
        <ellipse cx="100" cy="92" rx="38" ry="44" fill="#F2C79C" />
        <!-- Slicked-back / bouffant 50s hair -->
        <path d="M58 78c0-34 18-48 44-48 22 0 38 12 40 44-6-16-20-22-40-22-15 0-26 4-32 14z" fill="#231A12" />
        <path d="M66 44c12-10 34-12 52-4" stroke="#4A3828" stroke-width="3" fill="none" stroke-linecap="round" />
        <!-- Heavy black-rimmed glasses -->
        <g stroke="#111111" stroke-width="5.5" fill="none">
          <rect x="63" y="77" width="31" height="24" rx="4" fill="#CFE6EA" fill-opacity="0.55" />
          <rect x="106" y="77" width="31" height="24" rx="4" fill="#CFE6EA" fill-opacity="0.55" />
          <path d="M94 89h12" />
          <path d="M63 85 51 81M137 85l12-4" />
        </g>
        <circle cx="79" cy="89" r="4" fill="#111111" />
        <circle cx="121" cy="89" r="4" fill="#111111" />
        <path d="M67 69h26M107 69h26" stroke="#231A12" stroke-width="4" />
        <path d="M100 97v10h7" stroke="#D8A77B" stroke-width="3" fill="none" />
        <ellipse id="anchor-mouth" cx="100" cy="120" rx="12" ry="2" fill="#7E2B2B" />
        <!-- Vintage omnidirectional microphone -->
        <g>
          <rect x="128" y="150" width="10" height="46" rx="4" fill="#4A4A4A" />
          <path d="M118 140h30v18h-30z" fill="var(--brand-primary)" />
          <text x="133" y="153" font-family="monospace" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">WAIR</text>
          <ellipse cx="133" cy="132" rx="15" ry="12" fill="#8E9499" stroke="#232323" stroke-width="2" />
          <path d="M120 128h26M120 132h26M120 136h26" stroke="#2A2A2A" stroke-width="2" />
        </g>
      </svg>`
    },
    {
      id: 'scifi_robot',
      nameplate: 'UNIT UNIVAC-9 • AUTOMATED TELE-CASTER',
      entryClass: 'anchor-enter-mech-rise',
      quirkLines: [
        '[BEEP-BOOP // VACUUM TUBES NOMINAL // PUNCH-CARD BULLETIN FOLLOWS]:',
        '[TELEMETRY TAPE #1962 // CALCULATING TERMINAL TURBULENCE: 99.8%]:'
      ],
      svg: `<svg class="news-anchor" viewBox="0 0 200 210" role="img" aria-label="Vintage Sci-Fi Robot News Anchor">
        <rect x="0" y="0" width="200" height="210" fill="#14181D" />
        <circle cx="100" cy="90" r="74" fill="#1E2630" />
        <!-- Chrome chassis shoulders -->
        <path d="M30 210 L46 154 H154 L170 210 Z" fill="#7C858E" stroke="#111111" stroke-width="3" />
        <rect x="62" y="166" width="76" height="28" rx="3" fill="#232B33" stroke="#111111" stroke-width="2" />
        <circle cx="76" cy="180" r="5" fill="#D1192A" />
        <circle cx="92" cy="180" r="5" fill="#E3B505" />
        <circle cx="108" cy="180" r="5" fill="#22C55E" />
        <!-- Corrugated neck -->
        <rect x="84" y="132" width="32" height="24" fill="#525A61" stroke="#111111" stroke-width="2" />
        <path d="M84 140h32M84 148h32" stroke="#232B33" stroke-width="2.5" />
        <!-- Antenna with pulsing red bulb -->
        <line x1="100" y1="18" x2="100" y2="44" stroke="#9CA3AF" stroke-width="4" />
        <path d="M90 30 Q100 24 110 30" stroke="#60A5FA" stroke-width="1.8" fill="none" />
        <circle id="anchor-bulb" cx="100" cy="15" r="8" fill="#EF4444" stroke="#111111" stroke-width="2" />
        <!-- Boxy riveted chrome head -->
        <rect x="50" y="44" width="100" height="90" rx="10" fill="#AEB6BF" stroke="#111111" stroke-width="3" />
        <rect x="56" y="50" width="88" height="78" rx="6" fill="#CBD5E1" />
        <!-- Ear coils -->
        <rect x="40" y="72" width="10" height="30" rx="3" fill="#64748B" stroke="#111111" stroke-width="2" />
        <rect x="150" y="72" width="10" height="30" rx="3" fill="#64748B" stroke="#111111" stroke-width="2" />
        <!-- Animated Vacuum Tube Eyes -->
        <g>
          <rect x="66" y="60" width="24" height="30" rx="10" fill="#1E293B" stroke="#111111" stroke-width="2.5" />
          <circle id="anchor-tube-l" cx="78" cy="76" r="7" fill="#F59E0B" />
          <path d="M74 84 L78 72 L82 84" stroke="#FEF08A" stroke-width="2" fill="none" />
          <rect x="110" y="60" width="24" height="30" rx="10" fill="#1E293B" stroke="#111111" stroke-width="2.5" />
          <circle id="anchor-tube-r" cx="122" cy="76" r="7" fill="#F59E0B" />
          <path d="M118 84 L122 72 L126 84" stroke="#FEF08A" stroke-width="2" fill="none" />
        </g>
        <!-- Swinging Voltmeter Dial Mouth -->
        <rect x="68" y="98" width="64" height="24" rx="4" fill="#FEF9C3" stroke="#111111" stroke-width="2.5" />
        <path d="M74 118 A26 20 0 0 1 126 118" stroke="#94A3B8" stroke-width="2" fill="none" stroke-dasharray="3 3" />
        <line id="anchor-dial-needle" x1="100" y1="120" x2="100" y2="102" stroke="#D1192A" stroke-width="3" stroke-linecap="round" />
        <circle cx="100" cy="120" r="3.5" fill="#111111" />
        <ellipse id="anchor-mouth" cx="100" cy="120" rx="1" ry="1" fill="none" />
      </svg>`
    },
    {
      id: 'green_alien',
      nameplate: 'ZORBLAX OF SECTOR 7G • ORBITAL ATTACHÉ',
      entryClass: 'anchor-enter-beam-down',
      quirkLines: [
        '⟪GREETINGS, BIPEDAL COMMUTERS — TRANSLATION CRYSTAL ACTIVE⟫',
        '⟪EARTH CONCOURSE TELEMETRY RECEIVED BY SAUCER COMMAND⟫'
      ],
      svg: `<svg class="news-anchor" viewBox="0 0 200 210" role="img" aria-label="Little Green Alien News Anchor">
        <rect x="0" y="0" width="200" height="210" fill="#0F1E19" />
        <circle cx="100" cy="84" r="74" fill="#163028" />
        <!-- Sleek metallic silver space tunic & high V-collar -->
        <path d="M34 210 C38 168 64 152 100 152 C136 152 162 168 166 210 Z" fill="#334155" stroke="#111111" stroke-width="2.5" />
        <path d="M58 144 L100 184 L142 144 L126 136 L100 162 L74 136 Z" fill="#E2E8F0" stroke="#111111" stroke-width="2.5" />
        <!-- Slender neck + Bulbous green cranium -->
        <rect x="91" y="128" width="18" height="24" fill="#4ADE80" />
        <path d="M52 78 C52 38 148 38 148 78 C148 106 124 134 100 134 C76 134 52 106 52 78 Z" fill="#4ADE80" stroke="#111111" stroke-width="2.8" />
        <!-- Twin antennae -->
        <path d="M78 48 Q66 24 58 26" stroke="#22C55E" stroke-width="4" fill="none" stroke-linecap="round" />
        <path d="M122 48 Q134 24 142 26" stroke="#22C55E" stroke-width="4" fill="none" stroke-linecap="round" />
        <circle id="anchor-bulb" cx="58" cy="26" r="6" fill="#A7F3D0" stroke="#111111" stroke-width="2" />
        <circle cx="142" cy="26" r="6" fill="#A7F3D0" stroke="#111111" stroke-width="2" />
        <!-- Giant glossy obsidian almond eyes -->
        <ellipse cx="78" cy="86" rx="16" ry="11" transform="rotate(14 78 86)" fill="#111111" />
        <ellipse cx="122" cy="86" rx="16" ry="11" transform="rotate(-14 122 86)" fill="#111111" />
        <circle cx="73" cy="82" r="3.5" fill="#FFFFFF" />
        <circle cx="117" cy="82" r="3.5" fill="#FFFFFF" />
        <!-- Animated mouth -->
        <ellipse id="anchor-mouth" cx="100" cy="118" rx="7" ry="2" fill="#064E3B" />
        <!-- Hovering faceted translation crystal -->
        <g id="anchor-crystal" transform="translate(0, 0)">
          <polygon points="146,126 160,144 146,166 132,144" fill="#38BDF8" stroke="#111111" stroke-width="2.2" />
          <polygon points="146,126 153,144 146,166" fill="#BAE6FD" opacity="0.7" />
          <circle cx="146" cy="145" r="20" fill="none" stroke="#7DD3FC" stroke-width="1.4" stroke-dasharray="3 3" />
        </g>
      </svg>`
    },
    {
      id: 'aviator_ace',
      nameplate: 'CAPT. “ACE” MONTGOMERY • BARNSTORMING DESK',
      entryClass: 'anchor-enter-bank-swoop',
      quirkLines: [
        '“ROGER-WILCO, TOWER! STRAP IN FOR THIS INBOUND WEATHER SQUALL:”',
        '“TALLY-HO, CAPTAINS! CHECK YOUR ALTIMETERS AND TRIM TABS:”'
      ],
      svg: `<svg class="news-anchor" viewBox="0 0 200 210" role="img" aria-label="Retro Aviator News Anchor">
        <rect x="0" y="0" width="200" height="210" fill="#1F1916" />
        <circle cx="100" cy="86" r="74" fill="#2E241E" />
        <!-- Classic leather aviation bomber jacket + shearling collar + white silk scarf -->
        <path d="M30 210c0-34 28-52 70-52s70 18 70 52z" fill="#5C3A21" stroke="#111111" stroke-width="2.5" />
        <path d="M64 156 Q80 176 100 174 Q120 176 136 156 Q128 144 100 146 Q72 144 64 156 Z" fill="#F5EFE6" stroke="#111111" stroke-width="2" />
        <path d="M88 158h24l6 52H82z" fill="#FFFFFF" stroke="#111111" stroke-width="2" />
        <!-- Neck + head -->
        <path d="M90 128h20v22H90z" fill="#E5B58B" />
        <ellipse cx="100" cy="94" rx="37" ry="42" fill="#F0C49B" stroke="#111111" stroke-width="2" />
        <!-- Leather flight cap with ear flaps -->
        <path d="M58 88 C56 46 76 36 100 36 C124 36 144 46 142 88 L148 112 L136 112 L134 78 C122 68 78 68 66 78 L64 112 L52 112 Z" fill="#4A2C18" stroke="#111111" stroke-width="2.5" />
        <!-- Brass goggles on forehead -->
        <rect x="58" y="56" width="84" height="8" fill="#27272A" />
        <rect x="66" y="48" width="30" height="20" rx="7" fill="#D97706" stroke="#111111" stroke-width="2.5" />
        <rect x="104" y="48" width="30" height="20" rx="7" fill="#D97706" stroke="#111111" stroke-width="2.5" />
        <rect x="70" y="52" width="22" height="12" rx="4" fill="#BAE6FD" />
        <rect x="108" y="52" width="22" height="12" rx="4" fill="#BAE6FD" />
        <!-- Eyes, brows & nose -->
        <path d="M72 80h20M108 80h20" stroke="#3E2723" stroke-width="3.5" stroke-linecap="round" />
        <circle cx="82" cy="90" r="4" fill="#111111" />
        <circle cx="118" cy="90" r="4" fill="#111111" />
        <path d="M100 92v13h6" stroke="#C8966E" stroke-width="3" fill="none" />
        <!-- Dapper pencil mustache -->
        <path id="anchor-mustache" d="M76 113 Q90 108 100 112 Q110 108 124 113" stroke="#231A12" stroke-width="3.5" fill="none" stroke-linecap="round" />
        <!-- Animated mouth -->
        <ellipse id="anchor-mouth" cx="100" cy="121" rx="10" ry="2" fill="#7E2B2B" />
      </svg>`
    },
    {
      id: 'nora_cat',
      nameplate: 'NORA THE TABBY • LATE-NIGHT TELETYPE DESK ANCHOR',
      entryClass: 'anchor-enter-nora-desk',
      quirkLines: [
        '“*SIGH*... YOU WOKE ME FROM MY CONCOURSE NAP FOR THIS BULLETIN:”',
        '“PURR-FECT. ANOTHER DELAY ON THE TARMAC. READ IT YOURSELF, CAPTAINS:”',
        '“TAP-TAP... IS THIS MICROPHONE ON? FINE. HERE IS YOUR GLOBAL WIRE:”'
      ],
      svg: `<svg class="news-anchor" viewBox="0 0 200 210" role="img" aria-label="Nora the Fluffy Long-Haired Tabby Cat News Anchor">
        <rect x="0" y="0" width="200" height="210" fill="#1E1A18" />
        <circle cx="100" cy="82" r="74" fill="#2E2723" />
        <!-- Mid-century studio sunburst rays -->
        <path d="M100 82 L26 18 M100 82 L174 18 M100 82 L16 82 M100 82 L184 82" stroke="#433831" stroke-width="2" />

        <!-- Fluffy dark brown/grey tabby shoulders & long-haired body coat -->
        <path d="M32 174 C30 144 48 124 100 124 C152 124 170 144 168 174 Z" fill="#4A413A" stroke="#111111" stroke-width="2.6" />
        <!-- Dark tabby shoulder stripes -->
        <path d="M42 152 Q56 144 64 156 M158 152 Q144 144 136 156" stroke="#221D1A" stroke-width="4" fill="none" stroke-linecap="round" />

        <!-- LUXURIOUS FLUFFY WHITE CHEST "BIB" (scalloped long fur plastron) -->
        <path d="M62 122 Q52 134 58 144 Q48 154 62 164 Q76 174 100 172 Q124 174 138 164 Q152 154 142 144 Q148 134 138 122 Z" fill="#FAF8F5" stroke="#111111" stroke-width="2.4" stroke-linejoin="round" />
        <path d="M70 134 Q84 142 100 136 Q116 142 130 134 M68 150 Q84 158 100 152 Q116 158 132 150" stroke="#DDD6CA" stroke-width="2.2" fill="none" stroke-linecap="round" />

        <!-- Long-Haired Tabby Cat Ears with fluffy white inner ear furnishings -->
        <polygon points="50,70 40,20 84,46" fill="#3D352E" stroke="#111111" stroke-width="2.8" stroke-linejoin="round" />
        <polygon points="54,62 47,30 76,47" fill="#C99E93" />
        <path d="M52 58 L38 50 M56 64 L41 60" stroke="#FAF8F5" stroke-width="2.6" stroke-linecap="round" />

        <polygon points="150,70 160,20 116,46" fill="#3D352E" stroke="#111111" stroke-width="2.8" stroke-linejoin="round" />
        <polygon points="146,62 153,30 124,47" fill="#C99E93" />
        <path d="M148 58 L162 50 M144 64 L159 60" stroke="#FAF8F5" stroke-width="2.6" stroke-linecap="round" />

        <!-- VERY FLUFFY LONG-HAIRED DARK BROWN/GREY TABBY HEAD & CHEEK RUFFS -->
        <path d="M56 54 Q76 40 100 40 Q124 40 144 54 L156 68 L148 74 L164 86 L152 94 L162 106 L144 114 L148 122 C132 132 116 134 100 134 C84 134 68 132 52 122 L56 114 L38 106 L48 94 L36 86 L52 74 L44 68 Z" fill="#524840" stroke="#111111" stroke-width="2.8" stroke-linejoin="round" />
        <!-- Warm grey-brown undercoat shading on crown & cheeks -->
        <ellipse cx="100" cy="82" rx="42" ry="34" fill="#61554C" />

        <!-- Dark charcoal-brown tabby 'M' forehead markings & cheek tiger stripes -->
        <path d="M80 60 L88 47 L100 58 L112 47 L120 60" fill="none" stroke="#1F1A17" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M93 44 V54 M107 44 V54" stroke="#1F1A17" stroke-width="2.6" stroke-linecap="round" />
        <path d="M46 82 Q60 80 66 86 M44 93 Q58 92 65 97 M48 104 Q60 103 67 107" stroke="#1F1A17" stroke-width="3.2" fill="none" stroke-linecap="round" />
        <path d="M154 82 Q140 80 134 86 M156 93 Q142 92 135 97 M152 104 Q140 103 133 107" stroke="#1F1A17" stroke-width="3.2" fill="none" stroke-linecap="round" />

        <!-- DISTINCT WHITE MUZZLE & BLAZE (inverted-V plume + puffy white whisker pads & chin) -->
        <path d="M100 78 L86 96 C72 96 68 108 76 117 C82 123 91 126 100 126 C109 126 118 123 124 117 C132 108 128 96 114 96 Z" fill="#FFFFFF" stroke="#111111" stroke-width="2.2" stroke-linejoin="round" />

        <!-- COZY YET DEEPLY UNAMUSED, SLEEPY, HEAVY-LIDDED FELINE GLARE -->
        <g>
          <!-- Olive-gold / amber feline irises -->
          <ellipse cx="79" cy="82" rx="11" ry="9.5" fill="#C5B358" stroke="#111111" stroke-width="2.2" />
          <ellipse cx="121" cy="82" rx="11" ry="9.5" fill="#C5B358" stroke="#111111" stroke-width="2.2" />
          <!-- Vertical slit pupils -->
          <ellipse cx="79" cy="84" rx="2.5" ry="6.2" fill="#111111" />
          <ellipse cx="121" cy="84" rx="2.5" ry="6.2" fill="#111111" />
          <!-- Tiny sleepy eye glint -->
          <circle cx="76" cy="81" r="1.5" fill="#FFFFFF" />
          <circle cx="118" cy="81" r="1.5" fill="#FFFFFF" />
          <!-- Heavy-lidded, half-closed grumpy eyelids (#anchor-eyelids) -->
          <g id="anchor-eyelids">
            <path d="M67 84 Q79 86 91 83 L91 71 L67 71 Z" fill="#3B332C" stroke="#111111" stroke-width="2.2" />
            <path d="M109 83 Q121 86 133 84 L133 71 L109 71 Z" fill="#3B332C" stroke="#111111" stroke-width="2.2" />
            <!-- Unamused flat grumpy brow ridge -->
            <path d="M65 83 L92 81 M108 81 L135 83" stroke="#111111" stroke-width="3.2" stroke-linecap="round" />
          </g>
        </g>

        <!-- Nose & signature grumpy "over it" mouth on the white muzzle -->
        <polygon points="94,97 106,97 100,103.5" fill="#D47A7A" stroke="#111111" stroke-width="1.8" />
        <path d="M100 103.5 V108" stroke="#111111" stroke-width="2" />
        <ellipse id="anchor-mouth" cx="100" cy="113" rx="6.5" ry="1.8" fill="#6E2222" />
        <path d="M88 112 Q95 107 100 109 Q105 107 112 112" stroke="#111111" stroke-width="2.3" fill="none" stroke-linecap="round" />

        <!-- PROMINENTLY LONG, SWEEPING WHITE WHISKERS & EYEBROW VIBRISSAE -->
        <g stroke="#FFFFFF" stroke-linecap="round" fill="none">
          <!-- Long white brow whiskers -->
          <path d="M74 70 Q58 56 42 60" stroke-width="2" />
          <path d="M126 70 Q142 56 158 60" stroke-width="2" />
          <!-- Prominent sweeping white cheek whiskers -->
          <path d="M80 103 Q46 96 14 101" stroke-width="2.8" />
          <path d="M80 108 Q44 106 10 113" stroke-width="2.6" />
          <path d="M82 113 Q48 115 18 125" stroke-width="2.3" />
          <path d="M120 103 Q154 96 186 101" stroke-width="2.8" />
          <path d="M120 108 Q156 106 190 113" stroke-width="2.6" />
          <path d="M118 113 Q152 115 182 125" stroke-width="2.3" />
        </g>

        <!-- Neat 1950s vintage broadcast desk + teletype papers -->
        <rect x="10" y="168" width="180" height="42" fill="#6E472B" stroke="#111111" stroke-width="2.6" />
        <rect x="14" y="172" width="172" height="6" fill="#9C6B43" />
        <!-- Stack of teletype dispatch papers on desk -->
        <g transform="rotate(-5 74 176)">
          <rect x="48" y="164" width="48" height="18" rx="1.5" fill="#FDFBF7" stroke="#111111" stroke-width="1.8" />
          <path d="M54 170 H88 M54 175 H82" stroke="#1A1A1A" stroke-width="1.5" />
        </g>

        <!-- FLUFFY SNOW-WHITE PAWS ON THE DESK (#anchor-paw taps the dispatch papers) -->
        <g id="anchor-paw" transform="translate(0, 0)">
          <ellipse cx="66" cy="166" rx="14" ry="8" fill="#FFFFFF" stroke="#111111" stroke-width="2.2" />
          <path d="M60 161 v7 M66 160 v8 M72 161 v7" stroke="#111111" stroke-width="1.6" stroke-linecap="round" />
        </g>
        <!-- Second fluffy white paw resting lazily by the microphone -->
        <g>
          <ellipse cx="116" cy="168" rx="12.5" ry="7" fill="#FFFFFF" stroke="#111111" stroke-width="2.2" />
          <path d="M111 164 v6 M116 163 v7 M121 164 v6" stroke="#111111" stroke-width="1.5" stroke-linecap="round" />
        </g>

        <!-- Old-fashioned ribbon broadcast microphone -->
        <g>
          <rect x="136" y="122" width="20" height="28" rx="9" fill="#D4D4D8" stroke="#111111" stroke-width="2.4" />
          <path d="M139 129h14M139 135h14M139 141h14" stroke="#111111" stroke-width="1.8" />
          <rect x="143" y="150" width="6" height="20" fill="#52525B" stroke="#111111" stroke-width="1.8" />
          <rect x="133" y="165" width="26" height="8" rx="2" fill="#D1192A" stroke="#111111" stroke-width="1.8" />
          <text x="146" y="171" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="6" font-weight="700">WAIR</text>
        </g>
      </svg>`
    }
  ];

  let anchorMouthTimer = null;

  /**
   * Selects the broadcast news anchor:
   *  - GUARANTEED DEBUT: The very first Breaking News bulletin of every match
   *    always features Nora the Moody Tabby Cat Anchor (`nora_cat`).
   *  - SUBSEQUENT ROTATION: Randomly selects between Nora and the remaining
   *    anchor cast (`classic_50s`, `retro_robot`, `green_alien`, `aviator_ace`).
   */
  function getNextNewsAnchor() {
    const nora = NEWS_ANCHOR_ROSTER.find((a) => a.id === 'nora_cat') || NEWS_ANCHOR_ROSTER[0];
    if (!state.noraDebuted) {
      state.noraDebuted = true;
      return nora;
    }
    const idx = Math.floor(Math.random() * NEWS_ANCHOR_ROSTER.length);
    return NEWS_ANCHOR_ROSTER[idx];
  }

  function openBreakingNewsTakeover(worldCard, effectSummary) {
    state.status = 'WORLD_MODAL';
    sfx.playBulletin();
    window.setTimeout(() => sfx.playTeletype(), 420);

    const anchor = getNextNewsAnchor();
    state.activeBroadcastAnchorId = anchor.id;
    state.activeBroadcastWorldCard = worldCard;
    const anchorLoc = getAnchorLocale(anchor.id);
    const wcLoc = getWorldEventLocale(worldCard.id);

    // Inject selected anchor SVG, entry animation class, nameplate & speech quirk
    if (dom.anchorStage) {
      dom.anchorStage.className = 'anchor-stage';
      // Force reflow so the entry animation replays cleanly every bulletin
      void dom.anchorStage.offsetWidth;
      dom.anchorStage.classList.add(anchor.entryClass);
      dom.anchorStage.setAttribute('data-anchor-id', anchor.id);
    }
    if (dom.anchorSvgSlot) {
      dom.anchorSvgSlot.innerHTML = anchor.svg;
      dom.anchorMouth = dom.anchorSvgSlot.querySelector('#anchor-mouth');
    }
    if (dom.anchorPlate) {
      dom.anchorPlate.textContent = anchorLoc.nameplate || anchor.nameplate;
    }
    if (dom.broadcastSpeechBubble) {
      dom.broadcastSpeechBubble.setAttribute('data-anchor-style', anchor.id);
    }
    if (dom.anchorQuirkBanner) {
      const quirks = anchorLoc.quirkLines || anchor.quirkLines;
      const quirk = quirks[state.round % quirks.length];
      dom.anchorQuirkBanner.textContent = quirk;
    }

    dom.worldModalRound.textContent = String(state.round);
    if (dom.worldModalIcon) dom.worldModalIcon.innerHTML = worldCard.iconSvg;
    dom.worldModalCategory.textContent = wcLoc.category || worldCard.category;
    dom.worldModalTitle.textContent = wcLoc.title || worldCard.title;
    dom.worldModalDesc.textContent = wcLoc.desc || worldCard.desc;
    dom.worldModalImpact.textContent = `${wcLoc.impactText || worldCard.impactText}${
      effectSummary ? ' • ' + effectSummary : ''
    }`;
    dom.worldCardModal.classList.add('active');

    // Character-specific speaking animation (mouth, robot dial/tubes, alien crystal, Nora paw & blink)
    let frame = 0;
    clearInterval(anchorMouthTimer);
    anchorMouthTimer = window.setInterval(() => {
      frame++;
      const open = 1.8 + Math.abs(Math.sin(frame * 1.6)) * (anchor.id === 'nora_cat' ? 4.2 : 7);
      if (dom.anchorMouth) {
        dom.anchorMouth.setAttribute('ry', String(open.toFixed(2)));
      }
      if (dom.anchorSvgSlot) {
        const needle = dom.anchorSvgSlot.querySelector('#anchor-dial-needle');
        if (needle) {
          const angle = Math.sin(frame * 1.9) * 24;
          needle.setAttribute('x2', String((100 + angle).toFixed(1)));
        }
        const bulb = dom.anchorSvgSlot.querySelector('#anchor-bulb');
        if (bulb) {
          bulb.setAttribute('opacity', frame % 2 === 0 ? '1' : '0.45');
        }
        const crystal = dom.anchorSvgSlot.querySelector('#anchor-crystal');
        if (crystal) {
          const bob = Math.sin(frame * 0.9) * 4;
          crystal.setAttribute('transform', `translate(0, ${bob.toFixed(1)})`);
        }
        // Nora the Tabby Cat: taps her papers with her paw & blinks lazily
        const paw = dom.anchorSvgSlot.querySelector('#anchor-paw');
        if (paw) {
          const tapY = frame % 4 === 0 ? 3.5 : 0;
          paw.setAttribute('transform', `translate(0, ${tapY})`);
        }
        const eyelids = dom.anchorSvgSlot.querySelector('#anchor-eyelids');
        if (eyelids) {
          const blink = frame % 11 === 0 ? 4.5 : 0;
          eyelids.setAttribute('transform', `translate(0, ${blink})`);
        }
      }
      if (frame % 7 === 0) sfx.playUiClick();
    }, 130);
    window.setTimeout(stopAnchorMouth, 6200);
  }

  function stopAnchorMouth() {
    clearInterval(anchorMouthTimer);
    anchorMouthTimer = null;
    if (dom.anchorMouth) dom.anchorMouth.setAttribute('ry', '2');
    if (dom.anchorSvgSlot) {
      const needle = dom.anchorSvgSlot.querySelector('#anchor-dial-needle');
      if (needle) needle.setAttribute('x2', '100');
      const crystal = dom.anchorSvgSlot.querySelector('#anchor-crystal');
      if (crystal) crystal.setAttribute('transform', 'translate(0, 0)');
      const paw = dom.anchorSvgSlot.querySelector('#anchor-paw');
      if (paw) paw.setAttribute('transform', 'translate(0, 0)');
      const eyelids = dom.anchorSvgSlot.querySelector('#anchor-eyelids');
      if (eyelids) eyelids.setAttribute('transform', 'translate(0, 0)');
    }
  }

  function beginNextRoundAfterWorldCard() {
    state.round++;
    state.status = 'PLAYING';
    sfx.updateTurnProgress(state.round, state.config.maxRounds);
    startPlayerTurn(0);
  }

  // Marks this turn's single action as spent and locks out the other option.
  function commitTurnAction(type) {
    state.turnState.actionTaken = true;
    state.turnState.actionType = type;
    state.turnState.selectedCardIndex = null;
    state.turnState.stagedAction = null;
  }

  // ============================================================================
  // 13. TURN ACTION STAGING & HUMAN CARD/GATE DEPLOYMENT
  // ============================================================================

  function getActiveHumanPlayer() {
    const current = state.players[state.currentPlayerIndex];
    if (!current || !current.isHuman) return null;
    if (state.config.mode === 'online' && current.index !== state.localPlayerIndex) {
      return null;
    }
    return current;
  }

  function isHumanActionWindow() {
    const human = getActiveHumanPlayer();
    return (
      state.status === 'PLAYING' &&
      Boolean(human) &&
      !state.turnState.aiBusy &&
      !state.turnState.networkPending &&
      !state.turnState.actionTaken
    );
  }

  // Emergency Landing helper: relocates an opponent's gate lease to an unoccupied
  // corridor node, or force-spawns a new Apron "Z" Bus Gate and banishes them to it.
  function relocateGateForEmergencyLanding(sourceGate) {
    const victimIdx = sourceGate.owner;
    const vacantCorridorGates = state.gates.filter(
      (g) => g.owner === null && g.id !== sourceGate.id && !g.isZGate
    );
    let destGate = null;
    if (vacantCorridorGates.length > 0) {
      // Prefer the lowest-yield regional/corridor node for maximum disruption
      vacantCorridorGates.sort((a, b) => a.basePax - b.basePax);
      destGate = vacantCorridorGates[0];
    } else {
      // No vacant corridor node exists — force-spawn an Apron "Z" gate and banish them to it!
      destGate = spawnApronZGate(null, sourceGate.id);
      initPassengerAgents();
    }
    if (!destGate) return null;

    sourceGate.owner = null;
    sourceGate.temporaryUntilRound = 0;
    sourceGate.temporaryPreviousOwner = null;
    sourceGate.shieldOwner = null;
    sourceGate.pulseAnim = 1.0;

    destGate.owner = victimIdx;
    destGate.pulseAnim = 1.0;
    return destGate;
  }

  function cancelStagedAction() {
    state.turnState.selectedCardIndex = null;
    state.turnState.stagedAction = null;
    sfx.playUiClick();
    updateAllUI();
  }

  function cancelCardTargeting() {
    cancelStagedAction();
  }

  /**
   * Clicking an unclaimed gate or aiming an Action Card on the board STAGES the
   * action with a pulsing selection aura. The turn only commits and advances
   * when the player explicitly clicks "Confirm Action" (or "Pass Turn").
   */
  function handleCanvasGateClick(gate) {
    const human = getActiveHumanPlayer();
    if (
      state.status !== 'PLAYING' ||
      !human ||
      state.turnState.aiBusy ||
      state.turnState.networkPending
    ) {
      return;
    }
    const activeIdx = human.index;

    if (state.turnState.actionTaken) {
      sfx.playError();
      spawnCanvasFloatText(
        gate.x,
        gate.y - 36,
        state.turnState.actionType === 'card' ? 'COUPON ALREADY PLAYED' : 'ACTION ALREADY USED',
        '#111111'
      );
      return;
    }

    // CASE A: a coupon is selected in hand and awaiting a board target to stage
    if (state.turnState.selectedCardIndex !== null) {
      const cardIndex = state.turnState.selectedCardIndex;
      const card = human.hand[cardIndex];
      if (!card) {
        cancelStagedAction();
        return;
      }

      if (card.targetMode === 'opponent_gate') {
        if (gate.owner === null || gate.owner === activeIdx) {
          sfx.playError();
          spawnCanvasFloatText(gate.x, gate.y - 36, 'SELECT A RIVAL GATE PIN', human.color);
          return;
        }
        if (isGateShielded(gate)) {
          sfx.playError();
          spawnCanvasFloatText(gate.x, gate.y - 40, 'SHIELDED BY FORTRESS HUB!', '#0B6E6E');
          showToast('FORTRESS HUB SHIELD', `Gate <strong>${gate.id}</strong> is protected by a Radar Shield until its owner's next turn.`);
          return;
        }
        state.turnState.stagedAction = {
          type: 'card',
          cardIndex,
          targetGateId: gate.id
        };
        gate.pulseAnim = 1.0;
        sfx.playUiClick();
        updateAllUI();
        return;
      }

      if (card.targetMode === 'any_gate') {
        if (gate.owner !== null && gate.owner !== activeIdx && isGateShielded(gate)) {
          sfx.playError();
          spawnCanvasFloatText(gate.x, gate.y - 40, 'SHIELDED BY FORTRESS HUB!', '#0B6E6E');
          showToast('FORTRESS HUB SHIELD', `Gate <strong>${gate.id}</strong> is protected by a Radar Shield.`);
          return;
        }
        state.turnState.stagedAction = {
          type: 'card',
          cardIndex,
          targetGateId: gate.id
        };
        gate.pulseAnim = 1.0;
        sfx.playUiClick();
        updateAllUI();
        return;
      }

      if (card.targetMode === 'concourse_branch') {
        state.turnState.stagedAction = {
          type: 'card',
          cardIndex,
          targetGateId: gate.id,
          targetConcourse: gate.concourse
        };
        gate.pulseAnim = 1.0;
        sfx.playUiClick();
        updateAllUI();
        return;
      }

      if (card.targetMode === 'own_gate') {
        if (gate.owner !== activeIdx) {
          sfx.playError();
          spawnCanvasFloatText(gate.x, gate.y - 36, 'SELECT YOUR OWN GATE PIN', '#111111');
          return;
        }
        state.turnState.stagedAction = {
          type: 'card',
          cardIndex,
          targetGateId: gate.id
        };
        gate.pulseAnim = 1.0;
        sfx.playUiClick();
        updateAllUI();
        return;
      }

      if (card.targetMode === 'opponent_player') {
        if (gate.owner === null || gate.owner === activeIdx) {
          sfx.playError();
          spawnCanvasFloatText(gate.x, gate.y - 36, 'CLICK A RIVAL CARRIER', human.color);
          return;
        }
        state.turnState.stagedAction = {
          type: 'card',
          cardIndex,
          targetPlayerIndex: gate.owner
        };
        gate.pulseAnim = 1.0;
        sfx.playUiClick();
        updateAllUI();
        return;
      }
    }

    // CASE B: standard gate claim staging (toggleable before confirmation)
    if (gate.owner !== null) {
      sfx.playError();
      const msg =
        gate.owner === activeIdx ? 'ALREADY IN YOUR FLEET' : 'PLAY A COUPON TO TARGET RIVAL GATE';
      spawnCanvasFloatText(gate.x, gate.y - 36, msg, human.color);
      return;
    }

    if (
      state.turnState.stagedAction &&
      state.turnState.stagedAction.type === 'gate' &&
      state.turnState.stagedAction.gateId === gate.id
    ) {
      // Clicking the already-staged gate un-stages it
      cancelStagedAction();
      return;
    }

    state.turnState.selectedCardIndex = null;
    state.turnState.stagedAction = {
      type: 'gate',
      gateId: gate.id
    };
    gate.pulseAnim = 1.0;
    sfx.playUiClick();
    updateAllUI();
  }

  /**
   * Commits whichever action is currently staged in `state.turnState.stagedAction`
   * and immediately advances the turn.
   */
  function commitStagedAction() {
    const human = getActiveHumanPlayer();
    if (
      state.status !== 'PLAYING' ||
      !human ||
      state.turnState.aiBusy ||
      state.turnState.networkPending ||
      state.turnState.actionTaken
    ) {
      return;
    }
    const staged = state.turnState.stagedAction;
    if (!staged) return;

    if (staged.type === 'gate') {
      const gate = getGateById(staged.gateId);
      if (!gate || gate.owner !== null) {
        cancelStagedAction();
        return;
      }
      if (state.config.mode === 'online' && p2p.role === 'guest') {
        state.turnState.stagedAction = null;
        p2p.sendGuestAction('CLAIM_GATE', { gateId: gate.id });
        return;
      }
      claimGateForPlayer(gate, human, 'planted a 3D Pin on');
      commitTurnAction('gate');
      sfx.playPinClaim();
      if (checkSuddenDeathWinner()) {
        if (state.config.mode === 'online' && p2p.role === 'host') {
          p2p.broadcastAuthoritativeState();
        }
        return;
      }
      updateAllUI();
      advanceTurn();
      return;
    }

    if (staged.type === 'card') {
      const cardIndex = staged.cardIndex;
      const card = human.hand[cardIndex];
      if (!card) {
        cancelStagedAction();
        return;
      }

      if (state.config.mode === 'online' && p2p.role === 'guest') {
        state.turnState.stagedAction = null;
        state.turnState.selectedCardIndex = null;
        p2p.sendGuestAction('PLAY_CARD', {
          cardIndex,
          targetGateId: staged.targetGateId || null,
          targetPlayerIndex:
            typeof staged.targetPlayerIndex === 'number' ? staged.targetPlayerIndex : undefined
        });
        return;
      }

      state.turnState.selectedCardIndex = cardIndex;
      if (card.targetMode === 'instant') {
        resolveHumanInstantCard(card, cardIndex);
      } else if (staged.targetGateId) {
        const gate = getGateById(staged.targetGateId);
        if (!gate) {
          cancelStagedAction();
          return;
        }
        resolveHumanCardOnGate(card, gate);
      } else if (typeof staged.targetPlayerIndex === 'number') {
        const victim = state.players[staged.targetPlayerIndex];
        if (!victim) {
          cancelStagedAction();
          return;
        }
        resolveHumanPlayerTargetCard(card, victim);
      }

      if (state.status === 'GAME_OVER') {
        if (state.config.mode === 'online' && p2p.role === 'host') {
          p2p.broadcastAuthoritativeState();
        }
        return;
      }
      if (state.turnState.actionTaken) {
        advanceTurn();
      }
    }
  }

  function claimGateForPlayer(gate, player, verb) {
    gate.owner = player.index;
    gate.pulseAnim = 1.0;
    const inaugBonus = Math.round(gate.basePax * 0.5);
    player.passengers += inaugBonus;
    spawnCanvasFloatText(gate.x, gate.y - 40, `CLAIMED! +${inaugBonus} PAX`, player.color);
    addFlightLog(
      `<strong>${player.name}</strong> ${verb} <strong>${gate.id} (${gate.name})</strong> (+${inaugBonus} Inaugural PAX).`
    );
    return inaugBonus;
  }

  // ---- Coupon resolution against a clicked gate ------------------------------
  function resolveHumanCardOnGate(card, gate) {
    const human = getActiveHumanPlayer() || state.players[state.currentPlayerIndex];
    if (!human) return;
    const activeIdx = human.index;

    if (card.targetMode === 'opponent_gate') {
      if (gate.owner === null || gate.owner === activeIdx) {
        sfx.playError();
        spawnCanvasFloatText(gate.x, gate.y - 36, 'SELECT A RIVAL GATE PIN', human.color);
        return;
      }
      if (isGateShielded(gate)) {
        sfx.playError();
        spawnCanvasFloatText(gate.x, gate.y - 40, 'RADAR SHIELD ACTIVE!', '#0B6E6E');
        return;
      }
      const prevOwner = state.players[gate.owner];

      if (card.typeId === 'emergency_landing') {
        const relocatedTo = relocateGateForEmergencyLanding(gate);
        sfx.playCardDeploy();
        if (relocatedTo) {
          spawnCanvasFloatText(gate.x, gate.y - 40, `DIVERTED TO ${relocatedTo.id}!`, human.color);
          spawnCanvasFloatText(relocatedTo.x, relocatedTo.y - 40, `${prevOwner.name.split(' ')[0]} RELOCATED`, prevOwner.color);
          addFlightLog(
            `<strong>${human.name}</strong> declared an <em>Emergency Landing</em> at <strong>${gate.id}</strong> — forcing <strong>${prevOwner.name}</strong> to relocate their lease to <strong>${relocatedTo.id} (${relocatedTo.concourse})</strong>!`
          );
          pushLiveHeadline(
            `Emergency Landing diversion clears ${gate.id}; ${prevOwner.name} banished to ${relocatedTo.id}!`
          );
        }
        consumeHumanCard(state.turnState.selectedCardIndex);
        checkSuddenDeathWinner();
        updateAllUI();
        return;
      }

      if (card.typeId === 'hostile_takeover') {
        gate.temporaryPreviousOwner = gate.owner;
        gate.temporaryUntilRound = state.round; // reverts at the end of this round
        gate.owner = activeIdx;
        gate.pulseAnim = 1.0;
        sfx.playCardDeploy();
        spawnCanvasFloatText(gate.x, gate.y - 40, 'HOSTILE TAKEOVER (1 TURN)', human.color);
        addFlightLog(
          `<strong>${human.name}</strong> mounted a <em>Hostile Takeover</em> of <strong>${gate.id}</strong> from ${prevOwner.name} — the lease reverts at the end of Round ${state.round}.`
        );
        pushLiveHeadline(
          `Boardroom raid at ${gate.id}: ${human.name} seizes temporary control from ${prevOwner.name}.`
        );
        consumeHumanCard(state.turnState.selectedCardIndex);
        updateAllUI();
        return;
      }

      // Gate Change (permanent conversion)
      gate.owner = activeIdx;
      gate.temporaryUntilRound = 0;
      gate.temporaryPreviousOwner = null;
      gate.pulseAnim = 1.0;
      sfx.playCardDeploy();
      spawnCanvasFloatText(gate.x, gate.y - 40, 'GATE CHANGED!', human.color);
      addFlightLog(
        `<strong>${human.name}</strong> deployed <em>Gate Change</em> to capture <strong>${gate.id}</strong> from ${prevOwner.name}!`
      );
      pushLiveHeadline(
        `${human.name} executes surprise Gate Change takeover at ${gate.id}, ousting ${prevOwner.name}!`
      );
      consumeHumanCard(state.turnState.selectedCardIndex);
      checkSuddenDeathWinner();
      updateAllUI();
      return;
    }

    if (card.targetMode === 'any_gate' && card.typeId === 'runway_maint') {
      if (gate.owner !== null && gate.owner !== activeIdx && isGateShielded(gate)) {
        sfx.playError();
        spawnCanvasFloatText(gate.x, gate.y - 40, 'RADAR SHIELD ACTIVE!', '#0B6E6E');
        return;
      }
      gate.closedUntilRound = state.round + 2;
      gate.pulseAnim = 1.0;
      sfx.playCardDeploy();
      spawnCanvasFloatText(gate.x, gate.y - 40, 'RUNWAY CLOSED (2 RD)', '#111111');
      const ownerLabel =
        gate.owner === null ? 'the unclaimed' : `${state.players[gate.owner].name}'s`;
      addFlightLog(
        `<strong>${human.name}</strong> ordered <em>Runway Maintenance</em> at ${ownerLabel} gate <strong>${gate.id}</strong> — no passengers for 2 rounds.`
      );
      pushLiveHeadline(
        `Resurfacing crews shut down ${gate.id} for 48 hours on orders filed by ${human.name}.`
      );
      consumeHumanCard(state.turnState.selectedCardIndex);
      updateAllUI();
      return;
    }

    if (card.targetMode === 'concourse_branch' && card.typeId === 'severe_weather') {
      const branch = gate.concourse || 'Main Concourse';
      state.concourseWeather[branch] = state.round + 1;
      state.gates.forEach((g) => {
        if (g.concourse === branch) g.pulseAnim = 1.0;
      });
      sfx.playCardDeploy();
      spawnCanvasFloatText(gate.x, gate.y - 42, `SEVERE WEATHER: ${branch.toUpperCase()} -50%!`, '#1E4DB7');
      addFlightLog(
        `<strong>${human.name}</strong> unleashed <em>Severe Weather</em> across <strong>${branch}</strong> — passenger generation is halved (-50%) on that concourse branch for 1 full round.`
      );
      pushLiveHeadline(
        `Squall line batters ${branch}: all gates on the branch reduced to 50% capacity!` 
      );
      consumeHumanCard(state.turnState.selectedCardIndex);
      updateAllUI();
      return;
    }

    if (card.targetMode === 'own_gate') {
      if (gate.owner !== activeIdx) {
        sfx.playError();
        spawnCanvasFloatText(gate.x, gate.y - 36, 'SELECT YOUR OWN GATE PIN', '#111111');
        return;
      }

      if (card.typeId === 'loyalty_program') {
        gate.loyaltyUntilRound = state.round + 3;
        gate.pulseAnim = 1.0;
        sfx.playCardDeploy();
        spawnCanvasFloatText(gate.x, gate.y - 40, 'LOYALTY +50 PAX (3 RD)!', '#E3B505');
        addFlightLog(
          `<strong>${human.name}</strong> launched a <em>Loyalty Program</em> at <strong>${gate.id}</strong> (+50 flat bonus passengers per scoring for the next 3 rounds).`
        );
        consumeHumanCard(state.turnState.selectedCardIndex);
        updateAllUI();
        return;
      }

      if (card.typeId === 'fortress_hub') {
        gate.shieldOwner = activeIdx;
        gate.pulseAnim = 1.0;
        sfx.playCardDeploy();
        spawnCanvasFloatText(gate.x, gate.y - 40, 'FORTRESS SHIELD UP!', '#0B6E6E');
        addFlightLog(
          `<strong>${human.name}</strong> activated a <em>Fortress Hub</em> radar shield over <strong>${gate.id}</strong> — immune to rival cards until their next turn.`
        );
        consumeHumanCard(state.turnState.selectedCardIndex);
        updateAllUI();
        return;
      }

      gate.outputMult *= 2;
      gate.loungeLevel++;
      gate.pulseAnim = 1.0;
      sfx.playCardDeploy();
      spawnCanvasFloatText(gate.x, gate.y - 40, 'LOUNGE — OUTPUT DOUBLED!', human.color);
      addFlightLog(
        `<strong>${human.name}</strong> opened a <em>Lounge Upgrade</em> at <strong>${gate.id}</strong> — base output doubled to <strong>${gate.basePax * gate.outputMult} PAX</strong>.`
      );
      consumeHumanCard(state.turnState.selectedCardIndex);
      updateAllUI();
      return;
    }

    if (card.targetMode === 'empty_gate') {
      if (gate.owner !== null) {
        sfx.playError();
        spawnCanvasFloatText(gate.x, gate.y - 36, 'GATE ALREADY CLAIMED', human.color);
        return;
      }
      sfx.playCardDeploy();
      claimGateForPlayer(gate, human, 'executed a charter claim on');
      consumeHumanCard(state.turnState.selectedCardIndex);
      checkSuddenDeathWinner();
      updateAllUI();
      return;
    }

    if (card.targetMode === 'opponent_player') {
      if (gate.owner === null || gate.owner === activeIdx) {
        sfx.playError();
        spawnCanvasFloatText(gate.x, gate.y - 36, 'CLICK A RIVAL CARRIER', human.color);
        return;
      }
      resolveHumanPlayerTargetCard(card, state.players[gate.owner]);
    }
  }

  // Carrier-targeted coupons stage when a rival is clicked in the standings or banner.
  function handleScoreboardTargetClick(playerIndex) {
    const human = getActiveHumanPlayer();
    if (
      state.status !== 'PLAYING' ||
      !human ||
      state.turnState.aiBusy ||
      state.turnState.networkPending ||
      state.turnState.actionTaken
    ) {
      return;
    }
    if (state.turnState.selectedCardIndex === null) return;
    const cardIndex = state.turnState.selectedCardIndex;
    const card = human.hand[cardIndex];
    if (!card || card.targetMode !== 'opponent_player') return;
    if (playerIndex === human.index || !state.players[playerIndex]) {
      sfx.playError();
      return;
    }
    state.turnState.stagedAction = {
      type: 'card',
      cardIndex,
      targetPlayerIndex: playerIndex
    };
    sfx.playUiClick();
    updateAllUI();
  }

  function resolveHumanPlayerTargetCard(card, victim) {
    const human = getActiveHumanPlayer() || state.players[state.currentPlayerIndex];
    if (!human || !victim) return;
    const cardIndex = state.turnState.selectedCardIndex;

    if (card.typeId === 'code_share') {
      state.codeShareLinks.push({
        playerA: human.index,
        playerB: victim.index,
        expiresAfterRound: state.round + 2
      });
      sfx.playCardDeploy();
      spawnCanvasFloatText(
        state.rotundaCenter.x,
        state.rotundaCenter.y - 30,
        `CODE-SHARE: ${human.name.split(' ')[0]} ⇄ ${victim.name.split(' ')[0]}`,
        human.color
      );
      addFlightLog(
        `<strong>${human.name}</strong> signed a 2-round <em>Code-Share Agreement</em> with <strong>${victim.name}</strong> — both carriers receive 25% of each other's gate passenger revenue!` 
      );
      pushLiveHeadline(
        `Historic interline treaty: ${human.name} and ${victim.name} pool 25% concourse revenue for 2 rounds.`
      );
      consumeHumanCard(cardIndex);
      updateAllUI();
      return;
    }

    if (card.typeId === 'baggage_strike') {
      const siphoned = Math.min(400, Math.round(victim.passengers * 0.25));
      victim.passengers -= siphoned;
      human.passengers += siphoned;
      sfx.playCardDeploy();
      spawnCanvasFloatText(
        state.rotundaCenter.x,
        state.rotundaCenter.y - 30,
        `BAGGAGE STRIKE +${siphoned} PAX`,
        human.color
      );
      addFlightLog(
        `<strong>${human.name}</strong> called a <em>Baggage Strike</em> on <strong>${victim.name}</strong>, siphoning <strong>${siphoned.toLocaleString()} PAX</strong> (25%).`
      );
      pushLiveHeadline(
        `Handlers walk out across ${victim.name}'s concourse — ${siphoned.toLocaleString()} passengers rebook with ${human.name}.`
      );
      consumeHumanCard(cardIndex);
      updateAllUI();
      return;
    }

    if (card.typeId === 'charter_buyout') {
      if (victim.hand.length === 0) {
        sfx.playError();
        showToast('EMPTY DISPATCH OFFICE', `${victim.name} is holding no coupons to buy out.`);
        return;
      }
      const stealIdx = Math.floor(Math.random() * victim.hand.length);
      const [stolen] = victim.hand.splice(stealIdx, 1);
      human.hand.push(stolen);
      while (human.hand.length > MAX_HAND_SIZE) {
        const dumped = human.hand.shift();
        discardCard(dumped);
        flagShredAnimation(dumped.name);
        showToast('HAND LIMIT 3 — COUPON VOIDED', `Oldest coupon <strong>${dumped.name}</strong> was discarded to make room.`);
      }
      sfx.playCardDeploy();
      spawnCanvasFloatText(
        state.rotundaCenter.x,
        state.rotundaCenter.y - 30,
        'CHARTER BOUGHT OUT!',
        human.color
      );
      addFlightLog(
        `<strong>${human.name}</strong> executed a <em>Charter Buyout</em> on <strong>${victim.name}</strong> and seized their <strong>${stolen.name}</strong> coupon.`
      );
      consumeHumanCard(cardIndex);
      updateAllUI();
      return;
    }

    if (card.typeId === 'holding_pattern') {
      victim.skipNextTurn = true;
      sfx.playCardDeploy();
      spawnCanvasFloatText(
        state.rotundaCenter.x,
        state.rotundaCenter.y - 30,
        `${victim.name.split(' ')[0]} STACKED!`,
        human.color
      );
      addFlightLog(
        `<strong>${human.name}</strong> routed <strong>${victim.name}</strong> into a <em>Holding Pattern</em> — they forfeit their next turn.`
      );
      pushLiveHeadline(
        `Tower stacks the entire ${victim.name} fleet over the outer marker at the request of ${human.name}.`
      );
      consumeHumanCard(cardIndex);
      updateAllUI();
      return;
    }

    if (card.typeId === 'smear_campaign') {
      victim.smearUntilRound = state.round + 1;
      const chain = largestChainForPlayer(victim.index);
      sfx.playCardDeploy();
      spawnCanvasFloatText(
        state.rotundaCenter.x,
        state.rotundaCenter.y - 30,
        'SMEAR CAMPAIGN FILED!',
        human.color
      );
      addFlightLog(
        `<strong>${human.name}</strong> ran a <em>Smear Campaign</em> against <strong>${victim.name}</strong> — their largest chain (${
          chain.length > 0 ? chain.join(', ') : 'no chain yet'
        }) pays out at 50% next boarding.`
      );
      pushLiveHeadline(
        `Sunday supplements question ${victim.name}'s safety record; bookings on their trunk route collapse.`
      );
      consumeHumanCard(cardIndex);
      updateAllUI();
      return;
    }
  }

  function handleHumanCardClick(cardIndex) {
    const human = getActiveHumanPlayer();
    if (
      state.status !== 'PLAYING' ||
      !human ||
      state.turnState.aiBusy ||
      state.turnState.networkPending
    ) {
      return;
    }
    const card = human.hand[cardIndex];
    if (!card) return;

    if (state.turnState.actionTaken) {
      sfx.playError();
      showToast(
        'ONE ACTION PER TURN',
        state.turnState.actionType === 'gate'
          ? 'You already claimed a gate this turn — coupons are locked until next turn.'
          : 'You already played a coupon this turn.'
      );
      return;
    }

    if (state.turnState.selectedCardIndex === cardIndex) {
      cancelStagedAction();
      return;
    }

    const blockedReason = cardUnavailableReason(card);
    if (blockedReason) {
      sfx.playError();
      showToast('COUPON UNAVAILABLE', blockedReason);
      return;
    }

    state.turnState.selectedCardIndex = cardIndex;
    if (card.targetMode === 'instant') {
      // Instant cards stage immediately — player clicks Confirm Action to commit
      state.turnState.stagedAction = {
        type: 'card',
        cardIndex
      };
    } else {
      state.turnState.stagedAction = null;
    }
    sfx.playUiClick();
    updateAllUI();
  }

  function calculateTotalTerminalNationalizationPayout() {
    return state.gates.reduce((sum, g) => {
      const val = isGateClosed(g) ? Math.round(g.basePax * g.outputMult) : calculateGateYield(g);
      return sum + Math.max(0, val);
    }, 0);
  }

  function executeNationalizeIndustry(caster) {
    state.nationalizePlayed = true;
    let totalLevy = 0;
    state.gates.forEach((g) => {
      const pax = isGateClosed(g) ? Math.round(g.basePax * g.outputMult) : calculateGateYield(g);
      totalLevy += pax;
      g.pulseAnim = 1.0;
      spawnCanvasFloatText(g.x, g.y - 38, `+${pax}`, caster.color);
    });
    caster.passengers += totalLevy;
    // Purge any stray copies from deck or discard just in case
    state.actionDeck = state.actionDeck.filter((c) => c.typeId !== 'nationalize_industry');
    state.actionDiscard = state.actionDiscard.filter((c) => c.typeId !== 'nationalize_industry');

    spawnCanvasFloatText(
      state.rotundaCenter.x,
      state.rotundaCenter.y - 34,
      `INDUSTRY NATIONALIZED! +${totalLevy.toLocaleString()} PAX (PURGED)`,
      caster.color
    );
    addFlightLog(
      `<strong>${caster.name}</strong> enacted <em>Nationalize the Industry</em> — collecting a one-time lump sum of <strong>+${totalLevy.toLocaleString()} PAX</strong> from all <strong>${state.gates.length} gates</strong> on the map! <em>(Singleton card permanently purged from the game.)</em>`
    );
    pushLiveHeadline(
      `EMERGENCY DECREE: ${caster.name} nationalizes terminal throughput for +${totalLevy.toLocaleString()} passengers; decree permanently retired!`
    );
    return totalLevy;
  }

  function cardUnavailableReason(card) {
    const activeIdx = state.currentPlayerIndex;
    const unshieldedRivalGates = state.gates.some(
      (g) => g.owner !== null && g.owner !== activeIdx && !isGateShielded(g)
    );

    if (card.typeId === 'nationalize_industry' && state.nationalizePlayed) {
      return 'Nationalize the Industry has already been played once this match and is permanently purged.';
    }
    if (card.typeId === 'hostile_takeover' && state.round >= state.config.maxRounds) {
      return 'Hostile Takeovers cannot be filed during the final round — the lease would never revert.';
    }
    if (card.targetMode === 'opponent_gate' && !unshieldedRivalGates) {
      return 'No unshielded rival gate pins are available on the board to target.';
    }
    if (card.targetMode === 'own_gate' && getPlayerGates(activeIdx).length === 0) {
      return 'You must control at least 1 gate to use this coupon.';
    }
    if (card.targetMode === 'empty_gate' && state.gates.every((g) => g.owner !== null)) {
      return 'Every gate on the blueprint is already claimed.';
    }
    if (card.targetMode === 'opponent_player') {
      if (card.typeId === 'baggage_strike' && !state.players.some((p) => p.index !== activeIdx && p.passengers > 0)) {
        return 'No rival carrier has banked any passengers to siphon.';
      }
      if (card.typeId === 'charter_buyout' && !state.players.some((p) => p.index !== activeIdx && p.hand.length > 0)) {
        return 'No rival carrier is holding a coupon to buy out.';
      }
      if (card.typeId === 'smear_campaign' && !state.gates.some((g) => g.owner !== null && g.owner !== activeIdx)) {
        return 'No rival carrier controls a gate chain to smear yet.';
      }
    }
    return null;
  }

  function resolveHumanInstantCard(card, cardIndex) {
    const human = getActiveHumanPlayer() || state.players[state.currentPlayerIndex];
    if (!human) return;
    const activeIdx = human.index;

    if (card.typeId === 'nationalize_industry') {
      if (state.nationalizePlayed) {
        sfx.playError();
        return;
      }
      sfx.playCardDeploy();
      executeNationalizeIndustry(human);
      consumeHumanCard(cardIndex);
      updateAllUI();
      return;
    }

    if (card.typeId === 'direct_flight') {
      human.passengers += 150;
      sfx.playCardDeploy();
      spawnCanvasFloatText(
        state.rotundaCenter.x,
        state.rotundaCenter.y - 30,
        'DIRECT FLIGHT +150 PAX!',
        human.color
      );
      addFlightLog(
        `<strong>${human.name}</strong> flew a <em>Direct Flight Charter</em> for an immediate <strong>+150 PAX</strong>.`
      );
      consumeHumanCard(cardIndex);
      updateAllUI();
      return;
    }

    if (card.typeId === 'sst_route') {
      human.sstUntilRound = state.round + 1;
      sfx.playCardDeploy();
      spawnCanvasFloatText(
        state.rotundaCenter.x,
        state.rotundaCenter.y - 30,
        'SST ROUTE — NETWORK x2!',
        human.color
      );
      addFlightLog(
        `<strong>${human.name}</strong> certified a <em>Supersonic Jet Route</em> — the entire network doubles output for Round ${state.round + 1}.`
      );
      pushLiveHeadline(
        `${human.name} inaugurates Mach 2 service; every gate on their network doubles throughput.`
      );
      consumeHumanCard(cardIndex);
      updateAllUI();
      return;
    }

    if (card.typeId === 'terminal_expansion') {
      const gate = spawnExpansionGate(activeIdx);
      if (!gate) {
        sfx.playError();
        showToast('NO BUILDABLE LAND', 'The blueprint has no clear floor space left for a new gate.');
        return;
      }
      sfx.playCardDeploy();
      const label = gate.isZGate ? `APRON GATE ${gate.id} BUILT!` : 'SATELLITE GATE BUILT!';
      spawnCanvasFloatText(gate.x, gate.y - 40, label, human.color);
      addFlightLog(
        `<strong>${human.name}</strong> commissioned <strong>${gate.id} (${gate.name})</strong> via <em>Terminal Expansion</em> — connected to their cluster and excluded from gate majority.`
      );
      pushLiveHeadline(
        `Concrete poured overnight: ${human.name} opens ${gate.id} via Terminal Expansion.`
      );
      initPassengerAgents();
      consumeHumanCard(cardIndex);
      updateAllUI();
      return;
    }

    if (card.typeId === 'faa_audit') {
      const audited = [];
      state.players.forEach((p) => {
        if (p.index === activeIdx || p.hand.length === 0) return;
        const dumped = p.hand.shift();
        discardCard(dumped);
        audited.push(`${p.name} (${dumped.name})`);
      });
      sfx.playCardDeploy();
      spawnCanvasFloatText(
        state.rotundaCenter.x,
        state.rotundaCenter.y - 30,
        'FAA AUDIT!',
        '#111111'
      );
      addFlightLog(
        audited.length > 0
          ? `<strong>${human.name}</strong> triggered an <em>FAA Audit</em>: ${audited.join(', ')} forfeited their oldest coupon.`
          : `<strong>${human.name}</strong> triggered an <em>FAA Audit</em>, but no rival held any coupons.`
      );
      consumeHumanCard(cardIndex);
      updateAllUI();
      return;
    }
  }

  function consumeHumanCard(cardIndex) {
    const human = getActiveHumanPlayer() || state.players[state.currentPlayerIndex];
    if (!human) return;
    const [card] = human.hand.splice(cardIndex, 1);
    if (card && !card.singleton && card.typeId !== 'nationalize_industry') {
      discardCard(card);
    }
    commitTurnAction('card');
  }

  // Pass / End Turn: closes the turn whether or not an action was taken.
  function handleHumanEndTurn(isRemoteFromHost = false) {
    if (state.config.mode === 'online' && p2p.role === 'guest' && !isRemoteFromHost) {
      const human = getActiveHumanPlayer();
      if (state.status !== 'PLAYING' || !human || state.turnState.networkPending) return;
      state.turnState.stagedAction = null;
      state.turnState.selectedCardIndex = null;
      p2p.sendGuestAction('END_TURN', {});
      return;
    }
    const activePlayer = state.players[state.currentPlayerIndex];
    const human = isRemoteFromHost ? activePlayer : getActiveHumanPlayer();
    if (state.status !== 'PLAYING' || !human || state.turnState.aiBusy) return;
    state.turnState.selectedCardIndex = null;
    state.turnState.stagedAction = null;
    if (!state.turnState.actionTaken) {
      commitTurnAction('pass');
      addFlightLog(`<strong>${human.name}</strong> passed the turn with no action taken.`);
    }
    sfx.playPinClaim();
    advanceTurn();
  }

  // ============================================================================
  // 14. RIVAL SYNDICATE DECISION ENGINE (EASY / NORMAL / HARD)
  // ============================================================================

  function getLeadingOpponentIndex(selfIndex) {
    const opponents = state.players.filter((p) => p.index !== selfIndex);
    opponents.sort((a, b) => {
      const scoreA = getPlayerGates(a.index).length * 220 + a.passengers + (a.isHuman ? 90 : 0);
      const scoreB = getPlayerGates(b.index).length * 220 + b.passengers + (b.isHuman ? 90 : 0);
      return scoreB - scoreA;
    });
    return opponents.length > 0 ? opponents[0].index : selfIndex;
  }

  function valueHorizon() {
    return Math.max(1, Math.min(5, state.config.maxRounds - state.round + 1));
  }

  function projectedYieldFor(gate, ownerIndex) {
    if (isGateClosed(gate)) return 0;
    let links = 0;
    getAdjacentGates(gate.id).forEach((nId) => {
      const n = state.gates.find((g) => g.id === nId);
      if (n && n.owner === ownerIndex) links++;
    });
    const weatherMult = isConcourseSeverelyWeathered(gate.concourse) ? 0.5 : 1.0;
    return Math.round(
      gate.basePax * gate.outputMult * Math.pow(1.25, links) * weatherMult * state.activeWorldEvent.multiplier
    );
  }

  function scoreEmptyGateForBot(gate, botIndex, difficulty, leaderIdx) {
    const horizon = valueHorizon();
    let score = projectedYieldFor(gate, botIndex) * horizon + gate.basePax * 0.5;
    if (difficulty >= 2) {
      getAdjacentGates(gate.id).forEach((nId) => {
        const n = state.gates.find((g) => g.id === nId);
        if (!n) return;
        if (n.owner === botIndex) score += projectedYieldFor(n, botIndex) * 0.25 * horizon;
        if (difficulty === 3 && n.owner === leaderIdx) score += 90;
      });
    }
    return score;
  }

  function bestEmptyGateForBot(botIndex, difficulty, leaderIdx) {
    const empties = state.gates.filter((g) => g.owner === null);
    if (empties.length === 0) return null;
    if (difficulty === 1) {
      return { gate: empties[Math.floor(Math.random() * empties.length)], score: 0 };
    }
    let best = null;
    empties.forEach((g) => {
      const score = scoreEmptyGateForBot(g, botIndex, difficulty, leaderIdx) + Math.random() * 40;
      if (!best || score > best.score) best = { gate: g, score };
    });
    return best;
  }

  // Returns { value, apply } for the best use of one coupon, or null if unplayable.
  function evaluateBotCard(bot, card, difficulty, leaderIdx) {
    const horizon = valueHorizon();

    if (card.typeId === 'hostile_takeover') {
      if (state.round >= state.config.maxRounds) return null;
      const targets = state.gates.filter(
        (g) => g.owner !== null && g.owner !== bot.index && !isGateShielded(g)
      );
      if (targets.length === 0) return null;
      let best = null;
      targets.forEach((g) => {
        let v = projectedYieldFor(g, g.owner) + projectedYieldFor(g, bot.index);
        if (difficulty === 3 && g.owner === leaderIdx) v *= 1.3;
        if (!best || v > best.v) best = { v, g };
      });
      return {
        value: best.v,
        apply: () => {
          const victim = state.players[best.g.owner];
          best.g.temporaryPreviousOwner = best.g.owner;
          best.g.temporaryUntilRound = state.round;
          best.g.owner = bot.index;
          best.g.pulseAnim = 1.0;
          spawnCanvasFloatText(best.g.x, best.g.y - 40, 'HOSTILE TAKEOVER!', bot.color);
          addFlightLog(
            `<strong>${bot.name}</strong> mounted a <em>Hostile Takeover</em> of <strong>${best.g.id}</strong> from <strong>${victim.name}</strong> — reverts at the end of Round ${state.round}.`
          );
        }
      };
    }

    if (card.typeId === 'emergency_landing') {
      const targets = state.gates.filter(
        (g) => g.owner !== null && g.owner !== bot.index && !isGateShielded(g) && !g.isZGate
      );
      if (targets.length === 0) return null;
      let best = null;
      targets.forEach((g) => {
        let v = projectedYieldFor(g, g.owner) * 1.4;
        if (difficulty === 3 && g.owner === leaderIdx) v *= 1.35;
        if (!best || v > best.v) best = { v, g };
      });
      return {
        value: best.v,
        apply: () => {
          const victim = state.players[best.g.owner];
          const dest = relocateGateForEmergencyLanding(best.g);
          if (dest) {
            spawnCanvasFloatText(best.g.x, best.g.y - 40, `DIVERTED TO ${dest.id}!`, bot.color);
            addFlightLog(
              `<strong>${bot.name}</strong> ordered an <em>Emergency Landing</em> at <strong>${best.g.id}</strong>, relocating <strong>${victim.name}</strong> to <strong>${dest.id}</strong>!`
            );
          }
        }
      };
    }

    if (card.typeId === 'code_share') {
      const rivals = state.players.filter((p) => p.index !== bot.index);
      if (rivals.length === 0) return null;
      rivals.sort((a, b) => calculatePlayerTurnPax(b.index) - calculatePlayerTurnPax(a.index));
      const partner = rivals[0];
      const partnerPax = calculatePlayerTurnPax(partner.index);
      if (partnerPax <= 0) return null;
      return {
        value: partnerPax * 0.5,
        apply: () => {
          state.codeShareLinks.push({
            playerA: bot.index,
            playerB: partner.index,
            expiresAfterRound: state.round + 2
          });
          spawnCanvasFloatText(
            state.rotundaCenter.x,
            state.rotundaCenter.y - 30,
            `CODE-SHARE: ${bot.name.split(' ')[0]} ⇄ ${partner.name.split(' ')[0]}`,
            bot.color
          );
          addFlightLog(
            `<strong>${bot.name}</strong> signed a 2-round <em>Code-Share Agreement</em> with <strong>${partner.name}</strong> (25% shared gate revenue).`
          );
        }
      };
    }

    if (card.typeId === 'severe_weather') {
      const branches = {};
      state.gates.forEach((g) => {
        if (g.owner !== null && g.owner !== bot.index && !isConcourseSeverelyWeathered(g.concourse)) {
          branches[g.concourse] = (branches[g.concourse] || 0) + calculateGateYield(g) * 0.5;
        }
      });
      const entries = Object.entries(branches).sort((a, b) => b[1] - a[1]);
      if (entries.length === 0) return null;
      const [bestBranch, lossVal] = entries[0];
      return {
        value: lossVal * 1.25,
        apply: () => {
          state.concourseWeather[bestBranch] = state.round + 1;
          addFlightLog(
            `<strong>${bot.name}</strong> called in <em>Severe Weather</em> over <strong>${bestBranch}</strong> (-50% passenger output for 1 round).`
          );
        }
      };
    }

    if (card.typeId === 'loyalty_program') {
      const own = getPlayerGates(bot.index).filter((g) => !isGateClosed(g) && !isGateLoyaltyActive(g));
      if (own.length === 0) return null;
      const targetGate = own[0];
      return {
        value: 150,
        apply: () => {
          targetGate.loyaltyUntilRound = state.round + 3;
          targetGate.pulseAnim = 1.0;
          spawnCanvasFloatText(targetGate.x, targetGate.y - 40, 'LOYALTY +50 PAX!', '#E3B505');
          addFlightLog(
            `<strong>${bot.name}</strong> launched a <em>Loyalty Program</em> at <strong>${targetGate.id}</strong> (+50 PAX per turn for 3 rounds).`
          );
        }
      };
    }

    if (card.typeId === 'fortress_hub') {
      const own = getPlayerGates(bot.index).filter((g) => !isGateShielded(g));
      if (own.length === 0) return null;
      own.sort((a, b) => calculateGateYield(b) - calculateGateYield(a));
      const bestGate = own[0];
      return {
        value: calculateGateYield(bestGate) * 0.9,
        apply: () => {
          bestGate.shieldOwner = bot.index;
          bestGate.pulseAnim = 1.0;
          spawnCanvasFloatText(bestGate.x, bestGate.y - 40, 'FORTRESS SHIELD!', '#0B6E6E');
          addFlightLog(
            `<strong>${bot.name}</strong> deployed a <em>Fortress Hub</em> radar shield over <strong>${bestGate.id}</strong>.`
          );
        }
      };
    }

    if (card.typeId === 'holding_pattern') {
      const victims = state.players.filter((p) => p.index !== bot.index && !p.skipNextTurn);
      if (victims.length === 0) return null;
      let target = victims[0];
      if (difficulty === 1) target = victims[Math.floor(Math.random() * victims.length)];
      else {
        const leader = state.players[leaderIdx];
        target = difficulty === 3 && !leader.skipNextTurn ? leader : victims[0];
        victims.sort((a, b) => calculatePlayerTurnPax(b.index) - calculatePlayerTurnPax(a.index));
        if (difficulty === 2) target = victims[0];
      }
      return {
        value: calculatePlayerTurnPax(target.index) + 90,
        apply: () => {
          target.skipNextTurn = true;
          spawnCanvasFloatText(
            state.rotundaCenter.x,
            state.rotundaCenter.y - 30,
            `${target.name.split(' ')[0]} STACKED!`,
            bot.color
          );
          addFlightLog(
            `<strong>${bot.name}</strong> routed <strong>${target.name}</strong> into a <em>Holding Pattern</em> — they forfeit their next turn.`
          );
        }
      };
    }

    if (card.typeId === 'sst_route') {
      const own = calculatePlayerTurnPax(bot.index);
      if (own <= 0) return null;
      return {
        value: own * 1.05,
        apply: () => {
          bot.sstUntilRound = state.round + 1;
          spawnCanvasFloatText(
            state.rotundaCenter.x,
            state.rotundaCenter.y - 30,
            'SST ROUTE x2!',
            bot.color
          );
          addFlightLog(
            `<strong>${bot.name}</strong> certified a <em>Supersonic Jet Route</em> — their whole network doubles output next round.`
          );
        }
      };
    }

    if (card.typeId === 'smear_campaign') {
      const victims = state.players.filter(
        (p) => p.index !== bot.index && getPlayerGates(p.index).length > 0
      );
      if (victims.length === 0) return null;
      let best = null;
      victims.forEach((p) => {
        const chain = largestChainForPlayer(p.index);
        const payout = chain.reduce((sum, id) => {
          const g = state.gates.find((x) => x.id === id);
          return sum + (g ? calculateGateYield(g) : 0);
        }, 0);
        let v = payout * 0.5;
        if (difficulty === 3 && p.index === leaderIdx) v *= 1.3;
        if (!best || v > best.v) best = { v, p, chain };
      });
      if (!best || best.v <= 0) return null;
      return {
        value: best.v,
        apply: () => {
          best.p.smearUntilRound = state.round + 1;
          addFlightLog(
            `<strong>${bot.name}</strong> ran a <em>Smear Campaign</em> against <strong>${best.p.name}</strong> — their largest chain pays out at 50% next boarding.`
          );
        }
      };
    }

    if (card.typeId === 'gate_change') {
      const targets = state.gates.filter(
        (g) => g.owner !== null && g.owner !== bot.index && !isGateShielded(g)
      );
      if (targets.length === 0) return null;
      let best = null;
      targets.forEach((g) => {
        const steal = projectedYieldFor(g, g.owner) * horizon;
        const gain = projectedYieldFor(g, bot.index) * horizon;
        let v = steal * 0.6 + gain;
        if (difficulty === 3 && g.owner === leaderIdx) v *= 1.35;
        if (!best || v > best.v) best = { v, g };
      });
      return {
        value: best.v,
        apply: () => {
          const victim = state.players[best.g.owner];
          best.g.owner = bot.index;
          best.g.pulseAnim = 1.0;
          spawnCanvasFloatText(best.g.x, best.g.y - 40, `SEIZED BY ${bot.name.split(' ')[0]}!`, bot.color);
          addFlightLog(
            `<strong>${bot.name}</strong> played <em>Gate Change</em> to capture <strong>${best.g.id}</strong> from <strong>${victim.name}</strong>!`
          );
          pushLiveHeadline(
            `${bot.name} commandeers ${best.g.id} from ${victim.name} using an emergency Gate Change order!`
          );
        }
      };
    }

    if (card.typeId === 'runway_maint') {
      const targets = state.gates.filter(
        (g) => g.owner !== null && g.owner !== bot.index && !isGateClosed(g) && !isGateShielded(g)
      );
      if (targets.length === 0) return null;
      let best = null;
      targets.forEach((g) => {
        let v = projectedYieldFor(g, g.owner) * 2;
        if (difficulty === 3 && g.owner === leaderIdx) v *= 1.4;
        if (!best || v > best.v) best = { v, g };
      });
      return {
        value: best.v,
        apply: () => {
          best.g.closedUntilRound = state.round + 2;
          best.g.pulseAnim = 1.0;
          spawnCanvasFloatText(best.g.x, best.g.y - 40, 'RUNWAY CLOSED!', '#111111');
          addFlightLog(
            `<strong>${bot.name}</strong> filed <em>Runway Maintenance</em> on <strong>${best.g.id}</strong> (${state.players[best.g.owner].name}) — closed for 2 rounds.`
          );
        }
      };
    }

    if (card.typeId === 'lounge_upgrade') {
      const own = getPlayerGates(bot.index).filter((g) => !isGateClosed(g));
      if (own.length === 0) return null;
      let best = null;
      own.forEach((g) => {
        const v = projectedYieldFor(g, bot.index) * horizon * 0.95;
        if (!best || v > best.v) best = { v, g };
      });
      return {
        value: best.v,
        apply: () => {
          best.g.outputMult *= 2;
          best.g.loungeLevel++;
          best.g.pulseAnim = 1.0;
          spawnCanvasFloatText(best.g.x, best.g.y - 40, 'LOUNGE DOUBLED!', '#D1192A');
          addFlightLog(
            `<strong>${bot.name}</strong> installed a <em>Lounge Upgrade</em> at <strong>${best.g.id}</strong> (base output doubled).`
          );
        }
      };
    }

    if (card.typeId === 'charter_buyout') {
      const holders = state.players.filter((p) => p.index !== bot.index && p.hand.length > 0);
      if (holders.length === 0) return null;
      holders.sort((a, b) => b.hand.length - a.hand.length);
      const target =
        difficulty === 3 && state.players[leaderIdx].hand.length > 0
          ? state.players[leaderIdx]
          : holders[0];
      return {
        value: 120 + difficulty * 35 + target.hand.length * 20,
        apply: () => {
          const idx = Math.floor(Math.random() * target.hand.length);
          const [stolen] = target.hand.splice(idx, 1);
          bot.hand.push(stolen);
          while (bot.hand.length > MAX_HAND_SIZE) discardCard(bot.hand.shift());
          addFlightLog(
            `<strong>${bot.name}</strong> executed a <em>Charter Buyout</em> on <strong>${target.name}</strong>, seizing their <strong>${stolen.name}</strong> coupon.`
          );
        }
      };
    }

    if (card.typeId === 'baggage_strike') {
      const victims = state.players.filter((p) => p.index !== bot.index && p.passengers > 0);
      if (victims.length === 0) return null;
      let target = victims[0];
      if (difficulty === 1) target = victims[Math.floor(Math.random() * victims.length)];
      else {
        victims.sort((a, b) => b.passengers - a.passengers);
        target = difficulty === 3 ? state.players[leaderIdx] : victims[0];
        if (!target || target.passengers <= 0) target = victims[0];
      }
      const siphon = Math.min(400, Math.round(target.passengers * 0.25));
      return {
        value: siphon * 2,
        apply: () => {
          target.passengers -= siphon;
          bot.passengers += siphon;
          spawnCanvasFloatText(
            state.rotundaCenter.x,
            state.rotundaCenter.y - 30,
            `BAGGAGE STRIKE — ${siphon} PAX`,
            bot.color
          );
          addFlightLog(
            `<strong>${bot.name}</strong> called a <em>Baggage Strike</em> on <strong>${target.name}</strong>, siphoning <strong>${siphon.toLocaleString()} PAX</strong>.`
          );
        }
      };
    }

    if (card.typeId === 'direct_flight') {
      return {
        value: 150,
        apply: () => {
          bot.passengers += 150;
          addFlightLog(`<strong>${bot.name}</strong> flew a <em>Direct Flight Charter</em> (+150 PAX).`);
        }
      };
    }

    if (card.typeId === 'terminal_expansion') {
      const emptyCount = state.gates.filter((g) => g.owner === null).length;
      return {
        value: 120 * valueHorizon() * 0.8 + (emptyCount === 0 ? 180 : 0),
        apply: () => {
          const gate = spawnExpansionGate(bot.index);
          if (!gate) {
            addFlightLog(
              `<strong>${bot.name}</strong> shelved a <em>Terminal Expansion</em> — no buildable floor space.`
            );
            return;
          }
          spawnCanvasFloatText(gate.x, gate.y - 40, gate.isZGate ? `APRON GATE ${gate.id}!` : 'SATELLITE GATE!', bot.color);
          addFlightLog(
            `<strong>${bot.name}</strong> commissioned <strong>${gate.id}</strong> via <em>Terminal Expansion</em> (excluded from gate majority).`
          );
          initPassengerAgents();
        }
      };
    }

    if (card.typeId === 'nationalize_industry') {
      if (state.nationalizePlayed) return null;
      const totalPayout = calculateTotalTerminalNationalizationPayout();
      if (totalPayout <= 0) return null;
      return {
        value: totalPayout * 1.15,
        apply: () => {
          executeNationalizeIndustry(bot);
        }
      };
    }

    if (card.typeId === 'faa_audit') {
      const holders = state.players.filter((p) => p.index !== bot.index && p.hand.length > 0);
      if (holders.length === 0) return null;
      return {
        value: holders.length * (difficulty === 3 ? 90 : 60),
        apply: () => {
          const audited = [];
          holders.forEach((p) => {
            const dumped = p.hand.shift();
            discardCard(dumped);
            audited.push(p.name);
          });
          addFlightLog(
            `<strong>${bot.name}</strong> called an <em>FAA Audit</em>: ${audited.join(', ')} forfeited their oldest coupon.`
          );
        }
      };
    }

    return null;
  }

  function executeAITurn(bot) {
    if (state.status !== 'PLAYING') return;

    const difficulty = state.config.difficulty;
    const leaderIdx = getLeadingOpponentIndex(bot.index);
    const noise = difficulty === 1 ? 0.85 : difficulty === 2 ? 0.3 : 0.1;
    const cardBias = difficulty === 1 ? 0.55 : difficulty === 2 ? 0.95 : 1.12;

    const options = [];

    const bestGate = bestEmptyGateForBot(bot.index, difficulty, leaderIdx);
    if (bestGate) {
      const claimValue =
        difficulty === 1
          ? 400
          : scoreEmptyGateForBot(bestGate.gate, bot.index, difficulty, leaderIdx);
      options.push({
        kind: 'gate',
        value: claimValue,
        run: () => {
          claimGateForPlayer(bestGate.gate, bot, 'claimed');
          sfx.playPinClaim();
        }
      });
    }

    bot.hand.forEach((card, idx) => {
      const evaluated = evaluateBotCard(bot, card, difficulty, leaderIdx);
      if (!evaluated) return;
      options.push({
        kind: 'card',
        cardIndex: idx,
        value: evaluated.value * cardBias,
        run: () => {
          const [played] = bot.hand.splice(idx, 1);
          if (played && !played.singleton && played.typeId !== 'nationalize_industry') {
            discardCard(played);
          }
          sfx.playCardDeploy();
          evaluated.apply();
        }
      });
    });

    if (options.length === 0) {
      addFlightLog(`<strong>${bot.name}</strong> had no viable orders and passed the turn.`);
      commitTurnAction('pass');
      updateAllUI();
      setTimeout(() => advanceTurn(), 420);
      return;
    }

    options.forEach((o) => {
      o.weighted = o.value * (1 + (Math.random() - 0.5) * 2 * noise);
    });
    options.sort((a, b) => b.weighted - a.weighted);
    const choice = options[0];

    choice.run();
    commitTurnAction(choice.kind);
    updateAllUI();

    if (checkSuddenDeathWinner()) return;
    setTimeout(() => advanceTurn(), 620);
  }

  // ============================================================================
  // 15. DOM UI SYNCHRONIZATION
  // ============================================================================

  function updateAllUI() {
    const padRound = String(state.round).padStart(2, '0');
    dom.roundDisplay.textContent = `${padRound} / ${state.config.maxRounds}`;
    dom.majorityDisplay.textContent = `${state.majorityThreshold} / ${getMajorityGatePool().length} ${t('hud.gatesUnit')}`;
    const activeEvLoc = getWorldEventLocale(state.activeWorldEvent.id || 'clear_skies');
    dom.activeWorldName.textContent =
      activeEvLoc.shortLabel || state.activeWorldEvent.shortLabel || state.activeWorldEvent.title;
    if (dom.mapArchetypeDisplay) {
      dom.mapArchetypeDisplay.textContent = state.mapArchetype.label;
      dom.mapArchetypeDisplay.parentElement.title = state.mapArchetype.blurb;
    }

    const isCoop = state.config.mode === 'coop';
    const isOnline = state.config.mode === 'online';
    const activePlayer = state.players[state.currentPlayerIndex] || state.players[0];
    const isHumanTurn =
      state.status === 'PLAYING' &&
      Boolean(activePlayer && activePlayer.isHuman) &&
      !state.turnState.aiBusy &&
      !state.turnState.networkPending &&
      (!isOnline || state.currentPlayerIndex === state.localPlayerIndex);
    const human = isOnline
      ? state.players[state.localPlayerIndex] || state.players[0]
      : activePlayer && activePlayer.isHuman
      ? activePlayer
      : state.players[0];

    // Turn Order Strip
    dom.turnOrderStrip.innerHTML = state.players
      .map((p, idx) => {
        const isCurrent =
          (state.status === 'PLAYING' || state.status === 'PASS_INTERSTITIAL') &&
          state.currentPlayerIndex === idx;
        const pillLabel =
          isCoop || isOnline
            ? `P${idx + 1} • ${p.name.split(' ')[0]}${isOnline && idx === state.localPlayerIndex ? ` (${t('hud.you')})` : ''}`
            : p.isHuman
            ? t('hud.you')
            : p.name.split(' ')[0];
        return `
        <div class="turn-pill ${isCurrent ? 'active-turn' : ''}">
          <span class="pill-dot" style="background: ${p.color}; border: 1px solid #1A1A1A"></span>
          <span>${pillLabel}</span>
        </div>
      `;
      })
      .concat([
        `<div class="turn-pill ${state.status === 'WORLD_MODAL' ? 'active-turn' : ''}">
          <span class="pill-dot" style="background: var(--brand-primary); border: 1px solid #1A1A1A"></span>
          <span>${t('hud.worldWire')}</span>
        </div>`
      ])
      .join('');

    const selectedCard =
      isHumanTurn && state.turnState.selectedCardIndex !== null && human
        ? human.hand[state.turnState.selectedCardIndex]
        : null;
    const strikeTargeting = Boolean(selectedCard && selectedCard.targetMode === 'opponent_player');

    // Left Sidebar Scoreboard
    dom.scoreboardList.innerHTML = state.players
      .map((p, idx) => {
        const owned = countMajorityGates(idx);
        const annex = getPlayerGates(idx).length - owned;
        const nextPax = calculatePlayerTurnPax(idx);
        const chainLen = largestChainForPlayer(idx).length;
        const pct = Math.min(100, Math.round((owned / state.majorityThreshold) * 100));
        const logoObj = AIRLINE_LOGOS.find((l) => l.id === p.logo) || AIRLINE_LOGOS[0];
        const isTurn =
          (state.status === 'PLAYING' || state.status === 'PASS_INTERSTITIAL') &&
          state.currentPlayerIndex === idx;
        const canStrike = strikeTargeting && idx !== state.currentPlayerIndex;
        const miniLogoContrast = getContrastTextForColor(p.color);
        const roleTag =
          isCoop || isOnline
            ? t('sidebar.roleCoop', { id: idx + 1, n: p.hand.length })
            : p.isHuman
            ? t('sidebar.roleCaptain')
            : t('sidebar.roleRival', { n: p.hand.length });

        return `
        <div class="airline-score-row ${isTurn ? 'current-turn' : ''} ${canStrike ? 'strike-targetable' : ''}"
             style="--player-color: ${p.color}" data-player-index="${idx}">
          <div class="score-row-top">
            <div class="airline-id">
              <div class="airline-mini-logo" style="color: ${miniLogoContrast}; border: 1px solid #1A1A1A">${logoObj.svg}</div>
              <span class="airline-name-text" title="${p.name}">${p.name}</span>
            </div>
            <span class="airline-role-tag">${roleTag}</span>
            ${p.isDisconnected ? `<span class="status-chip inactive">${t('online.inactiveHoldingChip')}</span>` : ''}
            ${p.skipNextTurn ? `<span class="status-chip hold">${t('sidebar.chipHold')}</span>` : ''}
            ${p.sstUntilRound >= state.round ? `<span class="status-chip sst">${t('sidebar.chipSst')}</span>` : ''}
            ${p.smearUntilRound >= state.round ? `<span class="status-chip smear">${t('sidebar.chipSmear')}</span>` : ''}
            ${
              Array.isArray(state.codeShareLinks) &&
              state.codeShareLinks.some(
                (cs) => cs.expiresAfterRound >= state.round && (cs.playerA === idx || cs.playerB === idx)
              )
                ? `<span class="status-chip codeshare">CODE-SHARE 25%</span>`
                : ''
            }
          </div>
          <div class="score-metrics">
            <div class="metric-cell" title="Gates counting toward majority${annex > 0 ? ` (+${annex} satellite/Z gate(s) excluded)` : ''}">
              <span>${t('sidebar.gatesMetric')}</span>
              <strong class="${owned >= state.majorityThreshold - 2 ? 'crimson-text' : ''}">${owned} / ${state.majorityThreshold}${annex > 0 ? `<em class="annex-note">+${annex}</em>` : ''}</strong>
            </div>
            <div class="metric-cell">
              <span>${t('sidebar.passengersMetric')}</span>
              <strong>${p.passengers.toLocaleString()}</strong>
            </div>
            <div class="metric-cell" title="Largest contiguous route chain: ${chainLen} gate(s)">
              <span>${t('sidebar.outputMetric')}</span>
              <strong class="crimson-text">+${nextPax}/rd</strong>
            </div>
          </div>
          <div class="majority-progress">
            <div class="majority-bar" style="width: ${pct}%"></div>
          </div>
          ${canStrike ? `<div class="strike-overlay">${t('sidebar.targetPlayer', { name: p.name })}</div>` : ''}
        </div>
      `;
      })
      .join('');

    if (strikeTargeting) {
      dom.scoreboardList.querySelectorAll('.strike-targetable').forEach((row) => {
        row.addEventListener('click', () => {
          handleScoreboardTargetClick(parseInt(row.dataset.playerIndex, 10));
        });
      });
    }

    // Populate quick-select opponent buttons in the board banner when targeting a rival player
    if (dom.opponentTargetBar) {
      if (strikeTargeting) {
        dom.opponentTargetBar.classList.remove('hidden');
        const stagedTargetPlayer =
          state.turnState.stagedAction && state.turnState.stagedAction.type === 'card'
            ? state.turnState.stagedAction.targetPlayerIndex
            : null;
        dom.opponentTargetBar.innerHTML = state.players
          .filter((p) => p.index !== state.currentPlayerIndex)
          .map(
            (p) => `
            <button type="button" class="opponent-target-btn ${stagedTargetPlayer === p.index ? 'active-target' : ''}" data-opp-index="${p.index}">
              <span class="opp-dot" style="background: ${p.color}"></span>
              <span>${t('sidebar.targetPlayer', { name: p.name })}${stagedTargetPlayer === p.index ? ' ✓' : ''}</span>
            </button>
          `
          )
          .join('');
        dom.opponentTargetBar.querySelectorAll('.opponent-target-btn').forEach((btn) => {
          btn.addEventListener('click', () => {
            handleScoreboardTargetClick(parseInt(btn.dataset.oppIndex, 10));
          });
        });
      } else {
        dom.opponentTargetBar.classList.add('hidden');
        dom.opponentTargetBar.innerHTML = '';
      }
    }

    dom.worldDeckRemaining.textContent = t('sidebar.nextBulletinIn', { n: roundsUntilNextBulletin() });
    dom.sidebarWorldTitle.textContent = activeEvLoc.title || state.activeWorldEvent.title;
    dom.sidebarWorldDesc.textContent = activeEvLoc.desc || state.activeWorldEvent.desc;

    // --- Mutually exclusive action economy & staging indicators ---------------
    const staged = state.turnState.stagedAction;
    const gateSpent = state.turnState.actionType === 'gate' || (staged && staged.type === 'gate');
    const cardSpent = state.turnState.actionType === 'card' || (staged && staged.type === 'card');
    const locked = state.turnState.actionTaken;

    if (dom.econGate) {
      dom.econGate.classList.toggle('used', gateSpent);
      dom.econGate.classList.toggle('locked', locked && !gateSpent);
    }
    if (dom.econCard) {
      dom.econCard.classList.toggle('used', cardSpent);
      dom.econCard.classList.toggle('locked', locked && !cardSpent);
    }

    if (!isHumanTurn) {
      dom.boardBanner.classList.remove('targeting-mode');
      dom.cancelTargetBtn.classList.add('hidden');
      if (state.turnState.networkPending) {
        dom.boardPromptText.textContent = t('online.syncingPrompt');
        dom.turnPhaseHint.textContent = t('board.standByHint');
      } else if (state.status === 'PASS_INTERSTITIAL' && activePlayer) {
        dom.boardPromptText.textContent = t('board.handoverPrompt', { name: activePlayer.name });
        dom.turnPhaseHint.textContent = t('board.privacyHint');
      } else if (isOnline && activePlayer) {
        dom.boardPromptText.textContent = t('online.waitingPeerPrompt', { name: activePlayer.name });
        dom.turnPhaseHint.textContent = t('board.standByHint');
      } else {
        dom.boardPromptText.textContent = activePlayer
          ? t('board.rivalOperating', { name: activePlayer.name })
          : t('board.resolvingBulletin');
        dom.turnPhaseHint.textContent = t('board.standByHint');
      }
    } else if (staged) {
      dom.boardBanner.classList.add('targeting-mode');
      dom.cancelTargetBtn.classList.remove('hidden');
      if (staged.type === 'gate') {
        const g = getGateById(staged.gateId);
        const gText = t('deck.stagedHintGate', {
          id: staged.gateId,
          name: g ? g.name : staged.gateId
        });
        dom.boardPromptText.textContent = gText;
        dom.turnPhaseHint.textContent = gText;
      } else if (staged.type === 'card' && human) {
        const card = human.hand[staged.cardIndex];
        const cLoc = card ? getCardLocale(card.typeId) : {};
        const cName = cLoc.name || (card ? card.name : 'COUPON');
        let targetSummary = '';
        if (staged.targetGateId) {
          const tg = getGateById(staged.targetGateId);
          targetSummary =
            card && card.targetMode === 'concourse_branch' && tg
              ? `→ ${tg.concourse}`
              : `→ ${staged.targetGateId}`;
        } else if (typeof staged.targetPlayerIndex === 'number' && state.players[staged.targetPlayerIndex]) {
          targetSummary = `→ ${state.players[staged.targetPlayerIndex].name}`;
        }
        const cText = t('deck.stagedHintCard', { card: cName, target: targetSummary });
        dom.boardPromptText.textContent = cText;
        dom.turnPhaseHint.textContent = cText;
      }
    } else if (state.turnState.selectedCardIndex !== null && selectedCard) {
      dom.boardBanner.classList.add('targeting-mode');
      dom.cancelTargetBtn.classList.remove('hidden');
      const cLoc = getCardLocale(selectedCard.typeId);
      dom.boardPromptText.textContent = t('board.targetingPrefix', {
        name: human.name,
        card: (cLoc.name || selectedCard.name).toUpperCase(),
        prompt: cLoc.prompt || t('board.selectTargetHint')
      });
      dom.turnPhaseHint.textContent = t('board.selectTargetHint');
    } else {
      dom.boardBanner.classList.remove('targeting-mode');
      dom.cancelTargetBtn.classList.add('hidden');
      if (!state.turnState.actionTaken) {
        dom.boardPromptText.textContent = t('board.yourTurnPrompt', { name: human.name });
        dom.turnPhaseHint.textContent = t('board.oneActionAvail', { name: human.name });
      } else if (gateSpent) {
        dom.boardPromptText.textContent = t('board.gateClaimedPrompt');
        dom.turnPhaseHint.textContent = t('board.gateSpentHint');
      } else {
        dom.boardPromptText.textContent = t('board.couponDeployedPrompt');
        dom.turnPhaseHint.textContent = t('board.couponSpentHint');
      }
    }

    // --- Hand of Flight Coupons (max 3; sealed during privacy interstitial & Co-Op bulletins) ---
    if (state.status === 'PASS_INTERSTITIAL' || (isCoop && state.status === 'WORLD_MODAL')) {
      dom.handCount.textContent = '•';
      dom.playerHand.innerHTML = `<div class="empty-hand-msg">${t('deck.sealedManifest')}</div>`;
    } else if (human) {
      dom.handCount.textContent = String(human.hand.length);
      if (dom.deckRemaining) dom.deckRemaining.textContent = String(state.actionDeck.length);
      if (dom.discardCount) dom.discardCount.textContent = String(state.actionDiscard.length);

      if (human.hand.length === 0) {
        dom.playerHand.innerHTML = `<div class="empty-hand-msg">${t('deck.emptyHand')}</div>`;
      } else {
        dom.playerHand.innerHTML = human.hand
          .map((card, idx) => {
            const isSelected = state.turnState.selectedCardIndex === idx;
            const isStaged = Boolean(staged && staged.type === 'card' && staged.cardIndex === idx);
            const isDisabled = !isHumanTurn || state.turnState.actionTaken;
            const flight = 100 + (card.uid.charCodeAt(5) % 86) * 7;
            const cLoc = getCardLocale(card.typeId);
            const cName = cLoc.name || card.name;
            const cBadge = cLoc.badge || card.badge;
            const cDesc = cLoc.desc || card.desc;
            const cTooltip = cLoc.tooltip || card.tooltip;
            const cFooter = cLoc.footer || card.footer;
            return `
            <div class="boarding-pass ${isSelected ? 'selected-card' : ''} ${isStaged ? 'staged-card' : ''} ${isDisabled ? 'disabled' : ''}"
                 data-card-index="${idx}" style="--stagger: ${idx}">
              ${
                idx === 0 && human.hand.length >= MAX_HAND_SIZE
                  ? `<span class="fifo-flag" title="Oldest pass">${t('deck.oldestFlag')}</span>`
                  : ''
              }
              <div class="pass-stub">
                <span class="stub-airline">AIR<br />SUP</span>
                <span class="stub-flight">FLT<br />${flight}</span>
                <span class="stub-barcode"></span>
              </div>
              <div class="pass-main">
                <div class="pass-head">
                  <span class="pass-icon">${CARD_ICONS[card.typeId] || ''}</span>
                  <span class="pass-title">${cName}</span>
                  <span class="card-badge">${cBadge}</span>
                </div>
                <div class="pass-art">${CARD_ART[card.typeId] || ''}</div>
                <p class="card-desc">${cDesc}</p>
                <div class="card-footer">
                  <span>${isStaged ? t('deck.confirmAction') : isSelected ? t('deck.selectTarget') : cFooter}</span>
                  <span class="pass-stamp">${isStaged ? 'STAGED' : isSelected ? t('deck.armedStamp') : t('deck.issuedStamp')}</span>
                </div>
              </div>
              <div class="card-tooltip" role="tooltip">
                <div class="tip-head">${cName} <span>${cBadge}</span></div>
                <p>${cTooltip}</p>
                <div class="tip-foot">${cFooter} • ${t('deck.costsTurnAction')}</div>
              </div>
            </div>
          `;
          })
          .join('');

        dom.playerHand.querySelectorAll('.boarding-pass').forEach((cardEl) => {
          cardEl.addEventListener('click', () => {
            handleHumanCardClick(parseInt(cardEl.dataset.cardIndex, 10));
          });
          cardEl.addEventListener('mouseenter', () => sfx.playUiClick());
        });
      }
    }

    // --- Confirm Action & Cancel Selection buttons (Turn Staging) ------------
    const hasStagedReady = Boolean(isHumanTurn && !state.turnState.actionTaken && staged);
    if (dom.confirmActionBtn) {
      dom.confirmActionBtn.classList.toggle('hidden', !hasStagedReady);
      dom.confirmActionBtn.disabled = !hasStagedReady;
      if (hasStagedReady && dom.confirmActionMain && dom.confirmActionSub) {
        dom.confirmActionMain.textContent = t('deck.confirmAction');
        if (staged.type === 'gate') {
          dom.confirmActionSub.textContent = t('deck.confirmGateSub', { id: staged.gateId });
        } else if (staged.type === 'card' && human && human.hand[staged.cardIndex]) {
          const c = human.hand[staged.cardIndex];
          const cLoc = getCardLocale(c.typeId);
          dom.confirmActionSub.textContent = t('deck.confirmCardSub', {
            card: cLoc.name || c.name
          });
        }
      }
    }
    if (dom.mobileConfirmActionBtn) {
      dom.mobileConfirmActionBtn.classList.toggle('hidden', !hasStagedReady);
      dom.mobileConfirmActionBtn.disabled = !hasStagedReady;
      if (hasStagedReady) {
        dom.mobileConfirmActionBtn.textContent = t('deck.confirmAction');
      }
    }
    if (dom.cancelStageBtn) {
      const canCancel = Boolean(
        isHumanTurn && !state.turnState.actionTaken && (staged || state.turnState.selectedCardIndex !== null)
      );
      dom.cancelStageBtn.classList.toggle('hidden', !canCancel);
      dom.cancelStageBtn.textContent = t('deck.cancelSelection');
    }

    // --- Pass / End Turn button ---------------------------------------------
    dom.endTurnBtn.disabled = !isHumanTurn;
    const mobileEndBtn = document.getElementById('mobile-end-turn-quick-btn');
    if (mobileEndBtn) mobileEndBtn.disabled = !isHumanTurn;
    if (dom.endTurnMain && dom.endTurnSub) {
      if (!isHumanTurn) {
        dom.endTurnMain.textContent = t('deck.standBy');
        dom.endTurnSub.textContent =
          state.status === 'PASS_INTERSTITIAL' ? t('deck.awaitingHandoverSub') : t('deck.rivalOperatingSub');
        if (mobileEndBtn) mobileEndBtn.textContent = t('deck.standBy');
      } else if (state.turnState.actionTaken) {
        dom.endTurnMain.textContent = t('deck.endTurn');
        dom.endTurnSub.textContent = t('deck.actionSpentSub');
        if (mobileEndBtn) mobileEndBtn.textContent = t('deck.endTurn');
      } else {
        dom.endTurnMain.textContent = t('deck.passTurn');
        dom.endTurnSub.textContent = t('deck.takeNoAction');
        if (mobileEndBtn) mobileEndBtn.textContent = t('deck.passTurn');
      }
    }
  }

  // Spins a ghost boarding pass out of the tray and shreds it — played when
  // the strict 3-card hand limit voids the oldest coupon.
  function flagShredAnimation(cardName) {
    sfx.playShred();
    if (!dom.playerHand) return;
    const ghost = document.createElement('div');
    ghost.className = 'pass-shred-ghost';
    ghost.innerHTML = `
      <div class="shred-strip"></div>
      <div class="shred-strip"></div>
      <div class="shred-strip"></div>
      <div class="shred-strip"></div>
      <div class="shred-label">${cardName || 'COUPON'} VOID</div>
    `;
    dom.playerHand.appendChild(ghost);
    window.setTimeout(() => ghost.remove(), 900);
  }

  // Brief mid-century toast used for auto-discards and blocked actions.
  let toastTimer = null;
  function showToast(title, bodyHtml) {
    if (!dom.toastStack) return;
    const el = document.createElement('div');
    el.className = 'toast-card';
    el.innerHTML = `<div class="toast-title">${title}</div><div class="toast-body">${bodyHtml}</div>`;
    dom.toastStack.appendChild(el);
    sfx.playError();
    requestAnimationFrame(() => el.classList.add('visible'));
    window.setTimeout(() => {
      el.classList.remove('visible');
      window.setTimeout(() => el.remove(), 320);
    }, 2600);
    clearTimeout(toastTimer);
  }

  function addFlightLog(htmlMessage) {
    const li = document.createElement('li');
    const padRound = String(state.round).padStart(2, '0');
    const entryHtml = `<span class="log-time">[RD ${padRound}]</span>${htmlMessage}`;
    li.innerHTML = entryHtml;
    state.flightLogHistory.unshift(entryHtml);
    if (state.flightLogHistory.length > 35) {
      state.flightLogHistory.pop();
    }
    dom.flightLog.prepend(li);
    while (dom.flightLog.children.length > 35) {
      dom.flightLog.removeChild(dom.flightLog.lastChild);
    }
  }

  function spawnCanvasFloatText(x, y, text, color = '#D1192A') {
    state.floatingTexts.push({
      x,
      y,
      text,
      color,
      alpha: 1.0,
      vy: -0.65
    });
  }

  // ============================================================================
  // 16. CANVAS VECTOR EMBLEM DRAWER & 3D MAP PIN RENDERER
  // ============================================================================

  function drawEmblemOnCanvas(ctx, logoId, cx, cy, size, color) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.6;
    const r = size * 0.5;

    switch (logoId) {
      case 'wing':
        ctx.beginPath();
        ctx.moveTo(-r, r * 0.4);
        ctx.lineTo(r, -r * 0.6);
        ctx.lineTo(r * 0.25, r * 0.85);
        ctx.lineTo(-r * 0.15, r * 0.25);
        ctx.closePath();
        ctx.fill();
        break;
      case 'globe':
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.8, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 0.4, r * 0.8, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-r * 0.8, 0);
        ctx.lineTo(r * 0.8, 0);
        ctx.stroke();
        break;
      case 'atom':
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
        ctx.fill();
        [0.5, -0.5, 1.57].forEach((rot) => {
          ctx.save();
          ctx.rotate(rot);
          ctx.beginPath();
          ctx.ellipse(0, 0, r * 0.9, r * 0.34, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        });
        break;
      case 'hotdog':
        ctx.beginPath();
        ctx.roundRect(-r * 0.85, -r * 0.25, r * 1.7, r * 0.5, 3);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(-r * 0.65, -r * 0.45);
        ctx.quadraticCurveTo(0, -r * 0.7, r * 0.65, -r * 0.45);
        ctx.moveTo(-r * 0.65, r * 0.45);
        ctx.quadraticCurveTo(0, r * 0.7, r * 0.65, r * 0.45);
        ctx.stroke();
        break;
      case 'saucer':
        ctx.beginPath();
        ctx.ellipse(0, r * 0.1, r * 0.9, r * 0.32, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.45, Math.PI, 0);
        ctx.stroke();
        break;
      case 'goofybird':
      case 'duck':
      case 'flamingo':
        ctx.beginPath();
        ctx.arc(-r * 0.2, -r * 0.15, r * 0.42, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(r * 0.15, -r * 0.3);
        ctx.lineTo(r * 0.85, -r * 0.05);
        ctx.lineTo(r * 0.15, r * 0.2);
        ctx.closePath();
        ctx.fill();
        break;
      case 'martini':
        ctx.beginPath();
        ctx.moveTo(-r * 0.7, -r * 0.65);
        ctx.lineTo(r * 0.7, -r * 0.65);
        ctx.lineTo(0, r * 0.15);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(0, r * 0.1);
        ctx.lineTo(0, r * 0.75);
        ctx.moveTo(-r * 0.45, r * 0.75);
        ctx.lineTo(r * 0.45, r * 0.75);
        ctx.stroke();
        break;
      case 'starburst':
      case 'compass':
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const ang = (i * Math.PI) / 4;
          const rad = i % 2 === 0 ? r * 0.92 : r * 0.32;
          if (i === 0) ctx.moveTo(Math.cos(ang) * rad, Math.sin(ang) * rad);
          else ctx.lineTo(Math.cos(ang) * rad, Math.sin(ang) * rad);
        }
        ctx.closePath();
        ctx.fill();
        break;
      case 'cat':
        // Mid-Century Stylized Aviator Cat Silhouette
        ctx.beginPath();
        ctx.moveTo(-r * 0.62, -r * 0.05);
        ctx.lineTo(-r * 0.72, -r * 0.85);
        ctx.lineTo(-r * 0.22, -r * 0.42);
        ctx.quadraticCurveTo(0, -r * 0.5, r * 0.22, -r * 0.42);
        ctx.lineTo(r * 0.72, -r * 0.85);
        ctx.lineTo(r * 0.62, -r * 0.05);
        ctx.bezierCurveTo(r * 0.75, r * 0.48, r * 0.45, r * 0.82, 0, r * 0.82);
        ctx.bezierCurveTo(-r * 0.45, r * 0.82, -r * 0.75, r * 0.48, -r * 0.62, -r * 0.05);
        ctx.closePath();
        ctx.fill();
        // Whiskers
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(-r * 0.95, r * 0.18);
        ctx.lineTo(-r * 0.45, r * 0.26);
        ctx.moveTo(r * 0.95, r * 0.18);
        ctx.lineTo(r * 0.45, r * 0.26);
        ctx.stroke();
        break;
      default:
        // Crisp Supersonic / Aviation Chevron Emblem
        ctx.beginPath();
        ctx.moveTo(0, -r * 0.88);
        ctx.lineTo(r * 0.68, r * 0.65);
        ctx.lineTo(0, r * 0.28);
        ctx.lineTo(-r * 0.68, r * 0.65);
        ctx.closePath();
        ctx.fill();
        break;
    }
    ctx.restore();
  }

  function draw3DGatePin(ctx, gate, isHovered, isCardTargetable, timePulse) {
    const owner = gate.owner !== null ? state.players[gate.owner] : null;
    const isHub = gate.tier === 'hub';
    const brandPrimary = (state.theme && state.theme.primary) || '#D1192A';
    const brandReadable = (state.theme && state.theme.readableText) || brandPrimary;

    // Smooth hover scale interpolation
    const targetScale = isHovered ? 1.22 : 1.0;
    gate.hoverScale += (targetScale - gate.hoverScale) * 0.22;
    const scale = gate.hoverScale;

    const pinColor = owner ? owner.color : isHub ? brandPrimary : '#1A1A1A';
    const ownerContrast = owner ? getContrastTextForColor(owner.color) : '#1A1A1A';
    const headRadius = (isHub ? 17 : 14.5) * scale;
    const pinLift = (isHovered ? 30 : 24) * scale;
    const headY = gate.y - pinLift;

    ctx.save();

    // On small boards every pin is drawn larger in world units (scaled about
    // its own ground anchor) so heads, labels and badges stay legible without
    // changing a single hand-tuned offset below.
    if (view.uiScale !== 1) {
      ctx.translate(gate.x, gate.y);
      ctx.scale(view.uiScale, view.uiScale);
      ctx.translate(-gate.x, -gate.y);
    }

    // 1. Ground Architectural Anchor Ring at (gate.x, gate.y)
    //    A cream halo lifts every pin off the clean terminal floor.
    ctx.beginPath();
    ctx.arc(gate.x, gate.y, (isHub ? 9 : 7) + 4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(253, 251, 247, 0.95)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(gate.x, gate.y, isHub ? 9 : 7, 0, Math.PI * 2);
    ctx.fillStyle = owner ? owner.color : '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 2.4;
    ctx.strokeStyle = '#1A1A1A';
    ctx.stroke();

    // 1b. Remote "Z" Gate Apron Stencil Pad on Ground
    if (gate.isZGate) {
      ctx.save();
      ctx.fillStyle = '#2B2D2F';
      ctx.strokeStyle = '#E3B505';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.roundRect(gate.x - 19, gate.y - 13, 38, 26, 4);
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    // 2. Targeting Reticle Ring on Ground if valid Action Card target
    if (isCardTargetable) {
      ctx.beginPath();
      ctx.arc(gate.x, gate.y, 22 + timePulse * 6, 0, Math.PI * 2);
      ctx.strokeStyle = brandReadable;
      ctx.lineWidth = 2.5;
      ctx.setLineDash([5, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 2b. PULSING SELECTION AURA when this gate (or its branch) is STAGED for confirmation
    const staged = state.turnState.stagedAction;
    const isStagedGate =
      staged &&
      ((staged.type === 'gate' && staged.gateId === gate.id) ||
        (staged.type === 'card' && staged.targetGateId === gate.id) ||
        (staged.type === 'card' && staged.targetConcourse && staged.targetConcourse === gate.concourse));
    if (isStagedGate) {
      ctx.save();
      const auraR = headRadius + 10 + timePulse * 7;
      ctx.beginPath();
      ctx.arc(gate.x, headY, auraR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(227, 181, 5, 0.24)';
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#E3B505';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(gate.x, gate.y, 26 + timePulse * 5, 0, Math.PI * 2);
      ctx.strokeStyle = '#E3B505';
      ctx.lineWidth = 2.8;
      ctx.stroke();
      ctx.restore();
    }

    // 3. Claim Burst Pulse
    if (gate.pulseAnim > 0) {
      gate.pulseAnim = Math.max(0, gate.pulseAnim - 0.03);
      ctx.beginPath();
      ctx.arc(gate.x, headY, headRadius + (1 - gate.pulseAnim) * 26, 0, Math.PI * 2);
      ctx.strokeStyle = pinColor;
      ctx.globalAlpha = gate.pulseAnim;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // 4. Cast 3D Drop Shadow on the White Blueprint Floor
    const shadowOffsetX = isHovered ? 13 : 9;
    const shadowOffsetY = isHovered ? 6 : 4;
    ctx.fillStyle = 'rgba(17, 17, 17, 0.18)';
    ctx.beginPath();
    ctx.ellipse(
      gate.x + shadowOffsetX,
      gate.y + shadowOffsetY,
      headRadius * 0.65,
      headRadius * 0.3,
      -0.2,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // 5. Metallic Pin Needle Stem Piercing the Gate Center
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 2.6 * scale;
    ctx.beginPath();
    ctx.moveTo(gate.x, gate.y);
    ctx.lineTo(gate.x, headY + headRadius * 0.6);
    ctx.stroke();

    // 6. 3D Teardrop / Conical Pin Body (white halo + heavy ink outline for contrast)
    ctx.beginPath();
    ctx.arc(gate.x, headY, headRadius, Math.PI * 0.82, Math.PI * 0.18, false);
    ctx.lineTo(gate.x, gate.y - 4);
    ctx.closePath();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.fillStyle = pinColor;
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 2.6;
    ctx.fill();
    ctx.stroke();

    // 7. Inner Pin Head Medallion (auto-contrasted for light/dark liveries)
    ctx.beginPath();
    ctx.arc(gate.x, headY, headRadius * 0.74, 0, Math.PI * 2);
    ctx.fillStyle = owner ? owner.color : '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 1.4;
    ctx.strokeStyle = owner ? ownerContrast : '#1A1A1A';
    ctx.stroke();

    // 8. 3D Glossy Specular Highlight Crescent
    ctx.beginPath();
    ctx.arc(gate.x - headRadius * 0.28, headY - headRadius * 0.28, headRadius * 0.22, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.fill();

    // 9. Emblem or Unclaimed Gate Code on Pin Head
    if (owner) {
      drawEmblemOnCanvas(ctx, owner.logo, gate.x, headY, headRadius * 1.05, ownerContrast);
    } else {
      ctx.font = `700 ${Math.round(10 * scale)}px "Futura", "Oswald", sans-serif`;
      ctx.fillStyle = isHub ? brandReadable : '#1A1A1A';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(gate.id, gate.x, headY + 0.5);
    }

    // 9b. TEMPORARY LEASE (Hostile Takeover): dashed raider ring + countdown tag
    if (gate.temporaryUntilRound > 0) {
      ctx.save();
      ctx.strokeStyle = pinColor;
      ctx.lineWidth = 2.2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.arc(gate.x, headY, headRadius + 6 + timePulse * 2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#111111';
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.roundRect(gate.x - 17, headY - headRadius - 19, 34, 12, 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 7.5px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('1-TURN', gate.x, headY - headRadius - 12.6);
      ctx.restore();
    }

    // 9c. REMOTE "Z" GATE RETRO STENCIL BADGE on Pin Shoulder
    if (gate.isZGate) {
      ctx.save();
      const zx = gate.x - headRadius * 1.15;
      const zy = headY - headRadius * 0.55;
      ctx.fillStyle = '#E3B505';
      ctx.strokeStyle = '#111111';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.roundRect(zx - 8, zy - 8, 16, 16, 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#111111';
      ctx.font = '700 10px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Z', zx, zy + 0.5);
      ctx.restore();
    }

    // 9d. FORTRESS HUB RETRO RADAR SHIELD DOME
    if (isGateShielded(gate)) {
      ctx.save();
      const sweep = (performance.now() * 0.003) % (Math.PI * 2);
      ctx.strokeStyle = '#0B6E6E';
      ctx.fillStyle = 'rgba(11, 110, 110, 0.16)';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.arc(gate.x, headY, headRadius + 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.setLineDash([5, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(gate.x, headY);
      ctx.lineTo(
        gate.x + Math.cos(sweep) * (headRadius + 8),
        headY + Math.sin(sweep) * (headRadius + 8)
      );
      ctx.stroke();
      ctx.restore();
    }

    // 9e. LOYALTY PROGRAM (+50 PAX) STAR BADGE
    if (isGateLoyaltyActive(gate)) {
      ctx.save();
      const lx = gate.x - headRadius * 1.15;
      const ly = headY + headRadius * 0.45;
      ctx.fillStyle = '#E3B505';
      ctx.strokeStyle = '#111111';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.roundRect(lx - 13, ly - 6, 26, 12, 3);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#111111';
      ctx.font = '700 7.5px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('+50★', lx, ly + 0.5);
      ctx.restore();
    }

    // 9f. SEVERE WEATHER (-50%) BRANCH SQUALL BADGE
    if (isConcourseSeverelyWeathered(gate.concourse)) {
      ctx.save();
      const wx = gate.x + headRadius * 1.15;
      const wy = headY + headRadius * 0.55;
      ctx.fillStyle = '#1E4DB7';
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.roundRect(wx - 12, wy - 6, 24, 12, 3);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 7px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('⚡50%', wx, wy + 0.5);
      ctx.restore();
    }

    // 10. Crisp Architectural Label Pill Below Gate Anchor
    const yieldVal = calculateGateYield(gate);
    let labelText = owner ? `${gate.id} • +${yieldVal}` : `${gate.id} (+${gate.basePax})`;
    if (gate.isZGate) labelText += ' [Z-BUS]';
    else if (gate.excludeFromMajority) labelText += ' ◇ANNEX';
    ctx.font = '700 9.5px "Space Mono", monospace';
    const textW = ctx.measureText(labelText).width + 10;
    const pillX = gate.x - textW / 2;
    const pillY = gate.y + 8;

    ctx.fillStyle = owner ? owner.color : gate.isZGate ? '#E3B505' : '#FFFFFF';
    ctx.strokeStyle = '#1A1A1A';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.roundRect(pillX, pillY, textW, 14, 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = owner ? ownerContrast : '#1A1A1A';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(labelText, gate.x, pillY + 7.5);

    // 11. STARLIGHT LOUNGE MARKER — a cocktail glass on a starburst plinth,
    //     planted beside the pin so every 2x gate is unmistakable.
    if (gate.loungeLevel > 0) {
      const lx = gate.x + headRadius * 1.25;
      const ly = headY - headRadius * 0.35;
      const lounge = 9.5 * scale;
      const loungeAccent = owner ? owner.color : brandPrimary;

      ctx.save();
      ctx.translate(lx, ly);

      // Starburst rays
      ctx.strokeStyle = loungeAccent;
      ctx.lineWidth = 1.6;
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4 + timePulse * 0.25;
        const inner = lounge * 0.95;
        const outer = lounge * (i % 2 === 0 ? 1.75 : 1.35) + timePulse * 1.6;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * inner, Math.sin(a) * inner);
        ctx.lineTo(Math.cos(a) * outer, Math.sin(a) * outer);
        ctx.stroke();
      }

      // Plinth disc
      ctx.beginPath();
      ctx.arc(0, 0, lounge, 0, Math.PI * 2);
      ctx.fillStyle = '#FDFBF7';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#1A1A1A';
      ctx.stroke();

      // Martini glass
      ctx.strokeStyle = '#1A1A1A';
      ctx.lineWidth = 1.7;
      ctx.beginPath();
      ctx.moveTo(-lounge * 0.52, -lounge * 0.45);
      ctx.lineTo(lounge * 0.52, -lounge * 0.45);
      ctx.lineTo(0, lounge * 0.12);
      ctx.closePath();
      ctx.fillStyle = loungeAccent;
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, lounge * 0.12);
      ctx.lineTo(0, lounge * 0.5);
      ctx.moveTo(-lounge * 0.34, lounge * 0.52);
      ctx.lineTo(lounge * 0.34, lounge * 0.52);
      ctx.stroke();

      // Olive
      ctx.beginPath();
      ctx.arc(lounge * 0.26, -lounge * 0.26, lounge * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = '#FAF9F6';
      ctx.fill();

      // Multiplier tag for stacked lounges
      if (gate.outputMult > 1) {
        ctx.font = `700 ${Math.round(7.5 * scale)}px "Space Mono", monospace`;
        ctx.fillStyle = '#111111';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`x${gate.outputMult}`, 0, lounge * 1.95);
      }
      ctx.restore();
    }

    if (isGateClosed(gate)) {
      ctx.fillStyle = '#111111';
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(gate.x - headRadius * 0.78, headY - headRadius * 0.65, 7.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#FFD400';
      ctx.font = '700 9px "Space Mono", monospace';
      ctx.fillText('\u26A0', gate.x - headRadius * 0.78, headY - headRadius * 0.6);

      // Hazard chevrons across the closed gate anchor
      ctx.save();
      ctx.strokeStyle = 'rgba(17, 17, 17, 0.55)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(gate.x - 9, gate.y - 9);
      ctx.lineTo(gate.x + 9, gate.y + 9);
      ctx.moveTo(gate.x + 9, gate.y - 9);
      ctx.lineTo(gate.x - 9, gate.y + 9);
      ctx.stroke();
      ctx.restore();
    }

    ctx.restore();
  }

  // ============================================================================
  // 17. MASTER ARCHITECTURAL BLUEPRINT CANVAS RENDER LOOP
  // ============================================================================

  function renderBoardCanvas() {
    updatePassengerAgents();
    updateApronBuses();
    updateDepartureFlights();

    const brandPrimary = (state.theme && state.theme.primary) || '#D1192A';
    const brandGlow = (state.theme && state.theme.glow) || 'rgba(209, 25, 42, 0.24)';

    // Clear the full backing store (device pixels) with architectural paper
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#FDFBF7';
    ctx.fillRect(0, 0, dom.boardCanvas.width, dom.boardCanvas.height);

    // Map the 1100x620 world onto this device's canvas box, then pan & zoom
    applyViewTransform(ctx);

    ctx.save();
    // Apply Interactive Pan & Zoom Camera Transform
    ctx.translate(state.camera.x, state.camera.y);
    ctx.scale(state.camera.zoom, state.camera.zoom);

    // 1. Minimalist Architectural Blueprint Grid & Dimension Marks
    ctx.strokeStyle = 'rgba(26, 26, 26, 0.045)';
    ctx.lineWidth = 1;
    for (let x = -400; x <= VIRTUAL_W + 400; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, -400);
      ctx.lineTo(x, VIRTUAL_H + 400);
      ctx.stroke();
    }
    for (let y = -400; y <= VIRTUAL_H + 400; y += 40) {
      ctx.beginPath();
      ctx.moveTo(-400, y);
      ctx.lineTo(VIRTUAL_W + 400, y);
      ctx.stroke();
    }

    const rc = state.rotundaCenter;

    // Concentric Architectural Survey Rings (inner ring harmonizes with player livery)
    [rc.radius + 35, rc.radius + 125, rc.radius + 235].forEach((r, idx) => {
      ctx.beginPath();
      ctx.arc(rc.x, rc.y, r, 0, Math.PI * 2);
      ctx.strokeStyle = idx === 0 ? brandGlow : 'rgba(26, 26, 26, 0.06)';
      ctx.lineWidth = idx === 0 ? 1.5 : 1;
      ctx.stroke();
    });

    // 2. Terminal Concourse Structural Halls (Thick White Corridors) & Dashed Apron Service Roads
    if (state.gates.length > 0) {
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // 2a. Dashed Asphalt Service Roads connecting Remote "Z" Gates to the terminal
      state.connections.forEach(([idA, idB]) => {
        const gA = state.gates.find((g) => g.id === idA);
        const gB = state.gates.find((g) => g.id === idB);
        if (!gA || !gB) return;
        if (!gA.isZGate && !gB.isZGate) return;

        // Dark tarmac roadbed
        ctx.beginPath();
        ctx.moveTo(gA.x, gA.y);
        ctx.lineTo(gB.x, gB.y);
        ctx.strokeStyle = '#33363A';
        ctx.lineWidth = 15;
        ctx.stroke();

        // Dashed utility yellow center stripe
        ctx.beginPath();
        ctx.moveTo(gA.x, gA.y);
        ctx.lineTo(gB.x, gB.y);
        ctx.strokeStyle = '#E3B505';
        ctx.lineWidth = 2.2;
        ctx.setLineDash([7, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 2b. Main Terminal Concourse Corridors (non-Z gates)
      state.connections.forEach(([idA, idB]) => {
        const gA = state.gates.find((g) => g.id === idA);
        const gB = state.gates.find((g) => g.id === idB);
        if (!gA || !gB || gA.isZGate || gB.isZGate) return;
        ctx.beginPath();
        ctx.moveTo(gA.x, gA.y);
        ctx.lineTo(gB.x, gB.y);
        ctx.strokeStyle = '#1A1A1A';
        ctx.lineWidth = 26;
        ctx.stroke();
      });

      state.connections.forEach(([idA, idB]) => {
        const gA = state.gates.find((g) => g.id === idA);
        const gB = state.gates.find((g) => g.id === idB);
        if (!gA || !gB || gA.isZGate || gB.isZGate) return;
        ctx.beginPath();
        ctx.moveTo(gA.x, gA.y);
        ctx.lineTo(gB.x, gB.y);
        ctx.strokeStyle = isConcourseSeverelyWeathered(gA.concourse) ? '#DCE6F7' : '#FFFFFF';
        ctx.lineWidth = 22;
        ctx.stroke();
      });
      ctx.restore();

      // Central Rotunda Shell
      ctx.save();
      ctx.beginPath();
      ctx.arc(rc.x, rc.y, rc.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#1A1A1A';
      ctx.stroke();

      // Inner Player Livery Rotunda Ring
      ctx.beginPath();
      ctx.arc(rc.x, rc.y, rc.radius - 6, 0, Math.PI * 2);
      ctx.lineWidth = 1.6;
      ctx.strokeStyle = brandPrimary;
      ctx.stroke();

      // Rotunda Center Watermark
      ctx.font = '700 10px "Futura", "Oswald", sans-serif';
      ctx.fillStyle = 'rgba(26, 26, 26, 0.25)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('CENTRAL ROTUNDA', rc.x, rc.y);
      ctx.restore();
    }

    // 3. Corridor centerlines. Contiguous same-airline chains render as vibrant
    //    PULSING FLIGHT PATHS so Route Synergy territory reads instantly.
    const now = performance.now();
    const synergyPulse = (Math.sin(now * 0.0035) + 1) * 0.5; // 0..1
    const dashDrift = (now * 0.045) % 22;

    state.connections.forEach(([idA, idB]) => {
      const gA = state.gates.find((g) => g.id === idA);
      const gB = state.gates.find((g) => g.id === idB);
      if (!gA || !gB) return;

      const sameOwner = gA.owner !== null && gA.owner === gB.owner;

      ctx.save();
      if (sameOwner) {
        const ownerColor = state.players[gA.owner].color;
        const ownerContrast = getContrastTextForColor(ownerColor);

        // Soft colour wash beneath the route (glow substitute on cream paper)
        ctx.globalAlpha = 0.18 + synergyPulse * 0.16;
        ctx.strokeStyle = ownerColor;
        ctx.lineWidth = 15 + synergyPulse * 5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(gA.x, gA.y);
        ctx.lineTo(gB.x, gB.y);
        ctx.stroke();

        // Dark casing line when route color is very light so path stays sharp
        if (ownerContrast === '#1A1A1A') {
          ctx.globalAlpha = 0.85;
          ctx.strokeStyle = '#1A1A1A';
          ctx.lineWidth = 6.6;
          ctx.beginPath();
          ctx.moveTo(gA.x, gA.y);
          ctx.lineTo(gB.x, gB.y);
          ctx.stroke();
        }

        // Solid livery spine
        ctx.globalAlpha = 1;
        ctx.strokeStyle = ownerColor;
        ctx.lineWidth = 4.6;
        ctx.beginPath();
        ctx.moveTo(gA.x, gA.y);
        ctx.lineTo(gB.x, gB.y);
        ctx.stroke();

        // Travelling contrast dashes = live traffic along the synergy route
        ctx.globalAlpha = 0.92;
        ctx.strokeStyle = ownerContrast;
        ctx.lineWidth = 2;
        ctx.setLineDash([7, 15]);
        ctx.lineDashOffset = -dashDrift;
        ctx.beginPath();
        ctx.moveTo(gA.x, gA.y);
        ctx.lineTo(gB.x, gB.y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Midpoint synergy bead
        ctx.globalAlpha = 0.65 + synergyPulse * 0.35;
        ctx.fillStyle = ownerColor;
        ctx.strokeStyle = '#1A1A1A';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc((gA.x + gB.x) / 2, (gA.y + gB.y) / 2, 3.6 + synergyPulse * 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.strokeStyle = 'rgba(17, 17, 17, 0.22)';
        ctx.lineWidth = 1.4;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(gA.x, gA.y);
        ctx.lineTo(gB.x, gB.y);
        ctx.stroke();
      }
      ctx.restore();
    });

    // 4. Draw 1950s UPA Animated Passenger Agents & Apron Shuttle Buses
    state.passengerAgents.forEach((ag) => drawUPAPassenger(ctx, ag));
    state.apronBuses.forEach((bus) => drawApronShuttleBus(ctx, bus));

    // 5. Determine Active Action Card Target Mode (supports any active human captain)
    let activeCardTargetMode = null;
    const activeHuman = getActiveHumanPlayer();
    if (
      state.status === 'PLAYING' &&
      activeHuman &&
      state.turnState.selectedCardIndex !== null
    ) {
      const card = activeHuman.hand[state.turnState.selectedCardIndex];
      if (card) activeCardTargetMode = card.targetMode;
    }

    const timePulse = (Math.sin(performance.now() * 0.006) + 1) * 0.5;
    const activeIdx = state.currentPlayerIndex;

    // 6. Sort Gates by Y coordinate so 3D Pins overlap with natural depth
    const depthSortedGates = [...state.gates].sort((a, b) => a.y - b.y);

    depthSortedGates.forEach((gate) => {
      const isHovered = state.hoveredGateId === gate.id;
      let isCardTargetable = false;
      if (activeCardTargetMode === 'opponent_gate') {
        isCardTargetable = gate.owner !== null && gate.owner !== activeIdx && !isGateShielded(gate);
      } else if (activeCardTargetMode === 'opponent_player') {
        isCardTargetable = gate.owner !== null && gate.owner !== activeIdx;
      } else if (activeCardTargetMode === 'own_gate') {
        isCardTargetable = gate.owner === activeIdx;
      } else if (activeCardTargetMode === 'empty_gate') {
        isCardTargetable = gate.owner === null;
      } else if (activeCardTargetMode === 'any_gate') {
        isCardTargetable =
          !isGateClosed(gate) && !(gate.owner !== null && gate.owner !== activeIdx && isGateShielded(gate));
      } else if (activeCardTargetMode === 'concourse_branch') {
        isCardTargetable = true;
      }

      draw3DGatePin(ctx, gate, isHovered, isCardTargetable, timePulse);
    });

    // 6b. Draw Liveried Twin-Engine Departure Aircraft (pushback, taxi, takeoff)
    state.departureFlights.forEach((fl) => drawLiveriedAirliner(ctx, fl));

    // 7. Draw Floating Text Popups (+PAX, Captures, Upgrades)
    for (let i = state.floatingTexts.length - 1; i >= 0; i--) {
      const ft = state.floatingTexts[i];
      ft.y += ft.vy;
      ft.alpha -= 0.016;
      if (ft.alpha <= 0) {
        state.floatingTexts.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = ft.alpha;
      ctx.font = '700 12px "Futura", "Oswald", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(ft.text, ft.x + 1, ft.y + 1);
      ctx.fillStyle = ft.color;
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }

    ctx.restore();
    requestAnimationFrame(renderBoardCanvas);
  }

  // ============================================================================
  // 18. BOOTSTRAP APPLICATION
  // ============================================================================

  // ============================================================================
  // 18b. TITLE SEQUENCE, AUDIO CONSOLE & HOW-TO-PLAY
  // ============================================================================

  function syncAudioButtons() {
    const musicOn = AUDIO ? AUDIO.musicEnabled : false;
    const sfxOn = AUDIO ? AUDIO.sfxEnabled : false;

    if (dom.musicToggleBtn) {
      dom.musicToggleBtn.textContent = musicOn ? t('hud.musicOn') : t('hud.musicOff');
      dom.musicToggleBtn.classList.toggle('muted', !musicOn);
    }
    if (dom.sfxToggleBtn) {
      dom.sfxToggleBtn.textContent = sfxOn ? t('hud.sfxOn') : t('hud.sfxOff');
      dom.sfxToggleBtn.classList.toggle('muted', !sfxOn);
    }
    if (dom.setMusicToggle) {
      dom.setMusicToggle.classList.toggle('is-on', musicOn);
      dom.setMusicToggle.setAttribute('aria-checked', String(musicOn));
      dom.setMusicToggle.querySelector('.toggle-text').textContent = musicOn ? 'ON' : 'OFF';
    }
    if (dom.setSfxToggle) {
      dom.setSfxToggle.classList.toggle('is-on', sfxOn);
      dom.setSfxToggle.setAttribute('aria-checked', String(sfxOn));
      dom.setSfxToggle.querySelector('.toggle-text').textContent = sfxOn ? 'ON' : 'OFF';
    }
  }

  function setMusicEnabled(on) {
    if (AUDIO) AUDIO.setMusicEnabled(on);
    syncAudioButtons();
  }

  function setSfxEnabled(on) {
    if (AUDIO) AUDIO.setSfxEnabled(on);
    syncAudioButtons();
  }

  function applyLocalization() {
    document.documentElement.setAttribute('lang', currentLang);

    // Sync language switcher active buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isMatch = btn.dataset.lang === currentLang;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-pressed', String(isMatch));
    });

    // Translate textContent elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });

    // Translate innerHTML elements
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (key) el.innerHTML = t(key);
    });

    // Translate input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) el.setAttribute('placeholder', t(key));
    });

    // Sync difficulty badge & description
    if (dom.botDifficultyInput && dom.difficultyBadge && dom.difficultyDesc) {
      const lvl = parseInt(dom.botDifficultyInput.value, 10) || 2;
      if (lvl === 1) {
        dom.difficultyBadge.textContent = t('setup.diffEasy');
        dom.difficultyDesc.innerHTML = t('setup.diffDescEasy');
      } else if (lvl === 2) {
        dom.difficultyBadge.textContent = t('setup.diffNormal');
        dom.difficultyDesc.innerHTML = t('setup.diffDescNormal');
      } else {
        dom.difficultyBadge.textContent = t('setup.diffHard');
        dom.difficultyDesc.innerHTML = t('setup.diffDescHard');
      }
    }

    // Sync mobile dock toggle label
    const bottomDeckEl = document.getElementById('bottom-deck');
    const dockLabelEl = document.getElementById('mobile-dock-toggle-label');
    if (bottomDeckEl && dockLabelEl) {
      const collapsed = bottomDeckEl.classList.contains('dock-collapsed');
      dockLabelEl.textContent = collapsed ? t('deck.mobileShowTray') : t('deck.mobileHideTray');
    }

    // Refresh News Ticker in selected language
    state.headlines = [...getLocalizedHeadlines()];
    renderNewsTicker();

    // Refresh active setup form, audio buttons, and HUD/modals
    syncSetupFormUI();
    syncAudioButtons();
    if (state.players && state.players.length > 0) {
      updateAllUI();
      if (state.status === 'PASS_INTERSTITIAL') {
        const p = state.players[state.currentPlayerIndex];
        if (p) {
          const padRound = String(state.round).padStart(2, '0');
          if (dom.interstitialRoundTag) {
            dom.interstitialRoundTag.textContent = `${t('hud.roundLabel')} ${padRound} / ${state.config.maxRounds}`;
          }
          if (dom.interstitialBoardingTitle) {
            dom.interstitialBoardingTitle.textContent = t('interstitial.boardingTitle', { name: p.name });
          }
          if (dom.interstitialReadyBtnText) {
            dom.interstitialReadyBtnText.textContent = t('interstitial.readyBtn', { name: p.name });
          }
        }
      } else if (state.status === 'WORLD_MODAL' && state.activeBroadcastWorldCard) {
        const anchorLoc = getAnchorLocale(state.activeBroadcastAnchorId || 'classic_50s');
        const wcLoc = getWorldEventLocale(state.activeBroadcastWorldCard.id);
        if (dom.anchorPlate && anchorLoc.nameplate) dom.anchorPlate.textContent = anchorLoc.nameplate;
        if (dom.anchorQuirkBanner && anchorLoc.quirkLines) {
          dom.anchorQuirkBanner.textContent =
            anchorLoc.quirkLines[state.round % anchorLoc.quirkLines.length];
        }
        if (dom.worldModalCategory && wcLoc.category) dom.worldModalCategory.textContent = wcLoc.category;
        if (dom.worldModalTitle && wcLoc.title) dom.worldModalTitle.textContent = wcLoc.title;
        if (dom.worldModalDesc && wcLoc.desc) dom.worldModalDesc.textContent = wcLoc.desc;
        if (dom.worldModalImpact && wcLoc.impactText) dom.worldModalImpact.textContent = wcLoc.impactText;
      } else if (state.status === 'GAME_OVER' && state.lastGameOverWinner) {
        triggerGameOver(state.lastGameOverWinner, state.lastGameOverReason || 'FINAL_ROUND');
      }
    }
  }

  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    currentLang = lang;
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (_e) {
      // Ignore storage errors in private browsing
    }
    applyLocalization();
    sfx.playUiClick();
  }

  function initI18nAndMobileControls() {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang) setLanguage(lang);
      });
    });

    // Mobile Collapsible Card Dock Toggle
    const bottomDeckEl = document.getElementById('bottom-deck');
    const dockToggleBtn = document.getElementById('mobile-dock-toggle-btn');
    const dockLabelEl = document.getElementById('mobile-dock-toggle-label');
    if (bottomDeckEl && dockToggleBtn) {
      dockToggleBtn.addEventListener('click', () => {
        const collapsed = bottomDeckEl.classList.toggle('dock-collapsed');
        dockToggleBtn.setAttribute('aria-expanded', String(!collapsed));
        if (dockLabelEl) {
          dockLabelEl.textContent = collapsed ? t('deck.mobileShowTray') : t('deck.mobileHideTray');
        }
        sfx.playUiClick();
      });
    }

    // Mobile Quick Pass / End Turn Button
    const mobileEndBtn = document.getElementById('mobile-end-turn-quick-btn');
    if (mobileEndBtn) {
      mobileEndBtn.addEventListener('click', () => {
        handleHumanEndTurn();
      });
    }

    applyLocalization();
  }

  function initTitleSequence() {
    // Split-flap hover ticks across every menu / HUD control
    document
      .querySelectorAll('.btn-title, .hud-icon-btn, .seg-btn, .btn-primary, .btn-secondary, .cam-btn, .lang-btn')
      .forEach((el) => {
        el.addEventListener('mouseenter', () => sfx.playUiClick());
      });

    if (dom.titleStartBtn) {
      dom.titleStartBtn.addEventListener('click', () => {
        // First real user gesture: unlock audio and roll the lounge trio
        sfx.unlock();
        if (AUDIO && AUDIO.musicEnabled) AUDIO.startMusic();
        sfx.playRadarSweep();
        sfx.playCascade(10);

        dom.flapCurtain.classList.add('closing');
        window.setTimeout(() => {
          dom.titleSequence.classList.remove('active');
          dom.flapCurtain.classList.remove('closing');
          dom.mainMenu.classList.add('active');
          sfx.playPAChime();
        }, 640);
      });
    }

    if (dom.titleSettingsBtn) {
      dom.titleSettingsBtn.addEventListener('click', () => {
        sfx.unlock();
        dom.settingsModal.classList.add('active');
      });
    }
    if (dom.titleHowtoBtn) {
      dom.titleHowtoBtn.addEventListener('click', () => {
        sfx.unlock();
        dom.howtoModal.classList.add('active');
      });
    }

    const closeSettings = () => {
      dom.settingsModal.classList.remove('active');
      sfx.playUiClick();
    };
    if (dom.closeSettingsBtn) dom.closeSettingsBtn.addEventListener('click', closeSettings);
    if (dom.closeSettingsBottomBtn) dom.closeSettingsBottomBtn.addEventListener('click', closeSettings);

    const closeHowto = () => {
      dom.howtoModal.classList.remove('active');
      sfx.playUiClick();
    };
    if (dom.closeHowtoBtn) dom.closeHowtoBtn.addEventListener('click', closeHowto);
    if (dom.closeHowtoBottomBtn) dom.closeHowtoBottomBtn.addEventListener('click', closeHowto);

    if (dom.setMusicToggle) {
      dom.setMusicToggle.addEventListener('click', () => {
        sfx.unlock();
        setMusicEnabled(!(AUDIO && AUDIO.musicEnabled));
        sfx.playUiClick();
      });
    }
    if (dom.setSfxToggle) {
      dom.setSfxToggle.addEventListener('click', () => {
        sfx.unlock();
        setSfxEnabled(!(AUDIO && AUDIO.sfxEnabled));
        sfx.playUiClick();
      });
    }
    if (dom.musicVolume) {
      dom.musicVolume.addEventListener('input', (e) => {
        if (AUDIO) AUDIO.setMusicVolume(parseInt(e.target.value, 10) / 100);
      });
    }
    if (dom.sfxVolume) {
      dom.sfxVolume.addEventListener('input', (e) => {
        if (AUDIO) AUDIO.setSfxVolume(parseInt(e.target.value, 10) / 100);
      });
      dom.sfxVolume.addEventListener('change', () => sfx.playUiClick());
    }

    // Manual button inside the HUD also reaches the safety card
    if (dom.openManualFromMenu) {
      dom.openManualFromMenu.addEventListener('click', () => sfx.playUiClick());
    }

    syncAudioButtons();
  }

  // Restore any saved custom tower / relay into the diagnostics fields
  if (dom.onlineCustomSignal && NET.customServer) {
    const cs = NET.customServer;
    dom.onlineCustomSignal.value = `${cs.host}:${cs.port}${cs.path}`;
  }
  if (dom.onlineTurnApi && NET.turnApiUrl) {
    dom.onlineTurnApi.value = NET.turnApiUrl;
  }
  if (dom.onlineCustomTurn && NET.customTurn.length > 0) {
    dom.onlineCustomTurn.value = NET.customTurn
      .map((e) => [e.urls, e.username, e.credential].filter(Boolean).join('|'))
      .join(', ');
  }

  // ONE-CLICK INVITE: ?room=TWA-404 drops the player straight into the join
  // panel with the code filled in, so a shared link is all a friend needs.
  (function applyRoomDeepLink() {
    const params = new URLSearchParams(window.location.search);
    const room = params.get('room');
    if (!room) return;
    const code = normalizeRoomCode(room);
    if (!code) return;
    state.config.mode = 'online';
    state.config.onlineRole = 'join';
    if (dom.onlineJoinCode) dom.onlineJoinCode.value = code;
    window.setTimeout(() => {
      syncSetupFormUI();
      renderOnlineLobbyUI();
    }, 0);
  })();

  // Every session starts on its own room code — a shared default would make
  // two hosts collide on the signalling server the moment both opened a lobby.
  state.config.roomCode = generateMemorableRoomCode();

  initSetupMenu();
  initTitleSequence();
  initCameraInteractions();
  initI18nAndMobileControls();

  // Keep the backing store matched to the element box: rotating a phone or
  // opening the keyboard changes it, and a stale size shows as a blurry,
  // stretched blueprint.
  resizeBoardCanvas();

  let resizeRaf = null;
  const scheduleBoardResize = () => {
    if (resizeRaf) window.cancelAnimationFrame(resizeRaf);
    resizeRaf = window.requestAnimationFrame(() => {
      resizeRaf = null;
      const prevZoom = state.camera.zoom;
      resizeBoardCanvas();
      state.camera.zoom = Math.max(prevZoom, coverZoom());
      clampCameraToWorld();
      updateZoomButtonLabel();
    });
  };

  window.addEventListener('resize', scheduleBoardResize);
  window.addEventListener('orientationchange', () => window.setTimeout(scheduleBoardResize, 250));
  if (typeof ResizeObserver === 'function' && dom.canvasWrapper) {
    new ResizeObserver(scheduleBoardResize).observe(dom.canvasWrapper);
  }

  generateProceduralTerminal();
  requestAnimationFrame(renderBoardCanvas);
})();
