import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogoService } from './logo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // standalone: true,
  

})
export class AppComponent {
  title = 'ang';

  logos: any[] = [];

  isSuccess:true



  constructor(private logoservice:LogoService){}

  filterLogosByDate(date: string): void {
    this.logos = this.logos.filter((logo) => logo.createdOn === date);
  }

  ngOnInit(){
    this.logoservice.getLogos().subscribe((res:any)=>{
      if(res.isSuccess){
        this.logos = res.data

        this.filterLogosByDate('07/12/2019');
      }
      else {
        console.error('Error loading logos:', res.errors);
      }
    })

  }
  }

  


  