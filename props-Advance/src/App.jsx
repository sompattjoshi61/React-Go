import { useState } from 'react'
import './App.css'
import User from './User'
import Wrapper from './Wrapper'
import Skills from './Skills' 
import Radio from './Radio'
import Loops from './Loops'
import ReuseLoop from './reuseLoop'

function App() {

  const [val, setVal] = useState('Som Pattjoshi')

  const[name, setName] = useState('')
  const[password, setPassword] = useState('')
  const[email, setEmail] = useState('')

  return (
    // <>
    //   <h1>Advancde Props</h1>
    //   <User name="Som" age="22" />
    //   <Wrapper>
    //     <h1>Hello EveryOne</h1>
    //   </Wrapper>
    // </>


    // <div>
    //   <h1> Get Input Field Value</h1>
    //   <input type="text" value={val} onChange={(event) => setVal(event.target.value)} placeholder='Enter your name' />
    //   <h1>{val}</h1>
    //   <button onClick={() => setVal("")}>Clear Value</button>
    // </div>

    // <div>
    //   <h1>Controlled Components</h1>
    //   <form action = "" method="get">
    //     <input type = "text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter your name'/>
    //     <br></br>
    //     <input type = "password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter your Password'/>
    //     <br></br>
    //     <input type = "text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter your email'/>
    //     <br></br>
    //     <button>Submit</button>
    //     <br></br>
    //     <button onClick={() => (setName(''), setPassword(''), setEmail(''))}>Clear</button>

    //     <h3>{name}</h3>
    //     <h3>{password}</h3>
    //     <h3>{email}</h3>

    //   </form>
    // </div>


    // <div>
    //   <h1>Handling Checkbox in React</h1>
    //   {/* <Skills/> */}
    //   <Radio/>
    // </div>

    // <div>
    //   <h1>Loops in JSX</h1>
    //   <Loops/>
    // </div>

    <div>
      <ReuseLoop/>
    </div>
  )
}

export default App
