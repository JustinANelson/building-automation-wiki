/** Site script: header search, table filters, click-to-copy part numbers. Plain ES5, no dependencies. */
export const CLIENT_JS = `
(function () {
  var rel = document.body.getAttribute('data-rel') || '';
  var index = window.BASWIKI_INDEX || [];
  var input = document.getElementById('q');
  var box = document.getElementById('results');
  var active = -1;
  var shown = [];

  function norm(s) { return String(s).toLowerCase().replace(/[^a-z0-9]/g, ''); }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function score(e, q, nq) {
    var best = 0, i;
    for (i = 0; i < e.p.length; i++) {
      var pn = norm(e.p[i]);
      if (pn === nq) best = Math.max(best, 100);
      else if (pn.indexOf(nq) === 0) best = Math.max(best, 80);
      else if (nq.length > 2 && pn.indexOf(nq) > -1) best = Math.max(best, 60);
    }
    var t = e.t.toLowerCase();
    if (t.indexOf(q) === 0) best = Math.max(best, 55);
    var words = q.split(/\\s+/), all = true;
    for (i = 0; i < words.length; i++) if (t.indexOf(words[i]) < 0 && e.m.toLowerCase().indexOf(words[i]) < 0) all = false;
    if (all) best = Math.max(best, 40);
    if (e.s.toLowerCase().indexOf(q) > -1) best = Math.max(best, 10);
    return best;
  }

  function render(items) {
    shown = items;
    active = -1;
    if (!items.length) { box.hidden = true; box.innerHTML = ''; return; }
    box.innerHTML = items.map(function (e, i) {
      var pn = e.p.length ? '<span class="pn">' + esc(e.p[0]) + (e.p.length > 1 ? ' +' + (e.p.length - 1) : '') + '</span> ' : '';
      return '<li data-i="' + i + '"><a href="' + rel + e.u + '">' + pn + esc(e.t) + '<small>' + esc(e.k) + (e.m ? ' - ' + esc(e.m) : '') + '</small></a></li>';
    }).join('');
    box.hidden = false;
  }

  function search() {
    var q = input.value.trim().toLowerCase();
    var nq = norm(q);
    if (!nq) { render([]); return; }
    var out = [];
    for (var i = 0; i < index.length; i++) {
      var s = score(index[i], q, nq);
      if (s > 0) out.push({ s: s, e: index[i] });
    }
    out.sort(function (a, b) { return b.s - a.s || a.e.t.localeCompare(b.e.t); });
    render(out.slice(0, 8).map(function (x) { return x.e; }));
  }

  function mark() {
    var lis = box.children;
    for (var i = 0; i < lis.length; i++) lis[i].className = i === active ? 'on' : '';
  }

  if (input && box) {
    input.addEventListener('input', search);
    input.addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowDown') { active = Math.min(active + 1, shown.length - 1); mark(); ev.preventDefault(); }
      else if (ev.key === 'ArrowUp') { active = Math.max(active - 1, 0); mark(); ev.preventDefault(); }
      else if (ev.key === 'Enter' && shown.length) { location.href = rel + shown[active < 0 ? 0 : active].u; }
      else if (ev.key === 'Escape') { render([]); input.blur(); }
    });
    document.addEventListener('click', function (ev) { if (!box.contains(ev.target) && ev.target !== input) render([]); });
    document.addEventListener('keydown', function (ev) {
      var tag = (document.activeElement && document.activeElement.tagName) || '';
      if (ev.key === '/' && tag !== 'INPUT') { input.focus(); ev.preventDefault(); }
    });
  }

  // Table filters: <input data-filter="tableId">
  var filters = document.querySelectorAll('input[data-filter]');
  Array.prototype.forEach.call(filters, function (f) {
    var table = document.getElementById(f.getAttribute('data-filter'));
    if (!table) return;
    f.addEventListener('input', function () {
      var v = norm(f.value), raw = f.value.trim().toLowerCase();
      Array.prototype.forEach.call(table.tBodies[0].rows, function (r) {
        var text = r.textContent.toLowerCase();
        r.style.display = !raw || text.indexOf(raw) > -1 || norm(text).indexOf(v) > -1 ? '' : 'none';
      });
    });
  });

  // Click a part number to copy it.
  document.addEventListener('click', function (ev) {
    var el = ev.target;
    if (!el || !el.classList || !el.classList.contains('pn') || el.tagName === 'A') return;
    var text = el.getAttribute('data-pn') || el.textContent;
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(function () {
      el.classList.add('copied');
      setTimeout(function () { el.classList.remove('copied'); }, 1200);
    });
  });
})();
`;
