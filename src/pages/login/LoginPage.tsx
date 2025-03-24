import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";
import Card from "../../components/ui/Card";
import { useToast } from "../../hooks/useToast";

export default function LoginPage() {
    const navigate = useNavigate();
    const { showSuccess, showError } = useToast();

    const handleSuccess = () => {
        showSuccess("Inicio de sesión exitoso.");
        setTimeout(() => {
            navigate("/");
        });
    };

    const handleError = (error: string) => {
        showError(error || "Error al iniciar sesión. Intente nuevamente.");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <Card className="max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Iniciar sesión</h1>
                    <p className="text-gray-600 mt-2">
                        Ingresa tus credenciales para acceder al gestor de contraseñas
                    </p>
                </div>

                <LoginForm onSuccess={handleSuccess} onError={handleError} />

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        ¿No tienes una cuenta?{" "}
                        <Link to="/register" className="text-blue-600 hover:text-blue-800 font-medium">
                            Registrarse
                        </Link>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}
