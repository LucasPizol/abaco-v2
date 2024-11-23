import { Injectable } from '@angular/core'
import { api } from '../api'
import { IStudentModel } from './Istudent'
import { IPaginationRequest, IPaginationResponse } from '../../interfaces/PaginationRequest'
import { IAddressModel } from '../address/IAddress'

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  async registerStudent(student: IStudentModel, address: IAddressModel) {
    try {
      const response = await api.post<IStudentModel>('/estudantes', {
        estudante: { ...student, escolaridade: Number(student.escolaridade), situacao: 'Matriculado' },
        endereco: address,
      })

      return response
    } catch (error) {
      console.error('Erro ao cadastrar estudante:', error)
      throw error
    }
  }

  async getStudents(request: IPaginationRequest<IStudentModel>): Promise<IPaginationResponse<IStudentModel>> {
    try {
      const response = await api.get<IPaginationResponse<IStudentModel>>('/estudantes', request)
      console.log(response)
      return response
    } catch (error) {
      console.error('Erro ao buscar estudantes:', error)
      throw error
    }
  }
}
