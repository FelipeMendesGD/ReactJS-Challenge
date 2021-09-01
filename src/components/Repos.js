
import React from "react";
import { useAPI } from "../contexts/repcont";
import { Link } from 'react-router-dom';

import FeatherIcon from 'feather-icons-react';
import yellowMarker from '../assets/yellow.png';
import './styles.css';

export default function Repos() {
    const { user } = useAPI();
    
    if(user[0] != undefined)
    {
        console.log(user[1].archive_url);
    }

    return (
        <div className="user-container">
            <section>
                <h1>Teste: {user[1].archive_url} </h1>
            </section>
        </div>
    );
    //
}