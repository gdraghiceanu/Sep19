import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'button[appCounts]'
})
export class CountsDirective {

  counts = 0;

  constructor(private el: ElementRef<HTMLElement>) { }

  @HostListener('click', ['$event.target']) onClick(btn) {

    console.log(`Number of Counts: ${this.counts++}`);
    
    if(this.counts % 2 ) {
      this.el.nativeElement.style.backgroundColor = 'blue';
    } else {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }

}
