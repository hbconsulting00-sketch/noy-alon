// Floating wedding motifs in the background + heart burst celebration
(function () {
  const el = document.getElementById('bg-deco');
  if (el) {
    const icons = ['💍', '🤍', '🕊️', '💐', '🥂', '💕', '🌸', '💒', '✨', '🎀', '💙', '🌷'];
    const n = window.innerWidth < 600 ? 14 : 28;
    for (let i = 0; i < n; i++) {
      const s = document.createElement('span');
      s.textContent = icons[i % icons.length];
      s.style.left = (Math.random() * 96) + '%';
      s.style.top = (Math.random() * 96) + '%';
      s.style.fontSize = (18 + Math.random() * 30) + 'px';
      s.style.animationDuration = (6 + Math.random() * 8) + 's';
      s.style.animationDelay = (-Math.random() * 8) + 's';
      el.appendChild(s);
    }
  }
  window.heartBurst = function (n = 34) {
    const icons = ['💖', '🤍', '💗', '💙', '🌸', '✨', '💍'];
    for (let i = 0; i < n; i++) {
      const s = document.createElement('span');
      s.className = 'burst';
      s.textContent = icons[i % icons.length];
      s.style.left = (Math.random() * 100) + 'vw';
      s.style.fontSize = (16 + Math.random() * 26) + 'px';
      s.style.animationDuration = (2.6 + Math.random() * 2.2) + 's';
      s.style.animationDelay = (Math.random() * 0.7) + 's';
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 6000);
    }
  };
})();
