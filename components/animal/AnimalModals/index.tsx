import React from 'react'
import {Modal} from "../../ui/Modal/Modal";
import {useAnimalModals} from "../../../hooks/useAnimalModals";
import {withTheme} from "react-native-elements";
import {AnimalNotesModal} from "./AnimalNotesModal";
import {DeleteAnimalNote} from "./DeleteAnimalModal";
import {AnimalsModal} from "../../../redux/reducers/animal.reducer";

const ComponentMap: {
    [key in AnimalsModal]: React.ComponentClass | undefined
} = {
    [AnimalsModal.DELETE_ANIMAL]: DeleteAnimalNote,
    [AnimalsModal.ANIMAL_NOTE]: AnimalNotesModal,
    [AnimalsModal.NONE]: undefined,
}

export const AnimalModals = withTheme(() => {

    const {type} = useAnimalModals();

    if (type === AnimalsModal.NONE) {
        return null;
    }

    const Component = ComponentMap[type]!;

    return (<Modal isOpen>
        <Component/>
    </Modal>);
});
