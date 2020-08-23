import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './fake_product_data';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class Comp1Service {
    
    /* getProducts(): Product[] {
        return PRODUCTS;
    }*/
    
    getProducts(): Observable<Product[]> {
        this.messagesService.add('Comp1Service: Fetched products');
        return of(PRODUCTS);
    }

    getProduct(id: number): Observable<Product> {
        this.messagesService.add(`Comp1Service: Fetched product id=${id}`);
        return of(PRODUCTS.find(product => product.id === id));
    }

  constructor(private messagesService: MessagesService) {}
}
