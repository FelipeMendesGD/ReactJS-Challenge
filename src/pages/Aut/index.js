import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.png';

export default function Aut(){
    
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        localStorage.setItem('userId', id);
        history.push('/inicio');
    }

    return (
        <div className="aut-container">
            <section className="form">
                <img className="githublogo" src={logoImg} alt="GitHub Logo" />  
                <form onSubmit={handleLogin}>  
                    <input className="userID" 
                        placeholder="Usuário"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="entrar" type="submit">ENTRAR 🡢</button>
                </form> 
            </section>
        </div>
    )

};