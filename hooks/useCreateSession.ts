import {useDispatch, useSelector} from "react-redux";
import {createSessionSelector} from "../redux/selectors/session.selector";
import {useCallback} from "react";
import {
    userPressedClose,
    userPressedCreateSession,
    userSubmittedNewSession
} from "../redux/events";
import {Company, CreateSessionInput} from "../dbApi";
import {companyDetailSelector} from "../redux/selectors/company.selector";

export const useCreateSession = () => {
    const {isCreatingSession, isModalOpen} = useSelector(createSessionSelector);
    const dispatch = useDispatch();
    const openModal = useCallback(()=>{
        dispatch(userPressedCreateSession());
    },[dispatch]);
    const closeModal = () => useCallback(()=>{
        dispatch(userPressedClose());
    },[dispatch]);
    const company: Company | undefined = useSelector(companyDetailSelector);
    const createSession = useCallback((data) => {
        const input: CreateSessionInput = {
            companyId: company!.companyId,
            date: data.date,
            price: data.price,
        }
        dispatch(userSubmittedNewSession(input))
    }, [dispatch, company])
    return {
        isModalOpen,
        openModal,
        closeModal,
        isCreatingSession,
        createSession
    }
}
