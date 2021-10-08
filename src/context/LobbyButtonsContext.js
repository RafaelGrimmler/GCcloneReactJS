import React, { useContext, useState } from "react";

const LobbyButtonsContext = React.createContext()

export function useButton(){
    return useContext(LobbyButtonsContext)
}

export function ButtonProvider({ children }){

    const [statusPrime, setStatusPrime] = useState(true)
    const [comVagas, setComVagas] = useState(true)
    const [timeFechado, setTimeFechado] = useState(false)
    const [modoTreino, setModoTreino] = useState(false)

    return(
        <LobbyButtonsContext.Provider
            value={{
                statusPrime, 
                setStatusPrime,
                comVagas, 
                setComVagas, 
                timeFechado, 
                setTimeFechado,
                modoTreino, 
                setModoTreino
            }}
        >
            {children}
        </LobbyButtonsContext.Provider>
    )

}