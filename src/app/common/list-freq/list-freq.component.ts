import { Component } from '@angular/core';
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { ImgViewComponent } from '../../components/images/img-view/img-view.component';
import { TableComponent } from '../../components/table/table.component';
import { ITableHeader } from '../../interfaces/TableHeader';
import { IAbsenceModel } from '../../api/absence/IAbsence';
import { AbsenceService } from '../../api/absence/absence.service';

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
  templateUrl: './list-freq.component.html',
})
export class ListFreqComponent {
  headers: ITableHeader<IAbsenceModel> = [
    { key: "id", label: "Registro Academico"},
    { key: "alunos", label: "Nome Completo"},
    { key: "frequencia", label: "Faltas Totais"},
    { key: "situacao", label: "Situação"}
  ];
  data: IAbsenceModel[] = [];

  imgEdit = '<app-img-edit></app-img-edit>';

  constructor(private absenceService: AbsenceService) { }

  async ngOnInit() {
    await this.loadAbsence();
  }

  async loadAbsence() {
    try {
      const data = await this.absenceService.getAbsence(1);
      this.data = data
    } catch (error) {
      console.error('Erro ao carregar faltas:', error);
    }
  }


}
