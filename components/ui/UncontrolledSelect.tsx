import React, {useEffect} from 'react'
import {FullTheme, Text, withTheme} from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";
import {useFormContext} from "react-hook-form";
import {StyleSheet, View, ViewStyle} from "react-native";
import {isNullOrUndefined} from "../../utils/isNullOrUndefined";


interface SelectProps {
    items: { label: string; value: string }[];
    name: string;
    placeholder: string;
    label: string;
    style?: ViewStyle;
}

export const UncontrolledSelect = withTheme<SelectProps>(({
                                                              theme, items,
                                                              name, placeholder, label,
                                                              style
                                                          }) => {

    const styles = getStyles(theme);

    const {register, unregister, setValue, errors, watch} = useFormContext();

    useEffect(() => {
        register({name});
        return () => {
            unregister(name)
        }
    }, [register, unregister])

    const onChangeItem = (item: { label: string; value: string }) => {
        setValue(name, item.value, {shouldValidate: true});
    }

    const value = !isNullOrUndefined(watch(name)) ? items.find(item => item.value === watch(name).toString())?.value : undefined;

    return (
        <View style={{...styles.container, ...style}}>
            <Text style={styles.label}>
                {label}
            </Text>
            <DropDownPicker
                items={items}
                onChangeItem={onChangeItem}
                placeholder={placeholder}
                defaultValue={value}
                style={{backgroundColor: '#fafafa'}}
                containerStyle={{height: 40}}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
            />
            <Text style={styles.error}>
                {errors[name] ?? ''}
            </Text>
        </View>)
})

const getStyles = (theme: Partial<FullTheme>) => StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    label: {
        fontSize: 12,
    },
    error: {
        fontSize: 12,
        color: theme.colors!.error
    }
});
