import { Component } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { AuthenticationService } from './api/services/authentication.service'
import { AsideComponent } from './common/aside/aside.component'
import { CommonModule } from '@angular/common'
import { ToastrModule } from 'ngx-toastr'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, AsideComponent, CommonModule],
  providers: [AuthenticationService],
})
export class AppComponent {
  title = 'front-abaco'

  constructor(private router: Router) {}

  showAside(): boolean {
    return this.router.url !== '/login'
  }

  commonStyles(): string {
    const isAsideVisible = this.showAside()

    if (isAsideVisible) {
      return `px-4 py-12
sm:px-4 sm:py-4
md:px-8 sm:py-8
lg:px-14 lg:py-14`
    }

    return ''
  }
}
