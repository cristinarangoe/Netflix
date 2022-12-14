import "./App.css";
import { Routes, Route} from "react-router-dom";
import Inicio from "./pages/Inicio";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import AddContent from "./pages/AddContent";
import MediaDetail from "./components/MediaDetail";
import ReactGA from "react-ga4";
import appConfig from "./app.config";
import { useEffect } from "react";
import { Auth } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsmobile from "./services/aws-exports";
import BuyMediaContext from "./context/BuyMediaContext"
import Profile from "./pages/Profile"
Auth.configure(awsmobile);

ReactGA.initialize(appConfig.GOOGLE.GA_TRACKING_CODE);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    
    <Authenticator.Provider >
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/mediadetail" element={<MediaDetail />} />
        <Route path="/addcontent" element={<AddContent/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Authenticator.Provider>
  );
}

export default App;
