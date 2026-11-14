/* Budy Play - Réunions cliquable + Sensibilité dans le menu du haut */
(function () {
  'use strict';
  function go() {
    var grid = document.querySelector('.grid');
    if (!grid || grid.getAttribute('data-plus')) return;
    grid.setAttribute('data-plus', '1');

    var cards = grid.querySelectorAll('.card');
    for (var i = 0; i < cards.length; i++) {
      var c = cards[i];
      var h = c.querySelector('h2');
      if (h && h.textContent.indexOf('Réunions') > -1 && c.tagName !== 'A') {
        var a = document.createElement('a');
        a.className = 'card';
        a.href = 'reunions-v2.html';
        a.innerHTML = '<h2 data-i="calendar">Réunions</h2><span class="badge">En test</span>';
        c.parentNode.replaceChild(a, c);
        break;
      }
    }

    var nav = document.querySelector('nav');
    if (nav && !nav.querySelector('a[href="sensibilite-ia.html"]')) {
      var s = document.createElement('a');
      s.href = 'sensibilite-ia.html';
      s.setAttribute('data-i', 'sparkles');
      s.textContent = 'Sensibilité';
      nav.appendChild(s);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go);
  else go();
})();
// fin
