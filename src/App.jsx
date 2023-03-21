import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("App mounted")
  }, [])
  return (
    <div className="App">
      <button onClick={() => setIsVisible(prev => !prev)}>click</button>
      <button onClick={() => setCount(prev => prev + 1)}>number up</button>
      {
        isVisible && <Kompa />
      }
      <h2>{count}</h2>
    </div>
  )
}

export default App


const Kompa = () => {
  useEffect(() => {
    // console.log("Kompa mounted")

    const interval = setInterval(() => {
      console.log("Kompin interval")
    }, 1000)

    return () => {
      clearInterval(interval)
      console.log("cleared")
    }

  })
  return(
    <div>
      Kompa
    </div>
  )
}
