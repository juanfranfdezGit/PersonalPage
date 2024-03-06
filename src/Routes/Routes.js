import React from "react";
import Home from "../Views/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function Links() {
    return (
        // Configuracion de nuestras rutas mediante react-router-dom
        <BrowserRouter>
            <Routes>
                {/* Ruta Home */}
                <Route path="/" element={<Home/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}