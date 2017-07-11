import { Injectable } from '@angular/core';

import { Product } from '../model/product';
import { PRODUCTS } from '../../assets/data/products';


@Injectable()


export class ProductService {

    getProducts(): Product[] {
        return PRODUCTS;
    }

    getProductsPromise(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }

    getProductsSlowly(): Promise<Product[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getProducts()), 2000);
        });
    }

}