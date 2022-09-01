import * as Dialog from "@radix-ui/react-dialog";
import MediaItem from "./MediaItem";
import React, { useEffect, useState, createContext} from "react";
import useEventTracker from "../hooks/useEventTracker";
import ReactGa from "react-ga4"
import BuyMediaContext from "../context/BuyMediaContext";

import { useSelector, useDispatch } from "react-redux";
import { toggleAddItem } from "../storeData/buyItems";
import ratingService from "../services/ratings";

export default function MediaDialog({ content, onClick }, ) {

    const [ratings, setRatings] = useState([" text-yellow-400",
    " text-yellow-400",
    " text-yellow-400",
    " text-yellow-400",
    " text-yellow-400"])

    const buyItems = useSelector(state=>state.buyItems)
    const dispatch = useDispatch();
    const gaTracker = () => {
        content.genres.map((genre)=>{
            ReactGa.event({
                action:"select_content",
                category: "genre_category",
                label: JSON.stringify(genre)
            }) 
        })
    }

    // useEffect(()=>{
    //     const getRating= async() =>{
    //         let data = await ratingService.viewRating(content.id, content.type);
    //         console.log(data)
    //         if (data){
    //             handleRating(data)
    //             return;
    //         }
    //     }
    //     getRating()
    // })
    const buyMedia = () =>{
        let item = {id: content.id, name: content.name, image: content.image, price: content.price, type:content.type}
        dispatch(toggleAddItem(item))
    }

    const handleRating =(index)=>{
        let yellowStars = new Array(index).fill(" text-yellow-400")
        let grayStars = new Array(ratings.length-index).fill(" text-gray-300 dark:text-gray-500")
        setRatings(yellowStars.concat(grayStars))
    }

    const postRating =() =>{
        console.log(ratings.filter(x => x==" text-yellow-400").length)
        
    }

    const viewRating = async () =>{
        // let data = ratingService.viewRating();
        // handleRating(data);
        
    }

  return (
    <BuyMediaContext.Provider value ={global.cartItems}>
    <Dialog.Root>
      <Dialog.Trigger >
        <a onClick={gaTracker}><MediaItem name={content.name} image={content.image} /></a>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-[hsla(0, 0%, 0%, 0.439)] bg-fixed inset-0" />
        <Dialog.Content className="overflow-y-auto overscroll-x-none fixed bg-black rounded-[6px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-[450px] lg:w-[200vw] lg:max-w-[700px] max-h-[85vh] p-[25px]">
            <div>
                <div>
                    <img src={content.image} className='w-full h-auto block' alt={content.name}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <div className="text-white">
                        <p>{content.description}</p>
                        {content.adult && <p>18+</p>}
                        <p className="font-bold">{content.duration}</p>
                    </div>
                    <div className="grid grid-rows-2 gap-2">
                        <div>
                            <h3 className="text-gray-400">
                                Cast: 
                                {content.cast.map((cast, key) => {
                                    
                                    return (<span key={key}  className="text-white"> {cast},</span>)
                                })}.
                            </h3>
                        </div>
                                                <div>
                            <h3 className="text-gray-400">
                                Géneros: 
                                {content.genres.map((genero, key) => {
                                    
                                    return (<span key={key}  className="text-white"> {genero},</span>)
                                })}.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center grid grid-cols-2">
            
                       <span className="text-white align font-bold mt-2 text-xl">Precio: <span className="text-red-600 align ">{content.price}$</span></span>
                       <button className="text-white align bg-red-600" onClick={buyMedia} >Añadir al carrito</button>
                </div>
                <div class="flex items-center">
                    <svg aria-hidden="true" name="0" onClick={()=>handleRating(1)} class={"w-5 h-5" + ratings[0]} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" name="1" onClick={()=>handleRating(2)} class={"w-5 h-5" + ratings[1]} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" name="2" onClick={()=>handleRating(3)} class={"w-5 h-5" + ratings[2]} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" name="3" onClick={()=>handleRating(4)} class={"w-5 h-5" + ratings[3]} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" name="4" onClick={()=>handleRating(5)} class={"w-5 h-5" + ratings[4]} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg onClick={postRating} class="w-6 h-6 bg-lime-700 rounded-md ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                    {'episodes' in content &&
                    <div className="w-full block mt-3">
                        <h2 className="text-white font-bold text-xl mb-2">Episodes</h2>
                        {content.episodes.map((episode,key) =>{
                            return (
                                <div key={key}>
                                    <div className="hidden sm:hidden md:inline">
                                        <div className=" flex flex-row h-auto w-full mb-3 border-b border-gray-400 pb-2">
                                            <div className="mr-3 text-white text-center inline-block align-middle my-auto">{key + 1}</div>
                                            <div className=" mr-3 w-[100px] sm:w-[120px] md:w-[180px] lg:w-[200px] inline-block my-auto">
                                                <img src={episode.image} className=""/>
                                            </div>
                                            <div className=" mr-3 text-white">
                                                <p className="font-bold">{episode.name}</p>
                                                <p className="text-justify">{episode.description}</p>
                                            </div>
                                            <div className=" my-auto text-white">{episode.duration}</div>
                                        </div>
                                    </div>
                                    <div className="inline sm:inline md:hidden">
                                        <div className="flex flex-col mb-3 border-b border-gray-400 pb-2">
                                            <div className="flex flex-row ">
                                                <div className="w-[100px] sm:w-[120px] md:w-[180px]">
                                                    <img src={episode.image} className=""/>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-white font-bold">{key + 1}. {episode.name}</p>
                                                    <p className="text-white">{episode.duration}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row">
                                                <p className="text-white text-justify">{episode.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>}

                </div>
                        
            </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </BuyMediaContext.Provider>

  );
}