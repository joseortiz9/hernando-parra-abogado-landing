import React, {createContext, useContext, useState} from "react";

export type ShowVideoModalContextType = {
    showVideoModal: boolean;
    setShowVideoModal: (showVideoModal: boolean) => void;
}

export const ShowVideoModalContext = createContext<ShowVideoModalContextType>(
    {
        showVideoModal: false,
        setShowVideoModal: () => console.warn('no possible to open the modal')
    });
export const useVideoModal = () => useContext(ShowVideoModalContext);


const ShowVideoModalProvider = (props: { children: React.ReactNode; }) => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    return (
        <ShowVideoModalContext.Provider value={{showVideoModal, setShowVideoModal}}>
            {props.children}
        </ShowVideoModalContext.Provider>
    );
};

export default ShowVideoModalProvider;