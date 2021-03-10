import React from "react";
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import "./styles.css";

const Navbar = ({ Categories }) => {
    const menuStyle = {
        backgroundImage: `url(${menu})`,
        width: 24,
        height: 19,
    }

    return (
        <nav className="navbar-expand-lg navbar navbar-light" >
            <div className="container navbar-container">
            <a className="navbar-brand" >
                <img src={logo} width="45" height="45" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span style={menuStyle} className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto navbar-pages-list">
                    {Categories.map((category) => {
                        return (
                            <a className="nav-item nav-link navbar-link dropdown-item">{category.name}</a>
                        )
                    })}
                    <a className="nav-item nav-link navbar-link navbar-link-login login-link" >LOGIN</a>
                </ul>
            </div>
            </div>
        </nav >
    );
};

export default Navbar;
