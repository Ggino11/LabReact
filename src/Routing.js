import React from "react";
import { Routes, Route, } from "react-router-dom";
import Home from "./screens/Home";
import LandingPage from "./screens/LandingPage";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
    )
}


export default Routing;