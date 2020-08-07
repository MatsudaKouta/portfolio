import React from "react";

const Item = ({ content }) => {

  return (
    <>
      <li>
        <input type="date" />
        <span>
          {content} 
        </span>
      </li>
    </>
  );
};

export default Item;
