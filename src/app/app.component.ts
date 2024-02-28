import { Component} from '@angular/core';
import { TodoService } from './todo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // standalone: true,
  

})
export class AppComponent {
  title = 'ang';

  
  newTask: string = '';

  constructor(private todoService: TodoService) {}

  addTask() {
    if (this.newTask.trim() !== '') {
      this.todoService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  getTasks() {
    return this.todoService.getTasks();
  }
 

  
  }
