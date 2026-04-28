import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n'
import Loader from './components/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
)
