import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import './App.css';

//Importations
import Home from "./Views/Home";
import WorkExperience from "./components/WorkExperience";
import About from "./Views/About";
import Academic from "./Views/Academic";

//Layout

//Provider
import { ProfesionalProvider } from "./Context/ProfesionalInfoContext";

function App() {
    
  return (
    <BrowserRouter>
      <ProfesionalProvider>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/about" exact element={<About />}/>
            <Route path="/academic" exact element={ <Academic />}/>
            <Route path="/workexperience" exact element={<WorkExperience/>}/>
          </Routes>
      </ProfesionalProvider>
    </BrowserRouter>
  );

}

export default App;
