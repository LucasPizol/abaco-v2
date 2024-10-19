import { Component, Input } from '@angular/core';
import { ImgCalendarComponent } from '../images/img-calendar/img-calendar.component';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  standalone: true,
  imports: [ImgCalendarComponent],

})
export class DatePickerComponent {
  @Input() placeholder: string = '';
}