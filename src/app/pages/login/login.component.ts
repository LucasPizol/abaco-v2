import { Component } from '@angular/core';
import { MainDivComponent } from "../../components/main-div/main-div.component";
import { ImgAbacoComponent } from "../../components/img-abaco/img-abaco.component";
import { InputsComponent } from "../../components/inputs/inputs.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MainDivComponent, ImgAbacoComponent, InputsComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {

}
