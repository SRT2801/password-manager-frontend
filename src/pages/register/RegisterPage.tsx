import { Link } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";
import Card from "../../components/ui/Card";
import { useToast } from "../../hooks/useToast";

export default function RegisterPage() {
    const { showSuccess, showError, showInfo } = useToast();

    const handleSuccess = () => {
        showSuccess("Registro exitoso. Ahora puedes iniciar sesión.");
    };

    const handleError = (error: string) => {
        showError(error || "Error al registrar el usuario. Intente nuevamente.");
    };

    const handleSubmit = () => {
        showInfo("Procesando registro...");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <Card className="max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Crear cuenta</h1>
                    <p className="text-gray-600 mt-2">
                        Registra tus datos para acceder al gestor de contraseñas
                    </p>
                </div>

                <RegisterForm
                    onSuccess={handleSuccess}
                    onError={handleError}
                    onSubmit={handleSubmit}
                />

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        ¿Ya tienes una cuenta?{" "}
                        <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                            Iniciar sesión
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}
