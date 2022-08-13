import React, { useState } from 'react'


export default function MediaDialog(media) {
  const [open,setOpen] = useState(false)
  const {name, description, image, adult, genres, cast, duration} = media.media
  return (
    <div>
    {open && <div>
      <div>{JSON.stringify(name)}</div>
      <div>{JSON.stringify(description)}</div>
      <div>{JSON.stringify(image)}</div>
      <div>{JSON.stringify(adult)}</div>
      <div>{JSON.stringify(genres)}</div>
      <div>{JSON.stringify(cast)}</div>
      <div>{JSON.stringify(duration)}</div>
      </div>
    }
    <button onClick={()=>{setOpen(!open)}}>undir en media</button>
    </div>
    
  )
}
