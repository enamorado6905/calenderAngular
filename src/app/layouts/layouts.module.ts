import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './adm.routing';
import { WelcomeModule } from '../routers/components/welcome/welcome.module';
import { ExceptionModule } from '../routers/components/exception/exception.module';
import { Clockmodule } from '../routers/components/clock/clock.module';
import { CalenderModule } from '../routers/components/calender/calender.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ExceptionModule,
    WelcomeModule,
    Clockmodule,
    CalenderModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ],
})
export class LayoutsModule {}
