import { Injectable } from '@angular/core'
import { api } from '../api'
import { ICourseModel } from './ICourse'

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() { }

  async getCourses(): Promise<ICourseModel[]> {
    try {
      const response = await api.get<ICourseModel[]>('/cursos')
      return response
    } catch (error) {
      console.error('Erro ao buscar estudantes:', error)
      throw error
    }
  }
}
