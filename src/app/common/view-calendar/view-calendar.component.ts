import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { ListBgComponent } from '../../components/list-bg/list-bg.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { ListDivComponent } from "../../components/list-div/list-div.component";
import { ReorganizeDivCardComponent } from '../../components/reorganize-div-card/reorganize-div-card.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { TitlesComponent } from '../../components/titles/titles.component';

@Component({
  selector: 'app-view-calendar',
  standalone: true,
  imports: [AsideComponent, ListBgComponent, ReorganizesMainComponent, ViewCalendarComponent, ListDivComponent,
    ReorganizeDivCardComponent, CalendarComponent, TitlesComponent],
  templateUrl: './view-calendar.component.html',
  styleUrl: './view-calendar.component.css'
})
export class ViewCalendarComponent {

}
