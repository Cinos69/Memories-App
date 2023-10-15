import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar/navbar.js";
import Home from "./components/Home/home.js";
import Auth from "./components/Auth/Auth.js";


const App = () => {

    return (
        <GoogleOAuthProvider clientId="526830108116-0ui1untnimav9r6q1i2c24m4on5vjs8t.apps.googleusercontent.com">
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
         </GoogleOAuthProvider>
    );
}

export default App;