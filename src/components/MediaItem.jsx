import React from 'react'
import { useEffect } from 'react'
import { helpers } from '../generalHelpers/helpers';

export default function MovieItem(item) {
  const {name, description, image, adult,genres, cast, duration} = item.media.fields;

  return (
    <div>{JSON.stringify(helpers.imageValue(image))}</div>
    
  )
}
