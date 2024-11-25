import { Injectable } from '@angular/core'
import { ApiService } from '../api'
import { IDocenteModel } from '../docente/IDocente'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private readonly api: ApiService) {}

  beforeAuth(docente: IDocenteModel): void {}

  async auth(
    email: string,
    senha: string
  ): Promise<{
    token: string
    docente: IDocenteModel
  }> {
    return await this.api.post('/login', { email, senha })
  }

  async getDocente(): Promise<IDocenteModel | undefined> {
    if (typeof window === 'undefined') {
      return
    }

    if (!localStorage.getItem('token')) {
      throw new Error('Token não encontrado')
    }

    const docente = await this.api.get<IDocenteModel>('/docentes')

    this.beforeAuth(docente)

    return docente
  }

  async logout(): Promise<void> {
    if (typeof window === 'undefined') {
      return
    }
    localStorage.removeItem('token')
  }
}
