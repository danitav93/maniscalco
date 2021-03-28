import React, {useEffect} from 'react';
import {useFormContext} from "react-hook-form";
import DatePicker from "react-native-datepicker";
import {useTheme} from "../../../hooks/useTheme";
import {View} from "react-native";
import {InputLabel} from "../typography/InputLabel";
interface UncontrolledDatePickerProps {
    name: string;
    label?: string;
}

export const UncontrolledDatePicker = ({name, label}: UncontrolledDatePickerProps) => {

    const theme = useTheme();

    const {register, unregister, watch, setValue, errors} = useFormContext();

    const onDateChange = (newDate: string) => {
        setValue(name, newDate, {shouldValidate: true});
    }

    useEffect(() => {
        register({name});
        return () => {
            unregister(name);
        }
    }, [register, unregister])

    return (
        <View>
            {label && <InputLabel text={label} style={{marginBottom: 8}}/>}
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
                    ...errors.date ? {borderColor: theme.colors!.error} : {}
                }
            }}
            onDateChange={onDateChange}
        />
        </View>
  )
}
