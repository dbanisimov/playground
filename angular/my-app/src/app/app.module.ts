import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const app = firebase.initializeApp({
      apiKey: "AIzaSyBehpN9M4BSsxbryYdizPCVnGz4nzxcv_c",
      authDomain: "havefun-1d170.firebaseapp.com",
      databaseURL: "https://havefun-1d170.firebaseio.com",
      projectId: "havefun-1d170",
      storageBucket: "havefun-1d170.appspot.com",
      messagingSenderId: "473315497267"
    });
    const auth = app.auth();
    console.log(auth);
  }
}
