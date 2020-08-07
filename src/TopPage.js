import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
// import Responsibility from "./Responsibility";

const TopPage = () => {
  //相談内容をTopPageのstateで管理
  const [consult, setConsult] = useState([]);
  const [responsibility, setResponsibility] = useState("");

  const addConsult = (content) => {
    setConsult([
      ...consult,
      {
        content: content,
      },
    ]);
  };

  const addRespon = (res) => {
    setResponsibility([
      ...responsibility,
      {
        res: res,
      },
    ]);
  };

  return (
    <>
      <h1>相談履歴</h1>
      <Form addConsult={addConsult} addRespon={addRespon} />
      <List consult={consult} responsibility={responsibility} />
      {/* <Responsibility res={respon} /> */}
    </>
  );
};

export default TopPage;
