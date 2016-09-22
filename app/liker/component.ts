import { Component } from '@angular/core';
import { Girl } from './girl';
import { Model } from './model';

@Component({
  selector: 'liker',
  template: `<div>
              <h1>Add to liker</h1>
              <label>
                Name:<input type="text" #girl>
              </label>
              <br>
              <button (click)="addToList(girl)">Add to list</button>
              <br>
              <row-liker *ngFor="let girl of sortArticles()" [girl]="girl"></row-liker>
            </div>`,
  
})

export class GirlLiker {
  girls:Girl[]; 
  addToList(elem:HTMLInputElement){
    this.girls.push(new Model(elem.value, 0));
    elem.value = '';
  }
  constructor(){
    this.girls = [
       new Model('Wkyra', 20),
       new Model('Varvara', 15)
    ];
  }
  sortArticles(){
    return this.girls.sort((a,b) => b.likes - a.likes);
  }
}