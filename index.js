// 前へ_DOM指定
const prevButton = document.getElementById("js-button-prev");
// 次へ_DOM指定
const nextButton = document.getElementById("js-button-next");

// 総数
console.log(data);
// 総数
const globalTotalItem = Number(data.length);
// 1ページに表示したい件数
const PER_PAGE = 5;
// 初期ページ
var initialPage = 0;
// 現在のページ
var currentPage = 0;

// 配列を任意の数だけ作成
const range = (start, end) => {
  const array = [...Array(end - start + 1)].map((_, i) => {
    return start + i;
  });
  return array;
};

// 閲覧中の情報の件数の範囲を表示
const rangeCurrentPage = () => {
  if (!globalTotalItem) return;
  const start = currentPage * PER_PAGE + 1;
  const text =
    (currentPage + 1) * PER_PAGE < globalTotalItem
      ? `${start}件〜${(currentPage + 1) * PER_PAGE}件目を表示`
      : `${start}件〜${globalTotalItem}件目を表示`;
  return text;
};

// 前へボタン_アクション
prevButton.addEventListener("click", () => {
  if (initialPage >= currentPage) return;
  currentPage = currentPage - 1;
  render();
});
// 次へボタン_アクション
nextButton.addEventListener("click", () => {
  if (PER_PAGE * (currentPage + 1) >= globalTotalItem) return;
  currentPage = currentPage + 1;
  render();
});

// レンダリング
const render = () => {
  // 総数
  document.getElementById(
    "js-pagination-result-total"
  ).innerHTML = globalTotalItem;
  // 内容
  document.getElementById("js-pagination-result-range").innerHTML = range(1,Math.ceil(globalTotalItem / PER_PAGE)
  );
  // 結果の幅
  document.getElementById(
    "js-pagination-result-range-text"
  ).innerHTML = rangeCurrentPage();
  // 現在
  document.getElementById("js-pagination-current").innerHTML = currentPage + 1;
};

render();