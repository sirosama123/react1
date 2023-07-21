import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar from './components/bar2'
import ButtonAppBar from './components/bar'
import MyMenu from './components/categories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResponsiveAppBar/>
      <MyMenu/>
    </>
  )
}

export default App
