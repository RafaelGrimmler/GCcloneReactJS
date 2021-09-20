import React, { useContext } from "react";
import Profiles from '../Profiles.json'

const UserContext = React.createContext()

export function useUser(){
    return useContext(UserContext)
}

export function UserProvider({ children }){

    const user = Profiles[0]

    return(
        <UserContext.Provider
            value={user}
        >
            {children}
        </UserContext.Provider>
    )

}