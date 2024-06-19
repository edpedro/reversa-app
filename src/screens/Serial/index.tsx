import {
    Box,
    Heading,
    Center,
    VStack,
    FormControl,
    Input,
    Text,
    HStack,
    Divider,
} from 'native-base';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function NewSerial() {
    return (
        <Box flex={1} w="100%" h="100%" bg="white" justifyContent="center">
            <Center justifyContent="center">
                <Box w="90%" maxW="290">
                    <VStack space={5}>
                        <FormControl>
                            <Text
                                style={{
                                    fontFamily: 'Inter_600SemiBold',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                }}
                            >
                                Serial
                            </Text>
                            <Input />
                        </FormControl>
                    </VStack>
                    <HStack w="100%" mt="5">
                        <Divider
                            bg="green.500"
                            thickness="2"
                            orientation="vertical"
                            rounded="md"
                        />
                        <Box w="100%" h={50} bg="white" rounded="md" shadow="3">
                            <Heading
                                fontWeight="300"
                                color="gray.700"
                                mt="3"
                                ml="10"
                                style={{
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 18,
                                }}
                            >
                                CORREIOS-31-05-2024
                            </Heading>
                        </Box>
                    </HStack>
                    <HStack w="100%" mt="6">
                        <Box
                            w="100%"
                            h={50}
                            bg="white"
                            rounded="md"
                            shadow="3"
                            alignItems="center"
                        >
                            <Heading
                                fontWeight="300"
                                color="gray.700"
                                mt="3"
                                style={{
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 18,
                                }}
                            >
                                0192-0450-0
                            </Heading>
                        </Box>
                    </HStack>
                    <HStack w="100%" mt="6">
                        <Box
                            w="100%"
                            h={50}
                            bg="white"
                            rounded="md"
                            shadow="3"
                            alignItems="center"
                        >
                            <Heading
                                fontWeight="300"
                                color="gray.700"
                                mt="3"
                                style={{
                                    fontFamily: 'Inter_600SemiBold',
                                    fontSize: 22,
                                }}
                            >
                                68D40C6F3E71
                            </Heading>
                        </Box>
                    </HStack>
                    <HStack w="100%" mt="6">
                        <Box
                            w="100%"
                            h={50}
                            bg="white"
                            rounded="md"
                            shadow="3"
                            alignItems="center"
                        >
                            <Heading
                                fontWeight="300"
                                color="gray.700"
                                mt="3"
                                style={{
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 18,
                                }}
                            >
                                CAIXA :{' '}
                                <Text
                                    style={{
                                        fontFamily: 'Inter_600SemiBold',
                                        fontSize: 24,
                                    }}
                                >
                                    10
                                </Text>
                            </Heading>
                        </Box>
                    </HStack>

                    <Box w="100%" alignItems="center">
                        <HStack
                            w="100%"
                            mt="12"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <AntDesign
                                name="checkcircle"
                                size={50}
                                color="green"
                            />
                        </HStack>
                    </Box>
                </Box>
            </Center>
        </Box>
    );
}
