import { Injectable } from "@angular/core";
import { api } from "../api";
import { IClassModel } from "./IClass";

@Injectable({
    providedIn: 'root',
})
export class ClassService {
    constructor() { }

    async getClass(
        id: number,
    ): Promise<IClassModel[]> {
        try {
            const response = await api.get<IClassModel[]>(
                '/aulas/' + id,
            );
            return response;
        } catch (error) {
            console.error('Erro ao buscar aulas:', error);
            throw error;
        }
    }
}
