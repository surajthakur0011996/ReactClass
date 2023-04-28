import React from "react";

const Header2 = ({change}) => {
    return(
        <>
        <button onClick={()=>change("hello")}>Click here</button>
        </>
    )
}
export default Header2