import { useState } from "react";
function Radio() {
    const [gender, setGender] = useState('female');
    const [country, setCountry] = useState('australia');
    return (
        <div>

            <h1>Handling Radio & Dropdown</h1>
            <h4>Select Gender</h4>
            <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" id="male" value="male"/>
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" id="female" value="female"/>
            <label htmlFor="female">Female</label>
            <h1>{gender}</h1>
            <br></br>
            <br></br>
            <h4>Select Country</h4>
            <select onChange={(event) => setCountry(event.target.value)} defaultValue="australia">
                <option value="india">India</option>
                <option value="pakistan">Pakistan</option>
                <option value="china">China</option>
                <option value="australia">Australia</option>
            </select>
            <h1>{country}</h1>
        </div>
    )
}   
export default Radio

