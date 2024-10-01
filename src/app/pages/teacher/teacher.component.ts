import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from "../../common/main/main.component";

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [RouterModule, MainComponent],
  templateUrl: './teacher.component.html',
})
export class TeacherComponent {

}
