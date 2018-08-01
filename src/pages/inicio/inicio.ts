import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import {DenunciaPage} from '../denuncia/denuncia';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  ingresar=LoginPage;
  denuncia=DenunciaPage;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  irPagina(pagina){
    this.navCtrl.push(pagina);
  }

}
