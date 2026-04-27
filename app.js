// ============================================================
// STATE
// ============================================================
var tier = "free";
var currentUnit = null;
var currentLevel = 1;
var currentQIdx = 0;
var score = 0;
var answers = [];
var filmOpen = false;
var prog = {};
try { prog = JSON.parse(localStorage.getItem("sqbiq2") || "{}"); } catch(e) { prog = {}; }

var LEVEL_COLORS = { 1: "var(--blue)", 2: "var(--green)", 3: "var(--red)" };
var LEVEL_NAMES = { 1: "IDENTIFY IT", 2: "UNDERSTAND IT", 3: "BEAT IT" };

// ============================================================
// ROUTING
// ============================================================
function showScreen(id) {
  var screens = document.querySelectorAll(".screen");
  var slen = screens.length;
  for (var i = 0; i !== slen; i++) {
    screens[i].classList.remove("active");
    screens[i].style.display = "none";
  }
  var el = document.getElementById("s-" + id);
  if (el) {
    el.classList.add("active");
    el.style.display = id === "land" ? "flex" : "block";
  }
  window.scrollTo(0, 0);
}

function goHome() {
  showScreen("land");
}

// ============================================================
// LANDING
// ============================================================
function startTier(t) {
  tier = t;
  document.getElementById("navTier").textContent = t === "free" ? "FREE TIER" : t === "pro" ? "PRO TIER" : "AI ELITE";
  buildSelect();
  showScreen("select");
}

// ============================================================
// COVERAGE SELECT
// ============================================================
function buildSelect() {
  buildLevelTabs();
  buildUnits();
  buildProgress();
}

function buildLevelTabs() {
  var html = "";
  CURRICULUM.levels.forEach(function(lv) {
    var active = lv.id === currentLevel ? " active" : "";
    html += '<div class="ltab' + active + '" onclick="setLevel(' + lv.id + ')">';
    html += '<div class="ltab-num">' + lv.id + '</div>';
    html += '<div class="ltab-name">' + lv.name + '</div>';
    html += '<div class="ltab-desc">' + lv.desc + '</div>';
    html += '</div>';
  });
  document.getElementById("levelTabs").innerHTML = html;
}

function setLevel(n) {
  currentLevel = n;
  buildLevelTabs();
  buildUnits();
}

function buildUnits() {
  var container = document.getElementById("unitsContainer");
  var families = {};

  CURRICULUM.units.forEach(function(u) {
    if (!families[u.family]) families[u.family] = [];
    families[u.family].push(u);
  });

  var html = "";
  Object.keys(families).forEach(function(family) {
    html += '<div class="family-group">';
    html += '<div class="family-label">' + family + '</div>';
    html += '<div class="units-grid">';

    families[family].forEach(function(u) {
      var locked = u.tier === "pro" && tier === "free";
      var qs = (u.levels[currentLevel] || []).length;
      var key = u.id + "_" + currentLevel;
      var isDone = prog[key];
      var stars = isDone ? isDone.stars : 0;

      var classes = "uc" + (locked ? " locked" : "") + (isDone ? " done" : "");
      var dots = "";
      for (var d = 0; d < 3; d++) dots += '<div class="dot' + (d < stars ? " on" : "") + '"></div>';

      html += '<div class="' + classes + '"' + (!locked ? ' onclick="startUnit(\'' + u.id + '\')"'  : '') + '>';
      if (locked) html += '<div class="tier-gate">PRO</div>';
      html += '<div class="uc-family">' + u.family + '</div>';
      html += '<div class="uc-name">' + u.name + '</div>';
      html += '<div class="uc-desc">' + u.overview.substring(0, 70) + (u.overview.length > 70 ? "..." : "") + '</div>';
      html += '<div class="uc-footer"><div class="uc-qs">' + qs + ' REPS</div><div class="uc-dots">' + dots + '</div></div>';
      html += '</div>';
    });

    html += '</div></div>';
  });

  container.innerHTML = html;
}

function buildProgress() {
  var total = 0, done = 0;
  CURRICULUM.units.forEach(function(u) {
    if (u.tier === "free" || tier !== "free") {
      CURRICULUM.levels.forEach(function(lv) {
        if (u.levels[lv.id] && u.levels[lv.id].length) {
          total++;
          var key = u.id + "_" + lv.id;
          if (prog[key] && prog[key].stars > 0) done++;
        }
      });
    }
  });
  var pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById("progFill").style.width = pct + "%";
  document.getElementById("progPct").textContent = pct + "%";
}

