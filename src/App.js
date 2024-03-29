import React from "react";
import Navbar from "./Components/Navbar.js";
import About from "./Components/About.js";
import Section from "./Components/Section";
import "./style.css"

import sectionData from "./data/sectionData";


const App = () => {
        // let a= 100;
        // let b= 50;
    return (
                <div>
                    <Navbar/>
                    <About/>
                    
                    {
                        sectionData.map((item, index)=>(
                            <Section key={index}
                                title={item.title}
                                description={item.description}
                            />
                        ))
                    }

                    {/* for understanding ternary condition */}
          {/* {
                a>b ? (<h1>Greater Number is {a}</h1>):(<h1>Greater Number is {b}</h1>)}
            } */}
            
    
                
                </div>
            )
}

export default App;

// jsx not support loop and if else

// loops => higher order function => map , filter , reduce
// if else =>ternary operator