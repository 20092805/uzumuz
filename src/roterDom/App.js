import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './components/home/Home'
import About from "./components/router/About/About";
import Contact from "./components/router/Contact/Contact";
import Info from "./components/router/Info/Info";
import SingalPage from "./components/router/singalPage/SingalPage"

const App = () => {
    return (
        <div className="">
            <Navbar />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="about" element={<About />} />
                <Route exact path="contact" element={<Contact />} />
                <Route exact path="info" element={<Info />} />
                <Route exact path="mahsulot/:id" element={<SingalPage />} />
            </Routes>
        </div>
    )
}

export default App