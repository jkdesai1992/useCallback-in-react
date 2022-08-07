import React, { useState, memo } from "react";

const WithOutUseCallback = () => {
  const [names, setNames] = useState([]);

  const addName = () => {
    const newNames = [...names];
    newNames.push("another name");
    setNames(newNames);
  };

  const clearNames = () => {
    setNames([]);
  };

  return (
    <div>
      <h3>With Out UseCallback</h3>
      <button onClick={() => addName()}> Add Name </button>

      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>

      <ClearButton clearNames={clearNames} />
    </div>
  );
};

const ClearButton = memo((props) => {
  console.log("* WithOutUseCallback *");
  return (
    <div>
      <button onClick={props.clearNames}> Clear</button>
    </div>
  );
});

export default WithOutUseCallback;
