import React from "react";
import Datafield from "./Datafield";

const data = (props) => {
  const array = Object.entries(props.data);
  return (
    <div className="datadisplayarea">
      <div className="tableField">
        <div>Item Name</div>
        <div>Quantity</div>
        <div>Unit</div>
        <div>Updates</div>
      </div>
      {array.map((key, value) => (
        <Datafield key={value} value={key} />
      ))}
    </div>
  );
};
export default data;
