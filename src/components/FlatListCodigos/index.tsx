import { Box, Heading, Center, Pressable, HStack, Divider } from 'native-base';
import { navigate } from '../../routes/stack/Navigate';

interface ProtocolsData {
    id: string;
    codigo: string;
}

export default function FlatListCodigos({ data }: { data: ProtocolsData }) {
    const handlePress = () => {
        navigate({ name: 'ListSerial' });
    };
    return (
        <Box flex={1} w="100%" h="100%" flexDirection="column" bg="white">
            <Center w="100%">
                <Pressable onPress={() => handlePress()}>
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
                                        <Heading
                                            fontWeight="400"
                                            color="gray.700"
                                            mt="3"
                                            style={{
                                                fontFamily: 'Inter_700Bold',
                                                fontSize: 28,
                                            }}
                                        >
                                            {data.codigo}
                                        </Heading>
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
