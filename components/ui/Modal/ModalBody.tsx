import React, {FC} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";

interface ModalBodyProps {
    style?: ViewStyle;
}

export const ModalBody: FC<ModalBodyProps> = ({style = {}, children}) => {

    return (
        <View style={style}>
            {children}
        </View>);

}
