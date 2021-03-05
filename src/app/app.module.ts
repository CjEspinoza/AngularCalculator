import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { CalcComponent } from './components/calc/calc.component';
import { TipsComponent } from './components/tips/tips.component';
import { DecimalPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    CalcComponent,
    TipsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
