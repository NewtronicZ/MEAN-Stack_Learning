import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CustomerService } from "./shared/customer.service";
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerReadComponent } from './customer/customer-read/customer-read.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CustomerCreateComponent,
    CustomerReadComponent,
    CustomerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
