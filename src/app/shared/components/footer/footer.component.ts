import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
emailField:FormControl;//declaro la var emailField de tipo formControl y me la traigo del template
  constructor() {
    this.emailField = new FormControl('',[//segundo param los validadores
      Validators.minLength(4),
      Validators.maxLength(10),
      Validators.required

    ]);//hago una instancia del formControl(paso validaciones como param)
    //ESCUCHAR UN CAMBIO DINAMICAMENTE
    // this.emailField.valueChanges//valueChange es un prop de form control ycada ves que los datos cambien los escucho con el subscribe
    // .subscribe(value=>{
    //   console.log(value)
    // })
  }

  ngOnInit(): void {
  }
  sendMail(){//metodo que muestra en consola el valor cuando se hace click en enviar
    if(this.emailField.valid){//valid es un prop de form que verifica auto los validadores que defini
      console.log(this.emailField.value)
    }
  }

}
