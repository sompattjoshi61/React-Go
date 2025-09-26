import { useState } from "react"

function Skills() {
    const [skills, setSkills] = useState([])
    
    const handleSkills = (event) => {
        console.log(event.target.value, event.target.checked)
        if(event.target.checked){
            setSkills([...skills, event.target.value]) // Spread Operator ...skills
        } else {
            setSkills([...skills.filter((item) => item !== event.target.value)]);
        }
    }

    return (
        <div>
            <h3>Select Your Skills</h3>
            
            <input 
                onChange={handleSkills} 
                type="checkbox" 
                id="php" 
                value="PHP"
            />
            <label htmlFor="php">PHP</label><br />

            <input 
                onChange={handleSkills} 
                type="checkbox" 
                id="js" 
                value="JavaScript"
            />
            <label htmlFor="js">JavaScript</label><br />

            <input 
                onChange={handleSkills} 
                type="checkbox" 
                id="node" 
                value="Node.js"
            />
            <label htmlFor="node">Node.js</label><br />
        
            <input 
                onChange={handleSkills} 
                type="checkbox" 
                id="java" 
                value="Java"
            />
            <label htmlFor="java">Java</label>

            <h1>{skills.toString()}</h1>
        </div>
    )
}

export default Skills