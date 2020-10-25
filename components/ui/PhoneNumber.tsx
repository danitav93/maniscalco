import React, {FC} from "react";
import {Icon, Text, withTheme} from "react-native-elements";
import {StyleSheet, View} from "react-native";

const Component: FC<{ phone?: string, iconSize?: number }> = ({phone, iconSize = 20, theme}) => {
    if (!phone) {
        return null;
    }
    return (<View style={styles.container}>

        <Icon
            reverse
            name='phone'
            type='font-awesome'
            color={theme.colors.primary}
            size={iconSize}
        />
        <Text>{phone}</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export const PhoneNumber = withTheme(Component);
