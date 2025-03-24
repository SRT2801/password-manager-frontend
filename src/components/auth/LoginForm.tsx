import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../../schemas/auth.schema";
import { authService } from "../../services/auth.service";
import Input from "../ui/Input";
import PasswordInput from "../ui/PasswordInput";
import Button from "../ui/Button";

interface LoginFormProps {
    onSuccess?: () => void;
    onError?: (error: string) => void;
}

export default function LoginForm({ onSuccess, onError }: LoginFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await authService.login(data);

            if (response.error || response.status >= 400) {
                onError?.(response.error || "Error durante el inicio de sesión");
            } else {
                onSuccess?.();
            }
        } catch (error) {
            onError?.(error instanceof Error ? error.message : "Error desconocido");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
                id="email"
                type="email"
                label="Email"
                placeholder="tu@email.com"
                error={errors.email?.message}
                {...register("email")}
            />

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
                Iniciar sesión
            </Button>
        </form>
    );
}
