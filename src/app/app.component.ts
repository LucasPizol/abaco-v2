import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzCalendarModule], 
  templateUrl: './app.component.html',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'front-abaco';
}
