import React,{Component} from "react";
import "./style.css";
/*
class ItemNavbar extends Component{
    render(){
        return(
            <li style={itemStyle}>
                <a href={this.props.link}>{this.props.titulo}</a>
            </li>
        )
    }
}*/
function ItemNavbar(props){
    return(
        <button className={"item"} href="#">{props.titulo}</button>
    )
}
export default ItemNavbar;