import React, { Component } from 'react';
import {Nav, Pagamento} from './index';
import './css/produtos.css';


const Card = () =>{
    const [users, setUsers] = React.useState([]);
    React.useEffect(async () => {
        const url = "http://localhost:7000/usuario";

        const response = await fetch(url);
        setUsers(await response.json());
    }, [users])

    return (
        <div id="div" className="mt-5">
            {users.map((element)=>{
            return(
                <div id={element.categoria}  key={element.idproduto} className="Conteiner">
                    <div className="card-body">
                        <img id="teste" className="card-img-top" src={require(`./img/${element.imagem}`).default} alt="Imagem de capa do card" />
                        <p className="card-text">{element.descricao}</p>
                        <p className="card-text"><b>R$ {element.preco}</b></p>
                        <p className="card-text">R$ {element.preco_venda}</p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}



const Drop = () =>{
    function exibir_categorias(event){
        let elementos = document.getElementsByClassName('Conteiner');
        for(var i = 0; i < elementos.length; i++){
            if(event == elementos[i].id){
                elementos[i].style = "display:inline-block"
            }else{
                elementos[i].style = "display:none"
            }
        }
    }
    let exibir_todos = () => {
        let elementos = document.getElementsByClassName('Conteiner');
        for(var i = 0; i < elementos.length; i++){
            elementos[i].style = "display:inline-block"
        }       
    }
    return(
        <div>
            <div className="row">
                <div className="dropdown ml-5">
                    <button className="btn dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categorias
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" onClick={() => exibir_todos('Todos')}>Todos</a>
                        <a className="dropdown-item" onClick={() => exibir_categorias('Geladeira')}>Geladeira</a>
                        <a className="dropdown-item" onClick={() => exibir_categorias('Fogao')}>Fogao</a>
                        <a className="dropdown-item" onClick={() => exibir_categorias('Micro-ondas')}>Micro-ondas</a>
                        <a className="dropdown-item" onClick={() => exibir_categorias('Lava-roupa')}>Maquina de lavar louça</a>
                        <a className="dropdown-item" onClick={() => exibir_categorias('Lava-louca')}>Maquina de lavar Roupa</a>
                    </div>
                </div>
            </div>
        </div>  
    )
}

class Produtos extends Component{
    render(){
        return(
            <div>
                <Nav />
                <div id="texto" className="p-4 text-center">
                    <h1>Produtos</h1>
                </div>
                <hr></hr>
                <div id="drop">
                    <Drop />
                </div>
                <div className="container text-center">
                    <Card />
                </div>
                <div id="Pagamentos" className="row justify-content-center text-center p-4">
                    <Pagamento />
                </div>
            </div>
        )
    }
}
export default Produtos;
