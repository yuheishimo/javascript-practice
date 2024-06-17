const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');
	
// isAgreed.addEventListener('change', () => {
//   btn.disabled = !isAgreed.checked;
//   //チェックはfalse、未チェックはtrue
//   console.log(btn.disabled);
// });

//if文を使用した場合
isAgreed.addEventListener('change', () => {
  if(isAgreed.checked){
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
  console.log(btn.disabled);
});



//★補足
// disabled はHTML要素の属性で、主にフォーム要素に使われます。
// 設定された要素は操作不可になり、視覚的に灰色がかった表示に変わります。
// フォーム送信時にも値は送信されません。JavaScriptで動的に設定/解除も可能です。
// 特定条件下でのみ操作を許可したり、入力ミスや誤操作を防ぐために利用されます。

// .checked は、JavaScriptでチェックボックスやラジオボタンのチェック状態を確認・変更するためのプロパティです。
// チェックボックスの場合：
// チェックされている: .checked は true
// チェックされていない: .checked は false