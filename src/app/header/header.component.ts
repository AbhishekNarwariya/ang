import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  dataFromServer: any;

  newName: string = '';

  constructor(private sellerService:SellerService){

  }

  ngOnInit(): void {
    this.getDataFromServer();
  }
  signup(data:any):void{
    // console.log(data);

    this.sellerService.userSignUp(data).subscribe((result)=>{
      console.log(result);
      
    })

  }

  getDataFromServer(): void {
    this.sellerService.getData().subscribe((data) => {
      this.dataFromServer = data;
    });
  }

  updateUserName(id: number, newName: string): void {
    const updatedData = { name: newName }; // Assuming only 'name' needs to be updated
    this.sellerService.updateData(id, updatedData).subscribe((result) => {
      console.log(result); // Log the result if needed
      this.getDataFromServer(); // Refresh data after update
    });
  }

}
