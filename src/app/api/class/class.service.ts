import { Injectable } from "@angular/core";
import { IPaginationRequest, IPaginationResponse } from "../../interfaces/PaginationRequest";
import { api } from "../api";
import { IClassModel } from "./IClass";

@Injectable({
    providedIn: 'root',
})
export class ClasssService {
    constructor() { }

    async getClass(
        request: IPaginationRequest<IClassModel>
    ): Promise<{ data: IClassModel[] }> {
        try {
            const response = await api.get<IPaginationResponse<IClassModel>>(
                '/aulas',
                request
            );
            return response;
        } catch (error) {
            console.error('Erro ao buscar aulas:', error);
            throw error;
        }
    }
}
