import { ButtonHTMLAttributes, ReactNode } from 'react';
import LoadingDots from './LoadingDots';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    isLoading?: boolean;
    fullWidth?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

const Button = ({
    children,
    variant = 'primary',
    isLoading = false,
    fullWidth = false,
    size = 'md',
    className = '',
    ...rest
}: ButtonProps) => {
    const baseStyles = 'font-medium transition-colors duration-300 rounded-md';

    const variantStyles = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-400',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 disabled:bg-gray-100',
        danger: 'bg-red-600 hover:bg-red-700 text-white disabled:bg-red-400'
    };

    const sizeStyles = {
        sm: 'py-1 px-3 text-sm',
        md: 'py-2 px-4',
        lg: 'py-3 px-6 text-lg'
    };

    const widthStyle = fullWidth ? 'w-full' : '';

    // Determinar el color de los puntos de carga según la variante del botón
    const loadingDotsColor = variant === 'primary' || variant === 'danger' ? 'bg-white' : 'bg-blue-700';
    const dotsSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md';

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
            disabled={isLoading || rest.disabled}
            {...rest}
        >
            {isLoading ? <LoadingDots color={loadingDotsColor} size={dotsSize} /> : children}
        </button>
    );
};

export default Button;
