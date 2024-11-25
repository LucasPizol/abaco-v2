import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ListDivComponent } from '../../components/list-div/list-div.component'
import { TitlesComponent } from '../../components/titles/titles.component'
import { NzCalendarComponent, NzCalendarMode } from 'ng-zorro-antd/calendar'
import { PopoutComponent } from '../../components/popout/popout.component'
import { GradeService } from '../../api/grade/grade.service'
import { CommonModule } from '@angular/common'
import { IClassModel } from '../../api/class/IClass'
import { ClassService } from '../../api/class/class.service'
import { NzBadgeModule } from 'ng-zorro-antd/badge' // Para exibir eventos

type IClass = Record<string, IClassModel[]>

@Component({
  selector: 'app-view-calendar',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ListDivComponent, TitlesComponent, NzCalendarComponent, PopoutComponent, CommonModule, NzBadgeModule],
  templateUrl: './view-calendar.component.html',
  providers: [GradeService],
})
export class ViewCalendarComponent {
  constructor(private readonly classService: ClassService) {}
  mode: NzCalendarMode = 'month'
  events = [
    { date: new Date(2024, 10, 15), title: 'Team Meeting', color: 'blue' },
    { date: new Date(2024, 0, 15), title: 'Project Deadline', color: 'red' },
    { date: new Date(2024, 0, 22), title: 'Client Presentation', color: 'green' },
    { date: new Date(2024, 1, 5), title: 'Product Launch', color: 'purple' },
  ]

  onModeChange(mode: NzCalendarMode): void {
    this.mode = mode
  }

  onPanelChange(event: { date: Date; mode: NzCalendarMode }): void {
    console.log(event.date, event.mode)
  }

  getEventsForDate(date: Date): any[] {
    console.log({ date })
    return this.events.filter(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate()
    )
  }
}
