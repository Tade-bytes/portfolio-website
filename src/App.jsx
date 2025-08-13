import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import CaseStudies from './components/caseStudies'
import GetInTouch from './components/getInTouch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' flex flex-col w-[100%]'>
      < >
      <Home/> 
      <CaseStudies/>
       <GetInTouch/>
    </>
    </div>
    
  )
}

export default App
