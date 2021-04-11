import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegationModule } from './navegation/navegation.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavegationModule],
  exports: [NavegationModule],
})
export class SharedModule {}
