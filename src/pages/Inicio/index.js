import React from 'react';
import {APIContextProvider} from '../../contexts/apiContext';
import User from '../../components/User';


export default function Inicio(){  

    return (
        <APIContextProvider>
            <User></User>     
        </APIContextProvider>
    )
};