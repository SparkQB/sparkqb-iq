// ============================================================
// SPARKQB IQ — CURRICULUM.JS
// All coverage knowledge, questions, and decision trees live here.
// Edit this file to update content without touching the app engine.
// ============================================================

// ============================================================
// VIMEO VIDEO IDs
// Swap null for your Vimeo ID string when ready.
// Unlisted videos: "123456789?h=yourhash"
// ============================================================
var VIMEO = {
  "Cover 2":          null,
  "Cover 3":          null,
  "Cover 1":          null,
  "Cover 0":          null,
  "Tampa 2":          null,
  "Cover 4":          null,
  "Cover 3 Sky":      null,
  "Cover 3 Buzz":     null,
  "Cover 3 Cloud":    null,
  "Cover 6":          null,
  "2-Man":            null,
  "Quarters Match":   null,
  "Palms":            null,
  "Cover 7":          null,
  "Fire Zone":        null,
  "Nickel Blitz":     null,
  "Double A-Gap":     null,
  "Even Front":       null,
  "Odd Front":        null
};

// ============================================================
// COVERAGE TIERS
// Controls unlock progression
// ============================================================
var COVERAGE_TIERS = {
  beginner:     ["Cover 2", "Cover 3", "Cover 1", "Cover 0"],
  intermediate: ["Tampa 2", "Cover 4", "Cover 3 Sky", "Cover 3 Buzz"],
  advanced:     ["Cover 6", "2-Man", "Cover 3 Cloud", "Quarters Match", "Palms"],
  elite:        ["Cover 7", "Fire Zone", "Nickel Blitz", "Double A-Gap"]
};

var FRONT_TIERS = {
  beginner:     ["Even Front", "Odd Front"],
  intermediate: ["Bear Front", "Tite/Mint"],
};

// ============================================================
// LEVEL DEFINITIONS
// ============================================================
var LEVELS = [
  {
    id: "L1",
    num: 1,
    title: "IDENTIFY IT",
    subtitle: "Recognition before everything.",
    desc: "Learn what every coverage and front looks like. Pre-snap tells, safety shells, corner alignment. Pure recognition — no play calls yet.",
    tier: "free",
    color: "#004FFF"
  },
  {
    id: "L2",
    num: 2,
    title: "UNDERSTAND IT",
    subtitle: "Know why before you know what.",
    desc: "Go deeper. Why does the defense call this? Who is the conflict defender? What is the built-in weakness? Situational usage.",
    tier: "pro",
    color: "#B2FF00"
  },
  {
    id: "L3",
    num: 3,
    title: "BEAT IT",
    subtitle: "Recognition plus understanding equals the right call.",
    desc: "Now you make the call. Full situation — down, distance, field position, score, formation. Apply everything from Levels 1 and 2.",
    tier: "pro",
    color: "#FF0400"
  }
];

