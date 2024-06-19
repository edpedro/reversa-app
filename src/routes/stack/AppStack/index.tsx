import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../../screens/Home';
import NewProtocol from '../../../screens/NewProtocol';
import NewSerial from '../../../screens/Serial';

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
        </Navigator>
    );
}
