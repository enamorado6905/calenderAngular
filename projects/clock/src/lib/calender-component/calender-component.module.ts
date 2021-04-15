import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderLibComponent } from './calender-component.component';
@NgModule({
  declarations: [CalenderLibComponent],
  exports: [CalenderLibComponent],
  imports: [CommonModule],
})
export class CalenderComponentModule {}
