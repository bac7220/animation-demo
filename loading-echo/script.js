// ページ全体の読み込み（画像なども含む）が終わったら実行
window.addEventListener("load", function () {
  const loaderWrap = document.querySelector(".loader-wrap");
  // 読み込み完了後にloaderに'is-hide'クラスをつけて隠す
  loaderWrap.classList.add("is-hide");

  // アニメーション終了時に要素を消す
  loaderWrap.addEventListener("transitionend", function () {
    loaderWrap.remove();
  });
});
