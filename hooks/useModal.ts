import {useCallback, useState} from "react";
import {clearErrors} from "../redux/action";
import {useDispatch} from "react-redux";

export const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = useCallback(() => {
        setIsModalOpen(true);
    }, [])
    const dispatch= useDispatch();
    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        dispatch(clearErrors())
    }, [])
    return {
        isModalOpen,
        openModal,
        closeModal
    }

}
