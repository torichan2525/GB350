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

<script type='text/javascript' src='//maps.google.com/maps/api/js?key=AIzaSyCZtuhSviWhr9rnUzDviTrXiZk1GHvNDEc'></script>

<script>
  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyCZtuhSviWhr9rnUzDviTrXiZk1GHvNDEc",
    // Add other bootstrap parameters as needed, using camel case.
    // Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
  });
</script>

    
