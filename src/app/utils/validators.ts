//creo validaciones personalizadas
import { AbstractControl } from "@angular/forms";

export class CustomValidators {
  //pongo el metodo estatico para que este disponible sin instanciar
static isPriceValid(control:AbstractControl){
const value= control.value;
console.log(value);//si hay un error para ver que esta llegando
if (value >10000){
  return {price_invalid:true}
}
//si todo esta bien, retorna nulo
return null;
}

}
