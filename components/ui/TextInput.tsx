import {StyleSheet, TextStyle, View} from "react-native";
import {Icon, Input} from "react-native-elements";
import React, {useCallback, useMemo} from "react";
import {useTheme} from "../../hooks/useTheme";
import {InputLabel} from "../typography/InputLabel";

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
    renderErrorMessage?: boolean;
    onBlur?: () => void;
}

export const TextInput = ({
                              style, value, onChange, label, placeholder,
                              leftIcon, errorMessage, numeric, multiline, numberOfLines, renderErrorMessage,
                              onBlur
                          }: TextInputProps) => {

    const theme = useTheme();


    const styles = useMemo(() => StyleSheet.create({
        topContainer: {
            width: '100%',
            display: 'flex',
        },
        inputContainerStyle: {
            backgroundColor: `${theme.colors?.secondaryLight}`,
            height: 50,
            borderRadius: 8,
            justifyContent: 'center',
            paddingLeft: 25,
            borderBottomWidth: 0
        },
        textInputStyle: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 24,
            lineHeight: 28,
            color: `${theme.colors?.primaryText}`,
        },
        containerStyle: {
            paddingLeft: 0,
            paddingRight: 0,
        }
    }), [theme]);

    const onTextChange = useCallback((event) => {
        onChange(event.nativeEvent.text);
    }, [onChange])

    return (<View style={[styles.topContainer, style]}>
        {label && <InputLabel text={label} style={{marginBottom: 8}}/>}
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
            renderErrorMessage={renderErrorMessage}
            errorMessage={errorMessage}
            onChange={onTextChange}
            keyboardType={numeric ? "numeric" : "default"}
            defaultValue={value}
            multiline={multiline}
            numberOfLines={numberOfLines}
            style={styles.textInputStyle}
            placeholderTextColor={`${theme.colors?.placeholder}`}
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.containerStyle}
            onBlur={onBlur}
        />
    </View>)
}


