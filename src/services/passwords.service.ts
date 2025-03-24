import { apiService, ApiResponse } from "./api.service";
import { BACKEND_ENDPOINTS } from "../constants/api.routes";


interface PasswordEntry {
  id: string;
  title: string;
  username: string;
  password: string;
  website?: string;
  notes?: string;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

interface CreatePasswordRequest {
  title: string;
  username: string;
  password: string;
  website?: string;
  notes?: string;
  category?: string;
}


export class PasswordsService {

  async getAllPasswords(): Promise<ApiResponse<PasswordEntry[]>> {
    return apiService.get<PasswordEntry[]>(BACKEND_ENDPOINTS.PASSWORDS_BASE);
  }


  async getPasswordById(id: string): Promise<ApiResponse<PasswordEntry>> {
    return apiService.get<PasswordEntry>(
      `${BACKEND_ENDPOINTS.PASSWORDS_BY_ID}${id}`
    );
  }

  async createPassword(
    passwordData: CreatePasswordRequest
  ): Promise<ApiResponse<PasswordEntry>> {
    return apiService.post<PasswordEntry>(
      BACKEND_ENDPOINTS.PASSWORDS_BASE,
      passwordData
    );
  }

  async updatePassword(
    id: string,
    passwordData: Partial<CreatePasswordRequest>
  ): Promise<ApiResponse<PasswordEntry>> {
    return apiService.put<PasswordEntry>(
      `${BACKEND_ENDPOINTS.PASSWORDS_BY_ID}${id}`,
      passwordData
    );
  }


  async deletePassword(id: string): Promise<ApiResponse<void>> {
    return apiService.delete<void>(`${BACKEND_ENDPOINTS.PASSWORDS_BY_ID}${id}`);
  }
}

export const passwordsService = new PasswordsService();
