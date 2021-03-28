import React from "react";
import {withTheme} from "react-native-elements";
import {ScreenTitle} from "../components/typography/ScreenTitle";
import {useCreateCompanyModal} from "../hooks/useCreateCompanyModal";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";
import {companySchema} from "../schemas/company";
import {StyleSheet, View} from "react-native";
import {AppBackground} from "../components/ui/AppBackground";
import {UncontrolledInput} from "../components/ui/UncontrolledInput";
import {Button} from "../components/ui/Button";
import {ErrorMessage} from "../components/typography/ErrorMessage";


export const NewCompanyScreen = withTheme(({theme}) => {
    const {
        createCompany, isLoading, error
    } = useCreateCompanyModal();

    const methods = useForm({
        mode: "onSubmit",
        resolver: yupResolver(companySchema),
    });


    return (
        <>
            <AppBackground/>
            <View style={styles.MainContainer}>
                <View style={styles.TopContainer}>
                    <ScreenTitle text={"Crea una nuova azienda"}/>
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
                <Button onPress={methods.handleSubmit(createCompany)}
                        text={"Crea azienda"}
                        isLoading={isLoading}
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
