import { Component } from '@angular/core';
import { MsgService } from '../msg.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.css'
})
export class ParentsComponent {
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
