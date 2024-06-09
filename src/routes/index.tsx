import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './stack/Navigate';

import AppStack from './stack/AppStack';

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
}
