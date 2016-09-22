import { Girl } from './girl';

export class Model {
  name:string;
  likes:number;

  constructor(title:string, likes:number){
    
    this.name = title;
    this.likes = likes;

  }

  like(){
    this.likes+=1;
  }
  
  dislike(){
    this.likes-=1;
  }
}