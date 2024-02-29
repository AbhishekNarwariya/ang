import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  private apiUrl = 'http://sahosoftweb.com/api/BrandLogo/GetAll';

  constructor(private httpclient:HttpClient) { }

  getLogos():Observable<any>{
    return this.httpclient.get(this.apiUrl)

  }
}
