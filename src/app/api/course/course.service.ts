import { Injectable } from '@angular/core'
import { ApiService } from '../api'
import { ICourseModel } from './ICourse'

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private readonly api: ApiService) {}

  async getCourses(): Promise<ICourseModel[]> {
    try {
      const response = await this.api.get<ICourseModel[]>('/cursos')
      return response
    } catch (error) {
      throw error
    }
  }

  async createCourse(course: ICourseModel): Promise<void> {
    try {
      await this.api.post('/cursos', course)
    } catch (error) {
      throw error
    }
  }
}
