import React,{Component} from "react";
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
        <a href="#">{props.titulo}</a>
    )
}
export default ItemNavbar;