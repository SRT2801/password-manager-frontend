import './App.css';
import MainLayout from './components/layout/MainLayout';

export default function App() {
  return (
    <MainLayout>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-black font-semibold mb-8">Bienvenido a tu Gestor de Contraseñas</h1>
        <p className="text-gray-600 mb-7">
          Gestiona tus contraseñas de forma segura. Almacena, organiza y accede a tus credenciales
          desde cualquier lugar.
        </p>
      </div>
    </MainLayout>
  );
}
