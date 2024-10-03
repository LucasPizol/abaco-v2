import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [RouterModule, AsideComponent],
  templateUrl: './teacher.component.html',
})
export class TeacherComponent {

}
