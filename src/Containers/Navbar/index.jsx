import React from "react";
import ItemNavbar from "../../Components/ItemNabar/index.jsx";
import Pesquisa from "../../Components/Pesquisa/index.jsx";
import "./style.css";


const Navbar = () => {
    const showCategory = () => {
        
    }
    return (
        <nav>
            <ul className="lista">
                <li>{ItemNavbar({"titulo": 'Inicio'})}</li>
                <li>{ItemNavbar({titulo: 'Categorias'})}</li>
                <li>{ItemNavbar({titulo: 'Anunciar'})}</li>
                <li> {Pesquisa()} </li>
                <li>{ItemNavbar({titulo: 'Carrinho'})}</li>
                <li>{ItemNavbar({titulo: 'Entrar'})}</li>
                <li>{ItemNavbar({titulo: 'Cadastrar'})}</li>
            </ul>
        </nav>
    );
};
/*

*/
export default Navbar;