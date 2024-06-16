const loading = document.querySelector('#loading');

//関数定義した場合
const hidden = () => {
  loading.classList.add('loaded');
}
window.addEventListener('load',hidden);

//削除したロード画面をクリックで復活させる処理
// const reload = () => {
//   loading.classList.remove('loaded');
// }
// window.addEventListener('click',reload);



//無名関数の場合
// window.addEventListener('load', () => {
//   loading.classList.add('loaded');
// });