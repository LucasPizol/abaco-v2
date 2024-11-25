import { Component } from '@angular/core'
import { ReorganizesDivComponent } from '../../components/reorganizes-div/reorganizes-div.component'
import { AsideDivComponent } from '../../components/aside-div/aside-div.component'
import { TitlesComponent } from '../../components/titles/titles.component'
import { NavLinkComponent } from '../../components/nav-link/nav-link.component'
import { MainBtnComponent } from '../../components/main-btn/main-btn.component'
import { AuthenticationService } from '../../api/services/authentication.service'
import { DocenteRole } from '../../api/docente/IDocente'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    ReorganizesDivComponent,
    AsideDivComponent,
    TitlesComponent,
    NavLinkComponent,
    MainBtnComponent,
    CommonModule,
  ],
  templateUrl: './aside.component.html',
  providers: [AuthenticationService],
})
export class AsideComponent {
  constructor(private readonly authenticationService: AuthenticationService, private readonly router: Router) {}
  hidden = true

  isAdmin() {
    return this.getUserPermission() === DocenteRole.COORDENADOR
  }

  getTranslate() {
    console.log(this.hidden)
    return this.hidden ? 'translate-x-full' : 'translate-x-0'
  }

  setHidden() {
    this.hidden = !this.hidden
  }

  async logout(): Promise<void> {
    await this.authenticationService.logout()
  }

  getUserPermission() {
    if (typeof localStorage === 'undefined') {
      return
    }

    const user = localStorage.getItem('docente')

    if (user) {
      const { permissao } = JSON.parse(user)
      return permissao
    }
  }
  navigateTo(url: string) {
    this.router.navigate([url])
  }
}
