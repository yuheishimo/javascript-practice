const text = document.querySelector('#colorText');
console.log(text.textContent)
const color = document.querySelector('#colorPicker');

// カラーピッカーを操作したときの一連の動作
//アロー関数
// const colorBg = () => {
//   // カラーコードを表示
//   text.textContent = `カラーコード：${color.value}`;
// }

//function構文
function colorBg() {
  text.textContent = `カラーコード：${color.value}`;
}

// カラーピッカーが変更されたら colorBg を発動させる
color.addEventListener('input', colorBg);