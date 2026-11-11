/* Budy Play - cartes Réunions et Sensibilité sur l'accueil */
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

    if (!grid.querySelector('a[href="sensibilite-ia.html"]')) {
      var s = document.createElement('a');
      s.className = 'card';
      s.href = 'sensibilite-ia.html';
      s.innerHTML = '<h2 data-i="sparkles">Sensibilité IA</h2><span class="badge">Nouveau</span>';
      grid.appendChild(s);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go);
  else go();
})();
// fin
