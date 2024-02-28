var map;
function initMap() {
  var target = document.getElementById('gmap');
  var empire = {lat: 40.748441, lng: -73.985664};
  map = new google.maps.Map(target, {
    center: empire,
    zoom: 14
  });
  var map;
  function initMap() {
    var target = document.getElementById('map');
    var empire = {lat: 40.748441, lng: -73.985664};
    map = new google.maps.Map(target, {
      center: empire,
      zoom: 14
    });
   
    var marker = new google.maps.Marker({
      position: empire,
      map: map,
      title: "Nwe!",
      animation: google.maps.Animation.DROP,
      icon: "https://maps.google.com/mapfiles/ms/micons/green-dot.png"
    });
  }  




const infoWindow = new google.maps.InfoWindow({
  position: map.getCenter(),
  content: `<div class="custom-info">
    <div class="custom-info-item name">
    Tips
    </div>
    <div class="custom-info-item address">
    東京都ほげ
    </div>
    <div class="custom-info-item tel">
    <a href="tel:000-0000-0000">000-0000-0000</a>
    </div>
    <div class="custom-info-item google-map">
    <a href="https://goo.gl/maps/qytx6qv2aGp2Xg8G8" target="_blank">MAP</a>
    </div>
</div>`,
  pixelOffset: new google.maps.Size(0, -50)
})

//マーカーをクリックしたら情報ウィンドウを開く
marker.addListener('click', () => {
  infoWindow.open(map);
});