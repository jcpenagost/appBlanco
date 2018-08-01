import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/* Declaramos la variable de Google que reutilizaremos más tarde */
declare var google;

@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html',
})
export class DenunciaPage {
  /* Declaramos la variable mapa */
  mapa: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  /* Esperamos a que haya cargado la aplicación para cargar el mapa */
  ionViewDidLoad() {
    /* Asignamos en la capa mapa de la vista home.html los valores */
    let mapData = document.getElementById('mapa');
    /* Indicamos unas coordenadas y zoom para mostrar por defecto */
    this.mapa = new google.maps.Map(mapData, {
      center: {lat: 39.4755174, lng: -0.3654215},
      zoom: 12
    });
    google.maps.event.addListenerOnce(this.mapa, 'idle', () => {
    mapData.classList.add('show-map');
    google.maps.event.trigger(mapData, 'resize');
    });
  }

}
