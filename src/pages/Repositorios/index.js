import React from 'react';
import {RAPIContextProvider} from '../../contexts/repcont';
import Repos from '../../components/Repos';

export default function Repositorios(){  

    return (
        <RAPIContextProvider>
            <Repos></Repos>
            
        </RAPIContextProvider>
    )
};
