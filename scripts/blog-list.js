/**
 * Blog listing: search, category filter and pagination over window.BLOG_POSTS.
 * State lives in the query string (?q=&cat=&page=) so results stay shareable.
 */
(function () {
  var list = document.getElementById("blogList");
  if (!list || !window.BLOG_POSTS) return;

  var PER_PAGE = 8;
  var lang = location.pathname.indexOf("/ka") === 0 ? "ka" : "en";
  var base = "/" + lang + "/blog/";

  var T = {
    ka: {
      all: "ყველა",
      searchLabel: "ძებნა პუბლიკაციებში",
      clear: "გასუფთავება",
      min: "წთ კითხვა",
      more: "ვრცლად",
      prev: "წინა",
      next: "შემდეგი",
      emptyTitle: "შედეგი ვერ მოიძებნა",
      emptyText: "სცადეთ სხვა საკვანძო სიტყვა ან აირჩიეთ სხვა კატეგორია.",
      reset: "ფილტრის გასუფთავება",
      countOne: "ნაპოვნია 1 პუბლიკაცია",
      countMany: "ნაპოვნია {n} პუბლიკაცია"
    },
    en: {
      all: "All",
      searchLabel: "Search publications",
      clear: "Clear",
      min: "min read",
      more: "Read more",
      prev: "Prev",
      next: "Next",
      emptyTitle: "Nothing found",
      emptyText: "Try a different keyword or pick another category.",
      reset: "Clear filters",
      countOne: "1 publication found",
      countMany: "{n} publications found"
    }
  }[lang];

  var MONTHS = {
    ka: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
         "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
    en: ["January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"]
  }[lang];

  function fmtDate(iso) {
    var p = iso.split("-");
    var month = MONTHS[parseInt(p[1], 10) - 1];
    return lang === "ka"
      ? parseInt(p[2], 10) + " " + month + ", " + p[0]
      : parseInt(p[2], 10) + " " + month + " " + p[0];
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function catLabel(key) {
    for (var i = 0; i < window.BLOG_CATEGORIES.length; i++) {
      if (window.BLOG_CATEGORIES[i].key === key) return window.BLOG_CATEGORIES[i][lang];
    }
    return key;
  }

  /* ---------- state ---------- */
  var params = new URLSearchParams(location.search);
  var state = {
    q: params.get("q") || "",
    cat: params.get("cat") || "all",
    page: Math.max(1, parseInt(params.get("page"), 10) || 1)
  };

  function pushState() {
    var q = new URLSearchParams();
    if (state.q) q.set("q", state.q);
    if (state.cat !== "all") q.set("cat", state.cat);
    if (state.page > 1) q.set("page", String(state.page));
    var s = q.toString();
    history.replaceState(null, "", location.pathname + (s ? "?" + s : ""));
  }

  /* ---------- filtering ---------- */
  function haystack(p) {
    var t = p[lang];
    return (t.title + " " + t.subtitle + " " + t.excerpt + " " + t.author + " " +
            catLabel(p.cat)).toLowerCase();
  }

  function filtered() {
    var terms = state.q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return window.BLOG_POSTS.filter(function (p) {
      if (state.cat !== "all" && p.cat !== state.cat) return false;
      var h = haystack(p);
      for (var i = 0; i < terms.length; i++) {
        if (h.indexOf(terms[i]) === -1) return false;
      }
      return true;
    });
  }

  /* ---------- markup ---------- */
  function rowHTML(p) {
    return '<a class="post-row" href="' + base + p.slug + '/">' +
      '<div class="post-row-media">' +
        '<img src="' + p.card + '" alt="' + esc(p[lang].title) + '" loading="lazy" />' +
      "</div>" +
      '<div class="post-row-body">' +
        '<div class="post-kicker">' +
          "<span>" + esc(catLabel(p.cat)) + "</span>" +
          '<span class="dot">·</span>' +
          '<time class="kicker-muted" datetime="' + p.date + '">' + fmtDate(p.date) + "</time>" +
          '<span class="dot">·</span>' +
          '<span class="kicker-muted">' + p.read + " " + T.min + "</span>" +
        "</div>" +
        '<h2 class="post-row-title">' + esc(p[lang].title) + "</h2>" +
        '<p class="post-row-excerpt">' + esc(p[lang].excerpt) + "</p>" +
        '<div class="post-row-foot">' +
          // posts published without a byline simply omit it
          (p[lang].author
            ? '<span class="post-author">' + esc(p[lang].author) + "</span>" : "") +
          '<span class="post-more">' + T.more + "</span>" +
        "</div>" +
      "</div></a>";
  }

  /* ---------- render ---------- */
  var pagerBox = document.getElementById("blogPagination");
  var countBox = document.getElementById("blogCount");
  var filtersBox = document.getElementById("blogFilters");
  var searchWrap = document.getElementById("blogSearch");
  var input = document.getElementById("blogSearchInput");
  var clearBtn = document.getElementById("blogSearchClear");

  function renderFilters() {
    var html = '<button class="blog-chip' + (state.cat === "all" ? " active" : "") +
      '" data-cat="all">' + T.all + "</button>";
    window.BLOG_CATEGORIES.forEach(function (c) {
      var n = window.BLOG_POSTS.filter(function (p) { return p.cat === c.key; }).length;
      if (!n) return;
      html += '<button class="blog-chip' + (state.cat === c.key ? " active" : "") +
        '" data-cat="' + c.key + '">' + esc(c[lang]) + "</button>";
    });
    filtersBox.innerHTML = html;
  }

  function renderPager(pages) {
    if (pages <= 1) { pagerBox.innerHTML = ""; return; }
    var html = '<button data-page="' + (state.page - 1) + '"' +
      (state.page === 1 ? " disabled" : "") + ">‹ " + T.prev + "</button>";
    var shown = [];
    for (var i = 1; i <= pages; i++) {
      if (i === 1 || i === pages || Math.abs(i - state.page) <= 1) shown.push(i);
    }
    var last = 0;
    shown.forEach(function (i) {
      if (last && i - last > 1) html += '<span class="ellipsis">…</span>';
      html += '<button data-page="' + i + '"' + (i === state.page ? ' class="active"' : "") +
        ">" + i + "</button>";
      last = i;
    });
    html += '<button data-page="' + (state.page + 1) + '"' +
      (state.page === pages ? " disabled" : "") + ">" + T.next + " ›</button>";
    pagerBox.innerHTML = html;
  }

  function render(scroll) {
    var items = filtered();
    var pristine = !state.q.trim() && state.cat === "all";

    var pages = Math.max(1, Math.ceil(items.length / PER_PAGE));
    if (state.page > pages) state.page = pages;
    var slice = items.slice((state.page - 1) * PER_PAGE, state.page * PER_PAGE);

    countBox.textContent = pristine ? "" :
      (items.length === 1 ? T.countOne : T.countMany.replace("{n}", items.length));

    if (!items.length) {
      list.innerHTML = '<div class="blog-empty"><strong>' + T.emptyTitle + "</strong>" +
        "<p>" + T.emptyText + "</p>" +
        '<p><button class="blog-chip active" data-reset="1">' + T.reset + "</button></p></div>";
      pagerBox.innerHTML = "";
    } else {
      list.innerHTML = slice.map(rowHTML).join("");
      renderPager(pages);
    }

    renderFilters();
    if (searchWrap) searchWrap.classList.toggle("has-value", !!state.q);
    pushState();

    if (scroll) {
      var top = document.querySelector(".blog-toolbar");
      if (top) window.scrollTo({ top: top.offsetTop - 110, behavior: "smooth" });
    }
  }

  /* ---------- events ---------- */
  var timer;
  if (input) {
    input.value = state.q;
    input.setAttribute("aria-label", T.searchLabel);
    input.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        state.q = input.value;
        state.page = 1;
        render(false);
      }, 180);
    });
  }

  if (clearBtn) {
    clearBtn.setAttribute("aria-label", T.clear);
    clearBtn.addEventListener("click", function () {
      input.value = "";
      state.q = "";
      state.page = 1;
      render(false);
      input.focus();
    });
  }

  filtersBox.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-cat]");
    if (!btn) return;
    state.cat = btn.getAttribute("data-cat");
    state.page = 1;
    render(true);
  });

  pagerBox.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-page]");
    if (!btn || btn.disabled) return;
    state.page = parseInt(btn.getAttribute("data-page"), 10);
    render(true);
  });

  list.addEventListener("click", function (e) {
    if (!e.target.closest("[data-reset]")) return;
    state.q = "";
    state.cat = "all";
    state.page = 1;
    if (input) input.value = "";
    render(true);
  });

  render(false);
})();
