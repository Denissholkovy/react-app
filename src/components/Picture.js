import React, { Component } from "react";
import logo from '../img/logo-colored.png';

export default class  Picture extends Component {
    state = {};
    render() {
        return (
            <div className="logo-block" >
                <img src={logo} className="logo-style" alt="Logo"/>
                <div className="front">Frontend-разработчики</div>
                <div className="text">должны быть в теме всего</div>

                <div class="wrapper">
                    <button class="slide_from_left anim_1">да, должны</button>
                    <div className="border-bot"></div>
                    <button class="slide_from_right anim_2">конечно, должны</button>
                </div>
            </div>

        ) 
    }
}
