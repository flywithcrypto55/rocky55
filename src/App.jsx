import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Page from './components/Page'
import Characters from './components/Characters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page/>
    </>
  )
}

export default App
