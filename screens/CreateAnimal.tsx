import React from "react";
import {Text, withTheme} from "react-native-elements";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";
import {animalSchema} from "../schemas/company";
import {AnimalForm as AnimalFormComponent} from "../components/animal/AnimalForm/AnimalForm";
import {ModalFooter} from "../components/ui/Modal/ModalFooter";
import {CancelModalFooterButton} from "../components/ui/Modal/CancelModalFooterButton";
import {SubmitModalFooterButton} from "../components/ui/Modal/SubmitModalButton";
import {Cure, Disease} from "../dbApi";
import {KeyboardAvoidingView, StyleSheet, View} from "react-native";
import {useCreateAnimal} from "../hooks/useCreateAnimal";

export interface AnimalForm {
    label?: string;
    frontLeftDisease?: Disease | null,
    frontLeftCure?: Cure | null
    frontRightDisease?: Disease | null,
    frontRightCure?: Cure | null,
    rearLeftDisease?: Disease | null,
    rearLeftCure?: Cure | null,
    rearRightDisease?: Disease | null,
    rearRightCure?: Cure | null,
}

export const CreateAnimal = withTheme(({theme}) => {

    const { loading, goBack, defaultAnimalLabel, createAnimal} = useCreateAnimal();

    const methods = useForm<AnimalForm>({
        mode: "onSubmit",
        resolver: yupResolver(animalSchema),
        defaultValues: {
            label: defaultAnimalLabel,
        }
    });

    return (
        <View style={{flex: 1, padding: 30}}>
            <Text style={{marginBottom: 30}}>Modifica i dati dell' animale</Text>
            <FormProvider {...methods} >
                <AnimalFormComponent/>
            </FormProvider>
            <KeyboardAvoidingView behavior={'position'} style={styles.buttonsStyle}>
                <ModalFooter>
                    <CancelModalFooterButton onClose={goBack} disabled={loading}/>
                    <SubmitModalFooterButton onSubmit={methods.handleSubmit(createAnimal)} title={"Salva"}
                                             loading={loading}/>
                </ModalFooter>
            </KeyboardAvoidingView>
        </View>
    )
});

const styles = StyleSheet.create({
    buttonsStyle: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    }
});
