import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.less'],
})
export class CalenderComponent implements OnInit {
  week: any = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  monthSelect: any = [
    'Ene',
    'Feb',
    'Marz',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  dateSelect: any;
  dateValue: any;
  Day: any;
  constructor() {}

  ngOnInit(): void {
    const date = new Date();
    this.getDaysFromDate(date.getMonth() + 2, date.getFullYear());
    this.Day = date.getDate().valueOf();
    this.dateValue = date;
  }
  getDaysFromDate(month: any, year: any): void {
    const startDate = moment.utc(`${year}/${month}/01`);
    const endDate = startDate.clone().endOf('month');
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true);
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format('dddd'),
        value: a,
        indexWeek: dayObject.isoWeekday(),
      };
    });
    this.monthSelect = arrayDays;
  }
  changeMonth(flag: any): void {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, 'month');
      this.getDaysFromDate(prevDate.format('MM'), prevDate.format('YYYY'));
    } else {
      const nextDate = this.dateSelect.clone().add(1, 'month');
      this.getDaysFromDate(nextDate.format('MM'), nextDate.format('YYYY'));
    }
  }
  clickDay(day: any): void {
    this.Day = day.value;
    this.dateValue = this.formatF(day);
  }
  formatF(day: any): any {
    const monthYear = this.dateSelect.format('YYYY-MM');
    const parse = `${monthYear}-${day.value}`;
    const objectDate = moment(parse);
    return objectDate;
  }
}
