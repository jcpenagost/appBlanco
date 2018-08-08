import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detallevento',
  templateUrl: 'detallevento.html',
})
export class DetalleventoPage {
  //Variables
  selectedItem: any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.selectedItem = navParams.get('item');

    }

}
