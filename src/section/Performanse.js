import React, { Component } from "react";
import performans from "../img/23.png";
import performanse from "../img/24.png";


class  Performanse extends Component {
    state = {};
    render() {
        return (
            <div className="performanse-section" id="Performanse" >
                <div className="performanse_bl">Frontend-разработчик должен разбираться в производительности</div>

                <div className="performans-all_content">
                    <div className="performans_content">

                        <div className="performans_text">Performance Matters</div>
                        <div className="performans_text_format">
                            <p>производительность</p>
                            <p>имеет важное место</p>
                            <p>в успехе вашего проекта</p>
                        </div>
                        <div className="bot_performans">подробнее</div>
                    </div>
                    <img src={performans} className="performanse_img_one" alt="performanse" />

                </div>


                <div className="performans-all_content_two">

                    <img src={performanse} className="performanse_img_two" alt="performanse" />
                    <div className="performans_content_two">
                        <div className="performans_text_two">Тонкости</div>
                            <div className="performans_text_format_two">
                                <p>Необходимо понимать</p>
                                <p>насколько быстрым</p>
                                <p>должен быть backend</p>
                            </div>
                            <div className="bot_performans_two">подробнее</div>
                    </div>
                </div>
            </div>

        ) 
    }
}

export default Performanse; 