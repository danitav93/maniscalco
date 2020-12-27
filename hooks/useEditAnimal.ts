import {useDispatch, useSelector} from "react-redux";
import {Animal, UpdateAnimalInput} from "../dbApi";
import {NavigationHandler} from "../navigation/NavigationService";
import {userPressedEditAnimal, userSubmittedEditedAnimal} from "../redux/events";
import {useCallback} from "react";
import {AnimalForm} from "../screens/EditAnimal";
import {editAnimalSelector} from "../redux/selectors/animal.selector";
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamList} from "../constants/Screens";

export const useEditAnimal = () => {
    const dispatch = useDispatch();
    const route = useRoute<RouteProp<RootStackParamList, 'SessionDetails'>>();
    const sessionId = route.params.sessionId;
    const navigateToEditAnimal = (animal: Animal, groupId: string) => () => {
        dispatch(userPressedEditAnimal({
            animal, groupId
        }))
        NavigationHandler.navigateToEditAnimal(sessionId, animal.animalId);
    }
    const goBack = () => {
        NavigationHandler.goBack();
    }
    const {animal, groupId, loading} = useSelector(editAnimalSelector);

    const editAnimal = useCallback((form: AnimalForm) => {
        const newAnimal: UpdateAnimalInput = {
            groupId: groupId!,
            ...animal!,
            ...form,
        }
        dispatch(userSubmittedEditedAnimal({sessionId, newAnimal}));
    }, [animal]);

    return {
        navigateToEditAnimal,
        animal,
        groupId,
        loading,
        goBack,
        editAnimal
    }
}
