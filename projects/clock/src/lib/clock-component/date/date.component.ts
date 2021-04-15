import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Observable, Subject, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { valuClock } from '../../interface/valueclock';

@Component({
  selector: 'lib-date',
  templateUrl: './date.component.html',
  styleUrls: ['../../styles.less'],
})
export class DateComponent implements OnInit, OnDestroy {
  private clientesSubscription: Subscription[] = [];
  date: Observable<Date> | undefined;
  vr: any;
  infofecha$ = new Subject<valuClock>();
  datos$: Observable<valuClock> | undefined;
  fecha: string | undefined;

  constructor() {
    this.date = timer(0, 1000).pipe(
      map(() => new Date()),
      shareReplay(1)
    );
  }
  ngOnDestroy(): void {
    this.clientesSubscription?.forEach((sub: any) => sub.unsubscribe());
  }
  ngOnInit(): void {
    this.datos$ = this.getInfoReloj();
    const sub = this.datos$.subscribe((x) => {
      this.fecha = x.diaymes;
    });
    this.clientesSubscription.push(sub);
  }
  getInfoReloj(): Observable<valuClock> {
    this.date?.subscribe((t) => {
      this.vr = {
        diaymes: t
          .toLocaleString('es-MX', { day: '2-digit', month: 'long' })
          .replace('.', '')
          .replace('-', ' '),
      };
      this.infofecha$.next(this.vr);
    });
    return this.infofecha$.asObservable();
  }
}
