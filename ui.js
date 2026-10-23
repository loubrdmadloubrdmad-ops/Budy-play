/* Budy Play - icônes (SVG intégrés, aucune bibliothèque externe) */
(function () {
  var P = {
    "shopping-bag": '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    "user": '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    "message": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    "users": '<circle cx="12" cy="7" r="3"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="4.5" cy="9.5" r="2"/><circle cx="19.5" cy="9.5" r="2"/><path d="M1 20v-1a3 3 0 0 1 3-3"/><path d="M23 20v-1a3 3 0 0 0-3-3"/>',
    "friends": '<circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><path d="M10 7h4"/><path d="M2 21v-2a4 4 0 0 1 4-4h2"/><path d="M22 21v-2a4 4 0 0 0-4-4h-2"/>',
    "gamepad": '<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z"/>',
    "trophy": '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    "bell": '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    "settings": '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    "help": '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    "home": '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    "logout": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
    "login": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/>',
    "back": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    "send": '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    "plus": '<path d="M5 12h14"/><path d="M12 5v14"/>',
    "check": '<path d="M20 6 9 17l-5-5"/>',
    "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    "eye": '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    "lock": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    "key": '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
    "mail": '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    "shield": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    "palette": '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    "globe": '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    "trash": '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    "edit": '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>',
    "crown": '<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 20h14"/>',
    "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    "calendar": '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
    "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
    "diamond": '<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>',
    "clock": '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    "info": '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    "heart": '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    "sparkles": '<path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/><path d="m19 15 .7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7Z"/>',
    "layout": '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    "package": '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    "image": '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    "refresh": '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    "unlock": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
    "save": '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>'
  };
  function svg(n) {
    return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (P[n] || "") + "</svg>";
  }
  var css = document.createElement("style");
  css.textContent = ".ic{width:1.45em;height:1.45em;box-sizing:border-box;padding:.22em;background:#39ff14;border-radius:.4em;stroke:#000;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;vertical-align:-.35em;margin:-.2em .45em -.2em 0;flex:none}" +
    "[data-iconly] .ic,.icon-only .ic{margin-right:0}";
  document.head.appendChild(css);
  function apply(root) {
    var list = (root || document).querySelectorAll("[data-i],[data-label]");
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      var lab = el.getAttribute("data-label");
      if (lab) { el.setAttribute("aria-label", lab); el.setAttribute("title", lab); }
      var n = el.getAttribute("data-i");
      var f = el.firstElementChild;
      if (n && !(f && f.getAttribute("class") === "ic" && f.getAttribute("data-n") === n)) {
        if (f && f.getAttribute("class") === "ic") el.removeChild(f);
        el.insertAdjacentHTML("afterbegin", svg(n).replace("<svg ", '<svg data-n="' + n + '" '));
      }
    }
  }
  window.BudyUI = { icon: svg, apply: apply };
  document.addEventListener("DOMContentLoaded", function () {
    apply();
    new MutationObserver(function () { apply(); }).observe(document.body, { childList: true, subtree: true });
  });
})();

