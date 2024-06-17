const text = document.querySelector('#text');
const count = document.querySelector('#count');

//関数定義した場合
const countup = () => {
  count.textContent = text.value.length;
  // 100文字を超えるなら
  if (text.value.length > 100) {
  // alert クラスを加える
    count.classList.add('alert');
  // そうでないなら（100文字以下なら）
  } else {
  // alert クラスをはずす
    count.classList.remove('alert');
  }
}
text.addEventListener('keyup',countup);


// text.addEventListener('keyup', () => {
//   count.textContent = text.value.length;
//   console.log(count.textContent);
  
//   // 100文字を超えるなら
//   if (text.value.length > 100) {
//     // alert クラスを加える
//     count.classList.add('alert');
//     // そうでないなら（100文字以下なら）
//   } else {
//     // alert クラスをはずす
//     count.classList.remove('alert');
//   }
// });