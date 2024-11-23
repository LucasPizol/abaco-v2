import { Injectable } from '@angular/core'
import { api } from '../api'
import { IStudentModel } from '../student/Istudent'
import { IGradeModel } from './IGrade'

@Injectable({
  providedIn: 'root',
})
export class GradeService {
  constructor() {}

  async getGrades(id: number, data: string): Promise<IStudentModel[]> {
    try {
      const response = await api.get<IStudentModel[]>('/notas/' + id, {
        data,
      })

      return response
    } catch (error) {
      console.error('Erro ao buscar notas:', error)
      throw error
    }
  }

  async loadAllGrades(): Promise<IGradeModel[]> {
    try {
      return await api.get('/notas')
    } catch (error) {
      console.error('Erro ao buscar notas:', error)
      throw error
    }
  }

  async createGrades(data: { cursos_id: number; data: Date; students: IStudentModel[] }) {
    try {
      return await api.post('/notas', data)
    } catch (error) {
      console.error('Erro ao buscar notas:', error)
      throw error
    }
  }
}
