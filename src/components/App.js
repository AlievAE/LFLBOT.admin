import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "../style/background.css"
import "../style/form.css"
import "../style/pages.css"
import Login from "./Login_pg/Login";
import Team from "./Team_pg/Team";
import Overlay from "./Overlay_pg/Overlay";
import Application from "./Applications_pg/Application";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Overlay />
                <Routes>
                    <Route exact path={"/"} element={<Application />} />
                    <Route exact path={"/login"} element={<Login />} />
                    <Route exact path={"/applications"} element={<Application />} />
                    <Route exact path={"/neon"} element={<Team team='Neon' />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
