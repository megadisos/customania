import Image from 'next/image'
import About from './about/page'
import Carrousel from './components/carrousel'
import Filters from './components/filters'
import Header from './components/header'
import Products from './components/products'

export default function Home() {
  return (
    <main className="flex  h-screen flex-col  gap-1">
      <div className='flex flex-col h-1/2'>
      <Header />
      <Carrousel />
      </div>
      <div className='flex flex-row h-1/2 justify-items-start'>
        <Filters />
        <Products />
      </div>
    </main>
  )
}
