(function () {
  "use strict";

  var path = window.location.pathname;
  var lang = path.startsWith("/ka") ? "ka" : "en";
  var base = "/" + lang + "/";

  var t = lang === "ka"
    ? {
        home: "მთავარი",
        about: "ჩვენ შესახებ",
        aboutGroup: "ჩვენ შესახებ",
        founder: "დამფუძნებელი",
        keyPeople: "გუნდი",
        services: "სფეროები",
        clientsGroup: "კლიენტები",
        clients: "კლიენტები",
        results: "შედეგები",
        jurisdictions: "იურისდიქციები",
        insightsGroup: "რესურსები",
        publications: "პუბლიკაციები",
        media: "მედია",
        faq: "FAQ",
        careers: "კარიერა",
        contact: "კონტაქტი",
        consultation: "კონსულტაციის დაჯავშნა"
      }
    : {
        home: "Home",
        about: "About",
        aboutGroup: "About",
        founder: "Founder",
        keyPeople: "Key People",
        services: "Practice",
        clientsGroup: "Clients",
        clients: "Clients",
        results: "Results",
        jurisdictions: "Jurisdictions",
        insightsGroup: "Insights",
        publications: "Publications",
        media: "Media",
        faq: "FAQ",
        careers: "Careers",
        contact: "Contact",
        consultation: "Book a Consultation",
      };

  var header = document.querySelector(".header");
  if (!header) return;

  function navItem(href, cls, label) {
    return '<li class="item-container"><a href="' + href + '" class="item ' + cls + '">' + label + '</a></li>';
  }

  function dropdown(label, items) {
    var children = items.map(function (it) {
      return '<li><a href="' + it.href + '">' + it.label + '</a></li>';
    }).join('');
    return (
      '<li class="item-container has-dropdown">' +
        '<button class="item dropdown-toggle" type="button" aria-expanded="false">' +
          label +
          '<span class="dropdown-caret" aria-hidden="true"></span>' +
        '</button>' +
        '<ul class="dropdown-menu">' + children + '</ul>' +
      '</li>'
    );
  }

  var aboutGroup = dropdown(t.aboutGroup, [
    { href: base + '#about', label: t.about },
    { href: base + '#founder', label: t.founder },
    // { href: base + 'key-people/', label: t.keyPeople },  // TEMP HIDDEN: restore when Key People content is ready
  ]);

  // TEMP HIDDEN: Clients dropdown — restore when Clients/Results content is ready.
  // var clientsGroup = dropdown(t.clientsGroup, [
  //   { href: base + 'clients/', label: t.clients },
  //   { href: base + 'results/', label: t.results },
  //   { href: base + '#jurisdictions', label: t.jurisdictions },
  // ]);

  var insightsGroup = dropdown(t.insightsGroup, [
    { href: base + 'publications/', label: t.publications },
    // { href: base + 'media/', label: t.media },  // TEMP HIDDEN: restore when Media content is ready
    { href: base + 'faq/', label: t.faq },
  ]);

  header.innerHTML =
    '<div class="logo">' +
      '<a href="' + base + '">' +
        '<img src="/img/logo.png" alt="LBP Logo" />' +
      '</a>' +
    '</div>' +
    '<ul class="nav">' +
      navItem(base + '#home', 'home', t.home) +
      aboutGroup +
      navItem(base + '#services', 'services', t.services) +
      // clientsGroup +  // TEMP HIDDEN — restore when Clients/Results content is ready
      navItem(base + '#jurisdictions', '', t.jurisdictions) +  // TEMP standalone — remove when clientsGroup is restored
      insightsGroup +
      navItem(base + 'vacancies/', 'careers', t.careers) +
      navItem(base + 'contact/', 'contact', t.contact) +
      '<li>' +
        '<select id="languageSelector" class="dekstop-selector" onchange="changeLanguage(this.value)">' +
          '<option value="en">En</option>' +
          '<option value="ka">ქა</option>' +
        '</select>' +
      '</li>' +
      '<li><button id="themeToggle" aria-label="Switch to dark mode"></button></li>' +
      '<li class="header-cta-container"><a href="' + base + 'consultation/" class="header-cta">' + t.consultation + '</a></li>' +
    '</ul>' +
    '<div class="burder-content">' +
      '<select id="languageSelectorMobile" onchange="changeLanguage(this.value)">' +
        '<option value="en">En</option>' +
        '<option value="ka">ქა</option>' +
      '</select>' +
      '<button id="themeToggle" aria-label="Switch to dark mode"></button>' +
      '<div class="burger" onclick="toggleMenu()">' +
        '<span></span><span></span><span></span>' +
      '</div>' +
    '</div>';

  var sel = document.getElementById("languageSelector");
  if (sel) sel.value = lang;
  var selM = document.getElementById("languageSelectorMobile");
  if (selM) selM.value = lang;

  // Dropdown toggle handling — click on mobile, hover on desktop (CSS).
  document.querySelectorAll(".has-dropdown .dropdown-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var parent = btn.parentElement;
      var open = parent.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      // close siblings
      document.querySelectorAll(".has-dropdown.open").forEach(function (other) {
        if (other !== parent) {
          other.classList.remove("open");
          var b = other.querySelector(".dropdown-toggle");
          if (b) b.setAttribute("aria-expanded", "false");
        }
      });
    });
  });

  // click outside closes dropdowns
  document.addEventListener("click", function () {
    document.querySelectorAll(".has-dropdown.open").forEach(function (el) {
      el.classList.remove("open");
      var b = el.querySelector(".dropdown-toggle");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  });
})();
