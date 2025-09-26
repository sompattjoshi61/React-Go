function Loops() {
    const userData = [
        {
            name:'anil',
            age:29,
            email:'anil@test.com',
            id:1
        },
        {
            name:'sam',
            age:34,
            email:'sam@test.com',
            id:2
        },
        {
            name:'peter',
            age:20,
            email:'peter@test.com',
            id:3
        },
        {
            name:'bruice',
            age:20,
            email:'bruice@test.com',
            id:4
        }
    ]
    return (
        <div>
            <h1>Loops in JSX</h1>
            <table border='1' cellPadding='10' cellSpacing='0' width='100%'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Loops