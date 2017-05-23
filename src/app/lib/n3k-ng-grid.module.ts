import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnsComponent } from './columns/columns.component';
import { Column1RefDirective } from './columns/column-1-ref.directive';
import { Column2RefDirective } from './columns/column-2-ref.directive';
import { Column3RefDirective } from './columns/column-3-ref.directive';
import { GridComponent } from './grid/grid.component';
import { HeaderComponent } from './header/header.component';
import { NeckComponent } from './neck/neck.component';
import { FooterComponent } from './footer/footer.component';
import { PositionService } from './position.service'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PositionService],
  declarations: [ColumnsComponent, Column1RefDirective, Column2RefDirective, Column3RefDirective, GridComponent, HeaderComponent, NeckComponent, FooterComponent],
  exports: [ColumnsComponent, Column1RefDirective, Column2RefDirective, Column3RefDirective, GridComponent, HeaderComponent, NeckComponent, FooterComponent]
})
export class N3kNgGridModule { }
