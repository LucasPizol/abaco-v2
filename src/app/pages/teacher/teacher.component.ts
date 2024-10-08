import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { MainComponent } from "../../common/main/main.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [RouterModule, AsideComponent, MainComponent, ReorganizesMainComponent],
  templateUrl: './teacher.component.html',
})
export class TeacherComponent {

}
