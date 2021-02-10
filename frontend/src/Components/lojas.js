import React, { Component } from 'react';
import {Nav, Pagamento} from './index';
import './css/lojas.css';

class Local extends Component{
    render(){
        return(
            <div id="card" className="card bg-light mb-3">
            <div className="card-header text-danger">{this.props.text}</div>
            <div className="card-body">
              <p className="card-text">
                  {this.props.name}
              </p>
            </div>
          </div>
        )
    }
}

class lojas extends Component{
    render(){
        return(
            <div className="">
                <Nav />
                <div className="p-4 text-center">
                    <h1>Nossas Lojas</h1>
                    <hr/>
                </div>
                <div className="row ">
                    <Local 
                    text="São Paulo" 
                    name="Avenida Paulista,985 3º andar Jardins (11) 44444-44444"
                    />
                    <Local 
                    text="Rio de Janeiro"
                    name="
                    Avenida PResidente Vargas, 5000
                    10º andar
                    centro
                    (21) 333333 33333
                    "
                    />
                    <Local 
                    text="Santa Catarina"
                    name="
                    Rua Major Avila, 370
                    Vila Mariana
                    (47) 55555-55555
                    "
                    />
                </div>
                <div id="Pagamentos5" className="row justify-content-center p-4">
                    <Pagamento />
                </div>          
            </div>
        )
    }
}
export default lojas;




