import React, { useState } from 'react'
import NavBarLogo from '../components/NavBarLogo'
import TierCard from '../components/TierCard'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router'
export default function Profile() {
  const [selected, setSelected] = useState([false,false,false])

  const navigate = useNavigate()

    const fetchedData = {
        ID: "prueba@aws.com",
        Tipo_Cuenta: 2,
        Given_Name: "Malfoy",
        Family_Name: "Breve",
        Birthday: "05 dic 1997",
        Gender: "Male"
    }
    
    const buyPlan = ()=>{
      let i = 0;
      while(i < selected.length && !selected[i]){
        i++;
      }
      if (i < selected.length){
        if(i === fetchedData.Tipo_Cuenta-1){
          alert("Ya tienes este plan");
          return;
        }
        //Post on database y fetch nuevo data para el fetchedData
        alert("nuevo plan adquirido")
      }
      
    }


  return (
    <div className="bg-black/90 h-full w-full">
    <div className="flex flex-row items-center">
        <NavBarLogo/>
        <div className='flex text-white justify-end w-[100%]'>
        <div className='flex flex-row mr-[2%]' onClick={()=>navigate('/home')}>
        <svg className="w-12 h-12 self-center hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
           </div> 
        </div>
        

        </div>
        <div className='flex m-[1%] ml-[2%]'>
          <span className='text-white text-bold text-xl'>Hi!, {fetchedData.Given_Name}</span>
        </div>
        <div className='flex flex-row space-x-5 justify-center mt-[13%]'>
        <TierCard  name="plan1" info={{
        title:"Free Tier", 
        description:  "Only watch non-exlusive movies and series in one screen",
        tier:1,
        currentTier:fetchedData.Tipo_Cuenta,
        price:0}} onClick={()=>setSelected([true,false,false])}/>

        <TierCard name="plan2" info={{
        title:"Platinum Tier", 
        description:  "Watch exlusive movies and series in three screens",
        tier:2,
        currentTier:fetchedData.Tipo_Cuenta,
        price:15}} onClick={()=>setSelected([false,true,false])}/>

        <TierCard name="plan3" info={{
        title:"Diamond Tier", 
        description:  "Watch exlusive movies and series in five screens and on 4k",
        tier:3,
        currentTier:fetchedData.Tipo_Cuenta,
        price:25}} onClick={()=>setSelected([false,false, true])}/>
        </div>
        <div className='flex justify-center mt-[2%]'>
        <button className='text-white align bg-lime-700' onClick={buyPlan}>Buy Plan</button>
        </div>
        <div className=' lg:mt-[7%] md:mt-[25%] sm:mt-[10%] xs:mt-[10%]'>
          <Footer/>
        </div>
    </div>
  )
}
