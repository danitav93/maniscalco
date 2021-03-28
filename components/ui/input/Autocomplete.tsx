import React, {FC} from "react";
import {FlatList, StyleSheet, View, ViewStyle} from "react-native";
import {TextInput} from "./TextInput";

interface Props {
    value?: string;
    data: any[];
    onChangeText: (input: string) => void;
    renderItem: FC<{ item: any }>;
    keyExtractor: (item: any) => string;
    placeholder?: string;
    label?: string;
    inputStyle?: ViewStyle;
}

export const Autocomplete: FC<Props> = ({
                                            inputStyle,
                                            value,
                                            data,
                                            onChangeText,
                                            placeholder,
                                            renderItem,
                                            keyExtractor,
                                            label
                                        }) => {
    return (<View style={[styles.TopContainer]}>
        <TextInput
            label={label}
            placeholder={placeholder}
            onChange={onChangeText}
            value={value}
            leftIcon={{
                name: 'search',
                type: 'material'
            }}
            style={inputStyle}
            renderErrorMessage={false}
        />
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}

        />
    </View>)
}
const styles = StyleSheet.create({
    TopContainer: {
        alignSelf: 'stretch',
    },
});
