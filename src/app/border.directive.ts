import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.border = '2px solid red';
    this.elementRef.nativeElement.style.borderRadius = '20%';
    this.elementRef.nativeElement.style.padding = '5px';
  }

}