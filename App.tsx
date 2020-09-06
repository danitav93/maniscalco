import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from "react-redux";
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import store from "./redux/store";
import {ThemeProvider} from 'react-native-elements';
import { Header } from 'react-native-elements';


export default function App() {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Provider store={store}>
                    <ThemeProvider>
                        <Header
                            centerComponent={{ text: 'Maniscalco', style: { color: '#fff' } }}
                        />
                        <Navigation/>
                    </ThemeProvider>
                </Provider>
            </SafeAreaProvider>
        );
    }
}
