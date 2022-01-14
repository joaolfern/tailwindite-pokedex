const hardCacheImage = (image: string) => {
  if (!image) return
  const imageObj = new Image()
  imageObj.src = image
  document.head.appendChild(imageObj)
}

export default hardCacheImage
