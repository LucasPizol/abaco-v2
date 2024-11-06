import { Injectable } from "@angular/core";
import { IPaginationRequest, IPaginationResponse } from "../../interfaces/PaginationRequest";
import { IGradeModel } from "./IGrade";
import { api } from "../api";

@Injectable({
    providedIn: 'root',
})
export class GradeService {
    constructor() { }

    async getGrades(
        request: IPaginationRequest<IGradeModel>
    ): Promise<{ data: IGradeModel[] }> {
        try {
            const response = await api.get<IPaginationResponse<IGradeModel>>(
                '/notas',
                request
            );
            return response;
        } catch (error) {
            console.error('Erro ao buscar notas:', error);
            throw error;
        }
    }
}
