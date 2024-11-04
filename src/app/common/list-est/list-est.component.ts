import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component';
import { ImgEditComponent } from '../../components/images/img-edit/img-edit.component';
import { ImgDeleteComponent } from '../../components/images/img-delete/img-delete.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { TableComponent } from '../../components/table/table.component';
import { StudentService } from '../../api/studant/studant.services';
import { IStudentModel } from '../../api/studant/Istudant';
import { ITableHeader } from '../../interfaces/TableHeader';
import { IPaginationRequest } from '../../interfaces/PaginationRequest';

@Component({
  selector: 'app-list-est',
  standalone: true,
  imports: [
    AsideComponent,
    PesquisaComponent,
    ImgEditComponent,
    ImgDeleteComponent,
    ListDivComponent,
    ReorganizesMainComponent,
    TitlesComponent,
    TableComponent,
  ],
  templateUrl: './list-est.component.html',
})
export class ListEstComponent {
  headers: ITableHeader<IStudentModel> = [
    { key: 'id', label: 'Registro Academico' },
    { key: 'nome', label: 'Nome Completo' },
    { key: 'email', label: 'Email' },
    { key: 'data_nascimento', label: 'Data Cadastro' },
    { key: 'situacao', label: 'Situação' },
  ];
  data: IStudentModel[] = [];
  imgEdit = '<app-img-edit></app-img-edit>';

  constructor(private studentService: StudentService) {}

  async ngOnInit() {
    await this.loadStudents({
      page: 0,
      pageSize: 10,
      filters: {},
    });
  }

  async loadStudents(request: IPaginationRequest<IStudentModel>) {
    try {
      const { data } = await this.studentService.getStudents(request);

      this.data = data.map(({ data_nascimento, ...data }) => ({
        ...data,
        data_nascimento: new Date(data_nascimento).toLocaleDateString('pt-br'),
      }));
    } catch (error) {
      console.error('Erro ao carregar estudantes:', error);
    }
  }
}
