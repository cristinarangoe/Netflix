import React, { useState } from "react";
import NavBarLogo from "../components/NavBarLogo";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";


export default function ForgotPassword(){
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [Error,setError] = useState("");

    const onSubmit = (data) => {
        Auth.forgotPassword(data.email)
    }
}