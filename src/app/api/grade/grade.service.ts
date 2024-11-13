import { Injectable } from '@angular/core'
import { api } from '../api'
import { IStudentModel } from '../student/Istudent'

@Injectable({
  providedIn: 'root',
})
export class GradeService {
  constructor() {}

  async getGrades(id: number): Promise<IStudentModel[]> {
    try {
      const response = await api.get<IStudentModel[]>('/estudantes/curso/' + id)

      return response
    } catch (error) {
      console.error('Erro ao buscar notas:', error)
      throw error
    }
  }
}
