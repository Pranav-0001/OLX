import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Signup from "./Components/Signup/Signup";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={Signup} />
          <Route  />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
