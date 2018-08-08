import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListaeventosPage } from '../listaeventos/listaeventos';

@Component({
  selector: 'page-program-categoria',
  templateUrl: 'program-categoria.html',
})
export class ProgramCategoriaPage {
  //Variables
  listeventos = ListaeventosPage;
  //Arreglos
  itemsCategorias:Array<{Categ_id:number, Categ_icono:string, Categ_titulo:string}>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.itemsCategorias=[];
      this.itemsCategorias.push({Categ_id:0, Categ_icono:'football',Categ_titulo:'Deportes'});
      this.itemsCategorias.push({Categ_id:1, Categ_icono:'heart',Categ_titulo:'Cultura'});
      this.itemsCategorias.push({Categ_id:2, Categ_icono:'construct',Categ_titulo:'Talleres'});
      this.itemsCategorias.push({Categ_id:3, Categ_icono:'book',Categ_titulo:'Cursos'});
      this.itemsCategorias.push({Categ_id:4, Categ_icono:'beer',Categ_titulo:'Eventos'});
  }

/*   itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
 */  
/*   irPagina(pagina, event, item){
    this.navCtrl.push(pagina,{
      item: item
    });
  }
 */
  irPagina(event, item){
    this.navCtrl.push(ListaeventosPage, {item:item}
    );
  }
}
