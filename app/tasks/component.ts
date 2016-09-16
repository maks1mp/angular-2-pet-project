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
                <li *ngFor="let task of base"><label [class.done]="task.done"> <input type="checkbox" [(ngModel)]="task.done" #checkbox (change)="change(checkbox.checked, task.id, author)">{{task.todo}}</label></li>
              </ul>
            </div>
            `,
  styles:[ `.done {text-decoration: line-through;} 
            ul {list-style: none;}
          ` ]
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
  change(value:any, id:number, author:string):void{
    if (value) {
      this.tasksService.changeStatus(id, author, true);
    } else {
      this.tasksService.changeStatus(id, author, false);
    }
  }
}