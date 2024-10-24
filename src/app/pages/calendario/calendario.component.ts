import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
<<<<<<< HEAD
import { ReorganizesDivComponent } from '../../components/reorganizes-div/reorganizes-div.component';
import { MainDivComponent } from '../../components/main-div/main-div.component';
=======
>>>>>>> 6060a00d25dcf0651d9fe27cada8cbbb508d5e41
import { ViewCalendarComponent } from '../../common/view-calendar/view-calendar.component';

@Component({
  selector: 'app-calendario',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterModule, AsideComponent, ReorganizesMainComponent, ReorganizesDivComponent, MainDivComponent,
    ViewCalendarComponent],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
=======
  imports: [RouterModule,AsideComponent, ReorganizesMainComponent, ViewCalendarComponent ],
  templateUrl: './calendario.component.html'
>>>>>>> 6060a00d25dcf0651d9fe27cada8cbbb508d5e41
})
export class CalendarioComponent {

}
