import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponentModule } from './calender-component/calender-component.module';
import { ClockComponentModule } from './clock-component/clock-component.module';
import { WizardComponentModule } from './wizard-component/wizard-component.module';

@NgModule({
  imports: [
    CommonModule,
    CalenderComponentModule,
    ClockComponentModule,
    WizardComponentModule,
  ],
  exports: [
    CalenderComponentModule,
    ClockComponentModule,
    WizardComponentModule,
  ],
})
export class ClockModule {}
