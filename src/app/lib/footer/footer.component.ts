import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'n3k-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
    
  }

}
