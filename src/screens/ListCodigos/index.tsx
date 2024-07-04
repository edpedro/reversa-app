import { Box, Heading, Center, FlatList } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import FlatListCodigos from '../../components/FlatListCodigos';

const data = [
    {
        id: '1',
        codigo: '0192-0450-0',
    },
    {
        id: '2',
        codigo: '0192-0446-6',
    },
    {
        id: '3',
        codigo: '0192-0132-1',
    },
];

export default function ListCodigos() {
    return (
        <Box flex={1} w="100%" h="100%" flexDirection="row" bg="white" pt="10">
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
                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={4}
                >
                    <Ionicons
                        name="add-circle-outline"
                        size={32}
                        color="black"
                        style={{
                            marginRight: 16,
                        }}
                    />
                    <FontAwesome5
                        name="edit"
                        size={26}
                        color="black"
                        style={{
                            marginLeft: 16,
                        }}
                    />
                    <MaterialIcons
                        name="delete-outline"
                        size={33}
                        color="black"
                        style={{
                            marginLeft: 16,
                        }}
                    />
                </Box>

                <FlatList
                    data={data}
                    renderItem={({ item }) => <FlatListCodigos data={item} />}
                    keyExtractor={(item) => item.id}
                />
            </Center>
        </Box>
    );
}
