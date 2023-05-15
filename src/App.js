import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Signup from "./Components/Signup/Signup";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Store/firebase";
import { auth } from "./Firebase/config";
import Create from "./Components/Create/Create";
import ViewPost from "./Pages/ViewPost";
import Post from "./Store/postContext";


function App() {
  const { setUser } = useContext(AuthContext)
  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser)
    })
  })
  return (
    <div className="App">
      <Post>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={LoginPage} />
            <Route path="/signup" Component={Signup} />
            <Route path="/create" Component={Create} />
            <Route path="/view-details" Component={ViewPost} />

            <Route />
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
