function map_canvas() {
    //マーカーの情報
      var data = new Array();
        data.push({
          lat: '43.064323', //緯度
          lng: '141.346878', //経度
          url: 'https://gb350.com/hokkaido/' //リンク先
        });
        data.push({
          lat: '35.678187',
          lng: '139.76817',
          url: 'http://www.yaesu-book.co.jp/'
      });
        data.push({
          lat: '35.682063',
          lng: '139.773448',
          url: 'http://www.nihonbashi-tokyo.jp/'
      });
      
    //初期位置に、上記配列の一番初めの緯度経度を格納
      var latlng = new google.maps.LatLng(data[0].lat, data[0].lng);
      
      var opts = {
        zoom: 15,//地図の縮尺
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
        google.maps.event.addListener(markers, 'click', (function(url){
          return function(){ location.href = url; };
        })(data[i].url));
      }
    }
      
    //地図描画を実行
    google.maps.event.addDomListener(window, 'load', map_canvas);
    