import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormData } from "../../schemas/auth.schema";
import { authService } from "../../services/auth.service";
import Input from "../ui/Input";
import PasswordInput from "../ui/PasswordInput";
import Button from "../ui/Button";

interface RegisterFormProps {
    onSuccess?: () => void;
    onError?: (error: string) => void;
    onSubmit?: () => void; // Nuevo prop
}

export default function RegisterForm({ onSuccess, onError, onSubmit }: RegisterFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        },
    });

    const onSubmitForm = async (data: RegisterFormData) => {
        try {
            // Notificar que el formulario se está enviando
            onSubmit?.();

            const response = await authService.register(data);

            if (response.error || response.status >= 400) {
                onError?.(response.error || "Error durante el registro");
            } else {
                // Limpiamos el formulario después de un registro exitoso
                reset({
                    email: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                });
                onSuccess?.();
            }
        } catch (error) {
            onError?.(error instanceof Error ? error.message : "Error desconocido");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
            <Input
                id="email"
                type="email"
                label="Email"
                placeholder="tu@email.com"
                error={errors.email?.message}
                {...register("email")}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    id="firstName"
                    type="text"
                    label="Nombre"
                    placeholder="Juan"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                />

                <Input
                    id="lastName"
                    type="text"
                    label="Apellido"
                    placeholder="Pérez"
                    error={errors.lastName?.message}
                    {...register("lastName")}
                />
            </div>

            <PasswordInput
                id="password"
                label="Contraseña"
                placeholder="********"
                error={errors.password?.message}
                {...register("password")}
            />

            <Button
                type="submit"
                isLoading={isSubmitting}
                fullWidth
            >
                Registrarse
            </Button>
        </form>
    );
}
