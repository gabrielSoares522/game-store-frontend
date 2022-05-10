import React from "react";

const navStyle = {
    background: '#fae55c',
    padding: '10px',
    margin: '0px',
}
const itemStyle ={
    display: 'inline',
}
const Navbar = () => {
    const showCategory = () => {
        
    }
    return (
        <nav style={navStyle}>
            <ul>
                <li style={itemStyle}> <a href="#">Inicio</a> </li>
                <li style={itemStyle}> <a href="#" onClick={showCategory}>Categorias</a> </li>
                <li style={itemStyle}> <a href="#">Anunciar</a> </li>
                <li style={itemStyle}>
                    <div>
                    <form action="" method="get">
                        <input name="search" placeholder="Buscar..." />
                        <button type="submit">Buscar</button>
                    </form>
                    </div>
                </li>
                <li style={itemStyle}> <a href="#">Carrinho</a> </li>
                <li style={itemStyle}> <a href="#">Entrar</a> </li>
                <li style={itemStyle}> <a href="#">Cadastrar</a> </li>
            </ul>
        </nav>
    );
};

export default Navbar;