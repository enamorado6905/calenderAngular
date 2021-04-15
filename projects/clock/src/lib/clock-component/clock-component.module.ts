import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { ClockComponent } from './clock/clock.component';
import { TimerComponent } from './timer/timer.component';
import { StopWatchComponent } from './stopwatch/stopwatch.component';
import { ClockLibComponent } from './clock-component.component';

@NgModule({
  declarations: [
    ClockLibComponent,
    DateComponent,
    ClockComponent,
    TimerComponent,
    StopWatchComponent,
  ],
  exports: [
    ClockLibComponent,
    ClockLibComponent,
    DateComponent,
    ClockComponent,
    TimerComponent,
  ],
  imports: [CommonModule],
})
export class ClockComponentModule {}
