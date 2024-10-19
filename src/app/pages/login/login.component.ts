import { Component, Input } from '@angular/core';
import { ImgAbacoComponent } from "../../components/images/img-abaco/img-abaco.component";
import { InputLoginComponent } from "../../components/inputs/input-login/input-login.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ImgAbacoComponent, InputLoginComponent, RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Input() route: string = '';
}
