import React, {FC, useCallback, useEffect} from "react";
import { useFormContext} from "react-hook-form";
import {Icon, Input, withTheme} from "react-native-elements";

interface Props {
    placeholder?: string;
    name: string;
    leftIcon?: {
        name: string;
        type?: string;
    };
}

const UncontrolledInput: FC<Props> = (props) => {

    const {register, unregister, setValue, errors} = useFormContext();

    useEffect(() => {
        register({name: props.name});
        return () => {
            unregister(props.name)
        }
    }, [register, unregister])

    const onTextChange = useCallback((event) => {
        setValue(props.name, event.nativeEvent.text);
    }, [setValue])

    return (
        <Input
            placeholder={props.placeholder}
            leftIcon={props.leftIcon ?
                <Icon
                    name={props.leftIcon.name}
                    size={24}
                    color={props.theme.colors.primary}
                    type={props.leftIcon.type}
                /> : undefined
            }
            onChange={onTextChange}
            errorMessage={errors[props.name]?.message}
        />)

}

export default withTheme(UncontrolledInput)
