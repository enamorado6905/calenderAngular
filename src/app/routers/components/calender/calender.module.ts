import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockModule } from 'projects/clock/src/public-api';
import { CalenderComponent } from './calender.component';

@NgModule({
  declarations: [CalenderComponent],
  imports: [CommonModule, ClockModule],
})
export class CalenderModule {}
