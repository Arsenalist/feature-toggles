import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appTogglePoint]',
  exportAs: 'appTogglePoint'
})
export class TogglePointDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
