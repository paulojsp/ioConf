import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {
  data1:any;


  constructor(public http: Http) {
    console.log('Hello PeopleService Provider');
  }

  load(){
    if(this.data1){
      return Promise.resolve(this.data1);
    }

    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=100')
      .map(res=> res.json())
      .subscribe(data=>{
        this.data1 = data.results;
        resolve(this.data1);
      });
    })
  }

}
