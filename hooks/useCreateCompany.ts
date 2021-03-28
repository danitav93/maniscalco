import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";
import {companySchema} from "../schemas/schema";
import {db} from "../dbApi";
import {companyCreated} from "../redux/actions";
import {NavigationHandler} from "../navigation/NavigationService";
import {CompanyNameAlreadyExistsError} from "../errors/CompanyNameAlreadyExistsError";

interface CreateCompanyForm {
    name: string,
    email?: string,
    phone?: string
}

export const useCreateCompany = () => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>();

    const methods = useForm<CreateCompanyForm>({
        mode: "onSubmit",
        resolver: yupResolver(companySchema),
    });

    const createCompany = useCallback((data: CreateCompanyForm) => {
        setLoading(true);try {
            const companyId = db.createCompany({...data});
            dispatch(companyCreated());
            NavigationHandler.navigateToCompanyDetails(companyId, true)
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
        createCompany: methods.handleSubmit(createCompany),
        methods,
    }
}
