import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBlMGiOPBQwnEJJTdYJTz3rb4_KLEFu110',
      authDomain: 'online-academy-ef192.firebaseapp.com',
    });
  }
}
