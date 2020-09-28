import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../redux/reducer";
import {closeModal, openModal} from "../redux/action";

const isModalOpenedSelector = (state: ReduxState) => state.modal.isOpen;

export const useModal = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(isModalOpenedSelector);
    const openModalCallback = useCallback(() => {
        dispatch(openModal())
    }, [dispatch])
    const closeModalCallback = useCallback(() => {
        dispatch(closeModal())
    }, [dispatch])
    return {
        isModalOpen,
        openModal: openModalCallback,
        closeModal: closeModalCallback
    }
}
