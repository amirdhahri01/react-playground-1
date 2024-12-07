import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/about";
import Navbar from "./components/navbar"
import Users from "./components/users"
import NotFound from "./components/NotFound";
import UserProfile from "./components/userProfile"
import SearchUser from "./components/searchUser"
import Login from "./components/login"
import AuthProfile from "./components/authProfile"
import { useState } from "react";
function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user/:username" element={<UserProfile />} />
          <Route path="/search" element={<SearchUser />} />
          <Route path="/login" element={<Login setIsLogged={setIsLogged} setUsername={setUsername} />} />
          <Route path="/authprofile" element={isLogged ? <AuthProfile username={username}/> : <Navigate replace to={"/login"} />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
