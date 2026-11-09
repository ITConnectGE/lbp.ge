/**
 * Callback Request modal.
 * Loaded automatically by header.js on every page.
 * Opens from the floating "Request a Callback" button, from any element
 * with [data-callback], or via window.openCallback().
 * Submits through Web3Forms (same key as the consultation form).
 */
(function () {
  "use strict";

  if (window.__lbpCallback) return;
  window.__lbpCallback = true;

  var WEB3FORMS_KEY = "66e25aa4-b711-4842-aa1e-e455f79d34a0";
  var lang = window.location.pathname.startsWith("/ka") ? "ka" : "en";

  var T = {
    en: {
      trigger: "Request a Callback",
      title: "Callback Request",
      intro: "Have one of our qualified lawyers contact you today.",
      practice: "Practice area of interest",
      salutation: "Salutation",
      firstName: "First name",
      firstNamePh: "Enter first name",
      lastName: "Last name",
      lastNamePh: "Enter last name",
      nationality: "Nationality",
      residence: "Country you currently reside in",
      phone: "Telephone number",
      email: "E-mail address",
      emailPh: "Enter e-mail address",
      select: "Please select",
      consent:
        "Please keep me updated and send me information and news about LBP — Legal & Business Partners, event invitations and publications via e-mail. Detailed information on how we process your personal data can be found in our Privacy Policy, available ",
      here: "here",
      close: "Close",
      submit: "Submit",
      sending: "Sending...",
      required: "This field is required",
      invalidEmail: "Please enter a valid e-mail address",
      invalidPhone: "Please enter a valid phone number",
      error: "Submission failed. Please try again or e-mail info@lbp.ge.",
      successTitle: "Thank you!",
      successText: "Your request has been received. One of our lawyers will contact you shortly.",
      salutations: ["Mr.", "Ms.", "Mrs.", "Dr.", "Prof."],
      practices: [
        "Administrative Regulations",
        "Corporate Law",
        "Competition and Consumer Protection Law",
        "Criminal Law",
        "Investment and Real Estate",
        "IP and Personal Data",
        "Labor Law",
        "Litigation and ADR",
        "Migration and Banking",
        "Oil & Gas",
        "Project Finance",
        "Restructuring and Insolvency",
        "Sports Law",
        "Taxes and Private Wealth",
        "Other",
      ],
    },
    ka: {
      trigger: "უკუკავშირის მოთხოვნა",
      title: "უკუკავშირის მოთხოვნა",
      intro: "ჩვენი კვალიფიციური იურისტი დღესვე დაგიკავშირდებათ.",
      practice: "საინტერესო სფერო",
      salutation: "მიმართვა",
      firstName: "სახელი",
      firstNamePh: "შეიყვანეთ სახელი",
      lastName: "გვარი",
      lastNamePh: "შეიყვანეთ გვარი",
      nationality: "მოქალაქეობა",
      residence: "ქვეყანა, სადაც ამჟამად ცხოვრობთ",
      phone: "ტელეფონის ნომერი",
      email: "ელ-ფოსტა",
      emailPh: "შეიყვანეთ ელ-ფოსტა",
      select: "აირჩიეთ",
      consent:
        "გთხოვთ, მომაწოდოთ ინფორმაცია და სიახლეები LBP — Legal & Business Partners-ის შესახებ, ღონისძიებების მოსაწვევები და პუბლიკაციები ელ-ფოსტით. დეტალური ინფორმაცია პერსონალური მონაცემების დამუშავების შესახებ იხილეთ ჩვენს კონფიდენციალურობის პოლიტიკაში, ",
      here: "აქ",
      close: "დახურვა",
      submit: "გაგზავნა",
      sending: "იგზავნება...",
      required: "ველის შევსება სავალდებულოა",
      invalidEmail: "შეიყვანეთ სწორი ელ-ფოსტა",
      invalidPhone: "შეიყვანეთ სწორი ტელეფონის ნომერი",
      error: "გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან ან მოგვწერეთ info@lbp.ge-ზე.",
      successTitle: "გმადლობთ!",
      successText: "თქვენი მოთხოვნა მიღებულია. ჩვენი იურისტი მალე დაგიკავშირდებათ.",
      salutations: ["ბატონი", "ქალბატონი", "დოქტორი", "პროფესორი"],
      practices: [
        "ადმინისტრაციული რეგულაციები",
        "კორპორატიული სამართალი",
        "კონკურენციის და მომხმარებელთა უფლებების დაცვის სამართალი",
        "სისხლის სამართალი",
        "ინვესტიციები და უძრავი ქონება",
        "ინტელექტუალური საკუთრება და პერსონალური მონაცემები",
        "შრომითი ურთიერთობები",
        "სასამართლო წარმომადგენლობა, არბიტრაჟი და მედიაცია",
        "მიგრაცია და ბანკები",
        "ნავთობი და გაზი",
        "პროექტების ფინანსირება",
        "რესტრუქტურიზაცია და გადახდისუუნარობა",
        "სპორტული სამართალი",
        "გადასახადები და კერძო კაპიტალი",
        "სხვა",
      ],
    },
  };
  var t = T[lang];

  // ISO 3166 code + international dialling code
  var COUNTRY_DATA =
    "AF93 AL355 DZ213 AD376 AO244 AG1 AR54 AM374 AU61 AT43 AZ994 BS1 BH973 BD880 BB1 BY375 BE32 BZ501 BJ229 " +
    "BT975 BO591 BA387 BW267 BR55 BN673 BG359 BF226 BI257 KH855 CM237 CA1 CV238 CF236 TD235 CL56 CN86 CO57 " +
    "KM269 CG242 CD243 CR506 CI225 HR385 CU53 CY357 CZ420 DK45 DJ253 DM1 DO1 EC593 EG20 SV503 GQ240 ER291 " +
    "EE372 SZ268 ET251 FJ679 FI358 FR33 GA241 GM220 GE995 DE49 GH233 GR30 GD1 GT502 GN224 GW245 GY592 HT509 " +
    "HN504 HK852 HU36 IS354 IN91 ID62 IR98 IQ964 IE353 IL972 IT39 JM1 JP81 JO962 KZ7 KE254 KI686 XK383 KW965 " +
    "KG996 LA856 LV371 LB961 LS266 LR231 LY218 LI423 LT370 LU352 MO853 MG261 MW265 MY60 MV960 ML223 MT356 " +
    "MH692 MR222 MU230 MX52 FM691 MD373 MC377 MN976 ME382 MA212 MZ258 MM95 NA264 NR674 NP977 NL31 NZ64 NI505 " +
    "NE227 NG234 KP850 MK389 NO47 OM968 PK92 PW680 PS970 PA507 PG675 PY595 PE51 PH63 PL48 PT351 PR1 QA974 " +
    "RO40 RU7 RW250 KN1 LC1 VC1 WS685 SM378 ST239 SA966 SN221 RS381 SC248 SL232 SG65 SK421 SI386 SB677 SO252 " +
    "ZA27 KR82 SS211 ES34 LK94 SD249 SR597 SE46 CH41 SY963 TW886 TJ992 TZ255 TH66 TL670 TG228 TO676 TT1 TN216 " +
    "TR90 TM993 TV688 UG256 UA380 AE971 GB44 US1 UY598 UZ998 VU678 VA39 VE58 VN84 YE967 ZM260 ZW263";

  var names;
  try {
    names = new Intl.DisplayNames([lang === "ka" ? "ka" : "en"], { type: "region" });
  } catch (e) {
    names = null;
  }

  var COUNTRIES = COUNTRY_DATA.split(" ")
    .map(function (s) {
      var code = s.slice(0, 2);
      var name = code;
      try {
        if (names) name = names.of(code) || code;
      } catch (e) {}
      if (code === "XK" && name === "XK") name = "Kosovo";
      return { code: code, dial: s.slice(2), name: name };
    })
    .sort(function (a, b) {
      return a.name.localeCompare(b.name, lang);
    });

  var BY_CODE = {};
  COUNTRIES.forEach(function (c) {
    BY_CODE[c.code] = c;
  });

  function flagUrl(code) {
    return "https://flagcdn.com/w40/" + code.toLowerCase() + ".png";
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch];
    });
  }

  function options(list, valueKey, labelKey) {
    return list
      .map(function (it) {
        var v = typeof it === "string" ? it : it[valueKey];
        var l = typeof it === "string" ? it : it[labelKey];
        return '<option value="' + esc(v) + '">' + esc(l) + "</option>";
      })
      .join("");
  }

  /* ---------------------------------------------------------------- styles */
  var css = [
    /* Right column, centred above the contact FAB (56px at right:28px/bottom:28px) */
    ".cb-float{position:fixed;right:30px;bottom:100px;z-index:850;transition:opacity .2s,visibility .2s}",
    "body.contact-fab-open .cb-float{opacity:0;visibility:hidden}",
    ".cb-trigger{box-sizing:border-box;display:inline-flex;flex-direction:row-reverse;align-items:center;height:52px;min-width:52px;",
    "padding:0 14px;border-radius:26px;overflow:hidden;white-space:nowrap;background:var(--color-primary,#0d1b2a);color:#fff;",
    "border:1px solid var(--color-accent,#b08d57);font-family:var(--font-body,Montserrat,sans-serif);font-size:.85rem;",
    "font-weight:600;letter-spacing:.03em;cursor:pointer;box-shadow:var(--shadow-md,0 4px 12px rgba(0,0,0,.2));",
    "transition:background .25s,box-shadow .25s}",
    ".cb-trigger svg{width:22px;height:22px;flex:none;color:var(--color-accent,#b08d57)}",
    ".cb-trigger span{max-width:0;opacity:0;margin-right:0;transition:max-width .35s ease,opacity .25s ease,margin-right .35s ease}",
    ".cb-trigger:hover,.cb-trigger:focus-visible{background:var(--color-primary-light,#1b2d44);box-shadow:var(--shadow-lg,0 8px 30px rgba(0,0,0,.25))}",
    ".cb-trigger:hover span,.cb-trigger:focus-visible span{max-width:240px;opacity:1;margin-right:10px;margin-left:6px}",
    "@media (max-width:850px){.cb-float{right:20px;bottom:80px}.cb-trigger{height:44px;min-width:44px;padding:0 10px}}",
    "@media (hover:none){.cb-trigger span{display:none}}",

    ".cb-overlay{position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.6);display:flex;justify-content:center;padding:28px 16px;",
    "align-items:flex-start;overflow-y:auto;opacity:0;visibility:hidden;transition:opacity .25s,visibility .25s}",
    ".cb-overlay.open{opacity:1;visibility:visible}",
    "body.cb-lock{overflow:hidden}",
    ".cb-modal{position:relative;background:#fff;color:#3a4651;width:100%;max-width:790px;margin:0 auto;",
    "padding:64px 100px 56px;box-shadow:0 0 40px rgba(0,0,0,.6);font-family:var(--font-body,Montserrat),sans-serif;",
    "transform:translateY(20px);transition:transform .3s}",
    ".cb-overlay.open .cb-modal{transform:none}",
    ".cb-x{position:absolute;top:32px;right:44px;width:28px;height:28px;background:none;border:0;cursor:pointer;padding:0;color:#3d4f5f}",
    ".cb-x:before,.cb-x:after{content:'';position:absolute;left:3px;top:13px;width:22px;height:2px;background:currentColor}",
    ".cb-x:before{transform:rotate(45deg)}.cb-x:after{transform:rotate(-45deg)}",
    ".cb-title{font-family:var(--font-heading,'Cormorant Garamond',serif);font-weight:500;font-size:2.1rem;color:#3d4f5f;margin:0 0 28px;line-height:1.1}",
    ".cb-intro{font-size:1rem;margin:0 0 28px;color:#3a4651}",
    ".cb-form{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:30px;row-gap:40px}",
    ".cb-full{grid-column:1/-1}",
    ".cb-field{display:flex;flex-direction:column;position:relative}",
    ".cb-field label{font-size:.76rem;font-weight:500;color:#3d4f5f;margin-bottom:6px}",
    ".cb-field label i{font-style:normal}",
    ".cb-field input,.cb-field select{width:100%;border:0;border-bottom:1px solid #b9bfc6;background:transparent;border-radius:0;",
    "font:inherit;font-size:.9rem;color:#3a4651;padding:2px 24px 6px 0;outline:none;-webkit-appearance:none;appearance:none;",
    "transition:border-color .2s}",
    ".cb-field input::placeholder{color:#8a939c}",
    ".cb-field select{cursor:pointer;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9'%3E%3Cpath d='M1 1l6 6 6-6' fill='none' stroke='%238a939c' stroke-width='1.6'/%3E%3C/svg%3E\");",
    "background-repeat:no-repeat;background-position:right 2px center}",
    ".cb-field select:invalid,.cb-field select.cb-empty{color:#8a939c}",
    ".cb-modal{color-scheme:light}",
    ".cb-field select option{background:#fff;color:#3a4651}",
    ".cb-field input:focus,.cb-field select:focus{border-bottom-color:#3d4f5f}",
    ".cb-field.cb-err input,.cb-field.cb-err select,.cb-field.cb-err .cb-phone{border-bottom-color:#c62828}",
    ".cb-msg{position:absolute;top:100%;left:0;margin-top:6px;font-size:.78rem;color:#c62828;display:none}",
    ".cb-field.cb-err .cb-msg{display:block}",
    ".cb-half{grid-column:1/-1;width:calc(50% - 15px)}",
    ".cb-field,.cb-field select,.cb-field input{min-width:0}",

    ".cb-phone{display:flex;align-items:center;border-bottom:1px solid #b9bfc6;transition:border-color .2s}",
    ".cb-phone:focus-within{border-bottom-color:#3d4f5f}",
    ".cb-phone .cb-cc{position:relative;display:flex;align-items:center;gap:6px;padding:0 8px 6px;flex:none}",
    ".cb-phone .cb-cc img{width:18px;height:12px;object-fit:cover;box-shadow:0 0 0 1px rgba(0,0,0,.08)}",
    ".cb-phone .cb-cc b{width:0;height:0;border-left:3.5px solid transparent;border-right:3.5px solid transparent;border-top:4px solid #3d4f5f}",
    ".cb-phone .cb-cc select{position:absolute;inset:0;opacity:0;cursor:pointer;border:0;padding:0;background:none}",
    ".cb-phone .cb-dial{font-size:.9rem;font-weight:500;color:#3a4651;padding:0 5px 6px 2px;flex:none}",
    ".cb-phone input{border-bottom:0!important;padding-left:0}",

    ".cb-consent{display:flex;gap:12px;align-items:flex-start;font-size:.8rem;line-height:1.4;letter-spacing:.02em;color:#3a4651;cursor:pointer}",
    ".cb-consent input{flex:none;width:14px;height:14px;margin:2px 0 0;accent-color:#3d4f5f;cursor:pointer}",
    ".cb-consent a{color:inherit;text-decoration:underline}",
    ".cb-actions{display:flex;justify-content:space-between;gap:16px;margin-top:-4px}",
    ".cb-btn{min-width:196px;height:44px;font-family:var(--font-body,Montserrat),sans-serif;font-size:.74rem;font-weight:700;",
    "letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:background .2s,color .2s,opacity .2s}",
    ".cb-btn-close{background:#fff;color:#3d4f5f;border:1px solid #3d4f5f}",
    ".cb-btn-close:hover{background:#f2f4f6}",
    ".cb-btn-submit{background:#3d4f5f;color:#fff;border:1px solid #3d4f5f}",
    ".cb-btn-submit:hover{background:#2c3b48}",
    ".cb-btn-submit:disabled{opacity:.6;cursor:default}",
    ".cb-error{color:#c62828;font-size:.9rem;margin:0;display:none}",
    ".cb-note{font-size:.95rem;letter-spacing:.02em;color:#6b747c;margin:0}",
    ".cb-success{display:none;padding:40px 0}",
    ".cb-success h3{font-family:var(--font-heading,'Cormorant Garamond',serif);font-weight:500;font-size:1.8rem;color:#3d4f5f;margin:0 0 12px}",
    ".cb-success p{font-size:1.05rem;margin:0 0 32px}",
    ".cb-modal.cb-done .cb-form,.cb-modal.cb-done .cb-intro{display:none}",
    ".cb-modal.cb-done .cb-success{display:block}",

    "@media (max-width:900px){.cb-modal{padding:64px 40px 48px}.cb-x{top:24px;right:24px}}",
    "@media (max-width:600px){.cb-overlay{padding:0}.cb-modal{padding:64px 20px 40px;min-height:100%}.cb-title{font-size:1.8rem;margin-bottom:20px}",
    ".cb-form{grid-template-columns:minmax(0,1fr);row-gap:32px}.cb-half{width:auto}",
    ".cb-actions{flex-direction:column-reverse}.cb-btn{width:100%;min-width:0}}",

    "[data-theme='dark'] .cb-modal{background:#14222f;color:#d6dbe0}",
    "[data-theme='dark'] .cb-title,[data-theme='dark'] .cb-success h3,[data-theme='dark'] .cb-x,[data-theme='dark'] .cb-field label{color:#eae8e4}",
    "[data-theme='dark'] .cb-intro,[data-theme='dark'] .cb-consent,[data-theme='dark'] .cb-field input,[data-theme='dark'] .cb-field select,[data-theme='dark'] .cb-phone .cb-dial{color:#d6dbe0}",
    "[data-theme='dark'] .cb-modal{color-scheme:dark}",
    "[data-theme='dark'] .cb-field select option{background:#14222f;color:#eae8e4}",
    "[data-theme='dark'] .cb-field input,[data-theme='dark'] .cb-field select,[data-theme='dark'] .cb-phone{border-bottom-color:#4a5a6a}",
    "[data-theme='dark'] .cb-phone .cb-cc b{border-top-color:#d6dbe0}",
    "[data-theme='dark'] .cb-btn-close{background:transparent;color:#eae8e4;border-color:#eae8e4}",
    "[data-theme='dark'] .cb-btn-submit{background:#c9a76c;border-color:#c9a76c;color:#0a1628}",
    "[data-theme='dark'] .cb-note{color:#9aa4ad}",
  ].join("");

  var style = document.createElement("style");
  style.id = "callback-styles";
  style.textContent = css;
  document.head.appendChild(style);

  /* ---------------------------------------------------------------- markup */
  var req = "<i>*</i>";
  var countryOpts = options(COUNTRIES, "code", "name");
  var phoneOpts = COUNTRIES.map(function (c) {
    return '<option value="' + c.code + '">' + esc(c.name) + " (+" + c.dial + ")</option>";
  }).join("");

  function selectField(name, label, opts, extraCls) {
    return (
      '<div class="cb-field' + (extraCls ? " " + extraCls : "") + '">' +
        '<label for="cb-' + name + '">' + label + req + "</label>" +
        '<select id="cb-' + name + '" name="' + name + '" required class="cb-empty">' +
          '<option value="" disabled selected>' + t.select + "</option>" + opts +
        "</select>" +
        '<span class="cb-msg">' + t.required + "</span>" +
      "</div>"
    );
  }

  function inputField(name, label, type, ph, auto) {
    return (
      '<div class="cb-field">' +
        '<label for="cb-' + name + '">' + label + req + "</label>" +
        '<input id="cb-' + name + '" name="' + name + '" type="' + type + '" placeholder="' + ph + '" autocomplete="' + auto + '" required />' +
        '<span class="cb-msg">' + t.required + "</span>" +
      "</div>"
    );
  }

  var overlay = document.createElement("div");
  overlay.className = "cb-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML =
    '<div class="cb-modal" role="dialog" aria-modal="true" aria-labelledby="cb-title">' +
      '<button type="button" class="cb-x" data-cb-close aria-label="' + t.close + '"></button>' +
      '<h2 class="cb-title" id="cb-title">' + t.title + "</h2>" +
      '<p class="cb-intro">' + t.intro + "</p>" +
      '<form class="cb-form" novalidate>' +
        '<input type="text" name="_honey" tabindex="-1" autocomplete="off" style="display:none" />' +
        selectField("practice", t.practice, options(t.practices), "cb-full") +
        selectField("salutation", t.salutation, options(t.salutations), "cb-half") +
        inputField("firstName", t.firstName, "text", t.firstNamePh, "given-name") +
        inputField("lastName", t.lastName, "text", t.lastNamePh, "family-name") +
        selectField("nationality", t.nationality, countryOpts) +
        selectField("residence", t.residence, countryOpts) +
        '<div class="cb-field" data-phone>' +
          '<label for="cb-phone">' + t.phone + req + "</label>" +
          '<div class="cb-phone">' +
            '<span class="cb-cc"><img alt="" /><b></b>' +
              '<select name="phoneCountry" aria-label="' + t.phone + '">' + phoneOpts + "</select>" +
            "</span>" +
            '<span class="cb-dial"></span>' +
            '<input id="cb-phone" name="phone" type="tel" inputmode="tel" placeholder="555 12 34 56" autocomplete="tel-national" required />' +
          "</div>" +
          '<span class="cb-msg">' + t.required + "</span>" +
        "</div>" +
        '<div class="cb-field">' +
          '<label for="cb-email">' + t.email + req + "</label>" +
          '<input id="cb-email" name="email" type="email" placeholder="' + t.emailPh + '" autocomplete="email" required />' +
          '<span class="cb-msg">' + t.required + "</span>" +
        "</div>" +
        '<label class="cb-consent cb-full">' +
          '<input type="checkbox" name="newsletter" />' +
          "<span>" + t.consent + '<a href="/' + lang + '/privacy-policy/" target="_blank">' + t.here + "</a>.</span>" +
        "</label>" +
        '<div class="cb-actions cb-full">' +
          '<button type="button" class="cb-btn cb-btn-close" data-cb-close>' + t.close + "</button>" +
          '<button type="submit" class="cb-btn cb-btn-submit">' + t.submit + "</button>" +
        "</div>" +
        '<p class="cb-error cb-full" role="alert"></p>' +
      "</form>" +
      '<div class="cb-success" role="status">' +
        "<h3>" + t.successTitle + "</h3>" +
        "<p>" + t.successText + "</p>" +
        '<button type="button" class="cb-btn cb-btn-close" data-cb-close>' + t.close + "</button>" +
      "</div>" +
    "</div>";

  var trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "cb-trigger";
  trigger.setAttribute("aria-label", t.trigger);
  trigger.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/>' +
      '<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>' +
    "</svg><span>" + t.trigger + "</span>";

  function mount() {
    document.body.appendChild(overlay);
    var wrap = document.createElement("div");
    wrap.className = "cb-float";
    wrap.appendChild(trigger);
    document.body.appendChild(wrap);
  }
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);

  /* ---------------------------------------------------------------- behaviour */
  var modal = overlay.querySelector(".cb-modal");
  var form = overlay.querySelector(".cb-form");
  var submitBtn = overlay.querySelector(".cb-btn-submit");
  var errBox = overlay.querySelector(".cb-error");
  var ccSelect = form.phoneCountry;
  var flagImg = overlay.querySelector(".cb-cc img");
  var dialEl = overlay.querySelector(".cb-dial");
  var phoneTouched = false;
  var lastFocus = null;

  function setPhoneCountry(code) {
    var c = BY_CODE[code] || BY_CODE.GE;
    ccSelect.value = c.code;
    flagImg.src = flagUrl(c.code);
    dialEl.textContent = "+" + c.dial;
  }
  setPhoneCountry("GE");

  ccSelect.addEventListener("change", function () {
    phoneTouched = true;
    setPhoneCountry(ccSelect.value);
  });

  // Placeholder colour for selects + follow residence country for the dial code
  form.querySelectorAll(".cb-field select").forEach(function (sel) {
    sel.addEventListener("change", function () {
      sel.classList.toggle("cb-empty", !sel.value);
      clearErr(sel);
      if (sel.name === "residence" && !phoneTouched && !form.phone.value) setPhoneCountry(sel.value);
    });
  });
  form.querySelectorAll("input").forEach(function (inp) {
    inp.addEventListener("input", function () {
      clearErr(inp);
    });
  });

  function fieldOf(el) {
    return el.closest(".cb-field");
  }
  function clearErr(el) {
    var f = fieldOf(el);
    if (f) f.classList.remove("cb-err");
  }
  function setErr(el, msg) {
    var f = fieldOf(el);
    if (!f) return;
    f.classList.add("cb-err");
    f.querySelector(".cb-msg").textContent = msg || t.required;
  }

  function validate() {
    var ok = true;
    var first = null;
    ["practice", "salutation", "firstName", "lastName", "nationality", "residence", "phone", "email"].forEach(function (n) {
      var el = form[n];
      var v = (el.value || "").trim();
      var msg = null;
      if (!v) msg = t.required;
      else if (n === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg = t.invalidEmail;
      else if (n === "phone" && v.replace(/\D/g, "").length < 5) msg = t.invalidPhone;
      if (msg) {
        setErr(el, msg);
        ok = false;
        if (!first) first = el;
      } else clearErr(el);
    });
    if (first) first.focus();
    return ok;
  }

  function open() {
    lastFocus = document.activeElement;
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("cb-lock");
    overlay.scrollTop = 0;
    setTimeout(function () {
      form.practice.focus();
    }, 50);
  }

  function close() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("cb-lock");
    if (modal.classList.contains("cb-done")) {
      setTimeout(reset, 300);
    }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function reset() {
    form.reset();
    phoneTouched = false;
    setPhoneCountry("GE");
    form.querySelectorAll(".cb-field select").forEach(function (s) {
      s.classList.add("cb-empty");
    });
    form.querySelectorAll(".cb-err").forEach(function (f) {
      f.classList.remove("cb-err");
    });
    modal.classList.remove("cb-done");
    errBox.style.display = "none";
  }

  window.openCallback = open;

  trigger.addEventListener("click", open);
  document.addEventListener("click", function (e) {
    var tgt = e.target.closest && e.target.closest("[data-callback]");
    if (tgt) {
      e.preventDefault();
      open();
    }
  });
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay || e.target.closest("[data-cb-close]")) close();
  });
  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "Tab") {
      var f = modal.querySelectorAll("button, input:not([type=hidden]):not([name=_honey]), select, a[href]");
      var vis = Array.prototype.filter.call(f, function (el) {
        return el.offsetParent !== null;
      });
      if (!vis.length) return;
      var firstEl = vis[0];
      var lastEl = vis[vis.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  });

  function nameOf(code) {
    return (BY_CODE[code] && BY_CODE[code].name) || code;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errBox.style.display = "none";
    if (form._honey.value) return;
    if (!validate()) return;

    submitBtn.disabled = true;
    submitBtn.textContent = t.sending;

    var cc = BY_CODE[ccSelect.value];
    var phone = "+" + cc.dial + " " + form.phone.value.trim();
    var fullName = form.salutation.value + " " + form.firstName.value.trim() + " " + form.lastName.value.trim();

    var payload = {
      access_key: WEB3FORMS_KEY,
      from_name: "LBP.GE Website",
      subject: "New callback request — LBP.GE",
      name: fullName,
      email: form.email.value.trim(),
      phone: phone,
      practice_area: form.practice.value,
      nationality: nameOf(form.nationality.value),
      country_of_residence: nameOf(form.residence.value),
      newsletter_opt_in: form.newsletter.checked ? "Yes" : "No",
      language: lang.toUpperCase(),
      page: window.location.href,
    };

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        if (!data.success) throw new Error(data.message || "Submit failed");
        modal.classList.add("cb-done");
        overlay.scrollTop = 0;
      })
      .catch(function (err) {
        errBox.textContent = t.error;
        errBox.style.display = "block";
        console.error("Callback form error:", err);
      })
      .then(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = t.submit;
      });
  });
})();
