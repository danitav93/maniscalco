import React from "react";
import {withTheme} from "react-native-elements";
import {FormProvider} from "react-hook-form";
import {StyleSheet, View} from "react-native";
import {AppBackground} from "../components/ui/AppBackground";
import {Button} from "../components/ui/Button";
import {useCreateSession} from "../hooks/useCreateSession";
import {ScreenTitle} from "../components/ui/typography/ScreenTitle";
import {UncontrolledInput} from "../components/ui/input/UncontrolledInput";


export const NewSessionScreen = withTheme(({theme}) => {
    const {
        createCompany, loading, methods
    } = useCreateSession();


    return (
        <>
            <AppBackground/>
            <View style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <ScreenTitle text={"Crea una sessione"}/>
                    <FormProvider {...methods}>
                        <UncontrolledInput
                            label={"Data"}
                            placeholder='Es: 09/07/2020'
                            name="date"
                            style={styles.inputField}
                            leftIcon={{
                                name: 'calendar',
                                type: 'font-awesome'
                            }}
                            numeric
                        />
                        <UncontrolledInput
                            label={"Prezzo per animale"}
                            placeholder='Es: 12'
                            name="price"
                            style={styles.inputField}
                            numeric
                            leftIcon={{
                                name: 'logo-euro',
                                type: 'ionicon'
                            }}
                        />
                    </FormProvider>
                </View>
                <Button onPress={createCompany}
                        text={"Crea sessione"}
                        isLoading={loading}
                />
            </View>

        </>
    );
});

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        alignItems: "center"
    },
    topContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    errorMessageStyle: {
        marginTop: 10,
    },
    inputField: {
        marginTop: 20,
        alignSelf: "stretch"
    }
});
