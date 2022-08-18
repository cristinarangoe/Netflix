import * as Dialog from "@radix-ui/react-dialog";
import MediaItem from "./MediaItem";
import React, { useEffect } from "react";
import useEventTracker from "../hooks/useEventTracker";



export default function MediaDialog({ content }) {
    const GAEventTracker= useEventTracker("External Links")
    const gaTracker = () => {
        content.genres.map((genre)=>{
            GAEventTracker(genre)
        })
    }

  return (
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
                <div>
                    {'episodes' in content &&
                    <div className="w-full block mt-3">
                        <h2 className="text-white font-bold text-xl mb-2">Episodes</h2>
                        {content.episodes.map((episode,key) =>{
                            return (
                                <div>
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
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}