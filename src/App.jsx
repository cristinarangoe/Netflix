import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import {  Auth } from "aws-amplify";
import TestSingin from "./pages/testSingin";
import MainPage from "./pages/main-page";
import { Authenticator } from "@aws-amplify/ui-react";
import awsmobile from "./aws-exports.js";
import '@aws-amplify/ui-react/styles.css ';
Auth.configure(awsmobile);

function App() {
  return (
    <Authenticator.Provider>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/signin" element={<TestSingin />} />
        <Route path="/home" element={<MainPage />} />
      </Routes> 
    </Authenticator.Provider>
  );
}

export default App;
