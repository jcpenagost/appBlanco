import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  ingresar=LoginPage;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  irPagina(pagina){
    this.navCtrl.push(pagina);
  }

}
