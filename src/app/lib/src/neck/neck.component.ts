import { Component, OnInit, ElementRef } from '@angular/core';
import { PositionService } from '../position.service'

@Component({
  selector: 'n3k-neck',
  templateUrl: './neck.component.html',
  styleUrls: ['./neck.component.css']
})
export class NeckComponent implements OnInit {

  constructor(public el: ElementRef, private ps: PositionService) { 
    ps.addNeck(this);
  }

  ngOnInit() {
  }

}


