import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private sellerService:SellerService){

  }
  signup(data:any):void{
    // console.log(data);

    this.sellerService.userSignUp(data).subscribe((result)=>{
      console.log(result);
      
    })

  }

}
