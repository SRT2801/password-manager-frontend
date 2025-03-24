import {
    KeyIcon,
    ShieldCheckIcon,
    CreditCardIcon,
    DocumentTextIcon,
    Cog6ToothIcon,
    PlusCircleIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
    return (
        <aside className={`
      bg-gray-900 text-white w-64 min-h-screen fixed top-16 left-0 bottom-0 z-10 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
            <div className="p-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center py-2 px-4 rounded-md mb-6">
                    <PlusCircleIcon className="h-5 w-5 mr-2" />
                    <span>Nueva Contraseña</span>
                </button>

                <nav>
                    <ul className="space-y-2">
                        <li>
                            <a href="#passwords" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-800 rounded-md">
                                <KeyIcon className="h-5 w-5 mr-3" />
                                <span>Contraseñas</span>
                            </a>
                        </li>
                        <li>
                            <a href="#secure-notes" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-800 rounded-md">
                                <DocumentTextIcon className="h-5 w-5 mr-3" />
                                <span>Notas Seguras</span>
                            </a>
                        </li>
                        <li>
                            <a href="#cards" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-800 rounded-md">
                                <CreditCardIcon className="h-5 w-5 mr-3" />
                                <span>Tarjetas</span>
                            </a>
                        </li>
                        <li>
                            <a href="#security" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-800 rounded-md">
                                <ShieldCheckIcon className="h-5 w-5 mr-3" />
                                <span>Seguridad</span>
                            </a>
                        </li>
                        <li>
                            <a href="#settings" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-800 rounded-md">
                                <Cog6ToothIcon className="h-5 w-5 mr-3" />
                                <span>Configuración</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
