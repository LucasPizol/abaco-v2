import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { ReorganizesDivComponent } from '../../components/reorganizes-div/reorganizes-div.component';
import { MainDivComponent } from '../../components/main-div/main-div.component';
import { ViewCalendarComponent } from '../../common/view-calendar/view-calendar.component';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [RouterModule, AsideComponent, ReorganizesMainComponent, ReorganizesDivComponent, MainDivComponent,
    ViewCalendarComponent],
  templateUrl: './calendario.component.html',
})
export class CalendarioComponent {

}
