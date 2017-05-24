import { Component, OnInit, ElementRef } from '@angular/core';
import { css } from './header.component.css';

@Component({
  selector: 'n3k-header',
  template: `
    <div class='header'>
      <ng-content></ng-content>
    </div>
  `,
  styles: [ css ]
})
export class HeaderComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

}
