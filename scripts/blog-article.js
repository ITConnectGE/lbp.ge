/**
 * Article page extras: reading progress bar, related cards and prev/next links.
 * Everything is derived from window.BLOG_POSTS so a new post needs no page edits.
 */
(function () {
  var article = document.querySelector(".article[data-slug]");
  if (!article) return;

  var lang = location.pathname.indexOf("/ka") === 0 ? "ka" : "en";
  var base = "/" + lang + "/blog/";

  var T = {
    ka: {
      related: "მსგავსი პუბლიკაციები",
      all: "ყველა პუბლიკაცია",
      prev: "წინა სტატია",
      next: "შემდეგი სტატია",
      min: "წთ"
    },
    en: {
      related: "Related publications",
      all: "All publications",
      prev: "Previous article",
      next: "Next article",
      min: "min read"
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

  // escapes quotes too, so the same helper is safe in attribute position
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* ---------- reading progress ---------- */
  var bar = document.getElementById("readingProgress");
  if (bar) {
    var tick = function () {
      var rect = article.getBoundingClientRect();
      var total = rect.height - window.innerHeight;
      var done = total > 0 ? (-rect.top) / total : 0;
      bar.style.width = Math.min(100, Math.max(0, done * 100)) + "%";
    };
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    tick();
  }

  var posts = window.BLOG_POSTS;
  if (!posts) return;

  var slug = article.getAttribute("data-slug");
  var idx = -1;
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].slug === slug) { idx = i; break; }
  }
  if (idx === -1) return;
  var current = posts[idx];

  function catLabel(key) {
    for (var i = 0; i < window.BLOG_CATEGORIES.length; i++) {
      if (window.BLOG_CATEGORIES[i].key === key) return window.BLOG_CATEGORIES[i][lang];
    }
    return key;
  }

  /* ---------- related: same category first, then nearest by date ---------- */
  var relatedBox = document.getElementById("relatedPosts");
  if (relatedBox) {
    var others = posts.filter(function (p) { return p.slug !== slug; });
    var sameCat = others.filter(function (p) { return p.cat === current.cat; });
    var rest = others.filter(function (p) { return p.cat !== current.cat; });
    var picks = sameCat.concat(rest).slice(0, 3);

    relatedBox.innerHTML =
      '<div class="related-head"><h2>' + T.related + "</h2>" +
      '<a href="' + esc(base) + '">' + T.all + "</a></div>" +
      '<div class="related-grid">' + picks.map(function (p) {
        return '<a class="post-card" href="' + esc(base + p.slug) + '/">' +
          '<div class="post-card-media">' +
            '<img src="' + esc(p.card) + '" alt="' + esc(p[lang].title) + '" loading="lazy" />' +
            '<span class="post-badge">' + esc(catLabel(p.cat)) + "</span>" +
          "</div>" +
          '<div class="post-card-body"><h3>' + esc(p[lang].title) + "</h3>" +
          '<p class="post-card-excerpt">' + esc(p[lang].excerpt) + "</p>" +
          '<div class="post-meta">' +
          // posts published without a byline simply omit it
          (p[lang].author
            ? '<span class="post-author">' + esc(p[lang].author) + "</span>" +
              '<span class="dot">·</span>' : "") +
          '<time datetime="' + esc(p.date) + '">' + esc(fmtDate(p.date)) + "</time>" +
          '<span class="dot">·</span><span>' + esc(p.read) + " " + T.min + "</span></div>" +
          "</div></a>";
      }).join("") + "</div>";
  }

  /* ---------- prev / next ---------- */
  var navBox = document.getElementById("articleNav");
  if (navBox) {
    var newer = posts[idx - 1];
    var older = posts[idx + 1];
    var html = "";
    if (newer) {
      html += '<a class="prev" href="' + esc(base + newer.slug) + '/">' +
        '<span class="article-nav-label">‹ ' + T.prev + "</span>" +
        '<span class="article-nav-title">' + esc(newer[lang].title) + "</span></a>";
    }
    if (older) {
      html += '<a class="next" href="' + esc(base + older.slug) + '/">' +
        '<span class="article-nav-label">' + T.next + " ›</span>" +
        '<span class="article-nav-title">' + esc(older[lang].title) + "</span></a>";
    }
    navBox.innerHTML = html;
    if (!newer || !older) navBox.style.gridTemplateColumns = "1fr";
  }
})();
