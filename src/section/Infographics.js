import React, { Component } from "react";
import Infogr_img_one from "../img/invalid-name-1.png";
import Infogr_img_two from "../img/invalid-name-2.png";
import Infogr_img_three from "../img/invalid-name-3.png";


class  Infographics extends Component {
    state = {};
    render() {
        return (
            <div className="infographics-section" id="Infographics" >
                <div className="block_Infographics_img">
                    <img src={Infogr_img_one} className="Infographics_img" alt="Infographics" />
                    <img src={Infogr_img_two} className="Infographics_img" alt="Infographics" />  
                    <img src={Infogr_img_three} className="Infographics_img" alt="Infographics" />
                </div>
                <div className="block_Infographics_namber">

                    <div className="Infographics-cont">
                        <div className="namberl">1</div>
                        <div className="blok_HTML">
                            <div className="blok_HTML_style">HTML 5</div>
                            <div className="blok_HyperText_style">HyperText Markup Language</div>
                        </div>
                    </div>
                    <div className="Infographics-cont">
                        <div className="namberl">2</div>
                        <div className="blok_HTML">
                            <div className="blok_HTML_style">CSS</div>
                            <div className="blok_HyperText_style">Cascading Style Sheets</div>
                        </div>
                    </div>
                    <div className="Infographics-cont">
                        <div className="namberl">3</div>
                        <div className="blok_HTML">
                            <div className="blok_HTML_style">JS</div>
                            <div className="blok_HyperText_style">JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>

        ) 
    }
}

export default Infographics; 