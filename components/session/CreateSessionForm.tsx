import React, {useEffect} from "react";
import {StyleSheet, View} from "react-native";
import {withTheme} from 'react-native-elements';
import UncontrolledInput from "../ui/UncontrolledInput";
import {useFormContext} from "react-hook-form";
import DatePicker from 'react-native-datepicker';


const Component = (props) => {

    const {register, unregister, watch, setValue, errors} = useFormContext<{ date: string }>();

    const onDateChange = (newDate: string) => {
        setValue('date', newDate, {shouldValidate: true});
    }

    useEffect(() => {
        register({name: 'date'});
        return () => {
            unregister('date');
        }
    }, [])

    return (<View style={styles.container}>
        <DatePicker
            style={{width: 200}}
            date={watch('date') ?? ''}
            mode="date"
            placeholder="Seleziona una data"
            format="DD/MM/YYYY"
            confirmBtnText="Conferma"
            cancelBtnText="Annulla"
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36,
                    ...errors.date ? {borderColor: props.theme.colors.error} : {}
                }
            }}
            onDateChange={onDateChange}

        />
        <UncontrolledInput
            placeholder='Prezzo'
            name="price"
            style={styles.price}
            numeric
        />
    </View>)
}


const styles = StyleSheet.create({
    container: {
        width: 500,
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    price: {
        marginTop: 20,
        alignSelf: "stretch"
    }
});


export default withTheme(Component);
