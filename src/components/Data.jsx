import React from "react";
import Datafield from "./Datafield";

const data = (props) => {
  const array = Object.entries(props.data);
  return (
    <div className="datadisplayarea">
      <table className="table">
        <tbody className="tableBody">
          <tr className="headingRow">
            <th className="dataHeading">Item Name</th>
            <th className="dataHeading"> Quantity</th>
            <th className="dataHeading">Unit</th>
          </tr>
          {array.map((key, value) => (
            <Datafield key={value} value={key} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default data;
