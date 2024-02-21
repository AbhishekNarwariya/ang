import { Component } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  company: any


  constructor() {

  }
  ngOnInit() {
    this.company = [
      { name: "HCL", country: "India" },
      { name: "TCS", country: "India" },
      { name: "Bipro", country: "United States" },
      { name: "Cybage", country: "India" }
    ]
  }

}
