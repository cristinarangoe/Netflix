import { Amplify } from "aws-amplify";
import { Link } from "react-router-dom";
import NavBarLogo from "../components/NavBarLogo";
import Footer from "../components/Footer";
import { authComponents, formFields } from "../components/authentication";
import { useNavigate } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import { useState } from "react";
import "@aws-amplify/ui-react/styles.css";

export function AmpSingIn() {
  return (
    <div id='bglogin'>
      <div className=" bg-white bg-cover w-full h-screen flex flex-col ">
        <div className="pt-3">
          <Link to="/">
            <NavBarLogo className="mx-[20px]" />
          </Link>
        </div>
        <main className="flex flex-col justify-center max-w-[640px] py-[50px]  md:bg-black/80 mx-auto mb-auto">
          <div className="px-0 mx-5 md:px-10">
            <div className="">
              <Authenticator
                socialProviders={["facebook", "google"]}
                formFields={formFields}
                components={authComponents}
              ></Authenticator>
            </div>
          </div>
        </main>
        <Footer estilo="bg-black/80" estiloSm={"bg-black"} />
      </div>
    </div>
  );
}
