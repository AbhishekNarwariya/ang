import { Book } from "./book";
import { InMemoryDbService } from 'angular-in-memory-web-api'

export class Testdata implements InMemoryDbService{
    createDb(){
        let bookDetails: Book[] = [
            {id:101, name:'angularjs', category:'learn', year:2010},
            {id:102, name:'angular1', category:'learn1', year:2011},
            {id:103, name:'angular2', category:'learn2', year:2012},
            {id:104, name:'angular3', category:'learn3', year:2013},
            {id:105, name:'angular4', category:'learn4', year:2014},
        ];
        return { books: bookDetails };
    }
   
}