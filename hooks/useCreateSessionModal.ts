import {useState} from "react";

export const useCreateSessionModal = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModalCallback = () => setModalOpen(true);
    const closeModalCallback = () => setModalOpen(false);
    return {
        isModalOpen,
        openModal: openModalCallback,
        closeModal: closeModalCallback
    }
}
