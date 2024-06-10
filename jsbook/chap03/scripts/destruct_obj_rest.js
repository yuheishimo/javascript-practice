let book = {
  title: 'Javaポケットリファレンス',
  publisher: '技術評論社',
  price: 2680
};

let { title, ...rest } = book;
console.log(title);
//Javaポケットリファレンス
console.log(rest);
//publisher: '技術評論社',price: 2680
//今回はtitle以外のプロパティを表示