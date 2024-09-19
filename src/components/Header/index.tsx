import { Box, HStack, Avatar, Text, Heading, Spinner } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/hooks/useAuth';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const user = require('../../assets/profile.png');

export default function Header() {
    const { authData, signOut } = useAuth();

    function handleExit() {
        signOut();
    }

    return (
        <Box bgColor="white">
            <HStack
                padding={4}
                w="100%"
                alignItems="center"
                justifyContent="space-between"
                safeArea
            >
                <Box flexDirection="row" alignItems="flex-end">
                    <Avatar bg="green.500" source={user}></Avatar>

                    <Text fontFamily="Roboto" fontSize={16} ml={2}>
                        {authData && authData.name}
                    </Text>
                </Box>
                <Box flexDirection="column" alignItems="center" mr={6}>
                    <TouchableOpacity onPress={() => handleExit()}>
                        <MaterialCommunityIcons
                            name="location-exit"
                            size={24}
                            color="black"
                        />

                        <Text>sair</Text>
                    </TouchableOpacity>
                </Box>
            </HStack>
        </Box>
    );
}
