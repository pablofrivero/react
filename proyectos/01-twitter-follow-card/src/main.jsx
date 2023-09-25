import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import './index.css';
//los componentes tienes que comenzar con PascalCase
/*const Button = ({text})=>{
      return (<button>
        {text}
      </button>
    
    )
  }*/ 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
