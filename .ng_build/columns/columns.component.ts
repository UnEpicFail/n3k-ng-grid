import { Component, 
  AfterContentInit, 
  ContentChild, 
  Input, 
  ElementRef,
  OnDestroy
} from '@angular/core';
import { Column1RefDirective } from './column-1-ref.directive'
import { Column2RefDirective } from './column-2-ref.directive'
import { Column3RefDirective } from './column-3-ref.directive'
import { PositionService } from '../position.service'

@Component({
  selector: 'n3k-columns',
  template: `
    <div class='columns-{{columns}} context-{{context}}' [style.height]='height'>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    @import url(columns-1.css);
    @import url(columns-2.css);
    @import url(columns-3.css);
    :host {
      display: block;
      overflow: hidden; }

    :host /deep/ .column {
      box-sizing: border-box;
      position: fixed; }

    :host /deep/ .column-1 {
      background-color: red; }

    :host /deep/ .column-2 {
      background-color: blue; }

    :host /deep/ .column-3 {
      background-color: green; }
  `]
})
export class ColumnsComponent implements AfterContentInit , OnDestroy{

  columns: number
  height: string
  heights: number[] = [0]

  positions
  head 
  neck 
  footer
  body 
  scrollPosition

  @Input('context')
  context: string

  @ContentChild(Column1RefDirective)
  column1: Column1RefDirective

  @ContentChild(Column2RefDirective)
  column2: Column1RefDirective

  @ContentChild(Column3RefDirective)
  column3: Column1RefDirective

  constructor(public el: ElementRef, private ps: PositionService) {
    ps.addColumn(this)    
  }

  ngAfterContentInit() {
    this.setHeight();
    window.addEventListener('resize', ()=>{
      this.setHeight()
    });
  }

  setHeight() {
    if ( typeof this.column3 !== 'undefined') {
      this.columns = 3;
      setTimeout(()=>{
        this.heights = [
          this.column1.getHeight(), 
          this.column2.getHeight(), 
          this.column3.getHeight(), 
        ]
        this.height = this.heights.sort().slice(-1)[0] + 'px'
      }, 1)  
    } else if ( typeof this.column2 !== 'undefined') {
      this.columns = 2;
      setTimeout(()=>{
        this.heights = [
          this.column1.getHeight(), 
          this.column2.getHeight(), 
        ]
        this.height = this.heights.sort().slice(-1)[0] + 'px'
      }, 1)    
    } else if ( typeof this.column2 !== 'undefined') {
      this.columns = 1;
      setTimeout(()=>{
        this.heights = [
          this.column1.getHeight(), 
        ]
        this.height = this.heights.sort().slice(-1)[0] + 'px'
      }, 1)    
    } else {
       return;
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', ()=>{
      this.setHeight()
    })
  }

}
