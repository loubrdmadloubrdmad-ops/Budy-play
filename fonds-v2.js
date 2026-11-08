/* Budy Play - Fonds animés (images + vidéos) */
(function () {
  'use strict';

  var IMAGES = [
    '1793562387776.jpg', '1793562480462.jpg', '1793562561771.jpg', '1793562583586.jpg',
    '1793562607401.jpg', '1793562627618.jpg', '1793562761450.jpg', '1793562812497.jpg',
    '1793563781193.jpg', '1793563787365.jpg', '1793563795898.jpg', '1793563882206.jpg',
    '1793563900158.jpg', '1793564107210.jpg', '1793564112046.jpg', '1793564256293.jpg',
    '1793564268564.jpg'
  ];

  /* Fonds vidéo : pour en ajouter un, mets une ligne de plus ici (fichier + nom affiché). */
  var VIDEOS = [
    { f: 'kling_20261108_VIDEO_Very_subtl_6072_0.mp4', nom: 'Archère' },
    { f: 'kling_20261109_VIDEO_Very_subtl_438_0%20(2).mp4', nom: 'Reine' }
  ];

  var CLE = 'budy_fond_img';

  var CSS = [
    '#budy-fond{position:fixed;inset:0;z-index:-1;pointer-events:none;background:#0A0A0A;overflow:hidden}',
    '#budy-fond .bf-img{position:absolute;inset:-8%;background-size:cover;background-position:center}',
    '#budy-fond .bf-vid{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;transform:scale(1.12);transform-origin:0 0;background:#0A0A0A}',
    '#budy-fond .bf-voile{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.35) 40%,rgba(0,0,0,.65))}',
    '#budy-fond .bf-part{position:absolute;inset:0;opacity:.6;background-size:240px 240px;background-image:radial-gradient(2px 2px at 30px 40px,#39FF14,transparent),radial-gradient(1.5px 1.5px at 120px 150px,#fff,transparent),radial-gradient(2px 2px at 200px 90px,#39FF14,transparent),radial-gradient(1.5px 1.5px at 80px 210px,#39FF14,transparent);animation:bf-monte 16s linear infinite}',
    '@keyframes bf-monte{from{background-position:0 0}to{background-position:0 -480px}}',
    '.fx0{animation:bf-zoom 22s ease-in-out infinite alternate}',
    '.fx1{animation:bf-gauche 24s ease-in-out infinite alternate}',
    '.fx2{animation:bf-haut 24s ease-in-out infinite alternate}',
    '.fx3{animation:bf-respire 18s ease-in-out infinite alternate}',
    '@keyframes bf-zoom{from{transform:scale(1)}to{transform:scale(1.15)}}',
    '@keyframes bf-gauche{from{transform:scale(1.1) translateX(-4%)}to{transform:scale(1.1) translateX(4%)}}',
    '@keyframes bf-haut{from{transform:scale(1.1) translateY(-4%)}to{transform:scale(1.1) translateY(4%)}}',
    '@keyframes bf-respire{from{transform:scale(1.04);filter:brightness(.9)}to{transform:scale(1.12);filter:brightness(1.1)}}',
    'html.budy-fond-actif,html.budy-fond-actif body{background:transparent!important}',

    '#budy-fond-btn{position:fixed;right:14px;bottom:14px;z-index:9998;background:#0A0A0A;color:#39FF14;border:1px solid #39FF14;border-radius:999px;padding:10px 18px;font:600 14px system-ui,sans-serif;box-shadow:0 0 12px rgba(57,255,20,.45)}',
    '#budy-fond-panneau{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.92);overflow:auto;padding:18px 14px;font-family:system-ui,sans-serif;color:#fff}',
    '#budy-fond-panneau h2{margin:0 0 4px;color:#39FF14;font-size:20px}',
    '#budy-fond-panneau p{margin:0 0 14px;color:#9a9a9a;font-size:13px}',
    '.bf-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}',
    '.bf-carte{position:relative;height:170px;border:1px solid #2a2a2a;border-radius:12px;overflow:hidden;background:#0A0A0A center/cover no-repeat;padding:0;color:#fff;cursor:pointer}',
    '.bf-carte.actif{border-color:#39FF14;box-shadow:0 0 10px rgba(57,255,20,.7)}',
    '.bf-carte .bf-mini{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none}',
    '.bf-carte span{position:absolute;left:8px;bottom:8px;font:600 13px system-ui,sans-serif;text-shadow:0 1px 4px #000}',
    '.bf-carte span.bf-tag{left:auto;right:8px;top:8px;bottom:auto;background:#39FF14;color:#0A0A0A;border-radius:999px;padding:2px 8px;font-size:11px;font-weight:700;text-shadow:none}',
    '#budy-fond-fermer{margin-top:16px;width:100%;background:#39FF14;color:#0A0A0A;border:0;border-radius:12px;padding:14px;font:700 15px system-ui,sans-serif}',
    '@media (prefers-reduced-motion:reduce){#budy-fond .bf-img,#budy-fond .bf-part{animation:none!important}}'
  ].join('\n');

  function lire() { try { return localStorage.getItem(CLE) || ''; } catch (e) { return ''; } }
  function ecrire(v) { try { localStorage.setItem(CLE, v); } catch (e) {} }

  function indexVideo(f) {
    for (var k = 0; k < VIDEOS.length; k++) if (VIDEOS[k].f === f) return k;
    return -1;
  }

  function ajouterStyle() {
    if (document.getElementById('budy-fond-style')) return;
    var s = document.createElement('style');
    s.id = 'budy-fond-style';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function appliquer(f) {
    ajouterStyle();
    var el = document.getElementById('budy-fond');
    var i = IMAGES.indexOf(f);
    var v = indexVideo(f);
    if (i < 0 && v < 0) {
      if (el) el.remove();
      document.documentElement.classList.remove('budy-fond-actif');
      ecrire('');
      return;
    }
    if (!el) {
      el = document.createElement('div');
      el.id = 'budy-fond';
      document.body.insertBefore(el, document.body.firstChild);
    }
    el.textContent = '';
    if (v >= 0) {
      var vid = document.createElement('video');
      vid.className = 'bf-vid';
      vid.src = f;
      vid.muted = true;
      vid.defaultMuted = true;
      vid.loop = true;
      vid.autoplay = true;
      vid.playsInline = true;
      vid.setAttribute('muted', '');
      vid.setAttribute('playsinline', '');
      vid.setAttribute('webkit-playsinline', '');
      vid.setAttribute('preload', 'auto');
      vid.setAttribute('aria-hidden', 'true');
      el.appendChild(vid);
      var lancer = function () { var p = vid.play(); if (p && p.catch) p.catch(function () {}); };
      lancer();
      vid.addEventListener('canplay', lancer);
    } else {
      var im = document.createElement('div');
      im.className = 'bf-img fx' + (i % 4);
      im.style.backgroundImage = 'url(' + f + ')';
      el.appendChild(im);
    }
    var voile = document.createElement('div'); voile.className = 'bf-voile'; el.appendChild(voile);
    var part = document.createElement('div'); part.className = 'bf-part'; el.appendChild(part);
    document.documentElement.classList.add('budy-fond-actif');
    ecrire(f);
  }

  function ouvrir() {
    ajouterStyle();
    if (document.getElementById('budy-fond-panneau')) return;
    var actif = lire();
    var p = document.createElement('div');
    p.id = 'budy-fond-panneau';
    var html = '<h2>Choisis ton fond</h2><p>Fonds animés gratuits pour tous les membres.</p><div class="bf-grid">';
    VIDEOS.forEach(function (x) {
      html += '<button class="bf-carte' + (x.f === actif ? ' actif' : '') + '" data-id="' + x.f + '">' +
              '<video class="bf-mini" src="' + x.f + '#t=0.5" muted playsinline preload="metadata"></video>' +
              '<span class="bf-tag">Vidéo</span><span>' + x.nom + '</span></button>';
    });
    IMAGES.forEach(function (f, i) {
      html += '<button class="bf-carte' + (f === actif ? ' actif' : '') + '" data-id="' + f +
              '" style="background-image:url(' + f + ')"><span>Fond ' + (i + 1) + '</span></button>';
    });
    html += '<button class="bf-carte' + (!actif ? ' actif' : '') + '" data-id=""><span>Aucun fond</span></button>';
    html += '</div><button id="budy-fond-fermer">Fermer</button>';
    p.innerHTML = html;
    document.body.appendChild(p);

    p.addEventListener('click', function (e) {
      var carte = e.target.closest ? e.target.closest('.bf-carte') : null;
      if (carte) {
        appliquer(carte.getAttribute('data-id'));
        var cartes = p.querySelectorAll('.bf-carte');
        for (var k = 0; k < cartes.length; k++) cartes[k].classList.remove('actif');
        carte.classList.add('actif');
        return;
      }
      if (e.target.id === 'budy-fond-fermer') p.remove();
    });
  }

  function demarrer() {
    ajouterStyle();
    var f = lire();
    if (f) appliquer(f);
    if (!document.getElementById('budy-fond-btn')) {
      var b = document.createElement('button');
      b.id = 'budy-fond-btn';
      b.type = 'button';
      b.textContent = 'Fond';
      b.addEventListener('click', ouvrir);
      document.body.appendChild(b);
    }
  }

  /* Économie de batterie : la vidéo se met en pause quand la page n'est pas visible. */
  document.addEventListener('visibilitychange', function () {
    var vid = document.querySelector('#budy-fond .bf-vid');
    if (!vid) return;
    if (document.hidden) vid.pause();
    else { var p = vid.play(); if (p && p.catch) p.catch(function () {}); }
  });

  window.BudyFond = { images: IMAGES, videos: VIDEOS, appliquer: appliquer, ouvrir: ouvrir };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer);
  else demarrer();
})();
