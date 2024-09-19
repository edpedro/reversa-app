import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './stack/Navigate';

import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';
import Loading from '../components/Loading';

import { useAuth } from '../contexts/hooks/useAuth';
import Header from '../components/Header';

export default function Routes() {
    const { authData } = useAuth();

    return (
        <NavigationContainer ref={navigationRef}>
            <Loading />
            {authData ? (
                <>
                    <Header />
                    <AppStack />
                </>
            ) : (
                <AuthStack />
            )}
        </NavigationContainer>
    );
}
