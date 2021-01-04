import {useDispatch, useSelector} from "react-redux";
import {CreateAnimalInput} from "../dbApi";
import {NavigationHandler} from "../navigation/NavigationService";
import {userSubmittedNewAnimal} from "../redux/events";
import {useCallback} from "react";
import {AnimalForm} from "../screens/EditAnimal";
import {createAnimalSelector} from "../redux/selectors/animal.selector";
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamList} from "../constants/Screens";
import {sessionGroupsSelector} from "../redux/selectors/session.selector";

export const useCreateAnimal = () => {
    const dispatch = useDispatch();
    const sessionDetailsRoute = useRoute<RouteProp<RootStackParamList, 'SessionDetails'>>();
    const sessionId = sessionDetailsRoute.params.sessionId;
    const navigateToCreateAnimal = (groupId: string) => () => {
        NavigationHandler.navigateToCreateAnimal(sessionId, groupId);
    }
    const goBack = () => {
        NavigationHandler.goBack();
    }
    const {loading} = useSelector(createAnimalSelector);
    const createAnimalRoute = useRoute<RouteProp<RootStackParamList, 'CreateAnimal'>>();
    const groupId = createAnimalRoute.params.groupId;

    const createAnimal = useCallback((form: AnimalForm) => {
        const newAnimal: CreateAnimalInput = {
            sessionId,
            groupId,
            ...form,
        }
        dispatch(userSubmittedNewAnimal(newAnimal));
    }, [dispatch]);

    const groups = useSelector(sessionGroupsSelector);
    const currentGroup = groups.find(group => group.groupId === groupId);
    const defaultAnimalLabel = `${currentGroup?  currentGroup.animals.length + 1 : 0}`

    return {
        navigateToCreateAnimal,
        groupId,
        loading,
        goBack,
        createAnimal,
        defaultAnimalLabel
    }
}
