import React from "react";
import {withTheme} from "react-native-elements";
import {FormProvider} from "react-hook-form";
import {StyleSheet, View} from "react-native";
import {AppBackground} from "../components/ui/AppBackground";
import {Button} from "../components/ui/Button";
import {useEditCompany} from "../hooks/useEditCompany";
import {UncontrolledInput} from "../components/ui/input/UncontrolledInput";
import {ScreenTitle} from "../components/ui/typography/ScreenTitle";
import {ErrorMessage} from "../components/ui/typography/ErrorMessage";


export const EditCompanyScreen = withTheme(({theme}) => {
    const {
        editCompany, loading, error, methods
    } = useEditCompany();


    return (
        <>
            <AppBackground/>
            <View style={styles.MainContainer}>
                <View style={styles.TopContainer}>
                    <ScreenTitle text={"Aggiorna i dati aziendali"}/>
                    <FormProvider {...methods}>
                        <UncontrolledInput
                            placeholder='Es: Azienda Agricola La Collina'
                            name="name"
                            label="Nome"
                            style={styles.inputField}
                            leftIcon={{
                                name: 'id-badge',
                                type: 'font-awesome'
                            }}
                        />
                        <UncontrolledInput
                            placeholder='Es: +39 3397639469'
                            label="Telefono"
                            name="phone"
                            leftIcon={{
                                name: 'phone',
                                type: 'font-awesome'
                            }}
                            style={styles.inputField}
                            numeric
                        />
                        <UncontrolledInput
                            placeholder='Es: mario.rossi@gmail.com'
                            label="Email"
                            name="email"
                            leftIcon={{
                                name: 'envelope',
                                type: 'font-awesome'
                            }}
                            style={styles.inputField}
                        />
                    </FormProvider>
                    {error && <ErrorMessage text={error} style={styles.errorMessageStyle}/>}
                </View>
                <Button onPress={editCompany}
                        text={"Salva"}
                        isLoading={loading}
                />
            </View>

        </>
    );
});

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        alignItems: "center"
    },
    TopContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    inputField: {
        marginTop: 20,
    },
    errorMessageStyle: {
        marginTop: 10,
    }
});
