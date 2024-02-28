import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasks: any[] = [];

  

  constructor(){
  }


  addTask(name: string) {
    this.tasks.push({ name, completed: false });
  }

  getTasks() {
    return this.tasks;
  }
}
