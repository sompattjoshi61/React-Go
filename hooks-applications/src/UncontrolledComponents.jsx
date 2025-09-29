import { useRef } from "react";
function UncontrolledComponents() {

    const userRef = useRef();
    const passwordRef = useRef();

    const handleForm = (event) => {
        event.preventDefault();
        const user = document.querySelector('#user').value;
        const password = document.querySelector('#password').value;
        console.log("handleForm",user,password)
    }

    const handleFormRef = (event) => {
        event.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        console.log("handleFormRef",user,password)
    }

    return (
        <div>
            <h1>UncontrolledComponents</h1>
            <form action="" method="post"  onSubmit={handleForm}>
                <input type="text" placeholder="Enter your name" id="user" />
                <br></br> <br></br>
                <input type="text" placeholder="Enter your Password" id="password" />
                <br></br> <br></br>
                <button type="submit">Submit</button>
            </form>

            <hr></hr>

            <h1>UncontrolledComponents with useRef</h1>
            <form action="" method="post"  onSubmit={handleFormRef}>
                <input type="text" ref={userRef} placeholder="Enter your name" id="userRef" />
                <br></br> <br></br>
                <input type="text" ref={passwordRef} placeholder="Enter your Password" id="passwordRef" />
                <br></br> <br></br>
                <button type="submit">SubmitRef</button>
            </form>
        </div>
    )
}

export default UncontrolledComponents