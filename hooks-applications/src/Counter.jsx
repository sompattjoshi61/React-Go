
import { useEffect } from "react"

function Counter({count}) {

    const handleCounter = () => {
        console.log("Handle Counter Called")
    }

    useEffect(() => {
        handleCounter()
    }, [])

    return (
        <div>
            <h1>Counter Value {count}</h1>
        </div>
    )
}
export default Counter
