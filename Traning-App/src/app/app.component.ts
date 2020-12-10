import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  isAuth = false;
  authSubscription: Subscription;

  constructor( private authService: AuthService){}

ngOnInit(){
  this.authService.initAuthListener();
  this.authSubscription = this.authService.authChange.subscribe(authStatus => {
    this.isAuth = authStatus;
  });
}

onLogout(){
  this.authService.logOut();

}

ngOnDestroy(){
  this.authSubscription.unsubscribe();
}

}