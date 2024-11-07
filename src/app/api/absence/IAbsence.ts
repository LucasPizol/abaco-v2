import { IClassModel } from "../class/IClass";
import { IStudentModel } from "../student/Istudent";

export interface IAbsenceModel {
    id: number;
    data: Date;
    frequencia: boolean;
    alunos: IStudentModel;
    aula: IClassModel;
}