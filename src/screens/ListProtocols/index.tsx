import React from 'react';
import { Box, Heading, Center, FlatList } from 'native-base';
import FlatListProtocols from '../../components/FlatListProtocols';
import { useProtocol } from '../../contexts/hooks/useProtocols';

export default function ListProtocols() {
    const { nameProtocolData } = useProtocol();

    return (
        <Box
            flex={1}
            w="100%"
            h="100%"
            flexDirection="column"
            bg="white"
            mb="10"
        >
            <Center w="98%">
                <Heading
                    p="5"
                    style={{
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 22,
                    }}
                >
                    Lista Protocolos
                </Heading>
                {nameProtocolData && nameProtocolData.length > 0 ? (
                    <FlatList
                        data={nameProtocolData}
                        renderItem={({ item }) => (
                            <FlatListProtocols data={item} />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <Heading p="5" fontSize={18} color="gray.500">
                        Nenhum protocolo encontrado.
                    </Heading>
                )}
            </Center>
        </Box>
    );
}
