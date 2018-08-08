import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {DetalleventoPage} from '../detallevento/detallevento';

@Component({
  selector: 'page-listaeventos',
  templateUrl: 'listaeventos.html',
})
export class ListaeventosPage {
  //Variables
  detalleevento = DetalleventoPage;
  selectedItem: any;

  //Arreglos
  // Con la categoria que llega de la página anterior, se debe buscar los eventos 
  // agrupados por fecha del evento
  itemsEventos:Array<{event_fechaini:string, event_horaini:string, event_imgcolegios:string, event_nombre:string, event_objetivo:string}>;
  


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.selectedItem = navParams.get('item');
      this.itemsEventos = [];
      this.itemsEventos.push({event_fechaini:'2018/10/30', event_horaini:'18:00:', event_imgcolegios:'logoLuisLopezMesa.png', event_nombre:'Fiesta de Cumpleaños', event_objetivo:'Realizar fiesta de cumpleaños'});
      this.itemsEventos.push({event_fechaini:'2018/10/31', event_horaini:'18:30:', event_imgcolegios:'logoLuisLopezMesa.png', event_nombre:'Fiesta Halloween', event_objetivo:'Realizar fiesta de Halloween'});
      this.itemsEventos.push({event_fechaini:'2018/12/08', event_horaini:'18:30:', event_imgcolegios:'logoLuisLopezMesa.png', event_nombre:'Actividad día de velitas', event_objetivo:'Realizar por grupos actividad de las velitas'});
      this.itemsEventos.push({event_fechaini:'2018/12/10', event_horaini:'10:00:', event_imgcolegios:'logoLuisLopezMesa.png', event_nombre:'Regalos de navidad', event_objetivo:'Alistar los regalos de navidad'});
      this.itemsEventos.push({event_fechaini:'2018/12/16', event_horaini:'09:00:', event_imgcolegios:'logoLuisLopezMesa.png', event_nombre:'Novena primeros', event_objetivo:'Realizar novena cursos primeros'});
      this.itemsEventos.push({event_fechaini:'2018/12/21', event_horaini:'18:00:', event_imgcolegios:'logoLuisLopezMesa.png', event_nombre:'Actividad espíritu navidad', event_objetivo:'Integrar cursos de primeros y onces compartidas'});
      this.itemsEventos.push({event_fechaini:'2018/12/22', event_horaini:'11:00:', event_imgcolegios:'logoLuisLopezMesa.png', event_nombre:'Entrega de regalos', event_objetivo:'Entrega de regalos entre cursos'});

  }
  irPagina(event, item){
    this.navCtrl.push(DetalleventoPage, {item:item}
    );
  }

}
