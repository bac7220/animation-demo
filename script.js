const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // 画面内に入ったら .is-active を追加
      if (entry.isIntersecting) {
        entry.target.classList.add("is-active");
      }
    });
  },
  { threshold: 0.2 }
); // 20%見えたら実行

// 全ての .js-fade 要素を監視対象にする
document.querySelectorAll(".js-fade").forEach((el) => observer.observe(el));
