import { Box, Heading, Center, FlatList } from 'native-base';

import FlatListSerial from '../../components/FlatListSerial';

const data = [
    {
        id: '1',
        serial: ['asdasdasd', 'Asdasdasdasd', 'ASDasdasdasd', 'Asdasdasdqasd'],
    },
];

export default function ListSerial() {
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
                    Lista Serial
                </Heading>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <FlatListSerial data={item} />}
                    keyExtractor={(item) => item.id}
                />
            </Center>
        </Box>
    );
}
