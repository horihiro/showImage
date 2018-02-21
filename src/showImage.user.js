// ==UserScript==
// @name     Open image directly
// @version  1
// @grant    none
// @match    https://www.google.co.jp/search*
// ==/UserScript==

(() => {
  const mo = new MutationObserver((mrs) => {
    mrs.forEach((mr) => {
      mr.addedNodes.forEach((addedNode) => {
        if (addedNode.id === 'irc_bg') {
          Array.prototype.forEach.call(addedNode.querySelectorAll('.irc_mil,.irc_mutl'), (e) => {
            e.addEventListener('click', (ev) => {
              const url = Array.prototype.filter.call(addedNode.querySelectorAll('.irc_c'), e => e.style.transform.indexOf('translate3d(0px, 0px,') >= 0)[0].querySelector('.irc_mi').src;
              window.open(url, '_blank');
              ev.preventDefault();
            });
          });
          mo.disconnect();
        }
      });
    });
  });
  const options = {
    childList: true,
    subtree: true
  };
  mo.observe(document, options);
})();