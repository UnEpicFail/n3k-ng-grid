import { Component, OnInit, ElementRef } from '@angular/core';
import { PositionService } from '../position.service'
import { css } from './neck.component.css'

@Component({
  selector: 'n3k-neck',
  template: `
    <div class='neck'>
      <ng-content></ng-content>
    </div>
  `,
  styles: [css]
})
export class NeckComponent implements OnInit {

  constructor(public el: ElementRef, private ps: PositionService) { 
    ps.addNeck(this);
  }

  ngOnInit() {
  }

}


