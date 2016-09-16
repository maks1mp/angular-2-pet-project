import { Injectable } from '@angular/core';

import { TASKS } from './task';

@Injectable()

export class TasksService {
  get():Promise<any>{
    return Promise.resolve(TASKS);
  }
  
  post(todo:string ,author:string):Promise<any>{
    let active_user = TASKS.find((base)=>{ return base.author === author});
    active_user.tasks.push({todo:todo, id:Math.round(Math.random()*1000), done:false});
    return Promise.resolve(todo);
  }
  changeStatus(id:number, author:string, status:boolean):void{
    let active_user = TASKS.find((base)=>{  return base.author === author });
    let active_task = active_user.tasks.find((task)=> task.id === id );
    active_task.done = status;
  }
}