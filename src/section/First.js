import React, { Component } from "react";
import CarouselBox from "../components/CarouselBox";
import Picture from "../components/Picture";

class  First extends Component {
    state = {};
    render() {
        return (
            <div className="first-section" id="First" >
                <CarouselBox />
                <Picture />
            </div>

        ) 
    }
}

export default First;