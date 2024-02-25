import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import Pairs from "./Pairs";
import "./SecretSanta.css";

export default function SecretSanta() {
  const [playerList, setPlayerList] = useState("");

  function createList() {
    setPlayerList([
      "Laura Tindley",
      "Lucy Scaramanaga",
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
        <ul className="names">
          <li>
            <input type="checkbox" id="lauraT" className="name"></input>
            <label className="name">Laura Tindley</label>
          </li>
          <li>
            <input type="checkbox" id="lucyS" className="name"></input>
            <label className="name">Lucy Scaramanga</label>
          </li>
          <li>
            <input type="checkbox" id="sarahPJ" className="name"></input>
            <label className="name">Sarah Parry-Jones</label>
          </li>
          <li>
            <input type="checkbox" id="katieW" className="name"></input>
            <label className="name">Katie Worthington</label>
          </li>
          <li>
            <input type="checkbox" id="samD" className="name"></input>
            <label className="name">Sam Dickinson</label>
          </li>
          <li>
            <input type="checkbox" id="SteveL" className="name"></input>
            <label className="name">Steve Long</label>
          </li>
        </ul>
      </form>
      <button
        type="button"
        className="btn btn-danger m-4"
        onClick={handleClick}
      >
        Find your match!
      </button>
      <Pairs data={playerList} />;
    </div>
  );
}
