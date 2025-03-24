import { API_CONFIG } from "../config/api.config";

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  status: number;
  message?: string;
}

export interface RequestOptions {
  includeCredentials?: boolean;
  headers?: Record<string, string>;
}

export class ApiService {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
    this.defaultHeaders = API_CONFIG.HEADERS;
  }

  async get<T>(
    endpoint: string,
    params?: Record<string, string>,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    try {
      const url = new URL(`${this.baseUrl}${endpoint}`);

      if (params) {
        Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key])
        );
      }

      const requestOptions: RequestInit = {
        method: "GET",
        headers: options?.headers || this.defaultHeaders,
      };

      if (options?.includeCredentials) {
        requestOptions.credentials = "include";
      }

      const response = await fetch(url.toString(), requestOptions);

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      console.error("Error en petición GET:", error);
      return {
        error: error instanceof Error ? error.message : "Error desconocido",
        status: 500,
      };
    }
  }

  async post<T>(
    endpoint: string,
    body: any,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    try {
      const requestOptions: RequestInit = {
        method: "POST",
        headers: options?.headers || this.defaultHeaders,
        body: JSON.stringify(body),
      };

      if (options?.includeCredentials) {
        requestOptions.credentials = "include";
      }

      const response = await fetch(
        `${this.baseUrl}${endpoint}`,
        requestOptions
      );

    
      if (response.status === 401) {
        return {
          error: "correo o contraseña incorrectos",
          status: 401,
          message: "No autorizado",
        };
      }

      let data;
      try {
       
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const text = await response.text();
          data = text ? JSON.parse(text) : {};
        } else {
          data = {}; 
        }
      } catch (e) {
        console.warn("Error al parsear la respuesta como JSON", e);
        data = {};
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      console.error("Error en petición POST:", error);
      return {
        error: error instanceof Error ? error.message : "Error desconocido",
        status: 500,
      };
    }
  }

  async put<T>(
    endpoint: string,
    body: any,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    try {
      const requestOptions: RequestInit = {
        method: "PUT",
        headers: options?.headers || this.defaultHeaders,
        body: JSON.stringify(body),
      };

      if (options?.includeCredentials) {
        requestOptions.credentials = "include";
      }

      const response = await fetch(
        `${this.baseUrl}${endpoint}`,
        requestOptions
      );

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      console.error("Error en petición PUT:", error);
      return {
        error: error instanceof Error ? error.message : "Error desconocido",
        status: 500,
      };
    }
  }

  async delete<T>(
    endpoint: string,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    try {
      const requestOptions: RequestInit = {
        method: "DELETE",
        headers: options?.headers || this.defaultHeaders,
      };

      if (options?.includeCredentials) {
        requestOptions.credentials = "include";
      }

      const response = await fetch(
        `${this.baseUrl}${endpoint}`,
        requestOptions
      );

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      console.error("Error en petición DELETE:", error);
      return {
        error: error instanceof Error ? error.message : "Error desconocido",
        status: 500,
      };
    }
  }
}

export const apiService = new ApiService();
