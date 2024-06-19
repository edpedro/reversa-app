import {
    Box,
    Heading,
    Center,
    VStack,
    FormControl,
    Input,
    Button,
    Text,
} from 'native-base';
import { navigate } from '../../routes/stack/Navigate';

export default function NewProtocol() {
    const handlePress = () => {
        navigate({ name: 'NewSerial' });
    };

    return (
        <Center w="100%" pt="10">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading
                    size="lg"
                    color="coolGray.800"
                    _dark={{
                        color: 'warmGray.50',
                    }}
                    fontWeight="semibold"
                >
                    Novo Protocolo
                </Heading>
                <VStack space={5} mt="6">
                    <FormControl>
                        <Text
                            style={{
                                fontFamily: 'Inter_400Regular',
                                fontSize: 16,
                            }}
                        >
                            Usuario
                        </Text>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <Text
                            style={{
                                fontFamily: 'Inter_400Regular',
                                fontSize: 16,
                            }}
                        >
                            Nº Protocolo
                        </Text>

                        <Input type="password" />
                    </FormControl>
                    <FormControl>
                        <Text
                            style={{
                                fontFamily: 'Inter_400Regular',
                                fontSize: 16,
                            }}
                        >
                            Data
                        </Text>
                        <Input type="password" />
                    </FormControl>
                    <Button
                        mt="15"
                        colorScheme="indigo"
                        bg="green.500"
                        onPress={handlePress}
                    >
                        Cadastrar
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
}
