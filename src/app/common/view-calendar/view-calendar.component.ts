import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { AsideComponent } from '../aside/aside.component'
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component'
import { ListDivComponent } from '../../components/list-div/list-div.component'
import { TitlesComponent } from '../../components/titles/titles.component'
import { NzCalendarComponent, NzCalendarMode } from 'ng-zorro-antd/calendar'
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component'
import { PopoutComponent } from '../../components/popout/popout.component'
import { GradeService } from '../../api/grade/grade.service'

@Component({
  selector: 'app-view-calendar',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ListDivComponent, TitlesComponent, NzCalendarComponent, PopoutComponent],
  templateUrl: './view-calendar.component.html',
  providers: [GradeService],
})
export class ViewCalendarComponent {
  date = new Date(2012, 11, 21)
  mode: NzCalendarMode = 'month'

  constructor(private readonly gradeService: GradeService) {}

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode)
  }

  async ngOnInit() {
    this.loadGrades()
  }

  async loadGrades() {
    try {
      const data = await this.gradeService.loadAllGrades()
      console.log({ data })
    } catch (error) {}
  }
}
