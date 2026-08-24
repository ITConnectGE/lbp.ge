/**
 * Floating call button: a single round action button that expands into the
 * contact channels. Injected on every page, like header.js / footer.js.
 */
(function () {
  if (document.querySelector(".contact-fab")) return;

  var lang = window.location.pathname.indexOf("/ka") === 0 ? "ka" : "en";

  var T = {
    ka: {
      open: "დაგვიკავშირდით",
      close: "დახურვა",
      phone: "დაგვირეკეთ",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      signal: "Signal",
      email: "მოგვწერეთ"
    },
    en: {
      open: "Contact us",
      close: "Close",
      phone: "Call us",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      signal: "Signal",
      email: "Email us"
    }
  }[lang];

  // Listed top to bottom; the phone sits closest to the button.
  var CHANNELS = [
    { key: "email", href: "mailto:info@lbp.ge", icon: "/img/email.svg" },
    { key: "signal", icon: "/img/signal.svg",
      href: "https://signal.me/#eu/zwuOy-N542CYd__tspnFbQ5DYWFmws9q8OCo1M8-rltqxDAZSm5L0KII3Jcgpg5U" },
    { key: "telegram", href: "https://t.me/FCCC27", icon: "/img/telegram.svg" },
    { key: "whatsapp", href: "https://wa.me/995595223333", icon: "/img/whatsapp.svg" },
    { key: "phone", href: "tel:+995595223333", icon: "/img/phone.svg" }
  ];

  var items = CHANNELS.map(function (c, i) {
    // stagger opens bottom-up, so the last item animates first
    var order = CHANNELS.length - 1 - i;
    var external = c.href.indexOf("http") === 0
      ? ' target="_blank" rel="noopener noreferrer"' : "";
    return '<a class="contact-fab-item contact-fab-item--' + c.key + '" href="' + c.href + '"' +
      external + ' style="--i:' + order + '" tabindex="-1" aria-label="' + T[c.key] + '">' +
      '<span class="contact-fab-tip">' + T[c.key] + "</span>" +
      '<img src="' + c.icon + '" alt="" />' +
      "</a>";
  }).join("");

  var wrap = document.createElement("div");
  wrap.className = "contact-fab";
  wrap.innerHTML =
    '<div class="contact-fab-list">' + items + "</div>" +
    '<button type="button" class="contact-fab-toggle" aria-expanded="false" aria-label="' +
      T.open + '">' +
      '<img src="/img/phone.svg" alt="" class="contact-fab-phone" />' +
      '<span class="contact-fab-cross" aria-hidden="true"></span>' +
    "</button>";
  document.body.appendChild(wrap);

  var toggle = wrap.querySelector(".contact-fab-toggle");
  var links = wrap.querySelectorAll(".contact-fab-item");

  function setOpen(open) {
    wrap.classList.toggle("is-open", open);
    document.body.classList.toggle("contact-fab-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? T.close : T.open);
    links.forEach(function (a) { a.tabIndex = open ? 0 : -1; });
  }

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(!wrap.classList.contains("is-open"));
  });

  document.addEventListener("click", function (e) {
    if (!wrap.contains(e.target)) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && wrap.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
