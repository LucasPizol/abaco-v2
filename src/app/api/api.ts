import { Injectable } from '@angular/core'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { ToastrService } from 'ngx-toastr'

const ApiAxiosCreate = axios.create({
  baseURL: 'http://localhost:3125',
})

ApiAxiosCreate.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

interface CommonResponse<T> {
  body: T
  status_code: number
  type: string
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private toastService: ToastrService) {}

  async get<T>(path: string, params?: any): Promise<T> {
    return this.handleRequest(ApiAxiosCreate.get<CommonResponse<T>>(path, { params }))
  }

  async post<T>(path: string, data: any) {
    return this.handleRequest(ApiAxiosCreate.post<CommonResponse<T>>(path, data))
  }

  async put(path: string, data: any): Promise<void> {
    await this.handleRequest(ApiAxiosCreate.put(path, data))
  }

  async delete(path: string): Promise<void> {
    await this.handleRequest(ApiAxiosCreate.delete(path))
  }

  private async handleRequest<T>(request: Promise<AxiosResponse<CommonResponse<T>>>): Promise<T> {
    try {
      return (await request).data.body
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          this.toastService.error(error.response.data.error_message)
          throw error
        }
        this.toastService.error('Erro desconhecido')
        throw error
      }

      this.toastService.error('Erro desconhecido')
      throw error
    }
  }
}
