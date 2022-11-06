import React, { Component } from "react";
import invalid from "../img/invalid.png";
import icon_address from "../icon/address.png";
import icon_number from "../icon/number.png";
import icon_email from "../icon/email.png";
import icon_site from "../icon/site.png";
import logo_bt from "../img/logo_bt.png";
import icon_bt_one from "../icon/icon_bt_one.png";
import icon_bt_two from "../icon/icon_bt_two.png";
import icon_bt_free from "../icon/icon_bt_free.png";


class  Contact extends Component {
    state = {};
    render() {
        return (
            <div className="contact-section" id="Contact" >
            
                <form className="contact_form_all" action="#" method="post">
                  
                    <div className="Contact_all_bl">
                        <div className="Contact_style_txt">контакты</div>
                        <div className="address_style_bl">
                            <img src={icon_address} className="address_style_icon" alt="icon" />
                            <a href="#" className="address_style_txt">18000, Украина, г. Черкассы, ул. Жужомы, 7</a>
                        </div>
                        <div className="number_style_bl">
                            <img src={icon_number} className="number_style_icon" alt="icon" />
                            <a href="#" className="number_style_txt">+38 (096) 345 67 23 <p>+38 (096) 645 26 63</p></a>
                        </div>
                        <div className="email_style_bl">
                            <img src={icon_email} className="email_style_icon" alt="icon" />
                            <a href="#" className="site_style_txt">example@gmail.com</a>
                        </div>
                        <div className="site_style_bl">
                            <img src={icon_site} className="site_style_icon" alt="icon" />
                            <a href="#" className="site_style_txt">everlabs.com</a>
                        </div>
                    </div>

                    <div className="Contact_all_bl_form">
                        <div className="Contact_all_bl_form_txt">напишите нам</div>
                        <div className="Contact_all_bl_form_fields">
                            <input className="field_one" type="name" name="message" placeholder="имя"></input>
                            <input className="field_two" type="number" name="message" placeholder="телефон"></input>
                            <input className="field_free" type="email" name="message" placeholder="email"></input>
                        </div>
                        <textarea  className="message_field" rows="5" name="message" cols="30" placeholder="сообщение"></textarea>
                        <div className="Contact_submit_bl">
                            <input className="Contact_submit" type="submit" name="submit" value="Отправить"></input>
                            <div className="Contact_submit_txt">Спасибо за сообщение!<p>Мы обязательно  свяжемся с Вами.</p></div>
                        </div>

                    </div>

                </form>
                <div className="bottom_bl">
                    <img src={logo_bt} className="logo_bt" alt="icon" />
                    <div className="bottom_bl_item">
                    <img src={icon_bt_one} className="icon_bt_one" alt="icon" />
                    <img src={icon_bt_two} className="icon_bt_two" alt="icon" />
                    <img src={icon_bt_free} className="icon_bt_free" alt="icon" />
                    </div>
                </div>
            </div>

        ) 
    }
}

export default Contact; 