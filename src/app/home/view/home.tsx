import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Carrousel from '../../../shared/views/components/carrousel'
import Filters from './components/filters'
import Header from '../../../shared/views/components/header'
import Products from './components/products'
import Layout from '@/shared/views/components/layout'

config.autoAddCss = false


export default function Home() {
  return (
    <Layout  hasCarrousel={true} >
      <Products />
    </Layout>
  )
}
