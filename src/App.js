import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";


const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    const redirect = () => {
            if(!user) {
                return <Auth />
            }else {
                return <Navigate to="/posts" />
            }
    };

    return (
        <GoogleOAuthProvider clientId="526830108116-0ui1untnimav9r6q1i2c24m4on5vjs8t.apps.googleusercontent.com">
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/posts" />}/>
                    <Route path="/posts" element={<Home />} />
                    <Route path="/posts/search" element={<Home />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path="/auth" element={redirect()} />
                </Routes>
            </Container>
        </BrowserRouter>
         </GoogleOAuthProvider>
    );
}

export default App;