// ============================================================
// START UNIT
// ============================================================
function startUnit(unitId) {
  var unit = null;
  for (var i = 0; i < CURRICULUM.units.length; i++) {
    if (CURRICULUM.units[i].id === unitId) { unit = CURRICULUM.units[i]; break; }
  }
  if (!unit) return;
  if (!unit.levels[currentLevel] || !unit.levels[currentLevel].length) {
    alert("No questions for this level yet. Check back soon!");
    return;
  }

  currentUnit = unit;
  currentQIdx = 0;
  score = 0;
  answers = [];

  // Film room setup
  document.getElementById("filmTitle").textContent = "FILM ROOM — " + unit.name.toUpperCase();
  document.getElementById("filmPhId").textContent = unit.name.toUpperCase();
  var vimeoId = VIMEO[unit.filmKey];
  var frame = document.getElementById("filmFrame");
  var ph = document.getElementById("filmPh");
  if (vimeoId) {
    frame.src = "https://player.vimeo.com/video/" + vimeoId;
    frame.style.display = "block";
    ph.style.display = "none";
  } else {
    frame.src = "";
    frame.style.display = "none";
    ph.style.display = "flex";
  }
  filmOpen = false;
  document.getElementById("filmBody").classList.remove("open");
  document.getElementById("filmChev").classList.remove("open");

  // Level badge
  var lvColors = {1:"l1",2:"l2",3:"l3"};
  document.getElementById("lbNum").textContent = currentLevel;
  document.getElementById("lbNum").className = "lb-num " + lvColors[currentLevel];
  document.getElementById("lbName").textContent = "LEVEL " + currentLevel;
  document.getElementById("lbTitle").textContent = LEVEL_NAMES[currentLevel];

  showScreen("quiz");
  loadQ();
}

function toggleFilm() {
  filmOpen = !filmOpen;
  document.getElementById("filmBody").classList.toggle("open", filmOpen);
  document.getElementById("filmChev").classList.toggle("open", filmOpen);
}

