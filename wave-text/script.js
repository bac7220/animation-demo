const textPath = document.querySelector("#waveText textPath");
const phrase = "INFINITE WAVE TEXT FLOWING SMOOTHLY • "; // ループさせたい1フレーズ

// 1. フレーズ1つ分の長さを正確に測る
textPath.textContent = phrase;
const unitLength = textPath.getComputedTextLength();

// 2. パスを埋め尽くすのに十分な回数、フレーズを繰り返す
// パスの全長より長くなるようにリピート
textPath.textContent = phrase.repeat(10);

// 3. アニメーション設定
const duration = 10; // 1ユニット分進むのにかかる時間（秒）
let offset = -unitLength; // 最初の一歩をフレーズ1つ分左にずらして開始

function animate() {
  // スピードの計算：1秒間に進む距離
  const speed = unitLength / (duration * 60);

  offset += speed;

  // 【ここが核心！】1フレーズ分（unitLength）進んだら、
  // 瞬時に元の位置（-unitLength）に戻すことで、見た目上の継ぎ目を消す
  if (offset >= 0) {
    offset = -unitLength;
  }

  textPath.setAttribute("startOffset", offset);
  requestAnimationFrame(animate);
}

animate();
