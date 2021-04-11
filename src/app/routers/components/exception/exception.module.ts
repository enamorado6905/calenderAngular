import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExceptionRoutingModule } from './exception-routing.module';

import { Exception404Component } from './404.component';

const COMPONENTS = [Exception404Component];

@NgModule({
  imports: [CommonModule, ExceptionRoutingModule],
  declarations: [...COMPONENTS],
})
export class ExceptionModule {}
