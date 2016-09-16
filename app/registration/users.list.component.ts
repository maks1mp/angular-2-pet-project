import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { USERS } from './base';

@Component({
  selector: 'list',
  template: `
            <div>
              <hr>
              <button (click)="showList()">SHOW/HIDE USERS LIST</button>
              <ul>
                <li (click)="info(user)" *ngFor="let user of users" [class.hidden]="!show_list"> {{user.login}}</li>
              </ul>
            </div>
            `,
  styles: [
    `.hidden {display:none}`
  ]
})

export class UsersList { 
  constructor(
    private router:Router
  ){ }
  
  users = USERS;
  show_list:boolean = false;
  showList(){
    this.show_list ? this.show_list=false : this.show_list=true; 
  }
  info(user:User):void{
    let link = [`/info`, user.id];
    this.router.navigate(link);
  }
}