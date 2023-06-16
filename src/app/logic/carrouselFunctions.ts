import { CarrouselTypes } from "../modules/carrousel";

export const handleArrowCLick = (currentImageId:number,direction:'left' | 'right',carrouselImage:CarrouselTypes[])  =>{
    let newImageId = 0
    if(direction === 'left') newImageId = currentImageId - 1
    if(direction === 'right') newImageId = currentImageId + 1

    return carrouselImage.map(image=>{
        if(image.id === newImageId) return {...image,visible:true}
        return {...image,visible:false}
    })
    
}

export const getCurrentImageId = (carrouselImage:CarrouselTypes[]) =>{
    let imageId = 1
    carrouselImage.map(image=>{
        if(image.visible) imageId = image.id
    })
    return imageId
}

export const getCurrentImagePosition = (imageId:number,carrouselImage:CarrouselTypes[]) =>{
    let imageIndex = 1
 carrouselImage.map((image,index)=>{
    if(image.id === imageId) imageIndex = index
 })
 // IF IMAGE IS THE FIRST ONE
 if(imageIndex === 0 ) return 0
  // IF IMAGE IS THE LAST ONE
 else if(imageIndex === carrouselImage.length -1)  return 1
  // IF IMAGE IS NONE
 else {
     return -1
 }
}