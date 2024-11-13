import { Component } from '@angular/core';
import { IAbsenceModel } from '../../api/absence/IAbsence';
import { AbsenceService } from '../../api/absence/absence.service';
import { BreakpointService } from '../../services/breakpoint.service';
import { ITableHeader } from '../../interfaces/TableHeader';
import { ListDivComponent } from "../../components/list-div/list-div.component";
import { TitlesComponent } from "../../components/titles/titles.component";
import { GridComponent } from "../../components/grid/grid.component";
import { InputsComponent } from "../../components/inputs/inputs.component";
import { TableComponent } from "../../components/table/table.component";
import { ImgEditComponent } from "../../components/images/img-edit/img-edit.component";
import { ReorganizeInputComponent } from "../../components/reorganize-input/reorganize-input.component";
import { BtnDownComponent } from "../../components/buttons/btn-down/btn-down.component";

@Component({
  selector: 'app-launch-faltas',
  standalone: true,
  imports: [
    ListDivComponent,
    TitlesComponent,
    GridComponent,
    InputsComponent,
    TableComponent,
    ImgEditComponent,
    ReorganizeInputComponent,
    BtnDownComponent
],
  templateUrl: './launch-faltas.component.html',
})
export class LaunchFaltasComponent {
  headers: ITableHeader<IAbsenceModel> = [
    { key: 'id', label: 'Registro Acadêmico' },
    { key: 'nome', label: 'Nome Completo' },
    { key: 'frequencia', label: 'Frequencia' },
    { key: 'alunos.situacao', label: 'Situação' },
  ];

  data: IAbsenceModel[] = [];
  
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
