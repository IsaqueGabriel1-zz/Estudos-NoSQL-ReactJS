import React, { Component } from 'react';
import {Nav, Pagamento} from './index';
import './css/contatos.css';

class Input extends Component{
    render(){
        return(
            <input className="form-control mt-2" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}/>
        )
    }
}

const Form = () => {
    return (
        <div className="container justify-content-center mt-5">
            <h4 id="p">Faça o seu cadastro, e aproveite e faça já o seu pedido!</h4>
            <div id="container" className="row justify-content-center">
                <form action="http://localhost:7000/usuario" method="POST" className="w-50">
                    <Input type="text" name="cliente" placeholder="Nome"/>
                    <Input type="text" name="endereco" placeholder="Endereco"/>
                    <Input type="number" name="telefone" placeholder="Telefone"/>
                    <Input type="text" name="produto" placeholder="Produto"/>
                    <Input type="number" name="valor" placeholder="Valor unitario"/>
                    <button id="btn1" className="btn w-100 mb-2 mt-2">Enviar</button>
                </form>
            </div>
        </div>
    )
}

class contatos extends Component{
    render(){
        return(
            <div>
                <Nav />
                <div className="p-4 text-center"><h1>Contatos</h1><hr /></div>
                <div>
                    <Form />
                </div>
                <div>
                </div>
                <div id="Pagamentos3" className="container-fluid ">
                    <div className="row justify-content-center text-center p-3 mt-4">
                        <Pagamento />
                    </div>
                    <div className="row justify-content-center text-center mt-4">
                         <p>© 2020 - Isaque Gabriel</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default contatos;