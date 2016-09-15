import { Injectable } from '@angular/core';

import { TASKS } from './task';

@Injectable()

export class TasksService {
  get():Promise<any>{
    return Promise.resolve(TASKS);
  }
  
  post(todo:string ,author:string):Promise<any>{
    let active_user = TASKS.find((base)=>{
      console.log(base);
      return base.author === author;
    });
    active_user.tasks.push({todo:todo});
    return Promise.resolve(todo);
  }
}