// ============================================================
// QUESTION BANK
// Structure per question:
// {
//   level: "L1" | "L2" | "L3",
//   coverage: string (must match VIMEO key),
//   tier: "beginner" | "intermediate" | "advanced" | "elite",
//   sit: { down, field, score, form },   // L3 only
//   badge: string,                        // question type label
//   q: string,                            // question text
//   hint: string,
//   opts: [string x4],
//   ans: 0-3,                             // correct option index
//   exp: string                           // coaching explanation
// }
// ============================================================
var QUESTIONS = [

  // ============================================================
  // COVER 2 — LEVEL 1 — IDENTIFY IT
  // ============================================================
  {
    level: "L1", coverage: "Cover 2", tier: "beginner",
    badge: "SAFETY SHELL",
    q: "WHAT DOES THE SAFETY SHELL TELL YOU ABOUT THIS COVERAGE?",
    hint: "Start with the safeties. Count them, find their depth.",
    opts: [
      "Two safeties split at equal depth — middle of field is divided",
      "One safety high and centered — middle of field is protected",
      "Both safeties in the box — no deep help at all",
      "One safety rotated down — coverage is disguised"
    ],
    ans: 0,
    exp: "Two safeties split at equal depth splitting the hashes is the Cover 2 shell. Each safety owns a deep half. The middle of the field is open between them — that void between the safeties is where Cover 2 gets attacked."
  },
  {
    level: "L1", coverage: "Cover 2", tier: "beginner",
    badge: "CORNER ALIGNMENT",
    q: "WHAT IS THE COVER 2 CORNER TELLING YOU WITH HIS ALIGNMENT?",
    hint: "Look at his depth, his leverage, and what direction he is facing.",
    opts: [
      "Off at 5-7 yards with outside leverage — he owns the flat",
      "Bailing deep before the snap — he owns a deep third",
      "Pressed at the line — he is playing man coverage",
      "Aligned inside — he is protecting the seam"
    ],
    ans: 0,
    exp: "The Cover 2 corner aligns off at 5-7 yards with outside leverage. He is NOT going deep with receivers. He owns the flat zone and will drive downhill to it at the snap. Outside leverage plus shallow depth equals Cover 2 corner."
  },
  {
    level: "L1", coverage: "Cover 2", tier: "beginner",
    badge: "OPEN OR CLOSED",
    q: "IN COVER 2, IS THE MIDDLE OF THE FIELD OPEN OR CLOSED?",
    hint: "Think about where the two safeties are aligned and what space they leave.",
    opts: [
      "Open — there is a void between the two safeties in the middle",
      "Closed — the single safety protects the entire middle",
      "Closed — both safeties converge on the middle at the snap",
      "Open — both safeties rotate away from the middle"
    ],
    ans: 0,
    exp: "Cover 2 leaves the middle of the field open. The two safeties split to their deep halves, creating a void between them at roughly 12-15 yards in the seam area. This is why four verticals and seam routes attack Cover 2 — they target the open middle."
  },

  // ============================================================
  // COVER 2 — LEVEL 2 — UNDERSTAND IT
  // ============================================================
  {
    level: "L2", coverage: "Cover 2", tier: "beginner",
    badge: "CONFLICT DEFENDER",
    q: "WHO IS THE CONFLICT DEFENDER IN COVER 2 AND WHY?",
    hint: "Which defender gets put in a two-choice situation by a well-designed route combination?",
    opts: [
      "The corner — he must choose between the flat and a deeper route behind him",
      "The free safety — he must choose between two vertical threats",
      "The Mike linebacker — he must choose between run and pass",
      "The nickel — he must choose between the slot and the flat"
    ],
    ans: 0,
    exp: "The Cover 2 corner is the conflict defender. His job is to own the flat. Any route combination that sends one receiver deep and one receiver into the flat forces him to choose — squeeze the flat and give up the deeper route, or chase depth and abandon the flat. He cannot cover both."
  },
  {
    level: "L2", coverage: "Cover 2", tier: "beginner",
    badge: "DEFENSIVE INTENT",
    q: "WHY WOULD A DEFENSE CALL COVER 2 ON FIRST AND TEN?",
    hint: "Think about what Cover 2 protects against and what it is willing to give up.",
    opts: [
      "To keep eyes on the QB, protect deep sidelines, and force underneath throws",
      "To bring maximum pressure with zero safety help",
      "To match every receiver man-to-man with no deep help",
      "To protect the middle and funnel everything outside"
    ],
    ans: 0,
    exp: "Cover 2 on early downs is about keeping the defense organized. Two safeties keep eyes on the QB. Deep sidelines are protected. The defense accepts underneath completions because they have inside linebackers to limit yards after catch. It is a bend-do-not-break call."
  },
  {
    level: "L2", coverage: "Cover 2", tier: "beginner",
    badge: "BUILT-IN WEAKNESS",
    q: "WHAT IS THE STRUCTURAL WEAKNESS BUILT INTO COVER 2?",
    hint: "Think about the space between the safety and the corner on each side.",
    opts: [
      "The hole shot — the area between the corner's flat zone and the safety's deep half",
      "The flat — corners are too deep to cover quick throws",
      "The A-gap — linebackers are in coverage instead of filling gaps",
      "The deep middle — safeties are too wide to protect the post"
    ],
    ans: 0,
    exp: "The hole shot is the structural weakness of Cover 2. Between where the corner squats in the flat and where the safety sits in his deep half, there is a window — typically 12-18 yards on the sideline. A corner route, a fade route, or a deep out can split this window before either defender can close it."
  },
  {
    level: "L2", coverage: "Cover 2", tier: "beginner",
    badge: "COMMON MISTAKE",
    q: "WHAT IS THE MOST COMMON QB MISTAKE AGAINST COVER 2?",
    hint: "Think about what happens when a QB sees two-high safeties and assumes he knows exactly what is coming.",
    opts: [
      "Throwing the seam assuming Cover 2 rules when the Mike dropped — it is Tampa 2",
      "Throwing the flat too quickly before the corner can close",
      "Throwing four verticals when the defense is in quarters",
      "Missing the hole shot by throwing too shallow"
    ],
    ans: 0,
    exp: "The most common Cover 2 mistake is throwing the seam into Tampa 2. Both coverages look identical pre-snap. In Tampa 2, the Mike linebacker drops deep and owns the seam. A QB who does not confirm the Mike post-snap will throw directly into the linebacker's hands. Always check the Mike before throwing the seam."
  },

  // ============================================================
  // COVER 2 — LEVEL 3 — BEAT IT
  // ============================================================
  {
    level: "L3", coverage: "Cover 2", tier: "beginner",
    sit: { down: "2ND & 8", field: "OPP 40", score: "TIE 7-7", form: "2x2" },
    badge: "CONCEPT SELECTION",
    q: "COVER 2 — 2ND AND 8 — WHAT IS THE RIGHT CONCEPT?",
    hint: "The corner owns the flat. He cannot chase the fade and cover the flat at the same time.",
    opts: [
      "Fade-flat — drive the corner deep, dump to the vacated flat",
      "Four verticals — split the two safeties with seam routes",
      "Quick hitch — sit in front of the corner before he can close",
      "Inside zone — the box is light with two safeties high"
    ],
    ans: 0,
    exp: "Fade-flat is the conflict concept against Cover 2. The fade drives the corner deep — he cannot let a receiver get behind him. The moment he commits to the fade, the flat opens behind him. Your slot or back hits the vacated flat for easy yards. This works every time the corner chooses depth over flat responsibility."
  },
  {
    level: "L3", coverage: "Cover 2", tier: "beginner",
    sit: { down: "3RD & 6", field: "OPP 28", score: "TIE 14-14", form: "TRIPS RT" },
    badge: "FORMATION LEVERAGE",
    q: "TRIPS VS COVER 2 — 3RD AND 6 — WHERE IS THE BALL?",
    hint: "Three receivers flood one side. The field corner has flat responsibility. He can only be in one place.",
    opts: [
      "Levels concept — flat, comeback, fade floods the corner on three levels",
      "All go routes — stress both safeties simultaneously",
      "Quick outs — take what the defense gives underneath",
      "Backside post — the safety has to choose between the trips and the post"
    ],
    ans: 0,
    exp: "Trips runs a three-level flood on the field corner. The number three receiver runs a flat, the number two receiver runs a 12-yard comeback, and the outside receiver runs a fade. The corner has flat responsibility but cannot cover all three levels. He picks one. The comeback sits in the window he vacates."
  },
  {
    level: "L3", coverage: "Cover 2", tier: "beginner",
    sit: { down: "1ST & 10", field: "OWN 20", score: "DOWN 7-14", form: "2x2" },
    badge: "SITUATION IQ",
    q: "OWN 20 — COVER 2 — DOWN A TOUCHDOWN — WHAT IS THE PRIORITY?",
    hint: "You are backed up in your own end zone. A turnover here is catastrophic. What does the situation demand?",
    opts: [
      "Quick hitches — take the free yards, move chains, protect the ball",
      "Four verticals — get the score back on one play",
      "Draw play — catch them dropping into coverage",
      "Deep corner route — attack the hole shot immediately"
    ],
    ans: 0,
    exp: "Ball security from your own 20 beats everything. Cover 2 gives you hitches all day — corners are off at 7 yards and linebackers are playing run. Take the free 5-6 yards, move the chains, get into better field position. Four verticals is correct football but the wrong situational call when a turnover in your own end zone ends the game."
  },
  {
    level: "L3", coverage: "Cover 2", tier: "beginner",
    sit: { down: "2ND & 3", field: "OPP 15", score: "UP 21-17", form: "2x2" },
    badge: "RED ZONE",
    q: "RED ZONE COVER 2 — 2ND AND 3 — CALL THE PLAY",
    hint: "The back pylon is only 15 yards away. The corner still owns the flat. He cannot be in two places.",
    opts: [
      "Pylon fade — corner must choose flat or deep end zone",
      "Four verticals — compress both safeties in the red zone",
      "Quick run — take the guaranteed 3 yards",
      "Seam route — split the safeties before they compress"
    ],
    ans: 0,
    exp: "The pylon fade beats red zone Cover 2. The corner owns the flat and cannot abandon it to chase a back-pylon route. The ball goes to the back corner of the end zone before he can recover. Throw it on time, to the spot, before your receiver arrives. This is the highest percentage red zone throw against Cover 2."
  },
  {
    level: "L3", coverage: "Cover 2", tier: "beginner",
    sit: { down: "2ND & 4", field: "OWN 44", score: "UP 28-21", form: "2x2" },
    badge: "CLOCK MANAGEMENT",
    q: "UP 7 LATE — COVER 2 PLAYING SOFT — WHAT DO YOU KNOW?",
    hint: "The defense is giving up the short game on purpose. Why would they do that when trailing?",
    opts: [
      "They want you to score fast — take check downs, burn clock, stay in bounds",
      "They are disguising into Cover 0 — attack before they can blitz",
      "They are inviting the run — use play action and go deep",
      "They cannot cover verticals — four verticals wins the game now"
    ],
    ans: 0,
    exp: "A defense playing soft Cover 2 while trailing is trying to get the ball back fast. They would rather give up a short drive than watch you run out the clock. Do NOT score quickly. Take the check down, gain 4 yards, stay in bounds, and burn the clock. Scoring fast hands them the game back."
  },

  // ============================================================
  // COVER 3 — LEVEL 1 — IDENTIFY IT
  // ============================================================
  {
    level: "L1", coverage: "Cover 3", tier: "beginner",
    badge: "SAFETY SHELL",
    q: "WHAT SAFETY SHELL TELLS YOU THIS IS COVER 3?",
    hint: "Compare the number of deep safeties and where they are positioned.",
    opts: [
      "One safety centered and deep at 12-14 yards — middle of field is closed",
      "Two safeties split evenly — middle of field is divided",
      "Both safeties in the box — all-out pressure coming",
      "One safety rotated to the boundary — field is protected"
    ],
    ans: 0,
    exp: "Single high safety centered at 12-14 yards is the Cover 3 shell. That one safety owns the deep middle. The middle of the field is closed — posts and seams into the middle have safety help. Two-high means Cover 2 or Cover 4. One high means Cover 1 or Cover 3 — confirm with corner alignment."
  },
  {
    level: "L1", coverage: "Cover 3", tier: "beginner",
    badge: "CORNER ALIGNMENT",
    q: "HOW DO COVER 3 CORNERS ALIGN DIFFERENTLY FROM COVER 2 CORNERS?",
    hint: "Think about where each corner is going at the snap.",
    opts: [
      "Cover 3 corners bail deep to their third — Cover 2 corners drive to the flat",
      "Cover 3 corners press at the line — Cover 2 corners bail deep",
      "Cover 3 corners align inside — Cover 2 corners align outside",
      "Cover 3 corners play man — Cover 2 corners play zone"
    ],
    ans: 0,
    exp: "Cover 3 corners bail. Before the snap they are backpedaling toward their deep third. They are NOT driving to the flat like Cover 2 corners. That backward movement and inside alignment before the snap confirms zone deep third responsibility — not flat responsibility."
  },
  {
    level: "L1", coverage: "Cover 3", tier: "beginner",
    badge: "OPEN OR CLOSED",
    q: "IN COVER 3, IS THE MIDDLE OF THE FIELD OPEN OR CLOSED?",
    hint: "One safety is sitting centerfield. What does that do to the middle of the field?",
    opts: [
      "Closed — the single high safety protects the deep middle",
      "Open — the single safety cannot cover both halves alone",
      "Open — the safety is too deep to affect intermediate throws",
      "Closed — linebackers fill the intermediate middle zone"
    ],
    ans: 0,
    exp: "Cover 3 closes the middle of the field. The single high safety sits centerfield and protects deep middle routes — posts, seams, and crossing routes into the middle have safety help. This is why the seam void between the corner's deep third and the safety's middle is the window to attack."
  },

  // ============================================================
  // COVER 3 — LEVEL 2 — UNDERSTAND IT
  // ============================================================
  {
    level: "L2", coverage: "Cover 3", tier: "beginner",
    badge: "CONFLICT DEFENDER",
    q: "WHO IS THE CONFLICT DEFENDER IN COVER 3 AND WHAT CREATES THE CONFLICT?",
    hint: "Think about the defender responsible for both the curl zone and the flat.",
    opts: [
      "The hook-curl linebacker — he cannot cover the curl and the flat simultaneously",
      "The free safety — he cannot cover posts and seams at the same time",
      "The corner — he cannot cover his deep third and the flat at the same time",
      "The nickel — he cannot cover the slot vertical and the underneath flat"
    ],
    ans: 0,
    exp: "The hook-curl linebacker is the conflict defender in Cover 3. He owns the curl zone at 10-14 yards but also has flat responsibility if threatened. When a curl route holds him inside and a flat route pulls him outside, he cannot cover both. This is the foundation of the curl-flat concept — make him wrong no matter what he does."
  },
  {
    level: "L2", coverage: "Cover 3", tier: "beginner",
    badge: "SITUATIONAL USAGE",
    q: "WHY WOULD A DEFENSE CALL COVER 3 ON 3RD AND MEDIUM?",
    hint: "Think about what Cover 3 protects against and what it asks the defense to give up.",
    opts: [
      "To keep a single safety over the top preventing big plays while defending intermediate routes",
      "To bring maximum pressure with the extra defender freed by zone coverage",
      "To match every receiver man-to-man with safety help over the top",
      "To protect the flat zones and stop quick screens"
    ],
    ans: 0,
    exp: "Cover 3 on 3rd and medium keeps one defender in the deep middle while four defenders handle underneath zones. It prevents the explosive play and forces the offense to work the intermediate area where the defense has multiple defenders. The defense accepts that some intermediate routes will be available but bets they will not be 12-plus yards."
  },
  {
    level: "L2", coverage: "Cover 3", tier: "beginner",
    badge: "TRIPS ADJUSTMENT",
    q: "TRIPS FORMATION VS COVER 3 — WHAT MUST THE DEFENSE DO AND WHAT DOES THAT OPEN?",
    hint: "Three receivers flood one side. The free safety has to make a decision about where to help.",
    opts: [
      "Safety rotates toward trips — backside isolation opens with no safety help",
      "Corner abandons his deep third — trips side goes uncovered deep",
      "Mike linebacker blitzes — trips side has no underneath defender",
      "Nickel runs to trips — backside flat opens completely"
    ],
    ans: 0,
    exp: "When trips overloads one side, the free safety rotates toward that side to help. His rotation to the field leaves the backside corner in a true one-on-one with no safety help over the top. The backside post is now attacking exactly the space the safety just vacated. Trips forces the safety to choose a side. Attack the other one."
  },
  {
    level: "L2", coverage: "Cover 3", tier: "beginner",
    badge: "COMMON MISTAKE",
    q: "WHAT IS THE MOST COMMON QB MISTAKE AGAINST COVER 3?",
    hint: "Think about what happens when a QB reads the coverage rather than reading the specific defender.",
    opts: [
      "Throwing the curl before the hook defender has widened — throwing directly to the LB",
      "Throwing four verticals when the safety is centered and waiting",
      "Throwing the flat before the corner can bail to his deep third",
      "Missing the backside isolation by locking onto the trips side"
    ],
    ans: 0,
    exp: "The most common Cover 3 mistake is throwing the curl before the hook-curl defender has widened to the flat. QBs who read the coverage instead of reading the defender throw the curl when the LB is still sitting on it. The curl is only open AFTER the LB widens. Read the defender, not the coverage."
  },

  // ============================================================
  // COVER 3 — LEVEL 3 — BEAT IT
  // ============================================================
  {
    level: "L3", coverage: "Cover 3", tier: "beginner",
    sit: { down: "3RD & 9", field: "OWN 38", score: "DOWN 10-17", form: "EMPTY" },
    badge: "CONCEPT SELECTION",
    q: "EMPTY — COVER 3 — 3RD AND 9 — MUST CONVERT — WHAT IS THE CALL?",
    hint: "Five receivers, three deep zones, one safety covering the middle. Put all three zones under stress at once.",
    opts: [
      "Four verticals — all three deep zones stressed simultaneously",
      "All curl routes — sit in the soft zones at 12 yards",
      "Hitch and go — beat the bailing corners",
      "Mesh concept — stress the underneath defenders"
    ],
    ans: 0,
    exp: "Four verticals from empty on 3rd and 9 puts Cover 3 in an impossible equation. All three deep zones are threatened at once. The single safety cannot help everywhere. Read him after the snap — wherever he goes, throw the other side. One receiver will always be open for 9-plus yards against three defenders covering four threats."
  },
  {
    level: "L3", coverage: "Cover 3", tier: "beginner",
    sit: { down: "2ND & 7", field: "OPP 45", score: "TIE 7-7", form: "TRIPS RT" },
    badge: "FORMATION LEVERAGE",
    q: "TRIPS VS COVER 3 — 2ND AND 7 — WHERE IS THE BALL?",
    hint: "Trips pulls the safety toward the field. What just opened on the backside?",
    opts: [
      "Backside post — corner is in a true 1-on-1 with no safety help",
      "Trips flood — three receivers overload the field corner",
      "Seam route — attack the middle the safety just left",
      "Flat to the trips side — stress the hook defender"
    ],
    ans: 0,
    exp: "The backside post is the answer. Trips pulled the safety to the field side. Your single boundary receiver is now in a true one-on-one against the backside corner with zero safety help over the top. The post attacks exactly where the safety vacated. Beat your man and it is a big play every time."
  },
  {
    level: "L3", coverage: "Cover 3", tier: "beginner",
    sit: { down: "2ND & 4", field: "OWN 44", score: "UP 28-21", form: "2x2" },
    badge: "SITUATION IQ",
    q: "UP 7 — COVER 3 PLAYING SOFT — WHAT IS THE RIGHT CALL?",
    hint: "They are keeping everything in front. A soft defense when trailing is giving you something. What is it?",
    opts: [
      "Check down to the back — take yards, stay in bounds, burn the clock",
      "Four verticals — the defense is soft and cannot stop the deep ball",
      "Curl routes — attack the soft zones for big gains",
      "Quick screen — get as many yards as possible fast"
    ],
    ans: 0,
    exp: "When a defense plays soft Cover 3 while trailing, they want you to score quickly. They would rather give up a long methodical drive than watch you run out the clock. Take the check down. Get 4 yards. Stay in bounds. Force them to use timeouts. Scoring fast hands them the game back."
  },

  // ============================================================
  // COVER 1 — LEVEL 1 — IDENTIFY IT
  // ============================================================
  {
    level: "L1", coverage: "Cover 1", tier: "beginner",
    badge: "SAFETY SHELL",
    q: "WHAT SAFETY SHELL TELLS YOU THIS IS COVER 1 — NOT COVER 3?",
    hint: "Both Cover 1 and Cover 3 have one high safety. What else do you look at?",
    opts: [
      "One safety high with corners pressing and defenders matched on receivers",
      "One safety high with corners bailing deep to their thirds",
      "Two safeties split with corners at 7 yards",
      "No safety deep with everyone walked into the box"
    ],
    ans: 0,
    exp: "Cover 1 and Cover 3 both show one high safety, but the corners tell you which is which. Cover 1 corners are pressing or playing tight with man leverage. Cover 3 corners are bailing deep before the snap. Pressed corners plus one high safety equals Cover 1. Bailing corners plus one high safety equals Cover 3."
  },
  {
    level: "L1", coverage: "Cover 1", tier: "beginner",
    badge: "MAN OR ZONE",
    q: "HOW DO YOU CONFIRM COVER 1 IS MAN COVERAGE BEFORE THE SNAP?",
    hint: "There is one tool that costs nothing and tells you everything. Elite QBs use it on every play.",
    opts: [
      "Motion a receiver — if a defender follows him across the formation it is man",
      "Check safety depth — single high always confirms man coverage",
      "Watch corner technique — inside leverage always means man",
      "Count box defenders — more than six confirms man coverage"
    ],
    ans: 0,
    exp: "Motion is the QB's truth serum. Shift any receiver across the formation before the snap. If a defender follows him — it is man coverage. If the defense bumps, rotates, or trades responsibilities — it is zone. This works against every coverage at every level and costs nothing. Use it on every play."
  },
  {
    level: "L1", coverage: "Cover 1", tier: "beginner",
    badge: "FREE SAFETY ROLE",
    q: "IN COVER 1, WHAT IS THE FREE SAFETY RESPONSIBLE FOR?",
    hint: "He is the one defender without a specific man assignment. What does that make him?",
    opts: [
      "He has no man assignment — he is free to help over the top wherever needed",
      "He matches the tight end man-to-man on every play",
      "He owns the deep middle zone like in Cover 3",
      "He is the designated blitzer unless a receiver goes vertical"
    ],
    ans: 0,
    exp: "The free safety in Cover 1 has no man assignment. He is free to help over the top wherever the coverage needs him. Every other defender is locked man-to-man underneath. The free safety is the last line of defense. Beat him and it is a touchdown. This is why moving the free safety with your eyes before throwing deep is critical."
  },

  // ============================================================
  // COVER 1 — LEVEL 2 — UNDERSTAND IT
  // ============================================================
  {
    level: "L2", coverage: "Cover 1", tier: "beginner",
    badge: "CONFLICT DEFENDER",
    q: "IN COVER 1, WHAT CREATES THE BIGGEST CONFLICT FOR THE DEFENSE?",
    hint: "Man coverage relies on individual matchups. What disrupts individual matchups?",
    opts: [
      "Bunch and rub routes — defenders navigate into each other creating natural picks",
      "Four verticals — the free safety cannot cover all four deep routes",
      "Quick screens — man defenders cannot recover to the perimeter",
      "Draw plays — man defenders turn their backs and lose gap responsibility"
    ],
    ans: 0,
    exp: "Bunch formations and rub routes are the biggest conflict for Cover 1 defenders. When receivers are compressed, man defenders have to navigate through each other's paths. A well-designed pick route where one receiver crosses through another's path creates legal obstruction. The defender runs into a wall. This is exactly what the mesh concept and China concept are designed to do."
  },
  {
    level: "L2", coverage: "Cover 1", tier: "beginner",
    badge: "COVER 1 ROBBER",
    q: "WHAT IS THE COVER 1 ROBBER AND HOW DOES IT CHANGE YOUR READ?",
    hint: "Someone is lurking in the short middle who is not matched on any receiver. Who is it and what does it mean?",
    opts: [
      "The Mike LB drops into the short middle to steal crossers — attack the perimeter instead",
      "The free safety drops to the intermediate level — throw deep immediately",
      "The boundary corner rolls to center field — throw to the boundary",
      "The nickel rotates to the box — throw to the slot immediately"
    ],
    ans: 0,
    exp: "The Cover 1 Robber has the Mike linebacker lurking in the 6-10 yard middle window looking to steal crossing routes and slants. He cheated away from his run fit to play zone. Do not feed him. Attack the perimeter with quick outs, screens, and flats — places he cannot reach from the middle. And check the run because he vacated his gap."
  },
  {
    level: "L2", coverage: "Cover 1", tier: "beginner",
    badge: "SITUATIONAL USAGE",
    q: "WHY WOULD A DEFENSE CALL COVER 1 IN THE RED ZONE?",
    hint: "Think about what Cover 1 allows the defense to do with the extra defender.",
    opts: [
      "It frees an extra defender for the box or blitz while the free safety protects deep",
      "It allows all four corners to play soft underneath",
      "It eliminates the need for any safety in the deep middle",
      "It protects both sidelines with two deep safeties"
    ],
    ans: 0,
    exp: "Cover 1 in the red zone frees an extra defender. With every receiver covered man-to-man and one safety deep, the defense can add a box defender, a spy on the QB, or bring pressure — all while maintaining deep protection. The compressed red zone means the free safety can help over the top of multiple routes."
  },

  // ============================================================
  // COVER 1 — LEVEL 3 — BEAT IT
  // ============================================================
  {
    level: "L3", coverage: "Cover 1", tier: "beginner",
    sit: { down: "3RD & 5", field: "OPP 33", score: "TIE 0-0", form: "2x2" },
    badge: "MATCHUP HUNTING",
    q: "COVER 1 — 3RD AND 5 — WHAT IS THE FIRST THING YOU DO?",
    hint: "Man coverage is a matchup game. Before the ball is snapped, you should already know where it is going.",
    opts: [
      "Find the worst matchup — linebacker on slot, speed mismatch, size mismatch — then attack it",
      "Run four verticals and stress the free safety with vertical threats",
      "Use the check down — man coverage defenders turn their backs",
      "Attack the free safety directly with a post route"
    ],
    ans: 0,
    exp: "Man coverage is a matchup game. Use motion to confirm man before the snap. Then identify the worst matchup on the defense — a linebacker covering your slot receiver, a corner giving up 4 inches of height, a safety matched on your fastest receiver. Find it before the snap. Communicate it. Attack it with a route that gives your player space to work."
  },
  {
    level: "L3", coverage: "Cover 1", tier: "beginner",
    sit: { down: "3RD & 2", field: "OPP 18", score: "DOWN 14-17", form: "2x2" },
    badge: "PRESS BEATER",
    q: "COVER 1 PRESS — 3RD AND 2 IN THE RED ZONE — WHAT IS THE CALL?",
    hint: "The corner is pressing from outside leverage. His inside shoulder is exposed right now. You need 2 yards.",
    opts: [
      "Quick slant — attacks inside shoulder immediately, gets 6 yards every time",
      "Fade route — beat press with speed down the back line",
      "Seam route — split between the corner and the safety",
      "Out route — fight directly into the corner's alignment"
    ],
    ans: 0,
    exp: "Quick slant on 3rd and 2 against outside press. The corner pressing from outside leverage jams to re-route your receiver outside. The slant attacks his inside shoulder before he can recover. The ball is out in 1.5 seconds. You need 2 yards — on a good slant you get 6. Simple, reliable, high percentage. Do not overthink short yardage versus press man."
  },
  {
    level: "L3", coverage: "Cover 1", tier: "beginner",
    sit: { down: "3RD & 8", field: "OPP 35", score: "DOWN 17-24", form: "EMPTY" },
    badge: "EMPTY VS MAN",
    q: "EMPTY — COVER 1 — 3RD AND 8 — MUST CONVERT",
    hint: "Five receivers, five man defenders, one free safety. You have already identified the worst matchup. What now?",
    opts: [
      "Attack the worst matchup with a stem to a dig or shake to a go route",
      "Attack the free safety directly — post route over the top",
      "Run all curls to the sticks — sit at 8 yards in the zones",
      "Quick screen — get yards after the catch against man defenders"
    ],
    ans: 0,
    exp: "Attack the worst matchup you identified pre-snap. Linebacker on your slot receiver — run a stem to a dig and get 10 yards before the LB can recover. Height mismatch with your outside receiver — back-shoulder fade where only he can catch it. Give your best player the best chance. That is the job."
  },

  // ============================================================
  // COVER 0 — LEVEL 1 — IDENTIFY IT
  // ============================================================
  {
    level: "L1", coverage: "Cover 0", tier: "beginner",
    badge: "SAFETY SHELL",
    q: "WHAT SAFETY SHELL TELLS YOU THERE IS ZERO DEEP HELP?",
    hint: "Look for where the safeties are — or critically, where they are not.",
    opts: [
      "Both safeties walked into the box — nobody is playing deep at all",
      "Both safeties split at 12 yards — middle of field is divided",
      "One safety high at 14 yards — middle of field is protected",
      "One safety rotated down — coverage is adjusted to trips"
    ],
    ans: 0,
    exp: "When both safeties walk into the box before the snap, there is zero deep help. Nobody is playing center field. Every DB is matched man-to-man with no help behind them. Count the rushers — if more men rush than you have blockers, you have a hot route situation and the ball must leave your hand in under 1.5 seconds."
  },
  {
    level: "L1", coverage: "Cover 0", tier: "beginner",
    badge: "HOT ROUTE MATH",
    q: "HOW DO YOU IDENTIFY A HOT ROUTE SITUATION BEFORE THE SNAP?",
    hint: "This is a math problem. Count blockers, count rushers.",
    opts: [
      "More defenders showing blitz than you have blockers — someone is uncovered",
      "Both safeties are deep — the middle is open for vertical routes",
      "Corners are pressing — they cannot cover quick routes",
      "The Mike linebacker is walked up — the A-gap is threatened"
    ],
    ans: 0,
    exp: "Pressure identification is math. Count your blockers including the running back. Count the defenders showing blitz. If they outnumber your blockers, you have a free rusher coming and someone is uncovered. That uncovered receiver is your hot route. You must know this before the snap — not after."
  },
  {
    level: "L1", coverage: "Cover 0", tier: "beginner",
    badge: "DISGUISED COVER 0",
    q: "THE DEFENSE SHOWED TWO HIGH SAFETIES PRE-SNAP BUT BOTH WALKED DOWN LATE. WHAT IS IT?",
    hint: "Late safety movement in the final two seconds before the snap changes everything.",
    opts: [
      "Disguised Cover 0 — they showed two-high and walked into blitz",
      "Cover 4 — both safeties are reading the number two receivers",
      "Tampa 2 — the safeties are rotating to protect the seam",
      "Cover 2 — one safety is moving to add run support"
    ],
    ans: 0,
    exp: "When both safeties walk down late after showing two-high, it is disguised Cover 0. They showed Cover 2 and gave you an all-out blitz with zero deep help. Elite QBs key on safety movement in the final two seconds before the snap specifically to catch these disguises. The late walk-down is the tell."
  },

  // ============================================================
  // COVER 0 — LEVEL 2 — UNDERSTAND IT
  // ============================================================
  {
    level: "L2", coverage: "Cover 0", tier: "beginner",
    badge: "DEFENSIVE INTENT",
    q: "WHAT IS THE DEFENSE GAMBLING ON WHEN IT CALLS COVER 0?",
    hint: "Zero coverage protection is a massive risk. What are they betting you cannot do?",
    opts: [
      "They are betting the pressure arrives before you can get the ball out",
      "They are betting their corners are better than every one of your receivers",
      "They are betting you will check to a run and not throw",
      "They are betting the middle of the field is too crowded to complete a pass"
    ],
    ans: 0,
    exp: "Cover 0 is a bet that pressure arrives before the hot route can develop. The defense is gambling everything on the rush collapsing your pocket. Zero safety help means every receiver is one-on-one with no help over the top. If you can identify the hot route before the snap and get the ball out in 1.2 seconds, the defense loses that bet completely."
  },
  {
    level: "L2", coverage: "Cover 0", tier: "beginner",
    badge: "HOT ROUTE SYSTEM",
    q: "WHERE DOES THE BALL GO WHEN A CORNER BLITZES IN COVER 0?",
    hint: "When a corner blitzes, think carefully about what happens to the receiver he was covering.",
    opts: [
      "Immediately to the blitzing corner's receiver — he is uncovered or barely covered",
      "Away from the blitz — throw to the opposite side of the field",
      "To the running back — he is always the safe outlet",
      "Deep down the field — no safety help means the go route is open"
    ],
    ans: 0,
    exp: "The blitzing corner's receiver is your automatic read. That corner is sprinting toward you at the snap — his receiver is either completely uncovered or being covered by a scrambling safety out of position. Set your eyes and feet toward that side before the snap. At the snap the ball goes there immediately. When executed correctly, this is an automatic completion."
  },
  {
    level: "L2", coverage: "Cover 0", tier: "beginner",
    badge: "COMMON MISTAKE",
    q: "WHAT IS THE MOST DANGEROUS MISTAKE A QB CAN MAKE AGAINST COVER 0?",
    hint: "Think about what happens when a QB tries to do too much against all-out pressure.",
    opts: [
      "Holding the ball and looking for the deep shot instead of throwing the hot immediately",
      "Throwing the hot route too quickly before the blitzer fully committed",
      "Checking to a run when the defense is expecting a pass",
      "Moving in the pocket before identifying the free rusher"
    ],
    ans: 0,
    exp: "Holding the ball against Cover 0 is the most dangerous mistake. The temptation is the deep shot — no safety means everyone is one-on-one deep. But the pocket collapses in under 1.5 seconds. QBs who look deep first get sacked or throw under pressure and create turnovers. Cover 0 is solved before the snap. The decision is already made when the ball is snapped."
  },

  // ============================================================
  // COVER 0 — LEVEL 3 — BEAT IT
  // ============================================================
  {
    level: "L3", coverage: "Cover 0", tier: "beginner",
    sit: { down: "3RD & 1", field: "OPP 3", score: "TIE 21-21", form: "2x2" },
    badge: "PRE-SNAP SOLVE",
    q: "COVER 0 BLITZ — GOAL LINE — 3RD AND 1 — WHAT MUST HAPPEN BEFORE THE SNAP?",
    hint: "Cover 0 is not solved after the snap. What is the job before the ball is snapped?",
    opts: [
      "Identify the hot route and commit to it — the decision is made before the snap",
      "Wait for the pocket to develop and find the open receiver downfield",
      "Check to a run — the box will be light with everyone in coverage",
      "Throw the fade — no safety means the back of the end zone is open"
    ],
    ans: 0,
    exp: "Pre-snap identification is non-negotiable against Cover 0. Before the snap you must know exactly where the hot route is. At the snap the ball leaves your hand in 1.2 seconds. No hesitation. The hot route against Cover 0 is usually a slant, quick out, or flat to the running back. If you are still thinking after the snap you are already sacked."
  },
  {
    level: "L3", coverage: "Cover 0", tier: "beginner",
    sit: { down: "4TH & 2", field: "OPP 12", score: "DOWN 14-17", form: "TRIPS LT" },
    badge: "GAME ON THE LINE",
    q: "4TH DOWN — COVER 0 — GAME ON THE LINE — WHAT IS THE CALL?",
    hint: "You need 2 yards — not 20. The simplest answer is the right one.",
    opts: [
      "Quick slant — 2 yards guaranteed on a clean throw against any press coverage",
      "Deep shot to the back of the end zone — no safety means it is wide open",
      "QB sneak — take the free yards the blitz vacates inside",
      "Bubble screen — get the ball out fast with blockers in space"
    ],
    ans: 0,
    exp: "Quick slant on 4th and 2. You need 2 yards — not a touchdown. The slant is out in 1 second, beats the inside leverage of pressed man coverage, and gets you at least 5 yards on a clean throw. The deep shot is tempting because there is no safety, but an incomplete ends the game. Two yards. Slant. Throw it. Move the chains."
  },
  {
    level: "L3", coverage: "Cover 0", tier: "beginner",
    sit: { down: "3RD & 3", field: "OWN 15", score: "TIE 10-10", form: "2x2" },
    badge: "SITUATION IQ",
    q: "OWN 15 — COVER 0 — NO SAFETY HELP — WHAT DOES THE SITUATION DEMAND?",
    hint: "No safety is tempting. But you are backed up in your own end zone. What does situation demand over scheme?",
    opts: [
      "Quick screen or flat — safe throw, defeat the pressure, gain yards, protect the ball",
      "Go route — no safety means a free touchdown from your own 15",
      "Draw play — the blitz vacates the box for a big run",
      "Call timeout — reset the protection before they can blitz again"
    ],
    ans: 0,
    exp: "Take the safe throw from your own 15 against Cover 0. The temptation is the deep shot because there is no safety. But a sack, pick, or fumble in your own end zone loses the game right now. The quick screen gets the ball out before the pressure arrives, gains positive yards, and protects the lead. Situation beats scheme from your own end zone."
  },

  // ============================================================
  // TAMPA 2 — LEVEL 1 — IDENTIFY IT
  // ============================================================
  {
    level: "L1", coverage: "Tampa 2", tier: "intermediate",
    badge: "POST-SNAP TELL",
    q: "TAMPA 2 LOOKS LIKE COVER 2 PRE-SNAP. WHAT REVEALS IT AT THE SNAP?",
    hint: "Everything looks like Cover 2 before the snap. One specific thing moves differently at the snap.",
    opts: [
      "The middle linebacker drops deep into the seam between the two safeties",
      "Both safeties rotate toward the boundary at the snap",
      "The corners bail deep instead of driving to the flat",
      "The nickel backs blitz from both sides simultaneously"
    ],
    ans: 0,
    exp: "The Mike linebacker dropping deep into the seam is the Tampa 2 tell. Pre-snap it is identical to Cover 2. At the snap the MLB vacates his gap and drops 15-20 yards into the middle. He is eliminating the seam window that four verticals normally attacks against Cover 2. Watch the MLB at the snap — if he runs deep, it is Tampa 2 not Cover 2."
  },
  {
    level: "L1", coverage: "Tampa 2", tier: "intermediate",
    badge: "DEAD ROUTE",
    q: "IN TAMPA 2, WHAT ROUTE IS COMPLETELY DEAD THE MOMENT THE MLB DROPS?",
    hint: "The MLB drops directly into the throwing lane of one specific route.",
    opts: [
      "The seam route — the MLB is sitting in that exact window",
      "The corner route — the safety covers the deep outside",
      "The flat route — the corner drives immediately to the flat",
      "The post route — both safeties converge on the deep middle"
    ],
    ans: 0,
    exp: "The seam route is dead against Tampa 2. The entire reason the MLB drops is to eliminate the seam window between the two safeties that four verticals normally attacks. He sits directly in the throwing lane. A QB who does not confirm the Mike will throw the seam directly into the linebacker's hands. Confirm the Mike — if he ran deep, the seam is closed."
  },
  {
    level: "L1", coverage: "Tampa 2", tier: "intermediate",
    badge: "OPEN WINDOW",
    q: "WHEN THE MLB CLOSES THE SEAM IN TAMPA 2, WHAT WINDOW OPENS?",
    hint: "The corner still owns the flat. The safety still owns the deep half. Between those two zones, what is there?",
    opts: [
      "The corner-flag window — between the corner's flat and the safety's deep half",
      "The deep seam — the safety has to cover more ground now",
      "The flat — the corner abandons it to help cover the seam",
      "The A-gap run — the MLB vacated his gap assignment"
    ],
    ans: 0,
    exp: "When the MLB closes the seam, the corner-flag window opens. The corners still own the flats. The safeties still own their deep halves. But between the corner's flat responsibility and the safety's deep half, there is a window at 15-18 yards on the outside. A corner route or flag route hits exactly that gap. The MLB gave you that window when he left to cover the seam."
  },

  // ============================================================
  // TAMPA 2 — LEVEL 2 — UNDERSTAND IT
  // ============================================================
  {
    level: "L2", coverage: "Tampa 2", tier: "intermediate",
    badge: "WHY THIS COVERAGE",
    q: "WHY DOES A DEFENSE RUN TAMPA 2 INSTEAD OF REGULAR COVER 2?",
    hint: "Tampa 2 fixes a specific weakness in Cover 2. What weakness does it address?",
    opts: [
      "It protects the seam void between the safeties that four verticals attacks in Cover 2",
      "It adds a third deep defender to better protect against fade routes",
      "It allows the corners to play more aggressively in the flat",
      "It gives the defense a man-coverage answer without showing man pre-snap"
    ],
    ans: 0,
    exp: "Tampa 2 fixes the seam weakness of standard Cover 2. In regular Cover 2, four verticals splits the two safeties and the seam route attacks the void between them. Tampa 2 assigns the Mike linebacker to that void. Now the seam is protected without changing the two-high shell the defense shows pre-snap. Same look — different answer."
  },
  {
    level: "L2", coverage: "Tampa 2", tier: "intermediate",
    badge: "DECISION TREE",
    q: "YOUR PRIMARY READ VS TAMPA 2 IS THE MLB. IF HE DROPS DEEP, WHAT DO YOU DO?",
    hint: "The MLB just told you exactly what coverage it is and exactly where the open window is.",
    opts: [
      "Throw the corner-flag route — the window outside the MLB just opened",
      "Throw the seam — the MLB cannot cover both seams simultaneously",
      "Throw the flat — the corner abandoned it when the MLB dropped",
      "Throw deep down the middle — the MLB created a gap when he left"
    ],
    ans: 0,
    exp: "When the MLB drops deep, throw the corner-flag route outside. The MLB just told you it is Tampa 2 and he just opened the outside window by leaving to cover the seam. The corner still owns the flat. The safety still owns the deep half. The corner-flag route splits both defenders and hits the gap. This is a one-read post-snap: did the Mike run? Yes — throw outside."
  },
  {
    level: "L2", coverage: "Tampa 2", tier: "intermediate",
    badge: "COMMON MISTAKE",
    q: "WHAT IS THE MOST DANGEROUS MISTAKE A QB MAKES AGAINST TAMPA 2?",
    hint: "Two coverages look identical pre-snap. One has the seam open. One does not.",
    opts: [
      "Throwing the seam assuming Cover 2 rules without confirming the Mike",
      "Throwing the corner route without waiting for the corner to commit to the flat",
      "Targeting the flat too early before the corner has squeezed underneath",
      "Holding the ball too long looking for the deep post"
    ],
    ans: 0,
    exp: "Throwing the seam into Tampa 2 is the signature mistake. Cover 2 and Tampa 2 look identical pre-snap. Against Cover 2 the seam splits the safeties. Against Tampa 2 the seam goes directly to the Mike linebacker who is dropping into that exact window. One look, two completely different answers. Always confirm the Mike before throwing the seam."
  },

  // ============================================================
  // TAMPA 2 — LEVEL 3 — BEAT IT
  // ============================================================
  {
    level: "L3", coverage: "Tampa 2", tier: "intermediate",
    sit: { down: "2ND & 8", field: "OPP 42", score: "TIE 0-0", form: "2x2" },
    badge: "POST-SNAP READ",
    q: "TAMPA 2 — 2ND AND 8 — MLB DROPS AT THE SNAP — WHERE DOES THE BALL GO?",
    hint: "The MLB just confirmed Tampa 2. The seam is dead. What just opened?",
    opts: [
      "Corner-flag route — 15-18 yards outside between the corner's flat and safety's deep half",
      "The seam — challenge the MLB who is dropping deep",
      "Flat route — the corner abandoned it to help with the seam",
      "Post route — the safeties are split and the middle is open"
    ],
    ans: 0,
    exp: "Corner-flag route. The MLB dropping deep confirmed Tampa 2 and opened the outside window simultaneously. Your receiver stems vertical, makes the corner think he is going deep, then breaks the corner at 15 yards into the gap between the corner's flat zone and the safety's deep half. Throw it before the safety can close. This is a precision throw."
  },
  {
    level: "L3", coverage: "Tampa 2", tier: "intermediate",
    sit: { down: "2ND & 5", field: "OPP 33", score: "UP 21-17", form: "EMPTY" },
    badge: "DEAD ROUTE RECOGNITION",
    q: "TAMPA 2 FROM EMPTY — MLB DROPS — WHAT ROUTE IS DEAD AND WHAT IS YOUR ANSWER?",
    hint: "Five receivers. The MLB is in the seam. Which route goes directly to him and which route avoids him?",
    opts: [
      "Seam is dead — throw corner-flag route outside the MLB's zone",
      "Corner route is dead — throw seam before the MLB can set his position",
      "Flat is dead — corner is sitting and waiting for it",
      "Post is dead — safety is driving to the middle to help the MLB"
    ],
    ans: 0,
    exp: "The seam route is dead. The MLB sits directly in the throwing lane between the safeties. From empty, throw the corner-flag route at 15 yards — it goes between the corner's flat responsibility and the safety's deep half, completely outside the MLB's zone. Know what the defense took away. Then take what they gave you."
  },

  // ============================================================
  // COVER 4 — LEVEL 1 — IDENTIFY IT
  // ============================================================
  {
    level: "L1", coverage: "Cover 4", tier: "intermediate",
    badge: "CORNER TELL",
    q: "COVER 4 AND COVER 2 BOTH SHOW TWO HIGH SAFETIES. HOW DO YOU TELL THEM APART?",
    hint: "The safeties look the same. The corners tell you everything.",
    opts: [
      "Cover 4 corners are sitting deep at 10+ yards — Cover 2 corners drive to the flat at the snap",
      "Cover 4 corners press at the line — Cover 2 corners play off at 7 yards",
      "Cover 4 corners align inside — Cover 2 corners align outside",
      "Cover 4 corners are in man coverage — Cover 2 corners are in zone"
    ],
    ans: 0,
    exp: "The corners are the Cover 4 tell. In Cover 2 the corners play off at 7 yards and drive to the flat at the snap. In Cover 4 the corners are sitting back at 10-plus yards in their deep quarter — they are not attacking the flat. Four defenders committed to deep zones means something underneath has to be soft. Find it."
  },
  {
    level: "L1", coverage: "Cover 4", tier: "intermediate",
    badge: "SOFT ZONE",
    q: "WITH FOUR DEFENDERS COMMITTED DEEP IN COVER 4, WHAT AREA IS SOFT?",
    hint: "Four defenders protecting deep zones means fewer defenders protecting something else.",
    opts: [
      "The flat and intermediate areas — with corners deep they cannot protect underneath",
      "The deep sidelines — four defenders cannot cover all four corners of the field",
      "The red zone — Cover 4 collapses in compressed space",
      "The deep middle — the safety has too much ground to cover"
    ],
    ans: 0,
    exp: "The flat and intermediate areas are soft in Cover 4. With four defenders committed to deep quarters, the underneath zones and run fits are light. Corners are not protecting the flat — they are protecting their deep quarter. Quick screens, flats, comeback routes at 12 yards, and the run game all find space against Cover 4."
  },
  {
    level: "L1", coverage: "Cover 4", tier: "intermediate",
    badge: "SAFETY RULES",
    q: "IN COVER 4, WHAT DOES THE SAFETY DO WHEN THE NUMBER TWO RECEIVER GOES VERTICAL?",
    hint: "Safeties in Cover 4 are reading the number two receiver. His route controls their movement.",
    opts: [
      "The safety carries the number two receiver vertically — he cannot help on anything else",
      "The safety stays in his deep quarter regardless of what number two does",
      "The safety rotates to the boundary to protect the deep sideline",
      "The safety drives downhill to defend against the run"
    ],
    ans: 0,
    exp: "In Cover 4, the safety carries the number two receiver if he goes vertical. This is the key rule that creates Cover 4's vulnerability. If number two goes vertical, the safety is committed. That means number one receiver can run a post behind the now-occupied safety. Number two controls the safety. The safety controls your throw."
  },

  // ============================================================
  // COVER 4 — LEVEL 2 — UNDERSTAND IT
  // ============================================================
  {
    level: "L2", coverage: "Cover 4", tier: "intermediate",
    badge: "NUMBER TWO CONTROLS EVERYTHING",
    q: "WHY IS THE NUMBER TWO RECEIVER THE MOST IMPORTANT RECEIVER AGAINST COVER 4?",
    hint: "The safety reads number two. What happens to the safety when number two moves?",
    opts: [
      "Number two controls the safety — wherever number two goes the safety follows, opening space elsewhere",
      "Number two is the fastest route to the sticks on every coverage",
      "Number two is matched by the weakest defender in Cover 4",
      "Number two creates run-pass conflict that eliminates the safety from run fits"
    ],
    ans: 0,
    exp: "Number two controls the safety in Cover 4. If number two goes vertical, the safety carries him and cannot help on anything else. If number two goes out, the safety may rob number one's post. Understanding what number two forces the safety to do tells you where the ball should go before the route even develops. Read number two's release. It tells you what the safety must do. Then throw where the safety cannot go."
  },
  {
    level: "L2", coverage: "Cover 4", tier: "intermediate",
    badge: "DECISION TREE",
    q: "NUMBER TWO RELEASES VERTICAL IN COVER 4. WHERE IS THE BALL?",
    hint: "The safety just committed to number two. What did that open?",
    opts: [
      "Number one post — the safety committed to number two and cannot recover to the post",
      "Number two himself — the safety is carrying him but you can throw over the top",
      "The flat — the corner vacated it to cover the number two vertical",
      "The seam — the safety left the middle open when he carried number two"
    ],
    ans: 0,
    exp: "When number two goes vertical and the safety carries him, throw the number one post. The safety is committed to number two and cannot recover across the field to number one's post. This is the classic Cover 4 manipulation — use number two's route to move the safety, then throw where the safety just left. The safety controls your throw. Make him wrong."
  },
  {
    level: "L2", coverage: "Cover 4", tier: "intermediate",
    badge: "SITUATION IQ",
    q: "COVER 4 PLAYING SOFT WHILE TRAILING — WHAT IS THE DEFENSE DOING AND HOW DO YOU RESPOND?",
    hint: "A defense giving up the short game while trailing wants something specific from you.",
    opts: [
      "They want you to score fast — take short throws, burn clock, make them use timeouts",
      "They are disguising a blitz — attack before they can bring pressure",
      "They cannot cover verticals — attack deep immediately",
      "They are trying to force a run — use play action and go deep"
    ],
    ans: 0,
    exp: "A defense playing soft Cover 4 while trailing is trying to get the ball back quickly. They would rather give up a controlled drive than watch you run the clock out. Do not score fast. Take the short throws, stay in bounds, burn every second off the clock, and make them use their timeouts. Scoring quickly is exactly what they want."
  },

  // ============================================================
  // COVER 4 — LEVEL 3 — BEAT IT
  // ============================================================
  {
    level: "L3", coverage: "Cover 4", tier: "intermediate",
    sit: { down: "3RD & 7", field: "OPP 30", score: "TIE 7-7", form: "2x2" },
    badge: "CONVERSION ROUTE",
    q: "COVER 4 — 3RD AND 7 — CORNERS SITTING DEEP — WHAT IS THE CONVERSION ROUTE?",
    hint: "The corner is sitting in his deep quarter. Make him run the wrong direction, then punish him.",
    opts: [
      "Comeback at 12 yards — stem vertical, make him run deep, break back into open space",
      "Four verticals — attack all four quarters simultaneously",
      "Quick out at 5 yards — short of the sticks but high percentage",
      "Deep post — split the safety and corner zones"
    ],
    ans: 0,
    exp: "The comeback route beats Cover 4 on 3rd and 7. The corner is sitting in his deep quarter. Stem vertical, make him turn his hips and run deep. At 12 yards break back to the ball. The corner is going the wrong direction. The safety is locked into his own quarter. The comeback window opens cleanly. Take the conversion."
  },
  {
    level: "L3", coverage: "Cover 4", tier: "intermediate",
    sit: { down: "1ST & 10", field: "OWN 40", score: "UP 14-7", form: "TRIPS RT" },
    badge: "WINNING SITUATION",
    q: "UP 7 — COVER 4 — 1ST AND 10 — WHAT DOES THE SITUATION DEMAND?",
    hint: "Cover 4 is soft against the run. You are winning. What is the right call?",
    opts: [
      "Run the ball — Cover 4 invites it and you control the clock with the lead",
      "Attack the seam — four verticals stress the quarters structure",
      "Screen to trips — exploit the soft underneath coverage",
      "Four verticals — attack while the corners are giving deep cushion"
    ],
    ans: 0,
    exp: "Run the football. Cover 4 has four defenders in deep zones meaning run fits underneath are light. You are up 7 and controlling the clock wins this game. Establish the run on 1st and 10, force them to use their timeouts, and make them come out of the four-deep shell. Winning football is not always the most creative call."
  },
  {
    level: "L3", coverage: "Cover 4", tier: "intermediate",
    sit: { down: "2ND & 8", field: "OPP 38", score: "DOWN 3-10", form: "2x2" },
    badge: "NUMBER TWO MANIPULATION",
    q: "COVER 4 — 2ND AND 8 — HOW DO YOU USE NUMBER TWO TO CREATE AN OPENING?",
    hint: "Number two controls the safety. Send him somewhere and throw where the safety had to leave.",
    opts: [
      "Number two out route — safety jumps it — throw number one post behind him",
      "Number two vertical — carry the safety deep — throw number one comeback",
      "Number two flat — safety sits — throw number two himself",
      "Number two inside — safety rotates — throw number one fade outside"
    ],
    ans: 0,
    exp: "Run number two on an out route. The safety reads number two and jumps the out. The moment he commits to number two's out route, number one's post is wide open behind him. The safety cannot recover across the field to help. This is the Cover 4 manipulation — use number two to move the safety, then throw the post where the safety just left."
  },

  // ============================================================
  // COVER 3 BUZZ — LEVEL 1 — IDENTIFY IT
  // ============================================================
  {
    level: "L1", coverage: "Cover 3 Buzz", tier: "intermediate",
    badge: "POST-SNAP ROTATION",
    q: "COVER 3 BUZZ — WHAT CHANGES AT THE SNAP COMPARED TO THE PRE-SNAP LOOK?",
    hint: "It may have looked like two-high before the snap. One specific defender moves at the snap to reveal the real coverage.",
    opts: [
      "One safety buzzes down into the hook zone — revealing a single safety over the top",
      "Both corners bail deep — revealing three-deep coverage",
      "The MLB drops into the seam — revealing Tampa 2 rules",
      "The nickel blitzes — revealing an all-out pressure package"
    ],
    ans: 0,
    exp: "Cover 3 Buzz reveals itself when one safety buzzes down into the hook or curl zone at the snap. Pre-snap it may have looked like two-high. At the snap one safety drops down to become a fifth underneath defender. Now there is a single safety covering the entire deep field — more real estate than in standard Cover 3 for one defender to cover alone."
  },
  {
    level: "L1", coverage: "Cover 3 Buzz", tier: "intermediate",
    badge: "SINGLE SAFETY STRESS",
    q: "WITH ONE SAFETY NOW COVERING THE ENTIRE DEEP FIELD IN COVER 3 BUZZ, WHAT IS HE VULNERABLE TO?",
    hint: "One defender covering more ground than normal means something has to give.",
    opts: [
      "Four verticals — he cannot be in two places covering all three deep zones alone",
      "Quick screens — he is too far from the line of scrimmage to help",
      "Inside runs — he is focused on pass coverage",
      "The flat — the buzz safety left that zone open when he rotated down"
    ],
    ans: 0,
    exp: "The single safety covering the entire deep field in Cover 3 Buzz is vulnerable to four verticals and post routes. In standard Cover 3 the safety had help from a second high safety. In Cover 3 Buzz he is alone covering more real estate. Attack him with speed. He cannot be in two places. Force him to choose and throw to where he cannot go."
  },

  // ============================================================
  // COVER 3 BUZZ — LEVEL 2 — UNDERSTAND IT
  // ============================================================
  {
    level: "L2", coverage: "Cover 3 Buzz", tier: "intermediate",
    badge: "WHY THIS COVERAGE",
    q: "WHY DOES A DEFENSE RUN COVER 3 BUZZ INSTEAD OF STANDARD COVER 3?",
    hint: "The buzz safety adds a fifth defender to the underneath area. What does that help the defense take away?",
    opts: [
      "To steal intermediate throws — the buzz safety robs digs, crossers, and glance routes",
      "To protect against deep sideline shots that Cover 3 gives up",
      "To bring more pressure while maintaining deep coverage",
      "To disguise man coverage as zone and trap the QB"
    ],
    ans: 0,
    exp: "Cover 3 Buzz adds the buzz safety to the hook zone to steal intermediate throws that normally beat Cover 3 — digs, crossers, and glance routes. It is commonly run against QBs who like to work the intermediate middle of the field. The defense accepts giving up some outside space to take away the middle. If the QB confirms the buzz rotation, attack outside and stress the now-isolated deep safety."
  },
  {
    level: "L2", coverage: "Cover 3 Buzz", tier: "intermediate",
    badge: "DECISION TREE",
    q: "COVER 3 BUZZ — BUZZ SAFETY ROTATES DOWN INTO HOOK ZONE — WHERE IS THE BALL?",
    hint: "When a defender comes down, you throw over him or outside him. Which direction is correct here?",
    opts: [
      "Outside-breaking routes — the buzz safety cheated inside, attack the space outside him",
      "Directly at the buzz safety — he overcommitted and left the dig open",
      "Deep seam — the safety is now alone and covering more ground",
      "Flat route — the buzz safety cannot get to the perimeter from the hook zone"
    ],
    ans: 0,
    exp: "When the buzz safety rotates down inside, attack outside. He cheated inside and down. The corner is bailing to his deep third. The outside-breaking comeback or fade finds space between the buzz safety's hook zone and the corner's deep third. Or attack the single safety over the top with vertical speed. When a defender comes down, you throw over him or outside him. Never throw into where he just went."
  },

  // ============================================================
  // COVER 3 BUZZ — LEVEL 3 — BEAT IT
  // ============================================================
  {
    level: "L3", coverage: "Cover 3 Buzz", tier: "intermediate",
    sit: { down: "3RD & 6", field: "OPP 35", score: "DOWN 7-14", form: "2x2" },
    badge: "POST-SNAP ATTACK",
    q: "COVER 3 BUZZ — SAFETY ROTATES DOWN AT THE SNAP — 3RD AND 6 — WHAT IS THE CALL?",
    hint: "The buzz safety went down and inside. One safety is now alone covering the entire deep field.",
    opts: [
      "Four verticals — stress the solo safety who is covering more ground than normal",
      "Dig route — attack the window the buzz safety just moved into",
      "Flat route — the buzz safety cannot get outside from the hook zone",
      "Quick slant — the corner is bailing and cannot squeeze underneath"
    ],
    ans: 0,
    exp: "Four verticals stresses the solo safety in Cover 3 Buzz. That safety is now covering more real estate than in standard Cover 3. He cannot be in two places. Read him after the snap — wherever he goes, throw the other side. Force him to choose and attack where he cannot recover. One safety covering the entire deep field against four vertical threats always creates an opening."
  },
  {
    level: "L3", coverage: "Cover 3 Buzz", tier: "intermediate",
    sit: { down: "3RD & 4", field: "OPP 18", score: "TIE 17-17", form: "2x2" },
    badge: "RED ZONE",
    q: "COVER 3 BUZZ — RED ZONE — 3RD AND 4 — GAME TIED — WHERE IS THE WINDOW?",
    hint: "Buzz safety is down in the hook zone. Single safety over the top. Corners in their deep thirds. Where does the slot receiver go?",
    opts: [
      "Slot slant into the end zone — behind the buzz safety before the corner can close",
      "Back shoulder fade to the boundary corner",
      "Go route challenging the single safety over the top",
      "Post from the outside splitting the safety and corner zones"
    ],
    ans: 0,
    exp: "Slot slant into the end zone. The buzz safety dropped inside and down — he cannot recover to the end zone on a quick slant. The corner is running to his deep third. The single safety is too far to help on a quick slot slant. The window opens between the buzz safety's hook zone and the corner's deep third. Get the ball out on time, trust the route, win the game."
  },

  // ============================================================
  // COVER 6 — LEVEL 1 — IDENTIFY IT
  // ============================================================
  {
    level: "L1", coverage: "Cover 6", tier: "advanced",
    badge: "SPLIT FIELD TELL",
    q: "WHAT TELLS YOU THIS IS COVER 6 AND NOT STANDARD COVER 2 OR COVER 4?",
    hint: "Look at both corners. They are not aligned the same way.",
    opts: [
      "The corners are at different depths — one looks like Cover 2, one looks like Cover 4",
      "Both corners are bailing deep — three-deep coverage is coming",
      "Both safeties walked into the box — all-out pressure is coming",
      "One corner is pressing — man coverage is coming to that side"
    ],
    ans: 0,
    exp: "Different corner depths is the Cover 6 tell. One corner is at 5-7 yards with outside leverage like a Cover 2 corner. The other corner is sitting back at 10-plus yards like a Cover 4 corner. Two safeties are high but they are playing different rules on each side. Cover 6 is split-field coverage — one side plays Cover 2 rules, the other plays Cover 4 rules."
  },
  {
    level: "L1", coverage: "Cover 6", tier: "advanced",
    badge: "PICK A SIDE",
    q: "IN COVER 6, WHAT IS THE MOST IMPORTANT THING TO DO BEFORE THE SNAP?",
    hint: "Cover 6 has two different coverages happening simultaneously. You cannot read both sides.",
    opts: [
      "Identify which side is Cover 2 and which is Cover 4 — commit to attacking one side",
      "Read both safeties simultaneously — they will tell you where to throw",
      "Motion a receiver to identify man vs zone on both sides",
      "Wait for post-snap rotation to reveal which side is more vulnerable"
    ],
    ans: 0,
    exp: "Pick a side before the snap. Cover 6 punishes indecision. If you try to read both sides simultaneously you will hesitate and throw late into a closing window. Identify the Cover 2 side by the shallow corner and the Cover 4 side by the deep corner. Pick the weaker side based on your personnel and formation. Commit before the snap and attack decisively."
  },

  // ============================================================
  // COVER 6 — LEVEL 2 — UNDERSTAND IT
  // ============================================================
  {
    level: "L2", coverage: "Cover 6", tier: "advanced",
    badge: "TWO COVERAGES ONE PLAY",
    q: "COVER 6 — HOW DO YOU ATTACK THE COVER 2 SIDE?",
    hint: "Apply standard Cover 2 rules to that side of the field.",
    opts: [
      "Fade-flat or hole shot — the Cover 2 corner is in the same conflict as any Cover 2 corner",
      "Comeback route — the corner is sitting deep and cannot recover",
      "Four verticals — stress both safeties on the Cover 2 side",
      "Quick seam — the safety has to cover both his half and the seam"
    ],
    ans: 0,
    exp: "The Cover 2 side of Cover 6 is attacked exactly like standard Cover 2. The corner has flat responsibility and will squat. He is conflicted by the fade-flat combo — chase the fade and give up the flat, or protect the flat and give up the fade behind him. The hole shot between his flat zone and the safety's deep half also opens. Apply Cover 2 rules to the Cover 2 side."
  },
  {
    level: "L2", coverage: "Cover 6", tier: "advanced",
    badge: "COVER 4 SIDE",
    q: "COVER 6 — HOW DO YOU ATTACK THE COVER 4 SIDE?",
    hint: "Apply standard Cover 4 rules to that side — number two controls the safety.",
    opts: [
      "Comeback at 12 yards or number two out to move the safety — throw post behind him",
      "Fade-flat — the corner is sitting shallow and ready to jump the flat",
      "Quick hitch — the corner is playing off and cannot close",
      "Seam route — the safety cannot cover the seam from his deep quarter"
    ],
    ans: 0,
    exp: "The Cover 4 side of Cover 6 is attacked exactly like standard Cover 4. The corner is sitting deep in his quarter — comeback routes at 12 yards beat him. Send number two on an out route to move the safety, then throw number one post behind the vacating safety. Apply Cover 4 rules to the Cover 4 side. Cover 6 is not a new coverage — it is two existing coverages played simultaneously."
  },

  // ============================================================
  // COVER 6 — LEVEL 3 — BEAT IT
  // ============================================================
  {
    level: "L3", coverage: "Cover 6", tier: "advanced",
    sit: { down: "2ND & 7", field: "OPP 38", score: "DOWN 3-10", form: "2x2" },
    badge: "PICK A SIDE AND ATTACK",
    q: "COVER 6 — 2ND AND 7 — YOU IDENTIFIED THE COVER 2 SIDE — WHAT IS THE CALL?",
    hint: "The shallow corner owns the flat. He cannot cover the flat and the route behind him.",
    opts: [
      "Fade-flat — drive the corner deep and dump to the vacated flat",
      "Comeback — the corner is too shallow to have deep quarter responsibility",
      "Quick out — the corner is sitting and will trap it",
      "Post route — the safety is protecting the deep half on this side"
    ],
    ans: 0,
    exp: "Fade-flat to the Cover 2 side. The shallow corner owns the flat — he cannot chase the fade and protect the flat simultaneously. Drive him deep with the fade and the flat opens behind him. This is the same conflict concept that beats standard Cover 2, applied to the Cover 2 side of a Cover 6 look. Pick the side, apply the right rules, attack decisively."
  },

  // ============================================================
  // EVEN FRONT — LEVEL 1 — IDENTIFY IT (FRONT)
  // ============================================================
  {
    level: "L1", coverage: "Even Front", tier: "beginner",
    badge: "FRONT RECOGNITION",
    q: "WHAT TELLS YOU THE DEFENSE IS IN AN EVEN FRONT?",
    hint: "Count the down linemen before the snap.",
    opts: [
      "Four down linemen — two ends and two tackles on the line of scrimmage",
      "Three down linemen — one nose tackle and two ends",
      "Five defenders on the line — bear front showing",
      "Two down linemen — maximum linebacker depth"
    ],
    ans: 0,
    exp: "An even front has four down linemen on the line of scrimmage — two defensive ends and two defensive tackles. This is the standard 4-3 base defense. Each lineman controls one gap. Three linebackers play behind them. Even fronts are balanced and predictable — easier to set protection against than odd fronts."
  },
  {
    level: "L1", coverage: "Even Front", tier: "beginner",
    badge: "BOX COUNT",
    q: "IN AN EVEN FRONT, HOW DOES BOX COUNT AFFECT YOUR RUN-PASS DECISION?",
    hint: "Count all defenders inside the tackles and near the line. Compare to your blockers.",
    opts: [
      "If box count matches or exceeds your blockers, run fits are sound — consider passing",
      "If box count is lower than your blockers, the run game is outnumbered",
      "Box count only matters in goal-line situations with an even front",
      "Even fronts always have light boxes — run the ball every time"
    ],
    ans: 0,
    exp: "Box count against an even front tells you whether the run game has a numerical advantage. Count all defenders near the line — four down linemen plus any linebackers walked up. If the defense has as many or more defenders as you have blockers in the box, the run fit is sound. Two high safeties against an even front often means a light box — good run opportunity."
  },

  // ============================================================
  // ODD FRONT — LEVEL 1 — IDENTIFY IT (FRONT)
  // ============================================================
  {
    level: "L1", coverage: "Odd Front", tier: "beginner",
    badge: "FRONT RECOGNITION",
    q: "WHAT TELLS YOU THE DEFENSE IS IN AN ODD FRONT?",
    hint: "Count the down linemen and look for the nose tackle.",
    opts: [
      "Three down linemen — one nose tackle over the center and two ends",
      "Four down linemen — two ends and two tackles evenly spaced",
      "Five down linemen — maximum gap control at the line",
      "Two down linemen — only ends on the line"
    ],
    ans: 0,
    exp: "An odd front has three down linemen — a nose tackle aligned over or near the center and two defensive ends. Four linebackers play behind them. The 3-4 is the most common odd front. The nose tackle controls interior gaps and the edge rushers can be linebackers, creating uncertainty about who is rushing and who is dropping into coverage."
  },
  {
    level: "L1", coverage: "Odd Front", tier: "beginner",
    badge: "PROTECTION CHALLENGE",
    q: "WHY IS AN ODD FRONT HARDER TO PROTECT AGAINST THAN AN EVEN FRONT?",
    hint: "Think about what the offense cannot identify before the snap.",
    opts: [
      "You cannot identify the rushers — edge linebackers can rush or drop making protection calls harder",
      "The nose tackle controls both A-gaps making interior protection impossible",
      "Odd fronts always bring more rushers than you have blockers",
      "The two edges are always faster than offensive tackles in an odd front"
    ],
    ans: 0,
    exp: "Odd fronts create protection uncertainty because you cannot identify the rushers before the snap. The outside linebackers in a 3-4 can rush as pass rushers or drop into coverage — the offense does not know which until after the snap. This is why odd fronts require QB awareness — you need to identify the Mike, set the protection, and still be ready for an unexpected rusher."
  }

];

