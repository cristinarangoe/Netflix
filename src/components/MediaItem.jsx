import React from 'react'
import { useEffect } from 'react'
import { helpers } from '../generalHelpers/helpers';

export default function MovieItem(item) {
  const {name, description, image, adult,genres, cast, duration} = item.media.fields;

  return (
    <>
      <img src={helpers.imageValue(image)}/>
      <div>{JSON.stringify(helpers.descriptionValue(description))}</div>
      <div>{JSON.stringify(adult)}</div>
      <div>{JSON.stringify(helpers.arrayValue(genres))}</div>
      <div>{JSON.stringify(helpers.arrayValue(cast))}</div>
      <div>{JSON.stringify(duration)}</div>
    </>
  )
}
