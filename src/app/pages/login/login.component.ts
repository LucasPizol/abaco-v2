import { Component, Input } from '@angular/core';
import { ImgAbacoComponent } from "../../components/images/img-abaco/img-abaco.component";
import { RouterModule } from '@angular/router';
import { InputsComponent } from "../../components/inputs/inputs.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ImgAbacoComponent, RouterModule, InputsComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Input() route: string = '';
}
