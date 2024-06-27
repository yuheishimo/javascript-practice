const heading = document.querySelector('#heading');

const keyframes = {
  // 透明度：[最初,最後]
  opacity: [0, 1],
  // 表示位置：[最初,最後]
  translate: ['100px -100px', 0],
};
const options = {
  // 再生時間
  duration: 2000,
  // 動きの種類
  easing: 'ease',
};

アニメーションを動かす
heading.animate(keyframes, options);


// 定数名を使用しない場合の記述
// const heading = document.querySelector('#heading');

// heading.animate(
//   {
//     opacity: [0, 1],
//     translate: ['100px -100px', 0],
//   },
//   {
//     duration: 2000,
//     easing: 'ease',
//   }
// );