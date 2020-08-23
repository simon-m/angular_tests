import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { Comp1Service } from '../comp1.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[];

  getProducts() {
    this.comp1Service.getProducts()
      .subscribe(products => this.products = products.slice(1, 5));
  }

  constructor(private comp1Service: Comp1Service) { }

  ngOnInit(): void {
    this.getProducts();
  }

}
