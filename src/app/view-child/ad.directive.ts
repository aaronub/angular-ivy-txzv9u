import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAd]',
})
export class AdDirective {
  // Anchor Directive: Will tell Angular where our insertion point is
  // Allows us reference to the container of a View
  constructor(public viewContainerRef: ViewContainerRef) {}
}
