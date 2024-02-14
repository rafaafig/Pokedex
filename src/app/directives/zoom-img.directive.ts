import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoomImg]'
})
export class ZoomImgDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.zoomImage(1.2);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.zoomImage(1);
  }

  private zoomImage(scale: number) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      `scale(${scale})`
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transition',
      'transform 0.3s ease'
    );
  }
}

