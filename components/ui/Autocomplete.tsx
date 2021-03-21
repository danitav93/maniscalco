import React, {FC} from "react";
import {FlatList, StyleSheet, View, ViewStyle} from "react-native";
import {TextInput} from "../typography/TextInput";

interface Props {
    value?: string;
    data: any[];
    onChangeText: (input: string) => void;
    renderItem: FC<{ item: any }>;
    keyExtractor: (item: any) => string;
    placeholder?: string;
    label?: string;
    style?: ViewStyle;
}

export const Autocomplete: FC<Props> = ({
                                            style,
                                            value,
                                            data,
                                            onChangeText,
                                            placeholder,
                                            renderItem,
                                            keyExtractor,
                                            label
                                        }) => {

    return (<View style={[styles.container, style]}>

        <TextInput
            label={label}
            placeholder={placeholder}
            onChange={onChangeText}
            value={value}
            leftIcon={{
                name: 'search',
                type: 'font-awesome'
            }}
        />
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    </View>)


}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
    },
});
