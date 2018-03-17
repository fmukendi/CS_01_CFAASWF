
// Angular System Module 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// External Module 
import { AngularFireModule } from 'angularfire2';

// My Modules 

// My Compononent
import { AppComponent } from './app.component';

// My Services

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDyIyUcHHKgMN0DAnPnWbrS6hCyGBEyakk",
  authDomain: "mukehouse-2fdc3.firebaseapp.com",
  databaseURL: "https://mukehouse-2fdc3.firebaseio.com",
  projectId: "mukehouse-2fdc3",
  storageBucket: "mukehouse-2fdc3.appspot.com",
  messagingSenderId: "131277299799"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    // External Modules
    AngularFireModule.initializeApp(firebaseConfig)
    // My Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
