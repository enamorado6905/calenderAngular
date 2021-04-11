import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockModule } from 'projects/clock/src/lib/clock.module';
import { ClockComponent } from './clock.component';
@NgModule({
  declarations: [ClockComponent],
  imports: [CommonModule, ClockModule],
})
export class Clockmodule {}
