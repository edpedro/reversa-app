import React, { createContext, useContext, useState, ReactNode } from 'react';
import Toast from 'react-native-toast-message';

interface ToastContextProps {
    showToast: (
        message: string,
        onConfirm: () => void,
        onCancel: () => void,
    ) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const showToast = (
        message: string,
        onConfirm: () => void,
        onCancel: () => void,
    ) => {
        Toast.show({
            type: 'customToast',
            text1: 'Confirmação',
            text2: message,
            position: 'bottom',
            props: { onConfirm, onCancel },
            autoHide: false,
        });
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
