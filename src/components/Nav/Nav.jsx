import styles from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import React from "react"
import { Link } from "react-router-dom"

class Nav extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return <nav className={styles.Nav}>
            <Link to={"/home"}><button>Home</button></Link>
            <Link to={"/about"}><button>About</button></Link>
            <Link to={"/favorites"}><button>Favorites</button></Link>
            <SearchBar onSearch={this.props.onSearch}/>
            <hr/>
        </nav>
    }
}

export default Nav;