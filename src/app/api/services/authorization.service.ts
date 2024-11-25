import { Injectable } from '@angular/core'
import { ApiService } from '../api'
import { AuthenticationService } from './authentication.service'
import { DocenteRole, IDocenteModel } from '../docente/IDocente'

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService extends AuthenticationService {
  override beforeAuth(docente: IDocenteModel): void {
    if (docente.permissao !== DocenteRole.COORDENADOR) {
      throw new Error('Você não tem permissão para acessar essa página')
    }
  }
}
