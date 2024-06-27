// 監視対象が範囲内に現れたら実行する動作
const showKirin = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ['200px 0', 0],
  };
  const options = {
    duration: 1000,
  };

  //console.log('キリンさんです');
  // console.log(entries[0].target);
  entries[0].target.animate(keyframes, options);
};

const options = {
  root: null,  // ビュー全体をルートとする
  rootMargin: '0px',  // ルート要素のマージン
  // threshold: 0.8  // 50%表示されたときにコールバックを呼び出す
};

const kirinObserver = new IntersectionObserver(showKirin, options);


// 監視ロボットの設定
// const kirinObserver = new IntersectionObserver(showKirin);

// #kirinを監視するよう指示
kirinObserver.observe(document.querySelector('#kirin'));

// ＊補足＊
// showKirin 関数: 監視対象が画面内に現れたときに呼び出されるコールバック関数です。
// entries パラメータ: Intersection Observerが監視しているすべての要素に関する情報を含む配列です。通常、この配列には1つのエントリだけが含まれています。
// keyframes オブジェクト: アニメーションのキーフレームを定義します。ここでは、透明度（opacity）が0から1に変わり、位置（translate）が右から左に200ピクセル移動することを意味しています。
// options オブジェクト: アニメーションのオプションを定義します。ここでは、アニメーションの再生時間が3秒（3000ミリ秒）です。
// entries[0].target.animate(keyframes, options): entries 配列の最初の要素（監視対象のDOM要素）に対して、定義したキーフレームとオプションを使ってアニメーションを実行します。
// IntersectionObserver インスタンス: showKirin 関数をコールバックとして渡し、新しい IntersectionObserver オブジェクトを作成します。このオブジェクトは、特定の要素がビューに入る（または出る）ときに showKirin を呼び出します。
// observe メソッド: 監視対象の要素を指定します。ここでは、IDが kirin の要素を監視するように指示しています。

// ＜全体の流れ＞
// showKirin 関数は、監視対象がビューに現れたときに実行されます。
// showKirin 関数内で、対象要素に対して透明度と位置のアニメーションが定義され、実行されます。
// kirinObserver は #kirin 要素を監視し、その要素がビューに入ると showKirin を呼び出します。
