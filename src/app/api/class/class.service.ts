import { Injectable } from '@angular/core'
import { ApiService } from '../api'
import { IClassModel } from './IClass'

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  constructor(private readonly api: ApiService) {}

  async getClass(id: number): Promise<IClassModel[]> {
    return await this.api.get<IClassModel[]>('/aulas/' + id)
  }

  async loadClasses(): Promise<IClassModel[]> {
    return await this.api.get<IClassModel[]>('/aulas')
  }

  async createClass(data: IClassModel) {
    return await this.api.post('/aulas', data)
  }
}
