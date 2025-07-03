//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!


function show(){
	
let p = document.createElement('p');		//まず新しい追加する要素を作成
p.textContent = campus.address;			  //追加する文章。textContentだからコンソール上でしか表示されない
let u = document.querySelector('h2#addr');	//ここに上の文章を追加します
u.insertAdjacentElement('afterend', p);		



p = document.querySelector('h2#dept'); 		//ここに
u = document.createElement('ul');			//ul要素を作って
p.insertAdjacentElement('afterend', u);		//今かuを追加します

for(let n of gakka){
	l = document.createElement('li');
	l.textContent = n.name;
    u.insertAdjacentElement('beforeend', l);
}

}

let b = document.querySelector('button#show');
b.addEventListener('click', show);