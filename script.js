/* ── Demo Toast ── */
const demoToast = document.getElementById('demoToast');
let demoToastTimer = null;

function showDemoToast(message) {
  if (!demoToast) return;
  demoToast.textContent = message;
  demoToast.classList.add('show');
  clearTimeout(demoToastTimer);
  demoToastTimer = setTimeout(() => demoToast.classList.remove('show'), 3200);
}

/* ── Custom Cursor ── */
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '16px';
      cursor.style.height = '16px';
      ring.style.width = '52px';
      ring.style.height = '52px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      ring.style.width = '36px';
      ring.style.height = '36px';
    });
  });

  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (event) => {
      const url = link.getAttribute('href');
      if (!url || url.startsWith('#')) return;
      event.preventDefault();
      window.location.href = url;
    });
  });

});

/* ── Scroll Reveal ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Contact Form Submit ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#10c47a';
  setTimeout(() => {
    btn.textContent = 'Send Message ↗';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}
