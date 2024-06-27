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

for (let i = 0; i < lists.length; i++) {
  // const name = lists[i].name;
  // const img = lists[i].img;
  // const price = lists[i].price;

  // 分割代入
  //37〜３９行目をまとめたもの
  // キーと定数名が同じ場合のみ使える

  const { name, img, price } = lists[i];

  const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`;
  menu.insertAdjacentHTML('beforeend', content);



  // const listSample = {
  //   name: lists[i].name,
  //   img: lists[i].img,
  //   price: lists[i].price,
  // }
  // const contentSample = `<div><img src="images/${listSample.img}" alt=""><h2>${listSample.name}</h2><p>${listSample.price}円</p></div>`;
  // menu.insertAdjacentHTML('beforeend', contentSample);

}