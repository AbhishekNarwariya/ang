import { Component } from '@angular/core';
import { MsgService } from '../msg.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
  student:string


  constructor(private msgservice:MsgService){
    

  }

  ngOnInit(){
    this.msgservice.name.subscribe(res=>{
      this.student =res
    })

    
  }
  pupdate(name:any){
    this.msgservice.name.next(name)

  }


}
