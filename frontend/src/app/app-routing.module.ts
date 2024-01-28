import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerReadComponent } from './customer/customer-read/customer-read.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "/customer/create", component: CustomerCreateComponent},
  {path: "customer", component: CustomerReadComponent},
  {path: "customer/update:id", component: CustomerUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
