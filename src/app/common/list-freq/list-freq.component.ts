import { Component } from '@angular/core'
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component'
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component'
import { TitlesComponent } from '../../components/titles/titles.component'
import { ListDivComponent } from '../../components/list-div/list-div.component'
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component'
import { ImgViewComponent } from '../../components/images/img-view/img-view.component'
import { TableComponent } from '../../components/table/table.component'
import { IAbsenceModel } from '../../api/absence/IAbsence'
import { AbsenceService } from '../../api/absence/absence.service'
import { BreakpointService } from '../../services/breakpoint.service'
import { IStudentModel } from '../../api/student/Istudent'

@Component({
  selector: 'app-list-freq',
  standalone: true,
  imports: [
    PesquisaComponent,
    ListDivComponent,
    ReorganizesMainComponent,
    TitlesComponent,
    ReorganizeInputComponent,
    ImgViewComponent,
    TableComponent,
  ],
  providers: [BreakpointService],
  templateUrl: './list-freq.component.html',
})
export class ListFreqComponent {
  data: IStudentModel[] = []

  imgEdit = '<app-img-edit></app-img-edit>'

  constructor(private absenceService: AbsenceService, private breakpointService: BreakpointService) {}

  async ngOnInit() {
    await this.loadAbsence()
  }

  headersByBreakpoint() {
    const { xs } = this.breakpointService.breakpoint()

    if (xs) {
      return [
        { key: 'id', label: 'RA', className: 'w-8' },
        { key: 'nome', label: 'Nome', className: 'w-1/3' },
        { key: 'frequencia', label: 'Faltas', className: 'w-1/3' },
        { key: 'situacao', label: 'Situação', className: 'w-1/3' },
      ]
    }

    return [
      { key: 'id', label: 'Registro Academico' },
      { key: 'nomes', label: 'Nome Completo' },
      { key: 'frequencia', label: 'Faltas Totais' },
      { key: 'situacao', label: 'Situação' },
    ]
  }

  async loadAbsence() {
    this.data = await this.absenceService.getAbsence(1)
  }
}
