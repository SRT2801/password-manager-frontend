import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "El email es requerido")
    .email("Formato de email inválido"),
  password: z.string().min(1, "La contraseña es requerida"),
});

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, "El email es requerido")
    .email("Formato de email inválido"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "La contraseña debe incluir al menos una letra mayúscula, una minúscula, un número y un carácter especial"
    ),
  firstName: z
    .string()
    .min(1, "El nombre es requerido")
    .max(50, "El nombre no puede tener más de 50 caracteres"),
  lastName: z
    .string()
    .min(1, "El apellido es requerido")
    .max(50, "El apellido no puede tener más de 50 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
