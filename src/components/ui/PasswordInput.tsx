import { forwardRef, useState, InputHTMLAttributes } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ label, error, id, className = '', ...rest }, ref) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <div className="w-full">
                {label && (
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        id={id}
                        ref={ref}
                        type={showPassword ? 'text' : 'password'}
                        className={`w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 ${error ? 'border-red-500' : ''
                            } ${className}`}
                        {...rest}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent border-none outline-none focus:outline-none hover:text-blue-600"
                        tabIndex={-1}
                        aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    >
                        {showPassword ? (
                            <EyeSlashIcon className="h-5 w-5 text-gray-500 hover:text-blue-500 transition-colors" />
                        ) : (
                            <EyeIcon className="h-5 w-5 text-gray-500 hover:text-blue-500 transition-colors" />
                        )}
                    </button>
                </div>
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>
        );
    }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
