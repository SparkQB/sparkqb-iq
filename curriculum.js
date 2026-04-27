// ============================================================
// SPARKQB IQ — CURRICULUM.JS
// All question data lives here. Edit this file to update
// questions, answers, explanations, or add new coverages.
// Push to GitHub and your changes go live immediately.
// ============================================================

// ============================================================
// VIMEO VIDEO IDs — ADD YOURS HERE WHEN READY
// Format: "Coverage Name": "vimeoID"
// Unlisted: "Coverage Name": "vimeoID?h=yourhash"
// ============================================================
var VIMEO = {
  "Cover 2":        null,
  "Cover 3":        null,
  "Cover 1":        null,
  "Cover 0":        null,
  "Tampa 2":        null,
  "Cover 4":        null,
  "Cover 3 Sky":    null,
  "Cover 3 Buzz":   null,
  "Cover 3 Cloud":  null,
  "Cover 6":        null,
  "2-Man":          null,
  "Quarters Match": null,
  "Palms":          null,
  "Cover 7":        null,
  "Even Front":     null,
  "Odd Front":      null,
  "Fire Zone":      null,
  "Nickel Blitz":   null,
  "Double A-Gap":   null
};

// ============================================================
// LEVEL STRUCTURE
// Level 1 = IDENTIFY IT (recognition)
// Level 2 = UNDERSTAND IT (why/how)
// Level 3 = BEAT IT (play calls + decision trees)
// ============================================================

// ============================================================
// TIER DEFINITIONS
// free = available without account
// pro = requires Pro subscription
// ============================================================

