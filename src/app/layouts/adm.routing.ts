import { Routes } from '@angular/router';
import { WelcomeComponent } from '../routers/components/welcome/welcome.component';
import { ClockComponent } from '../routers/components/clock/clock.component';
import { CalenderComponent } from '../routers/components/calender/calender.component';
export const AdminLayoutRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'calender', component: CalenderComponent },
];
