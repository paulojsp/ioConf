import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContactsPage } from '../contacts/contacts';
import { UsersPage } from '../users/users';
import { GeoPage } from '../geo/geo';

@Component({
  selector: 'page-demos',
  templateUrl: 'demos.html'
})
export class DemosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemosPage');
  }
  goToContacts(){
    this.navCtrl.push(ContactsPage);
  }

  goToUsers(){
    this.navCtrl.push(UsersPage);
  }

  goToGeo(){
    this.navCtrl.push(GeoPage);
  }
}
