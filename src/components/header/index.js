import React, { useState } from "react";

import Header2 from "../header2";

const Header = () => {
  const [name, setName] = useState("anil");

  const updateMe = (value) => {
        setName(value);
  };
  return (
    <>
      <h2>{name}</h2>
      <Header2 change={updateMe} />
    </>
  );
};
export default Header;
