import * as Tabs from '@radix-ui/react-tabs';
import React, { useState } from "react";
import Footer from "../components/Footer";
import FormAddContentMovie from "../components/FormAddContentMovie";
import FormAddContentSerie from '../components/FormAddContentSerie';
import HomeNavBar from "../components/HomeNavBar";


export default function AddContent() {
  const [active, setActive] = useState({tab1: true, tab2: false});

  const changeTabState = (tab) =>{
    if(!active[tab]){
      const otherTab = Object.keys(active).find((key) => key !== tab);
      setActive({
        ...active,
        [tab]: true,
        [otherTab]: false
    })
    }
  }
  return (
    <div className=" bg-black bg-cover h-full w-full">
      <div className="relative z-10 md:bg-black/80">
        <HomeNavBar/>
      </div>
      <div className="flex flex-col justify-center md:max-w-[640px] mx-auto mt-3 md:my-8 md:rounded-lg bg-black border"> 
        <Tabs.Root defaultValue="tab1" orientation="vertical" className='w-full h-full rounded-md'>
          <Tabs.List aria-level="tabs example" className='grid grid-cols-2 w-full border-b-2 border-white'>
            <Tabs.Trigger value="tab1" className={`text-3xl text-center ${active.tab1 ? 'text-white bg-red-600 rounded-none py-2': 'bg-black text-white rounded-none' }`}  onClick={() => changeTabState("tab1")}>Pelicula</Tabs.Trigger>
            <Tabs.Trigger value="tab2" className={`text-3xl text-center ${active.tab2 ? 'text-white bg-red-600 rounded-none py-2': 'bg-black text-white rounded-none' }`} onClick={() => changeTabState("tab2")}>Serie</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">
            <h3 className="text-white text-2xl text-center my-5 px-3">¿Cuál película te gustaría ver en nuestro portafolio?</h3>
            <FormAddContentMovie/>
          </Tabs.Content>
          <Tabs.Content value="tab2">
          <h3 className="text-white text-2xl text-center my-5 px-3">¿Cuál Serie te gustaría ver en nuestro portafolio?</h3>
            <FormAddContentSerie/>
          </Tabs.Content>
        </Tabs.Root>
    </div>
      <Footer estilo="bg-black" estiloSm="bg-black"/>
     </div>
  );
}
