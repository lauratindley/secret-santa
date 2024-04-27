import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import Pairs from "./Pairs";
import Checklist from "./Checklist";

import "./SecretSanta.css";

export default function SecretSanta() {
  const [playerList, setPlayerList] = useState([]);

  function createList() {
    setPlayerList([
      "Laura Tindley",
      "Lucy Scaramanga",
      "Sarah Parry-Jones",
      "Katie Worthington",
      "Sam Dickinson",
      "Steve Long",
    ]);
  }

  function handleClick(event) {
    event.preventDefault();
    createList();
  }

  return (
    <div className="nameList">
      <h1>Secret Santa 🎅</h1>
      <p>Who wants to join the Secret Santa this year?</p>
      <form>
        <Checklist />
      </form>
      <button
        type="button"
        className="btn btn-danger mt-3 mb-5"
        onClick={handleClick}
      >
        Find your match!
      </button>
      <Pairs data={playerList} />;
    </div>
  );
}

/* const getDefaultCheckboxes = checkboxesList.map(function (name, index) {
    return {
      id: name,
      checked: false,
      key: index,
    };
  }); */
