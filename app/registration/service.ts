import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './base';

@Injectable()

export class loginService {
  login(entered:User):Promise<any>{
    return Promise.resolve(USERS.find(user => user.login==entered.login && entered.password===user.password));
  }
}