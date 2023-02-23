import React from "react";

const Datafield = (props) => {
  const { value } = props;
  return (
    <tr className="dataInRow">
      <td className="data">{value[0]}</td>
      <td className="data">{value[1]}</td>
      <td className="data">x</td>
    </tr>
  );
};

export default Datafield;