function openFilm() {
  filmOpen = true;
  document.getElementById("filmBody").classList.add("open");
  document.getElementById("filmChev").classList.add("open");
  document.getElementById("filmRoom").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ============================================================
// LOAD QUESTION
// ============================================================
function loadQ() {
  var qs = currentUnit.levels[currentLevel];
  var q = qs[currentQIdx];

  // Pills
  var ph = "";
  for (var i = 0; i < qs.length; i++) {
    ph += '<div class="pill ' + (i < currentQIdx ? "done" : i === currentQIdx ? "now" : "") + '"></div>';
  }
  document.getElementById("qPills").innerHTML = ph;
  document.getElementById("liveScore").textContent = score;
  document.getElementById("liveTot").textContent = currentQIdx;

  // Situation
  document.getElementById("sitDown").textContent = q.situation.down;
  document.getElementById("sitField").textContent = q.situation.field;
  document.getElementById("sitScore").textContent = q.situation.score;
  document.getElementById("sitForm").textContent = q.situation.formation;

  // Question
  document.getElementById("qBadge").textContent = q.badge;
  document.getElementById("qTxt").textContent = q.question;
  document.getElementById("qHint").textContent = q.hint;
  document.getElementById("fieldLbl").textContent = q.badge + " — " + q.situation.down;

  // Draw field
  drawField(q.defense, q.situation.formation);

  // Options
  var oh = "";
  for (var j = 0; j < q.options.length; j++) {
    oh += '<button class="opt" onclick="answerQ(' + j + ')" id="opt' + j + '"><span class="opt-ltr">' + "ABCD"[j] + '</span><span>' + q.options[j] + '</span></button>';
  }
  document.getElementById("optsGrid").innerHTML = oh;

  hideFb();
  document.getElementById("nextBtn").classList.remove("show");
}

// ============================================================
// ANSWER
// ============================================================
function answerQ(idx) {
  var q = currentUnit.levels[currentLevel][currentQIdx];
  var correct = idx === q.correct;
  var btns = document.querySelectorAll("#optsGrid .opt");
  for (var i = 0; i < btns.length; i++) {
    btns[i].disabled = true;
    if (i === q.correct) btns[i].classList.add("correct");
    else if (i === idx && !correct) btns[i].classList.add("wrong");
  }
  if (correct) score++;
  answers.push({ badge: q.badge, correct: correct });
  showFb(correct, correct ? "CORRECT &#x2713;" : "NOT QUITE", q.explanation, !correct);
  document.getElementById("nextBtn").classList.add("show");
}

// ============================================================
// FEEDBACK
// ============================================================
function showFb(correct, title, text, showRw) {
  var box = document.getElementById("fb");
  box.className = "feedback show" + (correct ? "" : " wrong");
  document.getElementById("fbTitle").innerHTML = title;
  document.getElementById("fbTxt").textContent = text;
  document.getElementById("fbRw").className = "fb-rewatch" + (showRw ? " show" : "");
}
function hideFb() { document.getElementById("fb").classList.remove("show"); }

// ============================================================
// NEXT
// ============================================================
function nextQ() {
  hideFb();
  document.getElementById("nextBtn").classList.remove("show");
  currentQIdx++;
  if (currentQIdx >= currentUnit.levels[currentLevel].length) showResults();
  else loadQ();
}

// ============================================================
// RESULTS
// ============================================================
function showResults() {
  var total = currentUnit.levels[currentLevel].length;
  var pct = Math.round(score / total * 100);
  var stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;

  var key = currentUnit.id + "_" + currentLevel;
  if (!prog[key] || prog[key].stars < stars) {
    prog[key] = { stars: stars, score: score };
    try { localStorage.setItem("sqbiq2", JSON.stringify(prog)); } catch(e) {}
  }

  var grade, msg;
  if (pct === 100) { grade = "ELITE"; msg = "Perfect session. You read the defense like a veteran."; }
  else if (pct >= 80) { grade = "VARSITY"; msg = "Strong work. A few reads need sharpening."; }
  else if (pct >= 60) { grade = "JV LEVEL"; msg = "You are learning the concepts. Run it back."; }
  else { grade = "WATCH THE FILM"; msg = "Go back to the Film Room before you retry."; }

  document.getElementById("resScore").textContent = score;
  document.getElementById("resOf").textContent = "/ " + total + " CORRECT";
  document.getElementById("resGrade").textContent = grade;
  document.getElementById("resMsg").textContent = msg;

  var bdHtml = '<div class="bd-title">BREAKDOWN</div>';
  for (var i = 0; i < answers.length; i++) {
    var a = answers[i];
    bdHtml += '<div class="bd-row"><span>Q' + (i+1) + ' — ' + a.badge + '</span><span class="bd-tag ' + (a.correct ? "c" : "w") + '">' + (a.correct ? "&#x2713;" : "&#x2717;") + '</span></div>';
  }
  document.getElementById("resBd").innerHTML = bdHtml;

  var showUp = tier === "free" && currentUnit.tier === "free" && currentLevel === 3;
  document.getElementById("upsell").className = "upsell" + (showUp ? " show" : "");

  showScreen("results");
}

function retryUnit() { startUnit(currentUnit.id); }

// ============================================================
// FIELD RENDERER
// ============================================================
function drawField(type, form) {
  var canvas = document.getElementById("fieldCanvas");
  var ctx = canvas.getContext("2d");
  var W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  ctx.fillStyle = "#0d3318";
  ctx.fillRect(0, 0, W, H);

  // Grid lines
  ctx.strokeStyle = "rgba(255,255,255,0.06)";
  ctx.lineWidth = 1;
  for (var i = 0; i <= 10; i++) { var x = W/10*i; ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (var j = 0; j <= 6; j++) { var y = H/6*j; ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

  // Hashes
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 2;
  var lh = W*0.37, rh = W*0.63;
  for (var hy = 14; hy < H; hy += 16) {
    ctx.beginPath(); ctx.moveTo(lh-6,hy); ctx.lineTo(lh+6,hy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(rh-6,hy); ctx.lineTo(rh+6,hy); ctx.stroke();
  }

  var LOS = H * 0.72;
  ctx.strokeStyle = "rgba(255,220,0,0.38)";
  ctx.lineWidth = 2;
  ctx.setLineDash([6,4]);
  ctx.beginPath(); ctx.moveTo(0,LOS); ctx.lineTo(W,LOS); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "rgba(255,220,0,0.35)";
  ctx.font = "9px Roboto Mono,monospace";
  ctx.textAlign = "left";
  ctx.fillText("LOS", 5, LOS-3);

  drawOff(ctx, W, H, LOS, form);

  var dm = {
    "cover2":       function(){ dC2(ctx,W,H,LOS,false); },
    "cover2_trips": function(){ dC2(ctx,W,H,LOS,false); },
    "cover2_rz":    function(){ dC2(ctx,W,H,LOS,false); },
    "cover3":       function(){ dC3(ctx,W,H,LOS,false); },
    "cover3_trips": function(){ dC3(ctx,W,H,LOS,true); },
    "cover1":       function(){ dC1(ctx,W,H,LOS,false,false); },
    "cover1_press": function(){ dC1(ctx,W,H,LOS,true,false); },
    "cover1_robber":function(){ dC1(ctx,W,H,LOS,false,true); },
    "cover0":       function(){ dC0(ctx,W,H,LOS); },
    "cover0_dis":   function(){ dC0(ctx,W,H,LOS); },
    "cover0_corner":function(){ dC0Corner(ctx,W,H,LOS); },
    "tampa2":       function(){ dTampa2(ctx,W,H,LOS); },
    "cover4":       function(){ dC4(ctx,W,H,LOS); },
    "cover3buzz":   function(){ dC3Buzz(ctx,W,H,LOS); },
    "cover6":       function(){ dC6(ctx,W,H,LOS); },
    "firezone":     function(){ dFireZone(ctx,W,H,LOS); }
  };
  if (dm[type]) dm[type]();
  else dC2(ctx,W,H,LOS,false);
  dLegend(ctx,W,H);
}

function circ(ctx,x,y,r,fill,stroke,lbl,fs) {
  ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2);
  ctx.fillStyle=fill; ctx.fill();
  if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke();}
  if(lbl){ctx.fillStyle="#fff";ctx.font="bold "+(fs||9)+"px Roboto Mono,monospace";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(lbl,x,y);}
}
function arw(ctx,x1,y1,x2,y2) {
  var a=Math.atan2(y2-y1,x2-x1);
  ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
  ctx.beginPath();ctx.moveTo(x2,y2);ctx.lineTo(x2-8*Math.cos(a-.4),y2-8*Math.sin(a-.4));ctx.lineTo(x2-8*Math.cos(a+.4),y2-8*Math.sin(a+.4));ctx.closePath();ctx.fillStyle=ctx.strokeStyle;ctx.fill();
}

function drawOff(ctx,W,H,LOS,form) {
  var oy=LOS+11,c=W/2,bl="#2a4a7a",bs="#4a80cc",gr="#1a5e30",gs="#3a9e5a";
  circ(ctx,c,oy,9,bl,bs,"C",8); circ(ctx,c-30,oy,9,bl,bs,"O",8); circ(ctx,c-60,oy,9,bl,bs,"O",8); circ(ctx,c+30,oy,9,bl,bs,"O",8); circ(ctx,c+60,oy,9,bl,bs,"O",8);
  circ(ctx,c,oy+26,10,"#162c54",bs,"QB",7);
  if(form==="TRIPS RT"||form==="3x1"){
    circ(ctx,c-135,LOS,9,gr,gs,"X",8); circ(ctx,c+135,LOS,9,gr,gs,"Y",8); circ(ctx,c+100,LOS-4,9,gr,gs,"H",8); circ(ctx,c+162,LOS-4,9,gr,gs,"Z",8);
  } else if(form==="TRIPS LT"){
    circ(ctx,c+135,LOS,9,gr,gs,"X",8); circ(ctx,c-135,LOS,9,gr,gs,"Y",8); circ(ctx,c-100,LOS-4,9,gr,gs,"H",8); circ(ctx,c-162,LOS-4,9,gr,gs,"Z",8);
  } else if(form==="EMPTY"){
    circ(ctx,c-148,LOS,9,gr,gs,"X",8); circ(ctx,c-95,LOS-4,9,gr,gs,"Z",8); circ(ctx,c+148,LOS,9,gr,gs,"Y",8); circ(ctx,c+95,LOS-4,9,gr,gs,"H",8); circ(ctx,c,LOS+34,9,gr,gs,"B",8);
  } else {
    circ(ctx,c-135,LOS,9,gr,gs,"X",8); circ(ctx,c-92,LOS-4,9,gr,gs,"Z",8); circ(ctx,c+135,LOS,9,gr,gs,"Y",8); circ(ctx,c+92,LOS-4,9,gr,gs,"H",8);
  }
  if(form!=="EMPTY") circ(ctx,c+20,oy+46,9,"#1e3a62",bs,"RB",7);
}

function dDL(ctx,W,LOS,n){
  var c=W/2,pos=n===4?[-68,-22,22,68]:[-52,0,52];
  pos.forEach(function(ox){circ(ctx,c+ox,LOS-13,11,"#4a2000","#bb5511","D",8);});
}

function dC2(ctx,W,H,LOS){
  var c=W/2;
  circ(ctx,c-148,LOS-48,11,"#7a0000","#ff4444","CB",8); circ(ctx,c+148,LOS-48,11,"#7a0000","#ff4444","CB",8);
  circ(ctx,c-74,LOS-125,11,"#5a3a00","#ffaa00","SS",8); circ(ctx,c+74,LOS-125,11,"#5a3a00","#ffaa00","FS",8);
  circ(ctx,c-44,LOS-66,11,"#3a3a7a","#7777cc","LB",8); circ(ctx,c,LOS-66,11,"#3a3a7a","#7777cc","LB",8); circ(ctx,c+44,LOS-66,11,"#3a3a7a","#7777cc","LB",8);
  dDL(ctx,W,LOS,4);
  ctx.strokeStyle="rgba(255,170,0,0.15)";ctx.lineWidth=1;ctx.setLineDash([4,4]);
  ctx.beginPath();ctx.arc(c-74,LOS-125,85,0,Math.PI*2);ctx.stroke();
  ctx.beginPath();ctx.arc(c+74,LOS-125,85,0,Math.PI*2);ctx.stroke();
  ctx.setLineDash([]);
}

function dC3(ctx,W,H,LOS,trips){
  var c=W/2;
  circ(ctx,c-148,LOS-106,11,"#7a0000","#ff4444","CB",8); circ(ctx,c+148,LOS-106,11,"#7a0000","#ff4444","CB",8);
  var safetyX = trips ? c+30 : c;
  circ(ctx,safetyX,LOS-142,11,"#5a3a00","#ffaa00","FS",8);
  circ(ctx,c-95,LOS-68,11,"#3a3a7a","#7777cc","LB",8); circ(ctx,c+95,LOS-68,11,"#3a3a7a","#7777cc","LB",8); circ(ctx,c,LOS-62,11,"#3a3a7a","#7777cc","LB",8);
  dDL(ctx,W,LOS,4);
}

function dC1(ctx,W,H,LOS,press,robber){
  var c=W/2;
  var cbY=press?LOS-13:LOS-44;
  circ(ctx,c-148,cbY,11,"#7a0000","#ff4444","CB",8); circ(ctx,c+148,cbY,11,"#7a0000","#ff4444","CB",8);
  circ(ctx,c,LOS-136,11,"#5a3a00","#ffaa00","FS",8);
  circ(ctx,c-44,LOS-64,11,"#3a3a7a","#7777cc","LB",8);
  circ(ctx,c,robber?LOS-48:LOS-64,11,"#3a3a7a","#7777cc",robber?"RB":"LB",8);
  circ(ctx,c+44,LOS-64,11,"#3a3a7a","#7777cc","LB",8);
  circ(ctx,c-95,LOS-36,11,"#5a1a7a","#bb44cc","NB",8); circ(ctx,c+95,LOS-36,11,"#5a1a7a","#bb44cc","NB",8);
  dDL(ctx,W,LOS,4);
}

function dC0(ctx,W,H,LOS){
  var c=W/2;
  circ(ctx,c-74,LOS-60,11,"#5a3a00","#ffaa00","SS",8); circ(ctx,c+74,LOS-60,11,"#5a3a00","#ffaa00","FS",8);
  circ(ctx,c-148,LOS-13,11,"#7a0000","#ff4444","CB",8); circ(ctx,c+148,LOS-13,11,"#7a0000","#ff4444","CB",8);
  circ(ctx,c-95,LOS-13,11,"#5a1a7a","#bb44cc","NB",8); circ(ctx,c+95,LOS-13,11,"#5a1a7a","#bb44cc","NB",8);
  circ(ctx,c-26,LOS-48,11,"#7a1a1a","#cc4444","LB",8); circ(ctx,c+26,LOS-48,11,"#7a1a1a","#cc4444","LB",8);
  ctx.strokeStyle="#ff4444";ctx.lineWidth=2;
  arw(ctx,c-26,LOS-48,c-18,LOS-15); arw(ctx,c+26,LOS-48,c+18,LOS-15);
  dDL(ctx,W,LOS,4);
}

function dC0Corner(ctx,W,H,LOS){
  var c=W/2;
  circ(ctx,c-148,LOS-13,11,"#7a1a1a","#ff4444","CB",8); circ(ctx,c+148,LOS-38,11,"#7a0000","#ff4444","CB",8);
  circ(ctx,c-56,LOS-60,11,"#5a3a00","#ffaa00","SS",8); circ(ctx,c+56,LOS-60,11,"#5a3a00","#ffaa00","FS",8);
  circ(ctx,c-95,LOS-25,11,"#5a1a7a","#bb44cc","NB",8); circ(ctx,c+95,LOS-25,11,"#5a1a7a","#bb44cc","NB",8);
  circ(ctx,c,LOS-48,11,"#3a3a7a","#7777cc","LB",8);
  ctx.strokeStyle="#ff4444";ctx.lineWidth=2; arw(ctx,c-148,LOS-13,c-124,LOS+2);
  dDL(ctx,W,LOS,4);
}

function dTampa2(ctx,W,H,LOS){
  var c=W/2;
  circ(ctx,c-148,LOS-48,11,"#7a0000","#ff4444","CB",8); circ(ctx,c+148,LOS-48,11,"#7a0000","#ff4444","CB",8);
  circ(ctx,c-76,LOS-126,11,"#5a3a00","#ffaa00","SS",8); circ(ctx,c+76,LOS-126,11,"#5a3a00","#ffaa00","FS",8);
  circ(ctx,c,LOS-96,11,"#3a3a7a","#7777cc","MLB",8);
  circ(ctx,c-52,LOS-64,11,"#3a3a7a","#7777cc","LB",8); circ(ctx,c+52,LOS-64,11,"#3a3a7a","#7777cc","LB",8);
  ctx.strokeStyle="rgba(120,120,200,0.5)";ctx.lineWidth=2; arw(ctx,c,LOS-64,c,LOS-96);
  dDL(ctx,W,LOS,4);
}

function dC4(ctx,W,H,LOS){
  var c=W/2;
  circ(ctx,c-158,LOS-96,11,"#7a0000","#ff4444","CB",8); circ(ctx,c+158,LOS-96,11,"#7a0000","#ff4444","CB",8);
  circ(ctx,c-66,LOS-126,11,"#5a3a00","#ffaa00","SS",8); circ(ctx,c+66,LOS-126,11,"#5a3a00","#ffaa00","FS",8);
  circ(ctx,c-44,LOS-62,11,"#3a3a7a","#7777cc","LB",8); circ(ctx,c,LOS-62,11,"#3a3a7a","#7777cc","LB",8); circ(ctx,c+44,LOS-62,11,"#3a3a7a","#7777cc","LB",8);
  dDL(ctx,W,LOS,4);
  ctx.strokeStyle="rgba(255,170,0,0.11)";ctx.lineWidth=1;ctx.setLineDash([3,5]);
  [[c-158,LOS-96],[c-66,LOS-126],[c+66,LOS-126],[c+158,LOS-96]].forEach(function(p){ctx.beginPath();ctx.arc(p[0],p[1],58,0,Math.PI*2);ctx.stroke();});
  ctx.setLineDash([]);
}

function dC3Buzz(ctx,W,H,LOS){
  var c=W/2;
  circ(ctx,c-148,LOS-106,11,"#7a0000","#ff4444","CB",8); circ(ctx,c+148,LOS-106,11,"#7a0000","#ff4444","CB",8);
  circ(ctx,c,LOS-142,11,"#5a3a00","#ffaa00","FS",8);
  circ(ctx,c-76,LOS-62,11,"#7a5500","#cc8800","SS",8);
  ctx.strokeStyle="rgba(255,170,0,0.5)";ctx.lineWidth=2; arw(ctx,c-76,LOS-102,c-76,LOS-62);
  circ(ctx,c+52,LOS-64,11,"#3a3a7a","#7777cc","LB",8); circ(ctx,c,LOS-64,11,"#3a3a7a","#7777cc","LB",8);
  dDL(ctx,W,LOS,4);
}

function dC6(ctx,W,H,LOS){
  var c=W/2;
  // Cover 2 side (left) — corner at 7 yards
  circ(ctx,c-148,LOS-48,11,"#7a0000","#ff4444","CB",8);
  // Cover 4 side (right) — corner at 10+ yards
  circ(ctx,c+158,LOS-96,11,"#7a0000","#cc3333","CB",8);
  // Cover 2 safety (deep half left)
  circ(ctx,c-74,LOS-125,11,"#5a3a00","#ffaa00","SS",8);
  // Cover 4 safety (deep quarter right)
  circ(ctx,c+66,LOS-125,11,"#5a3a00","#cc8800","FS",8);
  circ(ctx,c-44,LOS-66,11,"#3a3a7a","#7777cc","LB",8); circ(ctx,c,LOS-66,11,"#3a3a7a","#7777cc","LB",8); circ(ctx,c+44,LOS-66,11,"#3a3a7a","#7777cc","LB",8);
  dDL(ctx,W,LOS,4);
  // Label the sides
  ctx.fillStyle="rgba(255,255,255,0.2)";ctx.font="8px Roboto Mono,monospace";ctx.textAlign="center";ctx.textBaseline="top";
  ctx.fillText("C2 SIDE",c-100,4); ctx.fillText("C4 SIDE",c+100,4);
}

function dFireZone(ctx,W,H,LOS){
  var c=W/2;
  circ(ctx,c-148,LOS-96,11,"#7a0000","#ff4444","CB",8); circ(ctx,c+148,LOS-96,11,"#7a0000","#ff4444","CB",8);
  circ(ctx,c,LOS-138,11,"#5a3a00","#ffaa00","FS",8);
  // Blitzing LBs
  circ(ctx,c-52,LOS-48,11,"#7a1a1a","#cc4444","LB",8); circ(ctx,c+52,LOS-48,11,"#7a1a1a","#cc4444","LB",8);
  ctx.strokeStyle="#cc4444";ctx.lineWidth=2;
  arw(ctx,c-52,LOS-48,c-44,LOS-15); arw(ctx,c+52,LOS-48,c+44,LOS-15);
  // DL dropping into zone
  circ(ctx,c,LOS-13,11,"#4a2000","#cc7733","D",8);
  ctx.strokeStyle="rgba(204,119,51,0.6)";ctx.lineWidth=2; arw(ctx,c,LOS-13,c,LOS-52);
  // Regular DL
  circ(ctx,c-68,LOS-13,11,"#4a2000","#bb5511","D",8); circ(ctx,c+68,LOS-13,11,"#4a2000","#bb5511","D",8);
  // Edge rushers
  circ(ctx,c-130,LOS-13,11,"#7a1a1a","#cc4444","E",8); circ(ctx,c+130,LOS-13,11,"#7a1a1a","#cc4444","E",8);
  ctx.strokeStyle="#cc4444";ctx.lineWidth=2;
  arw(ctx,c-130,LOS-13,c-115,LOS+2); arw(ctx,c+130,LOS-13,c+115,LOS+2);
  // Underneath zone defenders
  circ(ctx,c-95,LOS-62,11,"#3a3a7a","#7777cc","LB",8); circ(ctx,c+95,LOS-62,11,"#3a3a7a","#7777cc","LB",8);
}

function dLegend(ctx,W,H){
  var items=[{c:"#ff4444",l:"CB"},{c:"#ffaa00",l:"S"},{c:"#7777cc",l:"LB"},{c:"#bb44cc",l:"NB"},{c:"#bb5511",l:"DL"},{c:"#3a9e5a",l:"OFF"}];
  ctx.font="8px Roboto Mono,monospace";ctx.textBaseline="middle";
  for(var i=0;i<items.length;i++){
    var lx=6+i*54,ly=H-10;
    ctx.fillStyle=items[i].c;ctx.beginPath();ctx.arc(lx+4,ly,4,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="rgba(255,255,255,0.28)";ctx.textAlign="left";ctx.fillText(items[i].l,lx+12,ly);
  }
}

// Init — force correct display on load
(function(){ showScreen("land"); })();
