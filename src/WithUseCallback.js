import React, { useState, memo, useCallback } from "react";

const WithUseCallback = () => {
  const [names, setNames] = useState([]);

  const addName = () => {
    const newNames = [...names];
    newNames.push("another name");
    setNames(newNames);
  };

  const clearNames = useCallback(() => setNames([]), [setNames]);

  return (
    <div>
      <h3>With UseCallback</h3>
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
  console.log("* WithUseCallback *");
  return (
    <div>
      <button onClick={props.clearNames}> Clear</button>
    </div>
  );
});

export default WithUseCallback;
