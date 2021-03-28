import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from "react-redux";
import useCachedResources from './hooks/useCachedResources';
import store from "./redux/store";
import {ThemeProvider} from 'react-native-elements';
import {Navigation} from "./navigation";
import {theme} from "./constants/Theme";
import {AppBackground} from "./components/ui/AppBackground";
import {StatusBar} from "react-native";


export default function App() {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <StatusBar
                            backgroundColor="black"
                            barStyle="light-content"
                        />
                        <Navigation/>
                    </ThemeProvider>
                </Provider>
            </SafeAreaProvider>
        );
    }
}
