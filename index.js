
var scriptName = 'netflix-autocontinue';
console.log(scriptName, 'script injected');

if (~window.location.href.indexOf('netflix.com/watch/')) {
  runLogic();
} else {
  console.log(scriptName, 'initial page is not a /watch/ page, netflix is dynamic, every 10s check the URL');
  var checkUrlInterval = setInterval(function(){
    if (~window.location.href.indexOf('netflix.com/watch/')) {
      clearInterval(checkUrlInterval);
      runLogic();
    }
  }, 10000);
}

function runLogic() {
  var duration = 5000;
  console.log(scriptName, duration, 'interval (loop) started');

  setInterval(function() {

    // while watching - small dark square popup/modal with 3 options
    var btnSelector = '.show-autoplay-interrupter button';
    var btn = document.querySelector(btnSelector);
    if (btn) {
      console.log(scriptName, 'selector found', btnSelector, btn);
      console.log(scriptName, 'clicking. Case: user was watching, netflix detected no activity, pause and prompt, clicks to continue');
      btn.click();
    }

    // end of episode - next episode preview shown
    var apSelector = '.player-postplay-show-autoplay .postplay-still-container';
    var autoplay = document.querySelector(apSelector);
    if (autoplay) {
      console.log(scriptName, 'selector found', apSelector, autoplay);
      console.log(scriptName, 'clicking. Case: end of episode, next episode preview shown (15s or autoplay disabled)');
      autoplay.click();
    }

  }, duration);
}
