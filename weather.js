// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {

  console.log('緯度：'+data.coord.lon);
  console.log('軽度：'+data.coord.lat);
  console.log('天気：'+data.weather[0].description );
  console.log('最低気温：'+data.main.temp_min+'°');
  console.log('最高気温：'+data.main.temp_max+'°');
  console.log('湿度：'+data.main.humidity+'％');
  console.log('風速：'+data.wind.speed);
  console.log('風向：'+data.wind.deg);
  console.log('都市名：'+data.name);

}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  let x = document.querySelector('div#result');
  x.remove()

  let div = document.createElement('div');
  div.setAttribute('id', 'result');
  let a = document.querySelector('p#ppp');
  a.insertAdjacentElement('afterend', div);

  let div1 = document.createElement('div');
  div1.setAttribute('class', 'box');
  let div2 = document.createElement('div');
  div2.setAttribute('class', 'box');
  let div3 = document.createElement('div');
  div3.setAttribute('class', 'box');
  let div4 = document.createElement('div');
  div4.setAttribute('class', 'box');
  let div5 = document.createElement('div');
  div5.setAttribute('class', 'box');
  let div6 = document.createElement('div');
  div6.setAttribute('class', 'box');
  let div7 = document.createElement('div');
  div7.setAttribute('class', 'box');
  let div8 = document.createElement('div');
  div8.setAttribute('class', 'box');
  let div9 = document.createElement('div');
  div9.setAttribute('class', 'box');

  div1.textContent = '緯度：'+data.coord.lon;
  div2.textContent = '軽度：'+data.coord.lat;
  div3.textContent = '天気：'+data.weather[0].description ;
  div4.textContent = '最低気温：'+data.main.temp_min+'°';
  div5.textContent = '最高気温：'+data.main.temp_max+'°';
  div6.textContent = '湿度：'+data.main.humidity+'％';
  div7.textContent = '風速：'+data.wind.speed;
  div8.textContent = '風向：'+data.wind.deg;
  div9.textContent = '都市名：'+data.name;

  div.insertAdjacentElement('beforeend', div1);
  div.insertAdjacentElement('beforeend', div2);
  div.insertAdjacentElement('beforeend', div3);
  div.insertAdjacentElement('beforeend', div4);
  div.insertAdjacentElement('beforeend', div5);
  div.insertAdjacentElement('beforeend', div6);
  div.insertAdjacentElement('beforeend', div7);
  div.insertAdjacentElement('beforeend', div8);
  div.insertAdjacentElement('beforeend', div9);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let a = document.querySelector('input[name = "left"]');
  let kensaku = a.value;

  let id = 0;
  if(kensaku == "カイロ" || kensaku == "Cairo" || kensaku == "エジプト"){
    id = 360630;
  }if(kensaku == "モスクワ" || kensaku == "Moscow" || kensaku == "ロシア"){
    id = 524901;
  }if(kensaku == "ヨハネスブルク" || kensaku == "Johannesburg" || kensaku == "南アフリカ"){
    id = 993800;
  }if(kensaku == "北京" || kensaku == "Beijing" || kensaku == "中華人民共和国"){
    id = 1816670;
  }if(kensaku == "東京" || kensaku == "Tokyo" || kensaku == "日本"){
    id = 1850147;
  }if(kensaku == "シンガポール" || kensaku == "Singapore"){
    id = 1880252;
  }if(kensaku == "シドニー" || kensaku == "Sydney" || kensaku == "オーストラリア"){
    id = 2147714;
  }if(kensaku == "ロンドン" || kensaku == "London" || kensaku == "イギリス"){
    id = 2643743;
  }if(kensaku == "パリ" || kensaku == "Paris" || kensaku == "フランス"){
    id = 2968815;
  }if(kensaku == "リオデジャネイロ" || kensaku == "Rio de Janeiro" || kensaku == "ブラジル"){
    id = 3451189;
  }if(kensaku == "ニューヨーク" || kensaku == "New York" || kensaku == "アメリカ合衆国"){
    id = 5128581;
  }if(kensaku == "ロサンゼルス" || kensaku == "Los Angeles" || kensaku == "アメリカ合衆国"){
    id = 5368361;
  }

  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';

    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
		data = JSON.parse(data);
	}

 printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

