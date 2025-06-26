function sum(){
    let i = document.querySelector('input[name = "left"]');   //inputのnameがleftのやつを取得
    let i2 = document.querySelector('input[name = "right"]'); 

    i.value;                      //これはユーザーが入力した文字
    i2.value;
    a = Number(i.value);         //それを文字列から数値に変える関数がNumber
    b = Number(i2.value);
    c = a + b;

    x = document.querySelector('span');   //span要素に答えxを表示するから、spanにxを代入
    x.textContent = c;           //x要素のテキストを表示.
}


s = document.querySelector('button#calc');   //#の左に要素（<>で括ってあるところ）右にid
s.addEventListener('click', sum); 