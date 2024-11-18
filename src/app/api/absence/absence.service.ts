import { Injectable } from '@angular/core'
import { api } from '../api'
import { IAbsenceModel } from './IAbsence'
import { IStudentModel } from '../student/Istudent'

@Injectable({
  providedIn: 'root',
})
export class AbsenceService {
  constructor() {}

  async getAbsence(cursos_id: number): Promise<IStudentModel[]> {
    try {
      const response = await api.get<IStudentModel[]>('/frequencia/' + cursos_id)
      return response
    } catch (error) {
      console.error('Erro ao buscar faltas:', error)
      throw error
    }
  }

  async register(data: IStudentModel[], aula_id: number) {
    try {
      return await api.post('/frequencia', {
        students: data,
        aula_id
      })
    } catch (error) {
      console.error('Erro ao buscar faltas:', error)
      throw error
    }
  }
}
