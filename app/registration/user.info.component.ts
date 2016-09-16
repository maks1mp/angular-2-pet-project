import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { loginService } from './service';

@Component({
  selector: 'info',
  template: `
              <div>
                ID:{{id}} User login: {{login}} | Password: {{password}}
              </div>
              <br>
              <button (click)="goBack()">BACK TO LOGIN</button>
            `
})

export class UserInfo implements OnInit {
  login:string;
  password:string;
  id:number;
  constructor(
    private router:ActivatedRoute,
    private LoginService:loginService
  ){ }
  goBack(){
    window.history.back();
  }
  ngOnInit():void{
    this.router.params.forEach((params:Params)=>{
      let id = +params['id'];
      this.LoginService.getInfo(id).then((user_data)=>{ 
        this.login = user_data.login;
        this.password = user_data.password;
        this.id = user_data.id;
      });
    })
  }
}
