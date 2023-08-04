import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ProDetail from "./Pages/ProDetail";
import Cart from "./Pages/Cart";
//import ProCards from "./Components/ProCards";
function App() {
return (
  <div className="App">
    
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Product" element={<ProDetail/>}/>
          <Route path="/Logout" element={<Login/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/ProCards" element={<Home/>} />
          <Route path="/product/:id" component={<ProDetail/>} />
        </Routes>
      </div>
    </Router>

  </div>
);
}

export default App;
