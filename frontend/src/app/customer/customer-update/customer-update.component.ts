import { Component, OnInit } from '@angular/core';

import { Customer } from "../../shared/customer.model";
import { CustomerService } from "../../shared/customer.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  c: Customer;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.c = {
      _id: "",
      CustomerId: "",
      FullName: "",
      Address: ""
    };
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.customerService.getCustomerById(params['id']).subscribe(res => {
        this.c = res as Customer;
      });
    });
  }

  updateCustomer(updateCustomerForm: { value: Customer; }) {
    this.customerService
      .putCustomer(updateCustomerForm.value)
      .subscribe(() => {
        this.router.navigate(["/customer"]);
      });
  }

  backToCustomerIndex() {
    this.router.navigate(["/customer"]);
  }
}