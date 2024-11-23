import { Injectable } from '@angular/core'
import { ApiService } from '../api'
import { IStudentModel } from './Istudent'
import { IPaginationRequest, IPaginationResponse } from '../../interfaces/PaginationRequest'
import { IAddressModel } from '../address/IAddress'

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private readonly api: ApiService) {}

  async registerStudent(student: IStudentModel, address: IAddressModel) {
    return await this.api.post<IStudentModel>('/estudantes', {
      estudante: { ...student, escolaridade: Number(student.escolaridade), situacao: 'Matriculado' },
      endereco: address,
    })
  }

  async getStudents(request: IPaginationRequest<IStudentModel>): Promise<IPaginationResponse<IStudentModel>> {
    return await this.api.get<IPaginationResponse<IStudentModel>>('/estudantes', request)
  }
}
