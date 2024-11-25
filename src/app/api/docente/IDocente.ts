export enum DocenteRole {
  COORDENADOR = 1,
  DOCENTE = 0,
}

export interface IDocenteModel {
  id: number
  nome: string
  email?: string
  celular: string
  cpf: string
  rg?: string
  data_nascimento: Date
  genero: string
  senha: string
  permissao: DocenteRole
}
