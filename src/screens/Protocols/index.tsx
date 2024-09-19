import { useState, useCallback, useEffect } from 'react';
import {
    Box,
    Heading,
    Center,
    FlatList,
    Pressable,
    HStack,
    Divider,
} from 'native-base';

import FlatListProtocols from '../../components/FlatListProtocols';
import { navigate } from '../../routes/stack/Navigate';

const data = [
    {
        id: '1',
        protocol: 'correios',
    },
    {
        id: '2',
        protocol: 'correios 2024',
    },
    {
        id: '3',
        protocol: 'correios caroba 2024',
    },
];

export default function Protocols() {
    // const handlePress = (name: string) => {
    //     navigate({ name: name });
    // };

    return (
        <Box
            flex={1}
            w="100%"
            h="100%"
            flexDirection="column"
            bg="white"
            pt="10"
        >
            <Center w="100%">
                <Heading
                    p="5"
                    style={{
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 22,
                    }}
                >
                    Protocolo
                </Heading>
                <Pressable onPress={() => console.log('teste')}>
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
                                            fontWeight="300"
                                            color="gray.700"
                                            mt="3"
                                            style={{
                                                fontFamily: 'Inter_400Regular',
                                                fontSize: 18,
                                            }}
                                        >
                                            asdasd
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
