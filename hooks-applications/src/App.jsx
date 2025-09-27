import { useState } from 'react'
import './App.css'
import UseEffectss from './UseEffectss'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)


  // return (
  //   <div>
  //     <h1>App</h1>
  //     <UseEffectss />
  //   </div>
  // )

  return (
    <div>
      <h1>Handling Props Side Effects with useEffect</h1>
      <Counter count = {count} />
      <button onClick={() => setCount(count + 1)}>Counter{count}</button>

    </div>
  )
}

export default App

