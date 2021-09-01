import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Aut from './pages/Aut';
import Inicio from './pages/Inicio';
import Repositorios from './pages/Repositorios';
import Seguidores from './pages/Seguidores';
import Seguindo from './pages/Seguindo';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path ="/" exact component={ Aut }></Route>
                <Route path ="/inicio" component={ Inicio }></Route>
                <Route path ="/repositorios" component={ Repositorios }></Route>
                <Route path ="/seguidores" component={ Seguidores }></Route>
                <Route path ="/seguindo" component={ Seguindo }></Route>
            </Switch>
        </BrowserRouter>
    );

}