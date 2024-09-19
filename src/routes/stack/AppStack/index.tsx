import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../../screens/Home';
import NewProtocol from '../../../screens/NewProtocol';
import RegisterSerial from '../../../screens/RegisterSerial';
import ListProtocols from '../../../screens/ListProtocols';
import Protocols from '../../../screens/Protocols';
import ListSerial from '../../../screens/ListSerial';
import ListCodigos from '../../../screens/ListCodigos';
import Serial from '../../../screens/Serial';

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
                name="RegisterSerial"
                component={RegisterSerial}
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
            <Screen
                options={{ headerShown: false, animation: 'none' }}
                name="Serial"
                component={Serial}
            />
        </Navigator>
    );
}
