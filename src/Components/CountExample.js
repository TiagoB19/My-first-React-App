import React, { useState } from 'react';

const Count = (props) => {

    const [countNumber, setCountNumber] = useState(0)

    return (
         
         <div>
            <h1>{countNumber}</h1> 

            <h1 onClick={() => setCountNumber(countNumber + 1)}>Plus</h1>   
            <h1 onClick={() => setCountNumber(countNumber - 1)}>Minus</h1>    
 
        </div>
         
    );
}

export default Count;
