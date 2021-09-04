import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit {
  //array de objetos tipo Product inicializado vacio
   products:Product[] =[];
   //debo prepar las columnas a renderizar en la tabla material
   displayedColumns:string[]=['id','title','price','actions']

  constructor( //inyectado como var privada
    private productService: ProductsService
  ) { }

  ngOnInit(): void {//onInit, better place to cal db and render
    //debo ejecutar el metodo apenas se pinte el componente
    this.fetchProducts();
  }
  //metodo para hacer get por medio del metodo get del service
fetchProducts(){
  this.productService.getAllProducts()
  //me suscribo para que este escuchando cambios y actualice el array
  .subscribe(products=>{//esta const recibiendo products y pasandolos a la var this.products
    this.products=products;
  });
}
  //metodo para eliminar por medio del metodo get del service
deleteProduct(id:string){
  this.productService.deleteProduct(id)
  .subscribe(rta=>{
    // console.log(rta) mirar resultado de la llamada
    this.fetchProducts(); //para volver a cargar los productos y actualizar lista
    //implemetar otra forma para volver a cargar (pista: con los indices)
  })
}
}
