import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Observable, Subject, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { valuClock } from '../../interface/valueclock';

@Component({
  selector: 'lib-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['../../styles.less'],
})
export class TimerComponent implements OnInit, OnDestroy {
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  hours = 0;
  minutes = 0;
  seconds = 0;
  source = timer(0, 1000);
  isPause = true;
  isStop = true;

  constructor() {}
  ngOnDestroy(): void {}
  ngOnInit(): void {}
  start(): void {
    this.isPause = false;
    this.isStop = false;
    if (this.hours > 0) {
      this.minutes = 60;
    } else if (this.minutes > 0) {
      this.seconds = 60;
    }
    setInterval(() => {
      if (
        !this.isPause &&
        (this.hours > 0 || this.minutes > 0 || this.seconds > 0)
      ) {
        if (this.seconds > 0) {
          this.seconds -= 1;
        } else if (this.seconds === 0) {
          this.seconds = 60;
          this.minutes -= 1;
        } else if (this.minutes === 0) {
          this.minutes = 60;
          this.hours -= 1;
        } else if (this.hours === 0) {
          this.hours -= 1;
        }
      } else if (this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
        this.stop();
      }
    }, 100);
  }
  pause(): void {
    this.isPause = true;
  }
  stop(): void {
    this.isPause = true;
    this.isStop = true;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
  onKeyHor(event: any): void {
    this.hours = event.target.value;
  }
  onKeyMin(event: any): void {
    this.minutes = event.target.value;
  }
  onKeySec(event: any): void {
    this.seconds = event.target.value;
  }
}
