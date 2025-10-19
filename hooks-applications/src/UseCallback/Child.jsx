import React from 'react';


const Child = ({counterTwo, setCounterTwo}) => {
    console.log("Child Component Rendered");
    return (
        <div>
            <h1>Child Component</h1>
        </div>
    );
};

export default memo(Child);  //Optimizing