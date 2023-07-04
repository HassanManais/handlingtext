import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
//  Routes,
//Route
} from "react-router-dom";

 
function App() {
 
  return (
    <>
    <Router>
    <Navbar/>
    <TextForm  heading="Handling Text - word counter, character counter, remove extra spaces"/>
   


    </Router>
    </> 
  );
}

export default App;
