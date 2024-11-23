import { Injectable } from '@angular/core'
import { ApiService } from '../api'
import { IStudentModel } from '../student/Istudent'
import { IGradeModel } from './IGrade'

@Injectable({
  providedIn: 'root',
})
export class GradeService {
  constructor(private readonly api: ApiService) {}

  async getGrades(id: number, data: string): Promise<IStudentModel[]> {
    return await this.api.get<IStudentModel[]>('/notas/' + id, {
      data,
    })
  }

  async loadAllGrades(): Promise<IGradeModel[]> {
    return await this.api.get('/notas')
  }

  async createGrades(data: { cursos_id: number; data: Date; students: IStudentModel[] }) {
    return await this.api.post('/notas', data)
  }
}
