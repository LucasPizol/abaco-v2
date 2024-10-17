import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputsComponent } from './components/inputs/inputs.component';
import { MainDivComponent } from './components/main-div/main-div.component';
import { ImgAbacoComponent } from "./components/img-abaco/img-abaco.component";
import { NzCalendarModule } from 'ng-zorro-antd/calendar'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputsComponent, MainDivComponent, ImgAbacoComponent, NzCalendarModule],
  template: `<router-outlet></router-outlet>`

})
export class AppComponent {
  title = 'front-abaco';
}
