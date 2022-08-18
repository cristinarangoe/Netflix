import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useNavigate } from "react-router-dom";
import {AmpSingIn} from "../components/ampSingIn";
import { useState, useEffect } from "react";

import ReactGa from "react-ga4"



export default function TestSingin() {
  const {authStatus} = useAuthenticator();
  const navigate = useNavigate();
  //console.log(authStatus)
  useEffect(() => {
    if (authStatus === "authenticated") {
      navigate("/home");
    ReactGa.event({
      action:"login_action",
      category: "login_category",
      label: "login_label"
    })
    }
  } , [authStatus, navigate]);
  return (
    <>
      <AmpSingIn /> 
    </>
  );
}
