const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 画面に入ったらクラスを追加
      entry.target.classList.add('is-active');
    }
  });
}, { threshold: 0.2 }); // 20%見えたら実行

// 全ての .js-reveal を監視
document.querySelectorAll('.js-reveal').forEach(el => observer.observe(el));