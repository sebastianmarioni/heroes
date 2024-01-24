import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }


  messages:string[]=[];

  add(messaje:string):void{
    this.messages.push(messaje);
  }

  clear(){
    this.messages = [];
  }
}
