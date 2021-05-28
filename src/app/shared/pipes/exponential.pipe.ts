import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {
// metodo implementado por default porque un pipe transforma
  transform(value: number): any {// toma valor de entrada y args
    return Math.pow(value, 2); // recibe un number y lo devuelve al cuadrado

}
}