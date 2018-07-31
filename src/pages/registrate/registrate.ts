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
  tipdoc: string = null;
  numdoc:string = null;
  nombres:string=null;
  apellidos:string=null;
  correo:string=null;
  clave:string=null;
  confirclave:string=null;
  itemsTipDoc:Array<{items_tipoDoc:string, itmes_descrip:string}>;

  //Datos Leabel
  labelTipoDoc:string = 'Tipo Doc';
  labelDoc: string = 'Documento';
  labelNombres:string = 'Nombres';
  labelApellidos:string = 'Apellidos';
  labelCorreo : string = 'Correo';
  LabelClave : string = 'Clave';
  LabelConfirmaClave : string = 'Confirma Clave';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.itemsTipDoc=[];
      this.itemsTipDoc.push({items_tipoDoc:'CC',itmes_descrip:'Cédula Ciudadanía'});
      this.itemsTipDoc.push({items_tipoDoc:'TI',itmes_descrip:'Tarjeta Identidad'});
      this.itemsTipDoc.push({items_tipoDoc:'PA',itmes_descrip:'Pasaporte'});
      this.itemsTipDoc.push({items_tipoDoc:'CE',itmes_descrip:'Cédula Extranjería'});

  }

  irPagina(pagina){
    this.navCtrl.push(pagina);
  }

}
