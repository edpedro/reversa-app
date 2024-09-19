export interface NameProtocolData {
    id: string;
    name: string;
    date: Date;
    user: string;
}
export interface ProtocolData {
    id: string;
    codigo: string;
    serial: string;
    caixa: number;
    deposit?: string;
    center?: string;
    totalCodigo?: number;
    idProtocols?: string;
    nameProtocols_id?: string;
    nameProtocols?: string;
}

export type RootStackParamList = {
    ListCodigos: { idNameProtocol: string };
    ListSerial: { codig: string };
};

export interface SaveProtocol {
    codigo: string;
    serial: string;
    caixa: number;
    nameProtocols: string;
}

export interface ProtocolPayload {
    protocols: Array<{
        nameProtocols_id: string;
        codigo: string;
        serial: string;
        caixa: number;
    }>;
}
