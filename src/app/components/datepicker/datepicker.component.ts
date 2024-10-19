import { Component, Input } from '@angular/core';
import { ImgCalendarComponent } from '../images/img-calendar/img-calendar.component';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [ImgCalendarComponent],
  templateUrl: './datepicker.component.html'

})
export class DatePickerComponent {
  @Input() placeholder: string = '';
}