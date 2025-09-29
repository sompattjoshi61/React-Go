import { useRef } from "react"
function UseRefGo() {
const inputRef = useRef(null)
const inputHandler = () => {
    console.log(inputRef)
    inputRef.current.focus()
    inputRef.current.style.color = "red"
    inputRef.current.placeholder = "Enter Password"
    
}

    return (
        <div>
            <h1>UseRefGo</h1>
            <input ref={inputRef} type="text" placeholder="Enter your name"/>
            <button onClick={inputHandler}>Focus on input field</button>
        </div>
    )
}
export default UseRefGo
