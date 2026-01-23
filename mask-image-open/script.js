// スクロール監視の設定
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1 // 100% 見えたら実行
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 画面に入ったら active クラスをつけて霧を晴らす
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

// すべての mask-reveal 要素を監視対象にする
document.querySelectorAll('.mask-reveal').forEach(el => {
  observer.observe(el);
});