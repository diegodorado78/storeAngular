import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
      mySwiper: Swiper = new Swiper('.swiper-container');

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){// muestra cuando los hijos de ya han sido renderizados
  this.mySwiper = new Swiper('.swiper-container');
}

}
