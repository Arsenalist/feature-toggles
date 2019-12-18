import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appTogglePoint]'
})
export class TogglePointDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
