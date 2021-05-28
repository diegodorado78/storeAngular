import { Injectable } from '@angular/core';
import {Product} from '../../../app/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
products : Product[] =[ { //declaro que el array va a ser tipo products only
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla',

    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }]
  constructor() { }
  getAllProducts(){
    return this.products;
  }
  getProduct(id:string){
    return this.products.find(item=>id=== item.id); // busca y devuelve el item del param id
  }
}
