import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockModule } from 'projects/clock/src/public-api';
import { ClockComponent } from './clock.component';
@NgModule({
  declarations: [ClockComponent],
  imports: [CommonModule, ClockModule],
})
export class Clockmodule {}
