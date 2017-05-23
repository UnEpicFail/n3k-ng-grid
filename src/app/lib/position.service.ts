import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs'
import { ColumnsComponent } from './columns/columns.component'
import { NeckComponent } from './neck/neck.component'

@Injectable()
export class PositionService {
  
  columns:Subject<ColumnsComponent> = new BehaviorSubject<any>({});

  neck:Subject<NeckComponent> = new BehaviorSubject<any>({});

  addColumn(data:ColumnsComponent) {
    this.columns.next(data);
  }

  addNeck(data:NeckComponent) {
    this.neck.next(data);
  }
}
