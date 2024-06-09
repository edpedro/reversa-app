import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Navigator>
      <Screen
        options={{ headerShown: false, animation: 'none' }}
        name="Home"
        component={Home}
      />
    </Navigator>
  );
}
