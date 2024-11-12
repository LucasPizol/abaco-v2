import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component';
import { ImgEditComponent } from '../../components/images/img-edit/img-edit.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { InputsComponent } from '../../components/inputs/inputs.component';
import { TableComponent } from '../../components/table/table.component';
import { IAbsenceModel } from '../../api/absence/IAbsence';
import { AbsenceService } from '../../api/absence/absence.service';
import { GridComponent } from '../../components/grid/grid.component';
import { BreakpointService } from '../../services/breakpoint.service';
import { BlankSlateComponent } from "../../components/blank-slate/blank-slate.component";

@Component({
  selector: 'app-launch-faltas',
  standalone: true,
  imports: [
    AsideComponent,
    PesquisaComponent,
    ImgEditComponent,
    ListDivComponent,
    ReorganizesMainComponent,
    TitlesComponent,
    ReorganizeInputComponent,
    BtnDownComponent,
    CheckboxComponent,
    InputsComponent,
    TableComponent,
    GridComponent,
],
  templateUrl: './launch-faltas.component.html',
})
export class LaunchFaltasComponent {
  data: IAbsenceModel[] = [];
  page = 0;
  pageSize = 10;
  filters = {};

  imgEdit = '<app-img-edit></app-img-edit>';

  constructor(
    private absenceService: AbsenceService,
    private breakpointService: BreakpointService
  ) {}

  async ngOnInit() {
    await this.loadAbsence();
  }

  headersByBreakpoint() {
    const { xs } = this.breakpointService.breakpoint();

    if (xs) {
      return [
        { key: 'id', label: 'RA', className: 'w-8' },
        { key: 'alunos', label: 'Nome', className: 'w-1/3 text-center' },
        { key: 'frequencia', label: 'Faltas', className: 'w-1/4 text-center' },
        { key: 'alunos.situacao', label: 'Situação', className: 'w-1/3 text-center' },
      ];
    }

    return [
      { key: 'id', label: 'Registro Academico' },
      { key: 'alunos', label: 'Nome Completo' },
      { key: 'frequencia', label: 'Faltas Totais' },
      { key: 'alunos.situacao', label: 'Situação' },
    ];
  }

  async loadAbsence() {
    try {
      const data = await this.absenceService.getAbsence(1);
      this.data = data;
    } catch (error) {
      console.error('Erro ao carregar faltas:', error);
    }
  }
}
