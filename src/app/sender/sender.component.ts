import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
message: string;

  constructor(private dataservice:DataService){

  }

  sendMessage(message: string){
    this.dataservice.changeMessage(message);
  }
}
