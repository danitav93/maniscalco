import React from "react";
import {Button} from "react-native-elements";

interface Props {
    onSubmit: () => void;
    title?: string;
    color?: string;
    loading?: boolean;
}

export const SubmitModalFooterButton= ({title = "Crea", color, onSubmit, loading}: Props) => {

    return (
        <Button
            title={title}
            titleStyle={{fontSize: 16}}
            containerStyle={{width: 100}}
            buttonStyle={color ? {
                backgroundColor: "red"
            }: {}}
            onPress={onSubmit}
            loading={loading}
        />)
};

