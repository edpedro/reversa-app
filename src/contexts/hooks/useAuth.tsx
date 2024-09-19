import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../service/api';
import Toast from 'react-native-toast-message';
import { useLoading } from './useLoading';

interface AuthData {
    username: string;
    name: string;
}

interface UItoken {
    token: string;
}

interface AuthContextData {
    authData?: AuthData;
    token?: UItoken;
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [authData, setAuthData] = useState<AuthData>();
    const [token, setToken] = useState<UItoken>();

    const { hideLoading, showLoading, showLoadingButton, hideLoadingButton } =
        useLoading();

    useEffect(() => {
        loadStorageData();
    }, []);

    async function loadStorageData(): Promise<void> {
        try {
            showLoading();
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            const tokenSerialized = await AsyncStorage.getItem('@Token');

            if (authDataSerialized && tokenSerialized) {
                const _authData: AuthData = JSON.parse(authDataSerialized);
                const _token: UItoken = JSON.parse(tokenSerialized);

                setAuthData(_authData);
                setToken(_token);
            }
            hideLoading();
        } catch (error) {
            console.error('Erro ao carregar dados do armazenamento:', error);
        } finally {
            hideLoading();
        }
    }

    async function signIn(username: string, password: string) {
        try {
            showLoadingButton();

            const {
                data: { payload, token },
            } = await api.post('/auth/login', { username, password });

            setAuthData(payload);
            setToken(token);
            await AsyncStorage.setItem('@AuthData', JSON.stringify(payload));
            await AsyncStorage.setItem('@Token', JSON.stringify(token));

            Toast.show({
                type: 'success',
                text1: 'Acesso',
                text2: 'Logado com sucesso',
            });
        } catch (error) {
            console.log(error);
            Toast.show({
                type: 'error',
                text1: 'Acesso',
                text2: 'Usuario ou Senha inválida!',
            });
        } finally {
            hideLoadingButton();
        }
    }

    async function signOut() {
        try {
            setAuthData(undefined);
            setToken(undefined);
            await AsyncStorage.removeItem('@AuthData');
            await AsyncStorage.removeItem('@Token');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                authData,
                signIn,
                signOut,
                token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}
