
var scriptName = 'netflix-autocontinue';
console.log(scriptName, 'script injected');

if (~window.location.href.indexOf('netflix.com/watch/')) {

  var duration = 5000;
  console.log(scriptName, duration, 'interval (loop) started');

  setInterval(function() {

    // while watching - small dark square popup/modal with 3 options
    var btnSelector = '.show-autoplay-interrupter button';
    var btn = document.querySelector(btnSelector);
    if (btn) {
      console.log(scriptName, 'selector found', btnSelector, btn);
      console.log(scriptName, 'script executing -');
      btn.click();
    }

    // end of episode - site autocontinue disabled (no countdown)
    var selector1 = '.player-postplay-show-autoplay .postplay-still-container';
    var autoplay1 = document.querySelector(selector1);
    if (autoplay1) {
      console.log(scriptName, 'selector found', selector1, autoplay1);
      console.log(scriptName, 'clicking. Case: end of episode, no countdown');
      autoplay1.click();
    }

    // end of episode - site autocontinue enabled (with 15s countdown)
    var selector2 = '.postplay-still-container .player-postplay-autoplay-still';
    var autoplay2 = document.querySelector(selector2);
    if (autoplay2) {
      console.log(scriptName, 'selector found', selector2, autoplay2);
      console.log(scriptName, 'clicking. Case: end of episode, 15s countdown');
      autoplay2.click();
    }

  }, duration);
}