/* Budy Play - lecture vocale (voix du téléphone, gratuite, aucun serveur) */
(function () {
  if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) return;
  var synth = window.speechSynthesis;
  var RATES = [0.8, 1, 1.25];
  var rateIdx = 1;
  try { var s = parseInt(localStorage.getItem("budy_voice_rate"), 10); if (s >= 0 && s < RATES.length) rateIdx = s; } catch (e) {}
  var token = 0, playing = false, paused = false, ui = {};

  var ICONS = {
    play: '<path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/>',
    pause: '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
    resume: '<path d="m6 3 14 9-14 9Z"/>',
    stop: '<rect x="5" y="5" width="14" height="14" rx="2"/>'
  };
  function ic(n) { return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round">' + ICONS[n] + "</svg>"; }

  function pickVoice() {
    var v = synth.getVoices() || [], i;
    for (i = 0; i < v.length; i++) if (/^fr[-_]FR/i.test(v[i].lang)) return v[i];
    for (i = 0; i < v.length; i++) if (/^fr/i.test(v[i].lang)) return v[i];
    return null;
  }

  function pageText() {
    var root = document.querySelector("main") || document.body;
    var t = root.innerText || "";
    t = t.replace(/#\s?(\d+)/g, "numéro $1")
         .replace(/[·•|→←✓✕✗★☆]/g, ". ")
         .replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}]/gu, " ")
         .replace(/\s*\n+\s*/g, ". ")
         .replace(/\.\s*\.+/g, ".")
         .replace(/\s{2,}/g, " ");
    var raw = t.match(/[^.!?]+[.!?]*/g) || [], out = [], cur = "", i;
    for (i = 0; i < raw.length; i++) {
      var p = raw[i].trim();
      if (!p) continue;
      while (p.length > 180) { var cut = p.lastIndexOf(" ", 180); if (cut < 40) cut = 180; out.push(p.slice(0, cut)); p = p.slice(cut).trim(); }
      if ((cur + " " + p).length > 180) { if (cur) out.push(cur); cur = p; } else { cur = cur ? cur + " " + p : p; }
    }
    if (cur) out.push(cur);
    return out;
  }

  function refresh() {
    ui.main.innerHTML = ic(playing ? "stop" : "play");
    var l = playing ? "Arrêter la lecture" : "Écouter cette page";
    ui.main.setAttribute("aria-label", l); ui.main.setAttribute("title", l);
    ui.box.style.display = playing ? "flex" : "none";
    ui.pause.innerHTML = ic(paused ? "resume" : "pause");
    var pl = paused ? "Reprendre" : "Mettre en pause";
    ui.pause.setAttribute("aria-label", pl); ui.pause.setAttribute("title", pl);
    ui.speed.textContent = RATES[rateIdx] + "x";
  }

  function stop() {
    token++; playing = false; paused = false;
    try { synth.cancel(); } catch (e) {}
    refresh();
  }

  function start() {
    var parts = pageText();
    if (!parts.length) return;
    stop();
    var my = ++token, i = 0, voice = pickVoice();
    playing = true; paused = false; refresh();
    function next() {
      if (my !== token) return;
      if (i >= parts.length) { playing = false; refresh(); return; }
      var u = new SpeechSynthesisUtterance(parts[i++]);
      u.lang = voice ? voice.lang : "fr-FR";
      if (voice) u.voice = voice;
      u.rate = RATES[rateIdx];
      u.onend = next;
      u.onerror = function () { if (my === token) next(); };
      synth.speak(u);
    }
    next();
  }

  function build() {
    var css = document.createElement("style");
    css.textContent = ".bv-b{position:fixed;right:14px;bottom:14px;z-index:9999;display:flex;gap:8px;align-items:center}" +
      ".bv-b button{width:48px;height:48px;border-radius:50%;border:0;background:#39ff14;color:#000;font:700 .8rem system-ui,sans-serif;display:flex;align-items:center;justify-content:center;padding:0}" +
      ".bv-b button.bv-m{background:#39ff14;color:#000;border:0;box-shadow:0 2px 10px rgba(0,0,0,.6)}" +
      ".bv-x{display:none;gap:8px}";
    document.head.appendChild(css);
    var wrap = document.createElement("div"); wrap.className = "bv-b"; wrap.setAttribute("data-novoice", "1");
    var box = document.createElement("div"); box.className = "bv-x";
    var sp = document.createElement("button"); sp.type = "button"; sp.setAttribute("aria-label", "Changer la vitesse"); sp.setAttribute("title", "Changer la vitesse");
    var pa = document.createElement("button"); pa.type = "button";
    var mn = document.createElement("button"); mn.type = "button"; mn.className = "bv-m";
    box.appendChild(sp); box.appendChild(pa); wrap.appendChild(box); wrap.appendChild(mn);
    document.body.appendChild(wrap);
    ui = { main: mn, pause: pa, speed: sp, box: box };
    mn.onclick = function () { if (playing) stop(); else start(); };
    pa.onclick = function () { if (!playing) return; if (paused) { synth.resume(); paused = false; } else { synth.pause(); paused = true; } refresh(); };
    sp.onclick = function () {
      rateIdx = (rateIdx + 1) % RATES.length;
      try { localStorage.setItem("budy_voice_rate", String(rateIdx)); } catch (e) {}
      if (playing) start(); else refresh();
    };
    refresh();
  }

  window.addEventListener("pagehide", stop);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();/
