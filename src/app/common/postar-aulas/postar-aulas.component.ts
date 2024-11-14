import { Component } from '@angular/core';
import { TitlesComponent } from "../../components/titles/titles.component";
import { SelectCourseComponent } from "../../components/select-course/select-course.component";
@Component({
  selector: 'app-postar-aulas',
  standalone: true,
  imports: [TitlesComponent, SelectCourseComponent],
  templateUrl: './postar-aulas.component.html',
})
export class PostarAulasComponent {

}
