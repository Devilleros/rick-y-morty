import styles from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import React from "react"

class Nav extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return <nav className={styles.Nav}>
            <SearchBar onSearch={this.props.onSearch}/>
            <hr/>
        </nav>
    }
}

export default Nav;