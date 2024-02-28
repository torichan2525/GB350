type='text/javascript' src='https://maps.google.com/maps/api/js?key=AIzaSyCZtuhSviWhr9rnUzDviTrXiZk1GHvNDEc'

	() => {
    //マーカーの情報
    var data = new Array();
    data.push({
      lat: '38.341656',
      lng: '137.416992',
      url: 'http://www.yaesu-book.co.jp/'
    });
    data.push({
      lat: '43.064323', //緯度
      lng: '141.346878', //経度
      url: 'https://gb350.com/hokkaido/' //リンク先
    });
    data.push({
      lat: '35.465778',
      lng: '139.622299',
      url: 'http://www.yaesu-book.co.jp/'
    });

    //data.push({
    // lat: '35.682063',
    // lng: '139.773448',
    // url: 'http://www.nihonbashi-tokyo.jp/'
    //});
    //初期位置に、上記配列の一番初めの緯度経度を格納
    var latlng = new google.maps.LatLng(data[0].lat, data[0].lng);

    var opts = {
      zoom: 4, //地図の縮尺
      center: latlng, //初期位置の変数
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //地図を表示させるエリアのidを指定
    var map = new google.maps.Map(document.getElementById("map"), opts);

    //マーカーを配置するループ
    for (i = 0; i < data.length; i++) {
      var markers = new google.maps.Marker({
        position: new google.maps.LatLng(data[i].lat, data[i].lng),
        map: map
      });
      //クリックしたら指定したurlに遷移するイベント
      google.maps.event.addListener(markers, 'click', (function (url) {
        return function () { location.href = url; };
      })(data[i].url));
    }
  }
      
    //地図描画を実行
    google.maps.event.addDomListener(window, 'load', map_canvas);
    
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
      ga('create', 'UA-47542229-1', 'auto');
      ga('send', 'pageview');






      /**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
async function initMap() {
  const contentString = `
    <div>
      <h1>Uluru</h1>
      <div>
        <p>
          <b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large
          sandstone rock formation in the southern part of the
          Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi)
          south west of the nearest large town, Alice Springs; 450&#160;km
          (280&#160;mi) by road. Kata Tjuta and Uluru are the two major
          features of the Uluru - Kata Tjuta National Park. Uluru is
          sacred to the Pitjantjatjara and Yankunytjatjara, the
          Aboriginal people of the area. It has many springs, waterholes,
          rock caves and ancient paintings. Uluru is listed as a World
          Heritage Site.
        </p>
        <p>
          Attribution: Uluru,
          <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
            https://en.wikipedia.org/w/index.php?title=Uluru
          </a>
          (last visited June 22, 2009).
        </p>
      </div>
    </div>`;
  const infoWindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });

  const marker = document.querySelector('gmp-advanced-marker');
  marker.addEventListener('gmp-click', () => {
    infoWindow.open({anchor: marker});
  });
}

window.initMap = initMap;