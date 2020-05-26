import React from 'react';

const userInput = (props) => {
    return <input 
            type="text" 
            onChange={props.nameChanged} 
            value={props.defaultName}
            style={{border: "1px solid #ECA"}}
            />
}

export default userInput;