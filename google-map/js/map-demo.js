function attachMessage(marker, msg) {
  google.maps.event.addListener(marker, 'click', function(event) {
    new google.maps.InfoWindow({
      content: msg
    }).open(marker.getMap(), marker);
  });
}
// 位置情報と表示データの組み合わせ
var data = new Array();
data.push({position: new google.maps.LatLng(35.697745, 139.826395), content: '<a href="https://gb350.com/area-kanto/">関東地方</a>'});
data.push({position: new google.maps.LatLng(43.062077, 141.354401), content: '<a href="https://gb350.com/hokkaido/">北海道</a>'});
data.push({position: new google.maps.LatLng(39.671256, 140.894165), content: '<a href="https://gb350.com/area-tohoku/">東北地方</a>'});
data.push({position: new google.maps.LatLng(36.613323, 137.455444), content: '<a href="https://gb350.com/area-tyubu/">中部地方</a>'});
data.push({position: new google.maps.LatLng(34.712267, 135.576782), content: '<a href="https://gb350.com/area-kinki/">近畿地方</a>'});
data.push({position: new google.maps.LatLng(33.781430, 133.445435), content: '<a href="https://gb350.com/area-shikoku/">四国地方</a>'});
data.push({position: new google.maps.LatLng(35.041241, 132.962036), content: '<a href="https://gb350.com/area-tyugoku/">中国</a>'});
data.push({position: new google.maps.LatLng(32.775729, 130.979004), content: '<a href="https://gb350.com/area-kyusyu/">九州地方</a>'});


var myMap = new google.maps.Map(document.getElementById('map'), {
  zoom: 5.7,
  center: new google.maps.LatLng(39.087436, 136.889648),
  scrollwheel: true,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

for (i = 0; i < data.length; i++) {
  var myMarker = new google.maps.Marker({
    position: data[i].position,
    map: myMap
  });
  attachMessage(myMarker, data[i].content);
}
























//async function initMap() {
//  const contentString = `
//   <div>
//      <h1>タイトル</h1>
//     <div>
//        <p>
//        ここに詳細を記載
//       </p>
//        <p>
//          Attribution: GB350.com,
//          <a href="https://gb350.com">
//            https://GB350.com
//          </a>
//          (last visited March 1, 2024).
//        </p>
//      </div>
//    </div>`;
//  const infoWindow = new google.maps.InfoWindow({
//    content: contentString,
//    ariaLabel: "Uluru",
//  });
//
//  const marker = document.querySelector('gmp-advanced-marker');
//  marker.addEventListener('gmp-click', () => {
//    infoWindow.open({anchor: marker});
//  });


}




