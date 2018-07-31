import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import {RegistratePage} from '../registrate/registrate';
import {InicioPage} from '../inicio/inicio';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  correo : string = null;
  password : string = null;
  registro = RegistratePage;
  inicio = InicioPage;

  //Datos Leabel
  labelCorreo : string = 'Correo';
  LabelClave : string = 'Clave';

  
  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private alertCtrl: AlertController ) {
  }

  showAlert(){
    if (this.correo===null||this.password===null) {
        this.showAlert2('Faltan Datos', 'Usuario o clave vacíos');
    }
    else{
      const alert = this.alertCtrl.create({
      title: 'Acceso Denegado',
      subTitle: 'Usuario o clave no existen: ' + this.correo,
      buttons: ['OK']
    });
    alert.present();
  }
  }
  showAlert2(tit,msn){
    const alert = this.alertCtrl.create({
      title: tit,
      subTitle: msn,
      buttons: ['OK']
    });
    alert.present();
  }
  showPrompt(){
    let prompt = this.alertCtrl.create({
      title: 'Ingreso',
      message: "Cual es su correo?",
      inputs:[
        {
          name:'Correo',
          placeholder: 'Correo'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            this.showAlert2('Envío Cancelado', data.Correo);
           // console.log('Cancel');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            this.showAlert2('Correo enviado', data.Correo);
            //console.log('OK');
          }
        }
      ]
    });
    prompt.present();
  }
/*   registrate(){
    this.navCtrl.push(this.pagina);
  }
 */  irPagina(pagina){
    this.navCtrl.push(pagina);
  }

}
