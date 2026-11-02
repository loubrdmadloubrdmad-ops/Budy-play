(function () {
  'use strict';
  var CLE = 'budy_intro_vue';
  try { if (sessionStorage.getItem(CLE)) return; } catch (e) {}

  var css = [
    '#budy-intro{position:fixed;inset:0;z-index:99999;background:#0A0A0A;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .6s ease;overflow:hidden}',
    '#budy-intro.sortie{opacity:0;pointer-events:none}',
    '#budy-intro::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(57,255,20,.22),transparent 55%);animation:bi-pouls 2.4s ease-in-out infinite alternate}',
    '#budy-intro .bi-nom{position:relative;display:flex;gap:.04em;font:800 clamp(38px,13vw,84px) system-ui,sans-serif;letter-spacing:.06em;color:#39FF14;text-shadow:0 0 8px rgba(57,255,20,.9),0 0 24px rgba(57,255,20,.6),0 0 52px rgba(57,255,20,.4)}',
    '#budy-intro .bi-nom span{opacity:0;transform:translateY(18px) scale(.9);animation:bi-lettre .5s ease forwards}',
    '#budy-intro .bi-ligne{position:relative;height:3px;width:0;margin-top:18px;background:#39FF14;box-shadow:0 0 14px #39FF14;animation:bi-ligne 1.2s .9s ease forwards}',
    '#budy-intro .bi-sous{position:relative;margin-top:14px;font:600 14px system-ui,sans-serif;letter-spacing:.3em;color:#9a9a9a;opacity:0;animation:bi-apparait .6s 1.3s ease forwards}',
    '@keyframes bi-lettre{to{opacity:1;transform:none}}',
    '@keyframes bi-ligne{to{width:min(70vw,360px)}}',
    '@keyframes bi-apparait{to{opacity:1}}',
    '@keyframes bi-pouls{from{transform:scale(.8);opacity:.6}to{transform:scale(1.2);opacity:1}}',
    '@media (prefers-reduced-motion:reduce){#budy-intro *,#budy-intro::before{animation-duration:.01s!important;animation-delay:0s!important}}'
  ].join('\n');

  function lancer() {
    var s = document.createElement('style');
    s.textContent = css;
    document.head.appendChild(s);

    var el = document.createElement('div');
    el.id = 'budy-intro';
    var lettres = 'BUDY PLAY'.split('').map(function (c, i) {
      return '<span style="animation-delay:' + (0.15 + i * 0.08).toFixed(2) + 's">' + (c === ' ' ? '&nbsp;' : c) + '</span>';
    }).join('');
    el.innerHTML = '<div class="bi-nom">' + lettres + '</div><div class="bi-ligne"></div><div class="bi-sous">JOUE. CONNECTE. GAGNE.</div>';
    document.body.appendChild(el);

    var fini = false;
    function fermer() {
      if (fini) return;
      fini = true;
      try { sessionStorage.setItem(CLE, '1'); } catch (e) {}
      el.classList.add('sortie');
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 700);
    }
    el.addEventListener('click', fermer);
    setTimeout(fermer, 2800);
  }

  if (document.body) lancer();
  else document.addEventListener('DOMContentLoaded', lancer);
})();
