import { Component } from '@angular/core'
import { ImgEditComponent } from '../../components/images/img-edit/img-edit.component'
import { TitlesComponent } from '../../components/titles/titles.component'
import { ListDivComponent } from '../../components/list-div/list-div.component'
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component'
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component'
import { InputsComponent } from '../../components/inputs/inputs.component'
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
@Component({
  selector: 'app-launch-faltas',
  standalone: true,
  imports: [
    ImgEditComponent,
    ListDivComponent,
    TitlesComponent,
    ReorganizeInputComponent,
    BtnDownComponent,
    GridComponent,
    TableComponent,
    GridComponent,
    FormsModule,
    CommonModule,
    ImgEditComponent,
    ReorganizeInputComponent,
    BtnDownComponent,
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
    date: '',
  }

  imgEdit = '<app-img-edit></app-img-edit>'

  constructor(
    private absenceService: AbsenceService,
    private breakpointService: BreakpointService,
    private gradeService: GradeService,
    private courseService: CourseService,
    private classService: ClassService
  ) {}

  async ngOnInit() {
    await this.loadCourse()
  }

  headersByBreakpoint(): ITableHeader<IStudentModel> {
    const { xs } = this.breakpointService.breakpoint()

    const data = this.data

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
              checked: !!item.frequencia,
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
            checked: !!item.frequencia,
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
    try {
      const data = await this.absenceService.getAbsence(parseInt(this.formData.curso_id))
      this.data = data
    } catch (error) {
      console.error('Erro ao carregar faltas:', error)
    }
  }

  async loadCourse() {
    try {
      const data = await this.courseService.getCourses()
      this.courses = data
    } catch (error) {
      console.error('Erro ao carregar cursos:', error)
    }
  }

  async loadClasses() {
    try {
      this.classes = await this.classService.getClass(parseInt(this.formData.curso_id))
      this.formData.date = ''
      this.data = []
    } catch (error) {
      console.error('Erro ao carregar aulas:', error)
    }
  }

  getDate(data: string | Date) {
    return new Date(data).toLocaleDateString('pt-br')
  }
}
