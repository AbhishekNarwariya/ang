import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
  {path:'company',component:CompanyComponent, 
children:[
  {path:'company-list', component:CompanyListComponent}
]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
