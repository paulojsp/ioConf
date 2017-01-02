import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PeopleService } from '../../providers/people-service';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
  providers: [PeopleService]

})
export class UsersPage {
  public people: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleService: PeopleService) {
    //carrega Pessoas
    this.loadPeople();
  }

  loadPeople() {
    //load do meu provider
  		this.peopleService.load()
      .then(data1 => {
        this.people = data1;
      });
  }
}
