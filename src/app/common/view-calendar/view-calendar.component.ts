<<<<<<< HEAD
import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { ListBgComponent } from '../../components/list-bg/list-bg.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { ListDivComponent } from "../../components/list-div/list-div.component";
import { ReorganizeDivCardComponent } from '../../components/reorganize-div-card/reorganize-div-card.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { TitlesComponent } from '../../components/titles/titles.component';
=======
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { NzCalendarComponent, NzCalendarMode } from 'ng-zorro-antd/calendar';
<<<<<<< HEAD
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component';
=======
import { BtnDownComponent } from "../../components/buttons/btn-down/btn-down.component";
>>>>>>> d31fb55e6f2398ff951fac8a756b336afad13db0
>>>>>>> 6060a00d25dcf0651d9fe27cada8cbbb508d5e41

@Component({
  selector: 'app-view-calendar',
  standalone: true,
<<<<<<< HEAD
  imports: [AsideComponent, ListBgComponent, ReorganizesMainComponent, ViewCalendarComponent, ListDivComponent,
    ReorganizeDivCardComponent, CalendarComponent, TitlesComponent],
  templateUrl: './view-calendar.component.html',
  styleUrl: './view-calendar.component.css'
})
export class ViewCalendarComponent {

=======
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [AsideComponent, ReorganizesMainComponent, ListDivComponent, TitlesComponent,
    NzCalendarComponent, BtnDownComponent],
  templateUrl: './view-calendar.component.html',
})
export class ViewCalendarComponent {
  date = new Date(2012, 11, 21);
  mode: NzCalendarMode = 'month';

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }
>>>>>>> 6060a00d25dcf0651d9fe27cada8cbbb508d5e41
}
