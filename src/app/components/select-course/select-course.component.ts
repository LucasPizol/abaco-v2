import { Component, Input } from '@angular/core'
import { AbsenceService } from '../../api/absence/absence.service'
import { BreakpointService } from '../../services/breakpoint.service'
import { CourseService } from '../../api/course/course.service'
import { ICourseModel } from '../../api/course/ICourse'
import { ControlValueAccessor, FormsModule } from '@angular/forms'
import { GradeService } from '../../api/grade/grade.service'
import { IStudentModel } from '../../api/student/Istudent'
import { ClassService } from '../../api/class/class.service'
import { IClassModel } from '../../api/class/IClass'
import { ITableHeader } from '../../interfaces/TableHeader'
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-select-course',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './select-course.component.html',
  providers: [GradeService, CourseService, AbsenceService, ClassService],
})
export class SelectCourseComponent implements ControlValueAccessor {
  @Input() onSelect: (course: ICourseModel) => void = () => {}

  courses: ICourseModel[] = []

  formData = {
    curso_id: '',
  }

  constructor(private courseService: CourseService) {}

  async ngOnInit() {
    await this.loadCourse()
  }

  async loadCourse() {
    try {
      const data = await this.courseService.getCourses()
      this.courses = data
    } catch (error) {
      console.error('Erro ao carregar cursos:', error)
    }
  }

  handleOnSelect(event: Event) {
    const course = this.courses.find((course) => String(course.id) === (event.target as HTMLInputElement).value)

    if (!course) return

    if (this.onSelect) {
      this.onSelect(course)
    }
  }

  private innerValue: string = ''

  onChange = (value: any) => {}
  onTouched = () => {}

  get value(): string {
    return this.innerValue
  }

  set value(val: string) {
    if (val !== this.innerValue) {
      this.innerValue = val
      this.onChange(val)
      this.onTouched()
    }
  }

  writeValue(value: any): void {
    this.innerValue = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
}
