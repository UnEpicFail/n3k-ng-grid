import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { N3kNgGridModule } from './lib/';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const route = [
  { path: '', component: Page1Component},
  { path: 'page2', component: Page2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    N3kNgGridModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
