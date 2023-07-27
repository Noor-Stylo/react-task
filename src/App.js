import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Header from "./Components/Header";
function App() {
  return (
    <div className="App">
      <Header/>
     <Router>
        <div>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} /> 
          </Routes>
        </div>
      </Router>
    
    </div>
  );
}

export default App;
