import { Box, Heading, Center, FlatList, Text } from 'native-base';

import FlatListSerial from '../../components/FlatListSerial';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useProtocol } from '../../contexts/hooks/useProtocols';
import { useEffect, useState } from 'react';
import { ProtocolData } from '../../contexts/types';

type ParamsListSerial = {
    ListSerial: {
        codig: string;
        caix: string;
        idProtocol: string;
    };
};

export type ListSerialRouteProp = RouteProp<ParamsListSerial, 'ListSerial'>;

type ListSerialScreenNavigationProp = NativeStackNavigationProp<
    ParamsListSerial,
    'ListSerial'
>;

type Props = {
    route: ListSerialRouteProp;
    navigation: ListSerialScreenNavigationProp;
};

export default function ListSerial({ route }: Props) {
    const { protocolData, updateData } = useProtocol();
    const { codig, caix, idProtocol } = route.params;

    const [protocols, setProtocols] = useState<ProtocolData[]>();

    useEffect(() => {
        const result = protocolData?.filter(
            (item) => item.nameProtocols_id === idProtocol,
        );

        if (result && result.length > 0) {
            const filterResult = result.filter((item) => item.codigo === codig);

            setProtocols(filterResult);
        } else {
            setProtocols(undefined);
        }
    }, [codig, protocolData, updateData]);

    return (
        <Box flex={1} w="100%" h="100%" flexDirection="column" bg="white">
            <Center w="100%">
                <Heading
                    p="5"
                    style={{
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 22,
                    }}
                >
                    {codig}
                </Heading>
                <Text
                    p="2"
                    style={{
                        fontFamily: 'Inter_400Regular',
                        fontSize: 18,
                    }}
                >
                    Caixa:{' '}
                    <Text
                        style={{
                            fontFamily: 'Inter_600SemiBold',
                        }}
                    >
                        {caix}
                    </Text>
                </Text>
                <FlatList
                    data={protocols}
                    renderItem={({ item }) => (
                        <FlatListSerial data={item} idProcotol={idProtocol} />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </Center>
        </Box>
    );
}
