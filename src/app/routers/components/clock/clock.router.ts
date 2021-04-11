import { Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { TimerComponent } from './timer/timer.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

export const ClockRoutes: Routes = [
  { path: 'timer', component: TimerComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'stopwatch', component: StopwatchComponent },
];
