import React, { useState } from "react";
//import "react-data-grid/lib/styles.css";
//import DataGrid from "react-data-grid";

export default function Pairs(props, index) {
  //const [players, setPlayers] = useState("");

  const playerList = props.data;
  console.log(playerList);

  function shuffle(names) {
    let currentIndex = names.length,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [names[currentIndex], names[randomIndex]] = [
        names[randomIndex],
        names[currentIndex],
      ];
    }
    return names;
  }

  const playerListShuffled = shuffle(playerList);
  console.log(playerListShuffled);

  return (
    <div className="row">
      <div className="col-6">
        <ul>
          {playerList.map(function (element, index) {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
      <div className="col-6">
        <ul>
          {playerListShuffled.map(function (element, index) {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

/*
 const columns = [
    { key: "your-name", name: "Your Name" },
    { key: "secret-name", name: "Your Secret Santa!" },
  ];
  const rows = [
    { id: 0, title: "Example" },
    { id: 1, title: "Demo" },
  ];
  */

//   <DataGrid columns={columns} rows={rows} />;
