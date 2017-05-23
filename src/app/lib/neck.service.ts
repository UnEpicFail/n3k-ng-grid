import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs'
import { NeckComponent } from './neck/neck.component'
import { HeaderComponent } from './header/header.component';

@Injectable()
export class NeckService {
  neck: Subject<NeckComponent> = new BehaviorSubject<any>('');
  add (data:NeckComponent) {
    this.neck.next(data);
  }

  // header: Subject<HeaderComponent> = new BehaviorSubject<any>(HeaderComponent);
  // add (data:HeaderComponent) {
  //   this.header.next(data)
  // }
}
