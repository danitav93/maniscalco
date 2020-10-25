import React, {FC} from "react";
import {Overlay, Text} from "react-native-elements";
import {StyleSheet, View} from "react-native";

interface Props {
    title: string;
}

export const ModalHeader: FC<Props> = ({title}) => {

    return (
        <View style={styles.container}>
            <Text h4 h4Style={{fontSize: 15, fontWeight: "bold"}}>
                {title}
            </Text>
        </View>);

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
    },
});
