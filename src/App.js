import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import {Context} from './Context';
import { useState } from "react";

function App() {
  const [open , setOpen] = useState(false);

  return (
    <Context.Provider value={{open , setOpen}}>
    <div className="App">
      <Header/>
      <Intro/>     
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
    </Context.Provider>
  );
}

export default App;
