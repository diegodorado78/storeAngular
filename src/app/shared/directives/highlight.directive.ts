import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor ='red'; // tomo el e nativo y cambio su estilo

   }

}
