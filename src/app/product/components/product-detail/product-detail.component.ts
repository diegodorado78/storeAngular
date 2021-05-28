import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '../../../core/services/products.service';
import {Product} from '../../../product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
product: Product = {}as Product;
  constructor(
        private route: ActivatedRoute, private productsService: ProductsService // inyeccion de dependencias activatedroute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id; // guardo el id que pasamos como param para usarlo en el metodo
      this.product = this.productsService.getProduct(id) as Product; // as product x indicar el tipo de resp que espero al llamar al service
      // llamo al metodo get product del service
    }); //
  }

}
