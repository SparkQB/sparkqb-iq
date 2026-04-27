// ============================================================
// SPARKQB IQ — CURRICULUM.JS v2
// Schema per question:
//   options: [A, B, C, D]  (original order)
//   correct: index of best answer
//   tiers: ["best","ok","wrong","wrong"]  one per option
//   notes: ["..","..","..",".."]          one-line verdict per option
//   explanation: full coaching paragraph
//   routes: optional canvas drawing key
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

var CURRICULUM = {

  levels: [
    { id: 1, name: "IDENTIFY IT",   desc: "Pre-snap recognition. Read the defense before the ball is snapped.", color: "#004FFF" },
    { id: 2, name: "UNDERSTAND IT", desc: "Why does the defense run this? Who is in conflict? What is the weakness?", color: "#B2FF00" },
    { id: 3, name: "BEAT IT",       desc: "Decision trees. Play calls. The right answer for the right situation.", color: "#FF0400" }
  ],

  units: [

    // ══════════════════════════════════════════════════════════
    // COVER 2
    // ══════════════════════════════════════════════════════════
    {
      id: "cover2", name: "Cover 2", family: "Zone", tier: "free", filmKey: "Cover 2",
      overview: "Two-deep, five-under zone. Safeties split the deep halves. Corners own the flats.",
      levels: {
        1: [
          {
            badge: "SAFETY READ",
            situation: { down: "1ST & 10", field: "OWN 35", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2", routes: null,
            question: "WHAT DO THE SAFETIES TELL YOU PRE-SNAP?",
            hint: "Count them. Where are they? How deep?",
            options: [
              "Two safeties split at equal depth — two-high shell",
              "One safety deep in the middle — single high",
              "Both safeties walked into the box",
              "Safety showing blitz from the boundary"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — equal depth split safeties is the two-high tell. Cover 2, 4, Tampa 2, and Cover 6 all start here.",
              "Single high means Cover 1 or Cover 3. Not what you see here.",
              "Both low means Cover 0 or heavy box. Not applicable.",
              "A blitzing safety would show different body language and alignment."
            ],
            explanation: "Two safeties at equal depth splitting the hashes is the signature of a two-high shell. Cover 2, Cover 4, Tampa 2, and Cover 6 all start from two-high. One high means Cover 1 or Cover 3. Both low means Cover 0. Two high and split is where your identification starts."
          },
          {
            badge: "CORNER READ",
            situation: { down: "2ND & 6", field: "OPP 40", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2", routes: null,
            question: "CORNER AT 7 YARDS WITH OUTSIDE LEVERAGE. WHAT IS HIS ASSIGNMENT?",
            hint: "He is NOT bailing deep. He is NOT pressed. What does that depth tell you?",
            options: [
              "He owns the flat and will drive downhill at the snap",
              "He is bailing to a deep third like Cover 3",
              "He is in press man coverage",
              "He is playing a deep quarter like Cover 4"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — Cover 2 corners at 7 yards with outside leverage own the flat. They attack downhill.",
              "Cover 3 corners bail pre-snap from a deeper alignment. This corner is too shallow and too static.",
              "Press man corners align at 0-2 yards at the line. 7 yards is not press.",
              "Cover 4 corners sit at 10-plus yards in their deep quarter. This corner is too close."
            ],
            explanation: "A corner at 5-7 yards with outside leverage is the Cover 2 corner tell. He is not going deep. He owns the flat zone and will drive downhill at the snap to squeeze underneath routes. Cover 3 corners bail. Cover 4 corners sit deep. Cover 2 corners attack the flat."
          },
          {
            badge: "MOF READ",
            situation: { down: "3RD & 7", field: "OPP 30", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover2", routes: null,
            question: "TWO SAFETIES SPLIT THE HASHES. IS THE MIDDLE OF THE FIELD OPEN OR CLOSED?",
            hint: "Two defenders split the field. What does that leave in between them?",
            options: [
              "Open — neither safety owns the middle seam",
              "Closed — one safety rotates to the middle post-snap",
              "Closed — the Mike linebacker fills the seam",
              "Open — but only to the boundary side"
            ],
            correct: 0,
            tiers: ["best","wrong","ok","wrong"],
            notes: [
              "Correct — two-high means MOF open. The seam between the safeties is the primary void in Cover 2.",
              "Safeties stay in their halves in Cover 2. Neither rotates to the middle — that is Tampa 2.",
              "Partially true — the Mike is under the seam, but at 5-8 yards, not in the deep void. Still open deep.",
              "The seam void exists in the middle of the field, not just to one side."
            ],
            explanation: "Two safeties splitting the field means the middle of the field is open. Neither safety owns the seam between them. This is the fundamental weakness of Cover 2 — the void between the safeties is where four verticals and seam routes attack. MOF open is the key concept."
          }
        ],
        2: [
          {
            badge: "RESPONSIBILITY",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2", routes: null,
            question: "WHY DOES THE COVER 2 CORNER OWN THE FLAT INSTEAD OF THE SAFETY?",
            hint: "Think about what the safety is doing and what that forces the corner to do.",
            options: [
              "The safety owns the deep half, so the corner handles underneath — they split the sideline vertically",
              "The corner is faster so he covers more ground",
              "The corner owns the flat only on passing downs",
              "The corner and safety rotate responsibilities post-snap"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — Cover 2 divides each sideline vertically. Safety above, corner below. They own it together.",
              "Speed is not the reason. The assignment is structural — they divide the sideline by depth.",
              "The corner owns the flat on all downs in Cover 2, not just passing downs.",
              "There is no rotation in Cover 2. Assignments are fixed pre-snap."
            ],
            explanation: "Cover 2 divides each side of the field vertically. The safety owns the deep half of his side. The corner owns the flat underneath. Together they cover the full sideline — one above, one below. This is why the fade-flat stresses the corner: he must choose between the flat below him and the deeper route going over his head."
          },
          {
            badge: "CONFLICT",
            situation: { down: "2ND & 8", field: "OPP 38", score: "TIE 7-7", formation: "TRIPS RT" },
            defense: "cover2_trips", routes: "smash",
            question: "TRIPS VS COVER 2 — WHO IS THE CONFLICT DEFENDER?",
            hint: "Three receivers flood one side. One defender cannot cover three levels.",
            options: [
              "The field corner — three receivers create a three-level flood on his flat zone",
              "The free safety — he has to help on both sides",
              "The Mike linebacker — three gaps to fill",
              "The boundary corner — isolated with no help"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","ok"],
            notes: [
              "Correct — the field corner faces a three-level flood he cannot solve alone. He must choose one level.",
              "The safety does have stress in trips but his halves assignment keeps him occupied. The corner is the primary conflict.",
              "The Mike defends the run and underneath. Three receivers does not directly conflict his assignment.",
              "The boundary corner has his own challenge but with one receiver, not three flooding his zone."
            ],
            explanation: "The field corner is put in conflict by trips. He owns the flat but now faces three receivers creating a three-level flood: a flat route, a comeback, and a fade. He can only be in one place. This is the core principle of attacking Cover 2 with trips — create a conflict the corner cannot solve."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "3RD & 5", field: "OPP 33", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2", routes: "seam_c2",
            question: "WHAT ARE THE BUILT-IN WEAKNESSES OF COVER 2?",
            hint: "Two defenders deep, corners in the flat. What does that leave open at different depths?",
            options: [
              "The seam between safeties AND the hole shot behind the corner",
              "Only the flat zones — corners are out of position",
              "Only the deep middle — safeties cannot both get there",
              "The boundary side only — field safety has to help more"
            ],
            correct: 0,
            tiers: ["best","wrong","ok","wrong"],
            notes: [
              "Correct — Cover 2 has two distinct voids: the seam between safeties and the hole shot where the corner was.",
              "The flat is actually covered — corners own it. The weakness is above them, not where they are.",
              "The deep middle is a weakness, but the hole shot behind the corner is equally exploitable and often easier.",
              "Both sides of the field have the same vulnerabilities in Cover 2. It is not boundary-specific."
            ],
            explanation: "Cover 2 has two classic weaknesses: the seam between the safeties where neither can help, and the hole shot — the window between where the corner drops to the flat and where the safety is deep. Four verticals exploits the seam. The smash concept exploits the hole shot."
          },
          {
            badge: "SITUATIONAL",
            situation: { down: "1ST & 10", field: "OWN 20", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover2", routes: null,
            question: "WHY WOULD A DEFENSE PLAY SOFT COVER 2 FROM THEIR OWN TERRITORY?",
            hint: "Think about what the defense is trying to prevent from deep in their own end.",
            options: [
              "Prevent the explosive play — two deep safeties take away the big shot",
              "Generate more pass rush with fewer coverage defenders",
              "Eliminate all short throws underneath",
              "Force you to run the ball by making the pass look open"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","ok"],
            notes: [
              "Correct — Cover 2 deep protects against the game-changing explosive play. They give up short, not long.",
              "Cover 2 is a coverage call, not a pressure call. It uses the same four rushers.",
              "Underneath is actually soft in Cover 2. The defense surrenders short yardage willingly.",
              "This is partially true as a psychological element, but the primary goal is preventing the explosive play."
            ],
            explanation: "From deep in their own territory, Cover 2 prevents the explosive play. Two safeties deep means no shot over the top. The defense is comfortable giving up short throws because field position protects them. They want you to take 5 yards at a time, not 50."
          }
        ],
        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "2ND & 8", field: "OPP 40", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2", routes: "smash",
            question: "CORNER DRIVES TO THE FLAT AT THE SNAP. WHERE IS THE BALL?",
            hint: "The corner went down and out. What space did he just vacate above him?",
            options: [
              "Corner route behind him — he vacated the hole shot window",
              "Seam route — the safety rotated to the corner side",
              "The flat route — throw it before he gets there",
              "Slant inside — corner leaving opens the middle"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — if the corner drives to the flat, the hole shot window opens. Throw the corner route into it immediately.",
              "The seam can work if the safety rotated, but it requires a second read. The corner route is the primary answer here.",
              "Throwing the flat when the corner is already driving there is throwing into coverage, not away from it.",
              "The slant goes away from the corner but the safety is still over the middle. Not the primary answer."
            ],
            explanation: "Cover 2 decision tree: IF the corner drives to the flat, THROW the corner route behind him. He cannot be in both places. The smash concept is built on this exact conflict — a hitch holds the corner, the corner route goes over him into the window he just vacated."
          },
          {
            badge: "PLAY CALL",
            situation: { down: "3RD & 6", field: "OPP 28", score: "TIE 14-14", formation: "TRIPS RT" },
            defense: "cover2_trips", routes: "levels",
            question: "TRIPS VS COVER 2 ON 3RD AND 6 — WHAT IS THE BEST CALL?",
            hint: "Three receivers into the field corner. What concept floods him at three levels?",
            options: [
              "Levels — flat, comeback, and fade flood the corner simultaneously",
              "Four verticals — stress both safeties deep",
              "Quick outs — short and safe",
              "Flood concept — flat and corner from two receivers"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","ok"],
            notes: [
              "Correct — Levels floods the Cover 2 corner with three routes at three depths. He must choose one. The others are open.",
              "Four verticals attacks the seams but does not specifically exploit the corner conflict that trips creates.",
              "Quick outs are short of the sticks on 3rd and 6 and do not stress the coverage. Not the answer here.",
              "Flood with two receivers creates conflict, but three receivers at three levels is a more complete stress."
            ],
            explanation: "The levels concept floods the Cover 2 corner with three routes at three different depths on the same side. The corner must choose one level. The receiver at the level he abandons is open. Usually the comeback sits in the window between where the corner is and where the safety is."
          },
          {
            badge: "SITUATION IQ",
            situation: { down: "1ST & 10", field: "OWN 18", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover2", routes: null,
            question: "OWN 18 — COVER 2 — WHAT IS THE RIGHT CALL?",
            hint: "You are backed up. A turnover here does not just hurt — it ends the game.",
            options: [
              "Quick hitches — free yards, move the chains, protect the ball",
              "Four verticals — attack the seam for a big play",
              "Seam route — no one in the middle",
              "Screen pass — get the ball out quick"
            ],
            correct: 0,
            tiers: ["best","wrong","ok","ok"],
            notes: [
              "Correct — ball security first from your own 18. Quick hitches are free yards and eliminate turnover risk.",
              "Four verticals is good football but terrible situation football from your own 18. A pick-six ends the game.",
              "Seam route is technically available but requires timing and carries risk from your own end zone.",
              "Screen works in principle but more moving parts means more risk in a situation where you cannot afford one."
            ],
            explanation: "Situation IQ: From your own end zone on 1st and 10, ball security is the priority. Cover 2 gives you hitches all day — corners are playing off. Take the free 5-7 yards and move the chains. Four verticals might be open but a turnover from the 18 loses the game right now."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "2ND & 7", field: "OPP 35", score: "TIE 0-0", formation: "2x2" },
            defense: "tampa2", routes: "seam_c2",
            question: "YOU SEE TWO-HIGH AND THROW THE SEAM. THE MIKE INTERCEPTS IT. WHAT HAPPENED?",
            hint: "Not all two-high looks are the same. What is different about Tampa 2?",
            options: [
              "Tampa 2 — the Mike dropped deep into the seam. You assumed Cover 2 rules.",
              "The safety rotated late and jumped the route",
              "The corner pattern-matched and passed the seam off",
              "You held the ball too long and the safety read your eyes"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","ok"],
            notes: [
              "Correct — Tampa 2 looks identical to Cover 2 pre-snap. The Mike drop into the seam is the coverage tell you missed.",
              "Safety rotation is possible but would not produce an interception in that exact window. The Mike is the answer.",
              "Pattern matching exists but does not explain a Mike interception in the seam. Wrong mechanism.",
              "Eye discipline matters, but the root cause here is not knowing Tampa 2 exists and looks like Cover 2."
            ],
            explanation: "The most common Cover 2 mistake: assuming all two-high shells are the same. Tampa 2 looks identical pre-snap but the Mike linebacker drops deep into the seam at the snap. QBs who assume Cover 2 rules throw seams directly to him. Always confirm the Mike before throwing the seam."
          },
          {
            badge: "RED ZONE",
            situation: { down: "2ND & 3", field: "OPP 12", score: "UP 21-17", formation: "TRIPS LT" },
            defense: "cover2_rz", routes: "fade_flat",
            question: "RED ZONE COVER 2 — WHERE IS THE WINDOW?",
            hint: "The corner still owns the flat. The end zone is only 12 yards deep.",
            options: [
              "Back pylon fade — corner must choose flat or back corner of end zone",
              "Seam between safeties — they compress in the red zone",
              "Quick slant into the end zone",
              "Corner route from the slot at the back of the end zone"
            ],
            correct: 0,
            tiers: ["best","ok","ok","ok"],
            notes: [
              "Correct — back pylon fade forces the corner to choose. He cannot cover both the flat and the back pylon simultaneously.",
              "The seam is compressed in the red zone but still exists. Harder throw, higher risk. Fade is cleaner.",
              "Slant can work if the timing is right and the window opens, but it crosses into more traffic.",
              "Corner route from the slot can also work here — also exploits the corner's flat conflict. Solid alternative."
            ],
            explanation: "The back pylon fade beats red zone Cover 2. The corner still owns the flat — he cannot abandon it to chase a fade to the back pylon. The ball goes to the back corner of the end zone before he can recover. Throw it to the spot before your receiver arrives."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // COVER 3
    // ══════════════════════════════════════════════════════════
    {
      id: "cover3", name: "Cover 3", family: "Zone", tier: "free", filmKey: "Cover 3",
      overview: "Three-deep, four-under zone. One high safety. Corners bail to deep thirds. Four underneath zone defenders.",
      levels: {
        1: [
          {
            badge: "SAFETY READ",
            situation: { down: "1ST & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3", routes: null,
            question: "ONE SAFETY CENTERED AND DEEP. WHAT DOES THAT TELL YOU?",
            hint: "Single high safety. What coverage families show one high?",
            options: [
              "Middle of the field is closed — this is Cover 1 or Cover 3",
              "Middle of the field is open — two safeties split the halves",
              "Defense is in Cover 0 with no safety help",
              "Defense is in Cover 4 with four deep defenders"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — single high and centered means MOF closed. Cover 1 or Cover 3. Corner technique separates them.",
              "MOF open is the two-high read. Single high is the opposite — the middle is protected.",
              "Cover 0 has no safety deep at all. Single high means one safety IS back.",
              "Cover 4 shows two high safeties plus deep corners. Not a single high coverage."
            ],
            explanation: "One safety high and centered means the middle of the field is closed. This is your first Cover 1 versus Cover 3 read. Single high with corners bailing means Cover 3. Single high with corners pressed and defenders following motion means Cover 1."
          },
          {
            badge: "CORNER READ",
            situation: { down: "2ND & 7", field: "OPP 42", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3", routes: null,
            question: "CORNERS ARE BAILING PRE-SNAP. WHAT COVERAGE IS THIS?",
            hint: "Bailing means backpedaling before the snap. Zone or man?",
            options: [
              "Zone — corners bailing to deep thirds is a Cover 3 tell",
              "Man — corners giving a cushion before pressing",
              "Cover 0 — corners preparing to blitz",
              "Cover 4 — corners protecting their deep quarters"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","ok"],
            notes: [
              "Correct — corners bailing pre-snap to a deep third is the Cover 3 signature tell.",
              "Man corners either press or carry leverage. They do not bail pre-snap into a backpedal.",
              "Cover 0 corners are pressed at the line or showing blitz. They do not bail deep.",
              "Cover 4 corners do sit deep, but at 10-plus yards in their quarter rather than actively bailing. Close read."
            ],
            explanation: "Corners bailing pre-snap — backpedaling toward their deep third before the snap — is a Cover 3 tell. They are protecting vertical space and do not have man responsibility. Man coverage corners are either pressed or aligned with leverage to match their man."
          },
          {
            badge: "COVERAGE ID",
            situation: { down: "3RD & 8", field: "OWN 38", score: "DOWN 10-17", formation: "EMPTY" },
            defense: "cover3", routes: null,
            question: "EMPTY — ONE HIGH SAFETY — CORNERS BAILING — WHAT IS IT?",
            hint: "Empty forces the defense to show their hand. Put the reads together.",
            options: [
              "Cover 3 — single high, corners bailing, four underneath zones",
              "Cover 1 — single high with man coverage underneath",
              "Cover 0 — no safety help, all man",
              "Cover 4 — four deep defenders in their quarters"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — single high plus bailing corners plus empty motion check with no followers confirms Cover 3.",
              "Cover 1 is single high, but corners in Cover 1 do not bail — they carry their man. Motion would show followers.",
              "Cover 0 has no safety deep. Single high safety eliminates this.",
              "Cover 4 shows two high safeties. Single high eliminates Cover 4."
            ],
            explanation: "Empty formation forces defenses to declare. Single high safety plus corner bail technique confirms Cover 3. If it were Cover 1, the corners would be pressed or aligned with leverage and motion would show a defender following the receiver."
          }
        ],
        2: [
          {
            badge: "RESPONSIBILITY",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3", routes: "curl_flat",
            question: "WHAT IS THE HOOK-CURL LINEBACKER'S ASSIGNMENT IN COVER 3?",
            hint: "He is underneath. He is not going deep. What is his specific conflict?",
            options: [
              "He owns the curl zone and expands to the flat if threatened — he cannot cover both",
              "He drops to the deep middle to help the safety",
              "He blitzes on all passing downs",
              "He locks up the slot receiver man-to-man"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — hook-curl LB owns the curl at 12-15 yards and has flat responsibility if threatened. One defender, two zones.",
              "Dropping to the deep middle is the safety's job. The LB stays underneath in Cover 3.",
              "Hook-curl LBs in Cover 3 are coverage players, not designated blitzers.",
              "Man lock on the slot would make this Cover 1, not Cover 3. He plays zone."
            ],
            explanation: "The hook-curl linebacker owns the curl zone and has flat responsibility if threatened. He cannot cover both simultaneously. The curl-flat concept is designed specifically to exploit this conflict — one receiver holds him inside while another goes outside."
          },
          {
            badge: "CONFLICT",
            situation: { down: "2ND & 8", field: "OPP 45", score: "TIE 7-7", formation: "TRIPS RT" },
            defense: "cover3_trips", routes: "trips_post",
            question: "TRIPS VS COVER 3 — WHAT DOES THIS DO TO THE FREE SAFETY?",
            hint: "Three receivers to one side. The safety has to account for them somehow.",
            options: [
              "Trips pulls the safety toward the field, leaving the boundary corner isolated one-on-one",
              "The safety stays centered and ignores trips",
              "The safety rotates to the boundary to help the single receiver",
              "The safety and corner swap responsibilities"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — the safety must account for the trips overload, which leaves the boundary corner on an island.",
              "A safety who ignores trips would be out of position when the seam or post goes vertical to the field.",
              "Rotating to the boundary abandons the field where three receivers are. That is the wrong direction.",
              "No swap occurs in Cover 3. Assignments remain fixed, just the safety shifts toward trips."
            ],
            explanation: "Trips formation pulls the free safety toward the field to account for the three-receiver overload. He cannot help on the backside. That leaves the boundary corner in a true one-on-one against your single receiver with no safety over the top."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "3RD & 6", field: "OPP 30", score: "DOWN 3-10", formation: "2x2" },
            defense: "cover3", routes: "seam_dig",
            question: "WHERE IS THE PRIMARY VOID IN COVER 3?",
            hint: "Three defenders own the deep thirds. Four defend underneath. What is between those two levels?",
            options: [
              "The seam — between the corner's deep third and the safety's middle at 10-14 yards",
              "The flat — corners abandon it to bail deep",
              "The deep middle — the safety cannot cover everything",
              "The A-gap — linebackers are dropping, not filling"
            ],
            correct: 0,
            tiers: ["best","ok","ok","wrong"],
            notes: [
              "Correct — the seam at 10-14 yards is the primary void. Corner owns above it, LB is below it. Neither can get there.",
              "The flat is actually soft in Cover 3 — corners bail and leave it — so this has merit, but the seam is the primary void.",
              "The deep middle is where the safety lives. He protects it. The seam beside him is actually the void.",
              "A-gap filling is a run concept. In pass coverage the linebackers are in their zones, not the A-gap."
            ],
            explanation: "The seam is the void in Cover 3. The corner owns the deep third. The safety owns the middle. But the seam between them — about 10-14 yards just inside the hash — is a gray area where neither defender can easily get. A seam route or dig route finds this window."
          },
          {
            badge: "SITUATIONAL",
            situation: { down: "2ND & 4", field: "OWN 44", score: "UP 28-21", formation: "2x2" },
            defense: "cover3", routes: null,
            question: "UP 7 LATE — DEFENSE PLAYS SOFT COVER 3 — WHY?",
            hint: "They are giving up the short game on purpose. What is their actual goal?",
            options: [
              "They want you to score fast so they get the ball back with time",
              "They have no timeouts and cannot blitz",
              "Their corners cannot play man coverage",
              "Cover 3 is their best run defense"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — soft Cover 3 while trailing is calculated. Quick score means possession with time to respond.",
              "Timeouts factor in but are not the reason for the coverage call itself. The strategy is possession-based.",
              "Personnel limitations are not the reason for a soft coverage call. This is strategic, not forced.",
              "Cover 3 can help in run defense, but playing it soft is not about run defense — it is about time management."
            ],
            explanation: "Soft Cover 3 while trailing late is a calculated decision. The defense wants you to score quickly so they get the ball back with time to respond. As the offense, do not play into this. Take the underneath throws, stay in bounds, and burn the clock."
          }
        ],
        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "2ND & 8", field: "OPP 42", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3", routes: "curl_flat",
            question: "CURL-FLAT DEFENDER WIDENS TO THE FLAT. WHERE IS THE BALL?",
            hint: "He went outside. What did he leave open behind him?",
            options: [
              "The curl — he widened and left that zone open at 12-15 yards",
              "The flat — throw it before he gets there",
              "The seam — safety rotated toward the curl side",
              "The deep third — corner bailed too early"
            ],
            correct: 0,
            tiers: ["best","wrong","ok","wrong"],
            notes: [
              "Correct — if he widens to the flat, the curl zone is vacated. Throw the curl into the window he left.",
              "He is already there. Throwing the flat into a closing defender is not the answer.",
              "The seam is valid if the safety rotated, but that is a secondary read. The curl is the primary answer to his flat drop.",
              "The deep third is the corner's assignment. He is not leaving it because the LB went flat."
            ],
            explanation: "Cover 3 decision tree: IF the curl-flat defender widens to the flat, THROW the curl behind him. He vacated that zone. The curl route sits in the window he just left. Read one defender — throw where he is not."
          },
          {
            badge: "PLAY CALL",
            situation: { down: "3RD & 9", field: "OWN 38", score: "DOWN 10-17", formation: "EMPTY" },
            defense: "cover3", routes: "four_verts",
            question: "EMPTY — 3RD AND 9 — COVER 3 — MUST CONVERT",
            hint: "Five receivers, three deep zones. What stresses all three simultaneously?",
            options: [
              "Four verticals — the single safety cannot help everywhere",
              "All curls at 12 yards — sit in front of the zones",
              "Hitch and go — beat the bailing corners",
              "Mesh concept — stress the underneath zones"
            ],
            correct: 0,
            tiers: ["best","wrong","ok","wrong"],
            notes: [
              "Correct — four verticals stresses all three deep zones at once. The safety must choose. One receiver finds the void.",
              "Curls sit in front of underneath defenders at 12 yards. You need 9 yards and four defenders are waiting there.",
              "Hitch-and-go can work against bailing corners on the right matchup, but it requires a specific setup. Four verts is cleaner.",
              "Mesh attacks underneath and will not get 9 yards. You need to stress the deep coverage on 3rd and 9."
            ],
            explanation: "Four verticals from empty on 3rd and 9 creates an impossible equation for Cover 3. All three deep zones are stressed simultaneously. Read the safety after the snap — wherever he commits, throw the opposite side. One receiver will always find the void."
          },
          {
            badge: "SITUATION IQ",
            situation: { down: "2ND & 4", field: "OWN 44", score: "UP 28-21", formation: "2x2" },
            defense: "cover3", routes: null,
            question: "UP 7 LATE — COVER 3 PLAYING SOFT — WHAT IS THE RIGHT CALL?",
            hint: "The defense wants you to score fast. Your job is to not give them what they want.",
            options: [
              "Check down to the back — get yards, stay in bounds, burn clock",
              "Four verticals — score fast and give them the ball back",
              "Go route — the corner is giving a ton of cushion",
              "Deep crossing routes — attack behind the underneath defenders"
            ],
            correct: 0,
            tiers: ["best","wrong","ok","ok"],
            notes: [
              "Correct — check down, get yards, stay in bounds. You are managing the game, not playing to score.",
              "Scoring fast is exactly what the defense wants. Do not give them the ball back with time.",
              "The go route might be open, but scoring fast kills your lead. Clock management wins here.",
              "Deep crossers can gain yards but may include incomplete passes that stop the clock. Stay in bounds."
            ],
            explanation: "The check down wins this game. You are up 7. Get 4 yards, stay in bounds, burn clock. Four verticals might score — but an incomplete stops the clock and gives them the ball back with time. Clock management over yards."
          },
          {
            badge: "TRIPS READ",
            situation: { down: "2ND & 7", field: "OPP 45", score: "TIE 7-7", formation: "TRIPS RT" },
            defense: "cover3_trips", routes: "trips_post",
            question: "TRIPS VS COVER 3 — SAFETY WENT TO THE FIELD — WHERE IS THE BALL?",
            hint: "The safety left the boundary. That corner is now alone. What route exploits that?",
            options: [
              "Backside post — boundary corner is isolated with no safety help",
              "Smash to the boundary — corner cannot cover both",
              "Screen to trips — flood the underneath zones",
              "Seam to the field — attack where the safety went"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — the backside post is the answer. Boundary corner one-on-one with zero help over the top.",
              "Smash attacks the boundary, but the corner in Cover 3 is bailing to his third — not in a flat conflict like Cover 2.",
              "A screen does not exploit the safety rotation. It stays underneath where defenders are still present.",
              "Throwing the seam to the field where the safety just committed is throwing into coverage, not away from it."
            ],
            explanation: "The backside post is the answer when trips pulls the safety to the field. Your single boundary receiver is in a true one-on-one against a corner with zero safety help over the top. Win the release, stem vertical, and break inside. Big play."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "3RD & 6", field: "OPP 32", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3", routes: "curl_flat",
            question: "WHAT IS THE MOST COMMON QB MISTAKE AGAINST COVER 3?",
            hint: "Think about what most QBs do with their eyes and their timing.",
            options: [
              "Throwing the curl before the LB has actually widened to the flat",
              "Throwing four verticals when the routes are not set",
              "Checking to a run when Cover 3 invites passing",
              "Throwing the flat when the corner has not committed"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","ok"],
            notes: [
              "Correct — QBs read the coverage, not the defender. Throwing the curl before the LB widens throws it right to him.",
              "Timing on four verticals matters too, but the most common mistake is in the curl-flat read, not the deep game.",
              "Cover 3 does invite passing, so checking to a run is a mistake — but it is not the most common one.",
              "Throwing the flat pre-commitment is also a mistake but less common than the curl timing error."
            ],
            explanation: "The most common Cover 3 mistake is throwing the curl before the hook-curl LB actually commits to the flat. QBs read the coverage and assume the curl is open, but if the LB has not widened yet he is sitting right in the curl window. Read the defender. Throw where he is not."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // COVER 1
    // ══════════════════════════════════════════════════════════
    {
      id: "cover1", name: "Cover 1", family: "Man", tier: "free", filmKey: "Cover 1",
      overview: "Man coverage underneath with one free safety deep. Motion confirms it. Attack the best matchup.",
      levels: {
        1: [
          {
            badge: "CONFIRM MAN",
            situation: { down: "3RD & 5", field: "OPP 33", score: "TIE 0-0", formation: "2x2" },
            defense: "cover1", routes: null,
            question: "HOW DO YOU CONFIRM THIS IS MAN COVERAGE BEFORE THE SNAP?",
            hint: "There is one tool that costs nothing and tells you everything.",
            options: [
              "Motion a receiver — if a defender follows, it is man",
              "Check safety depth — single high always means man",
              "Watch the corners bail at the snap",
              "Count the linebackers in the box"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — motion is the truth serum. A follower confirms man. No follower confirms zone.",
              "Single high narrows it to Cover 1 or Cover 3, but does not confirm man by itself. Motion is the final confirmation.",
              "Corners bailing actually suggests zone, not man. Man corners carry their leverage.",
              "Box count tells you about pressure and run fits, not coverage type."
            ],
            explanation: "Motion is the QB's truth serum. Shift any receiver across the formation before the snap. If a defender follows — it is man coverage. If no one follows and the defense bumps or rotates — it is zone. Elite QBs do this on almost every play. It costs nothing and tells you everything."
          },
          {
            badge: "FREE SAFETY",
            situation: { down: "2ND & 6", field: "OPP 40", score: "TIE 0-0", formation: "2x2" },
            defense: "cover1", routes: null,
            question: "WHAT IS THE FREE SAFETY'S ROLE IN COVER 1?",
            hint: "He is the only defender without a man assignment.",
            options: [
              "He has no man assignment — he roams free to help wherever needed",
              "He covers the deep middle zone like Cover 3",
              "He locks up the tight end man-to-man",
              "He is the designated blitzer"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — the free safety has no man assignment. He is the insurance policy over the top.",
              "He does protect the deep middle in effect, but it is not a zone assignment. He reacts to routes rather than owning a zone.",
              "In Cover 1 the TE is covered man-to-man by a linebacker or safety. Not the free safety.",
              "The free safety is the deepest defender, not a blitzer. Cover 0 uses both safeties aggressively."
            ],
            explanation: "The free safety in Cover 1 has no man assignment. He is free to help over the top on any vertical route. This is the insurance policy that separates Cover 1 from Cover 0. Beat the free safety and it is a touchdown."
          },
          {
            badge: "COVERAGE ID",
            situation: { down: "1ST & 10", field: "OWN 30", score: "TIE 7-7", formation: "2x2" },
            defense: "cover1_press", routes: null,
            question: "CORNERS PRESSED. ONE SAFETY HIGH. COVER 0 OR COVER 1?",
            hint: "Both show pressed man. What is the one thing that separates them?",
            options: [
              "Cover 1 — one safety stayed deep. Cover 0 has no safety deep.",
              "Cover 0 — pressed corners always mean zero coverage",
              "Cover 1 — linebackers are in zone drops",
              "Cover 0 — showing more rushers than blockers"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","ok"],
            notes: [
              "Correct — the safety over the top is the only separation between Cover 1 and Cover 0.",
              "Pressed corners are in both Cover 0 and Cover 1. The corners alone do not tell you which one it is.",
              "In Cover 1 the linebackers cover their man — they are in man, not zone. Not a distinguishing factor.",
              "Box count tells you about pressure potential, but even Cover 1 can show overload looks. The safety is the answer."
            ],
            explanation: "The safety is the only thing that separates Cover 1 from Cover 0. Both show pressed man corners. Both show man alignment underneath. The difference is one safety staying deep in Cover 1. When both safeties are in the box — that is Cover 0 with no help."
          }
        ],
        2: [
          {
            badge: "MAN FREE",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 0-0", formation: "2x2" },
            defense: "cover1", routes: null,
            question: "WHY IS COVER 1 CALLED MAN FREE?",
            hint: "Man below. What is free above?",
            options: [
              "Man coverage underneath with one free safety who has no assignment",
              "The corners are free to play any technique they choose",
              "The linebackers are free to blitz without coverage responsibility",
              "The defense freely rotates the safety to either side"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — man underneath, one free safety over the top with no assignment. That is the definition.",
              "Corners play assigned techniques in Cover 1. They are not free to freelance.",
              "Linebackers cover their man in Cover 1. The blitzers are specifically tagged as blitzers.",
              "The free safety can go anywhere, but he does not rotate on a schedule. He reacts."
            ],
            explanation: "Man Free means man coverage underneath with one free safety over the top. The safety is the free player — he has no assigned receiver and can help wherever the coverage needs him."
          },
          {
            badge: "CONFLICT",
            situation: { down: "2ND & 6", field: "OPP 40", score: "TIE 14-14", formation: "TRIPS RT" },
            defense: "cover1", routes: "mesh",
            question: "TRIPS VS COVER 1 — WHAT CREATES THE CONFLICT?",
            hint: "Three receivers compressed together. Man defenders have to navigate what?",
            options: [
              "Traffic — man defenders must navigate through each other on pick routes",
              "Speed — three fast receivers overwhelm the corners",
              "Alignment — defense cannot align properly to trips",
              "Depth — three receivers force the safety to choose"
            ],
            correct: 0,
            tiers: ["best","wrong","ok","ok"],
            notes: [
              "Correct — traffic is the primary conflict. Pick and rub routes force man defenders to run into each other.",
              "Speed alone does not beat man coverage systematically. Traffic is the structural conflict trips creates.",
              "Defenses can align to trips in man. The conflict is not alignment — it is navigation at the snap.",
              "The safety does have to account for trips vertically, but traffic is the primary conflict in man coverage."
            ],
            explanation: "Man coverage struggles against trips and bunch because defenders must physically navigate through each other when receivers create traffic. A pick route creates legal obstruction. The defender runs into a wall. This is why mesh and rub routes are the primary answers against man."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "3RD & 4", field: "OPP 22", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover1_press", routes: "slant",
            question: "WHY IS THE SLANT THE ANSWER AGAINST OUTSIDE PRESS COVERAGE?",
            hint: "Corner is pressing from outside leverage. His inside shoulder is exposed.",
            options: [
              "The slant attacks the inside shoulder before the corner can recover",
              "The slant is always the fastest release against any coverage",
              "The slant goes away from the free safety",
              "The slant creates a natural pick against the corner"
            ],
            correct: 0,
            tiers: ["best","wrong","ok","wrong"],
            notes: [
              "Correct — outside press leverage exposes the inside. The slant attacks that exact vulnerability before recovery is possible.",
              "The slant is fast but is not a universal answer. It specifically beats outside press leverage.",
              "Going away from the safety is a benefit, but it is a secondary reason. The primary reason is the leverage attack.",
              "Picks are illegal if deliberate. The slant wins because of leverage, not through contact with the corner."
            ],
            explanation: "Outside press leverage means the corner is aligned outside the receiver's shoulder. His goal is to jam and re-route outside. The slant goes the opposite direction — inside — attacking the shoulder the corner exposed. Before he can recover, the receiver is past him. Get it out in 1.5 seconds."
          },
          {
            badge: "ROBBER",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 7-7", formation: "2x2" },
            defense: "cover1_robber", routes: null,
            question: "WHAT IS COVER 1 ROBBER AND WHY DOES IT CHANGE YOUR ATTACK?",
            hint: "One linebacker is not matched on a receiver. Where is he and what is he doing?",
            options: [
              "The Mike drops into a short middle zone to steal crossers and slants — making inside throws dangerous",
              "The free safety rolls down to become a second safety in the box",
              "The boundary corner rotates inside to rob outside routes",
              "The nickel drops deep instead of covering the slot"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — the Mike in Cover 1 Robber sits at 6-10 yards in the middle to steal crossing routes and slants.",
              "The free safety stays deep in Cover 1 Robber. He does not roll down.",
              "No corner rotation occurs in Cover 1 Robber. Corners stay with their man.",
              "The nickel covers the slot man-to-man in Cover 1 Robber. He does not drop deep."
            ],
            explanation: "Cover 1 Robber puts the Mike linebacker in a short middle zone instead of matching a back. He sits at 6-10 yards and steals crossers, slants, and digs. That means inside throws are trapped. Attack the perimeter where he cannot reach."
          }
        ],
        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "3RD & 5", field: "OPP 33", score: "TIE 0-0", formation: "2x2" },
            defense: "cover1", routes: null,
            question: "COVER 1 CONFIRMED BY MOTION. WHAT IS YOUR FIRST READ?",
            hint: "Man coverage is a matchup game. What do you look for first?",
            options: [
              "Find the best matchup pre-snap and attack it immediately",
              "Look for the free safety and throw away from him",
              "Run four verticals to stress the single safety",
              "Check to a run — man coverage invites it"
            ],
            correct: 0,
            tiers: ["best","ok","ok","wrong"],
            notes: [
              "Correct — man coverage is solved pre-snap by identifying the best matchup. Find it. Attack it.",
              "Throwing away from the safety is sound but is a secondary consideration. Finding the matchup is primary.",
              "Four verticals does stress the safety, but the best play is finding the specific mismatch, not a blanket concept.",
              "Man coverage does often invite the run, but surrendering the best pass matchup to run is not the answer here."
            ],
            explanation: "Man coverage is a matchup game. Use motion to confirm man before the snap, then identify the best matchup: fastest receiver on slowest corner, slot receiver on linebacker, height mismatch. Find it pre-snap. Attack it."
          },
          {
            badge: "PLAY CALL",
            situation: { down: "2ND & 6", field: "OPP 40", score: "TIE 14-14", formation: "TRIPS RT" },
            defense: "cover1", routes: "mesh",
            question: "TRIPS VS COVER 1 — WHAT IS THE BEST ATTACK?",
            hint: "Man defenders navigate through traffic. Use that against them.",
            options: [
              "Rub routes — create natural picks in the compressed bunch",
              "Four verticals — stress the single free safety",
              "Quick outs — get the ball out before man locks",
              "Motion the slot and throw where he was"
            ],
            correct: 0,
            tiers: ["best","ok","ok","wrong"],
            notes: [
              "Correct — rub routes in a compressed bunch force man defenders to collide. Legal obstruction. Open receiver.",
              "Four verticals does stress the safety but does not specifically exploit the traffic that trips creates against man.",
              "Quick outs can work if the corner is giving outside leverage, but they do not use the trips structure.",
              "Throwing where the receiver was is a zone concept. In man coverage, the defender moves with him."
            ],
            explanation: "Rub routes are devastating against man coverage in trips. Receivers compressed together force man defenders to navigate around each other. A pick route where one receiver crosses through creates legal obstruction. The mesh concept and switch releases are built specifically to create this traffic."
          },
          {
            badge: "ROBBER ANSWER",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 7-7", formation: "2x2" },
            defense: "cover1_robber", routes: null,
            question: "COVER 1 ROBBER — HOW DO YOU PUNISH IT?",
            hint: "The Mike vacated his run gap to play zone. Where did he leave space?",
            options: [
              "Run the ball and attack the perimeter — the Mike vacated his gap",
              "Throw inside immediately — he cannot be everywhere",
              "Attack the deep middle — he is only shallow",
              "Four verticals to move the free safety"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","ok"],
            notes: [
              "Correct — the Mike left his run fit. The cutback lane may be open. Perimeter screens and quick outs also avoid him.",
              "Throwing inside feeds the robber exactly what he is designed to stop. Do not.",
              "The deep middle is the free safety's responsibility, not something the Mike's absence opens.",
              "Four verticals moves the safety but the Mike is underneath. You need to attack where the Mike was, not where the safety is."
            ],
            explanation: "The robber punishes himself if you recognize it. The Mike left his run fit — run the ball. If you pass, attack the perimeter with quick outs and screens where the robber cannot reach. Do not feed the slants and crossers he is sitting there waiting for."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "3RD & 8", field: "OPP 35", score: "DOWN 17-24", formation: "EMPTY" },
            defense: "cover1", routes: null,
            question: "EMPTY VS COVER 1 — WHAT IS THE MOST COMMON QB MISTAKE?",
            hint: "Five receivers, man coverage. What do most QBs do wrong?",
            options: [
              "Holding the ball looking for perfect instead of identifying the matchup pre-snap",
              "Throwing too quickly before routes have developed",
              "Running when they should be throwing",
              "Checking to a run against man coverage"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — man coverage is solved before the snap. Searching at the snap means you are already behind.",
              "Throwing too quickly can also be a mistake, but it is secondary to the pre-snap identification problem.",
              "Empty formation removes the RB, so running is not a realistic option here.",
              "Empty formation makes a run check impossible. This is not the mistake being made."
            ],
            explanation: "The most common Cover 1 mistake in empty is holding the ball looking for the perfect play instead of identifying the best matchup before the snap and attacking it immediately. Man coverage is solved pre-snap. If you are still searching at the snap, you are already behind."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // COVER 0
    // ══════════════════════════════════════════════════════════
    {
      id: "cover0", name: "Cover 0", family: "Man", tier: "free", filmKey: "Cover 0",
      overview: "All-out man coverage with zero safety help. Hot route must be identified before the snap.",
      levels: {
        1: [
          {
            badge: "COVERAGE ID",
            situation: { down: "3RD & 1", field: "OPP 3", score: "TIE 21-21", formation: "2x2" },
            defense: "cover0", routes: null,
            question: "WHAT TELLS YOU THERE IS ZERO SAFETY HELP?",
            hint: "Look for where the safeties are — or where they are NOT.",
            options: [
              "Both safeties walked into the box — nobody is playing deep",
              "One safety is high and one is in the box",
              "Both safeties are showing blitz but will rotate back",
              "Corner depth tells you — not the safeties"
            ],
            correct: 0,
            tiers: ["best","wrong","ok","wrong"],
            notes: [
              "Correct — both safeties in the box with no one playing deep is Cover 0. Count them.",
              "One safety high means Cover 1, not Cover 0. One safety is still providing help.",
              "Showing blitz and rotating back is a disguise technique, but if both walk up and stay, it is Cover 0.",
              "Corner depth helps identify technique but safeties tell you whether help exists over the top."
            ],
            explanation: "When both safeties walk into the box before the snap, there is zero help deep. Nobody is playing centerfield. Every DB is matched man-to-man. This is Cover 0. Count the rushers — if more rush than you have blockers, the hot route must come out in under 1.5 seconds."
          },
          {
            badge: "HOT ROUTE",
            situation: { down: "2ND & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover0_dis", routes: null,
            question: "THEY SHOWED TWO HIGH BUT BOTH SAFETIES WALKED DOWN LATE. WHAT IS IT?",
            hint: "Late safety movement in the final 2 seconds before the snap changes everything.",
            options: [
              "Disguised Cover 0 — they showed Cover 2 and gave you all-out blitz",
              "Still Cover 2 — safeties sometimes walk up and rotate back",
              "Cover 3 Buzz — one safety dropped and one stayed high",
              "Cover 4 — all four DBs are deep"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — both safeties walking down late after showing two-high is disguised Cover 0. The snap is your window.",
              "Sometimes true on a play-fake, but when both walk down late before the snap, you must treat it as Cover 0.",
              "Cover 3 Buzz would leave one safety deep. Both walking down means zero help.",
              "Cover 4 keeps all four DBs deep. Both safeties walking down is the opposite."
            ],
            explanation: "When both safeties walk down late after showing two-high, they are running disguised Cover 0. They showed Cover 2 and gave you all-out blitz with zero safety help. Watch the safeties all the way through the snap."
          },
          {
            badge: "BOX COUNT",
            situation: { down: "4TH & 1", field: "OPP 8", score: "DOWN 14-17", formation: "2x2" },
            defense: "cover0", routes: null,
            question: "YOU COUNT MORE RUSHERS THAN BLOCKERS. WHAT MUST HAPPEN?",
            hint: "Math. More rushers than blockers means someone is unblocked.",
            options: [
              "A hot route must be identified and the ball thrown immediately at the snap",
              "Check to a run — they are loading the box for you",
              "Wait in the pocket and let routes develop deep",
              "Call a timeout and reset the protection"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","ok"],
            notes: [
              "Correct — more rushers than blockers is a math problem. Someone is free. Hot route. Ball out in 1.2 seconds.",
              "Running into an overloaded box is the wrong answer on a passing down. They want you to hand off.",
              "Waiting in the pocket with more rushers than blockers means a sack. There is no time.",
              "A timeout can reset the situation if you have one and want to regroup, but the hot route process is the answer."
            ],
            explanation: "When you count more rushers than blockers someone is coming free. The hot route must be identified before the snap and the ball thrown immediately. There is no waiting. There is no pocket. The ball leaves your hand in 1.2-1.5 seconds or you are taking a sack."
          }
        ],
        2: [
          {
            badge: "WHY DEFENSES RUN IT",
            situation: { down: "3RD & 1", field: "OPP 3", score: "TIE 21-21", formation: "2x2" },
            defense: "cover0", routes: null,
            question: "WHY DOES A DEFENSE GAMBLE WITH COVER 0?",
            hint: "Zero safety help is a massive risk. What is the defense betting on?",
            options: [
              "They are betting the pressure gets to you before the hot route can develop",
              "They are betting their corners are better than your receivers",
              "They are betting you will check to a run",
              "They are betting you do not know the blitz is coming"
            ],
            correct: 0,
            tiers: ["best","ok","ok","ok"],
            notes: [
              "Correct — Cover 0 is a timing bet. They give up all safety help to win the pressure race.",
              "Personnel matchup confidence is a factor, but the fundamental bet is always about pressure timing.",
              "Hoping for a run check is a side benefit, not the primary reasoning.",
              "Disguising the blitz helps, but the core bet is still about pressure speed vs hot route speed."
            ],
            explanation: "Cover 0 is a bet that pressure wins before the hot route can develop. If you identify the hot pre-snap and throw it immediately, the defense loses that bet every time. If you hold the ball for even one second too long, they win."
          },
          {
            badge: "RESPONSIBILITY",
            situation: { down: "2ND & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover0", routes: null,
            question: "IN COVER 0, WHAT IS THE RUNNING BACK'S AUTOMATIC RESPONSIBILITY?",
            hint: "Every offense has a built-in answer. The RB is the key.",
            options: [
              "Release to the flat as an automatic hot route the moment blitz shows",
              "Stay in and block the free rusher every play",
              "Run a deep route to stress the coverage",
              "Check with the QB and block based on the call"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — the RB angle or Texas route to the flat is the built-in hot route against any blitz package.",
              "Keeping the RB in to block is valid on some calls, but the automatic hot release is the foundational answer.",
              "A deep route from the RB against Cover 0 pressure would not develop before the pocket collapses.",
              "Checking with the QB takes time. The hot route is automatic and pre-snap — no communication needed."
            ],
            explanation: "The running back's angle or Texas route is the built-in hot route against any blitz. He releases to the flat automatically while everyone else runs their routes. The back is now one-on-one with a linebacker in open space — a guaranteed mismatch."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "4TH & 2", field: "OPP 12", score: "DOWN 14-17", formation: "2x2" },
            defense: "cover0", routes: null,
            question: "WHAT IS THE FUNDAMENTAL WEAKNESS OF COVER 0?",
            hint: "No safety help means something specific about every receiver.",
            options: [
              "Every receiver is in a one-on-one with no help over the top",
              "The flat zones are completely empty",
              "The defense has no run support",
              "Corners must play without any coaching"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — every receiver one-on-one with zero help. One missed assignment is a touchdown.",
              "The flats may be soft too, but the defining weakness is the one-on-one matchup with no safety net.",
              "Cover 0 still has run fits from linebackers and the safeties who walked up. Run support exists.",
              "This is not a meaningful football concept."
            ],
            explanation: "Cover 0's fundamental weakness is that every receiver is in a one-on-one matchup with zero safety help. One defender missed and it is a touchdown. The QB's job is to find the one-on-one and win it immediately."
          },
          {
            badge: "CORNER BLITZ",
            situation: { down: "3RD & 5", field: "OPP 22", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover0_corner", routes: null,
            question: "A CORNER IS BLITZING IN COVER 0. WHAT IS THE AUTOMATIC READ?",
            hint: "When a corner blitzes, think carefully about what happens to his receiver.",
            options: [
              "The blitzing corner's receiver — he is uncovered or covered late",
              "The opposite side — always throw away from blitz pressure",
              "The running back check-down — always safe",
              "The tight end seam — blitzes open the middle"
            ],
            correct: 0,
            tiers: ["best","wrong","ok","ok"],
            notes: [
              "Correct — the blitzing corner left his receiver. That receiver is the automatic throw. Eyes and feet go there pre-snap.",
              "Throwing away from pressure is instinct but not always correct. The blitzer created a free receiver — throw there.",
              "The RB check-down is available but it is not the automatic read. The vacated receiver is closer to a score.",
              "The seam can open when corners blitz but it requires more time. The immediate read is the vacated receiver."
            ],
            explanation: "The blitzing corner's receiver is the automatic read. That corner is running toward you at the snap — his receiver is either uncovered or covered late. Set your eyes and feet toward that side before the snap. Ball goes there immediately at the snap."
          }
        ],
        3: [
          {
            badge: "DECISION TREE",
            situation: { down: "3RD & 1", field: "OPP 3", score: "TIE 21-21", formation: "2x2" },
            defense: "cover0", routes: null,
            question: "COVER 0 — MORE RUSHERS THAN BLOCKERS — WHAT IS THE FULL PROCESS?",
            hint: "This is solved entirely before the snap. Walk through the steps.",
            options: [
              "Identify hot pre-snap, confirm at snap, throw immediately in 1.2 seconds",
              "Take the snap, feel pressure, then find the open receiver",
              "Identify hot, but wait to confirm coverage post-snap before throwing",
              "Use your legs — Cover 0 leaves scramble lanes open"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","ok"],
            notes: [
              "Correct — Cover 0 is solved before the snap. Three steps: identify, confirm, throw. No hesitation.",
              "Feeling pressure post-snap and then finding a receiver is too slow. You are already sacked.",
              "Waiting to confirm post-snap costs the fraction of a second that gets you sacked. Pre-snap identification is enough.",
              "Scrambling can work if the pocket collapses and the hot route is not open, but it is not the primary answer."
            ],
            explanation: "Cover 0 is solved before the snap. Step 1: identify the hot receiver based on who is blitzing. Step 2: confirm at the snap that the blitz is coming. Step 3: throw immediately. 1.2-1.5 seconds. No hesitation. This is not a read — it is a pre-snap answer."
          },
          {
            badge: "SITUATION IQ",
            situation: { down: "3RD & 3", field: "OWN 15", score: "TIE 10-10", formation: "2x2" },
            defense: "cover0", routes: null,
            question: "OWN 15 — COVER 0 — NO SAFETY — DO YOU TAKE THE DEEP SHOT?",
            hint: "No safety means the go route is wide open. But where are you on the field?",
            options: [
              "No — quick screen or flat route first. A turnover here from your own 15 loses the game.",
              "Yes — no safety help means a free touchdown",
              "Yes — Cover 0 is always a deep shot situation",
              "No — check to a run because the box is loaded"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","ok"],
            notes: [
              "Correct — situation controls the call. A sack, fumble, or pick from your own 15 could end the game right now.",
              "The deep shot is tempting and may be open, but the risk of a turnover from your own 15 outweighs the reward.",
              "Cover 0 is not always a deep shot situation. Situation and field position matter as much as coverage.",
              "Checking to a run is reasonable since the box may have gaps, but the quick flat is the safest answer."
            ],
            explanation: "Situation IQ: Take the safe throw from your own 15 versus Cover 0. The deep shot is tempting because there is no safety. But a sack, pick, or fumble in your own end zone loses the game. The quick screen or flat route gets the ball out before pressure arrives and preserves the drive."
          },
          {
            badge: "COMMON MISTAKE",
            situation: { down: "3RD & 1", field: "OPP 5", score: "DOWN 21-24", formation: "2x2" },
            defense: "cover0", routes: null,
            question: "COVER 0 GOAL LINE — WHAT IS THE MOST DANGEROUS QB MISTAKE?",
            hint: "Cover 0 puts panic in QBs. What is the worst reaction to that pressure?",
            options: [
              "Holding the ball and waiting for routes to develop — pocket is gone in 1.5 seconds",
              "Throwing the hot route too quickly before confirming the blitz",
              "Checking to a run when Cover 0 invites the pass",
              "Using a timeout instead of executing the play"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","ok"],
            notes: [
              "Correct — holding the ball against Cover 0 is fatal. The answer was identified before the snap. Trust it.",
              "Throwing too quickly before confirming is also a mistake — but less costly than holding the ball. Pre-snap work prevents this.",
              "Cover 0 invites the pass, so checking to a run gives up the advantage. But this is not the most common or dangerous error.",
              "A timeout is a valid reset if you have one, but the answer is executing the hot route, not burning a timeout."
            ],
            explanation: "Holding the ball against Cover 0 is the biggest mistake. Defenses call Cover 0 specifically because they know QBs sometimes freeze when they see all-out pressure. The pocket is gone in 1.5 seconds. If you are waiting for routes to develop, you are already taking a sack. Trust your pre-snap answer."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // EVEN FRONT
    // ══════════════════════════════════════════════════════════
    {
      id: "evenfront", name: "Even Front", family: "Front", tier: "free", filmKey: "Even Front",
      overview: "Four defensive linemen with three linebackers. Each lineman controls one gap. Standard base defense.",
      levels: {
        1: [
          {
            badge: "FRONT ID",
            situation: { down: "1ST & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2", routes: null,
            question: "FOUR LINEMEN ON THE GROUND. THREE LINEBACKERS BEHIND. WHAT FRONT IS THIS?",
            hint: "Count the down linemen. Four is the defining feature.",
            options: [
              "Even Front — four down linemen with three linebackers, 4-3 structure",
              "Odd Front — three linemen with four linebackers",
              "Bear Front — five linemen on the line of scrimmage",
              "Nickel — five defensive backs replacing a linebacker"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — four down linemen plus three linebackers is the Even Front or 4-3.",
              "Odd Front has three linemen. You counted four.",
              "Bear Front has five linemen at the line of scrimmage. You counted four.",
              "Nickel replaces a linebacker with a DB. You still see three linebackers here."
            ],
            explanation: "Four defensive linemen on the ground with three linebackers behind them is the Even Front or 4-3. It is called even because there are an even number of linemen on each side of the center. The most common base front in football."
          },
          {
            badge: "BOX COUNT",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2", routes: null,
            question: "HOW MANY DEFENDERS ARE IN THE BOX IN A STANDARD 4-3?",
            hint: "Count linemen plus linebackers. Do safeties count?",
            options: [
              "Seven — four linemen plus three linebackers",
              "Eight — the strong safety always adds to the box",
              "Five — only interior linemen count",
              "Six — the Sam linebacker is always outside the box"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — four linemen plus three linebackers equals seven in the box. Safeties are not in the box in base coverage.",
              "Eight is possible when the safety rolls down, but the base count in standard 4-3 coverage is seven.",
              "All four linemen count — not just the interior two.",
              "The Sam may walk out in some alignments, but in base 4-3 all three linebackers are in the box."
            ],
            explanation: "A standard 4-3 has seven defenders in the box: four linemen plus three linebackers. The safeties are typically not counted as box defenders in base coverage — they play further back."
          },
          {
            badge: "QB IMPACT",
            situation: { down: "2ND & 4", field: "OWN 35", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2", routes: null,
            question: "HOW DOES AN EVEN FRONT AFFECT YOUR PROTECTION CALL?",
            hint: "Four linemen rushing is predictable. What does predictability give you?",
            options: [
              "More predictable — easier to identify who is rushing and set protection",
              "More complex — four linemen create more stunts and games",
              "Irrelevant — the front does not affect the protection call",
              "Harder — must account for all four linemen individually"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — four linemen typically rushing is predictable. Slide protection off the Mike and account for four.",
              "Stunts and games exist in the Even Front, but the base rush is more predictable than the Odd Front.",
              "The front absolutely affects the protection call. It determines who you slide toward and who the RB accounts for.",
              "Accounting for four linemen is actually easier than accounting for four linebackers who can rush or drop."
            ],
            explanation: "The Even Front is more predictable for the QB. Four linemen typically rushing means you can identify the rush threat pre-snap more easily. Set protection off the Mike, account for the four linemen, and trust your blockers."
          }
        ],
        2: [
          {
            badge: "STRENGTHS",
            situation: { down: "1ST & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2", routes: null,
            question: "WHAT ARE THE STRENGTHS OF THE EVEN FRONT?",
            hint: "Four linemen controlling gaps. What does that do well structurally?",
            options: [
              "Strong gap integrity, clear assignments, and good against inside runs",
              "Maximum pass rush and blitz capability from any position",
              "Maximum flexibility — any linebacker can rush or drop",
              "Best against spread formations and outside runs"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — clear gap assignments and strong interior run defense are the Even Front's core strengths.",
              "Blitz packages exist in the Even Front but maximum flexibility is the Odd Front's advantage, not the Even Front.",
              "Flexibility is the Odd Front's defining advantage. The Even Front is more fixed.",
              "The Even Front actually struggles more against spread formations compared to the Odd Front."
            ],
            explanation: "The Even Front is strong against inside runs, has clear and simple gap assignments, and provides good gap integrity. Each lineman knows his gap. The linebackers know their responsibilities. The predictability is actually a strength at this level because everyone executes well."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "2ND & 6", field: "OPP 40", score: "TIE 0-0", formation: "EMPTY" },
            defense: "cover2", routes: null,
            question: "WHERE DOES THE EVEN FRONT STRUGGLE?",
            hint: "Think about spread formations and what they force the defense to do.",
            options: [
              "Against spread formations — the nickel becomes critical and the rush becomes predictable",
              "Against inside runs — gaps are too far apart",
              "Against play-action — linemen over-pursue",
              "Against power runs — not enough defenders at the point of attack"
            ],
            correct: 0,
            tiers: ["best","wrong","ok","wrong"],
            notes: [
              "Correct — spread formations expose the Even Front's predictability and force the nickel into a critical role.",
              "Inside runs are actually a strength of the Even Front, not a weakness.",
              "Play-action can stress any front, but the Even Front's structural weakness is against spread, not play-action specifically.",
              "Power run defense is a strength of the Even Front with four linemen at the point of attack."
            ],
            explanation: "The Even Front can struggle against modern spread formations because the third linebacker is often replaced by a nickel. The front becomes more predictable — four linemen always rush — and QBs can identify the rush and set protection more easily."
          }
        ],
        3: [
          {
            badge: "ATTACK IT",
            situation: { down: "1ST & 10", field: "OWN 35", score: "TIE 0-0", formation: "2x2" },
            defense: "cover2", routes: null,
            question: "EVEN FRONT — WHAT DOES THE QB USE THE PREDICTABLE RUSH FOR?",
            hint: "You know who is rushing. What does that clarity give you?",
            options: [
              "Set the line fast, trust protection, focus entirely on the coverage read",
              "Check to a run — Even Fronts are always weak against the run",
              "Attack the edge — Even Fronts always have edge vulnerability",
              "Use RPOs — Even Fronts cannot handle run-pass options"
            ],
            correct: 0,
            tiers: ["best","ok","ok","ok"],
            notes: [
              "Correct — predictable rush means faster protection calls, cleaner pre-snap picture, and more mental bandwidth for coverage reads.",
              "Running against an Even Front can work but the predictability dividend is best used in the pass game.",
              "Edge vulnerability exists situationally but is not a blanket weakness of the Even Front.",
              "RPOs can be effective against any front, but the specific benefit here is using the clarity to read coverage faster."
            ],
            explanation: "Against the Even Front the QB benefits from a predictable rush. Set the protection off the Mike, account for the four linemen, and trust your blockers. The predictability gives you a cleaner pre-snap picture to identify the coverage behind the front."
          }
        ]
      }
    },

    // ══════════════════════════════════════════════════════════
    // ODD FRONT
    // ══════════════════════════════════════════════════════════
    {
      id: "oddfront", name: "Odd Front", family: "Front", tier: "free", filmKey: "Odd Front",
      overview: "Three defensive linemen with four linebackers. Maximum flexibility. Edge rushers can be linebackers.",
      levels: {
        1: [
          {
            badge: "FRONT ID",
            situation: { down: "1ST & 10", field: "OWN 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3", routes: null,
            question: "THREE LINEMEN. FOUR LINEBACKERS STANDING UP. WHAT FRONT IS THIS?",
            hint: "Count the down linemen. Three is the defining feature of this front.",
            options: [
              "Odd Front — three down linemen with four linebackers, 3-4 structure",
              "Even Front — four linemen with this linebacker depth",
              "Bear Front — five linemen on the line of scrimmage",
              "Nickel — the linebacker count indicates a nickel package"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — three down linemen plus four linebackers is the Odd Front or 3-4.",
              "The Even Front has four linemen. You counted three.",
              "Bear Front has five linemen at the line. You counted three.",
              "Nickel has five DBs. You still see four linebackers, not extra DBs."
            ],
            explanation: "Three defensive linemen with four linebackers is the Odd Front or 3-4. It is called odd because the nose tackle aligns directly over the center — an odd gap alignment. The four linebackers create maximum flexibility."
          },
          {
            badge: "EDGE RUSHERS",
            situation: { down: "3RD & 6", field: "OPP 35", score: "DOWN 7-14", formation: "2x2" },
            defense: "cover3", routes: null,
            question: "IN AN ODD FRONT, WHO RUSHES THE EDGE?",
            hint: "Only three linemen are down. Who rushes the edges?",
            options: [
              "The outside linebackers — they can rush or drop from the same look",
              "The defensive ends — same as the Even Front",
              "The safeties — they provide edge pressure in the Odd Front",
              "The corners — they blitz from the edge in Odd Front systems"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — OLBs are the edge rushers in the Odd Front and can rush or drop from the same pre-snap alignment.",
              "In the Odd Front there are no traditional defensive ends on the edge. The OLBs fill that role.",
              "Safeties blitz from depth in specific packages but are not the base edge rushers.",
              "Corners blitzing from the edge is a specific exotic blitz package, not the standard Odd Front structure."
            ],
            explanation: "In the Odd Front the outside linebackers are the edge rushers. This is what makes the Odd Front dangerous — the OLBs can rush or drop into coverage from the same pre-snap look. The QB cannot easily identify who is rushing."
          },
          {
            badge: "BOX COUNT",
            situation: { down: "2ND & 5", field: "OPP 40", score: "TIE 7-7", formation: "2x2" },
            defense: "cover1", routes: null,
            question: "WHY IS COUNTING THE BOX HARDER AGAINST AN ODD FRONT?",
            hint: "Linebackers standing up can rush or drop. What does that create?",
            options: [
              "Standing linebackers can rush or drop — making it unclear how many are actually rushing",
              "The Odd Front always brings eight defenders to the box",
              "The Odd Front uses fewer defenders in the box than the Even Front",
              "Box count is equally easy against both fronts"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","wrong"],
            notes: [
              "Correct — standing linebackers look identical whether they rush or drop. The ambiguity is the whole point.",
              "The Odd Front does not always bring eight. The number of rushers varies play to play by design.",
              "The Odd Front has more defenders standing up near the box, not fewer.",
              "Box count against an Odd Front is significantly harder specifically because of the linebacker ambiguity."
            ],
            explanation: "Box count is harder against the Odd Front because the four linebackers standing up can rush or drop from the same alignment. Against the Even Front you know the four linemen are likely rushing. Against the Odd Front any combination of linebackers could blitz."
          }
        ],
        2: [
          {
            badge: "STRENGTHS",
            situation: { down: "3RD & 5", field: "OPP 30", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3", routes: null,
            question: "WHAT IS THE PRIMARY STRENGTH OF THE ODD FRONT?",
            hint: "Four linebackers. Any can rush or drop. What does that create?",
            options: [
              "Maximum flexibility and disguise — the defense can send any combination without showing it",
              "Superior run stopping compared to the Even Front",
              "Better coverage because of the extra linebacker",
              "Simpler assignments that lead to better execution"
            ],
            correct: 0,
            tiers: ["best","ok","wrong","wrong"],
            notes: [
              "Correct — flexibility and disguise. Any combination of linebackers can rush or drop without pre-snap tells.",
              "Run stopping can be strong in the Odd Front, but the defining strength is disguise and flexibility.",
              "Coverage is not automatically better with four linebackers — they are not DBs. Disguise is the strength.",
              "The Odd Front actually has more complex assignments than the Even Front. Simplicity is not its advantage."
            ],
            explanation: "The Odd Front's primary strength is flexibility and disguise. Any of the four linebackers can rush or drop from the same alignment. The defense can send two, three, or four linebackers in a blitz without pre-snap tells. This makes protection calls more difficult."
          },
          {
            badge: "WEAKNESS",
            situation: { down: "1ST & 10", field: "OWN 25", score: "TIE 0-0", formation: "2x2" },
            defense: "cover1", routes: null,
            question: "WHERE CAN THE ODD FRONT STRUGGLE?",
            hint: "Three interior linemen versus five offensive linemen. What does that create?",
            options: [
              "Power run game — three interior linemen can be outnumbered at the point of attack",
              "Pass rushing — only three linemen cannot generate consistent pressure",
              "Coverage — four linebackers are less athletic than defensive backs",
              "Gap control — three linemen cannot control all gaps"
            ],
            correct: 0,
            tiers: ["best","ok","ok","ok"],
            notes: [
              "Correct — power run games that double-team the nose tackle and kick out linebackers can exploit the three-man front.",
              "Pass rushing can be a challenge with only three down linemen, though the OLBs supplement this.",
              "Coverage athleticism varies and can be a factor, though it is scheme-dependent.",
              "Gap control is challenging — the nose must two-gap in many Odd Front systems, which is demanding."
            ],
            explanation: "The Odd Front can struggle against power run games because three interior linemen may be outnumbered at the point of attack. The nose tackle in a 3-4 often controls both A-gaps in a two-gap system — a very demanding assignment."
          }
        ],
        3: [
          {
            badge: "ATTACK IT",
            situation: { down: "2ND & 6", field: "OPP 38", score: "TIE 0-0", formation: "2x2" },
            defense: "cover3", routes: null,
            question: "ODD FRONT — WHAT IS YOUR PRE-SNAP PROCESS?",
            hint: "Linebackers standing up can rush or drop. What do you key on?",
            options: [
              "Identify the Mike, watch OLB stance for rush tells, set protection, confirm post-snap",
              "Check to a run — Odd Fronts are weak against the inside run",
              "Go through the same process as the Even Front — fronts do not change the read",
              "Spread the formation to force the linebackers to declare"
            ],
            correct: 0,
            tiers: ["best","wrong","wrong","ok"],
            notes: [
              "Correct — Mike identification anchors protection. OLB stance gives rush tells. Post-snap confirmation is mandatory.",
              "Inside run against the Odd Front faces a two-gapping nose tackle. Not automatically weak.",
              "Fronts absolutely change the pre-snap process. The Odd Front requires more OLB evaluation than the Even Front.",
              "Spreading can help force declarations, but the process of identifying and confirming must still happen."
            ],
            explanation: "Against the Odd Front: identify the Mike first — he anchors the protection. Watch the outside linebackers for rush tells: stance, inside foot forward, weight distribution. Set the protection with a slide and let the RB handle the backside edge. At the snap confirm who actually rushed versus who dropped."
          }
        ]
      }
    }

  ]
};
