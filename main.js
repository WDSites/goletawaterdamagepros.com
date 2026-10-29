(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav-menu');
  if (!btn || !nav) { return; }
  function setOpen(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
  }
  btn.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); } });
}());
