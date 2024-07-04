import { Box, Heading, Center, FlatList } from 'native-base';

import FlatListProtocols from '../../components/FlatListProtocols';

const data = [
    {
        id: '1',
        protocol: 'correios',
    },
    {
        id: '2',
        protocol: 'correios 2024',
    },
    {
        id: '3',
        protocol: 'correios caroba 2024',
    },
];

export default function ListProtocols() {
    return (
        <Box
            flex={1}
            w="100%"
            h="100%"
            flexDirection="column"
            bg="white"
            pt="10"
        >
            <Center w="100%">
                <Heading
                    p="5"
                    style={{
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 22,
                    }}
                >
                    Lista Protocolos
                </Heading>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <FlatListProtocols data={item} />}
                    keyExtractor={(item) => item.id}
                />
            </Center>
        </Box>
    );
}