// ============================================================
// DECISION TREES
// Reference knowledge for coaching explanations
// ============================================================
var DECISION_TREES = {
  "Cover 2": {
    primary: "Corner",
    reads: [
      { if: "Corner squats on hitch", then: "Throw corner/fade route behind him" },
      { if: "Corner sinks under corner route", then: "Throw hitch — he cannot recover" },
      { if: "Corner splits fade and flat", then: "Throw flat immediately" },
      { if: "Safety widens early", then: "Throw seam between them" }
    ],
    point: "The corner is wrong no matter what he does. Your job is to prove it."
  },
  "Tampa 2": {
    primary: "Mike Linebacker",
    reads: [
      { if: "Mike drops deep middle", then: "Seam is DEAD — throw corner-flag route outside" },
      { if: "Mike stays shallow", then: "Standard Cover 2 rules apply — seam may be available" },
      { if: "Outside LB widens", then: "Throw out or comeback behind him" }
    ],
    point: "One read: did the Mike run? Yes — throw outside. No — it is Cover 2."
  },
  "Cover 3": {
    primary: "Hook-Curl Defender",
    reads: [
      { if: "Hook defender widens to flat", then: "Throw curl at 12-15 yards" },
      { if: "Hook defender sits under curl", then: "Throw flat immediately" },
      { if: "Corner squats (Cloud)", then: "Throw fade behind the corner" },
      { if: "Pressure shows early", then: "Throw flat now" }
    ],
    point: "You are reading one human being — not the coverage."
  },
  "Cover 3 Buzz": {
    primary: "Buzz Safety",
    reads: [
      { if: "Safety buzzes down inside", then: "Throw outside — comeback, fade, out" },
      { if: "Safety sits in hook zone", then: "Attack vertical routes to stress solo safety" },
      { if: "Solo safety over top", then: "Four verticals — he cannot cover everything" }
    ],
    point: "When a defender comes down, throw over him or outside him."
  },
  "Cover 4": {
    primary: "Number Two Receiver — Safety",
    reads: [
      { if: "Number two goes vertical — safety carries", then: "Throw number one post" },
      { if: "Number two goes out — safety jumps", then: "Throw number one post behind safety" },
      { if: "Corner bails hard on stem", then: "Throw comeback at 12 yards" },
      { if: "Corner sits and drives", then: "Convert to vertical — go route" }
    ],
    point: "Number two controls the safety. The safety controls your throw."
  },
  "Cover 6": {
    primary: "Corner Depth — Pick a Side",
    reads: [
      { if: "Cover 2 side — corner squats", then: "Throw fade-flat or hole shot" },
      { if: "Cover 4 side — corner bails", then: "Throw comeback at 12 yards" },
      { if: "Cover 4 side — number two out", then: "Safety jumps — throw number one post" }
    ],
    point: "Pick a side before the snap. Hesitation is the defense winning."
  },
  "Cover 0": {
    primary: "Blitzer — Replace the Rush",
    reads: [
      { if: "Slot blitzes", then: "Throw to vacated slot area immediately" },
      { if: "Linebacker blitzes", then: "Throw running back route" },
      { if: "Corner blitzes", then: "Throw immediately to corner's receiver" },
      { if: "Double A-gap", then: "Quick slant or stick — fastest throw possible" }
    ],
    point: "You are not reading defenders. You are replacing pressure."
  },
  "Fire Zone": {
    primary: "Dropping DL — Underneath Zones",
    reads: [
      { if: "DL drops into coverage", then: "Confirm Fire Zone — do not throw to him" },
      { if: "Edge pressure", then: "Throw flat or hot immediately" },
      { if: "Hook defender widens", then: "Throw dig or curl behind him" },
      { if: "Hook defender sits", then: "Throw flat or shallow cross" }
    ],
    point: "Pressure comes — ball replaces it. Zones stretch — hit the void."
  }
};

// ============================================================
// CONCEPT TO COVERAGE MAPPING
// ============================================================
var CONCEPTS = {
  "Smash":          { beats: ["Cover 2"], why: "Corner conflict — flat vs corner route" },
  "Mesh":           { beats: ["Cover 1", "Cover 0"], why: "Natural picks against man coverage" },
  "Four Verticals": { beats: ["Cover 3", "Cover 2"], why: "Floods all deep zones simultaneously" },
  "Flood":          { beats: ["Cover 2", "Cover 3", "Cover 6"], why: "Three-level stress on flat defender" },
  "Curl-Flat":      { beats: ["Cover 3", "Cover 2"], why: "Hi-low on hook-curl linebacker" },
  "Comeback":       { beats: ["Cover 4", "Cover 3"], why: "Corner bails — break back into open space" },
  "Post-Dig":       { beats: ["Cover 4"], why: "Safety conflict when manipulated with number two" },
  "Slant":          { beats: ["Cover 0", "Cover 1 Press"], why: "Attacks inside shoulder of pressed corner" },
  "Corner-Flag":    { beats: ["Tampa 2"], why: "Outside the MLB zone, inside the safety deep half" }
};
