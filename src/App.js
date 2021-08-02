import React from 'react'
import './App.css'
import { Schedular } from './components/Schedular/Schedular'

export const App = () => {
  return (
    <div data-testid = 'myapp'>
      <Schedular/>
    </div>
  )
}
