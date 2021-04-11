import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, HttpClientModule],
})
export class GlobalModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: GlobalModule,
    };
  }
}
