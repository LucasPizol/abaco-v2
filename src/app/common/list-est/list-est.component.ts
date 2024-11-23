import { Component } from '@angular/core'
import { ITableHeader } from '../../interfaces/TableHeader'
import { IStudentModel } from '../../api/student/Istudent'
import { StudentService } from '../../api/student/student.services'
import { ListDivComponent } from '../../components/list-div/list-div.component'
import { TitlesComponent } from '../../components/titles/titles.component'
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component'
import { TableComponent } from '../../components/table/table.component'
import { ImgEditComponent } from '../../components/images/img-edit/img-edit.component'
import { ImgDeleteComponent } from '../../components/images/img-delete/img-delete.component'
import { BreakpointService } from '../../services/breakpoint.service'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from '../../components/buttons/button.component'

@Component({
  selector: 'app-list-est',
  standalone: true,
  imports: [
    ListDivComponent,
    TitlesComponent,
    PesquisaComponent,
    TableComponent,
    ImgEditComponent,
    ImgDeleteComponent,
    CommonModule,
    ButtonComponent,
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
  ]
  data: IStudentModel[] = []
  page = 0
  pageSize = 10
  total = 0
  filters = {}

  paginationParams: string[] = []

  imgEdit = '<app-img-edit></app-img-edit>'

  constructor(private studentService: StudentService, private breakpointService: BreakpointService) {}

  async ngOnInit() {
    await this.loadStudents()
  }

  headerByBreakpoint() {
    const { xs } = this.breakpointService.breakpoint()

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
      ]
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
    ]
  }

  async loadStudents() {
    const { data, quantity } = await this.studentService.getStudents({
      page: this.page,
      pageSize: this.pageSize,
      filters: this.filters,
    })

    this.total = quantity

    this.data = data.map(({ data_nascimento, ...data }) => ({
      ...data,
      data_nascimento: new Date(data_nascimento).toLocaleDateString('pt-br'),
    }))

    this.createPaginationPages()
  }

  handlePagination(page: string) {
    if (page === '...') return

    this.page = Number(page) - 1

    this.loadStudents()
  }

  paginationLabel() {
    return `${this.page * this.pageSize + 1} - ${Math.min(this.total, (this.page + 1) * this.pageSize)} de ${
      this.total
    }`
  }

  createPaginationPages() {
    const pagesCount = Math.ceil(this.total / this.pageSize)

    const maxShowsPage = 5

    if (this.page + 1 >= maxShowsPage && this.page <= pagesCount - maxShowsPage) {
      this.paginationParams = [
        '1',
        '...',
        String(this.page),
        String(this.page + 1),
        String(this.page + 2),
        '...',
        String(pagesCount),
      ]

      return
    }

    if (this.page <= maxShowsPage && pagesCount > maxShowsPage) {
      this.paginationParams = [
        ...Array.from({ length: maxShowsPage }, (_, index) => String(index + 1)),
        '...',
        String(pagesCount),
      ]

      return
    }

    if (this.page >= maxShowsPage && pagesCount > maxShowsPage) {
      this.paginationParams = [
        '1',
        '...',
        ...Array.from({ length: maxShowsPage }, (_, index) => String(pagesCount - index)).reverse(),
      ]

      return
    }

    this.paginationParams = Array.from({ length: pagesCount }, (_, index) => String(index + 1))
  }
}
