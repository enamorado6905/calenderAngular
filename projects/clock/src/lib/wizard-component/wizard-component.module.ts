import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardLibComponent } from './wizard-component.component';

@NgModule({
  declarations: [WizardLibComponent],
  exports: [WizardLibComponent],
  imports: [CommonModule],
})
export class WizardComponentModule {}
