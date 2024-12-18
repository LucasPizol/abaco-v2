import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthenticationService } from '../../api/services/authentication.service'
@Injectable({
  providedIn: 'root',
})
export class UsuarioAutenticadoGuard implements CanActivate {
  constructor(private usuarioService: AuthenticationService, private router: Router) {}
  async canActivate() {
    try {
      const me = await this.usuarioService.getDocente()

      if (me) {
        localStorage.setItem('docente', JSON.stringify(me))
        return true
      }

      return false
    } catch (error) {
      this.router.navigate(['login'])
      return false
    }
  }
}
