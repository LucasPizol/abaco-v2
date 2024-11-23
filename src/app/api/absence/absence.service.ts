import { Injectable } from '@angular/core'
import { IStudentModel } from '../student/Istudent'
import { ApiService } from '../api'
import { ICalculateAbsenceModel } from './IAbsence'

@Injectable({
  providedIn: 'root',
})
export class AbsenceService {
  constructor(private readonly api: ApiService) {}

  async getAbsence(cursos_id: number): Promise<IStudentModel[]> {
    return await this.api.get<IStudentModel[]>('/frequencia/' + cursos_id)
  }

  async register(data: IStudentModel[], aula_id: number) {
    return await this.api.post('/frequencia', {
      students: data,
      aula_id,
    })
  }

  async calculateFrequency(cursos_id: number): Promise<ICalculateAbsenceModel[]> {
    return await this.api.get('/frequencia/calcular/' + cursos_id)
  }
}
