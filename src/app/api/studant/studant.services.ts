import { Injectable } from '@angular/core';
import { api } from '../api';
import { IStudentModel } from './Istudant';
import {
  IPaginationRequest,
  IPaginationResponse,
} from '../../interfaces/PaginationRequest';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  async getStudents(
    request: IPaginationRequest<IStudentModel>
  ): Promise<{ data: IStudentModel[] }> {
    try {
      const response = await api.get<IPaginationResponse<IStudentModel>>(
        '/estudantes',
        request
      );
      return response;
    } catch (error) {
      console.error('Erro ao buscar estudantes:', error);
      throw error;
    }
  }
}
