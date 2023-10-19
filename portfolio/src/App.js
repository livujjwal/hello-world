import React from 'react';
import Navbar from './Components/Navbar';
import About from "./Components/About";
import Section from "./Components/Section";
import '../src/style.css';
import {sectionArr} from "./data/sections";

function App(){
  return ( <div>
    <Navbar/>
    <About/>
  {
  sectionArr.map(value => 
    (<Section
      x = {value.title}
      y = {value.des}/>)
    )
  
  }
    
  </div> )
}
export default App;
