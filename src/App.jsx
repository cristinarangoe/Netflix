import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SignIn from "./pages/SignIn";
import SignUpPaso1 from "./pages/SignUpPaso1";
import SignUpPaso2 from "./pages/SignUpPaso2";
import { Amplify, Auth } from 'aws-amplify';
import ConfirmationSingup from "./pages/Confirmation-singup";
import TestSingin from "./pages/testSingin";

Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-east-1:7ba1442b-728f-43a4-8057-ca178cdfb225',
        
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-1',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'us-east-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-1_Is44IuDYG',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '3kp768jrd5isv25s3kcra6cuic',

        oauth: {
            domain: 'real-netflix-app.auth.us-east-1.amazoncognito.com',
            //scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'http://127.0.0.1:5173/',
            redirectSignOut: 'http://127.0.0.1:5173/signin',
            responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
    }
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/signin" element={<TestSingin />} />
      <Route path="/signup/:email" element={<SignUpPaso1 />} />
      <Route path="/signupemail/:email" element={<SignUpPaso2 />} />
      <Route path="/confirmation/:email" element={<ConfirmationSingup />} />
    </Routes>
  );
}

export default App;