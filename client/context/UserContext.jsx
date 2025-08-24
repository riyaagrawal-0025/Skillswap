import {createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider =({children}) =>{
    const[user , setUser] =  useState({
        name:"Full Name",
        email:"youremail@example.com",
        skills:[],
    });

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
};