import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "../style/background.css"
import "../style/form.css"
import "../style/pages.css"
import { useDispatch } from "react-redux";
import { ApiClientService } from "../services/ApiClientService";
import { BAD_REFRESH_TOKEN } from "../constants/constants";
import { exitUser, setUser } from "../actions/user";

import Login from "./Login_pg/Login";
import Team from "./Team_pg/Team";
import Overlay from "./Overlay_pg/Overlay";
import Application from "./Applications_pg/Application";
import TeamList from "./TeamList_pg/TeamList";

function App() {
    const dispatch = useDispatch();

    const fetchUser = async () => {
    const user = await ApiClientService("user/current/");
    if (user !== BAD_REFRESH_TOKEN) {
        dispatch(setUser(user));
        } else {
        dispatch(exitUser());
        }
    };

    React.useEffect(() => {
        void fetchUser();
    }, []);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<Login/>} />
                    <Route exact path={"/login"} element={<Login />} />
                    <Route exact path={"/applications"} element={<div><Overlay /> <Application /></div>} />
                    <Route exact path={"/team/:teamId"} element={<div><Overlay /> <Team teamId /></div>} />
                    <Route exact path={"/teams"} element={<div><Overlay /> <TeamList /></div>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
