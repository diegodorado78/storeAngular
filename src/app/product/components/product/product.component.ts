import {Component,
 Input,
 Output,
 EventEmitter,
 OnInit,
 DoCheck,
 OnDestroy }
 from '@angular/core' // OnChanges, SimpleChanges
// tipo de declaracion que me define (estructura) y elementos de un compomnetne
import {Product} from '../../../product.model';
import { CartService } from './../../../core/services/cart.service';

@Component({
 // metadata del decorador aclara donde y como llamar al componente
 selector: 'app-product',
 templateUrl: '../product/product.component.html',
 styleUrls: ['../product/product.component.scss']
})
export class ProductComponent implements DoCheck, OnInit, OnDestroy{ // OnChanges

@Input() product: Product = Input(); // para resolver problema de strict mode
@Output() productClicked: EventEmitter<any> = new EventEmitter<any>();
// primer metodo que se ejecuta
today = new Date();
constructor(
  private cartService:CartService//inserto el serv como inyeccion de dep
){
  console.log('1.metodo constructor')
 }
 // segundo metodo, detecta estado anterior y nuevo
//  ngOnChanges(changes:SimpleChanges){
// console.log('2.metodo on changes')
// console.log(changes)
//  }
// tercer metodo, se ejecuta cuando el comp esta ya puesto en pantalla
ngOnInit(){// ideal para hacer llamado a servicios de datos(apis)
 console.log('3.metodo onInit');
}
// ndDoCheck es la forma custom de hacer revision en cambios(ngOnChanges)
ngDoCheck(){
 console.log('4.DoCheck');

}
ngOnDestroy(){
 console.log('5.Destroy del elemento');
}
// al clicar en button se ejecuta addcart y este emite el evento
// que a su vez ejecuta clickProduct(id:number) en el componente padre Products
addCart(){
//  console.log('agregado al carrito de compras');
//  this.productClicked.emit(this.product.id);
//le paso el producto que quiero agregar
 this.cartService.addCart(this.product);
}
}
