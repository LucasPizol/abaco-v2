import { Injectable } from '@angular/core'
import { ApiService } from '../api'
import { IDocenteModel } from './IDocente'

@Injectable({
  providedIn: 'root',
})
export class DocenteService {
  constructor(private readonly api: ApiService) {}

  async getAllDocentes(): Promise<IDocenteModel[]> {
    try {
      const response = await this.api.get<IDocenteModel[]>('/docentes/all')
      return response
    } catch (error) {
      throw error
    }
  }

  async createDocente(data: Omit<IDocenteModel, 'id'>): Promise<void> {
    try {
      await this.api.post('/docentes', data)
    } catch (error) {
      throw error
    }
  }
}
