'use client'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Home from './home/view/home'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

config.autoAddCss = false

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
   <Home />
   </QueryClientProvider>
  )
}
