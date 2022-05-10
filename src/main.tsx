import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Board from "./containers/Board";
import Home from "./containers/home";
// import your route components too
const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/minesweeper" element={<Board />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Main;

