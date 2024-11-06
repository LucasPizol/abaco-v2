import { IStudentModel } from "../student/Istudent";


type PartialStudentInfo = Pick<IStudentModel, 'id' | 'nome' | 'situacao'>;

export interface IAbsenceModel {
    id: number;
    data: Date;
    frequencia: boolean;
    alunos_id: number;
    aula_id: number;
    studants: PartialStudentInfo;
}