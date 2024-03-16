import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private httpclient:HttpClient) { }

  userSignUp(data:any){
    return this.httpclient.post('http://localhost:3000/seller', data)
  }

  getData(): Observable<any> {
    return this.httpclient.get('http://localhost:3000/seller');
  }

  updateData(id: number, newData: any): Observable<any> {
    return this.httpclient.put(`http://localhost:3000/seller/${id}`, newData);
  }
}
