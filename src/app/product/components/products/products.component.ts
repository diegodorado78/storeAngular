import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../core/services/products.service';
import {Product} from '../../../product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products: Product [] = [];
clickProduct(id: Event){// @output emite el id
 console.log(id); // preguntar a juan input y output
  }
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
 this.fetchProducts();
  }

  fetchProducts(){
    //cuando trae la data de un server devuelve un observable al que me debo suscribir
    //para obtener la resp (un array de products )
    this.productsService.getAllProducts() //hago peticion para traer datos con el metodo getAllProducts del service
    .subscribe(products=>{//asigno al array productos la respuesta del server
     this.products=products;//debo tipar la respuesta que viene del api con <product[]>
    })
  }
}
