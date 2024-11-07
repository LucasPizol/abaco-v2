import { ICourseModel } from "../course/ICourse";

export interface IClassModel {
    id: number;
    descricao: string;
    aula: Date;
    cursos: ICourseModel;
}