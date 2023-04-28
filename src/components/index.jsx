import React, { useState } from "react";

 const FirstComoponent = () => {
     return(
        <>
<p>hello</p>
<h1>World</h1>
</>
     )
}

 const SecondComoponent = () => {
    const [name,setName]=useState("John");
    const changeName = (value) => {
        setName(value)
    }
    return(
       <>
<p>hello</p>
{/* <ThirdComoponent name={name} change={changeName}/> */}
</>
    )
}
// export {FirstComoponent,SecondComoponent}

const ThirdComoponent = () => {
    
    return(
       <>
       <FourthComoponent name="Alexa" age={12} />
</>
    )
}

export default ThirdComoponent


const FourthComoponent = ({name,age}) => {
    // console.log(props);
    return(
       <>
<p>{name}{age}</p>
</>
    )
}



