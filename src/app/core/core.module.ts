import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockModule } from 'clock';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, ClockModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
