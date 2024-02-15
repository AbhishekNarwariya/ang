import { Component, HostListener} from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'

  styles:['h1{color:green}']
})
export class AppComponent {
  title = 'ang';

  ngOnInit(){
    const mysub = new Subject()

    mysub.next(1)

    


    mysub.subscribe(res=>{
      return console.log(res)  // yahan kuch print nahin hoga 
    })

    mysub.next(2) // yahan print hoga kyunki after subscribe print hoga


  }

  }
  
 




