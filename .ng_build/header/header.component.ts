import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'n3k-header',
  template: `
    <div class='header'>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      overflow: hidden;
      display: block; }
  `]
})
export class HeaderComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

}
