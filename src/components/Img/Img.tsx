import React, { useEffect, useState } from 'react'
import { IImage } from './IImg'

function Img({ src, placeholder, className, ...rest }: IImage) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    if (!src) return

    const image = new Image()
    image.src = src
    image.onload = () => setIsImageLoaded(true)
  }, [src])

  return (
    isImageLoaded
      ? <img className={`${className || ''}`} src={src} alt='' {...rest} />
      : <img className={`filter-silhouette ${className || ''}`} alt='' src={placeholder} {...rest} />
  )
}

export default Img