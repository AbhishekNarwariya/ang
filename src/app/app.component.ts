import { Component} from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'ang';

  AllBooks:Book[]=[];

  AllBooks$:Observable<Book[]>;


  constructor(private _bookService:BookService){
  }

  ngOnInit(){
    this.getmyAllBooks()
   
  }
  getmyAllBooks(){
    this._bookService.getAllBooks().subscribe(res=>{
      this.AllBooks=res
    })

    this.AllBooks$ = this._bookService.getAllBooks()
  
  }

  
  }
