import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from "../shared/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];

  readonly APIUrl: string = "http://localhost:3000/api/customer";

  constructor(private http: HttpClient) { }

  postCustomer(c: Customer) {
    return this.http.post(this.APIUrl, c);
  }

  getCustomer() {
    return this.http.get(this.APIUrl);
  }

  getCustomerById(id: string) {
    return this.http.get(this.APIUrl + `/${id}`);
  }

  putCustomer(c: Customer) {
    return this.http.put(this.APIUrl + `/${c._id}`, c);
  }

  deleteCustomer(id: string) {
    return this.http.delete(this.APIUrl + `/${id}`);
  }
}