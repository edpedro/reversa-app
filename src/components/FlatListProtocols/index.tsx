import {
    Box,
    Heading,
    Center,
    Pressable,
    HStack,
    Divider,
    Text,
} from 'native-base';
import { navigate } from '../../routes/stack/Navigate';
import { NameProtocolData } from '../../contexts/types';

export default function FlatListProtocols({
    data,
}: {
    data: NameProtocolData;
}) {
    const handlePress = (id: string, name: string) => {
        navigate({
            name: 'ListCodigos',
            params: { idNameProtocol: id, nameProtocol: name },
        });
    };

    return (
        <Box flex={1} w="100%" h="100%" flexDirection="column" bg="white">
            <Center w="100%">
                <Pressable onPress={() => handlePress(data.id, data.name)}>
                    {({ isPressed }) => (
                        <>
                            <Box
                                _dark={{
                                    borderColor: 'muted.50',
                                }}
                                borderColor="muted.800"
                                pl={['0', '4']}
                                pr={['1', '4']}
                                style={{
                                    transform: [
                                        {
                                            scale: isPressed ? 0.96 : 1,
                                        },
                                    ],
                                }}
                            >
                                <HStack w="100%" padding={3}>
                                    <Divider
                                        bg="green.500"
                                        thickness="6"
                                        orientation="vertical"
                                        rounded="md"
                                    />
                                    <Box
                                        w="100%"
                                        h={65}
                                        bg="white"
                                        rounded="md"
                                        shadow="3"
                                        alignItems="center"
                                    >
                                        <Text
                                            fontWeight="300"
                                            color="gray.700"
                                            mt="4"
                                            style={{
                                                fontFamily: 'Inter_400Regular',
                                                fontSize: 18,
                                            }}
                                        >
                                            {data.name}
                                        </Text>
                                    </Box>
                                </HStack>
                            </Box>
                        </>
                    )}
                </Pressable>
            </Center>
        </Box>
    );
}
