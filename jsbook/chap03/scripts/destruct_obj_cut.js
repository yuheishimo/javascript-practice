let book = {
  title: 'Javaポケットリファレンス',
  publisher: '技術評論社',
  price: 2680
};

let price, title, memo;
({ price, title, memo = '×' } = book);

console.log(price);
//2680
console.log(title);
//Javaポケットリファレンス
console.log(memo);
//x
