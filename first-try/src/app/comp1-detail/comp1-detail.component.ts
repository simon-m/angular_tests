import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { Comp1Service } from '../comp1.service';

@Component({
  selector: 'app-comp1-detail',
  templateUrl: './comp1-detail.component.html',
  styleUrls: ['./comp1-detail.component.css']
})
export class Comp1DetailComponent implements OnInit {

  @Input() product: Product;

  goBack() {
    this.location.back();
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.comp1Service.getProduct(id).
        subscribe(product => this.product = product);
  }

  constructor(private route: ActivatedRoute,
              private comp1Service: Comp1Service,
              private location: Location) { }

  ngOnInit(): void {
    this.getProduct();
  }

}


