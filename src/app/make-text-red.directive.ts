import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMakeTextRed]'
})
export class MakeTextRedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color="red"
   }

}
