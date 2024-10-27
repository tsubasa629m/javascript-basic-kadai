 // btnというid名を持つ要素を定数btnElementに代入
 const btn = document.getElementById('btn');
 // textというidを持つ要素を定数textElementに代入
  const text = document.getElementById('text');
  
 //btnというid名を持つhtml要素を取得し、中身を出力する
 console.log(btn);
  
  //textというidを持つ要素を取得し、中身を出力する
  console.log(text);

 

  //二秒後テキスト変更
  btn.addEventListener('click',() => {
      setTimeout(() => {
          text.textContent = 'ボタンをクリックしました';
      }, 2000);
  });