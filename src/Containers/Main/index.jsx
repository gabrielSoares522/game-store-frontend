import React from "react";
import "./style.css";

const renderConta = (conta) => {
    return (
        <div key={"conta - "+conta.id} className={"bloco-conta"}>
            <div className={"bloco-conta-img"}>
                <img src={conta.img} alt={conta.titulo} />
            </div>
            <div className={"bloco-conta-titulo"}>
                <h3>{conta.titulo}</h3>
            </div>
            <div className={"bloco-conta-descricao"}>
                <p>{conta.descricao}</p>
            </div>
        </div>
    );
}
const contas = [
    {
        "id": 1,
        "titulo": "LOL prata - R$ 100,00",
        "preco": 100,
        "img": "https://i.imgur.com/XqQXqQZ.png",
        "descricao":"lorem impsum",
        "quantidade": 1,
    },{
        "id": 2,
        "titulo": "LOL prata - R$ 100,00",
        "preco": 100,
        "img": "https://i.imgur.com/XqQXqQZ.png",
        "descricao":"lorem impsum",
        "quantidade": 1,
    },{
        "id": 3,
        "titulo": "LOL prata - R$ 100,00",
        "preco": 100,
        "img": "https://i.imgur.com/XqQXqQZ.png",
        "descricao":"lorem impsum",
        "quantidade": 1,
    },{
        "id": 4,
        "titulo": "LOL prata - R$ 100,00",
        "preco": 100,
        "img": "https://i.imgur.com/XqQXqQZ.png",
        "descricao":"lorem impsum",
        "quantidade": 1,
    },{
        "id": 5,
        "titulo": "LOL prata - R$ 100,00",
        "preco": 100,
        "img": "https://i.imgur.com/XqQXqQZ.png",
        "descricao":"lorem impsum",
        "quantidade": 1,
    },
];
const renderCategoria = (conta) => {
    return (
        <div key={"categoria - "+conta.id} className={"bloco-conta"}>
            <div className={"bloco-conta-img"}>
                <img src={conta.img} alt={conta.titulo} />
            </div>
            <div className={"bloco-conta-titulo"}>
                <h3>{conta.titulo}</h3>
            </div>
        </div>
    );
}
const categorias = [
    {
        "id": 1,
        "titulo": "League of Legends",
        "img": "https://i.imgur.com/XqQXqQZ.png"
    },{
        "id": 2,
        "titulo": "Fortnite",
        "img": "https://i.imgur.com/XqQXqQZ.png"
    },{
        "id": 3,
        "titulo": "Free Fire",
        "img": "https://i.imgur.com/XqQXqQZ.png"
    },{
        "id": 4,
        "titulo": "Apex Legends",
        "img": "https://i.imgur.com/XqQXqQZ.png"
    }
]
const App = () => {
    return (
        <div>
        <div>
            <h2>Destaques</h2>
            <div className={"lista-contas"}>
                {contas.map(renderConta)}
            </div>
        </div>
        
        <div>
            <h2>Categorias</h2>
            <div className={"lista-contas"}>
                {categorias.map(renderCategoria)}
            </div>
        </div>
        
        <div>
            <h2>Outras Contas</h2>
            <div className={"lista-contas"}>
                {contas.map(renderConta)}
            </div>
        </div>
        </div>
    );
};

export default App;