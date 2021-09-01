import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const RAPIContext = createContext();

export function RAPIContextProvider({ children }) {
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
          const { data } = await axios.get( `https://api.github.com/users/${localStorage.userId}/repos`);
          setUser(data);
        }
        fetchData();

    }, []);
    
    return (
        <RAPIContext.Provider value={{ user }}>
          {children}
        </RAPIContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(RAPIContext);
    
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }

    return context;
}