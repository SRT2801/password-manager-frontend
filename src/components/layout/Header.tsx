import { Bars3Icon, XMarkIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/auth.service';
import Button from '../ui/Button';
import { useToast } from '../../hooks/useToast';

interface HeaderProps {
    toggleSidebar: () => void;
    isOpen: boolean;
}

export default function Header({ toggleSidebar, isOpen }: HeaderProps) {
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const navigate = useNavigate();
    const { showSuccess, showError } = useToast();

    const handleLogout = async () => {
        try {
            setIsLoggingOut(true);
            const response = await authService.logout();
            if (response.status < 400 || response.status === 401) {
                localStorage.removeItem('user');
                sessionStorage.removeItem('user');

                showSuccess("Has cerrado sesión correctamente");
                navigate('/login');
            } else {
                console.error('Error al cerrar sesión:', response.error);
                showError('Hubo un problema al cerrar sesión. Inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            navigate('/login');
        } finally {
            setIsLoggingOut(false);
        }
    };

    return (
        <header className="bg-gray-800 text-white h-16 w-full flex items-center justify-between px-6 shadow-md">
            <div className="flex items-center">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md hover:bg-gray-700"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isOpen ?
                        <XMarkIcon className="h-6 w-6" /> :
                        <Bars3Icon className="h-6 w-6" />
                    }
                </button>
                <h1 className="text-xl font-bold ml-2">Password Manager</h1>
            </div>
            <div className="flex items-center space-x-4">
                <Button variant="primary" size="sm">
                    Mi Perfil
                </Button>
                <Button
                    variant="danger"
                    size="sm"
                    isLoading={isLoggingOut}
                    onClick={handleLogout}
                    className="flex items-center"
                >
                    <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
                    Cerrar sesión
                </Button>
            </div>
        </header>
    );
}
