import { Component } from '@angular/core'
import { AbsenceService } from '../../api/absence/absence.service'
import { BreakpointService } from '../../services/breakpoint.service'
import { CourseService } from '../../api/course/course.service'
import { ICourseModel } from '../../api/course/ICourse'
import { FormsModule } from '@angular/forms'
import { GradeService } from '../../api/grade/grade.service'
import { IStudentModel } from '../../api/student/Istudent'
import { ClassService } from '../../api/class/class.service'
import { IClassModel } from '../../api/class/IClass'
import { ITableHeader } from '../../interfaces/TableHeader'
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-select-course',
  standalone: true,
  imports: [ NgFor ,FormsModule],
  templateUrl: './select-course.component.html',
  providers: [GradeService, CourseService, AbsenceService, ClassService]
})
export class SelectCourseComponent {
  courses: ICourseModel[] = []

  formData = {
    curso_id: ''
  }

  constructor(
    private courseService: CourseService
  ) { }

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
}

