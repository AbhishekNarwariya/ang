import { Component } from '@angular/core';
import { MsgService } from '../msg.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
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
