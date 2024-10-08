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
import { NameProtocolData, ProtocolData } from '../../contexts/types';
import debounce from 'lodash/debounce';
import Toast from 'react-native-toast-message';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ParamsListSerial = {
    Serial: {
        type: string;
    };
};

type SerialRouteProp = RouteProp<ParamsListSerial, 'Serial'>;

type SerialScreenNavigationProp = NativeStackNavigationProp<
    ParamsListSerial,
    'Serial'
>;

type Props = {
    route: SerialRouteProp;
    navigation: SerialScreenNavigationProp;
};

const Serial: React.FC<Props> = ({ route }) => {
    const { removeSerial, searchSerial, filteredData, setFilteredData } =
        useProtocol();

    const { type } = route.params;

    const [nameProtocol, setNameProtocol] = useState<NameProtocolData>();
    const [query, setQuery] = useState('');

    const handleSearch = useCallback(
        async (text: string) => {
            setQuery(text);

            if (text === '') {
                setFilteredData(undefined);
            } else {
                searchSerial(text.trim(), 'search');
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

    useEffect(() => {
        return () => {
            setFilteredData(undefined);
        };
    }, []);

    function handleEmpty(type: string, data: ProtocolData) {
        if (type === 'Deletar') {
            if (data.nameProtocols) {
                removeSerial(data.serial, type);
                setFilteredData(undefined);
                setNameProtocol(undefined);
                setQuery('');
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Serial',
                    text2: 'Serial não consta em protocolo',
                });
            }
        } else {
            setFilteredData(undefined);
            setNameProtocol(undefined);
            setQuery('');
        }
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
                                            handleEmpty(type, filteredData)
                                        }
                                    >
                                        <AntDesign
                                            name="checkcircle"
                                            size={50}
                                            color={
                                                type === 'Consultar'
                                                    ? 'green'
                                                    : 'red'
                                            }
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

export default Serial;
