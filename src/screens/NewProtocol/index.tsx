import { useState } from 'react';
import {
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Button,
    HStack,
} from 'native-base';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useProtocol } from '../../contexts/hooks/useProtocols';
import { useNavigation } from '@react-navigation/native';

import Toast from 'react-native-toast-message';
import { navigate } from '../../routes/stack/Navigate';
import { useLoading } from '../../contexts/hooks/useLoading';

export default function NewProtocol() {
    const { registerNameProtocol } = useProtocol();
    const { isLoadingButton } = useLoading();

    const [name, setName] = useState('');

    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const onChange = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    function handleSubmit() {
        if (date && name) {
            registerNameProtocol(date, name);
        } else {
            Toast.show({
                type: 'error',
                text1: 'Cadastro',
                text2: 'Favor preencher todos dados',
            });
        }
    }

    return (
        <Box safeArea p="4" w="100%" maxW="350" bg="white">
            <HStack
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
            >
                <Heading
                    _dark={{
                        color: 'warmGray.200',
                    }}
                    color="black"
                    fontWeight="medium"
                    size="xl"
                >
                    Novo protocolo
                </Heading>
            </HStack>

            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label
                        _text={{
                            color: 'black',
                        }}
                    >
                        Protocolo
                    </FormControl.Label>
                    <Input
                        bg="white"
                        _focus={{
                            bg: 'white',
                        }}
                        value={name}
                        onChangeText={setName}
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label
                        _text={{
                            color: 'black',
                        }}
                    >
                        Data
                    </FormControl.Label>
                    <Input
                        bg="white"
                        _focus={{
                            bg: 'white',
                        }}
                        value={date.toLocaleDateString()}
                        onFocus={showDatepicker}
                    />
                    {show && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </FormControl>

                <Button
                    mt="10"
                    h="12"
                    bg="tertiary.200"
                    _text={{
                        color: 'dark.100',
                    }}
                    _pressed={{
                        bg: 'tertiary.100',
                    }}
                    onPress={handleSubmit}
                    isLoading={isLoadingButton}
                    _loading={{
                        color: 'black',
                        _text: {
                            color: 'black',
                        },
                    }}
                    isLoadingText="Carregando..."
                >
                    Cadastrar
                </Button>
            </VStack>
        </Box>
    );
}
