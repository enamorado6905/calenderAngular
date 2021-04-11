import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { GlobalModule } from './global/global.module';
import { CoreModule } from './core/index';
import { SharedModule } from './shared/index';
import { AppRoutingModule } from './app-routing.module';

import { LayoutsComponent } from './layouts/layouts.component';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, LayoutsComponent],
  imports: [
    GlobalModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    StoreModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
