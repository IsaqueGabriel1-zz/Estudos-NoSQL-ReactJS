import React from 'react';
import './css/style.css';
import './css/produtos.css';
import Img from '../Components/img/visa-master.png';
import { Link } from 'react-router-dom';

export const Pagamento = () =>{
    return(
        <div>
            <div className="row justify-content-center">
                <div ><p>Pagamentos</p></div>
            </div>
            <div id="row" className="row justify-content-center">
                <div>
                    <img id="img2" src={Img} alt="imagem de pagamentos"/>
                </div>
            </div>
        </div>
    )
}

export const Nav = () => {
    return(
        <div className="container-fluid p-0">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <Link className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" to="/" role="tab" aria-controls="nav-home" aria-selected="true">Home</Link>
                    <Link className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" to="./produtos" role="tab" aria-controls="nav-profile" aria-selected="false">produtos</Link>
                    <Link className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" to="./contatos" role="tab" aria-controls="nav-contact" aria-selected="false">Contato</Link>
                    <Link className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" to="./lojas" role="tab" aria-controls="nav-contact" aria-selected="false">Nossas Lojas</Link>
                </div>
            </nav>
        </div>
    )
}

export const Inicio = () => {
    return(
        <div>
            <div>
                <Nav />
                <main>
                    <div className="row justify-content-center">
                        <div className="">
                        <h1 className="texto" className="text-center">Seja Bem Vindo!</h1>
                        </div>  
                    </div>
                    <div className="row justify-content-center">
                        <div>
                            <p className="texto">Aqui em nossa loja, programadores tem dessconte para sua casa!</p>    
                        </div> 
                    </div>
                    <hr></hr>
                </main>
            </div>
            <div id="Pagamentos2" className="container-fluid p-3 text-center">
                <Pagamento />
                <div className="row justify-content-center text-center mt-4">
                     <p>© 2020 - Isaque Gabriel</p>
                </div>  
            </div>
        </div>
    )
}


export default Inicio;