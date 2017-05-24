import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'n3k-footer',
  template: `
    <div class='footer'>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      overflow: hidden;
      display: block; }
  `]
})
export class FooterComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
    
  }

}
