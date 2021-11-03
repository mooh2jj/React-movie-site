import React from "react";
import { useState, useEffect } from "react";

const Counter = (props) => {

    const [count, setCount] = useState(0) 

    const counter =() => {
        setCount(count+1)
    }
  
    return (
      <div>
        <button onClick={counter}>{props.click} {count}</button>
      </div>
    )
  }

export default Counter;