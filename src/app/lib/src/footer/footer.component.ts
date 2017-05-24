import { Component, OnInit, ElementRef } from '@angular/core';
import { css } from './footer.component.css';
@Component({
  selector: 'n3k-footer',
  template: `
    <div class='footer'>
      <ng-content></ng-content>
    </div>
  `,
  styles: [ css ]
})
export class FooterComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
    
  }

}
