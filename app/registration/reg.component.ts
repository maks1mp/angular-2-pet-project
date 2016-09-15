import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { loginService } from './service';

import { USERS } from './base';

@Component({
  selector: 'reg',
  template: `
            <div>
              <label>ENTER NAME:<input type="text" #new_user_name></label> <br>
              <label>ENTER PASSWORD:<input type="password" #new_user_pass></label> <br>
              <label>DUPLICATE PASSWORD:<input type="password" #new_user_pass_d></label> <br>
              <button (click)="addNewUser(new_user_name.value, new_user_pass.value, new_user_pass_d.value)">REGISTER USER</button>
              <button routerLink="/login">TO LOGIN</button>
            </div>
            `
})

export class RegistrationComponent {
  constructor(
    private LoginService:loginService,
    private router:Router
  ){ }
  
  addNewUser(login, pass, pass_d):void{
    
  }
}

