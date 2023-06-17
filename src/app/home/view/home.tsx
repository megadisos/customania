import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Carrousel from './components/carrousel'
import Filters from './components/filters'
import Header from './components/header'
import Products from './components/products'

config.autoAddCss = false


export default function Home() {
  return (
    <main className="flex  h-screen flex-col pl-20 pr-20 pt-5 pb-5 gap-1 ">
      <div className='h-full bg-slate-100 bg-opacity-25 rounded shadow-slate-800'>
      <div className='flex flex-col h-2/4' >
      <Header />
      <Carrousel />
      </div>
      <div className='flex flex-row h-2/4 justify-items-start'>
        <Filters />
        <Products />
      </div>
      </div>
    </main>
  )
}
