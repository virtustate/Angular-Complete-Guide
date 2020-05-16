import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) { }
  //@HostListener('click')  toggleOepn() {this.isOpen=!this.isOpen;}
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  @HostBinding('class.open') isOpen: boolean = false;
}
