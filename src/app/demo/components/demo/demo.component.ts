import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }
  title:string = '';
  numero = 10;
  names = ['diego', 'dorado', 'pismag'];

   addNames(title: string){
    this.names.push(title);
  }
  deleteItem(index: number){
    this.names.splice(index, 1); // splice para borrar un elemento a partir de la posicion que indico
    // si pongo otro parametro seria algo que agrega en lugar del que borro
  }
  ngOnInit(): void {
  }

}
