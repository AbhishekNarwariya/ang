import { Component, HostListener} from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { MsgService } from './msg.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'ang';

  student:string


  constructor(private msgservice:MsgService){
    

  }

  ngOnInit(){
    this.msgservice.name.subscribe(res=>{
      this.student =res
    })

   
  }

  }
  
 




