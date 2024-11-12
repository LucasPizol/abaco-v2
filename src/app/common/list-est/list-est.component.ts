import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component';
import { ImgEditComponent } from '../../components/images/img-edit/img-edit.component';
import { ImgDeleteComponent } from '../../components/images/img-delete/img-delete.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { TableComponent } from '../../components/table/table.component';
import { ITableHeader } from '../../interfaces/TableHeader';
import { IStudentModel } from '../../api/student/Istudent';
import { StudentService } from '../../api/student/student.services';
import { BreakpointService } from '../../services/breakpoint.service';

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
  page = 0;
  pageSize = 10;
  filters = {};

  imgEdit = '<app-img-edit></app-img-edit>';

  constructor(
    private studentService: StudentService,
    private breakpointService: BreakpointService
  ) {}

  async ngOnInit() {
    await this.loadStudents();
  }

  headerByBreakpoint() {
    const { xs } = this.breakpointService.breakpoint();

    if (xs) {
      return [
        { key: 'id', label: 'RA', className: 'w-8' },
        { key: 'nome', label: 'Nome', className: 'w-1/4 text-center' },
        { key: 'email', label: 'Email', className: 'w-1/4 text-center' },
        {
          key: 'data_nascimento',
          label: 'Data Cadastro',
          className: 'w-1/4 text-center',
        },
        { key: 'situacao', label: 'Situação', className: 'w-1/4 text-center' },
      ];
    }

    return [
      { key: 'id', label: 'Registro Acadêmico', className: 'w-8' },
      { key: 'nome', label: 'Nome Completo', className: 'w-1/4 text-center' },
      { key: 'email', label: 'Email', className: 'w-1/4 text-center' },
      {
        key: 'data_nascimento',
        label: 'Data Cadastro',
        className: 'w-1/4 text-center',
      },
      { key: 'situacao', label: 'Situação', className: 'w-1/4 text-center' },
    ];
  }

  async loadStudents() {
    try {
      const { data } = await this.studentService.getStudents({
        page: this.page,
        pageSize: this.pageSize,
        filters: this.filters,
      });

      this.data = data.map(({ data_nascimento, ...data }) => ({
        ...data,
        data_nascimento: new Date(data_nascimento).toLocaleDateString('pt-br'),
      }));
    } catch (error) {
      console.error('Erro ao carregar estudantes:', error);
    }
  }
}
