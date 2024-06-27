const menu = document.querySelector('#menu');

const lists = [
  {
    name: 'イチゴ',
    img: 'strawberry.jpg',
    price: 450,
  },
  {
    name: 'ライム',
    img: 'lime.jpg',
    price: 400,
  },
  {
    name: 'マンゴー',
    img: 'mango.jpg',
    price: 500,
  },
  {
    name: 'レモン',
    img: 'lemon.jpg',
    price: 400,
  },
  {
    name: 'イチジク',
    img: 'fig.jpg',
    price: 500,
  },
  {
    name: 'リンゴ',
    img: 'apple.jpg',
    price: 400,
  },
];
//console.log(lists[0].name);

for (let i = 0; i < lists.length; i++) {
  const content = `<div><img src="images/${lists[i].img}" alt=""><h2>${lists[i].name}</h2><p>${lists[i].price}円</p></div>`;
  //insertAdjacentHTML←HTMLとして表示（使用しない場合は文字列）
  // 要素.insertAdjacentHTML('挿入位置', 挿入内容);
  // P151参照
  menu.insertAdjacentHTML('beforeend', content);
  // menu.textContent = content; //文字列のみ表示させる場合
}