import React, { useEffect, useState } from "react";
import NavBarLogo from "../components/NavBarLogo";
import TierCard from "../components/TierCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import userDBServices from "../services/userDB";
import * as Toast from "@radix-ui/react-toast";

export default function Profile() {
  const [selected, setSelected] = useState([false, false, false]);
  const [userDBData, setUserDBData] = useState({});

  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  // const cognitoData = {
  //       ID: userData.data.username,
  //       Tipo_Cuenta: 1,
  //       Given_Name: userData.data.attributes.given_name,
  //       Family_Name: userData.data.attributes.family_name,
  //    }

  useEffect(() => {
    const fetchData = async () => {
      let fetch = await userDBServices.getUserPlan(userData.data.username);
      if (fetch) {
        setUserDBData(fetch);
        return;
      }
      console.log("noExiste");
      console.log(userData);
      let user = {
        ID: userData.data.username,
        Given_Name: userData.data.attributes.given_name,
        Family_Name: userData.data.attributes.family_name,
      };

      let newFetch = await userDBServices.createUserPlan(user);
      setUserDBData(newFetch);
    };
    fetchData();
  }, []);

  const buyPlan = async () => {
    let i = 0;
    while (i < selected.length && !selected[i]) {
      i++;
    }
    if (i < selected.length) {
      if (i == userDBData.Tipo_Cuenta - 1) {
        alert("Ya tienes este plan");
        return;
      }
      //Post on database y fetch nuevo data para el userDBData
      let userData = await fetchNewData(i + 1);
      setUserDBData(userData);
      console.log(userDBData);
    }
  };

  const fetchNewData = async (index) => {
    let data = await userDBServices.postUserPlan(index, userData.data.username);
    return data;
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="flex flex-row items-center bg-black/80">
        <NavBarLogo />
        <div className="flex text-white justify-end w-[100%]">
          <div
            className="flex flex-row mr-[2%]"
            onClick={() => navigate("/home")}
          >
            <svg
              className="w-12 h-12 self-center hover:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-auto">
        <div className="flex flex-col m-[1%] ml-[2%]">
          <div className="text-black text-center">
            <h2 className="font-bold text-2xl md:text-4xl">
              Planes <span className="text-red-600">Flexibles</span>
            </h2>
            <h2 className="font-normal text-lg md:text-2xl">
              Hola {userDBData.Given_Name}!, puedes escoger el plan que mas se adapte a tus necesidades
            </h2>
            <h2 className="font-normal text-lg md:text-2xl">
              ¡Cambialo cuando quieras!
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-5 justify-center ">
          <TierCard
            name="plan1"
            info={{
              title: "Free Tier",
              description:
                "Only watch non-exlusive movies and series in one screen",
              tier: 1,
              currentTier: userDBData.Tipo_Cuenta,
              price: 0,
            }}
            onClick={() => setSelected([true, false, false])}
          />

          <TierCard
            name="plan2"
            info={{
              title: "Platinum Tier",
              description: "Watch exlusive movies and series in three screens",
              tier: 2,
              currentTier: userDBData.Tipo_Cuenta,
              price: 15,
            }}
            onClick={() => setSelected([false, true, false])}
          />

          <TierCard
            name="plan3"
            info={{
              title: "Diamond Tier",
              description:
                "Watch exlusive movies and series in five screens and on 4k",
              tier: 3,
              currentTier: userDBData.Tipo_Cuenta,
              price: 25,
            }}
            onClick={() => setSelected([false, false, true])}
          />
        </div>
        <div className="flex justify-center my-3">
          <Toast.Provider swipeDirection="right">
            <button
              onClick={() => {
                setOpen(false);
                buyPlan();
                setOpen(true);
              }}
              className="text-white font-medium bg-gray-600 mt-5 p-3"
            >
              Cambiar de plan
            </button>

            <Toast.Root
              open={open}
              onOpenChange={setOpen}
              className="bg-white text-red-500 px-3 pt-4 mb-0 font-medium text-xl rounded-md border-2 border-red-500"
            >
              <Toast.Title className="flex flex-row self-center">
                <span>Plan cambiado!</span>
                <span> </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </Toast.Title>
              <Toast.Description />
              <Toast.Action />
              <Toast.Close />
            </Toast.Root>

            <Toast.Viewport className="fixed top-3 right-3" />
          </Toast.Provider>
        </div>
      </div>
    </div>
  );
}
