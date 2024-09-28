import { Component } from '@angular/core';
import { ImgAbacoComponent } from "../img-abaco/img-abaco.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ImgAbacoComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {

}
