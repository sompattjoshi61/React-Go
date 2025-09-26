
import './App.css'
import { useState } from 'react';
import Counter from './counter';
import User from './User';
import Student from './Student';


// function App() {

//   let fruits = "Apple"

//   const handleFruit = () => {
//     fruits = "Banana"
//   }

//   return (
//     <>
//     <h1>State in React</h1>
//     <h1>{fruits}</h1>
//     <button onClick={handleFruit}>Change Fruit</button>
//     </>
//   )
// }




// function App() {
//   const [fruit,setFruit] = useState("Apple");

//   const handleFruit = () => {
//     setFruit(prevFruit => (prevFruit === "Apple" ? "Banana" : "Apple"));
//   }

//   return (
//     <>
//       <h1>State in React</h1>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>Change Fruit</button>
//       <Counter />
//     </>
//   );
// }


// function App() {
//   const [display, setDisplay] = useState(true);
//   return (
//     <>
//       <h1>Toogle in React</h1>

//       {
//         display ? <h1>Som Pattjoshi</h1> : null
//       }
//       <button onClick={() => setDisplay(!display)}>Toogle</button>
//     </>
//   );
// }




// function App() {
//   const [count,setCount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       {
//         count === 1 ? <h1>Condition 1</h1>
//         : count === 2 ? <h1>Condition 2</h1>
//         : count === 3 ? <h1>Condition 3</h1>
//         : <h1>Other Conditions</h1>
//       }
//     </div>
//   )
// }

// Props in React
// function App() {
//   let name = "Som Pattjoshi"
//   return(
//     <div>
//       <h1>Props in React</h1>
//       <User name={name}/>
//     </div>
//   )
// }

function App() {
  let name = "Som Pattjoshi"
  return(
    <div>
      <Student name="Som"/>
    </div>
  )
}




export default App
