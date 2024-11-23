import { Component, Input, ViewEncapsulation } from '@angular/core'
import { ImgAbacoComponent } from '../../components/images/img-abaco/img-abaco.component'
import { Router, RouterModule } from '@angular/router'
import { InputsComponent } from '../../components/inputs/inputs.component'
import { FormsModule } from '@angular/forms'
import { AuthenticationService } from '../../api/services/authentication.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ImgAbacoComponent, RouterModule, InputsComponent, FormsModule],
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styles: `
    .aside-component {
      display: none;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  constructor(private readonly authenticationService: AuthenticationService, private readonly router: Router) {}

  @Input() route: string = ''

  formData = {
    email: '',
    password: '',
  }

  async onSubmit(form: any) {
    if (typeof window === 'undefined') {
      return
    }
    const data = await this.authenticationService.auth(this.formData.email, this.formData.password)

    localStorage.setItem('token', data.token)
    this.router.navigate([this.route])
  }
}
