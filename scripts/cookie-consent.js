(function () {
  "use strict";

  if (localStorage.getItem("cookie-consent")) return;

  var lang = window.location.pathname.startsWith("/ka") ? "ka" : "en";

  var t = {
    en: {
      title: "Cookie Preferences",
      text: 'We use cookies to improve your browsing experience and analyze site traffic via Google Analytics. Choose your preference below. <a href="/' + lang + '/cookie-policy/" style="color:rgba(201,167,108,.9);text-decoration:underline">Learn more</a>',
      accept: "Accept All",
      reject: "Reject All",
      manage: "Manage Preferences",
      necessary: "Necessary",
      necessaryBadge: "Always on",
      necessaryDesc: "Essential for the site to work properly.",
      analytics: "Analytics",
      analyticsDesc: "Google Analytics — helps us understand how visitors use the site.",
      save: "Save Preferences"
    },
    ka: {
      title: "ქუქი-ფაილების პარამეტრები",
      text: 'ჩვენ ვიყენებთ ქუქი-ფაილებს ბრაუზინგის გამოცდილების გასაუმჯობესებლად და საიტის ტრაფიკის ანალიზისთვის Google Analytics-ის მეშვეობით. აირჩიეთ თქვენი პარამეტრები ქვემოთ. <a href="/' + lang + '/cookie-policy/" style="color:rgba(201,167,108,.9);text-decoration:underline">გაიგეთ მეტი</a>',
      accept: "ყველას მიღება",
      reject: "ყველას უარყოფა",
      manage: "პარამეტრების მართვა",
      necessary: "აუცილებელი",
      necessaryBadge: "ყოველთვის ჩართული",
      necessaryDesc: "საჭიროა საიტის სწორი ფუნქციონირებისთვის.",
      analytics: "ანალიტიკური",
      analyticsDesc: "Google Analytics — გვეხმარება გავიგოთ, როგორ იყენებენ ვიზიტორები საიტს.",
      save: "პარამეტრების შენახვა"
    }
  };

  var s = t[lang];

  var style = document.createElement("style");
  style.textContent = [
    /* Overlay */
    "#cc-overlay{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9998;opacity:0;transition:opacity .4s ease;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}",
    "#cc-overlay.cc-show{opacity:1}",

    /* Banner — floating card */
    "#cc-banner{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(120%);z-index:9999;width:calc(100% - 48px);max-width:520px;background:#0d1b2a;color:#e8e6e1;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.4),0 0 0 1px rgba(255,255,255,.06);font-family:var(--font-body,Montserrat,sans-serif);overflow:hidden;transition:transform .5s cubic-bezier(.16,1,.3,1),opacity .4s ease;opacity:0}",
    "#cc-banner.cc-show{transform:translateX(-50%) translateY(0);opacity:1}",
    "#cc-banner.cc-hidden{transform:translateX(-50%) translateY(120%);opacity:0}",
    "#cc-banner *{box-sizing:border-box;margin:0;padding:0}",

    /* Inner padding */
    "#cc-inner{padding:28px 28px 24px}",

    /* Header row */
    "#cc-header{display:flex;align-items:center;gap:12px;margin-bottom:14px}",
    "#cc-icon{width:36px;height:36px;background:rgba(201,167,108,.12);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px}",
    "#cc-title{font-family:var(--font-heading,'Cormorant Garamond',serif);font-size:1.15rem;font-weight:600;color:#fff;letter-spacing:.01em}",

    /* Body text */
    "#cc-text{font-size:.82rem;line-height:1.65;color:rgba(232,230,225,.65);margin-bottom:20px}",
    "#cc-text a{color:rgba(201,167,108,.9);text-decoration:underline}",

    /* Buttons */
    "#cc-buttons{display:flex;gap:10px}",
    ".cc-btn{flex:1;padding:16px 20px;border-radius:12px;font-size:.9rem;font-weight:600;letter-spacing:.02em;cursor:pointer;border:none;transition:all .25s ease;position:relative;overflow:hidden;min-height:50px}",
    ".cc-btn:active{transform:scale(.97)}",

    /* Accept */
    ".cc-btn-accept{background:linear-gradient(135deg,#c9a76c 0%,#b08d57 100%);color:#0d1b2a;box-shadow:0 4px 16px rgba(201,167,108,.25)}",
    ".cc-btn-accept:hover{box-shadow:0 6px 24px rgba(201,167,108,.4);filter:brightness(1.08)}",

    /* Reject */
    ".cc-btn-reject{background:rgba(255,255,255,.07);color:rgba(232,230,225,.8);border:1px solid rgba(255,255,255,.12)}",
    ".cc-btn-reject:hover{background:rgba(255,255,255,.12);color:#fff;border-color:rgba(255,255,255,.2)}",

    /* Manage link */
    "#cc-manage-row{margin-top:14px;text-align:center}",
    "#cc-manage{background:none;border:none;color:rgba(201,167,108,.8);font-size:.78rem;font-weight:500;cursor:pointer;padding:4px 8px;transition:color .25s;letter-spacing:.01em}",
    "#cc-manage:hover{color:#dbb97e}",
    "#cc-manage .cc-arrow{display:inline-block;transition:transform .3s;margin-left:4px;font-size:.7rem}",
    "#cc-manage.cc-open .cc-arrow{transform:rotate(180deg)}",

    /* Preferences panel */
    "#cc-prefs{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.16,1,.3,1),padding .4s ease}",
    "#cc-prefs.cc-open{max-height:280px;padding:20px 0 4px}",

    /* Divider above prefs */
    "#cc-prefs-inner{border-top:1px solid rgba(255,255,255,.08);padding-top:16px}",

    /* Category row */
    ".cc-category{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:10px;transition:background .2s}",
    ".cc-category:hover{background:rgba(255,255,255,.04)}",
    ".cc-category+.cc-category{margin-top:6px}",
    ".cc-cat-info{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0}",
    ".cc-cat-name{font-size:.83rem;font-weight:600;color:#e8e6e1}",
    ".cc-cat-desc{font-size:.72rem;color:rgba(232,230,225,.45);line-height:1.5}",
    ".cc-cat-badge{display:inline-block;font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(201,167,108,.7);background:rgba(201,167,108,.1);padding:2px 7px;border-radius:4px;margin-left:6px}",

    /* Toggle switch */
    ".cc-switch{position:relative;width:44px;height:24px;flex-shrink:0;margin-left:16px}",
    ".cc-switch input{opacity:0;width:0;height:0;position:absolute}",
    ".cc-slider{position:absolute;inset:0;background:rgba(255,255,255,.12);border-radius:24px;cursor:pointer;transition:background .3s,box-shadow .3s}",
    ".cc-slider::before{content:'';position:absolute;width:18px;height:18px;left:3px;bottom:3px;background:#fff;border-radius:50%;transition:transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s}",
    ".cc-switch input:checked+.cc-slider{background:#c9a76c;box-shadow:0 0 12px rgba(201,167,108,.3)}",
    ".cc-switch input:checked+.cc-slider::before{transform:translateX(20px);box-shadow:0 2px 6px rgba(0,0,0,.2)}",
    ".cc-switch input:disabled+.cc-slider{opacity:.4;cursor:default}",

    /* Save prefs button */
    "#cc-save{width:100%;margin-top:16px;padding:12px;border-radius:10px;background:linear-gradient(135deg,#c9a76c 0%,#b08d57 100%);color:#0d1b2a;font-size:.8rem;font-weight:600;border:none;cursor:pointer;transition:all .25s;box-shadow:0 4px 16px rgba(201,167,108,.2)}",
    "#cc-save:hover{box-shadow:0 6px 24px rgba(201,167,108,.35);filter:brightness(1.08)}",
    "#cc-save:active{transform:scale(.97)}",

    /* Mobile */
    "@media(max-width:600px){#cc-banner{bottom:12px;width:calc(100% - 24px);max-width:none;border-radius:14px}#cc-inner{padding:22px 20px 18px}#cc-buttons{flex-direction:column;gap:8px}#cc-title{font-size:1.05rem}.cc-category{padding:10px 8px}}",
    "@media(max-width:850px){#cc-banner{bottom:72px}}"
  ].join("\n");
  document.head.appendChild(style);

  // Overlay
  var overlay = document.createElement("div");
  overlay.id = "cc-overlay";
  document.body.appendChild(overlay);

  // Banner
  var banner = document.createElement("div");
  banner.id = "cc-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Cookie consent");
  banner.innerHTML =
    '<div id="cc-inner">' +
      '<div id="cc-header">' +
        '<div id="cc-icon">\uD83C\uDF6A</div>' +
        '<span id="cc-title">' + s.title + '</span>' +
      '</div>' +
      '<p id="cc-text">' + s.text + '</p>' +
      '<div id="cc-buttons">' +
        '<button class="cc-btn cc-btn-accept" id="cc-accept">' + s.accept + '</button>' +
        '<button class="cc-btn cc-btn-reject" id="cc-reject">' + s.reject + '</button>' +
      '</div>' +
      '<div id="cc-manage-row">' +
        '<button id="cc-manage">' + s.manage + ' <span class="cc-arrow">\u25BC</span></button>' +
      '</div>' +
      '<div id="cc-prefs">' +
        '<div id="cc-prefs-inner">' +
          '<div class="cc-category">' +
            '<div class="cc-cat-info">' +
              '<span class="cc-cat-name">' + s.necessary + ' <span class="cc-cat-badge">' + s.necessaryBadge + '</span></span>' +
              '<span class="cc-cat-desc">' + s.necessaryDesc + '</span>' +
            '</div>' +
            '<label class="cc-switch"><input type="checkbox" checked disabled /><span class="cc-slider"></span></label>' +
          '</div>' +
          '<div class="cc-category">' +
            '<div class="cc-cat-info">' +
              '<span class="cc-cat-name">' + s.analytics + '</span>' +
              '<span class="cc-cat-desc">' + s.analyticsDesc + '</span>' +
            '</div>' +
            '<label class="cc-switch"><input type="checkbox" id="cc-analytics" /><span class="cc-slider"></span></label>' +
          '</div>' +
          '<button id="cc-save">' + s.save + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  document.body.appendChild(banner);

  // Animate in after a short delay
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      overlay.classList.add("cc-show");
      banner.classList.add("cc-show");
    });
  });

  function dismiss(analytics) {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: analytics
    }));
    banner.classList.remove("cc-show");
    banner.classList.add("cc-hidden");
    overlay.classList.remove("cc-show");
    setTimeout(function () {
      banner.remove();
      overlay.remove();
      style.remove();
    }, 500);
  }

  document.getElementById("cc-accept").addEventListener("click", function () {
    dismiss(true);
  });

  document.getElementById("cc-reject").addEventListener("click", function () {
    dismiss(false);
  });

  var manageBtn = document.getElementById("cc-manage");
  manageBtn.addEventListener("click", function () {
    var prefs = document.getElementById("cc-prefs");
    prefs.classList.toggle("cc-open");
    manageBtn.classList.toggle("cc-open");
  });

  document.getElementById("cc-save").addEventListener("click", function () {
    dismiss(
      document.getElementById("cc-analytics").checked
    );
  });

  // Close on overlay click (same as reject all)
  overlay.addEventListener("click", function () {
    dismiss(false);
  });
})();
