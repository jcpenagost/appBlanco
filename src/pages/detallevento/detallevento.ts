import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detallevento',
  templateUrl: 'detallevento.html',
})
export class DetalleventoPage {
  //Variables
  selectedItem: any;
  //Datos Leabel
  labelNombre:string='Nombre';
  labelObjetivo:string='Objetivo';
  labelDescripcion:string='Descripción';
  labelFechaIni:string='Fecha de inicio';
  labelHoraIni:string='Hora de Inicio';
  labelLugar:string='Lugar';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.selectedItem = navParams.get('item');

    }

}
