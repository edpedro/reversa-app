import { Box, Center, Pressable, HStack, Text } from 'native-base';

interface ProtocolsData {
    id: string;
    serial: string[];
}

export default function FlatListSerial({ data }: { data: ProtocolsData }) {
    return (
        <Box flex={1} w="100%" h="100%" flexDirection="column" bg="white">
            <Center w="100%">
                <Pressable onPress={() => console.log('Protocols')}>
                    {({ isPressed }) => (
                        <>
                            <Box
                                _dark={{
                                    borderColor: 'muted.50',
                                }}
                                borderColor="muted.800"
                                pl={['0', '4']}
                                pr={['1', '4']}
                            >
                                <HStack w="100%" padding={3}>
                                    <Box
                                        w="100%"
                                        h="100%"
                                        bg="white"
                                        rounded="md"
                                        alignItems="center"
                                    >
                                        {data.serial.map((item) => (
                                            <Text
                                                key={item}
                                                style={{
                                                    fontFamily:
                                                        'Inter_400Regular',
                                                    fontSize: 22,
                                                    marginBottom: 5,
                                                }}
                                            >
                                                {item}
                                            </Text>
                                        ))}
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
