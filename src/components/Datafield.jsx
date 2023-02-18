import React from "react";

const Datafield = (props) => {
  const { value } = props;
  return (
    <div className="tableField">
      <div>{value[0]}</div>
      <div>{value[1]}</div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Datafield;
