import Link from "next/link";

export default function Carrousel(){
    return (
        <div className="flex flex-row h-5/6 w-full ">
            <img src={'/images/dummyImage.jpg'} className="w-full h-auto object-cover" />
        </div>
    )
}