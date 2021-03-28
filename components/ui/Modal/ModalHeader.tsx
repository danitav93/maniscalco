import React from "react";
import {Text, Icon, withTheme} from "react-native-elements";
import {StyleSheet, View} from "react-native";

interface Props {
    title: string;
    onClose?: () => void;
}

export const ModalHeader = withTheme<Props>(({title, onClose, theme}) => {

    return (
        <View style={styles.TopContainer}>
            <Text h4 h4Style={{fontSize: 15, fontWeight: "bold"}}>
                {title}
            </Text>
            {!!onClose &&
                <Icon
                    name='times'
                    type='font-awesome'
                    color={theme.colors!.grey0}
                    size={20}
                    onPress={onClose}
                />
            }
        </View>);

});

const styles = StyleSheet.create({
    TopContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
});
