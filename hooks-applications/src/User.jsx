function User({displayName}) {
    const name = "Som"
    
    return (
        <div>
            <button onClick={() => displayName(name)}>Display name</button>
        </div>
    )
}
export default User
