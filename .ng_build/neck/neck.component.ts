import { Component, OnInit, ElementRef } from '@angular/core';
import { PositionService } from '../position.service'

@Component({
  selector: 'n3k-neck',
  template: `
    <div class='neck'>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      overflow: hidden;
      display: block; }
  `]
})
export class NeckComponent implements OnInit {

  constructor(public el: ElementRef, private ps: PositionService) { 
    ps.addNeck(this);
  }

  ngOnInit() {
  }

}


