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
import { ProtocolData } from '../../contexts/types';

export default function FlatListCodigos({ data }: { data: ProtocolData }) {
    const handlePress = (codigo: string, caixa: number, id: string) => {
        navigate({
            name: 'ListSerial',
            params: { idProtocol: id, codig: codigo, caix: caixa },
        });
    };

    return (
        <Box flex={1} w="100%" h="100%" flexDirection="column" bg="white">
            <Center w="100%">
                <Pressable
                    onPress={() =>
                        data.nameProtocols_id !== undefined
                            ? handlePress(
                                  data.codigo,
                                  data.caixa,
                                  data.nameProtocols_id,
                              )
                            : handlePress(data.codigo, data.caixa, data.id)
                    }
                >
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
                                <HStack w="99%" padding={3}>
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
                                        flexDirection="row"
                                        justifyContent="center"
                                    >
                                        <Heading
                                            fontWeight="400"
                                            color="gray.700"
                                            mt="5"
                                            style={{
                                                fontFamily: 'Inter_700Bold',
                                                fontSize: 28,
                                            }}
                                        >
                                            {data.codigo}
                                        </Heading>
                                        <Text
                                            position="absolute"
                                            top="2"
                                            right="14"
                                            style={{
                                                fontFamily: 'Inter_600SemiBold',
                                            }}
                                        >
                                            {data.totalCodigo}
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
