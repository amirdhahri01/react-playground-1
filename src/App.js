import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/about";
import Navbar from "./components/navbar"
import Users from "./components/users"
import NotFound from "./components/NotFound";
import UserProfile from "./components/userProfile"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user/:username" element={<UserProfile/>}> </Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
