// Light / dark mode toggle. The saved choice is applied early by a tiny inline
// script in <head>; this file wires up the button.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function current() {
    var set = root.getAttribute('data-theme');
    if (set === 'light' || set === 'dark') return set;
    return mq && mq.matches ? 'dark' : 'light';
  }
  function sync() {
    var mode = current();
    btn.setAttribute('data-mode', mode);
    btn.setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('title', mode === 'dark' ? 'Light mode' : 'Dark mode');
  }
  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });
  if (mq && mq.addEventListener) mq.addEventListener('change', sync);
  sync();
})();
