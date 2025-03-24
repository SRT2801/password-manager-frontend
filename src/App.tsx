import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layout/MainLayout';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import Card from './components/ui/Card';
import { ToastProvider } from './context/ToastContext';

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={
            <MainLayout>
              <Card>
                <h1 className="text-black font-semibold mb-8">Bienvenido a tu Gestor de Contraseñas</h1>
                <p className="text-gray-600 mb-7">
                  Gestiona tus contraseñas de forma segura. Almacena, organiza y accede a tus credenciales
                  desde cualquier lugar.
                </p>
              </Card>
            </MainLayout>
          } />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}
