import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import {LoginPage} from '../pages/login/login';
import {RegistratePage} from '../pages/registrate/registrate';
import {DenunciaPage} from '../pages/denuncia/denuncia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    LoginPage,
    RegistratePage,
    DenunciaPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
//    IonicPageModule.forChild(InicioPage),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    LoginPage,
    RegistratePage,
    DenunciaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
