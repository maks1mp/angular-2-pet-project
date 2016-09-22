import { Component, Input } from '@angular/core';
import { Girl } from './girl';


@Component({
  selector: 'row-liker',
  template: `
            <div *ngIf="girl">
              <hr>
              <h2>NAME: {{girl.name}}</h2>
              <h2>LIKES: {{girl.likes}}</h2>
              <button (click)="girl.like()">+</button> <button (click)="girl.dislike()">-</button>
              <hr>
            </div>
            `,
  
})

export class RowCopmonent {
  @Input() girl:Girl;

}