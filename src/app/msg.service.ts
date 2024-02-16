import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  name = new BehaviorSubject("abhishek narwariya")


  constructor() { 

    
  }
}
