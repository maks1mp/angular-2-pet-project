import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './base';
import { TASKS } from '../tasks/task';

@Injectable()

export class loginService {
  login(entered:User):Promise<any>{
    return Promise.resolve(USERS.find(user => user.login==entered.login && entered.password===user.password));
  }
  new(entered:User):Promise<any> {
    USERS.push(entered);
    TASKS.push({
        author: entered.login,
        tasks: [ ],
    });
    return Promise.resolve('User created');
  }
  getInfo(id:number):Promise<any>{
    return Promise.resolve(USERS.find(user=> user.id===id));
  }
  
}