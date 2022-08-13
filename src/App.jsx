import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SignIn from "./pages/SignIn";
import SignUpPaso1 from "./pages/SignUpPaso1";
import SignUpPaso2 from "./pages/SignUpPaso2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup/:email" element={<SignUpPaso1 />} />
      <Route path="/signupemail/:email" element={<SignUpPaso2 />} />
    </Routes>
  );
}

export default App;