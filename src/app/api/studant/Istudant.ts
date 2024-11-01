export interface IStudentModel {
    id: number;
    nome: string;
    email?: string;
    celular: string;
    cpf: string;
    rg?: string;
    genero: string;
    data_nascimento: Date;
    escolaridade: number;
    situacao: string;
  }
  