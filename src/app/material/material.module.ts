import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 // en este modulo insertamos lo que vayamos a usar de angular y si otro modulo(home) necesita eso
 // pues importamos este modulo
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    MatButtonModule
  ]

})
export class MaterialModule { }
