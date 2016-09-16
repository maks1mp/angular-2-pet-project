import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { loginService } from './service';
import { User } from './user';


@Component({
  selector: 'registration-login',
  template: `
            <div>
              <label [class.ok-field]="valid_field=='valid'" [class.err-field]="valid_field=='invalid'">Login:<input type="text" #name></label> <br>
              <label [class.ok-field]="valid_field=='valid'" [class.err-field]="valid_field=='invalid'">Password:<input type="password" #pass></label> <br>
              <button (click)="login(name.value, pass.value)">LOGIN</button>
              <button routerLink="/registration">REGISTRATION</button>
            </div>
            <list></list>
            `,
})

export class LoginComponent { 
  valid_field:any = null;
  constructor(
    private LoginService:loginService,
    private router:Router
  ){ }
  
  login(name:string, pass:string){
    this.LoginService
          .login({
                  login:name,
                  password:pass,
                  id: Math.round(Math.random()*1000)
                })
          .then((user)=>{ 
            if (!!user) {
              this.valid_field = 'valid';
              let link = [`/tasks`, user.login];
              this.router.navigate(link);
            } else {
              this.valid_field = 'invalid';
            };
          });
  }
}