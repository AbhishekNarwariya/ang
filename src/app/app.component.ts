import { Component, HostListener} from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { BehaviorSubject, Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'

  styles:['h1{color:green}']
})
export class AppComponent {
  title = 'ang';

  ngOnInit(){
    const mysub = new BehaviorSubject(4)

    mysub.next(2)

    mysub.next(2)

    mysub.next(6)

    let s = mysub.subscribe(res=>{
      return console.log(res)  // yahan ek value print hoga default
    })

    mysub.next(4) // yahan print hoga kyunki after subscribe print hoga

    s.unsubscribe()

    mysub.next(45)  // print nahin hoga kyunki unsubscribe kar diya

  }

  }
  
 




