// ==UserScript==
// @name     Open image directly
// @version  1
// @grant    none
// @match    https://www.google.co.jp/search*
// ==/UserScript==

(()=>{const e=new MutationObserver(r=>{r.forEach(r=>{r.addedNodes.forEach(r=>{"irc_bg"===r.id&&(Array.prototype.forEach.call(r.querySelectorAll(".irc_mil,.irc_mutl"),e=>{e.addEventListener("click",e=>{const t=Array.prototype.filter.call(r.querySelectorAll(".irc_c"),e=>e.style.transform.indexOf("translate3d(0px, 0px,")>=0)[0].querySelector(".irc_mi").src;window.open(t,"_blank"),e.preventDefault()})}),e.disconnect())})})});e.observe(document,{childList:!0,subtree:!0})})();
