import { BackHandler, TouchableOpacity } from 'react-native';
import { Box, Heading, Center, FlatList, Text } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FlatListCodigos from '../../components/FlatListCodigos';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { useProtocol } from '../../contexts/hooks/useProtocols';
import { ProtocolData, ProtocolPayload } from '../../contexts/types';
import { useToast } from '../../contexts/hooks/useToast';
import Toast from 'react-native-toast-message';
import { navigate } from '../../routes/stack/Navigate';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type ParamsListCodigo = {
    ListCodigos: {
        idNameProtocol: string;
        nameProtocol: string;
    };
};

export type ListCodigoRouteProp = RouteProp<ParamsListCodigo, 'ListCodigos'>;

type ListCodigoScreenNavigationProp = NativeStackNavigationProp<
    ParamsListCodigo,
    'ListCodigos'
>;

type Props = {
    route: ListCodigoRouteProp;
    navigation: ListCodigoScreenNavigationProp;
};

export default function ListCodigos({ route }: Props) {
    const { protocolData, removeProtocol, setFilteredData, updateData } =
        useProtocol();

    const { showToast } = useToast();
    const { idNameProtocol, nameProtocol } = route.params;

    const [protocols, setProtocols] = useState<ProtocolData[]>();

    useEffect(() => {
        const loadProtocols = async () => {
            const filterIdProtocol = protocolData?.filter(
                (item) => item.nameProtocols_id === idNameProtocol,
            );

            const setCodig = new Set();
            const codigoCount: { [codigo: string]: number } = {};

            // Contar as ocorrências de cada código
            filterIdProtocol?.forEach((item) => {
                if (codigoCount[item.codigo]) {
                    codigoCount[item.codigo] += 1;
                } else {
                    codigoCount[item.codigo] = 1;
                }
            });

            // Filtrar os itens únicos por código e incluir o totalCodigo
            const result = filterIdProtocol?.filter((item) => {
                const duplicate = setCodig.has(item.codigo);
                setCodig.add(item.codigo);

                if (!duplicate) {
                    item.totalCodigo = codigoCount[item.codigo]; // Adiciona o campo totalCodigo
                    item.id = idNameProtocol;
                }

                return !duplicate;
            });

            if (result && result.length > 0) {
                setProtocols(result);
            } else {
                setProtocols(undefined);
            }
        };
        loadProtocols();
        const backAction = () => {
            Toast.hide(); // Fechar o toast
            return false; // Impedir o comportamento padrão de sair do app
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, [idNameProtocol, protocolData, updateData]);

    const handleConfirmA = () => {
        removeProtocol(idNameProtocol);
    };

    const handleCancelA = () => {};

    const handleAddSerial = () => {
        setFilteredData(undefined);
        navigate({
            name: 'RegisterSerial',
            params: { IdProtocol: idNameProtocol, name: nameProtocol },
        });
    };

    return (
        <Box flex={1} w="100%" h="100%" flexDirection="row" bg="white" mb="10">
            <Center w="100%">
                <Heading
                    p="5"
                    style={{
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 22,
                    }}
                >
                    Lista Codigos
                </Heading>
                <Text
                    p="2"
                    style={{
                        fontFamily: 'Inter_400Regular',
                        fontSize: 18,
                    }}
                >
                    {nameProtocol}
                </Text>
                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={4}
                >
                    <TouchableOpacity onPress={() => handleAddSerial()}>
                        <Ionicons
                            name="add-circle-outline"
                            size={32}
                            color="black"
                            style={{
                                marginRight: 16,
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            showToast(
                                'Deseja remove o protocolo',
                                handleConfirmA,
                                handleCancelA,
                            )
                        }
                    >
                        <MaterialIcons
                            name="delete-outline"
                            size={33}
                            color="red"
                            style={{
                                marginLeft: 40,
                            }}
                        />
                    </TouchableOpacity>
                </Box>

                <FlatList
                    data={protocols}
                    renderItem={({ item }) => <FlatListCodigos data={item} />}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                />
            </Center>
        </Box>
    );
}
