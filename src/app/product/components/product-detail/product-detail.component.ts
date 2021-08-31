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
        private route: ActivatedRoute,
        private productsService: ProductsService // inyeccion de dependencias activatedroute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id; // guardo el id que pasamos como param para usarlo en el metodo
      this.fetchProduct(id);// as product x indicar el tipo de resp que espero al llamar al service
    //   // llamo al metodo get product del service
    // }); /
  });
}

fetchProduct(id:string){
    this.productsService.getProduct(id) //hago peticion para traer datos con el metodo getAllProducts del service
    .subscribe(product=>{//asigno al array productos la respuesta del server
    this.product=product
    })
}
createProduct(){
  //emula la informacion traiga por un form
  const newProduct:Product={
    id:'222',
    title:'new product',
    image:'src/assets/images/banner-1.jpg',
    price:3000,
    description:' devs, ¿saben de alguna vacante para @angular dev?'
  }
  this.productsService.createProduct(newProduct)
  .subscribe(product=>{
    console.log(product)
  })
  //al hacer click en el boton se ejecuta el metodo que envia el body del producto
  //a la url por medio del metodo post
}
updateProduct(){
  // creo la const como partial de Product para que matche el type
  const updatedProduct:Partial<Product>={
    title:'product editado',
    price:45000,
    description:'edit'};
//paso el id del pdto a actualizar y el partial body
  this.productsService.updateProduct('2',updatedProduct)
  .subscribe(product=>{
    console.log(product)
  })
}
deleteProduct(){
  this.productsService.deleteProduct('2')
  .subscribe(rta=>{
    console.log(rta)//devuleve true o false si sale ok
  })
}

}
