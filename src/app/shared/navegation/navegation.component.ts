import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  RoutesRecognized,
} from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.less'],
})
export class NavegationComponent implements OnInit {
  urls: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToHome(): void {
    this.router.navigate(['/welcome']);
  }
}
