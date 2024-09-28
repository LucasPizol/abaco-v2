import { Component } from '@angular/core';
import { MainComponent } from "../../components/main/main.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [MainComponent, RouterModule],
  templateUrl: './teacher.component.html',
})
export class TeacherComponent {

}
