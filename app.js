// ============================================================
// SPARKQB IQ — APP.JS v3
// Features: answer shuffle, tiered feedback, route arrows
// ============================================================

var tier = "free";
var currentUnit = null;
var currentLevel = 1;
var currentQIdx = 0;
var score = 0;
var answers = [];
var filmOpen = false;
var shuffledOptions = [];
var shuffledTiers = [];
var shuffledNotes = [];
var shuffledCorrect = 0;
var prog = {};
try { prog = JSON.parse(localStorage.getItem("sqbiq2") || "{}"); } catch(e) { prog = {}; }
var LEVEL_NAMES = { 1: "IDENTIFY IT", 2: "UNDERSTAND IT", 3: "BEAT IT" };

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function shuffleQuestion(q) {
  var indices = [0, 1, 2, 3];
  var s = shuffle(indices);
  shuffledOptions = s.map(function(i) { return q.options[i]; });
  shuffledTiers   = s.map(function(i) { return (q.tiers || ["best","wrong","wrong","wrong"])[i]; });
  shuffledNotes   = s.map(function(i) { return (q.notes || ["","","",""])[i]; });
  shuffledCorrect = s.indexOf(q.correct);
}

function showScreen(id) {
  var screens = document.querySelectorAll(".screen");
  var n = screens.length;
  for (var i = 0; i !== n; i++) {
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

function goHome() { showScreen("land"); }

function startTier(t) {
  tier = t;
  document.getElementById("navTier").textContent = t === "free" ? "FREE TIER" : t === "pro" ? "PRO TIER" : "AI ELITE";
  buildSelect();
  showScreen("select");
}

function buildSelect() { buildLevelTabs(); buildUnits(); buildProgress(); }

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

function setLevel(n) { currentLevel = n; buildLevelTabs(); buildUnits(); }

function buildUnits() {
  var container = document.getElementById("unitsContainer");
  var families = {};
  CURRICULUM.units.forEach(function(u) {
    if (!families[u.family]) families[u.family] = [];
    families[u.family].push(u);
  });
  var html = "";
  Object.keys(families).forEach(function(family) {
    html += '<div class="family-group"><div class="family-label">' + family + '</div><div class="units-grid">';
    families[family].forEach(function(u) {
      var locked = u.tier === "pro" && tier === "free";
      var qs = (u.levels[currentLevel] || []).length;
      var key = u.id + "_" + currentLevel;
      var isDone = prog[key];
      var stars = isDone ? isDone.stars : 0;
      var classes = "uc" + (locked ? " locked" : "") + (isDone ? " done" : "");
      var dots = "";
      for (var d = 0; d !== 3; d++) dots += '<div class="dot' + (d < stars ? " on" : "") + '"></div>';
      html += '<div class="' + classes + '"' + (!locked ? ' onclick="startUnit(\'' + u.id + '\')"' : '') + '>';
      if (locked) html += '<div class="tier-gate">PRO</div>';
      html += '<div class="uc-family">' + u.family + '</div>';
      html += '<div class="uc-name">' + u.name + '</div>';
      html += '<div class="uc-desc">' + u.overview.substring(0, 72) + (u.overview.length > 72 ? "..." : "") + '</div>';
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

function startUnit(unitId) {
  var unit = null;
  for (var i = 0; i !== CURRICULUM.units.length; i++) {
    if (CURRICULUM.units[i].id === unitId) { unit = CURRICULUM.units[i]; break; }
  }
  if (!unit) return;
  if (!unit.levels[currentLevel] || !unit.levels[currentLevel].length) {
    alert("No questions for this level yet. Check back soon!"); return;
  }
  currentUnit = unit; currentQIdx = 0; score = 0; answers = [];

  document.getElementById("filmTitle").textContent = "FILM ROOM — " + unit.name.toUpperCase();
  document.getElementById("filmPhId").textContent = unit.name.toUpperCase();
  var vid = VIMEO[unit.filmKey];
  var frame = document.getElementById("filmFrame");
  var ph = document.getElementById("filmPh");
  if (vid) { frame.src = "https://player.vimeo.com/video/" + vid; frame.style.display = "block"; ph.style.display = "none"; }
  else { frame.src = ""; frame.style.display = "none"; ph.style.display = "flex"; }
  filmOpen = false;
  document.getElementById("filmBody").classList.remove("open");
  document.getElementById("filmChev").classList.remove("open");

  var lvCls = { 1:"l1", 2:"l2", 3:"l3" };
  document.getElementById("lbNum").textContent = currentLevel;
  document.getElementById("lbNum").className = "lb-num " + lvCls[currentLevel];
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

function loadQ() {
  var qs = currentUnit.levels[currentLevel];
  var q = qs[currentQIdx];
  shuffleQuestion(q);

  var ph = "";
  for (var i = 0; i !== qs.length; i++) {
    ph += '<div class="pill ' + (i < currentQIdx ? "done" : i === currentQIdx ? "now" : "") + '"></div>';
  }
  document.getElementById("qPills").innerHTML = ph;
  document.getElementById("liveScore").textContent = score;
  document.getElementById("liveTot").textContent = currentQIdx;

  document.getElementById("sitDown").textContent  = q.situation.down;
  document.getElementById("sitField").textContent = q.situation.field;
  document.getElementById("sitScore").textContent = q.situation.score;
  document.getElementById("sitForm").textContent  = q.situation.formation;

  document.getElementById("qBadge").textContent     = q.badge;
  document.getElementById("qTxt").textContent       = q.question;
  document.getElementById("qHint").textContent      = q.hint;
  document.getElementById("qDirective").textContent = "SELECT THE BEST ANSWER";

  drawField(q.defense, q.situation.formation, q.routes || null);

  var letters = ["A","B","C","D"];
  var oh = "";
  for (var j = 0; j !== 4; j++) {
    oh += '<button class="opt" onclick="answerQ(' + j + ')" id="opt' + j + '">';
    oh += '<span class="opt-ltr">' + letters[j] + '</span>';
    oh += '<span class="opt-txt">' + shuffledOptions[j] + '</span>';
    oh += '</button>';
  }
  document.getElementById("optsGrid").innerHTML = oh;
  hideFb();
  document.getElementById("nextBtn").classList.remove("show");
}

function answerQ(idx) {
  var q = currentUnit.levels[currentLevel][currentQIdx];
  var pickedTier = shuffledTiers[idx];
  var isCorrect = idx === shuffledCorrect;

  var btns = document.querySelectorAll("#optsGrid .opt");
  var nb = btns.length;
  for (var i = 0; i !== nb; i++) {
    btns[i].disabled = true;
    var t = shuffledTiers[i];
    btns[i].classList.add(t === "best" ? "tier-best" : t === "ok" ? "tier-ok" : "tier-wrong");
    var lbl = t === "best" ? "BEST ANSWER" : t === "ok" ? "SITUATIONAL" : "INCORRECT";
    btns[i].querySelector(".opt-txt").innerHTML =
      shuffledOptions[i] +
      '<div class="opt-note"><span class="opt-tier-tag ' + t + '">' + lbl + '</span> ' + shuffledNotes[i] + '</div>';
  }
  btns[idx].classList.add("picked");
  if (isCorrect) score++;
  answers.push({ badge: q.badge, correct: isCorrect, tier: pickedTier });

  var title = isCorrect ? "BEST ANSWER &#x2713;" : pickedTier === "ok" ? "SITUATIONAL &#x7E;" : "NOT QUITE &#x2717;";
  showFb(isCorrect, pickedTier, title, q.explanation, !isCorrect);
  document.getElementById("nextBtn").classList.add("show");
}

function showFb(correct, tierPicked, title, text, showRw) {
  var box = document.getElementById("fb");
  var cls = "feedback show";
  if (!correct && tierPicked === "ok") cls += " partial";
  else if (!correct) cls += " wrong";
  box.className = cls;
  document.getElementById("fbTitle").innerHTML = title;
  document.getElementById("fbTxt").textContent = text;
  document.getElementById("fbRw").className = "fb-rewatch" + (showRw ? " show" : "");
}

function hideFb() { document.getElementById("fb").classList.remove("show"); }

function nextQ() {
  hideFb();
  document.getElementById("nextBtn").classList.remove("show");
  currentQIdx++;
  if (currentQIdx >= currentUnit.levels[currentLevel].length) showResults();
  else loadQ();
}

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
  if (pct === 100)    { grade = "ELITE";        msg = "Perfect session. You read the defense like a veteran."; }
  else if (pct >= 80) { grade = "VARSITY";      msg = "Strong work. A few reads still need sharpening."; }
  else if (pct >= 60) { grade = "JV LEVEL";     msg = "You are learning the concepts. Run it back."; }
  else                { grade = "WATCH THE FILM"; msg = "Go back to the Film Room before you retry."; }

  document.getElementById("resScore").textContent = score;
  document.getElementById("resOf").textContent = "/ " + total + " CORRECT";
  document.getElementById("resGrade").textContent = grade;
  document.getElementById("resMsg").textContent = msg;

  var bdHtml = '<div class="bd-title">BREAKDOWN</div>';
  for (var i = 0; i !== answers.length; i++) {
    var a = answers[i];
    var tagCls = a.correct ? "c" : a.tier === "ok" ? "p" : "w";
    var tagLbl = a.correct ? "&#x2713; BEST" : a.tier === "ok" ? "~ SITUATIONAL" : "&#x2717; INCORRECT";
    bdHtml += '<div class="bd-row"><span>Q' + (i+1) + ' — ' + a.badge + '</span><span class="bd-tag ' + tagCls + '">' + tagLbl + '</span></div>';
  }
  document.getElementById("resBd").innerHTML = bdHtml;

  var showUp = tier === "free" && currentUnit.tier === "free" && currentLevel === 3;
  document.getElementById("upsell").className = "upsell" + (showUp ? " show" : "");
  showScreen("results");
}

function retryUnit() { startUnit(currentUnit.id); }

// ============================================================
// FIELD + ROUTE RENDERER
// ============================================================
function drawField(defType, form, routeKey) {
  var canvas = document.getElementById("fieldCanvas");
  var ctx = canvas.getContext("2d");
  var W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  ctx.fillStyle = "#0b2e12";
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = "rgba(255,255,255,0.05)";
  ctx.lineWidth = 1;
  for (var xi = 0; xi <= 10; xi++) { var xv = W/10*xi; ctx.beginPath(); ctx.moveTo(xv,0); ctx.lineTo(xv,H); ctx.stroke(); }
  for (var yi = 0; yi <= 6; yi++)  { var yv = H/6*yi;  ctx.beginPath(); ctx.moveTo(0,yv);  ctx.lineTo(W,yv);  ctx.stroke(); }
  ctx.strokeStyle = "rgba(255,255,255,0.1)"; ctx.lineWidth = 2;
  var lh = W*0.37, rh = W*0.63;
  for (var hy = 10; hy < H; hy += 16) {
    ctx.beginPath(); ctx.moveTo(lh-5,hy); ctx.lineTo(lh+5,hy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(rh-5,hy); ctx.lineTo(rh+5,hy); ctx.stroke();
  }
  var LOS = H * 0.72;
  ctx.strokeStyle = "rgba(255,220,0,0.4)"; ctx.lineWidth = 2;
  ctx.setLineDash([6,4]);
  ctx.beginPath(); ctx.moveTo(0,LOS); ctx.lineTo(W,LOS); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "rgba(255,220,0,0.4)";
  ctx.font = "bold 8px Roboto Mono,monospace"; ctx.textAlign = "left"; ctx.textBaseline = "bottom";
  ctx.fillText("LOS", 5, LOS-2);

  drawOff(ctx, W, H, LOS, form);

  var dm = {
    "cover2":        function() { dC2(ctx,W,H,LOS); },
    "cover2_trips":  function() { dC2(ctx,W,H,LOS); },
    "cover2_rz":     function() { dC2(ctx,W,H,LOS); },
    "cover3":        function() { dC3(ctx,W,H,LOS,false); },
    "cover3_trips":  function() { dC3(ctx,W,H,LOS,true); },
    "cover1":        function() { dC1(ctx,W,H,LOS,false,false); },
    "cover1_press":  function() { dC1(ctx,W,H,LOS,true,false); },
    "cover1_robber": function() { dC1(ctx,W,H,LOS,false,true); },
    "cover0":        function() { dC0(ctx,W,H,LOS); },
    "cover0_dis":    function() { dC0(ctx,W,H,LOS); },
    "cover0_corner": function() { dC0C(ctx,W,H,LOS); },
    "tampa2":        function() { dT2(ctx,W,H,LOS); },
    "cover4":        function() { dC4(ctx,W,H,LOS); },
    "cover3buzz":    function() { dC3B(ctx,W,H,LOS); },
    "cover6":        function() { dC6(ctx,W,H,LOS); },
    "firezone":      function() { dFZ(ctx,W,H,LOS); }
  };
  if (dm[defType]) dm[defType]();
  if (routeKey) drawRoutes(ctx, W, H, LOS, routeKey);
  drawLeg(ctx, W, H);
}

function circ(ctx,x,y,r,f,s,l,fs) {
  ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fillStyle=f; ctx.fill();
  if(s){ctx.strokeStyle=s;ctx.lineWidth=2;ctx.stroke();}
  if(l){ctx.fillStyle="#fff";ctx.font="bold "+(fs||9)+"px Roboto Mono,monospace";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(l,x,y);}
}

function arw(ctx,x1,y1,x2,y2,col) {
  var a=Math.atan2(y2-y1,x2-x1);
  ctx.save(); ctx.strokeStyle=col||"#cc4444"; ctx.lineWidth=2;
  ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
  ctx.fillStyle=col||"#cc4444";
  ctx.beginPath(); ctx.moveTo(x2,y2); ctx.lineTo(x2-8*Math.cos(a-.4),y2-8*Math.sin(a-.4)); ctx.lineTo(x2-8*Math.cos(a+.4),y2-8*Math.sin(a+.4)); ctx.closePath(); ctx.fill();
  ctx.restore();
}

function rLine(ctx,pts,col) {
  if(pts.length < 2) return;
  ctx.save(); ctx.strokeStyle=col||"#B2FF00"; ctx.lineWidth=2.5; ctx.lineJoin="round";
  ctx.beginPath(); ctx.moveTo(pts[0][0],pts[0][1]);
  for(var i=1;i!==pts.length;i++) ctx.lineTo(pts[i][0],pts[i][1]);
  ctx.stroke();
  var last=pts[pts.length-1], prev=pts[pts.length-2];
  var a=Math.atan2(last[1]-prev[1],last[0]-prev[0]);
  ctx.fillStyle=col||"#B2FF00";
  ctx.beginPath(); ctx.moveTo(last[0],last[1]);
  ctx.lineTo(last[0]-9*Math.cos(a-.4),last[1]-9*Math.sin(a-.4));
  ctx.lineTo(last[0]-9*Math.cos(a+.4),last[1]-9*Math.sin(a+.4));
  ctx.closePath(); ctx.fill();
  ctx.restore();
}

function dl(ctx,W,LOS,n) {
  var c=W/2, pos=n===4?[-68,-22,22,68]:[-52,0,52];
  for(var i=0;i!==pos.length;i++) circ(ctx,c+pos[i],LOS-13,11,"#4a1f00","#bb5511","D",8);
}

function dOff(ctx,W,H,LOS,form) {
  var c=W/2,oy=LOS+11,bl="#2a4a7a",bs="#4a80cc",gr="#1a5e30",gs="#3a9e5a";
  circ(ctx,c,oy,9,bl,bs,"C",8); circ(ctx,c-30,oy,9,bl,bs,"O",8); circ(ctx,c-60,oy,9,bl,bs,"O",8); circ(ctx,c+30,oy,9,bl,bs,"O",8); circ(ctx,c+60,oy,9,bl,bs,"O",8);
  circ(ctx,c,oy+26,10,"#162c54",bs,"QB",7);
  if(form==="TRIPS RT"||form==="3x1"){
    circ(ctx,c-135,LOS,9,gr,gs,"X",8); circ(ctx,c+135,LOS,9,gr,gs,"Y",8); circ(ctx,c+100,LOS-4,9,gr,gs,"H",8); circ(ctx,c+162,LOS-4,9,gr,gs,"Z",8);
    circ(ctx,c+20,oy+46,9,"#1e3a62",bs,"RB",7);
  } else if(form==="TRIPS LT"){
    circ(ctx,c+135,LOS,9,gr,gs,"X",8); circ(ctx,c-135,LOS,9,gr,gs,"Y",8); circ(ctx,c-100,LOS-4,9,gr,gs,"H",8); circ(ctx,c-162,LOS-4,9,gr,gs,"Z",8);
    circ(ctx,c+20,oy+46,9,"#1e3a62",bs,"RB",7);
  } else if(form==="EMPTY"){
    circ(ctx,c-148,LOS,9,gr,gs,"X",8); circ(ctx,c-95,LOS-4,9,gr,gs,"Z",8); circ(ctx,c+148,LOS,9,gr,gs,"Y",8); circ(ctx,c+95,LOS-4,9,gr,gs,"H",8); circ(ctx,c,LOS+34,9,gr,gs,"B",8);
  } else {
    circ(ctx,c-135,LOS,9,gr,gs,"X",8); circ(ctx,c-92,LOS-4,9,gr,gs,"Z",8); circ(ctx,c+135,LOS,9,gr,gs,"Y",8); circ(ctx,c+92,LOS-4,9,gr,gs,"H",8);
    circ(ctx,c+20,oy+46,9,"#1e3a62",bs,"RB",7);
  }
}

function drawOff(ctx,W,H,LOS,form){dOff(ctx,W,H,LOS,form);}

function dC2(ctx,W,H,LOS){var c=W/2;circ(ctx,c-148,LOS-48,11,"#7a0000","#ff4444","CB",8);circ(ctx,c+148,LOS-48,11,"#7a0000","#ff4444","CB",8);circ(ctx,c-74,LOS-125,11,"#5a3a00","#ffaa00","SS",8);circ(ctx,c+74,LOS-125,11,"#5a3a00","#ffaa00","FS",8);circ(ctx,c-44,LOS-66,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c,LOS-66,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c+44,LOS-66,11,"#3a3a7a","#7777cc","LB",8);dl(ctx,W,LOS,4);}
function dC3(ctx,W,H,LOS,trips){var c=W/2,sx=trips?c+28:c;circ(ctx,c-148,LOS-106,11,"#7a0000","#ff4444","CB",8);circ(ctx,c+148,LOS-106,11,"#7a0000","#ff4444","CB",8);circ(ctx,sx,LOS-142,11,"#5a3a00","#ffaa00","FS",8);circ(ctx,c-95,LOS-68,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c+95,LOS-68,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c,LOS-62,11,"#3a3a7a","#7777cc","LB",8);dl(ctx,W,LOS,4);}
function dC1(ctx,W,H,LOS,press,rob){var c=W/2,cbY=press?LOS-13:LOS-44;circ(ctx,c-148,cbY,11,"#7a0000","#ff4444","CB",8);circ(ctx,c+148,cbY,11,"#7a0000","#ff4444","CB",8);circ(ctx,c,LOS-136,11,"#5a3a00","#ffaa00","FS",8);circ(ctx,c-44,LOS-64,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c,rob?LOS-48:LOS-64,11,"#3a3a7a","#7777cc",rob?"ROB":"LB",8);circ(ctx,c+44,LOS-64,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c-95,LOS-36,11,"#5a1a7a","#bb44cc","NB",8);circ(ctx,c+95,LOS-36,11,"#5a1a7a","#bb44cc","NB",8);dl(ctx,W,LOS,4);}
function dC0(ctx,W,H,LOS){var c=W/2;circ(ctx,c-74,LOS-60,11,"#5a3a00","#ffaa00","SS",8);circ(ctx,c+74,LOS-60,11,"#5a3a00","#ffaa00","FS",8);circ(ctx,c-148,LOS-13,11,"#7a0000","#ff4444","CB",8);circ(ctx,c+148,LOS-13,11,"#7a0000","#ff4444","CB",8);circ(ctx,c-95,LOS-13,11,"#5a1a7a","#bb44cc","NB",8);circ(ctx,c+95,LOS-13,11,"#5a1a7a","#bb44cc","NB",8);circ(ctx,c-26,LOS-48,11,"#7a1a1a","#cc4444","LB",8);circ(ctx,c+26,LOS-48,11,"#7a1a1a","#cc4444","LB",8);arw(ctx,c-26,LOS-48,c-18,LOS-15);arw(ctx,c+26,LOS-48,c+18,LOS-15);dl(ctx,W,LOS,4);}
function dC0C(ctx,W,H,LOS){var c=W/2;circ(ctx,c-148,LOS-13,11,"#7a1a1a","#ff4444","CB",8);circ(ctx,c+148,LOS-38,11,"#7a0000","#ff4444","CB",8);circ(ctx,c-56,LOS-60,11,"#5a3a00","#ffaa00","SS",8);circ(ctx,c+56,LOS-60,11,"#5a3a00","#ffaa00","FS",8);circ(ctx,c-95,LOS-25,11,"#5a1a7a","#bb44cc","NB",8);circ(ctx,c+95,LOS-25,11,"#5a1a7a","#bb44cc","NB",8);circ(ctx,c,LOS-48,11,"#3a3a7a","#7777cc","LB",8);arw(ctx,c-148,LOS-13,c-124,LOS+2,"#ff0400");dl(ctx,W,LOS,4);}
function dT2(ctx,W,H,LOS){var c=W/2;circ(ctx,c-148,LOS-48,11,"#7a0000","#ff4444","CB",8);circ(ctx,c+148,LOS-48,11,"#7a0000","#ff4444","CB",8);circ(ctx,c-76,LOS-126,11,"#5a3a00","#ffaa00","SS",8);circ(ctx,c+76,LOS-126,11,"#5a3a00","#ffaa00","FS",8);circ(ctx,c,LOS-96,11,"#3a3a7a","#7777cc","MLB",8);circ(ctx,c-52,LOS-64,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c+52,LOS-64,11,"#3a3a7a","#7777cc","LB",8);arw(ctx,c,LOS-64,c,LOS-96,"rgba(120,120,200,0.7)");dl(ctx,W,LOS,4);}
function dC4(ctx,W,H,LOS){var c=W/2;circ(ctx,c-158,LOS-96,11,"#7a0000","#ff4444","CB",8);circ(ctx,c+158,LOS-96,11,"#7a0000","#ff4444","CB",8);circ(ctx,c-66,LOS-126,11,"#5a3a00","#ffaa00","SS",8);circ(ctx,c+66,LOS-126,11,"#5a3a00","#ffaa00","FS",8);circ(ctx,c-44,LOS-62,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c,LOS-62,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c+44,LOS-62,11,"#3a3a7a","#7777cc","LB",8);dl(ctx,W,LOS,4);}
function dC3B(ctx,W,H,LOS){var c=W/2;circ(ctx,c-148,LOS-106,11,"#7a0000","#ff4444","CB",8);circ(ctx,c+148,LOS-106,11,"#7a0000","#ff4444","CB",8);circ(ctx,c,LOS-142,11,"#5a3a00","#ffaa00","FS",8);circ(ctx,c-76,LOS-62,11,"#7a5500","#cc8800","SS",8);arw(ctx,c-76,LOS-102,c-76,LOS-62,"rgba(255,170,0,0.7)");circ(ctx,c+52,LOS-64,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c,LOS-64,11,"#3a3a7a","#7777cc","LB",8);dl(ctx,W,LOS,4);}
function dC6(ctx,W,H,LOS){var c=W/2;circ(ctx,c-148,LOS-48,11,"#7a0000","#ff4444","CB",8);circ(ctx,c+158,LOS-96,11,"#7a0000","#cc3333","CB",8);circ(ctx,c-74,LOS-125,11,"#5a3a00","#ffaa00","SS",8);circ(ctx,c+66,LOS-125,11,"#5a3a00","#cc8800","FS",8);circ(ctx,c-44,LOS-66,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c,LOS-66,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c+44,LOS-66,11,"#3a3a7a","#7777cc","LB",8);dl(ctx,W,LOS,4);var cv=canvas.getContext("2d");ctx.save();ctx.fillStyle="rgba(255,255,255,0.18)";ctx.font="bold 8px Roboto Mono,monospace";ctx.textAlign="center";ctx.textBaseline="top";ctx.fillText("C2 SIDE",c-96,4);ctx.fillText("C4 SIDE",c+96,4);ctx.restore();}
function dFZ(ctx,W,H,LOS){var c=W/2;circ(ctx,c-148,LOS-96,11,"#7a0000","#ff4444","CB",8);circ(ctx,c+148,LOS-96,11,"#7a0000","#ff4444","CB",8);circ(ctx,c,LOS-138,11,"#5a3a00","#ffaa00","FS",8);circ(ctx,c-52,LOS-48,11,"#7a1a1a","#cc4444","LB",8);circ(ctx,c+52,LOS-48,11,"#7a1a1a","#cc4444","LB",8);arw(ctx,c-52,LOS-48,c-40,LOS-15);arw(ctx,c+52,LOS-48,c+40,LOS-15);circ(ctx,c,LOS-13,11,"#4a2000","#cc7733","D",8);arw(ctx,c,LOS-13,c,LOS-52,"rgba(204,119,51,0.7)");circ(ctx,c-68,LOS-13,11,"#4a2000","#bb5511","D",8);circ(ctx,c+68,LOS-13,11,"#4a2000","#bb5511","D",8);circ(ctx,c-130,LOS-13,11,"#7a1a1a","#cc4444","E",8);circ(ctx,c+130,LOS-13,11,"#7a1a1a","#cc4444","E",8);arw(ctx,c-130,LOS-13,c-115,LOS+2);arw(ctx,c+130,LOS-13,c+115,LOS+2);circ(ctx,c-95,LOS-62,11,"#3a3a7a","#7777cc","LB",8);circ(ctx,c+95,LOS-62,11,"#3a3a7a","#7777cc","LB",8);}

function drawRoutes(ctx, W, H, LOS, key) {
  var c = W/2, rc = "#B2FF00", hi = "rgba(178,255,0,0.09)";
  if (key === "smash") {
    rLine(ctx,[[c+135,LOS],[c+135,LOS-28]],rc);
    rLine(ctx,[[c+92,LOS-4],[c+92,LOS-55],[c+152,LOS-110]],rc);
    ctx.save();ctx.fillStyle=hi;ctx.beginPath();ctx.ellipse(c+148,LOS-85,22,25,0.3,0,Math.PI*2);ctx.fill();ctx.restore();
  } else if (key === "seam_c2") {
    rLine(ctx,[[c-92,LOS-4],[c-92,LOS-90]],rc);
    rLine(ctx,[[c+92,LOS-4],[c+92,LOS-90]],rc);
    ctx.save();ctx.fillStyle=hi;ctx.fillRect(c-50,LOS-140,100,60);ctx.restore();
  } else if (key === "curl_flat") {
    rLine(ctx,[[c-92,LOS-4],[c-92,LOS-58],[c-112,LOS-54]],rc);
    rLine(ctx,[[c+92,LOS-4],[c+132,LOS-10],[c+158,LOS-6]],rc);
    ctx.save();ctx.strokeStyle="rgba(119,119,200,0.4)";ctx.lineWidth=1.5;ctx.setLineDash([4,3]);ctx.beginPath();ctx.moveTo(c+95,LOS-68);ctx.lineTo(c+152,LOS-10);ctx.stroke();ctx.setLineDash([]);ctx.restore();
  } else if (key === "seam_dig") {
    rLine(ctx,[[c-92,LOS-4],[c-92,LOS-75]],rc);
    rLine(ctx,[[c+135,LOS],[c+135,LOS-50],[c+58,LOS-56]],rc);
    ctx.save();ctx.fillStyle=hi;ctx.fillRect(c-116,LOS-90,52,42);ctx.restore();
  } else if (key === "four_verts") {
    rLine(ctx,[[c-135,LOS],[c-135,LOS-115]],rc);
    rLine(ctx,[[c-92,LOS-4],[c-92,LOS-110]],rc);
    rLine(ctx,[[c+92,LOS-4],[c+92,LOS-110]],rc);
    rLine(ctx,[[c+135,LOS],[c+135,LOS-115]],rc);
  } else if (key === "levels") {
    rLine(ctx,[[c+162,LOS-4],[c+172,LOS+8]],rc);
    rLine(ctx,[[c+100,LOS-4],[c+100,LOS-58],[c+122,LOS-54]],rc);
    rLine(ctx,[[c+135,LOS],[c+146,LOS-88]],rc);
  } else if (key === "fade_flat") {
    rLine(ctx,[[c+135,LOS],[c+148,LOS-88]],rc);
    rLine(ctx,[[c+92,LOS-4],[c+136,LOS+4]],rc);
    ctx.save();ctx.fillStyle=hi;ctx.beginPath();ctx.ellipse(c+148,LOS-86,14,16,0,0,Math.PI*2);ctx.fill();ctx.restore();
  } else if (key === "mesh") {
    rLine(ctx,[[c-92,LOS-4],[c-18,LOS-18],[c+62,LOS-18]],rc);
    rLine(ctx,[[c+92,LOS-4],[c+18,LOS-30],[c-62,LOS-30]],rc);
  } else if (key === "slant") {
    rLine(ctx,[[c+135,LOS],[c+105,LOS-35]],rc);
    rLine(ctx,[[c+92,LOS-4],[c+62,LOS-34]],rc);
  } else if (key === "trips_post") {
    rLine(ctx,[[c+135,LOS],[c+135,LOS-55]],rc);
    rLine(ctx,[[c+100,LOS-4],[c+115,LOS-35]],rc);
    rLine(ctx,[[c+162,LOS-4],[c+162,LOS-25]],rc);
    rLine(ctx,[[c-135,LOS],[c-135,LOS-65],[c-78,LOS-112]],"#ff4400");
    ctx.save();ctx.fillStyle="rgba(255,68,0,0.12)";ctx.beginPath();ctx.ellipse(c-76,LOS-113,18,18,0,0,Math.PI*2);ctx.fill();ctx.restore();
  }
}

function drawLeg(ctx,W,H) {
  var items=[{c:"#ff4444",l:"CB/S"},{c:"#ffaa00",l:"SAF"},{c:"#7777cc",l:"LB"},{c:"#bb44cc",l:"NB"},{c:"#bb5511",l:"DL"},{c:"#3a9e5a",l:"OFF"},{c:"#B2FF00",l:"ROUTE"}];
  ctx.save(); ctx.font="7px Roboto Mono,monospace"; ctx.textBaseline="middle";
  for(var i=0;i!==items.length;i++){var lx=6+i*50,ly=H-9;ctx.fillStyle=items[i].c;ctx.beginPath();ctx.arc(lx+3,ly,3,0,Math.PI*2);ctx.fill();ctx.fillStyle="rgba(255,255,255,0.25)";ctx.textAlign="left";ctx.fillText(items[i].l,lx+9,ly);}
  ctx.restore();
}

(function() { showScreen("land"); })();
