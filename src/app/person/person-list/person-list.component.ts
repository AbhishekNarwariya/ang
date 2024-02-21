import { Component } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {
  person: any


  constructor() {

  }
  ngOnInit() {
    this.person = [
      { name: "abhishek", country: "India" },
      { name: "tillu", country: "India" },
      { name: "gullu", country: "United States" },
      { name: "kakka", country: "India" }
    ]
  }


}
