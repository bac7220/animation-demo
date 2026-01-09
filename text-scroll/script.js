// すべてのマーキーを取得
const marqueeContents = document.querySelectorAll(".marquee-content");

// 複数ある場合、それぞれに個別の幅を設定
marqueeContents.forEach((content) => {
  const contentWidth = content.scrollWidth / 2; // 2つ並べてるので÷2
  content.style.setProperty("--content-width", contentWidth);
});
