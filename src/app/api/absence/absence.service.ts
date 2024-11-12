import { Injectable } from "@angular/core";
import { api } from "../api";
import { IAbsenceModel } from "./IAbsence";

@Injectable({
    providedIn: 'root',
})
export class AbsenceService {
    constructor() { }

    async getAbsence(
        id: number
    ): Promise<IAbsenceModel[]> {
        try {
            const response = await api.get<IAbsenceModel[]>(
                '/faltas/' + id,
            );
            return response;
        } catch (error) {
            console.error('Erro ao buscar faltas:', error);
            throw error;
        }
    }
}
