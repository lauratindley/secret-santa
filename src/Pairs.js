import React from "react";

export default function Pairs(props, index) {
  console.log(props);
  return (
    <tbody>
      <tr>
        <th>Your Name</th>
        <th>Your Secret Santa!</th>
      </tr>
    </tbody>
  );
}

//for each entry in the list, create a new row
// need to use useEffect?
