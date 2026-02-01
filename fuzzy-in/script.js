// スクロールして画面に入ったら「fuzzy-in」クラスを付与する設定
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fuzzy-in");
      }
    });
  },
  { threshold: 0.5 },
);

// 「.fuzzy」クラスをつけた要素を監視対象にする
document.querySelectorAll(".fuzzy").forEach((el) => {
  observer.observe(el);
});
