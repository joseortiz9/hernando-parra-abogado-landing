import React, {createContext, useContext, useState} from "react";

export type ShowOverlayContextType = {
    showOverlay: boolean;
    setShowOverlay: (showOverlay: boolean) => void;
}

export const ShowOverlayContext = createContext<ShowOverlayContextType>(
    {
        showOverlay: false,
        setShowOverlay: val => console.warn('no possible to open the overlay')
    });
export const useShowOverlay = () => useContext(ShowOverlayContext);


const ShowOverlayProvider = (props: { children: React.ReactNode; }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    return (
        <ShowOverlayContext.Provider value={{showOverlay, setShowOverlay}}>
            {props.children}
        </ShowOverlayContext.Provider>
    );
};

export default ShowOverlayProvider;