var CURRICULUM = {

  levels: [
    { id: 1, name: "IDENTIFY IT",   desc: "Pre-snap recognition. Read the defense before the ball is snapped.", color: "#004FFF" },
    { id: 2, name: "UNDERSTAND IT", desc: "Why does the defense run this? Who is in conflict? What is the weakness?", color: "#B2FF00" },
    { id: 3, name: "BEAT IT",       desc: "Decision trees. Play calls. The right answer for the right situation.", color: "#FF0400" }
  ],

  // ============================================================
  // COVERAGE UNITS
  // Each unit has questions for all 3 levels
  // ============================================================
  units: [

    // ══════════════════════════════════════════════════════════
    // COVER 2
    // ══════════════════════════════════════════════════════════
    {
      id: "cover2",
      name: "Cover 2",
      family: "Zone",
      tier: "free",
      filmKey: "Cover 2",
      overview: "Two-deep, five-under zone. Safeties split the deep halves. Corners own the flats. Five defenders underneath.",
      levels: {

        1: [
          {
            badge: "SAFETY READ",
            situation: { down: "1ST & 10", field: "OWN 35", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2",
            question: "WHAT DO THE SAFETIES TELL YOU HERE?",
            hint: "Count them. Where are they? How deep?",
            options: [
              "Two safeties split at equal depth — this is a two-high shell",
              "One safety deep in the middle — single high",
              "Both safeties walked into the box",
              "Safety showing blitz from the boundary"
            ],
            correct: 0,
            explanation: "Two safeties at equal depth splitting the hashes is the signature of a two-high shell. Cover 2, Cover 4, Tampa 2, and Cover 6 all start from two-high. One high means Cover 1 or Cover 3. Both low means Cover 0. Two high and split is where your identification starts."
          },
          {
            badge: "CORNER READ",
            situation: { down: "2ND & 6", field: "OPP 40", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2",
            question: "WHAT IS THE CORNER'S ALIGNMENT TELLING YOU?",
            hint: "He is at 7 yards with outside leverage. What does that mean?",
            options: [
              "He owns the flat — he will drive downhill at the snap",
              "He is bailing to a deep third like Cover 3",
              "He is in press man coverage",
              "He is playing a deep quarter like Cover 4"
            ],
            correct: 0,
            explanation: "A corner at 5-7 yards with outside leverage is the Cover 2 corner tell. He is not going deep. He owns the flat zone and will drive downhill at the snap to squeeze underneath routes. Cover 3 corners bail. Cover 4 corners sit deep. Cover 2 corners attack the flat."
          },
          {
            badge: "COVERAGE ID",
            situation: { down: "3RD & 7", field: "OPP 30", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover2",
            question: "IS THE MIDDLE OF THE FIELD OPEN OR CLOSED?",
            hint: "Two safeties split. What does that leave in the middle?",
            options: [
              "Open — two safeties split means the middle seam is a void",
              "Closed — one safety protects the middle",
              "Closed — both safeties rotate to the middle post-snap",
              "Open — corners are covering the deep middle"
            ],
            correct: 0,
            explanation: "Two safeties splitting the field means the middle of the field is open. Neither safety owns the seam between them. This is the fundamental weakness of Cover 2 — the void between the safeties is where four verticals and seam routes attack. Middle of the field open equals MOF open."
          }
        ],

        2: [
          {
            badge: "RESPONSIBILITY",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2",
            question: "WHY DOES THE COVER 2 CORNER OWN THE FLAT?",
            hint: "Think about what the safety is doing and what that forces the corner to do.",
            options: [
              "The safety owns the deep half, so the corner handles underneath. They split the sideline vertically.",
              "The corner is the fastest defender so he covers the most ground",
              "The corner owns the flat only on passing downs",
              "The corner and safety rotate responsibilities post-snap"
            ],
            correct: 0,
            explanation: "Cover 2 divides each side of the field vertically. The safety owns the deep half of his side. The corner owns the flat underneath. Together they cover the full sideline — one above, one below. This is why the fade-flat stresses the corner: he must choose between the flat below him and the deeper route going over his head."
          },
          {
            badge: "CONFLICT DEFENDER",
            situation: { down: "2ND & 8", field: "OPP 38", score: "TIE 7-7", formation: "TRIPS RT" },
            defense: "cover2_trips",
            question: "TRIPS VS COVER 2 — WHO IS THE CONFLICT DEFENDER?",
            hint: "Three receivers flood one side. One defender cannot cover three levels.",
            options: [
              "The field corner — three receivers create a three-level flood on his flat zone",
              "The free safety — he has to help on both sides",
              "The Mike linebacker — three gaps to fill",
              "The boundary corner — isolated with no help"
            ],
            correct: 0,
            explanation: "The field corner is put in conflict by trips. He owns the flat but now faces three receivers creating a three-level flood: a flat route, a comeback, and a fade. He can only be in one place. This is the core principle of attacking Cover 2 with trips — create a conflict the corner cannot solve."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "3RD & 5", field: "OPP 33", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2",
            question: "WHAT IS THE BUILT-IN WEAKNESS OF COVER 2?",
            hint: "Two defenders split the deep field. What does that leave uncovered?",
            options: [
              "The seam between the two safeties and the hole shot behind the corner",
              "The flat zones — corners cannot cover that much ground",
              "The deep middle — no one protects it",
              "The boundary side — safety cannot reach it in time"
            ],
            correct: 0,
            explanation: "Cover 2 has two classic weaknesses: the seam between the safeties where neither can help, and the hole shot — the window between where the corner drops to the flat and where the safety is deep. Four verticals exploits the seam. The smash concept exploits the hole shot. Both are built into the coverage."
          },
          {
            badge: "SITUATIONAL",
            situation: { down: "1ST & 10", field: "OWN 20", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover2",
            question: "WHY WOULD A DEFENSE CALL COVER 2 IN YOUR OWN RED ZONE?",
            hint: "Think about what the defense is trying to prevent from your own end zone.",
            options: [
              "Cover 2 keeps two safeties deep and prevents the explosive play that changes field position dramatically",
              "Cover 2 is aggressive and attacks the QB",
              "Cover 2 is the best coverage against the run",
              "Cover 2 eliminates all underneath throws"
            ],
            correct: 0,
            explanation: "From a defense's perspective, Cover 2 from your own end zone is about preventing the explosive play. Two safeties deep means no shot over the top. They are comfortable giving up short throws because field position protects them. The defense wants you to take 5 yards at a time, not 50."
          }
        ],

        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "2ND & 8", field: "OPP 40", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2",
            question: "COVER 2 — THE CORNER DRIVES ON THE FLAT. WHERE IS THE BALL?",
            hint: "If the corner goes to the flat, what did he just leave open behind him?",
            options: [
              "The corner route behind him — he left the deep outside window",
              "The seam — safety rotated to the corner side",
              "The flat — throw it before he gets there",
              "The slant — attack immediately before corners set"
            ],
            correct: 0,
            explanation: "This is the Cover 2 decision tree: IF the corner drives to the flat, THROW the corner route behind him. He cannot be in both places. The smash concept is built on this exact conflict. The receiver runs a hitch to hold the corner, then the corner route goes over him into the window the corner just vacated."
          },
          {
            badge: "PLAY CALL",
            situation: { down: "3RD & 6", field: "OPP 28", score: "TIE 14-14", formation: "TRIPS RT" },
            defense: "cover2_trips",
            question: "TRIPS VS COVER 2 — WHAT IS THE CALL?",
            hint: "Three receivers into the field corner. Run a three-level flood.",
            options: [
              "Levels concept — flat, comeback, and fade flood the corner on the same side",
              "Four verticals — stress both safeties deep",
              "Quick outs — short of the sticks but safe",
              "Post route — attack between the safeties"
            ],
            correct: 0,
            explanation: "The levels concept floods the Cover 2 corner with three routes at three different depths on the same side. The third receiver runs a flat, the second runs a 12-yard comeback, and the outside receiver runs a fade. The corner must choose one. The receiver at the level he abandons is open. Usually the comeback sits in the window."
          },
          {
            badge: "SITUATION IQ",
            situation: { down: "1ST & 10", field: "OWN 18", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover2",
            question: "OWN 18 — COVER 2 — WHAT IS THE RIGHT CALL?",
            hint: "You are backed up. A turnover here is a catastrophe.",
            options: [
              "Quick hitches — free yards, move the chains, protect the ball",
              "Four verticals — attack the safeties deep for a big play",
              "Draw play — catch them in coverage",
              "Deep crossing routes — stress the safeties"
            ],
            correct: 0,
            explanation: "Situation IQ: From your own end zone on 1st and 10, ball security is the priority. Cover 2 gives you hitches all day — corners are playing off and linebackers are focused on run. Take the free 5-7 yards and move the chains. Four verticals is correct football but the wrong situational call when a pick-six ends the game."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "2ND & 7", field: "OPP 35", score: "TIE 0-0", formation: "2x2" },
            defense: "tampa2",
            question: "YOU SEE TWO-HIGH. YOU THROW THE SEAM. WHAT JUST HAPPENED?",
            hint: "Not all two-high coverages are Cover 2. Who might be in that seam?",
            options: [
              "The Mike linebacker dropped into Tampa 2 — he was sitting in that seam waiting",
              "The free safety rotated to that side",
              "The corner jumped the route from the flat",
              "Nothing — the seam is always open vs two-high"
            ],
            correct: 0,
            explanation: "This is the most common Cover 2 mistake: assuming all two-high shells are the same. Tampa 2 looks identical pre-snap but the Mike linebacker drops deep into the seam at the snap. QBs who assume Cover 2 rules throw seams directly to him. Always confirm the Mike before throwing the seam."
          },
          {
            badge: "RED ZONE",
            situation: { down: "2ND & 3", field: "OPP 12", score: "UP 21-17", formation: "TRIPS LT" },
            defense: "cover2_rz",
            question: "RED ZONE COVER 2 — WHERE IS THE WINDOW?",
            hint: "The corner still owns the flat. The end zone is only 12 yards away.",
            options: [
              "Back pylon fade — corner must choose the flat or the back corner of the end zone",
              "Seam between safeties — they compress in the red zone",
              "Quick slant across the end zone",
              "Corner route at the back of the end zone from the slot"
            ],
            correct: 0,
            explanation: "The back pylon fade beats red zone Cover 2. The corner still owns the flat — he cannot abandon it to chase a fade to the back pylon. The ball goes to the back corner of the end zone before he can recover. Throw it to the spot before your receiver arrives. This is the red zone answer to Cover 2."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // COVER 3
    // ══════════════════════════════════════════════════════════
    {
      id: "cover3",
      name: "Cover 3",
      family: "Zone",
      tier: "free",
      filmKey: "Cover 3",
      overview: "Three-deep, four-under zone. One high safety. Corners bail to deep thirds. Four underneath zone defenders.",
      levels: {

        1: [
          {
            badge: "SAFETY READ",
            situation: { down: "1ST & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3",
            question: "WHAT IS THE SINGLE HIGH SAFETY TELLING YOU?",
            hint: "One safety, centered, deep. What coverage families show this look?",
            options: [
              "The middle of the field is closed — this is Cover 1 or Cover 3",
              "The middle of the field is open — both safeties split the halves",
              "The defense is in Cover 0 with no safety help",
              "The defense is in Cover 4 with four deep defenders"
            ],
            correct: 0,
            explanation: "One safety high and centered means the middle of the field is closed. This is your first Cover 1 versus Cover 3 read. Single high with corners bailing means Cover 3. Single high with corners pressed and defenders following motion means Cover 1. The safety tells you MOF open or closed before anything else."
          },
          {
            badge: "CORNER READ",
            situation: { down: "2ND & 7", field: "OPP 42", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3",
            question: "THE CORNERS ARE BAILING PRE-SNAP. WHAT DOES THAT TELL YOU?",
            hint: "Bailing means backpedaling before the snap. Who does that in zone vs man?",
            options: [
              "Zone coverage — corners bailing to deep thirds is a Cover 3 tell",
              "Man coverage — corners are giving a cushion before pressing",
              "Cover 0 — corners are preparing to blitz",
              "Cover 4 — corners protecting their deep quarters"
            ],
            correct: 0,
            explanation: "Corners bailing pre-snap — backpedaling toward their deep third before the snap — is a Cover 3 tell. They are protecting vertical space and do not have man responsibility. Man coverage corners are either pressed at the line or aligned with inside/outside leverage to match their man. Bailing before the snap almost always means zone."
          },
          {
            badge: "COVERAGE ID",
            situation: { down: "3RD & 8", field: "OWN 38", score: "DOWN 10-17", formation: "EMPTY" },
            defense: "cover3",
            question: "EMPTY FORMATION — ONE HIGH SAFETY — CORNERS BAILING — WHAT IS IT?",
            hint: "Empty forces the defense to show their hand. Put the reads together.",
            options: [
              "Cover 3 — single high, corners bailing, four underneath zones",
              "Cover 1 — single high with man coverage underneath",
              "Cover 0 — no safety help, all man",
              "Cover 4 — four deep defenders in their quarters"
            ],
            correct: 0,
            explanation: "Empty formation forces defenses to declare. Single high safety plus corner bail technique confirms Cover 3. If it were Cover 1, the corners would be pressed or aligned with leverage on their man and a motion check would show a defender following the receiver. Bailing corners plus single high equals Cover 3 almost every time."
          }
        ],

        2: [
          {
            badge: "RESPONSIBILITY",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3",
            question: "WHAT IS THE HOOK-CURL LINEBACKER RESPONSIBLE FOR IN COVER 3?",
            hint: "He is underneath. He is not going deep. What is his specific conflict?",
            options: [
              "He owns the curl zone and expands to the flat if threatened — he cannot cover both",
              "He drops to the deep middle to help the safety",
              "He blitzes on all passing downs",
              "He locks up the slot receiver man-to-man"
            ],
            correct: 0,
            explanation: "The hook-curl linebacker owns the curl zone and has flat responsibility if threatened. He is NOT going deep. This is the built-in conflict of Cover 3: a curl route holds him inside while a flat route pulls him outside. He cannot cover both simultaneously. The curl-flat concept is designed specifically to exploit this conflict."
          },
          {
            badge: "CONFLICT DEFENDER",
            situation: { down: "2ND & 8", field: "OPP 45", score: "TIE 7-7", formation: "TRIPS RT" },
            defense: "cover3_trips",
            question: "TRIPS VS COVER 3 — WHAT HAPPENS TO THE FREE SAFETY?",
            hint: "Three receivers to one side. The safety has to pick a side.",
            options: [
              "Trips pulls the safety toward the field, leaving the backside corner isolated with no help",
              "The safety stays centered and ignores the trips side",
              "The safety rotates to the boundary to protect the single receiver",
              "The safety and corner swap responsibilities"
            ],
            correct: 0,
            explanation: "Trips formation pulls the free safety toward the field to account for the three-receiver overload. He cannot help on the backside. That leaves the boundary corner in a true one-on-one against your single receiver with no safety over the top. Trips to the field creates an isolated matchup on the backside — the backside post is often the answer."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "3RD & 6", field: "OPP 30", score: "DOWN 3-10", formation: "2x2" },
            defense: "cover3",
            question: "WHERE IS THE VOID IN COVER 3?",
            hint: "Three defenders own the deep thirds. Four defend underneath. What is left between the levels?",
            options: [
              "The seam — between the corner's deep third and the safety's middle, about 10-14 yards",
              "The flat — corners abandon it to bail deep",
              "The deep middle — the safety cannot cover everything",
              "The A-gap — linebackers are dropping, not filling"
            ],
            correct: 0,
            explanation: "The seam is the void in Cover 3. The corner owns the deep third. The safety owns the middle. But the seam between them — about 10-14 yards just inside the hash — is a gray area. A seam route or dig route finds this window. The safety must choose between the seam and the middle. He cannot do both."
          },
          {
            badge: "SITUATIONAL",
            situation: { down: "2ND & 4", field: "OWN 44", score: "UP 28-21", formation: "2x2" },
            defense: "cover3",
            question: "UP 7 LATE — DEFENSE PLAYS SOFT COVER 3 — WHY?",
            hint: "They are giving up the short game on purpose. What is their actual goal?",
            options: [
              "They want the ball back fast — soft coverage gives up quick scores to get possession",
              "They have no timeouts and cannot run blitz packages",
              "Their corners cannot play man coverage",
              "Cover 3 is the best run defense they have"
            ],
            correct: 0,
            explanation: "Soft Cover 3 while trailing late is a calculated decision. The defense wants you to score quickly so they get the ball back with time to respond. They are sacrificing field position to get possession. As the offense, do not play into this. Take the underneath throws, stay in bounds, and burn the clock. Scoring fast is what they want."
          }
        ],

        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "2ND & 8", field: "OPP 42", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3",
            question: "COVER 3 — THE CURL-FLAT DEFENDER WIDENS TO THE FLAT. WHERE IS THE BALL?",
            hint: "He went outside. What did he just leave open behind him?",
            options: [
              "The curl — he widened and left the curl zone open at 12-15 yards",
              "The flat — throw it before he gets there",
              "The seam — safety rotated toward the curl",
              "The deep third — corner bailed too early"
            ],
            correct: 0,
            explanation: "This is the Cover 3 decision tree: IF the curl-flat defender widens to the flat, THROW the curl behind him. He vacated that zone. The curl route sits in the window he just left. This is why curl-flat is the foundational concept against Cover 3 — you are reading one defender and throwing where he is not."
          },
          {
            badge: "PLAY CALL",
            situation: { down: "3RD & 9", field: "OWN 38", score: "DOWN 10-17", formation: "EMPTY" },
            defense: "cover3",
            question: "EMPTY — 3RD AND 9 — COVER 3 — MUST CONVERT",
            hint: "Five receivers, three deep zones. Put all three zones under stress at once.",
            options: [
              "Four verticals — force the safety to choose, one receiver finds the void",
              "All curls at 12 yards — sit in front of the zones",
              "Hitch and go — beat the corners bailing deep",
              "Mesh concept — stress the underneath zones only"
            ],
            correct: 0,
            explanation: "Four verticals from empty on 3rd and 9 creates an impossible equation for Cover 3. All three deep zones are stressed simultaneously. The single safety cannot help everywhere. Read him after the snap — wherever he commits, throw the opposite side. One receiver will always find the void for 9-plus yards."
          },
          {
            badge: "SITUATION IQ",
            situation: { down: "2ND & 4", field: "OWN 44", score: "UP 28-21", formation: "2x2" },
            defense: "cover3",
            question: "UP 7 LATE — COVER 3 PLAYING SOFT — WHAT IS THE RIGHT CALL?",
            hint: "The defense wants you to score fast. Do not give them what they want.",
            options: [
              "Check down to the back — get yards, stay in bounds, burn clock",
              "Four verticals — score fast and give them the ball back with time",
              "Go route — no safety help deep",
              "Deep crossing routes — attack the middle open field"
            ],
            correct: 0,
            explanation: "The check down wins this game. You are up 7. Get 4 yards, stay in bounds, burn clock. Four verticals might score — but an incomplete stops the clock and gives them the ball back with time. The correct play is not always the best football play. It is the play that serves the game situation. Clock management over yards."
          },
          {
            badge: "TRIPS READ",
            situation: { down: "2ND & 7", field: "OPP 45", score: "TIE 7-7", formation: "TRIPS RT" },
            defense: "cover3_trips",
            question: "TRIPS VS COVER 3 — SAFETY WENT TO THE FIELD — WHERE IS THE BALL?",
            hint: "The safety left. The boundary corner is now alone. What route exploits that?",
            options: [
              "Backside post — boundary corner is isolated with no safety help",
              "Smash to the boundary — corner cannot cover both",
              "Screen to trips — flood the underneath zones",
              "Seam to the field — attack where the safety went"
            ],
            correct: 0,
            explanation: "The backside post is the answer when trips pulls the safety to the field. Your single boundary receiver is in a true one-on-one against a corner with zero safety help over the top. A post route attacks exactly where the safety vacated. Win the release, stem vertical, and break inside. Big play."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "3RD & 6", field: "OPP 32", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3",
            question: "WHAT IS THE MOST COMMON QB MISTAKE AGAINST COVER 3?",
            hint: "Think about what most QBs do with their eyes.",
            options: [
              "Locking onto the primary and throwing the curl before the defender has widened",
              "Throwing four verticals when the routes are not set",
              "Checking to a run when Cover 3 invites passing",
              "Throwing the flat when the corner has not committed"
            ],
            correct: 0,
            explanation: "The most common Cover 3 mistake is locking onto the primary read and throwing the curl before the defender has actually widened. QBs read the coverage, not the defender. If you throw the curl before the hook-curl LB commits to the flat, you throw directly to him. Read the defender. Throw where he is not."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // COVER 1
    // ══════════════════════════════════════════════════════════
    {
      id: "cover1",
      name: "Cover 1",
      family: "Man",
      tier: "free",
      filmKey: "Cover 1",
      overview: "Man coverage underneath with one free safety deep. Every receiver is covered man-to-man. Motion confirms it.",
      levels: {

        1: [
          {
            badge: "MAN VS ZONE",
            situation: { down: "3RD & 5", field: "OPP 33", score: "TIE 0-0", formation: "2x2" },
            defense: "cover1",
            question: "HOW DO YOU CONFIRM THIS IS MAN COVERAGE BEFORE THE SNAP?",
            hint: "There is one tool that costs nothing and tells you everything.",
            options: [
              "Motion a receiver — if a defender follows him across the formation it is man coverage",
              "Check safety depth — single high always means man",
              "Watch the corners at the snap — if they bail it is zone",
              "Count the linebackers in the box"
            ],
            correct: 0,
            explanation: "Motion is the QB's truth serum. Shift any receiver across the formation before the snap. If a defender follows him — it is man coverage. If no one follows and the defense bumps or rotates — it is zone. Elite QBs do this on almost every play at every level. It costs nothing and tells you everything about what is coming."
          },
          {
            badge: "SAFETY READ",
            situation: { down: "2ND & 6", field: "OPP 40", score: "TIE 0-0", formation: "2x2" },
            defense: "cover1",
            question: "WHAT IS THE FREE SAFETY'S ROLE IN COVER 1?",
            hint: "He is the only defender without a man assignment.",
            options: [
              "He has no man assignment — he is free to help over the top wherever needed",
              "He covers the deep middle zone like in Cover 3",
              "He locks up the tight end man-to-man",
              "He is the designated blitzer from the boundary"
            ],
            correct: 0,
            explanation: "The free safety in Cover 1 has no man assignment. He is free to help over the top on any vertical route. This is the insurance policy that separates Cover 1 from Cover 0. Beat the free safety and it is a touchdown. This is why deep shots versus Cover 1 work when you have the right matchup — but the free safety must be accounted for."
          },
          {
            badge: "COVERAGE ID",
            situation: { down: "1ST & 10", field: "OWN 30", score: "TIE 7-7", formation: "2x2" },
            defense: "cover1_press",
            question: "CORNERS ARE PRESSED. ONE SAFETY IS HIGH. IS THIS COVER 0 OR COVER 1?",
            hint: "Both have pressed corners. What is the one thing that separates them?",
            options: [
              "Cover 1 — one safety stayed deep. Cover 0 has no safety deep.",
              "Cover 0 — pressed corners always mean zero safety help",
              "Cover 1 — the linebackers are in zone drops",
              "Cover 0 — the defense is showing more rushers than blockers"
            ],
            correct: 0,
            explanation: "The safety is the only thing that separates Cover 1 from Cover 0. Both show pressed man corners. Both show man alignment underneath. The difference is one safety staying deep in Cover 1. When the safety stays high, there is help over the top. When both safeties are in the box — that is Cover 0 with no help."
          }
        ],

        2: [
          {
            badge: "RESPONSIBILITY",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 0-0", formation: "2x2" },
            defense: "cover1",
            question: "WHY IS COVER 1 CALLED MAN FREE?",
            hint: "Man below. What is free above?",
            options: [
              "Man coverage underneath with one free safety who has no assignment — he helps wherever needed",
              "The corners are free to play any technique they choose",
              "The linebackers are free to blitz without coverage responsibility",
              "The defense is free to rotate the safety to either side"
            ],
            correct: 0,
            explanation: "Man Free means man coverage underneath with one free safety over the top. The safety is the free player — he has no assigned receiver and can help wherever the coverage needs him. This is why Cover 1 is more aggressive than Cover 3 against the run while still protecting against deep balls. One defender roams free as the safety net."
          },
          {
            badge: "CONFLICT",
            situation: { down: "2ND & 6", field: "OPP 40", score: "TIE 14-14", formation: "TRIPS RT" },
            defense: "cover1",
            question: "TRIPS VS COVER 1 — WHAT CREATES THE CONFLICT?",
            hint: "Three receivers compressed together. Man defenders have to navigate what?",
            options: [
              "Traffic — man defenders must navigate through each other on pick and rub routes",
              "Speed — three fast receivers overwhelm the corners",
              "Alignment — defense cannot align properly to trips",
              "Depth — three receivers force safety to choose"
            ],
            correct: 0,
            explanation: "Man coverage struggles against trips and bunch because defenders must physically navigate through each other when receivers create traffic. A pick route where one receiver crosses through another's path creates legal obstruction. The defender runs into a wall. This is why the mesh concept and rub routes are the primary answers against man coverage."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "3RD & 4", field: "OPP 22", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover1_press",
            question: "WHY IS THE SLANT THE ANSWER AGAINST OUTSIDE PRESS COVERAGE?",
            hint: "The corner is pressing from outside leverage. His inside shoulder is exposed.",
            options: [
              "The slant attacks the inside shoulder immediately before the corner can recover his position",
              "The slant is fast and beats any coverage",
              "The slant goes away from the free safety",
              "The slant creates a natural pick against the corner"
            ],
            correct: 0,
            explanation: "Outside press leverage means the corner is aligned outside the receiver's shoulder. His goal is to jam and re-route the receiver outside. The slant goes the opposite direction — inside — attacking the shoulder the corner exposed. Before he can recover, the receiver is past him. Get it out in 1.5 seconds. The slant wins this battle every time."
          },
          {
            badge: "ROBBER",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 7-7", formation: "2x2" },
            defense: "cover1_robber",
            question: "WHAT IS COVER 1 ROBBER AND WHY DOES IT CHANGE YOUR ATTACK?",
            hint: "One linebacker is not matched on a receiver. Where is he and what is he doing?",
            options: [
              "The Mike LB drops into a short middle zone to steal crossers and slants — making inside throws dangerous",
              "The free safety rolls down to become a second safety in the box",
              "The boundary corner rotates inside to rob outside routes",
              "The nickel drops into a deep zone instead of covering the slot"
            ],
            correct: 0,
            explanation: "Cover 1 Robber puts the Mike linebacker in a short middle zone instead of matching a back. He sits at 6-10 yards and steals crossers, slants, and digs. He cheated away from his run fit to play zone. That means a gap opened in the run game and inside throws are trapped. Attack the perimeter where he cannot reach."
          }
        ],

        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "3RD & 5", field: "OPP 33", score: "TIE 0-0", formation: "2x2" },
            defense: "cover1",
            question: "COVER 1 — MOTION CONFIRMS MAN. WHAT IS YOUR FIRST READ?",
            hint: "Man coverage is a matchup game. What do you look for first?",
            options: [
              "Find the best offensive matchup pre-snap and attack it immediately",
              "Look for the free safety and throw away from him",
              "Run four verticals to stress the single safety",
              "Check to a run because man coverage invites it"
            ],
            correct: 0,
            explanation: "Man coverage is a matchup game. Use motion to confirm man before the snap, then identify the best matchup: your fastest receiver on their slowest corner, a slot receiver on a linebacker, a height mismatch. Find it pre-snap. Communicate it. Attack it with a route that gives your receiver space. Take the best bet."
          },
          {
            badge: "PLAY CALL",
            situation: { down: "2ND & 6", field: "OPP 40", score: "TIE 14-14", formation: "TRIPS RT" },
            defense: "cover1",
            question: "TRIPS VS COVER 1 — WHAT IS THE BEST ATTACK?",
            hint: "Man defenders navigate through traffic. Use that against them.",
            options: [
              "Rub routes — create natural picks in the compressed bunch to legally obstruct defenders",
              "Four verticals — stress the single free safety",
              "Quick outs — get the ball out before man coverage locks",
              "Motion the slot and throw where he was"
            ],
            correct: 0,
            explanation: "Rub routes are devastating against man coverage in trips. Receivers compressed together force man defenders to navigate around each other. A pick route where one receiver crosses through another's path creates legal obstruction. The mesh concept, the China concept, and switch releases are all built specifically to create this traffic against man coverage."
          },
          {
            badge: "ROBBER ANSWER",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 7-7", formation: "2x2" },
            defense: "cover1_robber",
            question: "COVER 1 ROBBER — HOW DO YOU PUNISH IT?",
            hint: "The Mike vacated his run gap to play zone. Where did he leave space?",
            options: [
              "Run the ball — the Mike vacated his gap, and attack the perimeter with screens and quick outs",
              "Throw inside immediately — he cannot be everywhere",
              "Attack the deep middle — he is only shallow",
              "Use four verticals to move the free safety"
            ],
            correct: 0,
            explanation: "The robber punishes himself if you recognize it. The Mike left his run fit — the cutback lane on 1st and 10 could be wide open. If you pass, attack the perimeter with quick outs and screens where the robber cannot reach from the middle of the field. Do not feed the robber the slants and crossers he is sitting there waiting for."
          },
          {
            badge: "PRESSURE ANSWER",
            situation: { down: "3RD & 2", field: "OPP 18", score: "DOWN 14-17", formation: "2x2" },
            defense: "cover1_press",
            question: "PRESS MAN — 3RD AND 2 IN THE RED ZONE — WHAT IS THE CALL?",
            hint: "You need 2 yards. Highest percentage route against outside press right now.",
            options: [
              "Quick slant — out in 1 second, attacks the inside shoulder, gets you 6 yards",
              "Go route — beat press with speed down the sideline",
              "Out route — fights directly into his outside press alignment",
              "Post — he has to run too far before you can throw it"
            ],
            correct: 0,
            explanation: "Quick slant on 3rd and 2. The corner is pressing from outside leverage. The slant is out in one second and attacks his inside shoulder before he can recover. You need 2 yards. On a good slant you get 6. Do not overthink short yardage against press man. Simple, reliable, high percentage."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "3RD & 8", field: "OPP 35", score: "DOWN 17-24", formation: "EMPTY" },
            defense: "cover1",
            question: "EMPTY VS COVER 1 — WHAT IS THE MOST COMMON QB MISTAKE?",
            hint: "Five receivers, man coverage. What do most QBs do wrong?",
            options: [
              "Holding the ball looking for the perfect throw instead of identifying the best matchup pre-snap",
              "Throwing too quickly before routes have developed",
              "Running when they should be throwing",
              "Checking to a run against man coverage"
            ],
            correct: 0,
            explanation: "The most common Cover 1 mistake in empty is holding the ball looking for the perfect play instead of identifying the best matchup before the snap and attacking it immediately. Man coverage is solved pre-snap. If you are still searching at the snap, you are already behind. Find the matchup. Confirm with motion. Attack it."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // COVER 0
    // ══════════════════════════════════════════════════════════
    {
      id: "cover0",
      name: "Cover 0",
      family: "Man",
      tier: "free",
      filmKey: "Cover 0",
      overview: "All-out man coverage with zero safety help. Every receiver covered man-to-man. Hot route must be identified before the snap.",
      levels: {

        1: [
          {
            badge: "COVERAGE ID",
            situation: { down: "3RD & 1", field: "OPP 3", score: "TIE 21-21", formation: "2x2" },
            defense: "cover0",
            question: "WHAT TELLS YOU THERE IS ZERO SAFETY HELP?",
            hint: "Look for where the safeties are — or where they are NOT.",
            options: [
              "Both safeties walked into the box — nobody is playing deep",
              "One safety is high and one is in the box",
              "Both safeties are showing blitz but will rotate back",
              "Corner depth tells you — not the safeties"
            ],
            correct: 0,
            explanation: "When both safeties walk into the box before the snap, there is zero help deep. Nobody is playing centerfield. Every DB is matched man-to-man with no help behind them. This is Cover 0. Count the rushers — if more men rush than you have blockers, you have a hot route situation and the ball must come out in under 1.5 seconds."
          },
          {
            badge: "HOT ROUTE",
            situation: { down: "2ND & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover0_dis",
            question: "THEY SHOWED TWO HIGH BUT BOTH SAFETIES WALKED DOWN LATE. WHAT IS IT?",
            hint: "Late safety movement in the final 2 seconds before the snap changes everything.",
            options: [
              "Disguised Cover 0 — they showed Cover 2 and gave you all-out blitz",
              "Still Cover 2 — safeties sometimes walk up and rotate back",
              "Cover 3 Buzz — one safety dropped and one stayed high",
              "Cover 4 — all four DBs deep"
            ],
            correct: 0,
            explanation: "When both safeties walk down late after showing two-high, they are running disguised Cover 0. They showed Cover 2 and gave you an all-out blitz with zero safety help. Elite QBs key on safety movement in the last 2 seconds before the snap specifically to catch these disguises. Watch the safeties all the way through the snap."
          },
          {
            badge: "COUNT THE BOX",
            situation: { down: "4TH & 1", field: "OPP 8", score: "DOWN 14-17", formation: "2x2" },
            defense: "cover0",
            question: "YOU COUNT MORE RUSHERS THAN BLOCKERS. WHAT MUST HAPPEN?",
            hint: "Math. More rushers than blockers means someone is unblocked.",
            options: [
              "A hot route must be identified and the ball thrown immediately at the snap",
              "Check to a run — they are loading the box for you",
              "Wait in the pocket and let routes develop deep",
              "Call a timeout and reset the protection"
            ],
            correct: 0,
            explanation: "When you count more rushers than blockers someone is coming free. This is not a read — it is math. The hot route must be identified before the snap and the ball thrown immediately. There is no waiting. There is no pocket. The ball leaves your hand in 1.2-1.5 seconds or you are taking a sack."
          }
        ],

        2: [
          {
            badge: "WHY DEFENSES RUN IT",
            situation: { down: "3RD & 1", field: "OPP 3", score: "TIE 21-21", formation: "2x2" },
            defense: "cover0",
            question: "WHY DOES A DEFENSE GAMBLE WITH COVER 0?",
            hint: "Zero safety help is a massive risk. What is the defense betting on?",
            options: [
              "They are betting the pressure gets to you before the hot route can develop",
              "They are betting their corners are better than your receivers",
              "They are betting you will check to a run",
              "They are betting you do not know the blitz is coming"
            ],
            correct: 0,
            explanation: "Cover 0 is a bet that pressure wins before the hot route can develop. The defense gives up all safety help in exchange for extra rushers. If you identify the hot pre-snap and throw it immediately, the defense loses that bet every time. If you hold the ball for even one second too long, they win. It is a timing game."
          },
          {
            badge: "RESPONSIBILITY",
            situation: { down: "2ND & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover0",
            question: "IN COVER 0, WHAT IS THE RUNNING BACK'S AUTOMATIC RESPONSIBILITY?",
            hint: "Every offense has a built-in answer. The RB is the key.",
            options: [
              "Release to the flat as an automatic hot route — angle or Texas route — the moment blitz shows",
              "Stay in and block the free rusher every play",
              "Run a deep route to stress the coverage",
              "Check with the QB and block based on the call"
            ],
            correct: 0,
            explanation: "The running back's angle or Texas route is the built-in hot route against any blitz. He releases to the flat automatically while everyone else runs their routes. The back is now one-on-one with a linebacker in open space — a guaranteed mismatch. This is not optional. Against Cover 0 the back in the flat is always an answer."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "4TH & 2", field: "OPP 12", score: "DOWN 14-17", formation: "2x2" },
            defense: "cover0",
            question: "WHAT IS THE FUNDAMENTAL WEAKNESS OF COVER 0?",
            hint: "No safety help means something specific about every receiver.",
            options: [
              "Every receiver is in a one-on-one with no help over the top — one missed tackle is a touchdown",
              "The flat zones are completely empty",
              "The defense has no run support",
              "The corners must play without any technique coaching"
            ],
            correct: 0,
            explanation: "Cover 0's fundamental weakness is that every receiver is in a one-on-one matchup with zero safety help. One defender missed and it is a touchdown. This is why Cover 0 is high risk — the reward is a sack or forced error, but the cost of a missed assignment is giving up a score. The QB's job is to find the one-on-one and win it immediately."
          },
          {
            badge: "CORNER BLITZ",
            situation: { down: "3RD & 5", field: "OPP 22", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover0_corner",
            question: "A CORNER IS BLITZING IN COVER 0. WHAT IS THE AUTOMATIC READ?",
            hint: "When a corner blitzes, think carefully about what happens to his receiver.",
            options: [
              "The blitzing corner's receiver — he is either uncovered or in a late rotation",
              "The opposite side — away from the blitz pressure",
              "The running back check-down — always safe",
              "The tight end seam — blitzes open the middle"
            ],
            correct: 0,
            explanation: "The blitzing corner's receiver is the automatic read. That corner is running toward you at the snap — his receiver is either completely uncovered or being covered by a safety scrambling out of position. Set your eyes and feet toward that side before the snap. At the snap the ball goes there immediately. When executed correctly it is a guaranteed completion."
          }
        ],

        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "3RD & 1", field: "OPP 3", score: "TIE 21-21", formation: "2x2" },
            defense: "cover0",
            question: "COVER 0 — MORE RUSHERS THAN BLOCKERS — WHAT IS THE PROCESS?",
            hint: "This is solved entirely before the snap. Walk through the steps.",
            options: [
              "Identify the hot receiver pre-snap, confirm at the snap, throw immediately in 1.2 seconds",
              "Take the snap, feel the pressure, then find the open receiver",
              "Identify the hot receiver, but wait to confirm coverage post-snap",
              "Use your legs — Cover 0 leaves scramble lanes open"
            ],
            correct: 0,
            explanation: "Cover 0 is solved before the snap. Step 1: identify the hot receiver based on who is blitzing. Step 2: confirm at the snap that the blitz is coming. Step 3: throw immediately. 1.2-1.5 seconds. No hesitation. If you are still thinking post-snap, you are already taking a sack. This is not a read. It is a pre-snap answer."
          },
          {
            badge: "PLAY CALL",
            situation: { down: "4TH & 2", field: "OPP 12", score: "DOWN 14-17", formation: "2x2" },
            defense: "cover0",
            question: "4TH AND 2 — GAME ON THE LINE — COVER 0 — WHAT IS THE CALL?",
            hint: "You need 2 yards. Not 20. What is the highest percentage throw?",
            options: [
              "Quick slant — out in 1 second, beats press, gets 6 yards on a clean throw",
              "Deep shot — no safety means free touchdown",
              "QB sneak — take the free yards",
              "Fade — no safety help means back of end zone is open"
            ],
            correct: 0,
            explanation: "Quick slant on 4th and 2. You need 2 yards — not a touchdown. The slant is out in one second, beats the inside leverage of pressed man, and gets you at least 5 yards on a clean throw. Do not force the deep shot just because there is no safety help. Two yards. Slant. Throw it. Move the chains."
          },
          {
            badge: "SITUATION IQ",
            situation: { down: "3RD & 3", field: "OWN 15", score: "TIE 10-10", formation: "2x2" },
            defense: "cover0",
            question: "OWN 15 — COVER 0 — NO SAFETY — DO YOU TAKE THE DEEP SHOT?",
            hint: "No safety means the go route is wide open. But where are you on the field?",
            options: [
              "No — quick screen or flat route first. A turnover here from your own 15 loses the game.",
              "Yes — no safety help means a free touchdown every time",
              "Yes — Cover 0 is always a deep shot situation",
              "No — check to a run because the box is loaded"
            ],
            correct: 0,
            explanation: "Situation IQ: Take the safe throw from your own 15 versus Cover 0. The deep shot is tempting because there is no safety. But a sack, pick, or fumble in your own end zone loses the game right now. The quick screen or flat route gets the ball out before pressure arrives, gains positive yards, and preserves the drive. Take your yards."
          },
          {
            badge: "REPLACE THE BLITZ",
            situation: { down: "2ND & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover0_dis",
            question: "CORNER BLITZES — WHERE DOES THE BALL GO?",
            hint: "He left his coverage assignment. Who did he just uncover?",
            options: [
              "His receiver — the corner blitz creates an automatic throw to the vacated coverage spot",
              "The opposite side — always throw away from pressure",
              "The running back — always the safe answer",
              "The seam — interior opens when corners blitz"
            ],
            correct: 0,
            explanation: "Replace the blitz: throw where the blitzer came from. The corner blitzing vacated his coverage assignment. His receiver is either uncovered or being covered late by a rotating safety. Pre-snap you identify this. At the snap you throw there immediately. The blitz created a free receiver. Take the free completion."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "3RD & 1", field: "OPP 5", score: "DOWN 21-24", formation: "2x2" },
            defense: "cover0",
            question: "COVER 0 GOAL LINE — WHAT IS THE MOST DANGEROUS QB MISTAKE?",
            hint: "Cover 0 puts panic in QBs. What is the worst reaction to that pressure?",
            options: [
              "Holding the ball and waiting for routes to develop — the pocket collapses in 1.5 seconds",
              "Throwing the hot route too quickly before confirming the blitz",
              "Checking to a run when Cover 0 invites the pass",
              "Using a timeout instead of executing the play"
            ],
            correct: 0,
            explanation: "Holding the ball against Cover 0 is the biggest mistake. Defenses call Cover 0 specifically because they know QBs sometimes freeze when they see all-out pressure. The pocket is gone in 1.5 seconds. If you are waiting for routes to develop against Cover 0 you are already taking a sack. The answer was identified before the snap. Trust it."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // TAMPA 2
    // ══════════════════════════════════════════════════════════
    {
      id: "tampa2",
      name: "Tampa 2",
      family: "Zone",
      tier: "pro",
      filmKey: "Tampa 2",
      overview: "Looks like Cover 2 pre-snap. At the snap the Mike linebacker drops deep into the seam. Three-deep structure with zone underneath.",
      levels: {

        1: [
          {
            badge: "DISGUISE READ",
            situation: { down: "2ND & 8", field: "OPP 42", score: "TIE 0-0", formation: "2x2" },
            defense: "tampa2",
            question: "THIS LOOKS LIKE COVER 2. WHAT HAPPENS AT THE SNAP THAT REVEALS TAMPA 2?",
            hint: "Everything looks like Cover 2 pre-snap. Watch what one specific defender does at the snap.",
            options: [
              "The Mike linebacker drops deep into the seam between the two safeties",
              "The free safety rotates to the boundary side",
              "The corners bail deep instead of attacking the flat",
              "Both safeties widen to protect the sidelines"
            ],
            correct: 0,
            explanation: "Tampa 2 reveals itself post-snap when the Mike linebacker drops 15-20 yards deep into the middle seam. Pre-snap it looks identical to Cover 2 — two high safeties, corners off at 7 yards. At the snap the Mike vacates his gap and runs into the seam. He is eliminating the window that four verticals normally attacks against Cover 2."
          },
          {
            badge: "MIKE READ",
            situation: { down: "3RD & 6", field: "OPP 28", score: "DOWN 7-14", formation: "2x2" },
            defense: "tampa2",
            question: "POST-SNAP — YOU SEE THE MIKE RUN DEEP. WHAT IS NOW CLOSED?",
            hint: "The Mike just ran into a specific zone. What route goes directly into where he is?",
            options: [
              "The seam route — Mike is sitting in that window between the two safeties",
              "The corner route — Mike covers the outside windows",
              "The flat — Mike dropped and covered the flat zones",
              "The deep outside — Mike took the safety's responsibility"
            ],
            correct: 0,
            explanation: "When the Mike drops deep into the seam, the seam route is dead. He is sitting exactly in the throwing lane between the two safeties. Throwing the seam against Tampa 2 throws it directly to the Mike. This is the most common Tampa 2 mistake — assuming Cover 2 rules and throwing the seam into the lurking linebacker."
          },
          {
            badge: "COVERAGE ID",
            situation: { down: "2ND & 5", field: "OPP 33", score: "UP 21-17", formation: "EMPTY" },
            defense: "tampa2",
            question: "EMPTY FORMATION — TWO HIGH — MIKE DROPPED AT THE SNAP — WHAT IS IT?",
            hint: "Two-high pre-snap but the Mike moved at the snap. What coverage does that confirm?",
            options: [
              "Tampa 2 — the Mike drop into the seam is the post-snap confirmation",
              "Cover 4 — all four defenders are now deep",
              "Cover 3 Buzz — a safety rotated down",
              "Still Cover 2 — the Mike sometimes drops as a coverage check"
            ],
            correct: 0,
            explanation: "The Mike dropping deep into the seam at the snap confirms Tampa 2. It is the only coverage where this happens. Two-high pre-snap plus Mike drop post-snap equals Tampa 2 every time. Once you see the Mike run, the seam is closed and you must reset to the Tampa 2 answer: the corner route outside."
          }
        ],

        2: [
          {
            badge: "WHY DEFENSES RUN IT",
            situation: { down: "2ND & 8", field: "OPP 42", score: "TIE 0-0", formation: "2x2" },
            defense: "tampa2",
            question: "WHY DOES A DEFENSE RUN TAMPA 2 INSTEAD OF COVER 2?",
            hint: "What is the weakness of standard Cover 2 that Tampa 2 is designed to fix?",
            options: [
              "Tampa 2 eliminates the seam weakness of Cover 2 by adding the Mike as a third deep defender",
              "Tampa 2 is faster to execute than Cover 2",
              "Tampa 2 is stronger against the run than Cover 2",
              "Tampa 2 allows corners to play more aggressively"
            ],
            correct: 0,
            explanation: "Tampa 2 was designed specifically to fix the seam weakness of standard Cover 2. In Cover 2 the seam between the two safeties is the primary void. Tampa 2 adds the Mike linebacker as a third deep defender in that exact window. The price is that the Mike vacates the hook zone underneath — creating a new window in the intermediate middle."
          },
          {
            badge: "CONFLICT",
            situation: { down: "3RD & 6", field: "OPP 28", score: "DOWN 7-14", formation: "2x2" },
            defense: "tampa2",
            question: "TAMPA 2 — THE MIKE DROPS — WHAT OPENS UP?",
            hint: "The Mike closed the seam. The corners still own the flats. What is between those two zones?",
            options: [
              "The corner-flag route window — between the corner's flat responsibility and the safety's deep half",
              "The seam — the Mike cannot cover both halves of the middle",
              "The flat — corners are now helping the Mike deep",
              "The deep post — both safeties must go with the Mike"
            ],
            correct: 0,
            explanation: "The Mike closing the seam opens the corner-flag window. The corners still own the flats underneath. The safeties own their deep halves. Between the corner's flat responsibility and the safety's deep half there is a window on a 15-yard corner route. The Mike taking the seam created that window outside him. The corner route is the Tampa 2 answer."
          },
          {
            badge: "ROUTE DISTRIBUTION",
            situation: { down: "2ND & 5", field: "OPP 33", score: "UP 21-17", formation: "EMPTY" },
            defense: "tampa2",
            question: "IN TAMPA 2, WHAT DOES #2 GOING VERTICAL DO TO THE MIKE?",
            hint: "The Mike reads #2. If #2 runs a seam, what must the Mike do?",
            options: [
              "#2 vertical forces the Mike to drop even deeper to carry him — seam closes harder",
              "#2 vertical pulls the Mike to one side and opens the other seam",
              "#2 vertical causes the Mike to blitz instead of dropping",
              "#2 vertical has no effect on the Mike in Tampa 2"
            ],
            correct: 0,
            explanation: "In Tampa 2 the Mike reads #2. If #2 runs a vertical seam route, the Mike must carry him deep — the seam closes completely. But that means the underneath hook zone is now wide open behind the Mike. The tension in Tampa 2 is between the deep Mike and the open underneath middle. Confirm the Mike moved, then attack outside."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "3RD & 5", field: "OPP 25", score: "TIE 0-0", formation: "2x2" },
            defense: "tampa2",
            question: "WHAT DOES TAMPA 2 SACRIFICE TO PROTECT THE SEAM?",
            hint: "The Mike dropped deep. What responsibility did he leave behind?",
            options: [
              "The hook zone underneath — the Mike vacated it to drop, creating an intermediate middle window",
              "The flat zones — corners had to help when the Mike dropped",
              "The deep outside — safeties had to rotate to cover the Mike's drop",
              "The run game — all defenders went deep with the Mike"
            ],
            correct: 0,
            explanation: "Tampa 2 trades the hook zone for seam protection. The Mike dropping deep creates an open window in the intermediate middle underneath where he was. Checkdowns, shallow crosses, and stick routes find this void. The defense protected the seam and gave up the hook zone. Attack where the Mike was, not where he went."
          }
        ],

        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "2ND & 8", field: "OPP 42", score: "TIE 0-0", formation: "2x2" },
            defense: "tampa2",
            question: "TAMPA 2 — MIKE DROPS — WHAT IS THE DECISION TREE?",
            hint: "The Mike ran. The seam is closed. The corners have the flat. Where is the window?",
            options: [
              "Corner-flag route outside — between the corner's flat and the safety's deep half",
              "Seam route — the Mike cannot cover the entire middle",
              "Flat route — corners abandoned their zones when Mike dropped",
              "Four verticals — stress all three deep defenders"
            ],
            correct: 0,
            explanation: "Tampa 2 decision tree: confirm Mike dropped, seam is closed, throw the corner-flag route. The receiver stems vertical, the corner squats for the flat, the safety is deep, and the window opens between them at 15 yards on a corner break. This is a precision throw — outside the Mike, inside the safety, before the corner can recover."
          },
          {
            badge: "PLAY CALL",
            situation: { down: "2ND & 5", field: "OPP 33", score: "UP 21-17", formation: "EMPTY" },
            defense: "tampa2",
            question: "EMPTY VS TAMPA 2 — MIKE IS IN THE SEAM — WHAT IS THE CALL?",
            hint: "Five receivers. Mike owns the seam. Corners own the flats. Find the window.",
            options: [
              "Corner-flag route at 15 yards — the only clean window Tampa 2 leaves",
              "Seam route — challenge the Mike directly",
              "Quick flat to the back — oh wait, empty means no back",
              "Post route — split between the Mike and the safety"
            ],
            correct: 0,
            explanation: "Corner-flag from empty against Tampa 2. The Mike owns the seam. Corners own the flats. The window is on a 15-yard corner route between those two zones. The receiver stems vertical to threaten deep, breaks the corner, and hits the gap outside the Mike and inside the safety. This is a precision throw that requires the QB to be on time."
          },
          {
            badge: "POST-SNAP RESET",
            situation: { down: "3RD & 6", field: "OPP 28", score: "DOWN 7-14", formation: "2x2" },
            defense: "tampa2",
            question: "YOU READ COVER 2 PRE-SNAP AND SET FOR THE SEAM. MIKE DROPS AT SNAP. WHAT NOW?",
            hint: "Post-snap confirmation overrides pre-snap reads. Reset immediately.",
            options: [
              "Reset immediately to the corner-flag route — the seam is now closed by the Mike",
              "Throw the seam anyway — you were already committed",
              "Scramble — you lost your read",
              "Check down immediately — no time to reset"
            ],
            correct: 0,
            explanation: "Post-snap confirmation is a skill. If you were set for the Cover 2 seam and the Mike drops at the snap revealing Tampa 2, reset immediately to the corner-flag route. Elite QBs feel the coverage change and adjust without panic. This is why knowing both Cover 2 and Tampa 2 answers matters — pre-snap sets the plan, post-snap confirms or changes it."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "2ND & 7", field: "OPP 38", score: "TIE 0-0", formation: "2x2" },
            defense: "tampa2",
            question: "WHAT IS THE MOST DANGEROUS TAMPA 2 MISTAKE?",
            hint: "It looks exactly like Cover 2 pre-snap. What do most QBs do?",
            options: [
              "Throwing the seam assuming Cover 2 rules — throwing directly into the lurking Mike",
              "Throwing the corner route when the safety is underneath",
              "Running the ball when the pass game is open",
              "Throwing too quickly before the Mike reveals himself"
            ],
            correct: 0,
            explanation: "Throwing the seam assuming Cover 2 rules is the most dangerous Tampa 2 mistake. Tampa 2 looks identical to Cover 2 pre-snap. QBs who identify two-high and immediately throw the seam throw it directly to the Mike linebacker sitting in that window. Do not throw the seam until you confirm the Mike did NOT drop. Confirm first."
          },
          {
            badge: "SITUATION IQ",
            situation: { down: "3RD & 4", field: "OPP 18", score: "TIE 17-17", formation: "2x2" },
            defense: "tampa2",
            question: "TAMPA 2 RED ZONE — MIKE IS DEEP — WHAT IS OPEN UNDERNEATH?",
            hint: "The Mike vacated the hook zone to go deep. The red zone compresses space.",
            options: [
              "The hook zone underneath — the Mike left it, stick and flat routes find it",
              "The back pylon fade — Tampa 2 always leaves this open",
              "The seam — the Mike cannot cover the entire middle seam",
              "The post — both safeties are occupied by the corner routes"
            ],
            correct: 0,
            explanation: "In the red zone against Tampa 2, the hook zone underneath is available when the Mike drops deep. The compressed space of the red zone means shorter throws win. The Mike left the hook zone to protect the seam — stick routes, flat routes, and shallow crossers find that void. Take the underneath completion and score."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // COVER 4
    // ══════════════════════════════════════════════════════════
    {
      id: "cover4",
      name: "Cover 4",
      family: "Zone",
      tier: "pro",
      filmKey: "Cover 4",
      overview: "Four-deep coverage. Both corners and both safeties each own a deep quarter. Soft underneath. Strong against vertical passing.",
      levels: {

        1: [
          {
            badge: "CORNER READ",
            situation: { down: "1ST & 10", field: "OWN 32", score: "TIE 0-0", formation: "2x2" },
            defense: "cover4",
            question: "TWO HIGH — HOW DO YOU KNOW THIS IS COVER 4 AND NOT COVER 2?",
            hint: "Both coverages show two safeties high. The corners tell the whole story.",
            options: [
              "Cover 4 corners sit deep at 10+ yards — they do NOT squeeze to the flat at the snap",
              "Cover 4 always has one safety in the box — Cover 2 keeps both high",
              "Cover 4 corners press at the line — Cover 2 corners play off",
              "Cover 4 shows man coverage underneath — Cover 2 plays zone"
            ],
            correct: 0,
            explanation: "The corners separate Cover 4 from Cover 2. In Cover 2 the corners play off at 7 yards but drive downhill to the flat at the snap — they own the flat zone. In Cover 4 the corners are sitting deep in their quarter at 10-plus yards, backpedaling at the snap rather than attacking underneath. Cover 4 corners are deep. Cover 2 corners own the flat."
          },
          {
            badge: "SAFETY READ",
            situation: { down: "2ND & 8", field: "OPP 38", score: "DOWN 3-10", formation: "2x2" },
            defense: "cover4",
            question: "IN COVER 4, WHAT IS THE SAFETY READING?",
            hint: "Safeties in Cover 4 have a specific key that changes their responsibility.",
            options: [
              "He reads #2 receiver — if #2 goes vertical he carries him, if #2 goes out he may rob #1",
              "He reads the quarterback and reacts to his eyes",
              "He reads the running back and fits the run gap",
              "He reads #1 receiver and mirrors his route"
            ],
            correct: 0,
            explanation: "In Cover 4, the safety reads #2. This is the most important rule in quarters coverage. If #2 goes vertical the safety carries him. If #2 goes out the safety may vacate deep to rob #1's inside breaking route. If #2 blocks the safety can fit the run. This is why #2 controls the defense more than any other receiver in Cover 4."
          },
          {
            badge: "COVERAGE ID",
            situation: { down: "3RD & 7", field: "OPP 30", score: "TIE 7-7", formation: "2x2" },
            defense: "cover4",
            question: "WHAT DOES COVER 4 LOOK LIKE PRE-SNAP?",
            hint: "Count the deep defenders. Where are the corners?",
            options: [
              "Two high safeties plus corners sitting at 10+ yards — four defenders in a deep shell",
              "Two high safeties with corners at 7 yards driving to the flat",
              "One high safety with corners bailing to their thirds",
              "Both safeties walked down with corners pressed at the line"
            ],
            correct: 0,
            explanation: "Cover 4 shows four defenders in a deep shell pre-snap: both safeties high and both corners sitting at 10-plus yards. The corners are NOT driving to the flat like Cover 2 and NOT bailing like Cover 3. They are deep in their quarter. Four defenders all sitting deep is the Cover 4 picture."
          }
        ],

        2: [
          {
            badge: "RESPONSIBILITY",
            situation: { down: "1ST & 10", field: "OWN 32", score: "TIE 0-0", formation: "2x2" },
            defense: "cover4",
            question: "IN COVER 4 WHAT IS THE CORNER RESPONSIBLE FOR?",
            hint: "He is deep at 10+ yards. He is NOT responsible for the flat.",
            options: [
              "He owns a deep quarter of the field and is NOT responsible for the flat zone",
              "He owns the flat zone and drives on short routes at the snap",
              "He plays man coverage on the outside receiver",
              "He and the safety share the deep half of the field"
            ],
            correct: 0,
            explanation: "In Cover 4 the corner owns a deep quarter. He is NOT responsible for the flat. This is the critical difference from Cover 2. The corner is backpedaling to his quarter, not driving to the flat. This means the flat zones are soft in Cover 4 — the linebackers have to cover them while also handling run fits. Quick screens and flats are available."
          },
          {
            badge: "WHY DEFENSES RUN IT",
            situation: { down: "2ND & 8", field: "OPP 38", score: "DOWN 3-10", formation: "2x2" },
            defense: "cover4",
            question: "WHY WOULD A DEFENSE RUN COVER 4 AGAINST A VERTICAL PASSING TEAM?",
            hint: "Four defenders deep. What does that prevent?",
            options: [
              "Four defenders all handle deep routes — it is nearly impossible to throw over four deep defenders",
              "Cover 4 is stronger against the run than other coverages",
              "Cover 4 eliminates all underneath throws",
              "Cover 4 allows more blitz packages than other coverages"
            ],
            correct: 0,
            explanation: "Cover 4 puts four defenders deep specifically to handle vertical passing teams. Four receivers running go routes equals four defenders. The defense concedes the underneath and run game in exchange for preventing the explosive deep ball. Against teams that live on four verticals and deep shots, Cover 4 forces everything underneath."
          },
          {
            badge: "CONFLICT",
            situation: { down: "3RD & 7", field: "OPP 30", score: "TIE 7-7", formation: "2x2" },
            defense: "cover4",
            question: "COVER 4 — #2 RUNS AN OUT ROUTE — WHAT DOES THE SAFETY DO?",
            hint: "Safety reads #2. #2 went outside. What is the safety now free to do?",
            options: [
              "Safety may vacate the deep quarter and look to rob #1's inside breaking route",
              "Safety stays in his quarter regardless of #2",
              "Safety rotates to help the corner on #2's out route",
              "Safety drops deeper to protect against the deep ball"
            ],
            correct: 0,
            explanation: "When #2 goes out, the safety may rob #1. This is the match rule in Cover 4: safety reads #2, and if #2 releases outside shallowly, the safety can vacate deep and look for #1's post or inside breaking route. This is why #2 out plus #1 post is such a dangerous concept against Cover 4 — #2 gets the safety to jump, then #1 goes over him."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "1ST & 10", field: "OWN 40", score: "UP 14-7", formation: "2x2" },
            defense: "cover4",
            question: "WHAT DOES COVER 4 SURRENDER TO PROTECT DEEP?",
            hint: "Four defenders committed deep means something underneath is light.",
            options: [
              "The run game and underneath passing — four defenders going deep leaves the flat and run fits light",
              "The deep seam — four defenders cannot cover all four quarters",
              "The boundary side — safeties cannot reach the boundary in time",
              "The red zone — Cover 4 breaks down inside the 20"
            ],
            correct: 0,
            explanation: "Cover 4 surrenders the run game and underneath passing to protect deep. With four defenders committed to their deep quarters, the flat zones, run fits, and intermediate routes are soft. This is the tradeoff the defense makes. Run the football, work quick screens, and attack the curl-flat area. Force them to come out of their four-deep shell."
          }
        ],

        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "3RD & 7", field: "OPP 30", score: "TIE 7-7", formation: "2x2" },
            defense: "cover4",
            question: "COVER 4 — CORNER SITTING DEEP AT 12 YARDS — WHERE IS THE BALL?",
            hint: "The corner is deep. What route exploits a corner sitting that far off?",
            options: [
              "Comeback at 12 yards — stem vertical, make him run, break back into the space he vacated",
              "Go route — beat him over the top with speed",
              "Quick out at 5 yards — get it out before he can drive",
              "Slant — attack his inside leverage immediately"
            ],
            correct: 0,
            explanation: "Cover 4 decision tree: IF the corner is sitting deep, THROW the comeback. The receiver stems vertically to make the corner run deep, then breaks back at 12 yards. The corner is now going the wrong direction. The safety is locked into his quarter. The comeback window opens cleanly. Make deep defenders run backward, then punish them with the break."
          },
          {
            badge: "PLAY CALL",
            situation: { down: "2ND & 8", field: "OPP 38", score: "DOWN 3-10", formation: "2x2" },
            defense: "cover4",
            question: "COVER 4 — WHAT IS THE HIGHEST PERCENTAGE PLAY CALL?",
            hint: "Four defenders deep. What is left soft?",
            options: [
              "Attack the flat and run game — Cover 4 concedes underneath to protect deep",
              "Four verticals — stress all four quarters simultaneously",
              "Deep crossing routes — safeties cannot help in the middle",
              "Fade routes — corners are giving deep cushion"
            ],
            correct: 0,
            explanation: "Cover 4 invites the underneath attack. Quick screens, flat routes, quick runs, and stick concepts are the answer. Force the defense to come out of their four-deep shell. Once they start driving on the short game, the deeper routes open up. Do not force four verticals into four deep defenders when they are giving you free yards underneath."
          },
          {
            badge: "EXPLOIT #2",
            situation: { down: "2ND & 6", field: "OPP 35", score: "TIE 14-14", formation: "2x2" },
            defense: "cover4",
            question: "COVER 4 — #2 RUNS OUT — WHAT HAPPENS AND WHERE IS THE BALL?",
            hint: "#2 going out pulls the safety. What does that open for #1?",
            options: [
              "#2 out pulls the safety to rob — throw #1 on a post into the vacated deep area",
              "#2 out means throw to #2 immediately on the out route",
              "#2 out has no effect — safety stays in his quarter",
              "#2 out pulls the corner — throw #1 on a deep fade"
            ],
            correct: 0,
            explanation: "This is the Cover 4 killer: #2 out plus #1 post. When #2 releases outside on an out route, the safety reads it and may vacate his deep quarter to rob. That creates a void in the deep area. If #1 is running a post into that vacated space, the ball goes there. The match rule the safety followed created the opening."
          },
          {
            badge: "SITUATION IQ",
            situation: { down: "1ST & 10", field: "OWN 40", score: "UP 14-7", formation: "TRIPS RT" },
            defense: "cover4",
            question: "UP 7 — COVER 4 GIVING SOFT UNDERNEATH — WHAT IS THE CALL?",
            hint: "You are winning. Cover 4 is light against the run. What does the situation demand?",
            options: [
              "Run the ball — Cover 4 invites it, control the clock and protect the lead",
              "Attack the seam — the safety cannot cover everything",
              "Four verticals — attack while the coverage is spread deep",
              "Screen pass — get the ball to a playmaker in space"
            ],
            correct: 0,
            explanation: "Run the football against Cover 4 when you are winning. Four defenders in deep zones means run fits are light. You are up 7 and clock control wins this game. Establish the run on 1st and 10, force them to use their timeouts, and make them come out of the four-deep shell. This is how you protect a lead."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "3RD & 8", field: "OPP 35", score: "TIE 0-0", formation: "2x2" },
            defense: "cover4",
            question: "WHAT IS THE MOST COMMON MISTAKE AGAINST COVER 4?",
            hint: "Four defenders deep. QBs often misread what happens when #2 goes vertical.",
            options: [
              "Forcing vertical routes into bracket coverage because defenders carry #2 vertical into match",
              "Throwing underneath too quickly without reading the coverage",
              "Running the ball when the pass game is open",
              "Not identifying the corner depth before the snap"
            ],
            correct: 0,
            explanation: "The most common Cover 4 mistake is forcing vertical routes when #2 goes vertical and triggers the safety to carry him — the coverage converts from zone spacing to man-like coverage. QBs who see two-high assume zone space and throw verticals but the safety just matched the route. Read what #2 does to the safety before committing to a vertical route."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // COVER 3 BUZZ
    // ══════════════════════════════════════════════════════════
    {
      id: "cover3buzz",
      name: "Cover 3 Buzz",
      family: "Zone",
      tier: "pro",
      filmKey: "Cover 3 Buzz",
      overview: "Disguises as two-high pre-snap. At the snap one safety buzzes down into the hook zone. Single safety covers the deep middle.",
      levels: {

        1: [
          {
            badge: "DISGUISE READ",
            situation: { down: "3RD & 6", field: "OPP 35", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover3buzz",
            question: "THIS SHOWED TWO HIGH PRE-SNAP. POST-SNAP A SAFETY DROPPED DOWN. WHAT IS IT?",
            hint: "One safety moved down at the snap. What coverage does that create?",
            options: [
              "Cover 3 Buzz — one safety rotated down into the hook zone, single safety remains deep",
              "Tampa 2 — the Mike linebacker dropped deep",
              "Cover 0 — both safeties committed to the box",
              "Still Cover 2 — safeties sometimes buzz and return"
            ],
            correct: 0,
            explanation: "Cover 3 Buzz reveals itself post-snap when one safety rotates down into the hook or curl zone. Pre-snap it showed two-high but at the snap one safety buzzed down. Now there is a single safety covering the entire deep middle — more ground than in standard Cover 3. The buzz safety is in the hook zone, the post safety is alone deep."
          },
          {
            badge: "COVERAGE ID",
            situation: { down: "2ND & 7", field: "OPP 42", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3buzz",
            question: "POST-SNAP — BUZZ SAFETY IS IN THE HOOK ZONE — WHAT STRUCTURE IS THIS?",
            hint: "One safety deep, one safety down, corners in their thirds. Count the deep defenders.",
            options: [
              "Three-deep structure — corners have their thirds, one safety has the deep middle",
              "Two-deep structure — both safeties split their halves",
              "Four-deep structure — all four DBs are playing deep",
              "Zero-deep structure — no one is playing deep"
            ],
            correct: 0,
            explanation: "Cover 3 Buzz creates a three-deep structure post-snap: two corners in their deep thirds and one safety in the deep middle. The buzz safety is underneath in the hook zone, not deep. This is why the single post safety is now covering more of the field than in standard Cover 3 — he has no safety partner helping him."
          },
          {
            badge: "SOLO SAFETY",
            situation: { down: "3RD & 8", field: "OWN 40", score: "DOWN 10-17", formation: "EMPTY" },
            defense: "cover3buzz",
            question: "THE BUZZ SAFETY DROPPED. NOW ONE SAFETY IS ALONE DEEP. WHAT DOES THAT MEAN?",
            hint: "Standard Cover 3 has the safety helped by a second safety. Now he is alone. What changed?",
            options: [
              "The solo safety must cover more ground — verticals and post routes stress him more than standard Cover 3",
              "The solo safety is less stressed because the buzz safety is helping underneath",
              "The solo safety has the same responsibility as in standard Cover 3",
              "The solo safety becomes a run support player"
            ],
            correct: 0,
            explanation: "When one safety buzzes down, the remaining safety over the top must cover more ground alone. In standard Cover 3 he had implicit help from the second safety. Now he is truly solo. That expanded responsibility is the weakness — vertical routes and post routes stress him more than in standard Cover 3 because there is no one to help."
          }
        ],

        2: [
          {
            badge: "WHY DEFENSES RUN IT",
            situation: { down: "2ND & 7", field: "OPP 42", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3buzz",
            question: "WHY DOES A DEFENSE RUN COVER 3 BUZZ INSTEAD OF STANDARD COVER 3?",
            hint: "The buzz safety goes to the hook zone. What does that buy the defense?",
            options: [
              "A fifth underneath defender to steal crossers and digs while disguising as two-high",
              "A third deep defender to prevent deep shots",
              "An extra blitzer to create more pressure",
              "Better run support than standard Cover 3"
            ],
            correct: 0,
            explanation: "Cover 3 Buzz adds a fifth underneath defender — the buzz safety — to steal crossers, digs, and intermediate routes. It also disguises as two-high pre-snap, which can fool QBs expecting Cover 2 or Cover 4. The defense gets five underneath defenders to steal throws while maintaining a three-deep structure. The tradeoff is the solo safety covering more ground."
          },
          {
            badge: "CONFLICT",
            situation: { down: "3RD & 6", field: "OPP 35", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover3buzz",
            question: "COVER 3 BUZZ — WHERE IS THE CONFLICT CREATED?",
            hint: "The buzz safety dropped inside. What opened outside him?",
            options: [
              "The outside breaking routes — buzz safety dropped inside, leaving outside windows open",
              "The inside crossing routes — buzz safety cannot cover them all",
              "The flat zones — buzz safety absorbed the flat",
              "The deep middle — post safety is now isolated"
            ],
            correct: 0,
            explanation: "When the buzz safety drops inside into the hook zone, outside breaking routes open. He cannot be inside and outside simultaneously. The conflict is: the buzz safety takes away the inside throw but leaves the outside comeback, fade, and out routes more available. Throw over him or outside him — not into him."
          },
          {
            badge: "ROUTE DISTRIBUTION",
            situation: { down: "3RD & 8", field: "OWN 40", score: "DOWN 10-17", formation: "EMPTY" },
            defense: "cover3buzz",
            question: "COVER 3 BUZZ — WHAT DOES #2 GOING VERTICAL DO TO THE BUZZ SAFETY?",
            hint: "#2 vertical threatens the zone the buzz safety is responsible for. What does he do?",
            options: [
              "#2 vertical stresses the buzz safety because he must decide between his hook zone and the vertical",
              "#2 vertical pulls the buzz safety deep and opens the hook zone",
              "#2 vertical causes the buzz safety to blitz",
              "#2 vertical has no effect on the buzz safety"
            ],
            correct: 0,
            explanation: "In Cover 3 Buzz, #2 going vertical stresses the buzz safety. He is in the hook zone but must account for vertical routes crossing his zone. If he carries #2 vertical he vacates the hook zone. If he stays in the hook zone, he releases #2 to the post safety who is already covering more ground. #2 vertical creates conflict for the entire deep structure."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "3RD & 6", field: "OPP 35", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover3buzz",
            question: "WHAT IS THE PRIMARY WEAKNESS OF COVER 3 BUZZ?",
            hint: "One safety is covering the entire deep field alone. What does that mean?",
            options: [
              "The solo post safety covers more ground than in standard Cover 3 — verticals stress him",
              "The buzz safety leaves the flat zones wide open",
              "The corners are isolated with no safety help at all",
              "The run game is completely undefended"
            ],
            correct: 0,
            explanation: "The primary weakness of Cover 3 Buzz is the solo post safety covering more ground than in standard Cover 3. He had a safety partner before — now he is alone. Four verticals and post routes attack this expanded responsibility. The buzz safety came down and created a tradeoff: better intermediate theft, weaker deep coverage."
          }
        ],

        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "3RD & 6", field: "OPP 35", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover3buzz",
            question: "COVER 3 BUZZ — BUZZ SAFETY DROPPED INSIDE — WHERE IS THE BALL?",
            hint: "He went inside and down. What opened outside and above him?",
            options: [
              "Outside breaking routes — comeback, fade, out — where the buzz safety cannot reach",
              "Inside crossers — the buzz safety left the inside open",
              "Deep post — the solo safety cannot cover the middle",
              "Flat routes — the buzz safety took the hook zone"
            ],
            correct: 0,
            explanation: "Cover 3 Buzz decision tree: IF the safety buzzes down inside, THROW outside. The comeback, fade, and out routes are in the space outside the buzz safety's zone. He dropped inside and down — throw over him or outside him. When a defender comes down, you throw over him or outside him."
          },
          {
            badge: "VERTICAL ATTACK",
            situation: { down: "3RD & 8", field: "OWN 40", score: "DOWN 10-17", formation: "EMPTY" },
            defense: "cover3buzz",
            question: "COVER 3 BUZZ — EMPTY — HOW DO YOU STRESS THE SOLO SAFETY?",
            hint: "One safety covering the whole deep field. Five receivers. What concept stresses him most?",
            options: [
              "Four verticals — the solo safety cannot help everywhere, one receiver finds the void",
              "All curls — sit in front of the zone defenders",
              "Quick screens — attack the buzz safety underneath",
              "Crossing routes — find the void the buzz safety left"
            ],
            correct: 0,
            explanation: "Four verticals against Cover 3 Buzz puts the solo post safety under impossible stress. He is covering more ground than a normal Cover 3 safety already. Add four vertical routes and he must choose. Wherever he goes, throw the other side. The buzz safety took himself out of deep coverage — use it against them."
          },
          {
            badge: "RED ZONE",
            situation: { down: "3RD & 4", field: "OPP 18", score: "TIE 17-17", formation: "2x2" },
            defense: "cover3buzz",
            question: "COVER 3 BUZZ RED ZONE — GAME TIED — WHERE IS THE WINDOW?",
            hint: "Buzz safety is in the hook zone. Corners in their thirds. Solo safety over top.",
            options: [
              "Slot slant into the end zone — behind the buzz safety, inside the corner's third",
              "Back shoulder to the boundary — corner is running deep",
              "Go route — challenge the solo safety over the top",
              "Deep crossing route — find the void behind the buzz safety"
            ],
            correct: 0,
            explanation: "Slot slant into the end zone against Cover 3 Buzz in the red zone. The buzz safety dropped inside and down — he cannot recover to the end zone on a quick slant. The corner is running to his deep third. The solo safety is too far to help on a quick inside route. The window opens between the buzz safety's hook zone and the corner's deep third."
          },
          {
            badge: "POST-SNAP CONFIRM",
            situation: { down: "2ND & 7", field: "OPP 42", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3buzz",
            question: "YOU READ TWO-HIGH PRE-SNAP AND SET FOR A COVER 2 CONCEPT. SAFETY BUZZES AT SNAP. RESET?",
            hint: "The coverage changed at the snap. Post-snap confirmation overrides the pre-snap read.",
            options: [
              "Yes — reset to outside routes away from the buzz safety. Cover 2 seam is now partially covered.",
              "No — stay on the Cover 2 concept. The seam is still open.",
              "No — the buzz safety does not change the Cover 2 attack.",
              "Yes — check down immediately. The coverage is too complex to reset quickly."
            ],
            correct: 0,
            explanation: "Post-snap confirmation is mandatory. You read two-high and set for a Cover 2 seam. The safety buzzed down revealing Cover 3 Buzz. The seam is now partially covered by the buzz safety. Reset to outside routes — comeback, out, or fade — away from where the buzz safety dropped. Never get married to your pre-snap read."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "3RD & 6", field: "OPP 28", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover3buzz",
            question: "WHAT IS THE MOST DANGEROUS COVER 3 BUZZ MISTAKE?",
            hint: "QBs trust the pre-snap look. What does that lead to?",
            options: [
              "Throwing the dig or crosser directly into the buzz safety who is sitting in that exact zone",
              "Throwing too quickly before the buzz safety reveals himself",
              "Throwing deep when the solo safety has help",
              "Running the ball when the pass game is open"
            ],
            correct: 0,
            explanation: "Throwing a dig or crosser directly into the buzz safety is the most dangerous Cover 3 Buzz mistake. The defense shows two-high pre-snap to make you expect Cover 2 or Cover 4 spacing. Then the buzz safety drops into the exact window where QBs throw crossing routes. Always confirm the buzz before targeting the intermediate middle."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // COVER 6
    // ══════════════════════════════════════════════════════════
    {
      id: "cover6",
      name: "Cover 6",
      family: "Zone",
      tier: "pro",
      filmKey: "Cover 6",
      overview: "Split-field coverage. One side plays Cover 4 rules, the other plays Cover 2 rules. Pick a side before the snap and attack it decisively.",
      levels: {

        1: [
          {
            badge: "COVERAGE ID",
            situation: { down: "2ND & 7", field: "OPP 40", score: "TIE 0-0", formation: "2x2" },
            defense: "cover6",
            question: "CORNERS ARE AT DIFFERENT DEPTHS. WHAT COVERAGE IS THIS?",
            hint: "One corner looks like Cover 2. The other looks like Cover 4. Two different rules on two sides.",
            options: [
              "Cover 6 — split-field coverage with Cover 4 rules one side and Cover 2 rules the other",
              "Cover 3 — corners at different depths is a Cover 3 tell",
              "Cover 1 — corners play different techniques in man coverage",
              "Cover 4 — all four defenders are deep but at different depths"
            ],
            correct: 0,
            explanation: "Cover 6 is identified by corners at different depths. One corner looks like Cover 2 — off at 7 yards with flat responsibility. The other corner looks like Cover 4 — deep at 10-plus yards in his quarter. Two different coverage rules on each side of the field. This is quarter-quarter-half, also called Cover 6."
          },
          {
            badge: "SIDE ID",
            situation: { down: "3RD & 5", field: "OPP 28", score: "TIE 7-7", formation: "2x2" },
            defense: "cover6",
            question: "HOW DO YOU IDENTIFY THE COVER 2 SIDE FROM THE COVER 4 SIDE?",
            hint: "One corner will look like Cover 2. One will look like Cover 4. What tells them apart?",
            options: [
              "Cover 2 side corner is at 7 yards with flat body language. Cover 4 side corner is deep at 10+ yards.",
              "Cover 2 side has the safety high. Cover 4 side has the safety in the box.",
              "Cover 2 side corner is pressed. Cover 4 side corner is bailing.",
              "Cover 2 side has three underneath defenders. Cover 4 side has two."
            ],
            correct: 0,
            explanation: "Corner depth separates the Cover 2 side from the Cover 4 side in Cover 6. The Cover 2 corner is at 7 yards with flat body language — he will drive downhill. The Cover 4 corner is at 10-plus yards sitting deep in his quarter — he will backpedal. Identify the corner depths pre-snap and you know which rules apply to which side."
          },
          {
            badge: "PICK A SIDE",
            situation: { down: "2ND & 6", field: "OPP 35", score: "DOWN 3-10", formation: "2x2" },
            defense: "cover6",
            question: "WHAT IS THE QB'S FIRST JOB AGAINST COVER 6?",
            hint: "Two different coverages on two sides. You cannot attack both at once.",
            options: [
              "Identify which side is Cover 2 and which is Cover 4 BEFORE the snap and commit to attacking one",
              "Read both sides simultaneously and react to what opens post-snap",
              "Attack the middle of the field where both coverages meet",
              "Motion receivers to force the defense to declare which side is which"
            ],
            correct: 0,
            explanation: "The QB's first job against Cover 6 is to identify which side is Cover 2 and which is Cover 4 before the snap — then commit to attacking one side. Cover 6 punishes indecision. If you try to read both sides, you hold the ball and the defense wins. Pick the better matchup pre-snap and attack it decisively. One side, one read, one throw."
          }
        ],

        2: [
          {
            badge: "RESPONSIBILITY",
            situation: { down: "2ND & 7", field: "OPP 40", score: "TIE 0-0", formation: "2x2" },
            defense: "cover6",
            question: "ON THE COVER 4 SIDE OF COVER 6, WHAT IS THE SAFETY DOING?",
            hint: "Cover 4 rules apply to this side. Safety reads what?",
            options: [
              "Safety reads #2 — if #2 goes vertical he carries him, if #2 goes out he may rob #1",
              "Safety splits the deep half of the field with the corner",
              "Safety has flat responsibility on the Cover 4 side",
              "Safety blitzes from the Cover 4 side whenever possible"
            ],
            correct: 0,
            explanation: "On the Cover 4 side of Cover 6, the safety follows standard Cover 4 rules: he reads #2. If #2 goes vertical, he carries him. If #2 goes out, he may vacate to rob #1's post. This means the same #2 out plus #1 post concept that beats Cover 4 also beats the Cover 4 side of Cover 6. Know the rules that apply to each side."
          },
          {
            badge: "WHY DEFENSES RUN IT",
            situation: { down: "3RD & 5", field: "OPP 28", score: "TIE 7-7", formation: "TRIPS RT" },
            defense: "cover6",
            question: "WHY IS COVER 6 COMMONLY CALLED VS TRIPS?",
            hint: "Trips overloads one side. Cover 6 gives the defense different tools on each side.",
            options: [
              "Cover 4 to the trips side handles the three-receiver overload. Cover 2 to the single receiver backside.",
              "Cover 2 to the trips side floods the receivers with zone. Cover 4 backside protects deep.",
              "Cover 6 is called only to disguise — not specifically for trips.",
              "Cover 4 to the backside allows the safety to help trips. Cover 2 protects the frontside."
            ],
            correct: 0,
            explanation: "Cover 6 is commonly called against trips because Cover 4 rules on the trips side handle the three-receiver overload well — the safety reads #2 and the corner plays his quarter. Cover 2 to the single receiver backside gives the corner flat responsibility without needing to account for three receivers. Two coverages, two problems solved."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "2ND & 6", field: "OPP 35", score: "DOWN 3-10", formation: "2x2" },
            defense: "cover6",
            question: "WHAT IS THE COVER 6 WEAKNESS ON THE COVER 2 SIDE?",
            hint: "Cover 2 rules apply to one side. Cover 2 has classic weaknesses.",
            options: [
              "All the classic Cover 2 weaknesses — seam, hole shot, and fade-flat still exist on that side",
              "The Cover 2 side has no weakness — it is the stronger side of Cover 6",
              "The Cover 2 side leaves the flat completely open",
              "The Cover 2 side corner has no safety help at all"
            ],
            correct: 0,
            explanation: "The Cover 2 side of Cover 6 carries all the classic Cover 2 vulnerabilities: the seam between the safety and the corner, the hole shot behind the corner, and the fade-flat conflict. Identify the Cover 2 side pre-snap and attack it with Cover 2 answers — the same concepts that beat standard Cover 2 beat this side of Cover 6."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "3RD & 6", field: "OPP 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover6",
            question: "WHAT IS THE MOST COMMON QB MISTAKE AGAINST COVER 6?",
            hint: "Two different coverages on two sides. What does indecision cause?",
            options: [
              "Reading both sides and hesitating — the ball comes out late and the pocket collapses",
              "Attacking the Cover 4 side when the Cover 2 side is the better matchup",
              "Not using motion to force the defense to declare",
              "Throwing quick outs when deeper routes are open"
            ],
            correct: 0,
            explanation: "Reading both sides and hesitating is the Cover 6 mistake. QBs who try to process two different coverages simultaneously hold the ball while looking for the perfect throw. Cover 6 is designed to create this hesitation. The answer is a pre-snap commitment — identify the weaker side, commit to it, and throw on time."
          }
        ],

        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "2ND & 7", field: "OPP 40", score: "TIE 0-0", formation: "2x2" },
            defense: "cover6",
            question: "COVER 6 — YOU IDENTIFIED THE COVER 2 SIDE — CORNER DRIVES TO FLAT — WHERE IS THE BALL?",
            hint: "Cover 2 rules. Corner went to the flat. What did he leave open?",
            options: [
              "Corner-flag route behind him — Cover 2 answer on the Cover 2 side",
              "Seam route — safety rotated to the corner side",
              "Comeback on the Cover 4 side instead",
              "Flat route — throw before the corner arrives"
            ],
            correct: 0,
            explanation: "Cover 6 decision tree on the Cover 2 side: corner drives to the flat, throw the corner-flag route behind him. This is identical to the Cover 2 decision tree — because the same Cover 2 rules apply to that side. Identify the side, apply the rules, throw the answer. Cover 6 is two coverages combined — if you know both, you know Cover 6."
          },
          {
            badge: "COVER 4 SIDE",
            situation: { down: "3RD & 7", field: "OPP 30", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover6",
            question: "COVER 6 — YOU CHOSE THE COVER 4 SIDE — CORNER SITTING DEEP — WHAT IS THE CALL?",
            hint: "Cover 4 rules apply. Corner is deep at 12 yards. What route beats him?",
            options: [
              "Comeback at 12 yards — same Cover 4 answer on the Cover 4 side",
              "Quick out — attack before the corner can set",
              "Go route — beat him over the top",
              "Slant — attack his inside leverage"
            ],
            correct: 0,
            explanation: "Cover 6 decision tree on the Cover 4 side: corner sitting deep, throw the comeback. Cover 4 rules apply — the corner is in his deep quarter and the comeback exploits the space between where he is and where he needs to be. Same Cover 4 answer. The key to Cover 6 is knowing both Cover 2 and Cover 4 decision trees and applying the right one to the right side."
          },
          {
            badge: "TRIPS ATTACK",
            situation: { down: "3RD & 5", field: "OPP 28", score: "TIE 7-7", formation: "TRIPS RT" },
            defense: "cover6",
            question: "TRIPS RIGHT — DEFENSE PLAYS COVER 6 — COVER 4 TO TRIPS — WHERE IS THE ANSWER?",
            hint: "Cover 4 to the trips side, Cover 2 to the backside. Where is the easier read?",
            options: [
              "Backside isolation — Cover 2 to the single receiver backside with corner-flag answer",
              "Flood the trips side — three receivers vs Cover 4 rules",
              "Attack the seam between the two coverages in the middle",
              "Motion to force the defense to change sides"
            ],
            correct: 0,
            explanation: "Against Cover 6 with Cover 4 to trips and Cover 2 to the boundary, the backside isolation is often the easier read. The boundary corner has Cover 2 rules and flat responsibility. The boundary receiver is in a one-on-two situation at most. Use the corner-flag concept on the boundary side and take the Cover 2 answer."
          },
          {
            badge: "PLAY CALL",
            situation: { down: "2ND & 6", field: "OPP 35", score: "DOWN 3-10", formation: "2x2" },
            defense: "cover6",
            question: "COVER 6 — WHAT IS THE COMPLETE DECISION PROCESS?",
            hint: "Walk through the entire pre-snap read for Cover 6.",
            options: [
              "Identify Cover 2 side vs Cover 4 side — pick the weaker match — apply the correct rules — commit pre-snap",
              "Spread all five receivers and attack both sides equally",
              "Check to a run because Cover 6 is too complex to attack quickly",
              "Use motion to force the defense to show a simpler coverage"
            ],
            correct: 0,
            explanation: "The complete Cover 6 process: Step 1 — identify which corner looks like Cover 2 (7 yards, flat leverage) and which looks like Cover 4 (10-plus yards, deep). Step 2 — decide which side has the better matchup based on personnel and alignment. Step 3 — apply Cover 2 or Cover 4 decision tree rules to that side. Step 4 — commit and throw on time. One side. One read. Decisive."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "3RD & 6", field: "OPP 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover6",
            question: "COVER 6 — WHAT HAPPENS WHEN A QB ATTACKS THE WRONG SIDE?",
            hint: "You threw a Cover 2 concept to the Cover 4 side. What does that look like?",
            options: [
              "The Cover 4 corner sitting deep does not drive on the flat route — the seam and hole shot are not there",
              "The defense rotates to cover the mistake automatically",
              "Nothing — both sides of Cover 6 have the same weaknesses",
              "The Cover 4 safety crashes on the throw"
            ],
            correct: 0,
            explanation: "Attacking the wrong side of Cover 6 means applying Cover 2 rules to a Cover 4 corner. The Cover 4 corner does not drive to the flat — he is deep in his quarter. A fade-flat or smash concept thrown to the Cover 4 side does not create the conflict it creates against a Cover 2 corner. Know which side you are attacking and apply the right answer."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // FIRE ZONE
    // ══════════════════════════════════════════════════════════
    {
      id: "firezone",
      name: "Fire Zone",
      family: "Pressure",
      tier: "pro",
      filmKey: "Fire Zone",
      overview: "Five-man pressure with three-deep and three-under coverage. A defensive lineman drops into coverage. Designed to confuse the QB while maintaining deep protection.",
      levels: {

        1: [
          {
            badge: "PRESSURE ID",
            situation: { down: "3RD & 6", field: "OPP 35", score: "DOWN 7-14", formation: "2x2" },
            defense: "firezone",
            question: "A DEFENSIVE LINEMAN DROPPED INTO COVERAGE. WHAT PRESSURE IS THIS?",
            hint: "DL dropping is the signature tell. What coverage uses DL in zone?",
            options: [
              "Fire Zone — five-man pressure where a DL drops into a coverage zone",
              "Cover 0 — all defenders are blitzing including the DL",
              "Sim Pressure — only four rush but it looks like more",
              "Cover 1 Pressure — man coverage with an extra rusher"
            ],
            correct: 0,
            explanation: "A defensive lineman dropping into coverage at the snap is the Fire Zone tell. Fire Zone sends five rushers while one or more DL drop into hook or curl zones as part of a three-deep, three-under structure. The defense gets pressure plus coverage. The DL in coverage is the confirmation — and the player you must not throw to."
          },
          {
            badge: "COUNT THE RUSH",
            situation: { down: "2ND & 8", field: "OWN 35", score: "TIE 0-0", formation: "2x2" },
            defense: "firezone",
            question: "THE DEFENSE SHOWED SIX RUSHERS PRE-SNAP. POST-SNAP TWO DROPPED. HOW MANY RUSHED?",
            hint: "Pre-snap looks and post-snap reality are different in Fire Zone.",
            options: [
              "Four rushed — the two who dropped were bluff players creating confusion",
              "Six rushed — Fire Zone always sends everyone who shows",
              "Five rushed — one extra rusher plus the four linemen",
              "Three rushed — Fire Zone always drops more than it shows"
            ],
            correct: 0,
            explanation: "This is Simulated Pressure within a Fire Zone look — only four rushed despite showing six. The two defenders who dropped back into coverage were bluff players designed to make you think more pressure was coming. Post-snap confirmation is mandatory. Count who actually rushed, not who showed pressure pre-snap."
          },
          {
            badge: "COVERAGE ID",
            situation: { down: "3RD & 7", field: "OPP 30", score: "DOWN 3-10", formation: "2x2" },
            defense: "firezone",
            question: "FIRE ZONE — WHAT IS THE COVERAGE STRUCTURE BEHIND THE PRESSURE?",
            hint: "Five rush, six defenders in coverage. How do they split those six?",
            options: [
              "Three-deep and three-under — three defenders cover deep thirds, three cover underneath zones",
              "Two-deep and four-under — two safeties deep, four underneath",
              "Man coverage — each defender locks onto a receiver",
              "One-deep and five-under — maximum underneath coverage"
            ],
            correct: 0,
            explanation: "Fire Zone uses three-deep and three-under coverage behind the five-man pressure. Three defenders split the deep thirds. Three defenders cover the underneath zones. This gives the defense both pressure and deep protection — which is why it is harder to attack with deep shots than other blitz packages. The pressure comes with a coverage structure behind it."
          }
        ],

        2: [
          {
            badge: "WHY DEFENSES RUN IT",
            situation: { down: "3RD & 6", field: "OPP 35", score: "DOWN 7-14", formation: "2x2" },
            defense: "firezone",
            question: "WHY DOES A DEFENSE RUN FIRE ZONE INSTEAD OF COVER 0?",
            hint: "Fire Zone sends pressure AND keeps coverage. Cover 0 sends pressure but loses coverage. What is the difference?",
            options: [
              "Fire Zone maintains deep coverage while creating pressure — Cover 0 gives up all safety help",
              "Fire Zone sends more rushers than Cover 0",
              "Fire Zone is stronger against the run than Cover 0",
              "Fire Zone eliminates all routes while Cover 0 only eliminates deep routes"
            ],
            correct: 0,
            explanation: "Fire Zone gives the defense pressure plus coverage — the best of both worlds. Cover 0 sends maximum pressure but gives up all safety help. Fire Zone sends five rushers while maintaining three deep defenders. QBs cannot simply identify the blitz and throw a deep shot like they might against Cover 0. The deep coverage is still there."
          },
          {
            badge: "DL DROP",
            situation: { down: "2ND & 8", field: "OWN 35", score: "TIE 0-0", formation: "2x2" },
            defense: "firezone",
            question: "WHY DOES THE DEFENSE DROP A DEFENSIVE LINEMAN INTO COVERAGE IN FIRE ZONE?",
            hint: "The DL dropping has two purposes. What are they?",
            options: [
              "To confuse the QB by putting a DL in an unexpected zone AND to create an extra coverage defender",
              "To rush from a different angle than standard edge rushers",
              "To eliminate the running back as a blocker",
              "To free up a linebacker to blitz instead"
            ],
            correct: 0,
            explanation: "The DL dropping serves two purposes. First it confuses QBs who expect DL to rush — throwing to a zone where a DL is lurking creates easy interceptions. Second it allows a linebacker to blitz while the DL takes his coverage responsibility, creating exotic pressure from an unexpected direction. Never throw to a dropping DL."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "3RD & 7", field: "OPP 30", score: "DOWN 3-10", formation: "2x2" },
            defense: "firezone",
            question: "WHAT IS THE WEAKNESS OF FIRE ZONE COVERAGE?",
            hint: "Three-under defenders covering the full underneath. What is spread thin?",
            options: [
              "The underneath zones are stretched — three defenders cannot cover the full field underneath",
              "The deep coverage is weak — three defenders cannot cover all three deep thirds",
              "The flat zones are completely open — no one covers them",
              "The run game is open — all defenders went into pass coverage"
            ],
            correct: 0,
            explanation: "Fire Zone's weakness is the stretched underneath zones. Three defenders must cover the full underneath field. The flats, sticks, and quick throws can find space between those three defenders. Quick game, screens, and replacement throws attack these gaps. The pressure must arrive before the underneath routes can develop — if the QB is fast, the underneath is available."
          },
          {
            badge: "REPLACEMENT",
            situation: { down: "3RD & 6", field: "OPP 28", score: "TIE 14-14", formation: "2x2" },
            defense: "firezone",
            question: "FIRE ZONE — EDGE PRESSURE COMES — WHERE DOES THE BALL GO?",
            hint: "The edge rusher came from somewhere. What did he leave behind?",
            options: [
              "Replace the blitz — throw to the flat or hot route where the edge rusher vacated",
              "Hold the ball and wait for downfield routes to develop",
              "Throw deep — Fire Zone cannot protect the deep thirds with pressure coming",
              "Scramble away from the pressure side"
            ],
            correct: 0,
            explanation: "Replace the blitz: the edge rusher leaving his position created a void. A flat route, speed out, or quick screen fills the space he vacated. This is the fundamental principle against any blitz — the blitzer leaving creates a free receiver in the area he came from. Fire Zone or not, replace pressure with a quick throw to where the rusher was."
          }
        ],

        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "3RD & 6", field: "OPP 35", score: "DOWN 7-14", formation: "2x2" },
            defense: "firezone",
            question: "FIRE ZONE — DL DROPS AT SNAP — PRESSURE COMES — WHAT IS THE PROCESS?",
            hint: "Confirm the DL dropped, identify the pressure, replace it.",
            options: [
              "Confirm DL drop — identify hot from pressure side — throw the replacement route immediately",
              "Hold the ball — Fire Zone coverage means the downfield is open",
              "Throw to the dropping DL's zone — he cannot cover well",
              "Scramble — Fire Zone is too complex to read in real time"
            ],
            correct: 0,
            explanation: "Fire Zone decision tree: Step 1 — confirm the DL dropped at the snap. Step 2 — identify where the pressure is coming from. Step 3 — throw the replacement route to where the pressure came from. Quick flat, speed out, or stick route. Do not throw to the DL's zone. Do not hold the ball and look deep. Replace the pressure immediately."
          },
          {
            badge: "UNDERNEATH ATTACK",
            situation: { down: "2ND & 8", field: "OWN 35", score: "TIE 0-0", formation: "2x2" },
            defense: "firezone",
            question: "FIRE ZONE — THREE UNDER DEFENDERS — WHERE IS THE VOID?",
            hint: "Three defenders covering the full underneath field. Six zones, three defenders.",
            options: [
              "The flats and intermediate windows — three defenders stretched thin across the full underneath",
              "The deep middle — three-deep coverage cannot protect the post",
              "The seam — DL dropping into the seam creates a void outside",
              "There is no void — Fire Zone eliminates all underneath routes"
            ],
            correct: 0,
            explanation: "Three underneath defenders stretched across the full field creates voids between them. Quick game, stick routes, and flat routes find the gaps between the three-under defenders. Run a concept that hits multiple underneath zones simultaneously — like a stick-flat combination — and one will be open. Three defenders cannot cover six zones."
          },
          {
            badge: "DEEP SHOT",
            situation: { down: "3RD & 7", field: "OPP 30", score: "DOWN 3-10", formation: "2x2" },
            defense: "firezone",
            question: "FIRE ZONE — CAN YOU TAKE THE DEEP SHOT?",
            hint: "Five rushers came. Three defenders stayed deep. Is the deep ball available?",
            options: [
              "Rarely — three-deep coverage behind the pressure means corners are still protecting deep thirds",
              "Always — five rushers means the ball must come out fast and deep",
              "Never — Fire Zone eliminates all deep routes",
              "Yes — the pressure disrupts the deep coverage structure"
            ],
            correct: 0,
            explanation: "The deep shot is rarely the answer against Fire Zone. Three defenders are protecting the deep thirds behind the pressure. Unlike Cover 0 where no one is deep, Fire Zone maintains deep coverage. The pressure should force the ball out quickly on underneath routes — not create the time needed for deep routes to develop. Attack underneath, not deep."
          },
          {
            badge: "PLAY CALL",
            situation: { down: "3RD & 6", field: "OPP 28", score: "TIE 14-14", formation: "2x2" },
            defense: "firezone",
            question: "FIRE ZONE — WHAT IS THE IDEAL PLAY CALL?",
            hint: "Pressure coming, three-deep behind it, three-under stretched. What concept attacks this?",
            options: [
              "Quick game concepts — stick-flat, speed out, or screen — beat the pressure and stress the three-under",
              "Four verticals — stress the three-deep defenders who have no help",
              "Deep crossing routes — attack behind the three-under defenders",
              "Check to a run — Fire Zone is too complex for the pass game"
            ],
            correct: 0,
            explanation: "Quick game is the ideal answer against Fire Zone. Stick-flat, speed out, and quick screens attack the three-under structure before it can set. The pressure comes from five rushers but the ball leaves in 1.5 seconds before they arrive. Then the three-under defenders are stretched by the quick concept. Beat the pressure with timing, attack the stretched coverage with route distribution."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "3RD & 6", field: "OPP 35", score: "DOWN 7-14", formation: "2x2" },
            defense: "firezone",
            question: "WHAT IS THE MOST DANGEROUS FIRE ZONE MISTAKE?",
            hint: "The DL is in coverage. What do some QBs do when they see a big man in a zone?",
            options: [
              "Throwing to the dropping DL's zone thinking he cannot cover — he is sitting there waiting",
              "Throwing too quickly before confirming which DL dropped",
              "Not identifying the pressure side before the snap",
              "Holding the ball and taking a sack while looking for deep routes"
            ],
            correct: 0,
            explanation: "Throwing to the dropping DL's zone is the most dangerous Fire Zone mistake. QBs who see a big defensive lineman in a coverage zone assume he cannot cover well and throw into his zone. He is sitting right there waiting for exactly that throw. Tip balls and interceptions happen in Fire Zone because QBs throw to DL zones. Never throw to the dropping lineman."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // EVEN FRONT (4-3)
    // ══════════════════════════════════════════════════════════
    {
      id: "evenfront",
      name: "Even Front",
      family: "Front",
      tier: "free",
      filmKey: "Even Front",
      overview: "Four defensive linemen with three linebackers. Each lineman typically controls one gap. Standard base defense.",
      levels: {

        1: [
          {
            badge: "FRONT ID",
            situation: { down: "1ST & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2",
            question: "FOUR LINEMEN ON THE GROUND. THREE LINEBACKERS BEHIND. WHAT FRONT IS THIS?",
            hint: "Count the down linemen. Four linemen is the defining feature.",
            options: [
              "Even Front — four down linemen with three linebackers in a 4-3 structure",
              "Odd Front — three linemen with four linebackers",
              "Bear Front — five linemen on the line of scrimmage",
              "Nickel — five defensive backs replacing a linebacker"
            ],
            correct: 0,
            explanation: "Four defensive linemen on the ground with three linebackers behind them is the Even Front or 4-3. It is called even because there are an even number of linemen on each side of the center. This is the most common base front in football. The four linemen each control a gap in a one-gap system."
          },
          {
            badge: "BOX COUNT",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2",
            question: "HOW MANY DEFENDERS ARE IN THE BOX IN A STANDARD 4-3?",
            hint: "Count the linemen plus linebackers. Safeties may or may not be in the box.",
            options: [
              "Seven — four linemen plus three linebackers form the base box count",
              "Eight — the strong safety always adds to the box in a 4-3",
              "Five — only the interior linemen count as box defenders",
              "Six — the Sam linebacker is always outside the box"
            ],
            correct: 0,
            explanation: "A standard 4-3 has seven defenders in the box: four linemen plus three linebackers. The safeties are typically not counted as box defenders in base coverage — they play further back. When you count defenders in the box versus blockers, the base 4-3 gives you seven defenders versus five offensive linemen plus the quarterback."
          },
          {
            badge: "GAP CONTROL",
            situation: { down: "2ND & 4", field: "OWN 35", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2",
            question: "IN AN EVEN FRONT, HOW DO THE DEFENSIVE LINEMEN CONTROL GAPS?",
            hint: "Four linemen, eight gaps to defend. What is the system?",
            options: [
              "Each lineman controls one gap in a one-gap system — they penetrate their assigned gap",
              "Linemen control two gaps each — staying in their lane",
              "Linemen all rush the passer — gaps are filled by linebackers",
              "Linemen control gaps only on run downs — they rush freely on passing downs"
            ],
            correct: 0,
            explanation: "In an Even Front the defensive linemen typically use a one-gap system — each lineman is responsible for penetrating and controlling one specific gap. They attack their gap aggressively rather than two-gap reading. The linebackers fill the remaining gaps. This creates an aggressive attacking front that can be simplified in its assignments."
          }
        ],

        2: [
          {
            badge: "STRENGTHS",
            situation: { down: "1ST & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2",
            question: "WHAT ARE THE STRENGTHS OF THE EVEN FRONT?",
            hint: "Four linemen controlling gaps. What does that do well?",
            options: [
              "Strong gap integrity, simple assignments, and good against inside runs",
              "Maximum pass rush and blitz capability",
              "Flexible coverage with multiple linebacker options",
              "Strong against spread formations and outside runs"
            ],
            correct: 0,
            explanation: "The Even Front is strong against inside runs, has clear and simple gap assignments, and provides good gap integrity. Each lineman knows his gap. The linebackers know their responsibilities. The predictability is actually a strength at this level because everyone executes well. It struggles more against spread formations where the nickel becomes critical."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "2ND & 6", field: "OPP 40", score: "TIE 0-0", formation: "EMPTY" },
            defense: "cover2",
            question: "WHERE DOES THE EVEN FRONT STRUGGLE?",
            hint: "Think about spread formations and the role the nickel plays.",
            options: [
              "Against spread formations — the nickel becomes the critical player and the front becomes predictable",
              "Against inside runs — the gaps are too far apart",
              "Against play-action — the linemen over-pursue",
              "Against power runs — not enough defenders at the point of attack"
            ],
            correct: 0,
            explanation: "The Even Front can struggle against modern spread formations because the third linebacker is often replaced by a nickel defensive back. The front becomes more predictable — four linemen always rush — and the nickel coverage player becomes critical. QBs can identify the rush and protection more easily in an Even Front than in an Odd Front."
          },
          {
            badge: "QB IMPACT",
            situation: { down: "3RD & 5", field: "OPP 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2",
            question: "HOW DOES AN EVEN FRONT AFFECT YOUR PROTECTION CALL?",
            hint: "Four linemen rushing is predictable. What does that do for the QB?",
            options: [
              "More predictable — easier to identify who is rushing and set protection accordingly",
              "More complex — four linemen create more stunts and games",
              "Irrelevant — the front does not affect the protection call",
              "Harder — the QB must account for all four linemen individually"
            ],
            correct: 0,
            explanation: "The Even Front is more predictable for the QB. Four linemen typically rushing means the QB can identify the rush threat pre-snap more easily. The protection slides off the Mike linebacker and the four linemen are accounted for. Fewer surprises come from an Even Front compared to an Odd Front where edge rushers can be linebackers."
          }
        ],

        3: [
          {
            badge: "ATTACK IT",
            situation: { down: "1ST & 10", field: "OWN 35", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2",
            question: "EVEN FRONT — WHAT DOES THE QB LOOK FOR TO ATTACK?",
            hint: "Predictable rush, standard gaps. What opportunities does this create?",
            options: [
              "Identify protection quickly, set the line, and use the extra time a predictable rush gives you",
              "Check to a run — Even Fronts are always weak against the run",
              "Attack the edge — Even Fronts always have edge vulnerability",
              "Use RPOs — Even Fronts cannot handle run-pass options"
            ],
            correct: 0,
            explanation: "Against the Even Front the QB benefits from a predictable rush. Set the protection off the Mike, account for the four linemen, and trust your blockers. The predictability gives you a cleaner pre-snap picture than an Odd Front. Use that clarity to identify the coverage behind the front and make your read decision from a clean pocket."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // ODD FRONT (3-4)
    // ══════════════════════════════════════════════════════════
    {
      id: "oddfront",
      name: "Odd Front",
      family: "Front",
      tier: "free",
      filmKey: "Odd Front",
      overview: "Three defensive linemen with four linebackers. Maximum flexibility. Disguised pressure. Edge rushers can be linebackers.",
      levels: {

        1: [
          {
            badge: "FRONT ID",
            situation: { down: "1ST & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3",
            question: "THREE LINEMEN. FOUR LINEBACKERS STANDING UP. WHAT FRONT IS THIS?",
            hint: "Count the down linemen. Three is the defining feature of this front.",
            options: [
              "Odd Front — three down linemen with four linebackers in a 3-4 structure",
              "Even Front — four linemen with this linebacker depth",
              "Bear Front — five linemen on the line of scrimmage",
              "Nickel — the linebacker count indicates a nickel package"
            ],
            correct: 0,
            explanation: "Three defensive linemen with four linebackers is the Odd Front or 3-4. It is called odd because the nose tackle aligns directly over the center — an odd gap alignment. The four linebackers create maximum flexibility: any combination of them can blitz, drop, or cover. This is why the Odd Front creates the most disguised pressure in football."
          },
          {
            badge: "EDGE RUSHERS",
            situation: { down: "3RD & 6", field: "OPP 35", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover3",
            question: "IN AN ODD FRONT, WHO ARE THE EDGE RUSHERS?",
            hint: "Only three linemen are down. Who rushes the edges?",
            options: [
              "The outside linebackers — they can rush from a standing position or drop into coverage",
              "The defensive ends — same as the Even Front",
              "The safeties — they provide edge pressure in the Odd Front",
              "The corners — they blitz from the edge in Odd Front systems"
            ],
            correct: 0,
            explanation: "In the Odd Front the outside linebackers are the edge rushers. This is what makes the Odd Front dangerous — the OLBs can rush or drop into coverage from the same pre-snap look. The QB cannot easily identify who is rushing from a standing linebacker. They look identical pre-snap whether they rush or drop. That uncertainty is the point."
          },
          {
            badge: "BOX COUNT",
            situation: { down: "2ND & 5", field: "OPP 40", score: "TIE 7-7", formation: "2x2" },
            defense: "cover1",
            question: "WHY IS COUNTING THE BOX HARDER AGAINST AN ODD FRONT?",
            hint: "Linebackers standing up look different than linemen. What does that create?",
            options: [
              "Standing linebackers can rush or drop — making it unclear how many are actually rushing",
              "The Odd Front always brings eight defenders to the box",
              "The Odd Front uses fewer defenders in the box than the Even Front",
              "Box count is equally easy against both fronts"
            ],
            correct: 0,
            explanation: "Box count is harder against the Odd Front because the four linebackers standing up can rush or drop from the same alignment. Against the Even Front you know the four linemen are likely rushing. Against the Odd Front any two, three, or four linebackers could blitz. The uncertainty means the QB must confirm post-snap who actually rushed."
          }
        ],

        2: [
          {
            badge: "STRENGTHS",
            situation: { down: "3RD & 5", field: "OPP 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3",
            question: "WHAT IS THE PRIMARY STRENGTH OF THE ODD FRONT?",
            hint: "Four linebackers. Any can rush or drop. What does that create?",
            options: [
              "Maximum flexibility and disguise — the defense can send any combination of blitzers without showing it",
              "Superior run stopping compared to the Even Front",
              "Better coverage because of the extra linebacker",
              "Simpler assignments that lead to better execution"
            ],
            correct: 0,
            explanation: "The Odd Front's primary strength is flexibility and disguise. Any of the four linebackers can rush or drop from the same alignment. The defense can send two, three, four, or even all four linebackers in a blitz without pre-snap tells. This makes protection calls more difficult, hot routes harder to predict, and QB decision-making more complex."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 0-0", formation: "2x2" },
            defense: "cover1",
            question: "WHERE CAN THE ODD FRONT STRUGGLE?",
            hint: "Three interior linemen versus five offensive linemen. What does that create?",
            options: [
              "Power run game — three interior linemen can be outnumbered against power rushing attacks",
              "Pass rushing — only three linemen cannot generate consistent pressure",
              "Coverage — four linebackers are not as athletic as defensive backs",
              "Gap control — three linemen cannot control all the gaps"
            ],
            correct: 0,
            explanation: "The Odd Front can struggle against power run games because three interior linemen may be outnumbered at the point of attack. The nose tackle in a 3-4 typically controls both A-gaps in a two-gap system — a very demanding assignment. Power run concepts that double-team the nose tackle and kick out the linebackers can create running lanes."
          },
          {
            badge: "QB IMPACT",
            situation: { down: "3RD & 6", field: "OPP 30", score: "DOWN 3-10", formation: "2x2" },
            defense: "cover3",
            question: "HOW DOES AN ODD FRONT AFFECT YOUR PRE-SNAP PROCESS?",
            hint: "Four linebackers standing up. You cannot easily tell who is rushing.",
            options: [
              "Must identify who is rushing earlier — edge linebackers are the key threat and could rush or drop",
              "Simpler — three linemen means fewer rushers to account for",
              "No change — the front does not affect the pre-snap process",
              "Must always check to a run — Odd Fronts always blitz"
            ],
            correct: 0,
            explanation: "The Odd Front demands earlier rush identification. The outside linebackers standing up are your primary concern — they can rush or drop and look identical pre-snap. Try to read their body language, stance, and pre-snap movement to predict the rush. The Mike identification is still the protection anchor, but edge linebacker identification is the critical additional step."
          }
        ],

        3: [
          {
            badge: "ATTACK IT",
            situation: { down: "2ND & 6", field: "OPP 38", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3",
            question: "ODD FRONT — WHAT IS YOUR PRE-SNAP PROCESS?",
            hint: "Linebackers standing up can rush or drop. What do you key on?",
            options: [
              "Identify the Mike, watch edge linebacker alignment and stance for rush tells, set protection, confirm post-snap",
              "Check to a run — Odd Fronts are weak against the inside run",
              "Go through the same process as the Even Front — fronts do not change the read",
              "Spread the formation to force the linebackers to declare their assignment"
            ],
            correct: 0,
            explanation: "Against the Odd Front: identify the Mike first — he anchors the protection. Watch the outside linebackers for rush tells: stance, inside foot forward, weight distribution. Set the protection with a slide and let the RB handle the backside edge. At the snap confirm who actually rushed versus who dropped. Post-snap reality overrides pre-snap prediction."
          }
        ]
      }
    }

  ]  // end units

};  // end CURRICULUM
