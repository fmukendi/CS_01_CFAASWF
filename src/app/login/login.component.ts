import { Component, OnInit, HostBinding } from '@angular/core';
// import {  AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public af: AngularFireAuth, private router: Router) {
    if(this.af.auth) {
      this.router.navigateByUrl('/members');
    }
    /*   this.af.auth.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    }); */

  }

  loginFb() {
    /* this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      }) */

      this.af.auth.signInWithPopup(
        new firebase.auth.FacebookAuthProvider()
      ).then(
          (success) => {
          this.router.navigate(['/members']);
        }).catch(
          (err) => {
          this.error = err;
        })
  }

  loginGoogle() {
    /* this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      }) */

      this.af.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      ).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }


  ngOnInit() {
  }

}
