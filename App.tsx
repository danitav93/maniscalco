import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from "react-redux";
import useCachedResources from './hooks/useCachedResources';
import store from "./redux/store";
import {ThemeProvider} from 'react-native-elements';
import { Header } from 'react-native-elements';
import * as NavigationService from './navigation/NavigationService'
import {Navigation} from "./navigation";


export default function App() {
    const isLoadingComplete = useCachedResources();
    const navigator = (ref: any) => {
        NavigationService.setNavigator(ref);
     };
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
                        <Navigation ref={navigator}/>
                    </ThemeProvider>
                </Provider>
            </SafeAreaProvider>
        );
    }
}
