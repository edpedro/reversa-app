import { useCallback, useEffect, useState } from 'react';
import Routes from './src/routes';
import AppProvider from './src/contexts';
import Toast from 'react-native-toast-message';
import toastConfig from './src/utils/ToastConfig';
import { Box, NativeBaseProvider } from 'native-base';
import * as SplashScreen from 'expo-splash-screen';
import {
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
} from '@expo-google-fonts/inter';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    Inter_400Regular,
                    Inter_600SemiBold,
                    Inter_700Bold,
                });
                await new Promise((resolve) => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (isReady) {
            await SplashScreen.hideAsync();
        }
    }, [isReady]);

    if (!isReady) {
        return null;
    }
    return (
        <AppProvider>
            <NativeBaseProvider>
                <Box onLayout={onLayoutRootView} flex={1}>
                    <Routes />
                </Box>

                <Toast config={toastConfig} />
            </NativeBaseProvider>
        </AppProvider>
    );
}
