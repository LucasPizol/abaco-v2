import { Injectable } from '@angular/core';
import { api } from '../api';
import { IStudentModel } from './Istudant';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  async getStudents(): Promise<{ data: IStudentModel[] }> {
    try {
      const response = await api.get<{ data: IStudentModel[] }>('/estudantes', {
        page: 0,
        pageSize: 10,
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar estudantes:', error);
      throw error;
    }
  }
}