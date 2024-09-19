import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { Box, Center, Pressable, HStack, Text, View } from 'native-base';
import { ProtocolData } from '../../contexts/types';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useToast } from '../../contexts/hooks/useToast';

import Toast from 'react-native-toast-message';
import { useProtocol } from '../../contexts/hooks/useProtocols';

interface FlatListSerialProps {
    data: ProtocolData;
    idProcotol: string;
}

export default function FlatListSerial({ data }: FlatListSerialProps) {
    const { removeSerial } = useProtocol();
    const { showToast } = useToast();

    useEffect(() => {
        const backAction = () => {
            Toast.hide(); // Fechar o toast
            return false; // Impedir o comportamento padrão de sair do app
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);

    const handleConfirmA = (serial: string) => {
        removeSerial(serial);
    };

    const handleCancelA = () => {};

    return (
        <Box flex={1} w="100%" h="100%" flexDirection="column" bg="white">
            <Center w="100%">
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
                            w="90%"
                            h="100%"
                            bg="white"
                            rounded="md"
                            alignItems="center"
                            flexDirection="row"
                            justifyContent="center"
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'Inter_400Regular',
                                        fontSize: 22,
                                    }}
                                >
                                    {data.serial}
                                </Text>
                                <MaterialIcons
                                    name="delete-outline"
                                    size={33}
                                    color="red"
                                    style={{
                                        marginLeft: 16,
                                    }}
                                    onPress={() =>
                                        showToast(
                                            `Deleta Serial - ${data.serial}`,
                                            () => handleConfirmA(data.serial),
                                            handleCancelA,
                                        )
                                    }
                                />
                            </View>
                        </Box>
                    </HStack>
                </Box>
            </Center>
        </Box>
    );
}
