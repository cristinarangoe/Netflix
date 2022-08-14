import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SignIn from "./pages/SignIn";
import SignUpPaso1 from "./pages/SignUpPaso1";
import SignUpPaso2 from "./pages/SignUpPaso2";
import { Amplify, Auth } from 'aws-amplify';
import ConfirmationSingup from "./pages/Confirmation-singup";

Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        //identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
        
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-1',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'us-east-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-1_1qD7G5LZD',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '48pr3g525oqb2gol43qh9qf0pm',

        /*oauth: {
            domain: 'your_cognito_domain',
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }*/
    }
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup/:email" element={<SignUpPaso1 />} />
      <Route path="/signupemail/:email" element={<SignUpPaso2 />} />
      <Route path="/confirmation/:email" element={<ConfirmationSingup />} />
    </Routes>
  );
}

export default App;