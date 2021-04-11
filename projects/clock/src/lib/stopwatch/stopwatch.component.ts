import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['../styles.less'],
})
export class StopWatchComponent implements OnInit {
  hours = 0;
  minutes = 0;
  seconds = 0;
  isPause = true;
  constructor() {}

  ngOnInit(): void {}
  start(): void {
    this.isPause = false;
    setInterval(() => {
      if (!this.isPause) {
        this.seconds += 1;
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes += 1;
        } else if (this.minutes === 60) {
          this.minutes = 0;
          this.hours += 1;
        } else if (this.hours === 24) {
          this.hours = 0;
        }
      }
    }, 100);
  }
  pause(): void {
    this.isPause = true;
  }
  stop(): void {
    this.isPause = true;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
}
