import { NgModule } from '@angular/core';
import { LayoutsComponent } from './layouts/layouts.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () =>
          import('./layouts/layouts.module').then((m) => m.LayoutsModule),
      },
    ],
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
