import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../shared/customer.service";
import { Customer } from "../../shared/customer.model";

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css']
})
  
export class CustomerReadComponent implements OnInit {
  delId: string = "";
  customers: Customer[];

  constructor(private CustomerService: CustomerService) {
    this.customers = [];
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.CustomerService.getCustomer().subscribe(res => {
      this.customers = res as Customer[];
    });
  }

  displayDeleteForm(id: string) {
    this.delId = id;
  }

  deleteCustomer() {
    this.CustomerService
      .deleteCustomer(this.delId)
      .subscribe(() => {
        this.getCustomers();
      });
  }
}