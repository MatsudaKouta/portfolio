import React, { useState } from "react";
import Responsibility from "./Responsibility";
import Client from './Client'


const Form = ({ addConsult, addRespon　}) => {
  const [value, setValue] = useState("");
  const [client, setClient] = useState('')
  const [respon, checkResponsibility] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addConsult(value);
    addRespon(respon)
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setClient(client)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">
          <input
            type="text"
            value={value}
            id="content"
            placeholder="相談内容"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </label>
      </form>
      <form onSubmit={handleSubmit2}>
        <label htmlFor="cli">
          <input
            type="text"
            value={client}
            id="cli"
            placeholder="学生名"
            onChange={(e) => {
              setClient(e.target.value);
            }}
          />
        </label>
      </form>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res">
          <input
            name="res"
            type="radio"
            value={"tanaka"}
            id="res"
            placeholder="担当者"
            onChange={() => {
              checkResponsibility("田中");
            }}
          />
          田中
          <input
            name="res"
            type="radio"
            value={"suzuki"}
            id="res"
            placeholder="担当者"
            onChange={() => {
              checkResponsibility("鈴木");
            }}
          />
          鈴木
          <input
            name="res"
            type="radio"
            value={"yamada"}
            id="res"
            placeholder="担当者"
            onChange={() => {
              checkResponsibility("山田");
            }}
          />
          山田
        </label>
      </form>
      {/* <button type="submit" onSubmit={handleSubmit}>
        決定
      </button> */}

      <Client cli = {client}/>
      <Responsibility res={respon} />
    </>
  );
};

export default Form;
