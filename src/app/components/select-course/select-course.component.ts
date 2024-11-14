import { Component, Input } from '@angular/core';
import { CourseService } from '../../api/course/course.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select-course.component.html',
  providers: [CourseService]
})
export class SelectCourseComponent {
  @Input() placeholder: string = '';
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadOptions();
  }

  loadOptions(): void {
    this.courseService.getCourses()
  };
}
