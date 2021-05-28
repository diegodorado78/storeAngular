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
     this.products = this.productsService.getAllProducts(); // traigo a productos los datos con el metodo getAllProducts del service
    console.log(this.products);
  }

}
