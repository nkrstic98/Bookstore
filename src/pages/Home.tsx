import {Component} from "solid-js";
import styles from "../App.module.css";
import logo from "../logo.svg";

const Home: Component = () => {
    return (
        <header class={styles.header}>
            <img src={logo} class={styles.logo} alt="logo" height={50} width={50}/>
            <br/>
            <h3>HOME PAGE</h3>
        </header>
    );
}

export default Home;