import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userPressedCreateCompany, userSubmittedNewCompany} from "../redux/events";
import {closeModal} from "../redux/actions";
import {companyModalSelector} from "../redux/selectors/company.selector";

export const useCreateCompanyModal = () => {

    const dispatch = useDispatch();

    const openModalCallback = () => {
        dispatch(userPressedCreateCompany());
    };
    const closeModalCallback = () => {
        dispatch(closeModal());
    };

    const createCompany = useCallback((data) => {
        dispatch(userSubmittedNewCompany(data))
    }, [dispatch])


    const {isOpen, error, isLoading} = useSelector(companyModalSelector);
    return {
        isOpen,
        error,
        isLoading,
        createCompany,
        openModal: openModalCallback,
        closeModal: closeModalCallback
    }
}
