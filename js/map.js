function myMap() {

    var styles = [
        {
          stylers: [
            { hue: "#cccccc" },
            { saturation: -20 }
          ]
        },{
          featureType: "road",
          elementType: "geometry",
          stylers: [
            { lightness: 100 },
            { visibility: "simplified" }
          ]
        },{
          featureType: "road",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
      ];

    var mapOptions = {
        center: new google.maps.LatLng(33.6844, 73.0479),
        disableDefaultUI: true,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styles
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

