import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockModule } from 'projects/clock/src/lib/clock.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, ClockModule],
})
export class WelcomeModule {}
