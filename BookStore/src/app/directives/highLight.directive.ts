import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appMyHightlight]'
})
export class HighLightDirective {

    @Input('appMyHightlight') myColor: string;

    constructor(private el: ElementRef<HTMLElement>) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.coloreaza(this.myColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.coloreaza(null);
    }

    coloreaza(value: string): void {
        this.el.nativeElement.style.color = value;
        this.el.nativeElement.style.cursor = 'pointer';
    }

}