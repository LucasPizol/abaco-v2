import { api } from '../api'
import { ICourseModel } from './ICourse'

export class CourseService {
  constructor() {}
  async getCourses() {
    try {
      return await api.get<ICourseModel[]>('/cursos')
    } catch (error) {
      throw error
    }
  }
}
