import React, { Component } from "react";
import Nav from "./components/Nav";
import First from "./section/First";
import Entry from "./section/Entry";
import Infographics from "./section/Infographics";
import Performanse from "./section/Performanse";
import Contact from "./section/Contact";

class App extends Component {
  render() {
    return (

            <div className="App">   
              <Nav />
              <First />
              <Entry />
              <Infographics />
              <Performanse />
              <Contact />
            </div>

    
        );
      }
    }

export default App;
