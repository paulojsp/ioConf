import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

declare var google;

@Component({
  selector: 'page-geo',
  templateUrl: 'geo.html'
})
export class GeoPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    Geolocation.getCurrentPosition().then((position) => {
      let latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOption = {
        center: latlng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);

      //adiciona o pin por defeito ao centro
      this.addPin();

      //adiciona pins com o botao esquerdo do rato
      google.maps.event.addListener(this.map, 'click', function(event) {
        //console.log(event.latLng, 'click');
        console.log(event.latLng.lat(), 'click');
        //console.log(event.latLng.lng(), 'click');
        let myLatLng = { lat: event.latLng.lat(), lng: event.latLng.lng() };

        new google.maps.Marker({
          position: myLatLng,
          map: this.map,
          animation: google.maps.Animation.DROP
        });
      });


      /*
      google.maps.event.addListener(marker, 'click', function() { map.setZoom(8);
 map.setCenter(marker.getPosition());
   });
      */


    });

  }
  addPin() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = 'conteudo premium'
    this.addInfoWindow(marker, content);
  }
  addInfoWindow(marker, content) {
    var infoWindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', (e) => {
      var lat = e.latLng.lat();
      var lng = e.latLng.lng();

      infoWindow.setContent('<h3>Coordenadas</h3><p>Lat= ' + lat + '<br/>Lng= ' + lng + '</p>');
      infoWindow.open(this.map, marker);

    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GeoPage');
  }

}
