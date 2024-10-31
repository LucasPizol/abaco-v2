import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/???'; //add rota do back-end

  constructor() {}

  async getStudents(): Promise<any[]> {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data; 
    } catch (error) {
      console.error('Erro ao buscar estudantes:', error);
      throw error; 
    }
  }
}
