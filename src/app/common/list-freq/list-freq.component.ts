import { Component } from '@angular/core'
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component'
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component'
import { TitlesComponent } from '../../components/titles/titles.component'
import { ListDivComponent } from '../../components/list-div/list-div.component'
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component'
import { ImgViewComponent } from '../../components/images/img-view/img-view.component'
import { TableComponent } from '../../components/table/table.component'
import { IAbsenceModel, ICalculateAbsenceModel } from '../../api/absence/IAbsence'
import { AbsenceService } from '../../api/absence/absence.service'
import { BreakpointService } from '../../services/breakpoint.service'
import { IStudentModel } from '../../api/student/Istudent'
import { SelectCourseComponent } from '../../components/select-course/select-course.component'
import { ITableHeader } from '../../interfaces/TableHeader'
import { ICourseModel } from '../../api/course/ICourse'

@Component({
  selector: 'app-list-freq',
  standalone: true,
  imports: [PesquisaComponent, ListDivComponent, TitlesComponent, TableComponent, SelectCourseComponent],
  providers: [BreakpointService],
  templateUrl: './list-freq.component.html',
})
export class ListFreqComponent {
  data: ICalculateAbsenceModel[] = []
  cursos_id: number = 1

  imgEdit = '<app-img-edit></app-img-edit>'

  constructor(private absenceService: AbsenceService, private breakpointService: BreakpointService) {}

  headersByBreakpoint(): ITableHeader<IStudentModel> {
    const { xs } = this.breakpointService.breakpoint()

    if (xs) {
      return [
        { key: 'id', label: 'RA', className: 'w-8' },
        { key: 'nome', label: 'Nome', className: 'w-1/3' },
        { key: 'frequencia', label: 'Faltas', className: 'w-1/3' },
        { key: 'situacao', label: 'Situação', className: 'w-1/3' },
        {
          key: 'actions',
          label: '',
          actions: [
            {
              onClick: (value) => {
                console.log(value)
              },
              icon: 'edit',
            },
          ],
        },
      ]
    }

    return [
      { key: 'id', label: 'Registro Academico' },
      { key: 'nome', label: 'Nome Completo' },
      { key: 'porcentagem', label: '% Presença' },
      { key: 'situacao', label: 'Situação' },
      {
        key: 'actions',
        label: '',
        actions: [
          {
            onClick: (value) => {
              console.log(value)
            },
            icon: 'edit',
          },
        ],
      },
    ]
  }

  async onSelectCourse(course: ICourseModel) {
    console.log('(selected course)', course)
    this.cursos_id = course.id
    await this.loadAbsence()
  }

  async loadAbsence() {
    if (!this.cursos_id) {
      return
    }

    this.data = await this.absenceService.calculateFrequency(this.cursos_id)
  }
}
