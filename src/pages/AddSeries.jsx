import React from "react";
import FormAddContent from "../components/FormAddContent";
import HomeNavBar from "../components/HomeNavBar";

export default function () {
  return (
    <div className="bg-black/90 h-full w-full">
      <div className="relative z-10">
        <HomeNavBar />
      </div>
      <div>
        <FormAddContent/>
      </div>
    </div>
  );
}
