import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Speakers } from '../pages/speakers/speakers';
import { Speaker } from '../pages/speaker/speaker';
import { Register } from '../pages/register/register';
import { AboutPage } from '../pages/about/about';
import { ShopPage } from '../pages/shop/shop';
import { AgendaPage } from '../pages/agenda/agenda';

import { DemosPage } from '../pages/demos/demos';
import { UsersPage } from '../pages/users/users';
import { ContactsPage } from '../pages/contacts/contacts';

import { GeoPage } from '../pages/geo/geo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Speakers,
    Speaker,
    AboutPage,
    ShopPage,
    AgendaPage,
    Register,
    DemosPage,
    UsersPage,
    ContactsPage,
    GeoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Speakers,
    AboutPage,
    ShopPage,
    AgendaPage,
    Speaker,
    Register,
    DemosPage,
    UsersPage,
    ContactsPage,
    GeoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
