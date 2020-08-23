import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

import { Comp1Service } from '../comp1.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
    
  products: Product[];

  /*
  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.messagesService.add(`Comp1Component: product id=${product.id} selected"`);
  }
  */
  
  product: Product = {
    id: 0,
    name: "prod2",
    price: 10
  };
  
  getProducts(): void{
    this.comp1Service.getProducts()
        .subscribe(products => this.products = products);
  }

  constructor(private comp1Service: Comp1Service,
              private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.getProducts();        
  }
}


