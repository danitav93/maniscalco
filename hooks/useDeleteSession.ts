import {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {db} from "../dbApi";
import {sessionDeleted} from "../redux/actions";
import {deleteSessionModalStateSelector} from "../redux/selectors/session.selector";
import {userPressedClose} from "../redux/events";

export const useDeleteSession = () => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const {sessionId} = useSelector(deleteSessionModalStateSelector);

    const closeModal = useCallback(() => {
        dispatch(userPressedClose());
    }, [dispatch]);

    const deleteSession = useCallback(() => {
        setLoading(true);
        db.deleteSession(sessionId!);
        dispatch(sessionDeleted({sessionId: sessionId!}));
        setLoading(false);
    }, [dispatch, sessionId])


    return {
        loading,
        deleteSession,
        isOpen: !!sessionId,
        closeModal
    }
}
