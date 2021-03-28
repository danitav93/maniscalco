import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {db} from "../dbApi";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";
import {sessionSchema} from "../schemas/schema";
import {sessionCreated} from "../redux/actions";
import {NavigationHandler} from "../navigation/NavigationService";
import {companyDetailSelector} from "../redux/selectors/company.selector";

interface CreateSessionForm {
    date: string,
    price: number,
}

export const useCreateSession = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const methods = useForm<CreateSessionForm>({
        mode: "onSubmit",
        resolver: yupResolver(sessionSchema),
    });

    const company = useSelector(companyDetailSelector);

    const createSession = useCallback((data: CreateSessionForm) => {
        setLoading(true);
        const sessionId = db.createSession({...data, companyId: company!.companyId});
        NavigationHandler.navigateToSessionDetails(sessionId);
        dispatch(sessionCreated());
        setLoading(false);
    }, [dispatch, company])


    return {
        loading,
        createCompany: methods.handleSubmit(createSession),
        methods,
    }
}
