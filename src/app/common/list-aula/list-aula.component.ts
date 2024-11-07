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
import { IClassModel } from '../../api/class/IClass';
import { ClassService } from '../../api/class/class.service';

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
    { key: 'descricao', label: 'Nome da Aula' },
    { key: 'aula', label: 'Data' }
  ];
  data: IClassModel[] = [];

  imgEdit = '<app-img-edit></app-img-edit>';

  constructor(private classService: ClassService) { }

  async ngOnInit() {
    await this.loadClass();
  }

  async loadClass() {
    try {
      const data = await this.classService.getClass(0);
      this.data = data
    } catch (error) {
      console.error('Erro ao carregar faltas:', error);
    }
  }
}
