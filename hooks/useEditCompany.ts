import {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {db} from "../dbApi";
import {CompanyNameAlreadyExistsError} from "../errors/CompanyNameAlreadyExistsError";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";
import {companySchema} from "../schemas/schema";
import {NavigationHandler} from "../navigation/NavigationService";
import {companyUpdated} from "../redux/actions";
import {companyDetailSelector} from "../redux/selectors/company.selector";

export interface UpdateCompanyForm {
    name: string,
    email?: string,
    phone?: string
}

export const useEditCompany = () => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>();
    const companyDetails = useSelector(companyDetailSelector);

    const methods = useForm<UpdateCompanyForm>({
        mode: "onSubmit",
        resolver: yupResolver(companySchema),
        defaultValues: {
            email: companyDetails?.email,
            name: companyDetails?.name,
            phone: companyDetails?.phone,
        }
    });

    const editCompany = useCallback((data: UpdateCompanyForm) => {
        setLoading(true);
        try {
            db.updateCompany({...data, companyId: companyDetails!.companyId});
            dispatch(companyUpdated({...data, companyId: companyDetails!.companyId}));
            NavigationHandler.navigateToCompanyDetails(companyDetails!.companyId);
        } catch (error) {
            let errorMessage = 'Si è verificato un errore imprevisto';
            if (error instanceof CompanyNameAlreadyExistsError) {
                errorMessage = "Il nome dell'azienda è già stato utilizzato";
            }
            setError(errorMessage);
        }
        setLoading(false);
    }, [dispatch])


    return {
        error,
        loading,
        editCompany: methods.handleSubmit(editCompany),
        methods,
    }
}
