import React from 'react'
import ReactDOM from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp'
import './style.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GiftExpertApp />
  </React.StrictMode>,
)
