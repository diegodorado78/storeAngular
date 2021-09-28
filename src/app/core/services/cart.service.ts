import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
products:Product[]=[];
//creo una instancia para tener un control del flujo de datos
//creo una instancia tipo lista de Product
//se inicializa (state inicial) en un array en vacio ([])
private cart = new BehaviorSubject<Product[]>([]);
//var publica tipo observable para ser preguntada por any
//se puedan suscribir y consulta cambios en real time
cart$ = this.cart.asObservable();//se comporta como observable
  constructor() { }
  addCart(product:Product){
    //uso el spread operatos par aevitar usar push y evitar
    //generar errores de inmutablidad(ref al mismo array)
    //cada que se acciona el metodo se crea una ref del arreglo
    this.products=[...this.products,product]
    this.cart.next(this.products)//notifico a los comp suscritos que hubo un cambio(paso la new copia del array)
  }
}
