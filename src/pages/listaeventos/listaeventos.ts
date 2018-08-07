import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-listaeventos',
  templateUrl: 'listaeventos.html',
})
export class ListaeventosPage {
  selectedItem: any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.selectedItem = navParams.get('item');
  }

}
