import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appWife]',
  standalone: true
})
export class WifeDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.background="green";
  }

}
