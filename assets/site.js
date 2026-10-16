/* Hewitt Storage – site script (no build step, no libraries) */
(function () {
  'use strict';

  /* ---- Mobile menu ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---- Storage calculator iframe: auto-height ---- */
  var calc = document.getElementById('hewitt-calc');
  if (calc) {
    window.addEventListener('message', function (e) {
      if (e.source === calc.contentWindow && e.data && e.data.type === 'hewitt-calc-height') {
        calc.style.height = (e.data.height + 2) + 'px';
      }
    });
  }


  /* ---- Lazy iframes (maps + calculator): load when near viewport ---- */
  function hydrateLazyFrames() {
    var frames = document.querySelectorAll('iframe[data-src]');
    if (!frames.length) return;
    function load(f) {
      if (!f.getAttribute('data-src')) return;
      f.src = f.getAttribute('data-src');
      f.removeAttribute('data-src');
    }
    if (!('IntersectionObserver' in window)) {
      frames.forEach(load);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { load(en.target); io.unobserve(en.target); }
      });
    }, { rootMargin: '200px 0px' });
    frames.forEach(function (f) { io.observe(f); });
  }
  hydrateLazyFrames();

  /* ---- Year in footer ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Reservation / enquiry form ---- */
  var form = document.getElementById('reserve-form');
  if (!form) return;

  var EMAIL_TO = form.getAttribute('data-mailto') || 'andrew@hewittstorage.co.uk';
  var status = document.getElementById('form-status');
  var LABELS = { ground: 'Ground level 20ft', upstairs: 'Upper level 20ft', '10ft': '10ft container' };

  // Pre-fill from the storage calculator (reserve.htm?unit=...&calc=...)
  try {
    var q = new URLSearchParams(location.search);
    var unit = q.get('unit');
    if (unit) {
      var r = form.querySelector('input[name="unit_type"][value="' + unit.replace(/[^a-z0-9]/gi, '') + '"]');
      if (r) r.checked = true;
    }
    var c = q.get('calc');
    if (c && form.notes && !form.notes.value) form.notes.value = c.slice(0, 900);
  } catch (e) {}

  function field(el) { return el.closest('.field'); }
  function setErr(name, msg) {
    var el = form.querySelector('[name="' + name + '"]');
    var f = el && field(el);
    if (!f) return;
    f.classList.toggle('invalid', !!msg);
    var e = f.querySelector('.err');
    if (e) e.textContent = msg || '';
  }
  function val(name) {
    var els = form.querySelectorAll('[name="' + name + '"]');
    if (!els.length) return '';
    if (els[0].type === 'radio') { for (var i = 0; i < els.length; i++) if (els[i].checked) return els[i].value; return ''; }
    return (els[0].value || '').trim();
  }

  function validate() {
    var ok = true, first = null;
    function bad(name, msg) { setErr(name, msg); if (ok) first = name; ok = false; }
    ['name', 'phone', 'email', 'customer_type', 'unit_type', 'timing'].forEach(function (n) { setErr(n, ''); });

    if (val('name').length < 2) bad('name', 'Please enter your name.');
    var phone = val('phone').replace(/[\s()-]/g, '');
    if (!phone) bad('phone', 'Please enter a phone number so we can call you back.');
    else if (!/^(\+44|0044|0)\d{9,10}$/.test(phone)) bad('phone', 'Please enter a UK phone number, e.g. 07700 900123 or 01695 681000.');
    var email = val('email');
    if (!email) bad('email', 'Please enter your email address.');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) bad('email', 'Please check your email address.');
    if (!val('customer_type')) bad('customer_type', 'Please choose business or personal.');
    if (!val('unit_type')) bad('unit_type', 'Please choose a unit type.');
    if (!val('timing')) bad('timing', 'Please tell us roughly when you need it.');

    if (!ok && first) {
      var el = form.querySelector('[name="' + first + '"]');
      if (el) { el.focus({ preventScroll: true }); field(el).scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    }
    return ok;
  }

  function summary() {
    var timing = { now: 'Now / as soon as possible', '1-2m': 'In 1–2 months', later: 'Later (more than 2 months)' };
    return [
      'Name: ' + val('name'),
      'Phone: ' + val('phone'),
      'Email: ' + val('email'),
      'Business or personal: ' + (val('customer_type') === 'business' ? 'Business' : 'Personal') + (val('company') ? ' (' + val('company') + ')' : ''),
      'Unit wanted: ' + (LABELS[val('unit_type')] || val('unit_type')),
      'How soon: ' + (timing[val('timing')] || val('timing')),
      'Estimated length of stay: ' + (val('stay') || 'not given'),
      '',
      'Notes:',
      val('notes') || '(none)'
    ].join('\n');
  }

  function show(kind, html) {
    status.className = 'form-status show ' + kind;
    status.innerHTML = html;
    status.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function mailtoFallback() {
    var subject = 'Storage reservation enquiry – ' + (LABELS[val('unit_type')] || 'unit') + ' – ' + val('name');
    var body = 'Hello,\n\nPlease see my storage enquiry from the website:\n\n' + summary() + '\n\nThanks';
    window.location.href = 'mailto:' + EMAIL_TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    show('ok', 'Your email app should now open with your enquiry filled in – just press <b>Send</b>. ' +
      'If nothing opened, please call <a href="tel:+441695681000">01695 681000</a> or email ' +
      '<a href="mailto:' + EMAIL_TO + '">' + EMAIL_TO + '</a>.');
  }

  form.addEventListener('input', function (e) {
    var f = field(e.target);
    if (f && f.classList.contains('invalid')) { f.classList.remove('invalid'); }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.querySelector('.hp input') && form.querySelector('.hp input').value) return; // spam trap
    if (!validate()) { show('bad', 'Please check the highlighted fields.'); return; }

    var endpoint = (form.getAttribute('data-endpoint') || '').trim();
    if (!endpoint) { mailtoFallback(); return; }

    var btn = form.querySelector('button[type=submit]');
    btn.disabled = true; btn.textContent = 'Sending…';
    var data = new FormData(form);
    data.append('_subject', 'Storage reservation enquiry – ' + (LABELS[val('unit_type')] || '') + ' – ' + val('name'));
    data.append('summary', summary());
    fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        show('ok', 'Thanks – your enquiry has been sent. We’ll be in touch to confirm availability.');
      })
      .catch(function () { mailtoFallback(); })
      .then(function () { btn.disabled = false; btn.textContent = 'Send enquiry'; });
  });
})();
