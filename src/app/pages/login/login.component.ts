import { Component } from '@angular/core';
import { ImgAbacoComponent } from "../../components/img-abaco/img-abaco.component";
import { InputsComponent } from "../../components/inputs/inputs.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ImgAbacoComponent, InputsComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {

}
