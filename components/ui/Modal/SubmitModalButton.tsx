import React, {FC} from "react";
import {Button} from "react-native-elements";

interface Props {
    onSubmit: () => void;
    title?: string;
}

export const SubmitModalFooterButton: FC<Props> = ({title = "Crea", onSubmit}) => {

    return (
        <Button
            title={title}
            titleStyle={{fontSize: 16}}
            containerStyle={{width: 100}}
            onPress={onSubmit}
        />)

}

