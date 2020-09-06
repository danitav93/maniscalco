import React, {FC} from "react";
import {Button} from "react-native-elements";

interface Props {
    onClose: () => void;
    title?: string;
}

export const CancelModalFooterButton: FC<Props> = ({title = "Annulla", onClose}) => {

    return (
        <Button
            title={title}
            titleStyle={{fontSize: 16}}
            containerStyle={{width: 150}}
            type={"clear"}
            onPress={onClose}
        />)

}

