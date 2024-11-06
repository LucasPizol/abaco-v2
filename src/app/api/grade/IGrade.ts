import { IStudentModel } from "../studant/Istudant";

type PartialStudentInfo = Pick<IStudentModel, 'nome' | 'email' | 'data_nascimento' | 'situacao'>;

export interface IGradeModel {
    id: number;
    notas: Number;
    alunos_id: number;
    cursos_id: number;
    studants: PartialStudentInfo;
}