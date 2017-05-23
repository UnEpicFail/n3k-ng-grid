import { Component, OnInit, ElementRef, ContentChild, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NeckComponent } from '../neck/neck.component';
import { ColumnsComponent } from '../columns/columns.component';
import { FooterComponent } from '../footer/footer.component';

import { PositionService } from '../position.service'

@Component({
  selector: 'n3k-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @ContentChild(HeaderComponent)
  header: HeaderComponent;

  neck: NeckComponent;

  columns: ColumnsComponent;

  @ContentChild(FooterComponent)
  footer: FooterComponent;
  
  body;
  scrollPosition;

  positions;

  constructor(private el: ElementRef, private ps: PositionService) {
    ps.columns.subscribe(columns => {
      this.columns = columns
    })
    ps.neck.subscribe(neck => {
      this.neck = neck
    })
  }

  ngOnInit() {

    this.body  = document.querySelector('body');
    this.scrollPosition = this.body.scrollTop;

    this.positions = this.debounce(() => {
      let data = {
        sc:       this.body.scrollTop,
        border:   this.header.el.nativeElement.offsetHeight + this.neck.el.nativeElement.offsetHeight,
        footer:   this.footer.el.nativeElement.offsetHeight,
        columns:  this.columns.el.nativeElement.offsetHeight,
        v:        window.innerHeight,
        sd:       this.body.scrollTop - this.scrollPosition
      }

      this.checkColumn(this.columns.column1, data);
      this.checkColumn(this.columns.column2, data);
      this.checkColumn(this.columns.column3, data);
      return true

    }, 10)
    window.addEventListener('scroll', this.positions);
    //window.addEventListener('resize', this.positions);
    
  }
  checkColumn(column, data) {


    if(column.ownScroll < 0)
    {
      // column.ownScroll = undefined
      column.setOwnScroll(undefined)
    }

    var SC = (column.ownScroll || data.sc);
    var top = data.border - SC;
    var V = (data.sc + data.v < data.border + data.columns) ? data.v : data.v - (data.sc + data.v - (data.border + data.columns));


    if ((top <= 0 && column.el.nativeElement.offsetHeight <= V) || (top > 0 && column.ownScroll <= data.border))
    {


    
      // column.style.bottom = 'auto';
      // column.style.top = (data.border - data.sc > 0) ? data.border - data.sc : 0;

      column.setPostion((data.border - data.sc > 0) ? data.border - data.sc + 'px' : 0, 'auto');

      // column.ownScroll = (column.ownScroll || data.sc);
      column.setOwnScroll((column.ownScroll || data.sc));

      if (data.sd > 0) {
        // column.ownScroll += data.sd;
        column.setOwnScroll(column.ownScroll + data.sd)
      }

      if (data.sd < 0) {
        // column.ownScroll = (this.closeEq (column.ownScroll, data.sc, Math.abs(data.sd))) ? undefined : column.ownScroll;
        column.setOwnScroll((this.closeEq (column.ownScroll, data.sc, Math.abs(data.sd))) ? undefined : column.ownScroll);
      }

      return;
    }

    if (top < 0 && column.el.nativeElement.offsetHeight + data.border <= SC + V)
    {

      // column.style.top = 'auto';
      // column.style.bottom = data.v - V;

      column.setPostion('auto', data.v - V + 'px');

      // column.ownScroll = (column.ownScroll || data.sc)
      column.setOwnScroll((column.ownScroll || data.sc));

      if (data.sd < 0) {
        // column.ownScroll += data.sd;
        column.setOwnScroll(column.ownScroll + data.sd);
      }

      if (data.sd > 0) {
        // column.ownScroll = (this.closeEq (column.ownScroll, data.sc, Math.abs(data.sd))) ? undefined : column.ownScroll;
        column.setOwnScroll ((this.closeEq (column.ownScroll, data.sc, Math.abs(data.sd))) ? undefined : column.ownScroll);
      }

      return;
    }

    // column.ownScroll = (column.ownScroll) ? (this.closeEq (column.ownScroll, data.sc, Math.abs(data.sd))) ? undefined : column.ownScroll + data.sd : undefined;
    column.setOwnScroll((column.ownScroll) ? (this.closeEq (column.ownScroll, data.sc, Math.abs(data.sd))) ? undefined : column.ownScroll + data.sd : undefined);

    // column.style.bottom = 'auto';
    // column.style.top = top;
    column.setPostion(top+'px', 'auto');


  }

  closeEq (a, b, d) {
    return (Math.abs (a - b) <= d)
  }

  debounce (func, wait, immediate?) {
  	let timeout;
  	return function() {
  		let context = this, args = arguments;
  		let later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		let callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  };
}
