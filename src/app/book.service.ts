import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl="/api/books";
  constructor(private _http:HttpClient) { 

  }

  getAllBooks():Observable<Book[]>{
    return this._http.get<Book[]>(this.bookUrl);
  }
}
