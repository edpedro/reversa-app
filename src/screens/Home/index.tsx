import { Box, Heading, Center, Pressable, HStack, Divider } from 'native-base';
import * as SplashScreen from 'expo-splash-screen';
import { navigate } from '../../routes/stack/Navigate';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const handlePress = (name: string, type?: string) => {
        navigate({ name: name, params: { type: type } });
    };

    return (
        <Box
            flex={1}
            w="100%"
            h="100%"
            flexDirection="column"
            bg="white"
            p="10"
        >
            <Center w="100%">
                <Heading
                    style={{
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 22,
                    }}
                >
                    Menu
                </Heading>
                <Pressable onPress={() => handlePress('NewProtocol')}>
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
                                        h={90}
                                        bg="white"
                                        rounded="md"
                                        shadow="3"
                                    >
                                        <Heading
                                            fontWeight="300"
                                            color="gray.700"
                                            mt="8"
                                            ml="10"
                                            style={{
                                                fontFamily: 'Inter_400Regular',
                                                fontSize: 18,
                                            }}
                                        >
                                            NOVO PROTOLOCO
                                        </Heading>
                                    </Box>
                                </HStack>
                            </Box>
                        </>
                    )}
                </Pressable>
                <Pressable onPress={() => handlePress('ListProtocols')}>
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
                                        h={90}
                                        bg="white"
                                        rounded="md"
                                        shadow="3"
                                    >
                                        <Heading
                                            fontWeight="300"
                                            color="gray.700"
                                            mt="8"
                                            ml="10"
                                            style={{
                                                fontFamily: 'Inter_400Regular',
                                                fontSize: 18,
                                            }}
                                        >
                                            LISTAR PROTOCOLO
                                        </Heading>
                                    </Box>
                                </HStack>
                            </Box>
                        </>
                    )}
                </Pressable>
                <Pressable onPress={() => handlePress('Serial', 'Consultar')}>
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
                                        h={90}
                                        bg="white"
                                        rounded="md"
                                        shadow="3"
                                    >
                                        <Heading
                                            fontWeight="300"
                                            color="gray.700"
                                            mt="8"
                                            ml="10"
                                            style={{
                                                fontFamily: 'Inter_400Regular',
                                                fontSize: 18,
                                            }}
                                        >
                                            CONSULTAR SERIAL
                                        </Heading>
                                    </Box>
                                </HStack>
                            </Box>
                        </>
                    )}
                </Pressable>
                <Pressable onPress={() => handlePress('Serial', 'Deletar')}>
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
                                        bg="red.600"
                                        thickness="6"
                                        orientation="vertical"
                                        rounded="md"
                                    />
                                    <Box
                                        w="100%"
                                        h={90}
                                        bg="white"
                                        rounded="md"
                                        shadow="3"
                                    >
                                        <Heading
                                            fontWeight="300"
                                            color="gray.700"
                                            mt="8"
                                            ml="10"
                                            style={{
                                                fontFamily: 'Inter_400Regular',
                                                fontSize: 18,
                                            }}
                                        >
                                            DELETAR SERIAL
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
