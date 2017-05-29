import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: 'n3k-columns column-3'
})
export class Column3RefDirective{

  position = {
    top: 'auto',
    bottom: 'auto',
  }

  ownScroll:number = undefined


  constructor(private renderer: Renderer, private el: ElementRef) {
    renderer.setElementClass(el.nativeElement, 'column', true);
    renderer.setElementClass(el.nativeElement, 'column-3', true);
  }

  getHeight(){
    return window.getComputedStyle(this.el.nativeElement).display === 'none' ? 0 : this.el.nativeElement.offsetHeight
  }
  
  setPostion(top:string, bottom:string) {
    this.position.top = top
    this.position.bottom = bottom
    this.el.nativeElement.style.top = this.position.top
    this.el.nativeElement.style.bottom = this.position.bottom
  }

  setOwnScroll(scroll){
    this.ownScroll = scroll;
  }

}
