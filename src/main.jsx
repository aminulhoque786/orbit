import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextApi } from './components/ContextApi.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'



createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <ContextApi>
    <App />
  </ContextApi>,
</Provider>






  
)
