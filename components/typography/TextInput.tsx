import {StyleSheet, TextStyle, View} from "react-native";
import {Icon, Input} from "react-native-elements";
import React, {useCallback, useMemo} from "react";
import {InputLabel} from "./InputLabel";
import {useTheme} from "../../hooks/useTheme";

interface TextInputProps {
    style?: TextStyle;
    value?: string;
    onChange: (text: string) => void;
    label?: string;
    placeholder?: string;
    leftIcon?: {
        name: string;
        type?: string;
        size?: number;
    };
    errorMessage?: string;
    numeric?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
}

export const TextInput = ({
                              style, value, onChange, label, placeholder,
                              leftIcon, errorMessage, numeric, multiline, numberOfLines
                          }: TextInputProps) => {

    const theme = useTheme();

    const TextInputStyle: TextStyle = useMemo(() => ({
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 30,
        lineHeight: 38,
        color: `${theme.colors?.secondaryText}`,
    }), [theme]);

    const onTextChange = useCallback((event) => {
        onChange(event.nativeEvent.text);
    }, [onChange])

    return (<View style={[styles.container, style]}>
        {label && <InputLabel text={label} style={{marginBottom: 20}}/>}
        <Input
            value={value}
            placeholder={placeholder}
            leftIcon={leftIcon ?
                <Icon
                    name={leftIcon.name}
                    size={leftIcon.size ?? 24}
                    color={theme.colors?.primary}
                    type={leftIcon.type}
                    style={{marginRight: 25}}
                /> : undefined
            }
            inputContainerStyle={{borderBottomWidth: 0}}
            renderErrorMessage={false}
            errorMessage={errorMessage}
            onChange={onTextChange}
            keyboardType={numeric ? "numeric" : "default"}
            defaultValue={value}
            multiline={multiline}
            numberOfLines={numberOfLines}
            style={TextInputStyle}
            placeholderTextColor={`${theme.colors?.placeholder}`}
            containerStyle={{
                backgroundColor: `${theme.colors?.secondaryLight}`,
                height: 50,
                borderRadius: 8,
                justifyContent: 'center',
                paddingLeft: 25
            }}
        />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
    },
});
