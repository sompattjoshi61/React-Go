import { useState } from 'react'
import './App.css'
import UseEffectss from './UseEffectss'
import Counter from './Counter'
import UseRefGo from './UseRefGo'
import UncontrolledComponents from './UncontrolledComponents'
import User from './User'
import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'

function App() {
  const [count, setCount] = useState(0)


  // return (
  //   <div>
  //     <h1>App</h1>
  //     <UseEffectss />
  //   </div>
  // )

  // return (
  //   <div>
  //     <h1>Handling Props Side Effects with useEffect</h1>
  //     <Counter count = {count} />
  //     <button onClick={() => setCount(count + 1)}>Counter{count}</button>

  //   </div>
  // )


  // return (
  //   <div>
  //     <UseRefGo />
  //   </div>
  // )

  
  // return (
  //   <div>
  //     <UncontrolledComponents />
  //   </div>
  // )




 // calling parent component from child component
  // const displayName = (name) => {
  //   alert(name)
  // }
  // return (
  //   <div>
  //     <h1>calling parent component from child component</h1>
  //     <User displayName={displayName}/>
  //   </div>
  // )





  
  // useFormStatus 
  // const [pending, setPending] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // prevent page reload
  //   setPending(true);   // start loading
  //   await new Promise((res) => setTimeout(res, 2000)); // simulate delay
  //   console.log("Submitted");
  //   setPending(false);  // stop loading
  // };

  // function CustomerForm() {
  //   return (
  //     <div>
  //       <input type="text" placeholder="Enter your name" />
  //       <br /><br />
  //       <input type="password" placeholder="Enter your password" />
  //       <br /><br />
  //       <button disabled={pending} type="submit">
  //         {pending ? "Submitting..." : "Submit"}
  //       </button>
  //     </div>
  //   );
  // }

  // return (
  //   <div>
  //     <h1>useFormStatus Alternative in React</h1>
  //     <form onSubmit={handleSubmit}>
  //       <CustomerForm />
  //     </form>
  //   </div>
  // )



  //Drived State
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const handleAddUsers = () => {
    setUsers([...users,user])
  }
  console.log(users)
  return (
    <div>
      <h2>Total Users: {users.length}</h2>
      <h2>Last User: {user}</h2>
      <h2>Unique Users: {new Set(users).size}</h2>
      <h1>Drived State</h1>
      <input type='text' onChange={(event) => {setUser(event.target.value)}} placeholder='Add new user'></input>
      <button onClick={handleAddUsers}>Add User</button>
      {
        users.map((item,index) => (
          <h4 key={index}>{item}</h4>
        ))
      }

      

    </div>
  )

}

export default App

