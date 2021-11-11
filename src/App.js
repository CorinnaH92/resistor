import logo from './logo.svg';
import './App.css';
import ResistorTable from "./components/ResistorTable";
import ResistorCalculator from "./components/Resistor Calculator";
import './components/style.css';
import {useState} from "react";

function App() {
    const[resistor, setResistor]= useState( 20);

  return (
      <>
          <center>
    <ResistorCalculator resistor={({resistor: resistor,setResistor:setResistor})}/>
              <ResistorTable resistor={{resistor: resistor,setResistor:setResistor}}/>
              </center>
</>)
}

export default App;
