import { Component } from '@angular/core';
import { CourseService } from '../../api/course/course.service';
import { ICourseModel } from '../../api/course/ICourse';

@Component({
  selector: 'app-select-course',
  standalone: true,
  imports: [],
  templateUrl: './select-course.component.html',
  providers: [CourseService]
})
export class SelectCourseComponent {
  data: ICourseModel[] = []

  constructor(
    private courseService: CourseService

  ) { }
  async ngOnInit() {
    this.data = await this.courseService.getCourses()
  }

}
