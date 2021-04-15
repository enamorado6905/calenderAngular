import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  RoutesRecognized,
  ActivatedRoute,
} from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'lib-wizard-component',
  templateUrl: './wizard-component.component.html',
})
export class WizardLibComponent implements OnInit {
  urls: any[] = [];
  isHome = true;
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.addUrl(this.router.url);
        if (this.router.url === '/welcome') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
      if (event instanceof NavigationEnd) {
      }
      if (event instanceof NavigationError) {
      }
    });
  }
  ngOnInit(): void {
    this.urls.push('/welcome');
  }
  addUrl(url: string): void {
    if (this.router.url !== '/welcome') {
      this.urls[1] = url;
    }
  }
  goToHome(): void {
    this.router.navigate(['/welcome']);
  }
  goToRight(): void {
    this.router.navigate([`${this.urls[1]}`]);
  }
}
