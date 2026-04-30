// SparkQB Signal Caller — Curriculum
// Built from video transcripts (primary source) + coach Q&A session.
// Transcript language takes priority throughout.

const CURRICULUM = {

  // ─── GLOBAL COACHING PHRASES ─────────────────────────────────────────────
  coaching_phrases: [
    "Corners lie. Safeties tell the truth.",
    "Cover 3 is a post-snap confirmation coverage — confirm after the ball is snapped.",
    "Man usually means pressure — get the ball out.",
    "Against 2-Man, run the ball first.",
    "Hot to the void, throwaway second, scramble last resort.",
    "ID odd vs even front → find the Mike → find other backers.",
    "Just because you see pressure does not mean everyone is coming — confirm what you see.",
    "Take in the full picture. Don't rely on one indicator.",
    "Throw away from the rotation.",
    "Take what they're giving you.",
  ],

  // ─── COVERAGES ────────────────────────────────────────────────────────────

  coverages: {

    'Cover 2': {
      identifier: 'Cover 2',
      pre_snap_keys: [
        "Do NOT look at the corners to ID Cover 2. Corners can line up pressed and bail at the snap, or line up off and come up to press right before the snap.",
        "Look at the safeties. Cover 2 safeties have deep halves to cover, so they line up deeper and wider.",
        "Safeties tell the truth. Corners lie.",
        "Safeties starting around 15 yards, getting to 18 yards deep and wide as they drop.",
      ],
      post_snap_confirm: [
        "Both safeties get deep and wide at the snap — that confirms Cover 2.",
        "Corners jam and funnel the receiver inside, then sink to flats.",
        "Outside backers stepping to curl-hook zones.",
      ],
      zone_structure: [
        "Two safeties splitting the field into deep halves.",
        "Corners responsible for flats — they jam, reroute receiver inside, then read flat threat.",
        "Outside backers drop to curl-hook zones.",
        "Middle backer responsible for the middle hole zone.",
        "Corner responsibility: cannot let receiver go free down sideline — get hands on, reroute inside, then sink to flats at 45 degree angle.",
      ],
      strengths: [
        "Corners help with perimeter run support — outside zones, sweeps, tosses.",
        "Takes away short routes to the sidelines: hitches, 5-yard outs, bubble screens.",
      ],
      weaknesses: [
        "Hole shot at around 18 yards on the sideline — if QB has timing and arm strength, hard to stop.",
        "Middle of the field — only two safeties deep, can send 3-4 receivers deep and have a numbers advantage.",
        "Deep ball in general — 3 or 4 on 2 with the safeties.",
      ],
      biggest_mistake: "Throwing to the flat too early. The corner widens to cover the flat. Also: the hole shot needs the right height — too much air and the safety makes the play, not enough and it doesn't get over the corner's head.",
      concepts_that_beat: [
        { concept: "Four Verticals", why: "Hole shot if safety stays inside. Bend the seam if safety widens. Sending 3-4 deep creates a numbers advantage against 2 safeties." },
        { concept: "Smash", why: "Hold the safety, throw the corner route over the corner's head. Read the corner: if he widens, throw the hitch; if he stays, throw the corner." },
        { concept: "Double Slants", why: "Play off the outside backer and throw opposite." },
        { concept: "Flood", why: "Attack all three zones — flat, curl, deep." },
      ],
      film_review: "Safeties tell the truth — corners lie. In Cover 2 the safeties are deeper and wider. Don't throw to the flat early — the corner owns that zone. The hole shot at 18 yards on the sideline is the premier shot against Cover 2. Middle of the field and deep ball are also great because you're 3-on-2 against the safeties.",
      vimeo_url: "https://vimeo.com/1000615511/c33249c4b4",
    },

    'Cover 2 Buzz': {
      identifier: 'Cover 2 Buzz',
      pre_snap_keys: [
        "Looks like Cover 2 pre-snap — hard to distinguish before the snap.",
        "Post-snap is the tell: watch for the safety buzzing up into the curl-hook zone instead of getting deep.",
      ],
      zone_structure: [
        "Corner drops to deep half — takes the deep half instead of flats.",
        "Safety buzzes up into curl-hook zone.",
        "Outside backer takes the flat.",
        "Everyone shifting responsibilities compared to base Cover 2.",
        "May only see this on one side of the formation.",
      ],
      biggest_mistake: "Throwing the curl or hook route assuming no one is there — the safety has buzzed down right into that zone.",
      film_review: "Cover 2 Buzz flips responsibilities from base Cover 2. The corner takes deep half, the safety buzzes into curl-hook, and the outside backer gets the flat. Watch for safety rotation post-snap. If you were planning to hit a curl, that's exactly where the safety is going.",
      vimeo_url: "https://vimeo.com/1000613815/bf78f8361e",
    },

    'Cover 2 Robber': {
      identifier: 'Cover 2 Robber',
      pre_snap_keys: [
        "Pattern reading coverage — hard to identify pre-snap.",
        "Post-snap: watch the safety — if inside receiver does anything besides release vertical, safety robs down into curl-hook zone.",
      ],
      zone_structure: [
        "Safety reads the inside receiver. If inside receiver releases inside or on anything besides vertical — safety robs down into curl-hook zone.",
        "If inside receiver releases vertical — safety stays and takes deep inside fourth.",
        "Corner takes deep half when safety robs.",
        "Outside backer responsible for flat no matter what.",
      ],
      biggest_mistake: "Throwing the curl or crossing route when the safety has robbed down — he's sitting right there waiting for it.",
      film_review: "Cover 2 Robber is a pattern reading coverage. The safety is reading your inside receiver — if he releases inside, that safety is robbing right into that window. If your inside receiver releases vertical, the safety stays deep. The outside backer has the flat regardless. Attack by releasing the inside receiver vertical to keep the safety deep, then work the sideline.",
      vimeo_url: "https://vimeo.com/1000619578/05be1fc4d6",
    },

    'Cover 2 Trap': {
      identifier: 'Cover 2 Trap',
      pre_snap_keys: [
        "Corner is playing aggressive in the flat — breaking on any flat-breaking route aggressively.",
        "Inside backer carrying vertical releases from the slot receiver.",
      ],
      zone_structure: [
        "Corner aggressive in flat — breaking hard on any flat route.",
        "Inside backer carries inside receiver vertical.",
        "If outside receiver releases vertical — safety must get hard over the top.",
        "If outside receiver does not release vertical — safety sits in normal two-deep shell.",
        "In-breaking routes underneath are often wide open when the safety and backer are carrying vertical.",
      ],
      biggest_mistake: "Throwing the flat route right into the aggressive corner, or not recognizing the in-breaking window that opens underneath.",
      film_review: "Cover 2 Trap has the corner attacking the flat aggressively. If your outside receiver releases vertical, the safety is flying over the top. If not, the safety can sit. The big window that opens: if the safety and backer are both carrying vertical releases, in-breaking routes underneath are usually wide open.",
      vimeo_url: "https://vimeo.com/1000614859/4166a677b8",
    },

    'Cover 2 Read': {
      identifier: 'Cover 2 Read',
      pre_snap_keys: [
        "Pattern reading — hard to tell pre-snap.",
        "Safety and corner both reading the number two receiver.",
      ],
      zone_structure: [
        "If number two receiver releases to the flat — corner stays normal in flats, safety gets over top to help number one.",
        "If number two receiver releases inside (not to flat) — corner's responsibility becomes deep half, safety buzzes underneath to flat zone.",
      ],
      biggest_mistake: "Not identifying which way the number two receiver released post-snap — changes everything about where the corner and safety end up.",
      film_review: "Cover 2 Read flips corner and safety responsibilities based on where the number two receiver goes. If he goes to the flat, the corner has flats and safety helps deep. If he releases inside, the corner takes deep half and the safety comes down to the flat. Read the number two receiver post-snap to know where the windows are.",
      vimeo_url: "https://vimeo.com/1000614160/6ad7643f38",
    },

    'Tampa 2': {
      identifier: 'Tampa 2',
      pre_snap_keys: [
        "Looks like Cover 2 pre-snap — two safeties deep.",
        "Post-snap tell: watch the middle linebacker — he opens to passing strength side and gets to the deep middle zone.",
      ],
      zone_structure: [
        "Variation of Cover 2 — trying to help with the deep middle hole.",
        "Middle/Mike backer opens to passing strength side on snap, gets deep middle zone.",
        "Creates almost a three-high shell look.",
        "Exposes the underneath area where the Mike backer just vacated — great for draws, runs, and short passes.",
      ],
      biggest_mistake: "Treating it exactly like base Cover 2 and missing the Mike backer in the deep middle who would normally be open on a seam or crossing route.",
      concepts_that_beat: [
        { concept: "Draw / QB Draw", why: "Tampa 2 exposes underneath area where the Mike left from." },
        { concept: "Underneath routes", why: "Mike backer vacating creates a void underneath." },
        { concept: "Run game", why: "Middle hole is open where the Mike left." },
      ],
      film_review: "Tampa 2 is Cover 2 but the Mike backer gets deep middle to help with that hole. It creates almost a three-high shell. The big weakness it exposes is exactly where the Mike just left from — draws, runs, and passes in that underneath area are great. Don't throw seams or crossings into where the Mike is dropping.",
      vimeo_url: "https://vimeo.com/1000614944/9e869e827b",
    },

    'Cover 3': {
      identifier: 'Cover 3',
      pre_snap_keys: [
        "Hard to confirm pre-snap — Cover 3 is a post-snap confirmation coverage.",
        "Single safety deep in the middle of the field post-snap is the key indicator.",
        "Corners bailing to deep thirds post-snap.",
        "Defenders typically bumped inside a little (vs. head-up in man).",
      ],
      post_snap_confirm: [
        "One safety goes to deep middle third.",
        "Corners bail to deep outside thirds.",
        "Outside backers reroute and get to flats.",
        "Inside backers step up for run then drop to curl-hook zones.",
      ],
      zone_structure: [
        "Three deep zones: corners get deep outside thirds, safety gets deep middle third.",
        "Outside backers: reroute the number two receiver if he goes vertical — don't let him get a clean release — then work to flats.",
        "Inside backers: step up for run first, then drop to curl-hook zones.",
        "Corners and safeties splitting the field into thirds from sideline to hash (corner) and between hashes (safety).",
      ],
      strengths: [
        "Run support — 8 of 11 defenders near the box in 4-4 Cover 3.",
        "Takes away the deep fade — corner playing deep outside third does a good job against fade.",
      ],
      weaknesses: [
        "Seams — single safety responsible for both hashes. Release both inside receivers vertical and put stress on the safety. Look off the safety one way, throw the seam the other.",
        "High-low the safety — post and dig from the same side is great. Safety can't cover both the deep middle and the underneath crossing route.",
        "Flats and sidelines — if I need 5-6 yards, flats and sidelines are fantastic. Hold the outside backer with a vertical release by the inside receiver, then attack the sideline.",
        "Four Verticals — puts huge stress on the single safety.",
      ],
      biggest_mistake: "Throwing the fade over the bailing corner — that's his zone. Not attacking the curl-hook voids. Taking too long to get to the flats allowing the outside backer time to arrive. Not moving the safety before throwing seams.",
      concepts_that_beat: [
        { concept: "Four Verticals", why: "Puts stress on single safety. Look him off one way, throw the seam the other." },
        { concept: "Flood", why: "Fade, short out, and deep out attacks all three zone levels." },
        { concept: "Slant/Arrow", why: "Works the flats and underneath quickly." },
        { concept: "Mesh", why: "Crossing routes stress the underneath defenders." },
        { concept: "Post/Dig", why: "High-low the single safety." },
        { concept: "Hitch/Seam", why: "Hold outside backer with vertical release, attack flats." },
        { concept: "Smash", why: "Read off the corner bailing to his third." },
      ],
      film_review: "Cover 3 is a post-snap confirmation coverage — you can't fully confirm it pre-snap. After the snap, look for the safety going to deep middle and corners bailing to thirds. Don't throw the fade over the bailing corner — that's his zone. Attack the seams (high-low the safety), the curl-hook voids, and the flats. If the outside backer is holding to reroute the slot, the flat and sideline are open — take it.",
      vimeo_url: "https://vimeo.com/1000619754/f872d51d21",
    },

    'Cover 3 Sky': {
      identifier: 'Cover 3 Sky',
      pre_snap_keys: [
        "Looks like Cover 3 pre-snap — hard to distinguish.",
        "Post-snap tell: one safety rotates DOWN to the flat zone instead of getting deep.",
      ],
      zone_structure: [
        "Strong safety rolls down and takes flat zone on snap.",
        "Other safety rotates to deep middle.",
        "Corners keep their deep outside thirds.",
        "Outside backer away from sky side gets flat. Sky safety already has flat on his side, so backer reroutes and drops to curl-hook.",
        "Middle backer steps up for run, then curl-hook on opposite side.",
      ],
      biggest_mistake: "Catching the snap, assuming flat is open, safety rotates and picks it off the other way. Must identify post-snap rotation of safeties.",
      film_review: "Cover 3 Sky is a great disguise. The safety rotates DOWN to the flat — the opposite of what you expect. If you think the flat is open and throw it without identifying the rotation, the rotating safety is right there for the interception. Throw away from the rotation. Identify which way the safeties are rotating immediately post-snap.",
      vimeo_url: "https://vimeo.com/1000619877/6d43ae253f",
    },

    'Cover 3 Buzz': {
      identifier: 'Cover 3 Buzz',
      pre_snap_keys: [
        "Looks like Cover 3 pre-snap — hard to distinguish.",
        "Post-snap tell: strong safety buzzes down into curl-hook zone instead of rolling to deep zone.",
      ],
      zone_structure: [
        "Strong safety buzzes down into curl-hook zone on snap.",
        "Other safety rolls to deep middle.",
        "Corners keep deep outside thirds.",
        "Outside backers fill flats on both sides.",
        "Middle backer steps up for run, curl-hook on opposite side from buzz.",
        "Everyone ends up in same spots as normal Cover 3 — it's the rotation that's the disguise.",
      ],
      biggest_mistake: "Throwing a curl route when the safety has buzzed right into that window. Not identifying the rotation of the safeties post-snap.",
      film_review: "Cover 3 Buzz looks like base Cover 3 pre-snap but the safety rotates into the curl-hook zone. If you were planning to throw a curl and never identify the safety rotation, that's a pick six waiting to happen. Always identify post-snap rotation and throw away from it.",
      vimeo_url: "https://vimeo.com/1000619754/f872d51d21",
    },

    'Cover 3 Cloud': {
      identifier: 'Cover 3 Cloud',
      pre_snap_keys: [
        "One corner is clouded — he rolls UP to take the flat instead of dropping to his deep third.",
        "The rest of the defense rotates to cover his deep third.",
        "Post-snap: watch for the corner rolling up aggressively to flat on one side.",
      ],
      zone_structure: [
        "Clouded corner rolls up to flat zone on snap.",
        "Safety to clouded side rolls to deep outside third to replace the corner.",
        "Other safety rolls to deep middle.",
        "Other corner keeps his normal deep outside third.",
        "Away-side backer reroutes and gets to flat. Clouded-side backer reroutes and drops to curl-hook (safety already has flat).",
        "Middle backer steps up for run then curl-hook away from clouded side.",
      ],
      biggest_mistake: "Working the clouded side — the corner is sitting right there in the flat. Not identifying the rotation post-snap.",
      concepts_that_beat: [
        { concept: "Four Verticals away from rotation", why: "Hard for a safety running one way to pivot back on a throw the other direction." },
        { concept: "Flats and sidelines away from clouded side", why: "Corner is sitting on the clouded side — attack away from rotation." },
        { concept: "High-low away from rotation", why: "Still great against the three-deep shell on that side." },
      ],
      film_review: "Cover 3 Cloud means one corner rolls up to the flat — he is NOT dropping to deep third. The rest of the defense rotates. Do NOT work the clouded side — the corner is sitting right there. Catch the snap, identify rotation, and throw away from it. It's very hard for a safety running one direction to pivot back on a throw going the other way.",
      vimeo_url: "https://vimeo.com/1000618875/993b89e466",
    },

    'Cover 3 Mable': {
      identifier: 'Cover 3 Mable',
      pre_snap_keys: [
        "Used specifically against 3x1 sets.",
        "Backside corner is man-to-man on the single receiver.",
        "Rest of the defense flows Cover 3 to the three-receiver side.",
      ],
      zone_structure: [
        "Man coverage on the backside single receiver — corner is locked up.",
        "Deep middle third, deep outside third on the field side — normal Cover 3.",
        "Everyone flows toward the three-receiver side.",
        "Backside outside backer still steps up for flat — must account for the tailback release to that side.",
      ],
      film_review: "Cover 3 Mable is man on the backside single receiver, Cover 3 flowing to the trips side. The backside corner is locked up man — don't expect him to bail. Attack the trips side with Cover 3 concepts, and be aware the backside backer is still responsible for the flat even though everyone is flowing.",
      vimeo_url: "https://vimeo.com/1000615167/0d6c114da0",
    },

    'Cover 4': {
      identifier: 'Cover 4',
      pre_snap_keys: [
        "Do NOT look at corners — Cover 4 Press has corners lined up pressed but they bail to their deep fourth.",
        "Look at the safeties. Cover 4 safeties are narrower and closer to the LOS compared to Cover 2.",
        "Safeties helping with run support — they don't have as much ground to cover deep.",
        "Safeties tell the truth. Corners lie.",
      ],
      post_snap_confirm: [
        "Both safeties sit and pattern match — they are NOT flying to deep halves.",
        "If inside receiver releases vertical after 10-12 yards — safety takes him man-to-man.",
        "If inside receiver releases on drag or short route — safety drops to deep fourth and looks to bracket outside receiver.",
        "Corners bail to deep outside fourths.",
      ],
      zone_structure: [
        "Four deep defenders: corners get deep outside fourths, safeties get deep inside fourths.",
        "Outside backers step up for run, then responsible for flats.",
        "Middle linebacker steps up for run, then plays middle underneath hole.",
        "Pattern matching: corners and safeties reading receivers to determine whether they play zone or take man responsibility.",
        "Cover 4 is blanketing deep zones — forcing everything in front.",
      ],
      strengths: [
        "Takes away the deep ball — four deep defenders blanketing the field.",
        "Great against teams that like to throw deep, especially Four Verticals.",
        "Safeties can help with run support while also having deep coverage help.",
        "Disguises a lot of things — can roll from one-high look.",
      ],
      weaknesses: [
        "Flats — take what they're giving you. Occupy the backer, work sidelines and flats all game.",
        "Underneath routes: slants, drags — only three defenders underneath.",
        "Dig/Post from same side — high-low the safety. If the inside receiver runs a 10-yard dig, the safety jumps it and leaves a post open over the top.",
        "Pattern reading can be exploited — if you know what route you're running, you know it will turn into man coverage and can exploit that matchup.",
      ],
      biggest_mistake: "Throwing deep when corners are bailing to their deep quarters — that's exactly what Cover 4 is designed to take away. Being late to the flats allowing the backer to arrive. Not taking what the defense is giving you underneath.",
      concepts_that_beat: [
        { concept: "Hitches", why: "Take what they're giving — Cover 4 forces everything in front." },
        { concept: "Slant/Arrow", why: "Underneath routes with only 3 defenders to cover them." },
        { concept: "Post/Dig from same side", why: "High-low the safety. Dig brings the safety down, post is open over the top." },
        { concept: "Flood", why: "Attack flats and intermediate zones they're surrendering." },
        { concept: "Bubble/Hitch screens", why: "They're giving you space underneath — take it." },
      ],
      film_review: "Cover 4 is blanketing the deep field with four defenders. Don't go deep — that's what they want. The safeties are pattern matching: if your inside receiver goes vertical, they take him man-to-man; if he runs short, they bracket the outside receiver. Attack with dig/post (high-low the safety), flats, hitches, and slants. Take what they're giving you.",
      vimeo_url: "https://vimeo.com/1000613764/399dc21079",
    },

    'Cover 4 Lock': {
      identifier: 'Cover 4 Lock',
      pre_snap_keys: [
        "Usually vs. 3x1 sets — backside corner locked man-to-man on single receiver.",
        "Safety to the three-receiver side splits between number two and number three receiver.",
      ],
      zone_structure: [
        "Backside corner locked man-to-man on single receiver.",
        "Safeties still responsible for their deep inside fourths.",
        "Middle backer may carry with vertical release of inside receiver before settling into hook zone — helping take stress off safeties.",
        "Safety on three-receiver side splits between number two and number three to prevent vertical stress.",
      ],
      film_review: "Cover 4 Lock has the backside corner locked man-to-man instead of playing his deep fourth. The defense is trying to take away vertical stress from the safeties. Attack with concepts that stress the safeties or exploit the locked-up corner in man coverage.",
      vimeo_url: "https://vimeo.com/1000620092/9bcdc03fe3",
    },

    'Cover 4 Press': {
      identifier: 'Cover 4 Press',
      pre_snap_keys: [
        "Corners line up pressed — but bail to deep outside fourth on snap. Another reason to never read corners.",
        "Safeties are pattern reading the number two receiver.",
      ],
      zone_structure: [
        "Pressed corners bail to normal deep outside fourths on snap.",
        "Safeties reading number two receiver: if he releases vertical, safety stays in deep fourth (man-to-man on that receiver).",
        "If number two releases on an out or short route — no threat — safety doubles the outside receiver.",
        "Turns into double man on outside receiver when inside receiver doesn't threaten vertically.",
      ],
      biggest_mistake: "Thinking the pressed corners are playing man — they're bailing to deep fourths. Also not recognizing when the safety doubles the outside receiver.",
      film_review: "Cover 4 Press: corners press but bail to deep fourths. The safety pattern reads the inside receiver — vertical threat means he stays deep; no vertical threat means he doubles the outside receiver. Attack with inside receiver releases that keep the safety occupied, then work the outside receiver against the corner.",
      vimeo_url: "https://vimeo.com/1000615735/4aea826057",
    },

    'Cover 4 Cut': {
      identifier: 'Cover 4 Cut',
      pre_snap_keys: [
        "Usually vs. 3x1 sets when the single receiver has a tight split.",
        "Defense anticipating a drag or crossing route from the single receiver.",
      ],
      zone_structure: [
        "Safety to single receiver side: if that receiver releases inside (drag), safety undercuts the route and drives on it.",
        "Other safety replaces in deep fourth to cover the zone the first safety vacated.",
        "Corner drifts to help over the top when safety undercuts.",
      ],
      film_review: "Cover 4 Cut has a safety undercutting the single receiver's drag or crossing route — designed to take away that route. The other safety replaces to maintain deep coverage. If you're planning to drag the single receiver, be aware the safety is driving on that cut. Attack by going away from the cut side.",
      vimeo_url: "https://vimeo.com/1000614506/900c7d0a60",
    },

    'Cover 4 Read': {
      identifier: 'Cover 4 Read',
      pre_snap_keys: [
        "Pattern matching coverage — reading receivers to determine zone vs. man responsibility.",
      ],
      zone_structure: [
        "Corners read the outside receiver: vertical release = corner takes him man-to-man.",
        "Corners read outside receiver: anything besides vertical = corner drops to deep fourth zone.",
        "Safeties read number two receiver: vertical release after 10-12 yards = safety takes him man-to-man.",
        "Safeties read number two receiver: short route (drag, etc.) = safety drops to deep fourth, looks to bracket outside receiver.",
        "Understanding the pattern matching rules lets you predict exactly what coverage you'll face based on your route.",
      ],
      film_review: "Cover 4 Read is all pattern matching. If your inside receiver goes vertical past 10-12 yards, the safety takes him man. If he runs a dig, the safety jumps it — and there's a huge post window over the top. You can use their pattern matching rules against them: design routes knowing exactly how the defenders will respond. Dig-Post from the same side is the premier concept against Cover 4 Read.",
      vimeo_url: "https://vimeo.com/1000620164/0bce981e47",
    },

    'Cover 6': {
      identifier: 'Cover 6',
      pre_snap_keys: [
        "Safeties are the key indicator — one safety is narrower (Cover 4 side), one is wider (Cover 2 side).",
        "Usually the wider safety is on the Cover 2 side — he has more ground to cover.",
        "In the middle of the field: wider safety = Cover 2 side, narrower safety = Cover 4 side.",
      ],
      zone_structure: [
        "Half the field is Cover 2, the other half is Cover 4.",
        "Cover 2 side: safety deep half, corner jamming and funneling inside to flats, backer to curl-hook.",
        "Cover 4 side: safety deep inside fourth, corner deep outside fourth, backer to flat, middle backer middle underneath zone or cheating to curl-hook.",
      ],
      biggest_mistake: "Not identifying which side is Cover 2 and which is Cover 4 — attacking the wrong side with the wrong concept.",
      concepts_that_beat: [
        { concept: "Attack Cover 2 side", why: "All Cover 2 weaknesses apply — hole shot, seam, deep ball." },
        { concept: "Attack Cover 4 side", why: "All Cover 4 weaknesses apply — flats, hitches, dig-post." },
      ],
      film_review: "Cover 6 is Cover 2 on one side and Cover 4 on the other. The safeties tell you which is which — wider safety is Cover 2 side, narrower is Cover 4. All the strengths and weaknesses of each coverage apply to each respective side. Identify the sides pre-snap and attack accordingly.",
      vimeo_url: "https://vimeo.com/1000620256/3bc87633f2",
    },

    'Man Free (Cover 1)': {
      identifier: 'Man Free (Cover 1)',
      pre_snap_keys: [
        "Every single receiver has a defender lined up over them with eyes locked on the receiver — that's the biggest tell.",
        "Single safety playing center field over the top.",
        "Defenders head up on receivers (Cover 3 defenders are usually bumped inside).",
        "Linebacker eyes: if staring at a receiver, man. If looking inside, zone.",
        "Stack alignment: two defenders stacked on top of each other — the close one is likely blitzing, the second one picks up man coverage.",
      ],
      post_snap_confirm: [
        "Defenders turn and run with their man — eyes off the QB.",
        "Safety playing center field trying to keep everything in front of him.",
      ],
      zone_structure: [
        "Man to man on every receiver.",
        "Single safety over the top playing center field.",
        "Backer responsible for running back.",
        "Strength of Cover 1: can disguise it well, rotate into it, run a variety of blitzes.",
      ],
      strengths: [
        "Disguise — can rotate into it from many looks.",
        "Blitz variety — bringing pressure is common with man coverage.",
      ],
      weaknesses: [
        "Crossing routes and switching routes — defenders have no help, pick/rub routes are fantastic.",
        "QB scramble — defenders are locked on receivers and not watching the QB. Once the QB breaks the pocket, there's a lot of running room.",
        "Islands — defenders are one-on-one with no help.",
      ],
      biggest_mistake: "Not finding your best matchup. Taking too long — man usually means pressure is coming. Not using crossing routes and pick routes to create natural rubs.",
      concepts_that_beat: [
        { concept: "Crossers", why: "Defenders have no help against crossing routes — natural rubs free receivers." },
        { concept: "Pick Routes", why: "Man defenders get picked off — fantastic vs. man to man." },
        { concept: "Motions", why: "Use motion to ID man vs. zone, and to create stressed matchups." },
        { concept: "QB Scramble", why: "Defenders are looking at receivers, not the QB — tons of running room." },
        { concept: "Back out of backfield", why: "Linebacker matched up on running back — exploit that matchup in space." },
        { concept: "Quick game", why: "Get ball out fast before pressure arrives." },
      ],
      film_review: "Cover 1: every receiver has a man on them with eyes locked. The safety is the only help over the top. Crossing routes and picks are your best friends — defenders have zero help. Also, if you scramble and get outside the pocket, those defenders are looking at their man and won't see you run. Big play opportunity.",
      vimeo_url: "https://vimeo.com/1000619378/9b7c696346",
    },

    'Cover 1 Robber': {
      identifier: 'Cover 1 Robber',
      pre_snap_keys: [
        "Looks like Cover 1 pre-snap — man coverage everywhere.",
        "One safety over the top, other safety robbing in the middle.",
      ],
      zone_structure: [
        "Deep safety over the top.",
        "Robber safety driving down and robbing in the middle of the field — looking for crossing routes and anything underneath.",
        "Everyone else manned underneath.",
        "Backers matched man on tight end and running back.",
        "QB scramble and QB draws are good — not a lot of run defenders in the box.",
        "Be careful of the robber sitting underneath crossing routes.",
      ],
      film_review: "Cover 1 Robber has one safety over top and the other robbing underneath looking for crossing routes. QB draw and scramble are great because the backers are all in man coverage — very few run defenders. Just be careful — the robber is sitting right in crossing route windows.",
      vimeo_url: "https://vimeo.com/1000619519/306b71d94e",
    },

    'Cover 1 Double': {
      identifier: 'Cover 1 Double',
      pre_snap_keys: [
        "Cover 1 with the other safety doubling your best receiver.",
        "Safety is locked in on one receiver — usually the one getting the most targets.",
      ],
      zone_structure: [
        "Everyone manned up.",
        "Single safety over the top.",
        "Other safety doubling the best receiver — locked on him.",
        "Everyone else manned everywhere else.",
        "QB scramble is a big play — all defenders are turned running with their men.",
      ],
      film_review: "Cover 1 Double takes your best receiver away with a double team. Once you break the pocket, there's probably no one left — everyone is locked in man coverage and turned away from you. Big runs are available. Crossers and picks work against everyone else who is in single man coverage.",
      vimeo_url: "https://vimeo.com/1000614426/fbdee6ff3f",
    },

    'Cover 1 Bandit': {
      identifier: 'Cover 1 Bandit',
      pre_snap_keys: [
        "Defense showing pressure — five defenders on the line.",
        "Double A-gap look with middle backer and nose.",
        "Two standup backers on the perimeter reading the running back.",
      ],
      zone_structure: [
        "Middle backer blitzing one A-gap, nose blitzing the other A-gap.",
        "Two standup perimeter defenders read the running back.",
        "If running back releases to their side — they take him man.",
        "If running back releases opposite — they drop into robber zone underneath.",
      ],
      biggest_mistake: "Seeing the pressure look and panicking — just because there are five on the line does not mean all five are coming.",
      film_review: "Cover 1 Bandit looks like a pressure package but two of the perimeter defenders are reading the running back. If the back releases their way, they take him man. If the back goes away, they drop into a robbing zone. Don't panic at the pressure look — identify who is actually coming and who is dropping.",
      vimeo_url: "https://vimeo.com/1000614638/aec0dce551",
    },

    'Cover 1 Double Lurk': {
      identifier: 'Cover 1 Double Lurk',
      pre_snap_keys: [
        "Five defenders lined up on the line of scrimmage — looks like big pressure.",
        "Post-snap tell: two of those defenders bail back into the hole zone looking for underneath routes.",
      ],
      zone_structure: [
        "Looks like blitz pre-snap.",
        "Two defenders bail into hole zones underneath on the snap — looking for crossing routes to pick off.",
        "Only three are actually rushing.",
        "Man over the top with safety.",
      ],
      biggest_mistake: "Just because you see pressure does not mean everyone is coming. Confirm post-snap. If both players bail back, you only have three rushers and plenty of time.",
      film_review: "Cover 1 Double Lurk is a disguise — five lined up on the LOS but two bail into underneath zones. If you snap it and confirm those two dropped back, you're only facing a three-man rush with plenty of time. Don't panic at the pre-snap look. Confirm what you see after the snap.",
      vimeo_url: "https://vimeo.com/1000613724/0779c45d7e",
    },

    'Cover 1 Double Robber': {
      identifier: 'Cover 1 Double Robber',
      pre_snap_keys: [
        "Looks like Cover 1 pre-snap.",
        "Both safeties robbing down — no traditional safety over the top.",
        "A linebacker drops deep to replace the safety over the top.",
      ],
      zone_structure: [
        "Both safeties robbing in seam/underneath zones looking to jump routes.",
        "Linebacker drops back and plays the deep zone that safeties normally occupy.",
        "Everyone else manned underneath.",
        "Not Cover 0 because a backer replaces the safety deep.",
      ],
      film_review: "Both safeties are robbing underneath — they're looking to jump any seam or crossing route. However, a linebacker has dropped back to play the deep zone. Recognize that the deep middle is covered by the linebacker, not a safety. Attack by identifying which routes the robbing safeties are taking away and going away from them.",
      vimeo_url: "https://vimeo.com/1000613910/5bf205ef0b",
    },

    'Cover 0': {
      identifier: 'Cover 0',
      pre_snap_keys: [
        "Zero defenders deep — everyone is near the LOS.",
        "Man to man everywhere — no safety help over the top.",
        "Corners pressed with inside leverage.",
        "Extra defenders in the box beyond what the offensive line can block — count them.",
        "Usually six rushers, five in coverage — outnumbered on the OL.",
      ],
      post_snap_confirm: [
        "Everyone rushes or runs with their man — no one dropping into a deep zone.",
        "Pressure arrives fast — usually 1.5-2 seconds max.",
      ],
      biggest_mistake: "Not knowing who the hot receiver is before the snap. Holding the ball too long — pressure is coming with zero help over the top. Both of these together are deadly.",
      concepts_that_beat: [
        { concept: "Hot Routes", why: "Ball must be out before the blitz arrives — know your hot before the snap." },
        { concept: "Back out of backfield", why: "Quick outlet to the running back — get him in space." },
        { concept: "Smoke routes", why: "Immediate catch-and-run at the line of scrimmage." },
        { concept: "Fade/Back shoulder", why: "One-on-one with pressed corner — beat him with back shoulder." },
        { concept: "Throw away", why: "If nothing is there, get rid of it immediately." },
      ],
      film_review: "Cover 0 means zero defenders deep — everyone is either rushing or in man. I see Cover 0, I'm catching the snap and getting rid of the ball quickly. You MUST know your hot receiver before the snap. The pressure is coming and there's no safety net over the top. Ball out in under 2 seconds or take the sack.",
      vimeo_url: "https://vimeo.com/1000613674/37d18a765d",
    },

    '2-Man': {
      identifier: '2-Man',
      pre_snap_keys: [
        "Two safeties deep — looks like Cover 2 at first glance.",
        "Key difference: corners have INSIDE leverage (man) vs. Cover 2's outside leverage (zone).",
        "Linebackers matched man on running backs and slots.",
        "Everyone is head up, locked up underneath — two safeties are the only zone players.",
      ],
      post_snap_confirm: [
        "Corners stay man — they do NOT bail to flats like Cover 2 zone.",
        "Safeties stay deep in two-high shell.",
        "Underneath defenders running with their man.",
      ],
      biggest_mistake: "Trying to throw deep — you have man coverage underneath with a two-high safety shell over the top. That's the hardest throw in football. Not using pick/rub concepts to free up man-covered receivers.",
      concepts_that_beat: [
        { concept: "Run the Ball", why: "Every defensive back is in man coverage — the middle of the field is open for the run." },
        { concept: "QB Draw", why: "Same reason — backers are matched in man, no one watching the run game." },
        { concept: "Crossers/Pick Routes", why: "Create natural rubs against man coverage underneath." },
        { concept: "Quick Game", why: "Get the ball out before man coverage can recover." },
        { concept: "Scramble", why: "Everyone is eyes-on-receiver — QB has running lanes." },
      ],
      film_review: "2-Man has man coverage underneath and two safeties over the top — don't try to throw deep into that. The run game is your best friend: backers are matched in man coverage, leaving big running lanes. QB draw is a great call. For passing, crossers and pick routes to create rubs against the man coverage. Quick game to get it out before defenders can recover.",
      vimeo_url: "https://vimeo.com/1000615618/9793cd40e4",
    },

  },

  // ─── DEFENSIVE FRONTS ─────────────────────────────────────────────────────

  fronts: {

    naming_system: {
      title: "How Defensive Fronts Are Named",
      rule: "First number = down linemen. Second number = linebackers. Third number (remaining) = defensive backs. Always add up to 11.",
      examples: [
        "4-3: Four DL, three LB, four DB.",
        "3-4: Three DL, four LB, four DB.",
        "4-4: Four DL, four LB, three DB.",
        "4-2-5: Four DL, two LB, five DB.",
        "3-3: Three DL, three LB, five DB.",
      ],
      gap_system: [
        "A gap: between center and guard.",
        "B gap: between guard and tackle.",
        "C gap: between tackle and tight end.",
        "D gap: outside the tight end.",
      ],
      techniques: [
        "0 technique: head up over center.",
        "1 technique: inside shade of center.",
        "2 technique: head up over guard.",
        "2i technique: inside shade of guard.",
        "3 technique: outside shade of guard.",
        "4 technique: head up over tackle.",
        "4i technique: inside shade of tackle.",
        "5 technique: outside shade of tackle.",
        "6 technique: head up over tight end.",
        "7 technique: inside shade of tight end.",
        "9 technique: outside shade of tight end.",
      ],
      closed_open: [
        "Closed side: tight end side.",
        "Open side: away from tight end.",
        "Over front: three technique to the CLOSED (tight end) side.",
        "Under front: three technique to the OPEN (away from tight end) side.",
      ],
      vimeo_url: "https://vimeo.com/1000620466/6b548482e4",
    },

    '4-3 Over': {
      title: '4-3 Over Defensive Front',
      identification: [
        "Four down linemen, three linebackers.",
        "Three technique (outside shade of guard) to the CLOSED (tight end) side.",
        "One technique to the open side.",
      ],
      gap_control: [
        "One technique (open side): responsible for A gap.",
        "Will (weakside backer): B gap.",
        "Open-side end: C gap.",
        "Mike (middle backer): A gap on strong side.",
        "Three technique: B gap.",
        "Sam (strong backer): C gap.",
        "Strong-side end: D gap (outside tight end).",
      ],
      qb_read: "Even front — four down linemen. Find the Mike linebacker to set protection.",
      vimeo_url: "https://vimeo.com/1000614378/e1f01d2b3a",
    },

    '4-3 Under': {
      title: '4-3 Under Defensive Front',
      identification: [
        "Four down linemen, three linebackers.",
        "Three technique to the OPEN (away from tight end) side.",
        "One or two-inside technique to the closed side.",
      ],
      gap_control: [
        "One technique (close side): A gap.",
        "Mike: B and C gap.",
        "Sam: D gap.",
        "Three technique (open side): B gap.",
        "End: C gap.",
        "Will: scrape to A gap.",
      ],
      qb_read: "Even front — four down linemen. Three technique is away from tight end in this variant.",
      vimeo_url: "https://vimeo.com/1000615419/53e6cfc15c",
    },

    '4-3 Over Wide 9': {
      title: '4-3 Over Wide 9',
      identification: [
        "Same as 4-3 Over but both defensive ends in wide nine technique.",
        "Nine technique: outside shade of tight end.",
        "Both ends have outside contain — very wide.",
      ],
      qb_read: "Even front. Wide ends mean they're containing outside — run and pass lanes inside may be more available.",
      vimeo_url: "https://vimeo.com/1000613856/bdeb928819",
    },

    '3-4 Okie': {
      title: '3-4 Okie Front',
      identification: [
        "Three down linemen, four linebackers.",
        "Two-gap scheme with all down linemen.",
        "Nose guard responsible for BOTH A gaps.",
      ],
      gap_control: [
        "Nose: both A gaps.",
        "Ends: B and C gap each.",
        "Inside linebackers fill both A and B gaps.",
        "Outside backers: contain or cutback.",
        "Two-gapping DL occupy OL so backers can make plays in the backfield.",
      ],
      qb_read: "Odd front — three down linemen with nose over center. Find the Mike, then find other backers. Four backers means more disguise potential.",
      vimeo_url: "https://vimeo.com/1000614318/c52820ac64",
    },

    '3-4 Eagle': {
      title: '3-4 Eagle Front',
      identification: [
        "Defensive ends in four-inside (inside shade of tackle) look.",
        "Nose tackle in playside A gap.",
        "Strong (Sam) backer is a two-gapper.",
      ],
      gap_control: [
        "Defensive ends: B gap.",
        "Nose: playside A gap.",
        "Sam: two-gap.",
        "Backside: cutback/boot.",
        "Inside backers: A gap to scrape.",
      ],
      qb_read: "Odd front. DEs shaded inside means B gaps are occupied — outside C and D gaps may be more available.",
      vimeo_url: "https://vimeo.com/1000614722/3b06bc8cfc",
    },

    '3-4 Under': {
      title: '3-4 Under Front',
      identification: [
        "Three technique (D end) to the OPEN side.",
        "Nose in one technique.",
        "Backside end in five technique.",
        "Sam backer outside shade of tight end.",
      ],
      gap_control: [
        "Nose: A gap/B gap.",
        "Mike: B gap (playing C).",
        "Strong backer: outside contain.",
        "Weak backer: cutback boot/outside contain.",
        "End: B gap or two-gap.",
        "Inside backer: A gap scrape.",
      ],
      vimeo_url: "https://vimeo.com/1000614790/a19ffb43ed",
    },

    '3-4 Bear': {
      title: '3-4 Bear Front',
      identification: [
        "Both defensive ends in three technique on both sides.",
        "Nose head up over center.",
        "Sam backer walks down — outside shade of tackle.",
        "Strong safety walks up — outside shade of tight end.",
        "Six defenders near/on the LOS.",
      ],
      gap_control: [
        "Nose: takes up center, fills both A gaps.",
        "Defensive ends: B gap.",
        "Sam: C gap.",
        "Strong safety: D gap.",
        "Will: C gap.",
        "Inside backers: A gap to scrape.",
      ],
      qb_read: "Odd front. Six defenders near the LOS — heavy run-stopping front. Count the box and identify overloads.",
      vimeo_url: "https://vimeo.com/1000614234/5c8e2dd35e",
    },

    '3-3 Stack': {
      title: '3-3 Stack Front',
      identification: [
        "Three down linemen with three linebackers stacked directly behind them.",
        "Makes it hard for OL to get to the backers.",
        "Can two-gap with DL, backers fill opposite gap.",
      ],
      gap_control: [
        "DL can slant — backers responsible for gap opposite the slant direction.",
        "Two-gap scheme: backers fill whatever gap the DL in front of them did NOT take.",
      ],
      qb_read: "Odd front. Stacked alignment means lots of disguise — hard to predict where backers will go. Identify who's blitzing post-snap.",
      vimeo_url: "https://vimeo.com/1000614563/b754f4eeea",
    },

  },

  // ─── QUIZ QUESTIONS ───────────────────────────────────────────────────────
  // Built from transcript content — these are the exact coaching points tested

  quiz_questions: [

    // COVER 2 vs COVER 4 ID
    {
      id: 'q_c2_c4_safeties',
      coverage: 'Cover 2',
      difficulty: 'beginner',
      question: "You're pre-snap reading the defense. What is the MOST reliable indicator to tell Cover 2 from Cover 4?",
      options: [
        "Corner alignment — pressed or off coverage",
        "Safety depth and width — deeper and wider is Cover 2",
        "Number of defenders in the box",
        "Linebacker alignment",
      ],
      correct: 1,
      explanation: "Safeties tell the truth — corners lie. Cover 2 safeties have deep halves to cover so they line up deeper and wider. Cover 4 safeties are narrower and closer to the LOS. Never read corners to identify coverage.",
    },
    {
      id: 'q_c2_c4_corners',
      coverage: 'Cover 2',
      difficulty: 'beginner',
      question: "A corner is lined up pressed right before the snap. What does this tell you about the coverage?",
      options: [
        "It's definitely man coverage",
        "It's definitely Cover 2",
        "Nothing — corners lie. Check the safeties.",
        "It's Cover 0 — expect a blitz",
      ],
      correct: 2,
      explanation: "Corners lie. A corner can line up pressed and bail at the snap, or line up off and come up to press. Do NOT read the corners to tell coverage. Always go to the safeties — safeties tell the truth.",
    },

    // COVER 3 vs COVER 1 ID
    {
      id: 'q_c3_c1_eyes',
      coverage: 'Man Free (Cover 1)',
      difficulty: 'beginner',
      question: "Pre-snap, you look across the formation and see every receiver has a defender head up on them with eyes locked on the receiver. What does this tell you?",
      options: [
        "It's Cover 3 — zone coverage",
        "It's Cover 2 — two high safeties",
        "It's most likely Cover 1 — man to man",
        "It's Cover 4 — quarters coverage",
      ],
      correct: 2,
      explanation: "The biggest tell for Cover 1 is that every receiver has a defender lined up over them with eyes locked on the receiver. In zone, defenders are looking inside. In man, their eyes are locked on their assignment.",
    },
    {
      id: 'q_c3_c1_stack',
      coverage: 'Man Free (Cover 1)',
      difficulty: 'intermediate',
      question: "You see two defenders stacked on top of each other near the line of scrimmage. What does this typically indicate?",
      options: [
        "Zone blitz — one drops into coverage",
        "One is blitzing, the second picks up man coverage behind him",
        "Both are rushing — double A-gap blitz",
        "It's a disguise — neither is doing anything unusual",
      ],
      correct: 1,
      explanation: "If you see a stack — two defenders on top of each other — most of the time the close one is coming and the second one sits behind and picks up man to man. See a stack? Expect the near defender to blitz.",
    },

    // COVER 2 ATTACKING
    {
      id: 'q_c2_flat_mistake',
      coverage: 'Cover 2',
      difficulty: 'beginner',
      question: "Against Cover 2, your running back is in the flat. The corner is near him. What's the problem with throwing to the flat immediately?",
      options: [
        "The safety will intercept it",
        "The corner is responsible for the flat — he's sitting right there",
        "The outside backer has the flat in Cover 2",
        "There's no problem — the flat is always open vs. Cover 2",
      ],
      correct: 1,
      explanation: "In Cover 2, the corner is responsible for the flats. He jams the receiver inside, then reads for a flat threat. Throwing to the flat too early throws right to him. The corner OWNS the flat in Cover 2.",
    },
    {
      id: 'q_c2_holeshot',
      coverage: 'Cover 2',
      difficulty: 'intermediate',
      question: "You're running Four Verticals against Cover 2. The safety stays inside. Where does the ball go and what's the key to completing it?",
      options: [
        "Throw the seam — the safety left it open",
        "Throw the hole shot on the sideline — timing and height are everything",
        "Check down to the running back in the flat",
        "Throw the deep middle between the safeties",
      ],
      correct: 1,
      explanation: "The hole shot at around 18 yards on the sideline is the premier shot against Cover 2. If the safety stays inside, the sideline is open. The key: timing and height — too much air and the safety makes the play, not enough and it doesn't clear the corner's head.",
    },

    // COVER 3 ATTACKING
    {
      id: 'q_c3_fade',
      coverage: 'Cover 3',
      difficulty: 'beginner',
      question: "Against Cover 3, you want to throw a fade to your outside receiver. The corner is bailing to his deep third. What's the problem?",
      options: [
        "The safety will get it — he has the deep middle",
        "Nothing — the corner is leaving, so the fade is open",
        "The corner IS the deep outside third — that's his zone. You're throwing right to him.",
        "The outside backer will jump it",
      ],
      correct: 2,
      explanation: "Never throw the fade over a bailing corner in Cover 3 — that's his zone. He doesn't need to be fast to cover it, he just needs to get to his deep outside third. The corner OWNS the deep fade in Cover 3.",
    },
    {
      id: 'q_c3_seam',
      coverage: 'Cover 3',
      difficulty: 'intermediate',
      question: "You want to throw a seam route against Cover 3. What do you need to do BEFORE committing to the throw?",
      options: [
        "Nothing — seams are always open vs. Cover 3",
        "Look off the safety one way, then throw the seam the other way. Also check the corner's leverage.",
        "Confirm the linebacker is not in the throwing lane",
        "Make sure your receiver has pressed off the line clean",
      ],
      correct: 1,
      explanation: "The single safety in Cover 3 is responsible for both hashes — he can get to both seams. You must look him off one way and throw the seam the other. Also check the corner: a well-coached corner will play between the seam and the fade. If he jumps the seam, you go outside fade.",
    },
    {
      id: 'q_c3_flats',
      coverage: 'Cover 3',
      difficulty: 'intermediate',
      question: "You want to attack the flats against Cover 3. Who is responsible for the flat, and how do you hold them to create space?",
      options: [
        "The corner has flats — hold him with a go route",
        "The safety has flats — move him with a vertical route",
        "The outside backer has flats — hold him by releasing your inside receiver vertical so he has to reroute",
        "The middle backer has flats — move him with a crossing route",
      ],
      correct: 2,
      explanation: "In Cover 3, the outside backer is responsible for the flat. His job is to reroute any vertical releases before getting to the flat. If you release your inside receiver vertical, he has to pause to reroute — that gives you a second to work the flat. Also make sure the corner is backpedaling before throwing the flat.",
    },

    // COVER 4 ATTACKING
    {
      id: 'q_c4_deep',
      coverage: 'Cover 4',
      difficulty: 'beginner',
      question: "Against Cover 4, your receiver is running a deep corner route and the corner is bailing. Is this a good throw?",
      options: [
        "Yes — the corner is leaving so the route is open",
        "No — the corner is bailing to his deep outside FOURTH. That's his zone.",
        "Yes — the corner is playing press so he can't get deep",
        "No — the safety will get there first",
      ],
      correct: 1,
      explanation: "Cover 4 corners bail to their deep outside fourths — they're not leaving that zone open. Throwing deep outside when corners are bailing is throwing right into their coverage. Take what they're giving you underneath.",
    },
    {
      id: 'q_c4_digpost',
      coverage: 'Cover 4',
      difficulty: 'advanced',
      question: "You're running a Dig-Post from the same side against a Cover 4 Read team. Your inside receiver runs a 10-yard dig. What happens and why is the post open?",
      options: [
        "The safety stays deep and covers both routes",
        "The safety jumps the dig at 10-12 yards — leaving the post wide open over the top",
        "The corner rotates to help on the dig — corner is gone from post",
        "The middle backer jumps the dig — safety still has post",
      ],
      correct: 1,
      explanation: "Against Cover 4 Read, the safety pattern matches: if the inside receiver releases vertical past 10-12 yards, the safety takes him man. If he runs a dig at 10 yards, the safety jumps it — and there's a huge void over the top for the post. Dig-Post is the premier concept against Cover 4 teams that pattern match.",
    },

    // COVER 0 / BLITZ
    {
      id: 'q_c0_hot',
      coverage: 'Cover 0',
      difficulty: 'beginner',
      question: "You identify Cover 0 pre-snap. What are your two most critical responsibilities BEFORE the snap?",
      options: [
        "Check the safety alignment and call a new play",
        "Know who your hot receiver is AND be ready to release the ball immediately after the snap",
        "Identify the Mike linebacker and adjust protection",
        "Look off the free safety and set up a deep throw",
      ],
      correct: 1,
      explanation: "Against Cover 0 you MUST know your hot receiver before the snap — not after. And you must release the ball quickly, usually within 1.5-2 seconds. There is zero safety help over the top. Holding the ball is a sack. Both of these failures together are devastating.",
    },

    // 2-MAN
    {
      id: 'q_2man_run',
      coverage: '2-Man',
      difficulty: 'intermediate',
      question: "You're facing 2-Man coverage. Every defensive back is in man coverage with two safeties deep. What's your best first option?",
      options: [
        "Throw a seam route to split the safeties",
        "Run the football — backers are matched in man coverage and can't help stop the run",
        "Throw a fade to your best receiver in one-on-one coverage",
        "Run four verticals to stress both safeties",
      ],
      correct: 1,
      explanation: "Against 2-Man, run the ball first. Every DB is in man coverage — backers are matched up too, which means very few defenders are available to stop the run. QB draw is especially great. Don't try to throw deep into man coverage with a two-high safety shell — that's the hardest throw in football.",
    },

    // COVER 6
    {
      id: 'q_c6_id',
      coverage: 'Cover 6',
      difficulty: 'advanced',
      question: "Cover 6 is Cover 2 on one side and Cover 4 on the other. How do you identify which safety is on which side pre-snap?",
      options: [
        "The pressed corner side is Cover 2, the off corner side is Cover 4",
        "The wider, deeper safety is the Cover 2 side — he has more ground to cover",
        "The safety closer to the LOS is Cover 2, the deeper safety is Cover 4",
        "You cannot identify this pre-snap",
      ],
      correct: 1,
      explanation: "Safeties tell the truth. In Cover 6, the wider safety is on the Cover 2 side — he has deep half to cover and needs more width. The narrower, closer safety is on the Cover 4 side — he only has a deep inside fourth. Identify sides and attack each one with the appropriate concept.",
    },

    // FRONTS
    {
      id: 'q_front_naming',
      coverage: null,
      difficulty: 'beginner',
      question: "A defense has four down linemen and two linebackers. How many defensive backs do they have?",
      options: ["Three", "Four", "Five", "Six"],
      correct: 2,
      explanation: "The numbers always add up to 11. First number = DL (4), second = LB (2), that's 6 total. 11 minus 6 = 5 defensive backs. This is a 4-2-5 defense — four DL, two LB, five DB.",
    },
    {
      id: 'q_front_over_under',
      coverage: null,
      difficulty: 'intermediate',
      question: "In a 4-3 Over defense, where is the three technique lined up?",
      options: [
        "To the open side — away from the tight end",
        "Head up over the center",
        "To the closed side — tight end side",
        "Outside shade of the tackle on the weak side",
      ],
      correct: 2,
      explanation: "Over means the three technique is to the CLOSED (tight end) side. Under means the three technique is to the OPEN (away from tight end) side. This is the key to identifying Over vs. Under fronts.",
    },
    {
      id: 'q_front_mike',
      coverage: null,
      difficulty: 'beginner',
      question: "When reading a defensive front pre-snap, what is the FIRST thing you identify after seeing if it's an odd or even front?",
      options: [
        "Where the safeties are aligned",
        "Where the Mike linebacker is — this sets the protection",
        "Whether the corners are pressed or off",
        "How many defenders are in the box",
      ],
      correct: 1,
      explanation: "After identifying odd vs. even front, find the Mike linebacker first. The Mike sets your protection. Then find the other backers. ID odd/even → find Mike → find other backers.",
    },

    // SITUATIONAL
    {
      id: 'q_sit_sky_rotation',
      coverage: 'Cover 3 Sky',
      difficulty: 'advanced',
      question: "You identify Cover 3 Sky post-snap — one safety is rotating DOWN to the flat. You were planning to throw the flat route. What should you do?",
      options: [
        "Still throw the flat — the safety can't get there in time",
        "Throw away from the rotation — the safety is going right to the flat",
        "Go deep over the top of the rotating safety",
        "Check down to the running back on the opposite side",
      ],
      correct: 1,
      explanation: "Cover 3 Sky is a disguise where the safety rotates DOWN to the flat — the opposite of what you expect. If you throw the flat without identifying the rotation, the safety is right there for the interception. Throw away from the rotation. Identify safety rotation immediately post-snap.",
    },
    {
      id: 'q_sit_cloud_rotation',
      coverage: 'Cover 3 Cloud',
      difficulty: 'advanced',
      question: "You catch the snap and identify Cover 3 Cloud — the corner is rolling up to the flat on the right side. All your routes are even routes. Where do you go?",
      options: [
        "Attack the right side flat — the corner coming up means deep is open",
        "Throw away from the rotation — work the left side away from where the corner rolled",
        "Attack the seam behind the rotating corner",
        "Check down to the running back on the right side",
      ],
      correct: 1,
      explanation: "In Cover 3 Cloud, throw away from the rotation. It's very hard for a safety running one direction to pivot back on a throw going the other way. The clouded side has a corner sitting in the flat — do not attack that side. Work away from the rotation with even routes.",
    },

  ],

  // ─── FILM REVIEW FALLBACKS ────────────────────────────────────────────────
  // Used when a formation has no custom film notes

  film_review_fallbacks: {
    'Cover 2': "Safeties tell the truth — corners lie. In Cover 2 the safeties are deeper and wider. The corner owns the flat — don't throw there early. Attack with hole shots on the sideline, seams, and deep ball.",
    'Cover 3': "Cover 3 is a post-snap confirmation coverage. Confirm after the snap — watch the safety go to deep middle and corners bail to thirds. Attack with seams (look off the safety), flats and sidelines, and Four Verticals.",
    'Cover 4': "Cover 4 is blanketing deep zones with four defenders. Don't go deep — take what they're giving you underneath. Dig-Post high-lows the safety. Flats, hitches, and slants are your bread and butter.",
    'Man Free (Cover 1)': "Cover 1: man to man with a single safety over top. Crossing routes and picks are your best weapons — defenders have no help. If you scramble and break the pocket, defenders are looking at receivers and you'll have open lanes to run.",
    'Cover 0': "Cover 0 means zero defenders deep — ball MUST come out before the blitz arrives. Know your hot receiver before the snap. Get rid of it in under 2 seconds or take a sack.",
    '2-Man': "2-Man is man underneath with two safeties deep. Run the ball first — backers are in man coverage and can't help stop the run. QB draw is a great call. Don't try to throw deep into man-plus-two-safeties.",
    'Cover 6': "Cover 6 is Cover 2 on one side and Cover 4 on the other. The wider safety = Cover 2 side, narrower = Cover 4 side. Attack each side with the appropriate concept for that coverage.",
    'Tampa 2': "Tampa 2 looks like Cover 2 but the Mike backer gets deep middle. Attack underneath where the Mike just vacated — draws, runs, and short passes are all good there.",
    'Cover 3 Cloud': "Cover 3 Cloud has a corner rolling up to the flat — the rest of the defense rotates. Identify the rotation post-snap and throw AWAY from it.",
    'Cover 3 Sky': "Cover 3 Sky has a safety rotating DOWN to the flat — disguised to look open. Identify rotation post-snap and throw away from it or you're throwing into a safety.",
  },

};

// Export for use in game
if (typeof module !== 'undefined') module.exports = CURRICULUM;
