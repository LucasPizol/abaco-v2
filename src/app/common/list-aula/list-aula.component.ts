import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component';
import { ImgEditComponent } from '../../components/images/img-edit/img-edit.component';
import { ImgDeleteComponent } from '../../components/images/img-delete/img-delete.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizeDivCardComponent } from '../../components/reorganize-div-card/reorganize-div-card.component';
import { TableComponent } from '../../components/table/table.component';
import { ITableHeader } from '../../interfaces/TableHeader';
import { IAbsenceModel } from '../../api/absence/IAbsence';
import { IClassModel } from '../../api/class/IClass';
import { ClasssService } from '../../api/class/class.service';

@Component({
  selector: 'app-list-aula',
  standalone: true,
  imports: [
    AsideComponent,
    PesquisaComponent,
    ImgEditComponent,
    ImgDeleteComponent,
    ListDivComponent,
    ReorganizesMainComponent,
    TitlesComponent,
    ReorganizeDivCardComponent,
    TableComponent,
  ],
  templateUrl: './list-aula.component.html',
})
export class ListAulaComponent {
  headers: ITableHeader<IClassModel> = [
    { key: 'alunos.id', label: 'Registro Acadêmico' },
    { key: 'alunos.nome', label: 'Nome' },
    { key: 'frequencia', label: 'Frequencia' },
    { key: 'alunos.situacao', label: 'Situação' },
  ];
  data: IClassModel[] = [];
  page = 0;
  pageSize = 10;
  filters = {};

  imgEdit = '<app-img-edit></app-img-edit>';

  constructor(private classService: ClasssService) { }

  async ngOnInit() {
    await this.loadClass();
  }

  async loadClass() {
    try {
      const { data } = await this.classService.getClass({
        page: this.page,
        pageSize: this.pageSize,
        filters: this.filters,
      });
    this.data = data
    } catch (error) {
      console.error('Erro ao carregar faltas:', error);
    }
  }
}
