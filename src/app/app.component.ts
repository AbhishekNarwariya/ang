import { Component, HostListener} from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'

  styles:['h1{color:green}']
})
export class AppComponent {
  title = 'ang';

  ngOnInit(){
    const mysub = new ReplaySubject(4)

    mysub.next(2)

    mysub.next(2)

    mysub.next(6)

    mysub.next(1)
    mysub.next(12)
    mysub.next(11113)

    let s = mysub.subscribe(res=>{
      return console.log(res)  // yahan ek value print hoga default
    })

    mysub.next(4) // yahan print hoga kyunki after subscribe print hoga
    mysub.next(6)
    mysub.next(9)
    s.unsubscribe()

    mysub.next(45)  // print nahin hoga kyunki unsubscribe kar diya

  }

  }
  
 




