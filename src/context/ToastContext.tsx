import React from 'react';
import { SnackbarProvider } from 'notistack';

interface ToastProviderProps {
    children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            {children}
        </SnackbarProvider>
    );
};
