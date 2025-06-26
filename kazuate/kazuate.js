// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let owattaka = 0;


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let a = document.querySelector('input[name = "left"]');
  yoso = Number(a.value);

  kaisu = kaisu + 1;
  console.log(kaisu+'回目の予想: '+yoso);

  x = document.querySelector('span#kaisu');
  x.textContent = kaisu; 

  y = document.querySelector('span#answer');
  y.textContent = yoso;


  z = document.querySelector('p#result');

if(yoso === kotae && kaisu <= 3 && owattaka === 0){
    console.log('正解です．おめでとう!');
    z.textContent = '正解です．おめでとう!'
    owattaka = 1;

}else if(owattaka ===1){
    console.log('答えは '+kotae+' でした．すでにゲームは終わっています');
    z.textContent = '答えは '+kotae+' でした．すでにゲームは終わっています'

}else if(kaisu === 3){
    console.log('まちがい．残念でした答えは '+kotae+' です．');
    z.textContent = 'まちがい．残念でした答えは '+kotae+' です．';
    owattaka = 1;

}else if(kaisu <= 2 && yoso < kotae){
    console.log('まちがい．答えはもっと大きいですよ');
    z.textContent = 'まちがい．答えはもっと大きいですよ';

}else if(kaisu <= 2 && yoso > kotae){
    console.log('まちがい．答えはもっと小さいですよ');
    z.textContent ='まちがい．答えはもっと小さいですよ';

}

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}

s = document.querySelector('button#botan');
s.addEventListener('click', hantei);