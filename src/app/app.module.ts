
// Angular System Module 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// External Module 
import { AngularFireModule } from 'angularfire2';
/* import { AngularFireDatabaseModule, 
         AngularFireDatabase, 
         FirebaseListObservable } from 'angularfire2/database'; */
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// My Modules 

// My Compononent
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

// My Services

// Routes
import { routes } from './app.routes';

// Security

import { AuthGuard } from './auth.service';

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
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    // External Modules
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    // My Modules

    // Routes
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
