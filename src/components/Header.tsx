import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
    toggleSidebar: () => void;
    isOpen: boolean;
}

export default function Header({ toggleSidebar, isOpen }: HeaderProps) {
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
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
                    Mi Perfil
                </button>
            </div>
        </header>
    );
}
