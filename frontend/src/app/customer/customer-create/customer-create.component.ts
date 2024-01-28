import { Component } from '@angular/core';
import { CustomerService } from "../../shared/customer.service";
import { Customer } from "../../shared/customer.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent {
  c: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
    this.c = {
      _id: "",
      CustomerId: "",
      FullName: "",
      Address: ""
    };
  }

  addCustomer(frmCustomer: { value: Customer; }) {
    this.customerService.postCustomer(frmCustomer.value).subscribe(res => {
      this.router.navigate(["/customer"]);
    });
  }

  backToCustomerIndex() {
    this.router.navigate(["/customer"]);
  }
}