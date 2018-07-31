import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {LoginPage} from '../login/login';
import {InicioPage} from '../inicio/inicio';

@Component({
  selector: 'page-registrate',
  templateUrl: 'registrate.html',
})
export class RegistratePage {
  ingresar = LoginPage;
  inicio = InicioPage;

  //Datos Leabel
  labelTipoDoc:string = 'Tipo Identifición';
  labelDoc: string = 'Documento';
  labelNombres:string = 'Nombres';
  labelApellidos:string = 'Apellidos';
  labelCorreo : string = 'Correo';
  LabelClave : string = 'Clave';
  LabelConfirmaClave : string = 'Confirma Clave';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  irPagina(pagina){
    this.navCtrl.push(pagina);
  }

}
