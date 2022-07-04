import React, { Component,useState} from 'react';

export default function Button(props){
        const handle=(e)=>{
        props.incrementBy(e.target.value);
    }

    
    return(
        <div>
            <button onClick={handle} value={1}>+1</button>
            <button onClick={handle} value={5}>+2</button>
        </div>
    );
}