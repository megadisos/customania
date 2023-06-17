import Image from 'next/image'
import Header from '../home/view/components/header'

interface AboutProps {
    name:string
}
export default function About({name}:AboutProps) {
  return (
    <main className="flex  h-screen flex-col pl-20 pr-20 pt-5 pb-5 gap-1 ">
    <div className='h-full bg-slate-100 bg-opacity-25 rounded shadow-slate-800'>
    <div className='flex flex-col h-2/4' >
    <Header />
    </div>
    <div className='flex flex-row h-2/4 justify-items-start'>
    </div>
    </div>
  </main>
  )
}
