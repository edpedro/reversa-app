import React, { createContext, useContext, useState } from 'react';

interface LoadingContextProps {
    showLoading: () => void;
    hideLoading: () => void;
    showLoadingButton: () => void;
    hideLoadingButton: () => void;
    isLoading: boolean;
    isLoadingButton: boolean;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(
    undefined,
);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingButton, setIsLoadingButton] = useState(false);

    const showLoading = () => setIsLoading(true);
    const hideLoading = () => setIsLoading(false);

    const showLoadingButton = () => setIsLoadingButton(true);
    const hideLoadingButton = () => setIsLoadingButton(false);

    return (
        <LoadingContext.Provider
            value={{
                showLoading,
                hideLoading,
                isLoading,
                showLoadingButton,
                hideLoadingButton,
                isLoadingButton,
            }}
        >
            {children}
        </LoadingContext.Provider>
    );
};

export function useLoading(): LoadingContextProps {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
}
