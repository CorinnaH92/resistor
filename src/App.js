import logo from './logo.svg';
import './App.css';
import ResistorTable from "./components/ResistorTable";
import ResistorCalculator from "./components/Resistor Calculator";

function App() {
  return (
    <div className="App">
     <h1>Wiederstandberechnung</h1>
       <ResistorCalculator/>
        <ResistorTable/>


    </div>
  );
}

export default App;
