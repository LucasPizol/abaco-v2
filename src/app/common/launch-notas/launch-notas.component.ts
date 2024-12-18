import { Component } from '@angular/core'
import { ITableHeader } from '../../interfaces/TableHeader'
import { GradeService } from '../../api/grade/grade.service'
import { IGradeModel } from '../../api/grade/IGrade'
import { IStudentModel } from '../../api/student/Istudent'
import { ListDivComponent } from '../../components/list-div/list-div.component'
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component'
import { TitlesComponent } from '../../components/titles/titles.component'
import { GridComponent } from '../../components/grid/grid.component'
import { InputsComponent } from '../../components/inputs/inputs.component'
import { TableComponent } from '../../components/table/table.component'
import { ImgEditComponent } from '../../components/images/img-edit/img-edit.component'
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component'
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component'
import { BreakpointService } from '../../services/breakpoint.service'
import { ICourseModel } from '../../api/course/ICourse'
import { CourseService } from '../../api/course/course.service'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ButtonComponent } from '../../components/buttons/button.component'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-launch-notas',
  standalone: true,
  imports: [
    ListDivComponent,
    ReorganizesMainComponent,
    TitlesComponent,
    GridComponent,
    InputsComponent,
    TableComponent,
    ImgEditComponent,
    ReorganizeInputComponent,
    CommonModule,
    FormsModule,
    ButtonComponent,
  ],
  templateUrl: './launch-notas.component.html',
  providers: [BreakpointService, CourseService],
})
export class LaunchNotasComponent {
  constructor(
    private gradeService: GradeService,
    private readonly breakpointService: BreakpointService,
    private readonly courseService: CourseService,
    private readonly toastService: ToastrService
  ) {}

  isLoading = false
  data: IStudentModel[] = []

  courses: ICourseModel[] = []

  imgEdit = '<app-img-edit></app-img-edit>'

  formData = {
    curso_id: '',
    aula: undefined,
    descricao: '',
  }

  async ngOnInit() {
    await this.loadCourses()
  }

  fetchHeaderByBreakpoint(): ITableHeader<IStudentModel> {
    const { xs } = this.breakpointService.breakpoint()

    if (xs) {
      return [
        { key: 'id', label: 'RA', className: 'w-4' },
        { key: 'nome', label: 'Nome', className: 'w-1/3' },
        {
          key: 'nota',
          label: 'Nota',
          className: 'w-1/3',
          render(student) {
            return {
              onChange: (event) => {
                if (event.target && 'value' in event.target) {
                  student.nota = parseFloat(event.target.value as string)
                }
              },
              type: 'text',
              value: !student.nota ? '' : String(student.nota),
            }
          },
        },
        { key: 'situacao', label: 'Situação', className: 'w-1/3' },
      ]
    }

    return [
      { key: 'id', label: 'Registro Acadêmico', className: 'w-1/4' },
      { key: 'nome', label: 'Nome Completo', className: 'w-1/4 text-center' },
      {
        key: 'nota',
        label: 'Nota',
        className: 'w-1/4 text-center',
        render(student) {
          return {
            onChange: (event) => {
              if (event.target && 'value' in event.target) {
                student.nota = parseFloat(event.target.value as string)
              }
            },
            type: 'text',
            value: !student.nota ? '' : String(student.nota),
          }
        },
      },
      { key: 'situacao', label: 'Situação', className: 'w-1/4 text-center' },
    ]
  }

  async loadGrades() {
    if (!this.formData.curso_id || !this.formData.aula) return

    this.data = await this.gradeService.getGrades(parseFloat(this.formData.curso_id), this.formData.aula)
  }

  async loadCourses() {
    this.courses = await this.courseService.getCourses()
  }

  async onSubmit() {
    if (!this.formData.curso_id || !this.formData.aula) {
      return
    }

    this.isLoading = true

    try {
      await this.gradeService.createGrades({
        cursos_id: parseFloat(this.formData.curso_id),
        students: this.data,
        data: this.formData.aula,
      })

      this.toastService.success('Notas lançadas com sucesso!')
      this.formData = {
        curso_id: '',
        aula: undefined,
        descricao: '',
      }

      this.data = []
    } catch (error) {
      this.toastService.error('Erro ao lançar notas')
    } finally {
      this.isLoading = false
    }
  }
}
