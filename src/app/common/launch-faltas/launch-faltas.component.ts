import { Component } from '@angular/core'
import { TitlesComponent } from '../../components/titles/titles.component'
import { ListDivComponent } from '../../components/list-div/list-div.component'
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component'
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component'
import { TableComponent } from '../../components/table/table.component'
import { AbsenceService } from '../../api/absence/absence.service'
import { GridComponent } from '../../components/grid/grid.component'
import { BreakpointService } from '../../services/breakpoint.service'
import { CourseService } from '../../api/course/course.service'
import { ICourseModel } from '../../api/course/ICourse'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { GradeService } from '../../api/grade/grade.service'
import { IStudentModel } from '../../api/student/Istudent'
import { ClassService } from '../../api/class/class.service'
import { IClassModel } from '../../api/class/IClass'
import { ITableHeader } from '../../interfaces/TableHeader'
import { ButtonComponent } from '../../components/buttons/button.component'
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-launch-faltas',
  standalone: true,
  imports: [
    ListDivComponent,
    TitlesComponent,
    ReorganizeInputComponent,
    GridComponent,
    TableComponent,
    GridComponent,
    FormsModule,
    CommonModule,
    ReorganizeInputComponent,
    ButtonComponent,
  ],
  templateUrl: './launch-faltas.component.html',
  providers: [GradeService, CourseService, AbsenceService, ClassService],
})
export class LaunchFaltasComponent {
  page = 0
  pageSize = 10
  filters = {}

  data: IStudentModel[] = []
  classes: IClassModel[] = []

  courses: ICourseModel[] = []

  formData = {
    curso_id: '',
    aula_id: '',
  }

  imgEdit = '<app-img-edit></app-img-edit>'

  constructor(
    private absenceService: AbsenceService,
    private breakpointService: BreakpointService,
    private courseService: CourseService,
    private classService: ClassService,
    private toastService: ToastrService
  ) {}

  async ngOnInit() {
    await this.loadCourse()
  }

  headersByBreakpoint(): ITableHeader<IStudentModel> {
    const { xs } = this.breakpointService.breakpoint()

    if (xs) {
      return [
        { key: 'id', label: 'RA', className: 'w-8' },
        { key: 'nome', label: 'Nome', className: 'w-1/3 text-center' },
        {
          key: 'frequencia',
          label: 'Faltas',
          className: 'w-1/4 text-center',
          render(item) {
            return {
              type: 'checkbox',
              value: !!item.frequencia,
              onChange() {
                item.frequencia = !item.frequencia
              },
            }
          },
        },
        { key: 'situacao', label: 'Situação', className: 'w-1/3 text-center' },
      ]
    }

    return [
      { key: 'id', label: 'Registro Academico' },
      { key: 'nome', label: 'Nome Completo' },
      {
        key: 'frequencia',
        label: 'Faltas Totais',
        render: (item) => {
          return {
            type: 'checkbox',
            value: !!item.frequencia,
            onChange() {
              item.frequencia = !item.frequencia
            },
          }
        },
      },
      { key: 'situacao', label: 'Situação' },
    ]
  }

  async loadAbsence() {
    const data = await this.absenceService.getAbsence(parseInt(this.formData.aula_id))
    this.data = data
  }

  async loadCourse() {
    this.courses = await this.courseService.getCourses()
  }

  async loadClasses() {
    this.classes = await this.classService.getClass(parseInt(this.formData.curso_id))
    this.formData.aula_id = ''
    this.data = []
  }

  getDate(data: string | Date) {
    return new Date(data).toLocaleDateString('pt-br')
  }

  async onSubmit() {
    try {
      await this.absenceService.register(this.data, parseInt(this.formData.aula_id))
      this.classes = []
      this.formData = {
        aula_id: '',
        curso_id: '',
      }
      this.data = []
      this.toastService.success('Faltas lançadas com sucesso')
    } catch (error) {}
  }
}
