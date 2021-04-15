import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Observable, Subject, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { valuClock } from '../../interface/valueclock';

@Component({
  selector: 'lib-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['../../styles.less'],
})
export class ClockComponent implements OnInit, OnDestroy {
  private clientesSubscription: Subscription[] = [];
  clock: Observable<Date> | undefined;
  vr: any;
  infofecha$ = new Subject<valuClock>();
  datos$: Observable<valuClock> | undefined;
  hora: number | undefined;
  minutos: string | undefined;
  dia: string | undefined;
  fecha: string | undefined;
  ampm: string | undefined;
  segundos: string | undefined;

  constructor() {
    this.clock = timer(0, 1000).pipe(
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
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo;
    });
    this.clientesSubscription.push(sub);
  }
  getInfoReloj(): Observable<valuClock> {
    this.clock?.subscribe((t) => {
      this.hora = t.getHours() % 12;
      this.hora = this.hora ? this.hora : 12;
      this.vr = {
        hora: this.hora,
        minutos:
          t.getMinutes() < 10
            ? '0' + t.getMinutes()
            : t.getMinutes().toString(),
        ampm: t.getHours() > 11 ? 'PM' : 'AM',
        diaymes: t
          .toLocaleString('es-MX', { day: '2-digit', month: 'long' })
          .replace('.', '')
          .replace('-', ' '),
        diadesemana: t
          .toLocaleString('es-MX', { weekday: 'long' })
          .replace('.', ''),
        segundo:
          t.getSeconds() < 10
            ? '0' + t.getSeconds()
            : t.getSeconds().toString(),
      };
      this.infofecha$.next(this.vr);
    });
    return this.infofecha$.asObservable();
  }
}
