import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { Speakers } from '../pages/speakers/speakers';
import { Register } from '../pages/register/register';
import { Speaker } from '../pages/speaker/speaker';
import { AboutPage } from '../pages/about/about';
import { ShopPage } from '../pages/shop/shop';
import { AgendaPage } from '../pages/agenda/agenda';

import { DemosPage } from '../pages/demos/demos';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;

  constructor(platform: Platform, public menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  goToHome(){
    //push - pop
    //change root
    this.nav.setRoot(HomePage);
    this.menuCtrl.close();
  }
  goToSpeakers(){
    this.menuCtrl.close();
    this.nav.setRoot(Speakers);
  }
  goToRegister(){
    this.menuCtrl.close();
    this.nav.setRoot(Register);
  }
  goToShop(){
    this.menuCtrl.close();
    this.nav.setRoot(ShopPage);
  }
  goToAbout(){
    this.menuCtrl.close();
    this.nav.setRoot(AboutPage);
  }
  goToAgenda(){
    this.menuCtrl.close();
    this.nav.setRoot(AgendaPage);
  }
  goToDemos(){
    this.menuCtrl.close();
    this.nav.setRoot(DemosPage);
  }



  goBack(){
    this.nav.pop();
  }

  logEvent(event){
    console.log(event);
  }

}
