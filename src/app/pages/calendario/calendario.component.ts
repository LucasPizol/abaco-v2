import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { ViewCalendarComponent } from '../../common/view-calendar/view-calendar.component';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [RouterModule,AsideComponent, ReorganizesMainComponent, ViewCalendarComponent ],
  templateUrl: './calendario.component.html'
})
export class CalendarioComponent {

}
