import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'n3k-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

}
