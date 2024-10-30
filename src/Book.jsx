import React, { useState } from 'react';

const Book=(props)=>{

    const [like, setLike]=useState(props.likes);

    const addLikes=()=>{
        setLike(like+1);
    };
    
    return (
    <>
        <li style={{backgroundColor: "green"}}>
            <h2>{props.title}</h2>
            <h2>{props.author}</h2>
            <h2>{like}</h2>
            <h2>props.onshelf</h2>
        </li>
        <button onClick={()=>alert(props.sample)}>Read</button>
        <button onClick={addLikes}>add likes</button>
        {props.onshelf&& <button onClick={Remove}>Take</button>}
    </>
    )
}


export default Book; 