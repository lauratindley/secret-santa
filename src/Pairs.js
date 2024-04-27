import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";

export default function Pairs(props, index) {
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
    return names.slice();
  }
  const playerList = props.data;
  console.log(playerList);

  const copyOfList = playerList.slice();
  const playerListShuffled = shuffle(copyOfList);
  console.log(playerListShuffled);

  const columns = [
    { key: "id", name: "Your name" },
    { key: "title", name: "Your Secret Santa" },
  ];

  const rows = playerList.map(function (element, index) {
    return {
      id: element,
      title: playerListShuffled[index],
    };
  });

  return (
    <div>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
}

/*<div className="row">
      <div className="col-6">
        <th>Your Name</th>
        <ul>
          {playerList.map(function (element, index) {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
      <div className="col-6">
        <th>Your Secret Santa!</th>
        <ul>
          {playerListShuffled.map(function (element, index) {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
    </div>



<div className="col-6">
        <th>Your Name</th>
        <ul className="result-names">
          {playerList.map(function (element, index) {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
      <div className="col-6">
        <th>Your Secret Santa!</th>
        <ul className="result-names">
          {playerListShuffled.map(function (element, index) {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>




    */
