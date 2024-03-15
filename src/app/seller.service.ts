import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private httpclient:HttpClient) { }

  userSignUp(data:any){
    return this.httpclient.post('http://localhost:3000/seller', data)
  }
}
