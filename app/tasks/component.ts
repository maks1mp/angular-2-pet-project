import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TasksService } from './service';


@Component({
  selector: 'tasks',
  template: `
            <button (click)="goBack()">BACK TO LOGIN</button>
            <h1>You log in as {{author}}</h1>
            <div>
              ADD TASK <input type="text" #new_task> <button (click)="addTask(new_task.value)">ADD TASK</button>
              <hr>
              <ul>
                <li *ngFor="let task of base">{{task.todo}}</li>
              </ul>
            </div>
            `
})

export class UserTasks implements OnInit { 
  author:string;
  base:any;
  constructor(
    private tasksService:TasksService,
    private router:ActivatedRoute
  ){ }  
  
  ngOnInit():void{
    this.router.params.forEach((params:Params) => {
      let name = params['name'];
      this.tasksService.get().then((tasks:any)=>{
        let tasks_base = tasks.find((task:any) => { return task.author === name});
        this.author = tasks_base.author;
        this.base = tasks_base.tasks;
      });
    });
  }
  addTask(todo:string):void{
    this.tasksService.post(todo, this.author);
  }
  goBack():void {
    window.history.back();
  }
}