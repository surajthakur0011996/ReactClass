import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 



const TernaryOperator = ({name,age}) => {

const [toggle,setToggle]=useState(false);

const location =useLocation();
console.log(location)

    return (
        <>
    {

        toggle ? <div>Page one</div>
        : <div> <p>i am child 1</p>
            <button onClick={()=>setToggle(true)}>Toggle Component</button>
          </div>
      }
      </>
  );

};
export default TernaryOperator;