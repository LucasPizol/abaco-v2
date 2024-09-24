import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputsComponent } from './components/inputs/inputs.component';
import { MainDivComponent } from './components/main-div/main-div.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputsComponent, MainDivComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'front-abaco';
}
