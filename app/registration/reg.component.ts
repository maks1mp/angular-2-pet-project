import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { loginService } from './service';

import { USERS } from './base';

@Component({
  selector: 'reg',
  template: `
            <h2 *ngIf="message">{{message}}</h2>
            <div *ngIf="!message" [class.err-field]="error_field">
              <label>ENTER NAME:<input type="text" #new_user_name></label> <br>
              <label>ENTER PASSWORD:<input type="password" #new_user_pass></label> <br>
              <label>DUPLICATE PASSWORD:<input type="password" #new_user_pass_d></label> <br>
              <button (click)="addNewUser(new_user_name.value, new_user_pass.value, new_user_pass_d.value)">REGISTER USER</button>
            </div>
            <button routerLink="/login">TO LOGIN</button>
            `
})

export class RegistrationComponent {
  error_field:boolean = false;
  message:string;
  constructor(
    private LoginService:loginService,
    private router:Router
  ){ }
  
  addNewUser(login:string, pass:string, pass_d:string):void{
    if (pass.trim() === pass_d.trim() && pass.length>0 && pass_d.length>0) {
      this.LoginService.new({
        id:Math.round(Math.random()*1000),
        login: login, 
        password: pass,
      }).then((message:string) => {this.message = message});
    } else {
      this.error_field = true;
    }
  }
}

