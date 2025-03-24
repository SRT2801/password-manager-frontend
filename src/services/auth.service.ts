import { apiService, ApiResponse } from "./api.service";
import { BACKEND_ENDPOINTS } from "../constants/api.routes";

interface LoginRequest {
  email: string;
  password: string;
}

// Actualizada para coincidir con lo que espera el backend
interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface UserResponse {
  id: string;
  email: string;
  name?: string;
  firstName?: string;
  lastName?: string;
}

export class AuthService {
  async login(credentials: LoginRequest): Promise<ApiResponse<UserResponse>> {
    // Usamos includeCredentials para login porque necesitamos la cookie de sesión
    return apiService.post<UserResponse>(BACKEND_ENDPOINTS.LOGIN, credentials, {
      includeCredentials: true,
    });
  }

  async register(
    userData: RegisterRequest
  ): Promise<ApiResponse<UserResponse>> {
    // Para registro no usamos credentials ya que aún no hay autenticación
    return apiService.post<UserResponse>(BACKEND_ENDPOINTS.REGISTER, userData);
  }

  /**
   * Cerrar sesión
   * @returns ApiResponse siempre exitosa desde la perspectiva del cliente
   */
  async logout(): Promise<ApiResponse<void>> {
    try {
      // Intentar logout en el servidor
      const response = await apiService.post<void>(
        BACKEND_ENDPOINTS.LOGOUT,
        {},
        {
          includeCredentials: true,
        }
      );

      // Incluso si hay un error 401, consideramos que el logout es "exitoso"
      // desde la perspectiva del cliente
      return response;
    } catch (error) {
      console.error("Error en el logout:", error);
      // Retornamos un objeto que indica "éxito" para que la UI proceda como si el logout hubiera funcionado
      return {
        status: 200, // Simular éxito aunque haya habido un error
        message: "Sesión cerrada localmente",
      };
    }
  }

  async checkAuthStatus(): Promise<ApiResponse<UserResponse>> {
    // Incluimos credentials para verificar la sesión actual con la cookie
    return apiService.get<UserResponse>(
      BACKEND_ENDPOINTS.CHECK_STATUS,
      undefined,
      {
        includeCredentials: true,
      }
    );
  }
}

export const authService = new AuthService();
