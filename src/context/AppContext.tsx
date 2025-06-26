
import React, { createContext, useContext, Context, ReactNode, Dispatch } from "react"
import { useAppReducer } from "../reducer/AppReducer";
import { AppState } from "../reducer/model/AppState";
import { AppAction } from "../reducer/model/AppAction";

type AppContextType = {
    state: AppState;
    dispatch: Dispatch<AppAction>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);



export const AppContextProvider = ({ children } : {
    children?: ReactNode;
}) => {
    const [state, dispatch] = useAppReducer();
    return (
        <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>
    )

}

export const useAppContext = () : AppContextType => {
    const context = useContext(AppContext );
    if (!context) {
        throw new Error('useStepperContext must be used within a StepperProvider');
    }
    return context;
}