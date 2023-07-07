import React from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import styles from "./Nav.modules.css";
import { Link } from "react-router-dom";
export default function Nav(props){

return ( <div className={styles.nav}>
    <div>
        <Link to ="/about">About</Link>
        <Link to ="/home">Home</Link>
    </div>
 <SearchBar onSearch={props.onSearch} />
 </div>
 );
} 