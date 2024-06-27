const items = document.querySelectorAll('.img-item');
//console.log(items);

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    opacity: [0, 1]
  };
  const options = {
    duration: 600,
    delay: i * 300,
    // 再生後の状態を維持
    fill: 'forwards',
  };
  items[i].animate(keyframes, options);
}