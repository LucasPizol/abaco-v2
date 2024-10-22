import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'app-calendar',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <nz-calendar [(ngModel)]="date" [(nzMode)]="mode" (nzPanelChange)="panelChange($event)">
    </nz-calendar>
  `
})
export class CalendarComponent {
  date = new Date(2012, 11, 21);
  mode: NzCalendarMode = 'month'; // Pode ser 'month' ou 'year'

  panelChange(event: any): void {
    console.log('Event emitted by nzPanelChange:', event);
  }
}