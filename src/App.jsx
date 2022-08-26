import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SignIn from "./pages/SignIn";
import SignUpPaso1 from "./pages/SignUpPaso1";
import SignUpPaso2 from "./pages/SignUpPaso2";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import MediaDetail from "./components/MediaDetail";
import ReactGA from "react-ga4";
import appConfig from "./app.config";
import { useEffect } from "react";

ReactGA.initialize(appConfig.GOOGLE.GA_TRACKING_CODE)

function App() {

  
useEffect(() => {
  ReactGA.pageview(window.location.pathname + window.location.search)
}, [])
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup/:email" element={<SignUpPaso1 />} />
      <Route path="/signupemail/:email" element={<SignUpPaso2 />} />
      <Route path="/home" element={<Home />} />
      <Route path="/series" element={<Series />} />
      <Route path="/movies" element={<Movies />} />
      
      <Route path="/mediadetail" element={<MediaDetail />} />
    </Routes>
  );
}

export default App;