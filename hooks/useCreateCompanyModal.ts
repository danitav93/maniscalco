import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSubmittedNewCompany} from "../redux/events";
import {companyModalSelector} from "../redux/selectors/company.selector";

export const useCreateCompanyModal = () => {

    const dispatch = useDispatch();

    const createCompany = useCallback((data) => {
        dispatch(userSubmittedNewCompany(data))
    }, [dispatch])


    const {error, isLoading} = useSelector(companyModalSelector);
    return {
        error,
        isLoading,
        createCompany,
    }
}
