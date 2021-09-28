import { Injectable } from '@angular/core';
import {Product} from '../../../app/product.model';
import { HttpClient } from '@angular/common/http';
//importo el archivo de enviroment par atener disponible la var
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
//products : Product[] =[]  //declaro que el array va a ser tipo products only
  constructor( private http:HttpClient ) { }
  getAllProducts(){
    //me comunico con la url para devolver la data tipada con un array de interfaz Product
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }
  //uso la url y concateno el id con ``
   // @param id Identificador del producto a buscar
   //GET
  getProduct(id:string){
    return this.http.get<Product>(`${environment.url_api}/products/${id}`) // busca y devuelve el item del param id
  }
//metodo para crear un producto
//@param product => Producto a ser creado
//POST
  createProduct(product:Product){
    //metodo recibe una (url) y un cuerpo(objeto product)
    //en el cuerpo de la peticion envio los datos que queremos actualizar
    return this.http.post(`${environment.url_api}/products`,product)
  }

  //PUT
  //para hcer update necesito la url y el id del elemento a editar
  //paso como param el id y los datos parciales del tipo Product
  //el update lo hago desde el productDetail.ts
  updateProduct(id:string,changes: Partial<Product>){
    return this.http.put(`${environment.url_api}/products/${id}`,changes)
  }
  //DELETE
  //paso como param solo la url con el id que deseo eliminar
  deleteProduct(id:string){
return this.http.delete(`${environment.url_api}/products/${id}`)
  }
}
