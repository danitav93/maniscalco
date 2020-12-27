import React, {useCallback, useEffect} from "react";
import {useFormContext} from "react-hook-form";
import {Icon, Input, withTheme} from "react-native-elements";
import {View, ViewStyle} from "react-native";

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

    const {register, unregister, setValue, errors, watch} = useFormContext();

    useEffect(() => {
        register({name: props.name});
        return () => {
            unregister(props.name)
        }
    }, [register, unregister])

    const onTextChange = useCallback((event) => {
        setValue(props.name, event.nativeEvent.text);
    }, [setValue])

    const value = watch(props.name);

    return (
        <View style={props.style ?? {width: '100%'}}>
            <Input
                placeholder={props.placeholder}
                leftIcon={props.leftIcon ?
                    <Icon
                        name={props.leftIcon.name}
                        size={24}
                        color={props.theme.colors!.primary}
                        type={props.leftIcon.type}
                    /> : undefined
                }
                onChange={onTextChange}
                errorMessage={errors[props.name]?.message}
                keyboardType={props.numeric ? "numeric" : "default"}
                defaultValue={value}
                multiline={props.multiline}
                label={props.label}
                numberOfLines = {props.numberOfLines}
            />
        </View>)

});
