import { Injectable } from "@angular/core";
import { IPaginationRequest, IPaginationResponse } from "../../interfaces/PaginationRequest";
import { api } from "../api";
import { IAbsenceModel } from "./IAbsence";

@Injectable({
    providedIn: 'root',
})
export class AbsenceService {
    constructor() { }

    async getAbsence(
        request: IPaginationRequest<IAbsenceModel>
    ): Promise<{ data: IAbsenceModel[] }> {
        try {
            const response = await api.get<IPaginationResponse<IAbsenceModel>>(
                '/faltas',
                request
            );
            return response;
        } catch (error) {
            console.error('Erro ao buscar faltas:', error);
            throw error;
        }
    }
}
