import React, { useEffect, useState } from "react";

const LearnUseeffect = () => {

const[test,setTest]=useState(null)

    useEffect(()=>{
        console.log("i am here",test);  
    },[])

    useEffect(()=>{
        console.log("i am useEffect 2");
    },[])

    // setTimeout(() => {
    //     setTest('Hel11')
    //     console.log("state set") 
    // }, 4000);
    return(
<>

<span>{test}</span><br></br>
<button onClick={()=>setTest("there")}>Click me</button>
</>
    )
}

export default LearnUseeffect;