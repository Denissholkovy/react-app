import React, { Component } from "react";
import { Link } from "react-scroll";
import logo from '../img/logo-colored.png';

class Nav extends Component {
    state = {};
    render() {
        return (
            <div className="navbar">

                <div className="block-one">
                    <img src={logo} className="icon" alt="Logo" />
                </div>

                <div className="block-style-all">
                    <div className="nav-style">
                        <Link activeClass="active"  to="First" spy={true} smooth={true}  offset={0}  duration={600} >ПЕРВЫЙ ЭКРАН</Link>
                        <Link activeClass="active"  to="Entry" spy={true} smooth={true}  offset={1}  duration={600} >ВСТУПЛЕНИЕ</Link>
                        <Link activeClass="active"  to="Infographics" spy={true} smooth={true}  offset={2}  duration={600} >ИНФОГРАФИКА</Link>
                        <Link activeClass="active"  to="Performanse" spy={true} smooth={true}  offset={5}  duration={600} >ПРОИЗВОДИТЕЛЬНОСТЬ</Link>
                        <Link activeClass="active"  to="Contact" spy={true} smooth={true}  offset={7}  duration={600} >КОНТАКТЫ</Link>
                    </div>

                    <div className="block-namber">
                        <div className="namber-st">+38 (096) 622 86 13</div>
                        <div className="namber-style">+38 (096) 622 86 13</div>
                    </div>
        
                    <div className="language">
                        <div className="en">EN</div>
                        <div className="ua">UA</div>
                        <div className="ru">RU</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Nav;