(function () {
  var key = "lbpSplashShownAt";
  var last = parseInt(localStorage.getItem(key) || "0", 10);

  if (Date.now() - last < 10) {
    document.documentElement.setAttribute("data-splash", "skip");
  } else {
    document.documentElement.setAttribute("data-splash", "show");
    localStorage.setItem(key, Date.now().toString());
  }

  document.addEventListener("DOMContentLoaded", function () {
    var splash = document.getElementById("splash");
    if (!splash) return;
    if (document.documentElement.getAttribute("data-splash") !== "show") {
      splash.parentNode.removeChild(splash);
      return;
    }
    // Reveal the video only once real frames are playing
    var video = splash.querySelector("video");
    if (video) {
      var reveal = function () { video.classList.add("is-playing"); };
      if (!video.paused && video.readyState >= 3) reveal();
      else video.addEventListener("playing", reveal, { once: true });
    }
    setTimeout(function () {
      splash.classList.add("hidden");
      setTimeout(function () {
        if (splash.parentNode) splash.parentNode.removeChild(splash);
        document.documentElement.removeAttribute("data-splash");
      }, 400);
    }, 4000);
  });
})();
