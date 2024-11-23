import { Injectable } from '@angular/core'
import { ApiService } from '../api'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private readonly api: ApiService) {}

  async auth(
    email: string,
    senha: string
  ): Promise<{
    token: string
    docente: any
  }> {
    return await this.api.post('/login', { email, senha })
  }

  async getDocente(): Promise<any> {
    if (typeof window === 'undefined') {
      return
    }

    if (!localStorage.getItem('token')) {
      throw new Error('Token não encontrado')
    }

    return await this.api.get('/docentes')
  }

  async logout(): Promise<void> {
    if (typeof window === 'undefined') {
      return
    }
    localStorage.removeItem('token')
  }
}
