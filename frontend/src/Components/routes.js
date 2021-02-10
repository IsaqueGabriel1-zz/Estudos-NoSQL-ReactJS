import React from 'react';
import App from './App';
import Produtos from './produtos';
import Index from './index';
import Contatos from './contatos';
import Lojas from './lojas'
import { Switch ,Route } from 'react-router-dom';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/App" component={App} exact/>
            <Route path="/produtos" component={Produtos} exact/>
            <Route path="/contatos" component={Contatos} exact/>
            <Route path="/lojas" component={Lojas} />
        </Switch>
    )
}
export default Routes;

