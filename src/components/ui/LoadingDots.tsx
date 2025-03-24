import React from 'react';

interface LoadingDotsProps {
    color?: string;
    size?: 'sm' | 'md' | 'lg';
}

const LoadingDots: React.FC<LoadingDotsProps> = ({
    color = 'bg-blue-700',
    size = 'md'
}) => {
    const sizeClasses = {
        sm: 'w-2 h-2',
        md: 'w-4 h-4',
        lg: 'w-5 h-5'
    };

    return (
        <div className="flex flex-row gap-2 items-center justify-center">
            <div className={`${sizeClasses[size]} rounded-full ${color} animate-bounce`}></div>
            <div className={`${sizeClasses[size]} rounded-full ${color} animate-bounce [animation-delay:-.3s]`}></div>
            <div className={`${sizeClasses[size]} rounded-full ${color} animate-bounce [animation-delay:-.5s]`}></div>
        </div>
    );
};

export default LoadingDots;
