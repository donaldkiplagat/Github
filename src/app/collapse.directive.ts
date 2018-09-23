import { Directive,Input } from '@angular/core';

@Directive({
  selector: '[appCollapse]',
  exportAs: 'appCollapse',
  host: {'[class.collapse]': 'true', '[class.show]': '!collapsed'}})

  export class CollapseDirective {
    /**
    * A flag indicating collapsed (true) or open (false) state.
    */
    @Input('appCollapse') collapsed = false;


  constructor() { }

}
