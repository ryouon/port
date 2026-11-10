// スライドと丸ボタンを取得
const slides = document.querySelectorAll('#slideshow .slide');
const dots = document.querySelectorAll('#slide-dots .dot');

// 切り替え間隔（ミリ秒）
const INTERVAL = 5000;

let current = 0;
let timer;

// スライドを切り替える関数
function showSlide(index) {

  // 現在の画像と丸ボタンを解除
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');

  // 新しい画像番号
  current = index;

  // 新しい画像と丸ボタンを表示
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

// 次の画像へ
function nextSlide() {
  const next = (current + 1) % slides.length;
  showSlide(next);
}

// 自動切り替え
function startAutoSlide() {
  clearInterval(timer);
  timer = setInterval(nextSlide, INTERVAL);
}

// 丸ボタンを押したとき
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    startAutoSlide();
  });
});

// 初期化
if (slides.length > 0 && slides.length === dots.length) {
  startAutoSlide();
}