import React, { createContext, useContext, useEffect, useState } from 'react';
import { NameProtocolData, ProtocolData, ProtocolPayload } from '../types';
import api from '../../service/api';
import Toast from 'react-native-toast-message';
import { navigate, reset } from '../../routes/stack/Navigate';
import { useLoading } from './useLoading';
import { useAuth } from './useAuth';

interface ProtocolContextData {
    nameProtocolData?: NameProtocolData[];
    protocolData?: ProtocolData[];
    baseSerial?: ProtocolData[];
    storageCaix?: ProtocolData[];
    filteredData?: ProtocolData;
    updateData: boolean;
    setFilteredData: React.Dispatch<
        React.SetStateAction<ProtocolData | undefined>
    >;
    registerNameProtocol: (date: Date, name: string) => Promise<void>;
    removeProtocol: (id: string) => Promise<void>;
    removeSerial: (serial: string, type?: string, id?: string) => Promise<void>;
    registerProtocol: (data: ProtocolPayload) => Promise<void>;
    searchSerial: (serial: string, type: string) => Promise<void>;
}

const ProtocolContext = createContext<ProtocolContextData>({
    nameProtocolData: undefined,
    protocolData: undefined,
    baseSerial: undefined,
    storageCaix: undefined,
    filteredData: undefined,
    updateData: false,
    setFilteredData: () => {},
    registerNameProtocol: async () => {},
    removeProtocol: async () => {},
    removeSerial: async () => {},
    registerProtocol: async () => {},
    searchSerial: async () => {},
});

export const ProtocolProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [nameProtocolData, setNameProtocolData] =
        useState<NameProtocolData[]>();
    const [protocolData, setProtocolData] = useState<ProtocolData[]>();
    const [filteredData, setFilteredData] = useState<ProtocolData>();
    const [updateData, setUpdateData] = useState(false);

    const { hideLoading, showLoading, hideLoadingButton, showLoadingButton } =
        useLoading();

    const { token } = useAuth();

    useEffect(() => {
        loadProtcolData();
        setUpdateData(false);
    }, [updateData]);

    async function loadProtcolData(): Promise<void> {
        try {
            showLoading();
            const { data: nameProtocols } = await api.get('/nameprotocol', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const { data: protocols } = await api.get('/protocol', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setNameProtocolData(nameProtocols);
            setProtocolData(protocols);
        } catch (error) {
            console.error('Error loading protocol data:', error);
        } finally {
            hideLoading();
        }
    }

    async function registerNameProtocol(date: Date, name: string) {
        try {
            showLoadingButton();
            await api.post<ProtocolData>(
                'nameprotocol',
                {
                    date,
                    name,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            loadProtcolData();
            setUpdateData(true);
            Toast.show({
                type: 'success',
                text1: 'Protocolo',
                text2: 'Cadastro feito com sucesso',
            });

            reset({ name: 'ListProtocols' });
        } catch (error) {
            console.log(error);
            Toast.show({
                type: 'error',
                text1: 'Protocolo',
                text2: 'Protocolo já cadastrado!',
            });
        } finally {
            hideLoadingButton();
        }
    }
    async function registerProtocol(data: ProtocolPayload) {
        try {
            showLoading();
            await api.post('protocol', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            loadProtcolData();
            setUpdateData(true);
            Toast.show({
                type: 'success',
                text1: 'Protocolo',
                text2: 'Cadastro feito com sucesso',
            });

            hideLoading();
        } catch (error) {
            hideLoading();
            console.log(error);
            Toast.show({
                type: 'error',
                text1: 'Protocolo',
                text2: 'Erro no cadastro!',
            });
        }
    }

    async function removeProtocol(id: string) {
        showLoading();
        try {
            await api.delete(`nameprotocol/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            loadProtcolData();
            setUpdateData(true);
            Toast.show({
                type: 'success',
                text1: 'Protocolo',
                text2: 'Deletado com sucesso',
            });

            navigate({ name: 'ListProtocols' });
            hideLoading();
        } catch (error) {
            hideLoading();
            Toast.show({
                type: 'error',
                text1: 'Protocolo',
                text2: 'Protocolo não deletado!',
            });
        }
    }

    async function removeSerial(serial: string, type?: string, id?: string) {
        showLoading();
        try {
            await api.delete<ProtocolData>(`protocol/serial`, {
                params: {
                    serial,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            loadProtcolData();
            setUpdateData(true);
            Toast.show({
                type: 'success',
                text1: 'Serial',
                text2: 'Deletado com sucesso',
            });
            hideLoading();
        } catch (error) {
            hideLoading();
            Toast.show({
                type: 'error',
                text1: 'Serial',
                text2: 'Serial não deletado!',
            });
        }
    }

    async function searchSerial(serial: string, type: string) {
        showLoading();
        try {
            const { data } = await api.get<ProtocolData>(`baseserial/serial`, {
                params: {
                    serial,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (type === 'search') {
                setFilteredData(data);
            } else {
                const safeProtocolData = protocolData ?? [];

                if (safeProtocolData.length > 0) {
                    const codCaix = safeProtocolData.find(
                        (item) => item.codigo === data.codigo,
                    );

                    const newCaixa = codCaix
                        ? codCaix.caixa
                        : Math.max(
                              ...safeProtocolData.map((item) => item.caixa),
                          ) + 1;

                    const newBaseSerial = {
                        serial: data.serial,
                        id: data.id,
                        codigo: data.codigo,
                        deposit: data.deposit,
                        center: data.center,
                        caixa: newCaixa,
                    };
                    setFilteredData(newBaseSerial);
                } else {
                    const newSerial = {
                        serial: data.serial,
                        id: data.id,
                        codigo: data.codigo,
                        deposit: data.deposit,
                        center: data.center,
                        caixa: 1,
                    };
                    setFilteredData(newSerial);
                }
            }

            //protocolData
        } catch (error) {
            setFilteredData(undefined);
            Toast.show({
                type: 'error',
                text1: 'Serial',
                text2: 'Serial não encontrado!',
            });
        }

        hideLoading();
    }

    return (
        <ProtocolContext.Provider
            value={{
                nameProtocolData,
                protocolData,
                registerNameProtocol,
                removeProtocol,
                removeSerial,
                filteredData,
                setFilteredData,
                registerProtocol,
                searchSerial,
                updateData,
            }}
        >
            {children}
        </ProtocolContext.Provider>
    );
};

export function useProtocol(): ProtocolContextData {
    const context = useContext(ProtocolContext);

    if (!context) {
        throw new Error('useProtocol must be used within a ProtocolProvider');
    }

    return context;
}
