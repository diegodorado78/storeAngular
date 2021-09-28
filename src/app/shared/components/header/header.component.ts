import { CartService } from './../../../core/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
//uso los operadores de rxjs praa transformar valor que llega con un pipe
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // total$ es tipo observable cuando agrego el $ al final
total$:Observable<number>;
  constructor(
   private cartService:CartService
  ) {
    //aqui me suscribo al observable que declare en el cart service
    this.total$=this.cartService.cart$
    .pipe(
      map(products=>products.length)
    );
    //AL USAR EL PIPE YA NO ME TENGO QUE SUSCRIBIR aqui sino en el TEMPLATE
    // .subscribe(total=>{
    //   console.log(total);
    //   this.total = total;// sera el numero de items del cart
    // })
   }

  ngOnInit(): void {
  }

}
