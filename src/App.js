import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home";
import React, { useState, lazy, Suspense } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import {appRoutes} from "./routes"

function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();
  return (
    <div className="App">
      <SwitchTransition component={null}>
        <CSSTransition key={location.pathname} classNames={"fade"} timeout={300} unmountOnExit >
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes location={location}>
              {appRoutes.map(route => {
                    if(route.requiresAuth && !isLogged){
                      return  <Route key={route.path} path={route.path} element={<Navigate replace to={"/login"}/>}/>
                    }
                    return <Route key={route.path}  path={route.path} element={<route.component setIsLogged={setIsLogged} setUsername={setUsername} username={username}/>}/>
              })}
            </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
