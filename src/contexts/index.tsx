import React from 'react';
import { ProtocolProvider } from './hooks/useProtocols';
import { ToastProvider } from './hooks/useToast';
import { LoadingProvider } from './hooks/useLoading';
import { AuthProvider } from './hooks/useAuth';

interface AppProviderProps {
    children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return (
        <LoadingProvider>
            <AuthProvider>
                <ProtocolProvider>
                    <ToastProvider>{children}</ToastProvider>
                </ProtocolProvider>
            </AuthProvider>
        </LoadingProvider>
    );
};

export default AppProvider;
