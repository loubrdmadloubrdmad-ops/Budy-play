/* Budy Play - bouton de lecture vocale déplaçable */
(function () {
  'use strict';
  var KEY = 'budy_voice_pos';

  function lire() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY));
      if (v && typeof v.r === 'number' && typeof v.b === 'number') return v;
    } catch (e) {}
    return null;
  }
  function ecrire(r, b) {
    try { localStorage.setItem(KEY, JSON.stringify({ r: r, b: b })); } catch (e) {}
  }

  function lier(w) {
    if (w.getAttribute('data-deplace')) return;
    var mn = w.querySelector('.bv-m');
    if (!mn) return;
    w.setAttribute('data-deplace', '1');
    mn.style.touchAction = 'none';

    function poser(r, b) {
      var maxR = Math.max(4, window.innerWidth - w.offsetWidth - 4);
      var maxB = Math.max(4, window.innerHeight - w.offsetHeight - 4);
      r = Math.min(Math.max(4, r), maxR);
      b = Math.min(Math.max(4, b), maxB);
      w.style.right = r + 'px';
      w.style.bottom = b + 'px';
      return { r: r, b: b };
    }
    function recadrer() {
      var rc = w.getBoundingClientRect();
      poser(window.innerWidth - rc.right, window.innerHeight - rc.bottom);
    }

    var sauve = lire();
    if (sauve) poser(sauve.r, sauve.b);

    var actif = false, bouge = false, bloque = false;
    var x0 = 0, y0 = 0, r0 = 0, b0 = 0, dernier = null;

    mn.addEventListener('pointerdown', function (e) {
      actif = true; bouge = false; dernier = null;
      x0 = e.clientX; y0 = e.clientY;
      var rc = w.getBoundingClientRect();
      r0 = window.innerWidth - rc.right;
      b0 = window.innerHeight - rc.bottom;
      try { mn.setPointerCapture(e.pointerId); } catch (err) {}
    });

    mn.addEventListener('pointermove', function (e) {
      if (!actif) return;
      var dx = e.clientX - x0, dy = e.clientY - y0;
      if (!bouge && Math.sqrt(dx * dx + dy * dy) < 8) return;
      bouge = true;
      e.preventDefault();
      dernier = poser(r0 - dx, b0 - dy);
    });

    function fin() {
      if (!actif) return;
      actif = false;
      if (bouge && dernier) {
        ecrire(dernier.r, dernier.b);
        bloque = true;
        setTimeout(function () { bloque = false; }, 400);
      }
    }
    mn.addEventListener('pointerup', fin);
    mn.addEventListener('pointercancel', fin);

    /* Un glissement ne doit pas lancer la lecture ; un simple appui, si. */
    w.addEventListener('click', function (e) {
      if (bloque) {
        e.stopPropagation();
        e.preventDefault();
        bloque = false;
      }
    }, true);

    window.addEventListener('resize', recadrer);
    if (window.ResizeObserver) new ResizeObserver(recadrer).observe(w);
  }

  var essais = 0;
  var t = setInterval(function () {
    var w = document.querySelector('.bv-b');
    if (w) { lier(w); clearInterval(t); }
    else if (++essais > 40) clearInterval(t);
  }, 200);
})();
