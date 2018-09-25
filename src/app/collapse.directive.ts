import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCollapse]',
})
  export class CollapseDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.textDecoration='line-through';
  }
}
