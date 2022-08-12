import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;