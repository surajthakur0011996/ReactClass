import React, { useContext, useState } from "react";

import { data1, data2 } from "../../App";

const Child3 = () => {
const fullAddress=useContext(data2)
const data=useContext(data1)

  return (
    <>
    {fullAddress}
    {data?.name}{data?.age}
      {/* <data1.Consumer>
        {(value) => {
          return (
            <data2.Consumer>
              {(address) => {
                return (
                  <h1>
                    {value.name}
                    {value?.age}
                    {address}
                  </h1>
                );
              }}
            </data2.Consumer>
          );
        }}
      </data1.Consumer> */}
    </>
  );
};
export default Child3;
