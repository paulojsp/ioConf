import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Speaker } from '../speaker/speaker';

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html'
})
export class Speakers {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  

  goToSpeaker(){
    this.navCtrl.push(Speaker);
  }

}
