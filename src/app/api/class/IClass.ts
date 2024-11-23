import { ICourseModel } from '../course/ICourse'

export interface IClassModel {
  id: number
  descricao: string
  aula: string
  horario: string
  conteudo: string
  cursos_id: number
}
