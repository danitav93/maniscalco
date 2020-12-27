import {Animal, UpdateAnimalInput} from "../dbApi";
import {useDispatch, useSelector} from "react-redux";
import {userPressedDeleteAnimal, userSubmittedNewAnimalNotes} from "../redux/events";
import {AnimalsModal} from "../redux/reducers/animal.reducer";
import {closeAnimalModals, openAnimalModals} from "../redux/actions";
import {animalModalSelector} from "../redux/selectors/animal.selector";


export const useAnimalModals = () => {
    const dispatch = useDispatch();
    const openModalCallback = (type: AnimalsModal, animal: Animal, groupId: string) => () => {
        dispatch(openAnimalModals({
            type,
            animal,
            groupId
        }))
    }
    const closeModalCallback = () => {
        dispatch(closeAnimalModals())
    };
    const {type, animal, groupId, loading} = useSelector(animalModalSelector);

    const deleteAnimal = () => {
        dispatch(userPressedDeleteAnimal({animalId: animal!.animalId, groupId: groupId!}));
    }

    const editNotes = ({notes}: {notes: string}) => {
        const newAnimal: UpdateAnimalInput = {
            groupId: groupId!,
            ...animal!,
            notes
        }
        dispatch(userSubmittedNewAnimalNotes(newAnimal));
    }

    return {
        openModal: openModalCallback,
        closeModal: closeModalCallback,
        animal,
        type,
        loading,
        deleteAnimal,
        editNotes
    }
}
