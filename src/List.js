import React from "react";
import Item from "./Item";


const List = ({ consult, responsibility }) => {
  return (
    <ul>
      {consult.map((consul, index) => {
        return <Item content={consul.content} key={index} />;
      })}
    </ul>
  );
};

export default List;
