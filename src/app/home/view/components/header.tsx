import Link from "next/link";

export default function Header(){
    return (
        <div className="flex flex-row  h-1/6 ">
            <div className="flex flex-row w-3/6 ">
                <h1 className="flex ml-3 items-end">CUSTOMANIA</h1>
            </div>
            <div className="flex flex-row w-3/6 justify-end items-end">
                <ul className="flex flex-row gap-2 mr-5">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/'>Categories</Link></li>
                    <li ><Link href='/about'>About</Link></li>
                </ul>
                </div>
        </div>
    )
}