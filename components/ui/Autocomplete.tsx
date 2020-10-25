import React, {FC} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {SearchBar} from "react-native-elements";

interface Props {
    value?: string;
    data: any[];
    onChangeText: (input: string) => void;
    placeholder: string;
    renderItem: FC<{item: any}>
}

export const Autocomplete: FC<Props> = ({value, data, onChangeText, placeholder, renderItem}) => {



    return (<View style={styles.container}>
        <SearchBar
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            lightTheme
        />
        <FlatList
            data={data}
            renderItem={renderItem}
        />
    </View>)


}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
    },
});
