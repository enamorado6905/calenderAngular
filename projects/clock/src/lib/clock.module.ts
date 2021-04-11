import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { TimerComponent } from './timer/timer.component';
import { StopWatchComponent } from './stopwatch/stopwatch.component';
import { DateComponent } from './date/date.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    ClockComponent,
    TimerComponent,
    DateComponent,
    StopWatchComponent,
  ],
  exports: [ClockComponent, TimerComponent, DateComponent, StopWatchComponent],
})
export class ClockModule {}
