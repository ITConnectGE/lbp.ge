(function () {
  "use strict";

  var lang = window.location.pathname.startsWith("/ka") ? "ka" : "en";
  var base = "/" + lang + "/";

  // Desktop footer
  var footer = document.querySelector(".footer");
  if (footer) {
    footer.innerHTML =
      '<div class="footer-top">' +
        '<div class="footer-col footer-brand">' +
          '<img src="/img/iconi.png" alt="LBP" class="footer-logo" />' +
          '<p id="footerAbout" class="footer-tagline">Legal &amp; Business Partners — Your trusted legal advisors in Georgia and beyond.</p>' +
          '<ul class="footer-social">' +
            '<li><a href="https://www.linkedin.com/company/lbp-law-office/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><img src="/img/linked.svg" alt="LinkedIn" /></a></li>' +
            '<li><a href="https://www.facebook.com/LBPLawOffice" target="_blank" rel="noopener noreferrer"><img src="/img/facebook.svg" alt="Facebook" /></a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4 class="footer-heading" id="footerQuickLinks">Quick Links</h4>' +
          '<ul class="footer-links">' +
            '<li><a href="' + base + '#about" id="footerLinkAbout">About</a></li>' +
            '<li><a href="' + base + '#founder" id="footerLinkFounder">Founder</a></li>' +
            '<li><a href="' + base + '#services" id="footerLinkServices">Practice Areas</a></li>' +
            '<li><a href="' + base + '#titleCareers" id="footerLinkCareers">Careers</a></li>' +
            '<li><a href="' + base + 'contact/" id="footerLinkLocation">Our Office</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4 class="footer-heading" id="footerBlogHeading">Blog</h4>' +
          '<ul class="footer-links">' +
            '<li><a href="' + base + 'blog/" id="footerBlog1">Virtual Assets in Georgia</a></li>' +
            '<li><a href="' + base + 'blog/LabourRegulation/" id="footerBlog2">Labour Regulation</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4 class="footer-heading" id="footerContactHeading">Contact</h4>' +
          '<ul class="footer-contact">' +
            '<li><img src="/img/email.svg" alt="" class="footer-icon" /><a href="mailto:info@lbp.ge">info@lbp.ge</a></li>' +
            '<li><img src="/img/phone.svg" alt="" class="footer-icon" /><a href="tel:+995595223333">+995-595-223-333</a></li>' +
            '<li><img src="/img/map.svg" alt="" class="footer-icon" /><span id="footerAddress">37m Ilia Chavchavadze Ave, Tbilisi 0179</span></li>' +
            '<li><img src="/img/whatsapp.svg" alt="" class="footer-icon" /><a href="https://wa.me/12023912609" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>' +
            '<li><img src="/img/telegram.svg" alt="" class="footer-icon" /><a href="https://t.me/FCCC27" target="_blank" rel="noopener noreferrer">Telegram</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<p>&copy; 2025 LBP — Legal &amp; Business Partners. All rights reserved.</p>' +
        '<div class="footer-legal-links">' +
          '<a href="' + base + 'privacy-policy/" id="footerPrivacyPolicy">Privacy Policy</a>' +
          '<span class="separator">|</span>' +
          '<a href="' + base + 'cookie-policy/" id="footerCookiePolicy">Cookie Policy</a>' +
        '</div>' +
      '</div>';
  }

  // Mobile footer
  var footerMobile = document.querySelector(".footer-mobile");
  if (footerMobile) {
    footerMobile.innerHTML =
      '<ul class="footer-mobile-links">' +
        '<li><a href="mailto:info@lbp.ge"><img src="/img/email.svg" alt="Email" /></a></li>' +
        '<li><a href="tel:+995595223333"><img src="/img/phone.svg" alt="Phone" /></a></li>' +
        '<li><a href="https://wa.me/12023912609" target="_blank" rel="noopener noreferrer"><img src="/img/whatsapp.svg" alt="WhatsApp" /></a></li>' +
        '<li><a href="https://t.me/FCCC27" target="_blank" rel="noopener noreferrer"><img src="/img/telegram.svg" alt="Telegram" /></a></li>' +
        '<li><a href="https://www.linkedin.com/company/lbp-law-office/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><img src="/img/linked.svg" alt="LinkedIn" /></a></li>' +
        '<li><a href="https://www.facebook.com/LBPLawOffice" target="_blank" rel="noopener noreferrer"><img src="/img/facebook.svg" alt="Facebook" /></a></li>' +
      '</ul>';
  }
})();
