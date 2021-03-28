import React, {useCallback, useEffect} from "react";
import {useFormContext} from "react-hook-form";
import {withTheme} from "react-native-elements";
import {ViewStyle} from "react-native";
import {TextInput} from "./TextInput";

interface Props {
    placeholder?: string;
    name: string;
    leftIcon?: {
        name: string;
        type?: string;
    };
    numeric?: boolean;
    style?: ViewStyle;
    multiline?: boolean;
    label?: string;
    numberOfLines?: number;
}

export const UncontrolledInput = withTheme<Props>((props) => {

    const {register, unregister, setValue, errors, watch, trigger} = useFormContext();

    useEffect(() => {
        register({name: props.name});
        return () => {
            unregister(props.name)
        }
    }, [register, unregister])

    const onTextChange = useCallback((text: string) => {
        setValue(props.name, text);
    }, [setValue])

    const value = watch(props.name);

    const onBlur = useCallback(() => {
        trigger(props.name);
    }, [trigger, errors])

    return (<TextInput onChange={onTextChange}
                       placeholder={props.placeholder}
                       style={props.style} value={value}
                       label={props.label}
                       numeric={props.numeric}
                       numberOfLines={props.numberOfLines}
                       leftIcon={props.leftIcon}
                       errorMessage={errors[props.name]?.message}
                       onBlur={onBlur}
    />)

});
