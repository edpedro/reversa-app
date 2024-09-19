import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import {
    Box,
    Heading,
    Center,
    HStack,
    Divider,
    VStack,
    FormControl,
    Input,
    Text,
} from 'native-base';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useProtocol } from '../../contexts/hooks/useProtocols';
import {
    ProtocolData,
    ProtocolPayload,
    SaveProtocol,
} from '../../contexts/types';
import debounce from 'lodash/debounce';
import Toast from 'react-native-toast-message';
import { RouteProp } from '@react-navigation/native';
import {
    NativeStackNavigationProp,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';

type ParamsListRegisterSerial = {
    RegisterSerial: {
        IdProtocol: string;
        name: string;
    };
};

type RegisterSerialRouteProp = RouteProp<
    ParamsListRegisterSerial,
    'RegisterSerial'
>;

type RegisterSerialScreenNavigationProp = NativeStackNavigationProp<
    ParamsListRegisterSerial,
    'RegisterSerial'
>;

type Props = {
    route: RegisterSerialRouteProp;
    navigation: RegisterSerialScreenNavigationProp;
};

const RegisterSerial: React.FC<Props> = ({ route }) => {
    const { registerProtocol, filteredData, setFilteredData, searchSerial } =
        useProtocol();

    const { IdProtocol } = route.params;

    const [query, setQuery] = useState('');

    const handleSearch = useCallback(
        async (text: string) => {
            setQuery(text);

            if (text === '') {
                setFilteredData(undefined);
            } else {
                searchSerial(text.trim(), IdProtocol);
            }
        },
        [searchSerial],
    );

    const debouncedHandleSearch = useMemo(
        () => debounce(handleSearch, 500),
        [handleSearch],
    );

    useEffect(() => {
        return () => {
            debouncedHandleSearch.cancel();
        };
    }, [debouncedHandleSearch]);

    function handleEmpty(result: any, id: string) {
        let data: ProtocolPayload = {
            protocols: [
                {
                    caixa: result.caixa || 1,
                    codigo: result.codigo || '',
                    serial: result.serial || '',
                    nameProtocols_id: id,
                },
            ],
        };

        registerProtocol(data);
        setFilteredData(undefined);
        setQuery('');
    }

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
                            <Input
                                value={query}
                                onChangeText={(text) => {
                                    setQuery(text);
                                    debouncedHandleSearch(text);
                                }}
                            />
                        </FormControl>
                    </VStack>
                    {filteredData && (
                        <>
                            <HStack w="100%" mt="5">
                                <Divider
                                    bg="green.500"
                                    thickness="2"
                                    orientation="vertical"
                                    rounded="md"
                                />
                                <Box
                                    w="100%"
                                    h={50}
                                    justifyContent="center"
                                    alignItems="center"
                                    alignContent="center"
                                    bg="white"
                                    rounded="md"
                                    shadow="3"
                                >
                                    <Text
                                        fontWeight="300"
                                        color="gray.700"
                                        alignItems="center"
                                        style={{
                                            fontFamily: 'Inter_400Regular',
                                            fontSize: 18,
                                        }}
                                    >
                                        {filteredData.nameProtocols !==
                                        undefined
                                            ? filteredData.nameProtocols
                                            : 'Sem Procotolo'}
                                    </Text>
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
                                        {filteredData?.codigo}
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
                                        {filteredData?.serial}
                                    </Heading>
                                </Box>
                            </HStack>
                            {filteredData.caixa !== undefined ? (
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
                                                    fontFamily:
                                                        'Inter_600SemiBold',
                                                    fontSize: 24,
                                                }}
                                            >
                                                {filteredData?.caixa}
                                            </Text>
                                        </Heading>
                                    </Box>
                                </HStack>
                            ) : (
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
                                            alignContent="center"
                                            alignItems="center"
                                            mt="3"
                                            style={{
                                                fontFamily: 'Inter_400Regular',
                                                fontSize: 14,
                                            }}
                                        >
                                            <Box flexDirection="row">
                                                Centro:
                                                <Text
                                                    alignItems="center"
                                                    style={{
                                                        fontFamily:
                                                            'Inter_600SemiBold',
                                                        fontSize: 14,
                                                        marginRight: 10,
                                                    }}
                                                >
                                                    {filteredData?.center}
                                                </Text>
                                            </Box>
                                            <Box flexDirection="row">
                                                Deposito:
                                                <Text
                                                    alignItems="center"
                                                    style={{
                                                        fontFamily:
                                                            'Inter_600SemiBold',
                                                        fontSize: 14,
                                                    }}
                                                >
                                                    {filteredData?.deposit}
                                                </Text>
                                            </Box>
                                        </Heading>
                                    </Box>
                                </HStack>
                            )}

                            <Box w="100%" alignItems="center">
                                <HStack
                                    w="100%"
                                    mt="12"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <TouchableOpacity
                                        onPress={() =>
                                            handleEmpty(
                                                filteredData,
                                                IdProtocol,
                                            )
                                        }
                                    >
                                        <AntDesign
                                            name="checkcircle"
                                            size={50}
                                            color="green"
                                        />
                                    </TouchableOpacity>
                                </HStack>
                            </Box>
                        </>
                    )}
                </Box>
            </Center>
        </Box>
    );
};

export default RegisterSerial;
