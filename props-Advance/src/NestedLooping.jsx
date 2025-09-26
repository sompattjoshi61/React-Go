 import './NestedLooping.css'
 function NestedLooping() {
    const collegeData = [
        {
            name: 'IET Aalwar',
            city: 'Aalwar',
            website: 'ietaalwar.com',
            student : [
                {
                    name: 'Som',
                    age: 22,
                    email: 'som@gmail.com'
                },
                {
                    name: 'Peter',
                    age: 22,
                    email: 'peter@gmail.com'
                },
                {
                    name: 'John',
                    age: 22,
                    email: 'john@gmail.com'
                }

            ]
        }
    ]
    return (
        <div className="nested-looping">
            <h1>Nested Looping</h1>
            {
                collegeData.map((college)=>{
                    const websiteUrl = college.website?.startsWith('http') ? college.website : `https://${college.website}`;
                    return (
                        <div className="college-card" key={college.name}>
                            <div className="college-header">
                                <div className="college-name">{college.name}</div>
                                <div className="college-meta">
                                    <span className="college-city">{college.city}</span>
                                    <span className="college-website">
                                        <a href={websiteUrl} target="_blank" rel="noreferrer">{college.website}</a>
                                    </span>
                                </div>
                            </div>
                            <div className="student-list">
                                {
                                    college.student.map((student)=>{
                                        return (
                                            <div className="student-card" key={student.email}>
                                                <p className="student-name">{student.name}</p>
                                                <p className="student-detail">Age: {student.age}</p>
                                                <p className="student-detail">{student.email}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NestedLooping
