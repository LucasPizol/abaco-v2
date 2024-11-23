import { IClassModel } from '../class/IClass'
import { IStudentModel } from '../student/Istudent'

export interface IAbsenceModel {
  id: number
  data: Date
  frequencia: boolean
  alunos: IStudentModel
  aula: IClassModel
}

export interface ICalculateAbsenceModel {
  id: number
  data: Date
  frequencia: boolean
  alunos: IStudentModel
  aula: IClassModel
  total_presenca: number
  presenca_esperada: number
  porcentagem: string
}
