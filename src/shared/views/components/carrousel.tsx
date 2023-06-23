"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faArrowLeft,faCircle,faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { CarrouselTypes } from "../../../app/home/modules/carrousel";
import React, { useState } from 'react';
import { AppLogic } from '../../../app/home/logic/appLogic'
import Link from 'next/link';
import Button from './button';


// CONSTANTS
// STYLES 
export const ICONSTYLES = "absolute top-1/2 bg-slate-100 rounded-full bg-opacity-25 p-2 cursor-pointer hover:animate-bounce animate-once z-10"
// IMAGES PATH
const IMAGESPATH = '/images/carrousel'
//IMAGES OBJECT
const CARROUSELIMAGES:CarrouselTypes[] = [
    {id:1,path:IMAGESPATH+'/carrousel1.jpg',title:'Title 1',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet ipsum a porttitor. Sed tempus placerat purus, id euismod diam pulvinar non. ',link:'/',visible:true},
    {id:2,path:IMAGESPATH+'/carrousel2.jpg',title:'Title 2',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet ipsum a porttitor. Sed tempus placerat purus, id euismod diam pulvinar non. ',link:'/',visible:false},
    {id:3,path:IMAGESPATH+'/carrousel3.jpg',title:'Title 3',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet ipsum a porttitor. Sed tempus placerat purus, id euismod diam pulvinar non. ',link:'/',visible:false}
]

export default function Carrousel(){
   const [isFirstImage,setIsFirstImage] = useState<boolean>(true)
   const [isLastImage,setIsLastImage] = useState<boolean>(false)
   const [carrouselImages,setCarrouselImages] = useState<CarrouselTypes[]>(CARROUSELIMAGES)
   const [currentImageId,setCurrentImageId] = useState<number>(1)
   
   const handleCarrousel = (direction:'right'|'left') =>{
    //update carrousel object base on current image
    const updateCarrouselImages =  AppLogic.handleArrowCLick(currentImageId,direction,carrouselImages)
    //getting the current id active
    const imageId = AppLogic.getCurrentImageId(updateCarrouselImages)
     //getting the current index postion of enable image id
    const currentImagePosition = AppLogic.getCurrentImagePosition(imageId,updateCarrouselImages)
     //updating image id and carrousel
    setCurrentImageId(imageId)
    setCarrouselImages(updateCarrouselImages)
    //Checking what is the position for showing the arrows icons
    if(currentImagePosition === 0 ) setIsFirstImage(true)
    if(currentImagePosition === 1 ) setIsLastImage(true)
    if(currentImagePosition === -1) {
        setIsFirstImage(false)
        setIsLastImage(false)
    }
    
}
   const renderCircles = () =>{
    const components = []
    for(let i =0; i< carrouselImages.length;i++){
       
        components.push(<FontAwesomeIcon icon={currentImageId === i+1?faCircle:faCircleNotch } size={currentImageId === i+1?'sm':'xs'} style={{color:currentImageId === i+1?'#164E63':'black'}} />)
    }
    return components
   }
    return (
        <div className="relative flex flex-row h-5/6 w-full static">
            {/* arrows icons */}
           {!isLastImage && <div id="arrow-right" className={ICONSTYLES+ ' right-10'} onClick={()=>handleCarrousel('right')}>
            <FontAwesomeIcon icon={faArrowRight} size='2xl'/>
            </div>} 
            { !isFirstImage && <div id="arrow-left" className={ICONSTYLES+' left-10'} onClick={()=>handleCarrousel('left')}>
            <FontAwesomeIcon icon={faArrowLeft} size='2xl'/>
            </div>}
            {/* circles icons */}
            <div className='absolute right-1/2 bottom-2  flex flex-row gap-2 animate-bounce '>
            {renderCircles()}
            </div>
            
             {/* carrousel images */}
            {carrouselImages.map(image=>{
                const imgStyles = image.visible?"w-full h-auto object-cover visible":"w-full h-auto object-cover hidden"
                const divTextStyles = 'absolute w-1/2 h-3/4  bg-black bg-opacity-30 p-10 z-0 '
                // divTextStyles = isFirstImage?divTextStyles+'left-20 top-10 ':isLastImage?'right-20 top-10 ':'left-1/2 top-10'
                const visibleStyles = image.visible?divTextStyles+'visible':divTextStyles+'hidden'
                return (
                    <>
                    <div className={`${visibleStyles} ${isFirstImage ? "left-20 top-10":(isLastImage?"right-20 top-10":" right-1/2 top-10 transform translate-x-1/2") }`}>
                        
                        <p className='text-lg  text-slate-50 mb-1 font-bold animate-jump-in md:text-4xl md:mb-3'>{image.title}</p>
                        <p className='text-xs text-slate-50 mb-5 animate-jump-in lg:text-xl xl:mb-2 xl:text-2xl'>{image.description}</p>
                        <Link href={image.link}><Button name="Ver mas" position='right' size='25%' type='normal'/></Link>
                       
                    </div>
                    <img src={image.path} className={imgStyles} />
                    </>
                )
            })}
            
        </div>
    )
}