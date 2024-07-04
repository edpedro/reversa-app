import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../../screens/Home';
import NewProtocol from '../../../screens/NewProtocol';
import NewSerial from '../../../screens/Serial';
import ListProtocols from '../../../screens/ListProtocols';
import Protocols from '../../../screens/Protocols';
import ListSerial from '../../../screens/ListSerial';
import ListCodigos from '../../../screens/ListCodigos';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Navigator>
            <Screen
                options={{ headerShown: false, animation: 'none' }}
                name="Home"
                component={Home}
            />
            <Screen
                options={{ headerShown: false, animation: 'none' }}
                name="NewProtocol"
                component={NewProtocol}
            />
            <Screen
                options={{ headerShown: false, animation: 'none' }}
                name="NewSerial"
                component={NewSerial}
            />
            <Screen
                options={{ headerShown: false, animation: 'none' }}
                name="ListProtocols"
                component={ListProtocols}
            />
            <Screen
                options={{ headerShown: false, animation: 'none' }}
                name="ListCodigos"
                component={ListCodigos}
            />
            <Screen
                options={{ headerShown: false, animation: 'none' }}
                name="ListSerial"
                component={ListSerial}
            />
            <Screen
                options={{ headerShown: false, animation: 'none' }}
                name="Protocols"
                component={Protocols}
            />
        </Navigator>
    );
}
