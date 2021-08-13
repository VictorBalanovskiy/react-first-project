import React, { useState, useRef } from "react";

export const Form = ({ name, handleNameChange }) => {
  const [surname, setsurName] = useState("");

  const ref = useRef(null);

  const handleSurnameChange = (e) => {
    setsurName(e.target.value);
  };

  const handleClick = () => {};

  return (
    <>
      <input type="text" value={name} onChange={handleNameChange} ref={ref} />{" "}
      <input type="text" value={surname} onChange={handleSurnameChange} />
      <button onClick={handleClick}>Click</button>
    </>
  );
};
