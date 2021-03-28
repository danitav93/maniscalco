import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {closeModal} from "../redux/events";

export const useModal = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeModal());
    }, [dispatch])
}
