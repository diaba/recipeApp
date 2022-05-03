import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  private wasInside = false;

  @HostListener('click') toggleOpen() {
    console.log('toggleOpen');
    this.isOpen = !this.isOpen;
     this.wasInside = true;
  }
  @HostListener('document:click') clickout() {
    if (!this.wasInside) {
      this.isOpen = false;
    }
    this.wasInside = false;
  }
}
