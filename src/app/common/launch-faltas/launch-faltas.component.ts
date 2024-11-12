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
import { ITableHeader } from '../../interfaces/TableHeader';
import { IAbsenceModel } from '../../api/absence/IAbsence';
import { AbsenceService } from '../../api/absence/absence.service';
import { GridComponent } from '../../components/grid/grid.component';

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
  headers: ITableHeader<IAbsenceModel> = [
    { key: 'studdants.id', label: 'Registro Acadêmico' },
    { key: 'alunos.nome', label: 'Nome' },
    { key: 'frequencia', label: 'Frequencia' },
    { key: 'alunos.situacao', label: 'Situação' },
  ];
  data: IAbsenceModel[] = [];
  page = 0;
  pageSize = 10;
  filters = {};

  imgEdit = '<app-img-edit></app-img-edit>';

  constructor(private absenceService: AbsenceService) {}

  async ngOnInit() {
    await this.loadAbsence();
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
