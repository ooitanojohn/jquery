const data = [
  {
    id: 1,
    name: "ブレンドコーヒー",
    price: 320,
  },
  {
    id: 2,
    name: "アメリカンコーヒー",
    price: 310,
  },
  {
    id: 3,
    name: "カフェラテ",
    price: 410,
  },
  {
    id: 4,
    name: "カフェモカ",
    price: 430,
  },
  {
    id: 5,
    name: "紅茶",
    price: 320,
  },
  {
    id: 6,
    name: "かつサンド",
    price: 500,
  },
  {
    id: 7,
    name: "ハンバーグサンド",
    price: 500,
  },
  {
    id: 8,
    name: "オムレツ",
    price: 550,
  },
  {
    id: 9,
    name: "シーザーサラダ",
    price: 520,
  },
  {
    id: 10,
    name: "カレーライス",
    price: 680,
  },
  {
    id: 11,
    name: "いちごショート",
    price: 540,
  },
  {
    id: 12,
    name: "ザッハ・トルテ",
    price: 570,
  },
  {
    id: 13,
    name: "チーズケーキ",
    price: 490,
  },
  {
    id: 14,
    name: "アップルパイ",
    price: 590,
  },
  {
    id: 15,
    name: "カスタードプディング",
    price: 380,
  },
  {
    id: 16,
    name: "パフェ",
    price: 670,
  },
  {
    id: 17,
    name: "クレープ",
    price: 480,
  },
  {
    id: 18,
    name: "おしるこ",
    price: 320,
  },
  {
    id: 19,
    name: "みたらし団子",
    price: 150,
  },
  {
    id: 20,
    name: "豆大福",
    price: 120,
  },
  {
    id: 21,
    name: "あんみつ",
    price: 280,
  },
];
const table = document.querySelector(".temp-container");
const temp = document.querySelector("#temp")
// 内容コンポーネント生成
const createTableFragment = (array) => {
  const fragment = document.createDocumentFragment();
  array.map((obj, index) => {
    // templateを複製
    const cp_temp = temp.content.cloneNode(true);
    cp_temp.querySelector("li").textContent = obj.name;
    cp_temp.querySelector("a").href = obj.id;
    cp_temp.querySelector("a").textContent = obj.id;
    fragment.appendChild(cp_temp);
  })
  return fragment;
};
// 読み込み
const render = (fragment) => {
  table.appendChild(fragment);
}

render(createTableFragment(data));

